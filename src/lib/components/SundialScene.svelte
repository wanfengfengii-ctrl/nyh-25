<script lang="ts">
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { sundialStore } from '$lib/stores/sundialStore';
  import { get } from 'svelte/store';
  import type { SundialType, ShadowPoint, ComparePresetData } from '$lib/types';
  import { COMPARE_COLORS } from '$lib/types';

  const {
    config,
    solarPosition,
    sunVisible,
    currentShadow,
    shadowTrack,
    hourMarks,
    comparePresetsData,
    keyDateTracks
  } = sundialStore;

  let containerRef: HTMLDivElement | null = null;

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let controls: OrbitControls;
  let sunLight: THREE.DirectionalLight;
  let ambientLight: THREE.AmbientLight;
  let gnomon: THREE.Mesh;
  let dialPlate: THREE.Mesh;
  let dialPlateGroup: THREE.Group;
  let shadowMesh: THREE.Mesh;
  let trackLine: THREE.Line;
  let hourMarkGroup: THREE.Group;
  let compareShadowMeshes: THREE.Mesh[] = [];
  let compareTrackLines: THREE.Line[] = [];
  let keyDateTrackLines: THREE.Line[] = [];

  let isMounted = $state(false);

  function initScene(container: HTMLDivElement) {
    const width = container.clientWidth;
    const height = container.clientHeight;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(4, 3, 5);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 15;
    controls.target.set(0, 0.5, 0);

    ambientLight = new THREE.AmbientLight(0x404060, 0.4);
    scene.add(ambientLight);

    sunLight = new THREE.DirectionalLight(0xfff5e6, 1.5);
    sunLight.position.set(5, 10, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 50;
    sunLight.shadow.camera.left = -10;
    sunLight.shadow.camera.right = 10;
    sunLight.shadow.camera.top = 10;
    sunLight.shadow.camera.bottom = -10;
    scene.add(sunLight);

    const groundGeo = new THREE.CircleGeometry(8, 64);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8,
      metalness: 0.2
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const gridHelper = new THREE.GridHelper(10, 20, 0x334155, 0x1e293b);
    scene.add(gridHelper);

    dialPlateGroup = new THREE.Group();
    scene.add(dialPlateGroup);

    const plateGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.08, 64);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xd4a574,
      roughness: 0.6,
      metalness: 0.4
    });
    dialPlate = new THREE.Mesh(plateGeo, plateMat);
    dialPlate.receiveShadow = true;
    dialPlate.castShadow = true;
    dialPlateGroup.add(dialPlate);

    hourMarkGroup = new THREE.Group();
    dialPlateGroup.add(hourMarkGroup);

    const gnomonGeo = new THREE.ConeGeometry(0.05, 1.2, 16);
    const gnomonMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.4,
      metalness: 0.7
    });
    gnomon = new THREE.Mesh(gnomonGeo, gnomonMat);
    gnomon.castShadow = true;
    gnomon.position.y = 0.6;
    dialPlateGroup.add(gnomon);

    const shadowGeo = new THREE.ConeGeometry(0.02, 2, 8);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3
    });
    shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.visible = false;
    dialPlateGroup.add(shadowMesh);

    for (let i = 0; i < 4; i++) {
      const compShadowGeo = new THREE.ConeGeometry(0.02, 2, 8);
      const compShadowMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(COMPARE_COLORS[i]),
        transparent: true,
        opacity: 0.5
      });
      const compMesh = new THREE.Mesh(compShadowGeo, compShadowMat);
      compMesh.visible = false;
      dialPlateGroup.add(compMesh);
      compareShadowMeshes.push(compMesh);
    }

    const trackGeo = new THREE.BufferGeometry();
    const trackMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.8
    });
    trackLine = new THREE.Line(trackGeo, trackMat);
    dialPlateGroup.add(trackLine);

    for (let i = 0; i < 4; i++) {
      const compTrackGeo = new THREE.BufferGeometry();
      const compTrackMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(COMPARE_COLORS[i]),
        transparent: true,
        opacity: 0.6
      });
      const compLine = new THREE.Line(compTrackGeo, compTrackMat);
      compLine.visible = false;
      dialPlateGroup.add(compLine);
      compareTrackLines.push(compLine);
    }

    for (let i = 0; i < 4; i++) {
      const kdTrackGeo = new THREE.BufferGeometry();
      const kdTrackMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.7,
        linewidth: 2
      });
      const kdLine = new THREE.Line(kdTrackGeo, kdTrackMat);
      kdLine.visible = false;
      dialPlateGroup.add(kdLine);
      keyDateTrackLines.push(kdLine);
    }

    const compassGroup = new THREE.Group();
    const compassMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8 });
    
    const nMarkerGeo = new THREE.ConeGeometry(0.08, 0.2, 4);
    const nMarker = new THREE.Mesh(nMarkerGeo, compassMat);
    nMarker.position.set(0, 0.1, -1.7);
    nMarker.rotation.x = Math.PI / 2;
    compassGroup.add(nMarker);

    scene.add(compassGroup);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', handleResize);

    return { cleanup: () => window.removeEventListener('resize', handleResize) };
  }

  function buildHourMarks(type: SundialType, latitude: number, gnomonLen: number) {
    while (hourMarkGroup.children.length > 0) {
      hourMarkGroup.remove(hourMarkGroup.children[0]);
    }

    const marks = get(hourMarks);
    const plateRadius = 1.5;

    const markMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.5,
      metalness: 0.3
    });

    for (const mark of marks) {
      const angle = mark.angle * Math.PI / 180;
      const dist = Math.min(mark.radius, plateRadius * 0.9);
      
      const x = Math.sin(angle) * dist;
      const z = Math.cos(angle) * dist;

      const markGeo = new THREE.BoxGeometry(0.02, 0.03, 0.1);
      const markMesh = new THREE.Mesh(markGeo, markMat);
      markMesh.position.set(x, 0.06, z);
      markMesh.rotation.y = -angle;
      hourMarkGroup.add(markMesh);
    }
  }

  function updateSundialType() {
    const cfg = get(config);
    const type = cfg.type;
    const latitude = cfg.latitude;
    const gnomonLen = cfg.gnomonLength;

    dialPlateGroup.rotation.set(0, 0, 0);
    dialPlate.position.y = 0.04;
    gnomon.position.set(0, gnomonLen / 2, 0);
    gnomon.rotation.set(0, 0, 0);

    switch (type) {
      case 'equatorial':
        dialPlateGroup.rotation.x = (90 - latitude) * Math.PI / 180;
        dialPlate.position.y = 0.8;
        gnomon.rotation.x = 0;
        gnomon.position.y = gnomonLen / 2 + 0.8;
        break;

      case 'horizontal':
        dialPlate.position.y = 0.04;
        gnomon.rotation.x = -latitude * Math.PI / 180;
        gnomon.position.set(0, gnomonLen / 2 * Math.cos(latitude * Math.PI / 180), 0);
        break;

      case 'vertical':
        dialPlateGroup.rotation.x = Math.PI / 2;
        dialPlate.position.set(0, 1.5, 0);
        gnomon.rotation.x = 0;
        gnomon.position.set(0, 1.5, gnomonLen / 2);
        gnomon.rotation.y = 0;
        break;
    }

    buildHourMarks(type, latitude, gnomonLen);
  }

  function updateSunPosition() {
    const solarPos = get(solarPosition);
    const visible = get(sunVisible);

    if (!visible) {
      sunLight.intensity = 0.2;
      shadowMesh.visible = false;
      return;
    }

    const altitude = solarPos.altitude * Math.PI / 180;
    const azimuth = solarPos.azimuth * Math.PI / 180;

    const distance = 20;
    const x = Math.sin(azimuth) * Math.cos(altitude) * distance;
    const y = Math.sin(altitude) * distance;
    const z = Math.cos(azimuth) * Math.cos(altitude) * distance;

    sunLight.position.set(x, y, z);
    sunLight.intensity = 1.5;

    updateShadow();
  }

  function positionShadowMesh(
    mesh: THREE.Mesh,
    shadow: ShadowPoint,
    type: SundialType,
    latitude: number
  ) {
    const shadowLen = Math.min(shadow.length, 4);
    mesh.scale.y = shadowLen / 2;
    
    const angle = shadow.angle * Math.PI / 180;
    
    if (type === 'horizontal') {
      mesh.rotation.x = Math.PI / 2;
      mesh.position.x = Math.sin(angle) * shadowLen / 2;
      mesh.position.z = Math.cos(angle) * shadowLen / 2;
      mesh.position.y = 0.05;
    } else if (type === 'equatorial') {
      mesh.position.y = 0.8 + 0.05;
      mesh.rotation.x = Math.PI / 2 - (90 - latitude) * Math.PI / 180;
      const localAngle = angle;
      mesh.position.x = Math.sin(localAngle) * shadowLen / 2;
      mesh.position.z = Math.cos(localAngle) * shadowLen / 2 * Math.cos((90 - latitude) * Math.PI / 180);
    } else if (type === 'vertical') {
      mesh.rotation.x = 0;
      mesh.rotation.y = -angle;
      mesh.position.z = shadowLen / 2;
      mesh.position.y = 1.5;
      mesh.position.x = Math.sin(angle) * shadowLen / 2;
    }
  }

  function updateShadow() {
    const shadow = get(currentShadow);
    const visible = get(sunVisible);
    const cfg = get(config);

    if (!visible || !shadow || !cfg.showCurrentPoint) {
      shadowMesh.visible = false;
    } else {
      shadowMesh.visible = true;
      positionShadowMesh(shadowMesh, shadow, cfg.type, cfg.latitude);
    }

    const compData = get(comparePresetsData);
    
    for (let i = 0; i < 4; i++) {
      if (i < compData.length && cfg.compareMode && cfg.showCurrentPoint) {
        const data = compData[i];
        if (data.shadow && data.sunVisible) {
          compareShadowMeshes[i].visible = true;
          positionShadowMesh(
            compareShadowMeshes[i],
            data.shadow,
            data.preset.type,
            data.preset.latitude
          );
        } else {
          compareShadowMeshes[i].visible = false;
        }
      } else {
        compareShadowMeshes[i].visible = false;
      }
    }
  }

  function buildTrackLine(
    line: THREE.Line,
    track: ShadowPoint[],
    type: SundialType,
    latitude: number
  ) {
    const positions = new Float32Array(track.length * 3);

    for (let i = 0; i < track.length; i++) {
      const p = track[i];
      const angle = p.angle * Math.PI / 180;
      const dist = Math.min(p.length, 4);

      if (type === 'horizontal') {
        positions[i * 3] = Math.sin(angle) * dist;
        positions[i * 3 + 1] = 0.05;
        positions[i * 3 + 2] = Math.cos(angle) * dist;
      } else if (type === 'equatorial') {
        const latRad = (90 - latitude) * Math.PI / 180;
        positions[i * 3] = Math.sin(angle) * dist;
        positions[i * 3 + 1] = 0.8 + Math.sin(latRad) * dist * Math.cos(angle);
        positions[i * 3 + 2] = Math.cos(angle) * dist * Math.cos(latRad);
      } else {
        positions[i * 3] = Math.sin(angle) * dist;
        positions[i * 3 + 1] = 1.5;
        positions[i * 3 + 2] = Math.cos(angle) * dist;
      }
    }

    line.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    line.geometry.computeBoundingSphere();
  }

  function updateTrackLine() {
    const cfg = get(config);
    const track = get(shadowTrack);

    if (!cfg.showTrack || !track || track.length === 0) {
      trackLine.visible = false;
    } else {
      trackLine.visible = true;
      buildTrackLine(trackLine, track, cfg.type, cfg.latitude);
    }

    const compData = get(comparePresetsData);
    
    for (let i = 0; i < 4; i++) {
      if (i < compData.length && cfg.compareMode && cfg.showTrack) {
        const data = compData[i];
        if (data.shadowTrack && data.shadowTrack.length > 0) {
          compareTrackLines[i].visible = true;
          buildTrackLine(
            compareTrackLines[i],
            data.shadowTrack,
            data.preset.type,
            data.preset.latitude
          );
        } else {
          compareTrackLines[i].visible = false;
        }
      } else {
        compareTrackLines[i].visible = false;
      }
    }

    const kdData = get(keyDateTracks);
    for (let i = 0; i < 4; i++) {
      if (i < kdData.length && cfg.showTrack) {
        const data = kdData[i];
        if (data.shadowTrack && data.shadowTrack.length > 0) {
          keyDateTrackLines[i].visible = true;
          (keyDateTrackLines[i].material as THREE.LineBasicMaterial).color.set(data.color);
          buildTrackLine(
            keyDateTrackLines[i],
            data.shadowTrack,
            cfg.type,
            cfg.latitude
          );
        } else {
          keyDateTrackLines[i].visible = false;
        }
      } else {
        keyDateTrackLines[i].visible = false;
      }
    }
  }

  $effect(() => {
    if (!isMounted) return;
    const cfg = $config;
    const solarPos = $solarPosition;
    const visible = $sunVisible;
    const shadow = $currentShadow;
    const track = $shadowTrack;
    const compData = $comparePresetsData;
    const kdTracks = $keyDateTracks;
    const marks = $hourMarks;

    updateSundialType();
    updateSunPosition();
    updateShadow();
    updateTrackLine();
  });

  $effect(() => {
    if (!containerRef) return;

    const { cleanup } = initScene(containerRef);
    isMounted = true;

    updateSundialType();
    updateSunPosition();
    updateShadow();
    updateTrackLine();

    return () => {
      cleanup();
      renderer.dispose();
    };
  });
</script>

<div class="w-full h-full relative" bind:this={containerRef}>
  {#if !$sunVisible}
    <div class="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm
                rounded-lg border border-slate-600/50 text-sm text-slate-300 z-10">
      太阳位于地平线以下
    </div>
  {/if}
  
  {#if $config.compareMode && $comparePresetsData.length > 0}
    <div class="absolute top-4 right-4 flex flex-col gap-1 z-10">
      {#each $comparePresetsData as data, index}
        <div class="px-3 py-1.5 backdrop-blur-sm rounded-lg border text-xs flex items-center gap-2"
             style="background-color: {data.color}20; border-color: {data.color}60; color: {data.color}">
          <span class="w-2 h-2 rounded-full" style="background-color: {data.color}"></span>
          {data.preset.name}
        </div>
      {/each}
    </div>
  {/if}
  
  <div class="absolute bottom-4 left-4 text-xs text-slate-500 z-10">
    拖拽旋转 · 滚轮缩放
  </div>
</div>
