"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RotateCw, Eye } from "lucide-react";

interface ModelCardViewerProps {
  modelPath: string;
  heightClass?: string;
  badgeLabel?: string;
  autoRotateSpeed?: number;
  initialCameraZ?: number;
}

export function ModelCardViewer({
  modelPath,
  heightClass = "h-48 sm:h-56",
  badgeLabel,
  autoRotateSpeed = 0.8,
  initialCameraZ = 3.6,
}: ModelCardViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isVisible = false;
    let animationFrameId: number;

    const scene = new THREE.Scene();
    scene.background = null; // transparent background

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 200;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.4, initialCameraZ);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = autoRotateSpeed;
    controls.enableZoom = false; // keep card scroll natural on mobile
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.target.set(0, 0.35, 0);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffedd5, 2.2);
    keyLight.position.set(4, 5, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 1.0);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    // Dynamic Model Loading
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    let mixer: THREE.AnimationMixer | null = null;

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const targetScale = 1.9 / (maxDim || 1);

        model.scale.setScalar(targetScale);
        model.position.set(
          -center.x * targetScale,
          -box.min.y * targetScale,
          -center.z * targetScale
        );

        modelGroup.add(model);

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          const action = mixer.clipAction(gltf.animations[0]);
          action.play();
        }

        setLoading(false);
      },
      undefined,
      (err) => {
        console.error("Failed to load model:", err);
        setLoading(false);
      }
    );

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Performance: Only animate when visible on screen
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      controls.update();
      renderer.render(scene, camera);
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    intersectionObserver.observe(container);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      controls.dispose();
      dracoLoader.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [modelPath, autoRotateSpeed, initialCameraZ]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full ${heightClass} rounded-xl overflow-hidden bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-center cursor-grab active:cursor-grabbing select-none`}
    >
      {/* Subtle radial studio glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0,transparent_70%)] pointer-events-none" />

      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 text-zinc-400 font-mono text-xs z-10">
          <RotateCw className="w-4 h-4 animate-spin text-zinc-500" />
          <span>Loading 3D asset...</span>
        </div>
      )}

      {/* Optional Badge */}
      {badgeLabel && (
        <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300 pointer-events-none flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{badgeLabel}</span>
        </div>
      )}

      {/* Interactive Drag Hint */}
      <div className="absolute bottom-2 right-2.5 z-10 text-[10px] font-mono text-zinc-500 pointer-events-none flex items-center gap-1 opacity-70">
        <Eye className="w-3 h-3" />
        <span>Drag 360&deg;</span>
      </div>
    </div>
  );
}
