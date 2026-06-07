import type { PhotoAnalysisResult, PhotoAnalysisPoint, PhotoExtractedMetadata } from '$lib/types';
import { RAD_TO_DEG, DEG_TO_RAD, getAngleBetweenPoints as mathGetAngle } from '$lib/utils/math';

export async function extractPhotoMetadata(file: File): Promise<PhotoExtractedMetadata> {
  const metadata: PhotoExtractedMetadata = {};

  try {
    const arrayBuffer = await file.arrayBuffer();
    const dataView = new DataView(arrayBuffer);

    if (dataView.getUint16(0) !== 0xffd8) {
      return metadata;
    }

    let offset = 2;
    const fileLength = dataView.byteLength;

    while (offset < fileLength - 4) {
      const marker = dataView.getUint16(offset);
      const segmentLength = dataView.getUint16(offset + 2);

      if (marker === 0xffe1) {
        const exifStart = offset + 4;
        const exifData = parseEXIF(dataView, exifStart, segmentLength - 2);
        Object.assign(metadata, exifData);
        break;
      }

      offset += 2 + segmentLength;
    }
  } catch {
    // Silently fail if metadata extraction fails
  }

  if (!metadata.dateTime && file.lastModified) {
    metadata.dateTime = new Date(file.lastModified).toISOString();
  }

  return metadata;
}

