<script lang="ts">
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { sundialStore } from '$lib/stores/sundialStore';
  import { get } from 'svelte/store';
  import type { SundialType, ShadowPoint } from '$lib/types';

  const { config, solarPosition, sunVisible, currentShadow, shadowTrack, hourMarks } = sundialStore;

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

  let isMounted = false;

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

    const trackGeo = new THREE.BufferGeometry();
    const trackMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.8
    });
    trackLine = new THREE.Line(trackGeo, trackMat);
    dialPlateGroup.add(trackLine);

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

  function updateShadow() {
    const shadow = get(currentShadow);
    const visible = get(sunVisible);
    const cfg = get(config);

    if (!visible || !shadow) {
      shadowMesh.visible = false;
      return;
    }

    shadowMesh.visible = true;

    const shadowLen = Math.min(shadow.length, 4);
    shadowMesh.scale.y = shadowLen / 2;
    
    const angle = shadow.angle * Math.PI / 180;
    
    if (cfg.type === 'horizontal') {
      shadowMesh.rotation.x = Math.PI / 2;
      shadowMesh.position.x = Math.sin(angle) * shadowLen / 2;
      shadowMesh.position.z = Math.cos(angle) * shadowLen / 2;
      shadowMesh.position.y = 0.05;
    } else if (cfg.type === 'equatorial') {
      shadowMesh.position.y = 0.8 + 0.05;
      shadowMesh.rotation.x = Math.PI / 2 - (90 - cfg.latitude) * Math.PI / 180;
      const localAngle = angle;
      shadowMesh.position.x = Math.sin(localAngle) * shadowLen / 2;
      shadowMesh.position.z = Math.cos(localAngle) * shadowLen / 2 * Math.cos((90 - cfg.latitude) * Math.PI / 180);
    } else if (cfg.type === 'vertical') {
      shadowMesh.rotation.x = 0;
      shadowMesh.rotation.y = -angle;
      shadowMesh.position.z = shadowLen / 2;
      shadowMesh.position.y = 1.5;
      shadowMesh.position.x = Math.sin(angle) * shadowLen / 2;
    }
  }

  function updateTrackLine() {
    const cfg = get(config);
    const track = get(shadowTrack);
    const showTrack = cfg.showTrack;

    if (!showTrack || !track || track.length === 0) {
      trackLine.visible = false;
      return;
    }

    trackLine.visible = true;
    const positions = new Float32Array(track.length * 3);

    for (let i = 0; i < track.length; i++) {
      const p = track[i] as ShadowPoint;
      const angle = p.angle * Math.PI / 180;
      const dist = Math.min(p.length, 4);

      if (cfg.type === 'horizontal') {
        positions[i * 3] = Math.sin(angle) * dist;
        positions[i * 3 + 1] = 0.05;
        positions[i * 3 + 2] = Math.cos(angle) * dist;
      } else if (cfg.type === 'equatorial') {
        const latRad = (90 - cfg.latitude) * Math.PI / 180;
        positions[i * 3] = Math.sin(angle) * dist;
        positions[i * 3 + 1] = 0.8 + Math.sin(latRad) * dist * Math.cos(angle);
        positions[i * 3 + 2] = Math.cos(angle) * dist * Math.cos(latRad);
      } else {
        positions[i * 3] = Math.sin(angle) * dist;
        positions[i * 3 + 1] = 1.5;
        positions[i * 3 + 2] = Math.cos(angle) * dist;
      }
    }

    trackLine.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    trackLine.geometry.computeBoundingSphere();
  }

  $effect(() => {
    if (!isMounted) return;
    updateSundialType();
    updateSunPosition();
    updateTrackLine();
  });

  $effect(() => {
    if (!containerRef) return;

    const { cleanup } = initScene(containerRef);
    isMounted = true;

    updateSundialType();
    updateSunPosition();
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
  
  <div class="absolute bottom-4 left-4 text-xs text-slate-500 z-10">
    拖拽旋转 · 滚轮缩放
  </div>
</div>
