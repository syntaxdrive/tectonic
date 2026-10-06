"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Eye, Box, Sparkles, MapPin } from "lucide-react";

export function TectonicHeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scene = new THREE.Scene();
    // Warm, sophisticated architectural studio background
    scene.background = new THREE.Color(0x18181b);
    scene.fog = new THREE.FogExp2(0x18181b, 0.035);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(4.8, 3.2, 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ==========================================
    // ARCHITECTURAL VILLA / PAVILION STRUCTURE
    // ==========================================

    // 1. Concrete Ground Plinth / Platform
    const plinthGeo = new THREE.BoxGeometry(4.2, 0.2, 4.2);
    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0x27272a,
      roughness: 0.85,
      metalness: 0.1,
    });
    const plinth = new THREE.Mesh(plinthGeo, concreteMat);
    plinth.position.y = -0.1;
    plinth.receiveShadow = true;
    mainGroup.add(plinth);

    // Subtle Grid Floor Stepping Tile
    const gridHelper = new THREE.GridHelper(6, 12, 0x3f3f46, 0x27272a);
    gridHelper.position.y = -0.2;
    mainGroup.add(gridHelper);

    // 2. Warm Timber / Rich Wood Deck
    const deckGeo = new THREE.BoxGeometry(3.6, 0.08, 3.6);
    const woodMat = new THREE.MeshStandardMaterial({
      color: 0x524134,
      roughness: 0.65,
      metalness: 0.05,
    });
    const woodDeck = new THREE.Mesh(deckGeo, woodMat);
    woodDeck.position.y = 0.04;
    woodDeck.receiveShadow = true;
    mainGroup.add(woodDeck);

    // 3. Architectural Concrete Core Wall
    const coreWallGeo = new THREE.BoxGeometry(0.3, 1.8, 2.4);
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x3f3f46,
      roughness: 0.9,
      metalness: 0.05,
    });
    const coreWall = new THREE.Mesh(coreWallGeo, stoneMat);
    coreWall.position.set(-0.8, 0.95, 0);
    coreWall.castShadow = true;
    coreWall.receiveShadow = true;
    mainGroup.add(coreWall);

    // 4. Cantilevered Architectural Roof (Modern Minimalist Slabs)
    const roofGeo = new THREE.BoxGeometry(4.0, 0.14, 3.8);
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f23,
      roughness: 0.4,
      metalness: 0.3,
    });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(0.1, 1.9, 0);
    roof.castShadow = true;
    mainGroup.add(roof);

    // Secondary Upper Roof Pergola
    const upperRoofGeo = new THREE.BoxGeometry(2.4, 0.08, 2.2);
    const upperRoof = new THREE.Mesh(upperRoofGeo, roofMat);
    upperRoof.position.set(-0.4, 2.05, -0.2);
    mainGroup.add(upperRoof);

    // 5. Architectural Glass Curtain Wall (Double Glazed Transmission)
    const glassGeo = new THREE.BoxGeometry(0.06, 1.8, 2.2);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4d4d8,
      transparent: true,
      opacity: 0.38,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.7,
      ior: 1.5,
    });
    const glassWall = new THREE.Mesh(glassGeo, glassMat);
    glassWall.position.set(0.7, 0.95, 0.1);
    mainGroup.add(glassWall);

    // Front Glass Panel
    const frontGlassGeo = new THREE.BoxGeometry(1.6, 1.8, 0.06);
    const frontGlass = new THREE.Mesh(frontGlassGeo, glassMat);
    frontGlass.position.set(-0.1, 0.95, 1.15);
    mainGroup.add(frontGlass);

    // 6. Structural Steel Pillars (Dark Matte Bronze)
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x27272a,
      metalness: 0.85,
      roughness: 0.3,
    });
    const pillarGeo = new THREE.CylinderGeometry(0.045, 0.045, 1.8, 16);

    const pillarCoords = [
      [1.6, 0.95, 1.4],
      [1.6, 0.95, -1.4],
      [-1.5, 0.95, 1.4],
      [-1.5, 0.95, -1.4],
    ];
    pillarCoords.forEach(([px, py, pz]) => {
      const p = new THREE.Mesh(pillarGeo, pillarMat);
      p.position.set(px, py, pz);
      p.castShadow = true;
      mainGroup.add(p);
    });

    // 7. Interior Minimalist Architectural Furnishing (Lounge Bench & Table)
    const benchGeo = new THREE.BoxGeometry(1.2, 0.3, 0.5);
    const benchMat = new THREE.MeshStandardMaterial({
      color: 0xa1a1aa,
      roughness: 0.7,
    });
    const bench = new THREE.Mesh(benchGeo, benchMat);
    bench.position.set(-0.2, 0.22, 0.1);
    bench.castShadow = true;
    mainGroup.add(bench);

    // 8. Architectural Planter with Minimalist Greenery
    const planterGeo = new THREE.BoxGeometry(0.5, 0.4, 0.5);
    const planterMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.8 });
    const planter = new THREE.Mesh(planterGeo, planterMat);
    planter.position.set(1.2, 0.25, -0.9);
    mainGroup.add(planter);

    const foliageGeo = new THREE.DodecahedronGeometry(0.3, 1);
    const foliageMat = new THREE.MeshStandardMaterial({
      color: 0x3f5b45,
      roughness: 0.8,
    });
    const foliage = new THREE.Mesh(foliageGeo, foliageMat);
    foliage.position.set(1.2, 0.6, -0.9);
    foliage.castShadow = true;
    mainGroup.add(foliage);

    // ==========================================
    // LIGHTING & AMBIANCE
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 0.7);
    scene.add(ambientLight);

    // Warm Interior Ceiling Downlight
    const interiorLight = new THREE.PointLight(0xfef08a, 2.4, 4.5);
    interiorLight.position.set(0, 1.7, 0);
    scene.add(interiorLight);

    // Sun / Architectural Key Light
    const sunLight = new THREE.DirectionalLight(0xffedd5, 2.5);
    sunLight.position.set(6, 8, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 25;
    scene.add(sunLight);

    // Soft Blue Fill Light from Sky
    const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.9);
    fillLight.position.set(-5, 4, -4);
    scene.add(fillLight);

    // ==========================================
    // MOUSE INTERACTION & ORBIT CONTROL
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };

    container.addEventListener("mousemove", onMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    camera.lookAt(0, 0.8, 0);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle continuous ambient rotation + smooth responsive mouse parallax
      targetRotY = mouseX * 0.45 + elapsedTime * 0.08;
      targetRotX = mouseY * 0.2;

      mainGroup.rotation.y = targetRotY;
      mainGroup.rotation.x = THREE.MathUtils.lerp(mainGroup.rotation.x, targetRotX, 0.04);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", onMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full min-h-[460px] md:min-h-[520px] flex items-center justify-center overflow-hidden bg-zinc-900 select-none"
    >
      {/* Top Left Floating Tag: Real Model Indicator */}
      <div className="absolute left-4 sm:left-8 top-6 sm:top-8 z-20 max-w-[280px] bg-zinc-950/85 backdrop-blur-md p-4 rounded-xl border border-zinc-800 text-left pointer-events-auto shadow-2xl">
        <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono mb-1.5 font-semibold">
          <Box className="w-3.5 h-3.5 text-zinc-400" />
          <span>REAL-TIME 3D SPATIAL ENGINE</span>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
          Interactive architectural model rendered at 60 FPS in WebGL. Move your cursor to orbit and inspect materials.
        </p>
        <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>PBR Textures: Concrete &bull; Timber &bull; Glass</span>
          <span className="text-emerald-400 font-semibold">60 FPS</span>
        </div>
      </div>

      {/* Top Right: Studio Location Badge */}
      <div className="absolute right-4 sm:right-8 top-6 sm:top-8 z-20 bg-zinc-950/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-zinc-800 text-left pointer-events-auto shadow-xl flex items-center gap-2.5">
        <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
        <div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase">Engineered In</div>
          <div className="text-xs font-bold text-zinc-200 font-mono">
            Ibadan, Nigeria &bull; GMT+1
          </div>
        </div>
      </div>

      {/* Bottom Center: Interactive Capability Callout */}
      <div className="absolute bottom-6 inset-x-4 sm:inset-x-8 z-20 max-w-xl mx-auto bg-zinc-950/85 backdrop-blur-md p-3.5 rounded-xl border border-zinc-800 text-left pointer-events-auto shadow-2xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-200 shrink-0">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-zinc-200">
              Show Before You Build
            </div>
            <div className="text-[11px] text-zinc-400">
              Interactive property tours, product configurators, and equipment renders for web.
            </div>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">
          <Sparkles className="w-3 h-3 text-zinc-400" />
          Three.js
        </span>
      </div>
    </div>
  );
}