function parseEXIF(dataView: DataView, start: number, length: number): PhotoExtractedMetadata {
  const metadata: PhotoExtractedMetadata = {};
  const exifSignature = String.fromCharCode(
    dataView.getUint8(start),
    dataView.getUint8(start + 1),
    dataView.getUint8(start + 2),
    dataView.getUint8(start + 3),
    dataView.getUint8(start + 4)
  );

  if (exifSignature !== 'Exif\0') {
    return metadata;
  }

  const tiffStart = start + 6;
  const byteOrder = dataView.getUint16(tiffStart);
  const littleEndian = byteOrder === 0x4949;

  function getUint16(offset: number): number {
    return dataView.getUint16(tiffStart + offset, littleEndian);
  }

  function getUint32(offset: number): number {
    return dataView.getUint32(tiffStart + offset, littleEndian);
  }

  const firstIFDOffset = getUint32(4);

  function readIFD(ifdOffset: number): Map<number, number[]> {
    const entries = new Map<number, number[]>();
    const entryCount = getUint16(ifdOffset);

    for (let i = 0; i < entryCount; i++) {
      const entryOffset = ifdOffset + 2 + i * 12;
      const tag = getUint16(entryOffset);
      const type = getUint16(entryOffset + 2);
      const count = getUint32(entryOffset + 4);

      let values: number[] = [];

      if (type === 3 && count === 1) {
        values = [getUint16(entryOffset + 8)];
      } else if (type === 4 && count === 1) {
        values = [getUint32(entryOffset + 8)];
      } else if (type === 7) {
        const valueOffset = getUint32(entryOffset + 8);
        for (let j = 0; j < count; j++) {
          values.push(dataView.getUint8(tiffStart + valueOffset + j));
        }
      } else {
        const valueOffset = getUint32(entryOffset + 8);
        for (let j = 0; j < count; j++) {
          if (type === 5) {
            const num = getUint32(valueOffset + j * 8);
            const den = getUint32(valueOffset + j * 8 + 4);
            values.push(num / den);
          } else if (type === 3) {
            values.push(getUint16(valueOffset + j * 2));
          }
        }
      }

      entries.set(tag, values);
    }

    return entries;
  }

  const ifd0 = readIFD(firstIFDOffset);

  const dateTimeTag = 0x0132;
  if (ifd0.has(dateTimeTag)) {
    const dateBytes = ifd0.get(dateTimeTag)!;
    const dateStr = String.fromCharCode(...dateBytes).replace(/\0/g, '');
    const match = dateStr.match(/(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
    if (match) {
      const date = new Date(
        parseInt(match[1]),
        parseInt(match[2]) - 1,
        parseInt(match[3]),
        parseInt(match[4]),
        parseInt(match[5]),
        parseInt(match[6])
      );
      metadata.dateTime = date.toISOString();
    }
  }

  const makeTag = 0x010f;
  if (ifd0.has(makeTag)) {
    const makeBytes = ifd0.get(makeTag)!;
    metadata.deviceMake = String.fromCharCode(...makeBytes).replace(/\0/g, '').trim();
  }

  const modelTag = 0x0110;
  if (ifd0.has(modelTag)) {
    const modelBytes = ifd0.get(modelTag)!;
    metadata.deviceModel = String.fromCharCode(...modelBytes).replace(/\0/g, '').trim();
  }

  const gpsIFDOffsetTag = 0x8825;
  if (ifd0.has(gpsIFDOffsetTag)) {
    const gpsOffset = ifd0.get(gpsIFDOffsetTag)![0];
    const gpsIFD = readIFD(gpsOffset);

    const gpsLatitudeRef = 0x0001;
    const gpsLatitude = 0x0002;
    const gpsLongitudeRef = 0x0003;
    const gpsLongitude = 0x0004;
    const gpsAltitudeRef = 0x0005;
    const gpsAltitude = 0x0006;

    if (gpsIFD.has(gpsLatitude) && gpsIFD.has(gpsLatitudeRef)) {
      const latRefBytes = gpsIFD.get(gpsLatitudeRef)!;
      const latRef = String.fromCharCode(latRefBytes[0]);
      const latValues = gpsIFD.get(gpsLatitude)!;
      const lat = latValues[0] + latValues[1] / 60 + latValues[2] / 3600;
      metadata.latitude = latRef === 'N' ? lat : -lat;
    }

    if (gpsIFD.has(gpsLongitude) && gpsIFD.has(gpsLongitudeRef)) {
      const lonRefBytes = gpsIFD.get(gpsLongitudeRef)!;
      const lonRef = String.fromCharCode(lonRefBytes[0]);
      const lonValues = gpsIFD.get(gpsLongitude)!;
      const lon = lonValues[0] + lonValues[1] / 60 + lonValues[2] / 3600;
      metadata.longitude = lonRef === 'E' ? lon : -lon;
    }

    if (gpsIFD.has(gpsAltitude)) {
      const altRef = gpsIFD.has(gpsAltitudeRef) ? gpsIFD.get(gpsAltitudeRef)![0] : 0;
      const altValues = gpsIFD.get(gpsAltitude)!;
      metadata.altitude = altRef === 1 ? -altValues[0] : altValues[0];
    }
  }

  const exifIFDOffsetTag = 0x8769;
  if (ifd0.has(exifIFDOffsetTag)) {
    const exifOffset = ifd0.get(exifIFDOffsetTag)![0];
    const exifIFD = readIFD(exifOffset);

    const dateTimeOriginalTag = 0x9003;
    if (exifIFD.has(dateTimeOriginalTag)) {
      const dateBytes = exifIFD.get(dateTimeOriginalTag)!;
      const dateStr = String.fromCharCode(...dateBytes).replace(/\0/g, '');
      const match = dateStr.match(/(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
      if (match) {
        const date = new Date(
          parseInt(match[1]),
          parseInt(match[2]) - 1,
          parseInt(match[3]),
          parseInt(match[4]),
          parseInt(match[5]),
          parseInt(match[6])
        );
        metadata.dateTime = date.toISOString();
      }
    }
  }

  return metadata;
}

export function createEmptyPhotoAnalysis(): PhotoAnalysisResult {
  return {
    gnomonTip: null,
    gnomonBase: null,
    shadowTip: null,
    shadowBase: null,
    horizonLine: null,
    gnomonLengthPixels: 0,
    shadowLengthPixels: 0,
    shadowAngle: 0,
    confidence: 0,
    method: 'manual',
  };
}

export function calculatePhotoMetrics(analysis: PhotoAnalysisResult): PhotoAnalysisResult {
  let gnomonLengthPixels = 0;
  let shadowLengthPixels = 0;
  let shadowAngle = 0;

  if (analysis.gnomonTip && analysis.gnomonBase) {
    const dx = analysis.gnomonTip.x - analysis.gnomonBase.x;
    const dy = analysis.gnomonTip.y - analysis.gnomonBase.y;
    gnomonLengthPixels = Math.sqrt(dx * dx + dy * dy);
  }

  if (analysis.shadowTip && analysis.shadowBase) {
    const dx = analysis.shadowTip.x - analysis.shadowBase.x;
    const dy = analysis.shadowTip.y - analysis.shadowBase.y;
    shadowLengthPixels = Math.sqrt(dx * dx + dy * dy);
    shadowAngle = (Math.atan2(dy, dx) * RAD_TO_DEG + 360) % 360;
  }

  return {
    ...analysis,
    gnomonLengthPixels,
    shadowLengthPixels,
    shadowAngle,
  };
}

export function convertPixelToRealLength(
  pixelLength: number,
  gnomonPixelLength: number,
  gnomonRealLength: number
): number {
  if (gnomonPixelLength === 0) return 0;
  return (pixelLength / gnomonPixelLength) * gnomonRealLength;
}

export function estimateShadowDirectionFromAngle(
  angleDegrees: number,
  horizonAngle: number = 90
): number {
  const angleFromHorizon = angleDegrees - horizonAngle;
  return (angleFromHorizon + 360) % 360;
}

export async function autoAnalyzePhoto(imageSrc: string): Promise<PhotoAnalysisResult> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        resolve(createEmptyPhotoAnalysis());
        return;
      }

      const maxSize = 800;
      const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const analysis = analyzeImageData(imageData, canvas.width, canvas.height);

      resolve(analysis);
    };

    img.onerror = () => {
      resolve(createEmptyPhotoAnalysis());
    };

    img.src = imageSrc;
  });
}

function analyzeImageData(
  imageData: ImageData,
  width: number,
  height: number
): PhotoAnalysisResult {
  const data = imageData.data;

  const brightnessData: number[] = [];
  for (let i = 0; i < data.length; i += 4) {
    const brightness = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    brightnessData.push(brightness);
  }

  const bottomThirdStart = Math.floor(height * 0.6);
  let darkestRow = bottomThirdStart;
  let minAvgBrightness = 255;

  for (let y = bottomThirdStart; y < height - 10; y++) {
    let rowSum = 0;
    let count = 0;
    for (let x = 0; x < width; x += 4) {
      const idx = y * width + x;
      rowSum += brightnessData[idx];
      count++;
    }
    const avg = rowSum / count;
    if (avg < minAvgBrightness) {
      minAvgBrightness = avg;
      darkestRow = y;
    }
  }

  const shadowRow = darkestRow + 5;
  let shadowStartX = -1;
  let shadowEndX = -1;
  let shadowMinBrightness = 255;
  let shadowMinX = -1;

  for (let x = 0; x < width; x++) {
    const idx = shadowRow * width + x;
    const b = brightnessData[idx];
    if (b < shadowMinBrightness) {
      shadowMinBrightness = b;
      shadowMinX = x;
    }
  }

  const threshold = shadowMinBrightness + 40;
  for (let x = 0; x < width; x++) {
    const idx = shadowRow * width + x;
    const b = brightnessData[idx];
    if (b < threshold) {
      if (shadowStartX === -1) shadowStartX = x;
      shadowEndX = x;
    }
  }

  let gnomonTip: PhotoAnalysisPoint | null = null;
  let gnomonBase: PhotoAnalysisPoint | null = null;
  let shadowTip: PhotoAnalysisPoint | null = null;
  let shadowBase: PhotoAnalysisPoint | null = null;
  let horizonLine: { start: PhotoAnalysisPoint; end: PhotoAnalysisPoint } | null = null;
  let confidence = 0;

  if (shadowMinX !== -1) {
    shadowTip = { x: shadowMinX, y: shadowRow };

    let baseY = -1;
    for (let y = shadowRow; y >= height * 0.3; y--) {
      const idx = y * width + shadowMinX;
      const b = brightnessData[idx];
      if (b > threshold + 30) {
        baseY = y;
        break;
      }
    }

    if (baseY === -1) baseY = Math.floor(height * 0.5);

    shadowBase = { x: shadowMinX, y: baseY };
    gnomonBase = { x: shadowMinX, y: baseY };
    gnomonTip = {
      x: shadowMinX,
      y: Math.max(0, baseY - (shadowRow - baseY) * 0.8),
    };

    confidence = 0.4;
  }

  const horizonY = Math.floor(height * 0.5);
  horizonLine = {
    start: { x: 0, y: horizonY },
    end: { x: width, y: horizonY },
  };

  const result: PhotoAnalysisResult = {
    gnomonTip,
    gnomonBase,
    shadowTip,
    shadowBase,
    horizonLine,
    gnomonLengthPixels: 0,
    shadowLengthPixels: 0,
    shadowAngle: 0,
    confidence,
    method: 'auto',
  };

  return calculatePhotoMetrics(result);
}

export function snapToHorizon(
  point: PhotoAnalysisPoint,
  horizon: { start: PhotoAnalysisPoint; end: PhotoAnalysisPoint },
  snapDistance: number = 20
): PhotoAnalysisPoint {
  const horizonY =
    horizon.start.y +
    ((horizon.end.y - horizon.start.y) * (point.x - horizon.start.x)) /
      (horizon.end.x - horizon.start.x);

  if (Math.abs(point.y - horizonY) < snapDistance) {
    return { x: point.x, y: horizonY };
  }
  return point;
}

export function getDistance(p1: PhotoAnalysisPoint, p2: PhotoAnalysisPoint): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function getAngleBetweenPoints(
  p1: PhotoAnalysisPoint,
  p2: PhotoAnalysisPoint
): number {
  return mathGetAngle(p1.x, p1.y, p2.x, p2.y);
}

export function applyAnalysisToInput(
  analysis: PhotoAnalysisResult,
  gnomonRealLength: number,
  baseShadowDirection: number = 180
): { shadowLength: number; shadowDirection: number } {
  let shadowLength = 0;
  let shadowDirection = baseShadowDirection;

  if (analysis.gnomonLengthPixels > 0 && analysis.shadowLengthPixels > 0) {
    shadowLength =
      (analysis.shadowLengthPixels / analysis.gnomonLengthPixels) * gnomonRealLength;
  }

  if (analysis.shadowTip && analysis.shadowBase) {
    const angle = getAngleBetweenPoints(analysis.shadowBase, analysis.shadowTip);
    if (analysis.horizonLine) {
      const horizonAngle = getAngleBetweenPoints(
        analysis.horizonLine.start,
        analysis.horizonLine.end
      );
      shadowDirection = (angle - horizonAngle + baseShadowDirection + 360) % 360;
    }
  }

  return { shadowLength, shadowDirection };
}
