"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Check, Shield, Layers, Terminal } from "lucide-react";

export function TectonicHeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Architectural Monolithic Core
    const coreGeometry = new THREE.IcosahedronGeometry(1.4, 0);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x09090b,
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 0.8,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Geodesic Wireframe Lattice
    const wireGeometry = new THREE.IcosahedronGeometry(1.65, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xa1a1aa,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    mainGroup.add(wireMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    directionalLight1.position.set(4, 5, 4);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xd4d4d8, 1.5);
    directionalLight2.position.set(-4, -3, 3);
    scene.add(directionalLight2);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

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

    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.5 - targetY) * 0.05;

      coreMesh.rotation.y = elapsedTime * 0.15 + targetX;
      coreMesh.rotation.x = Math.sin(elapsedTime * 0.1) * 0.15 + targetY;

      wireMesh.rotation.y = -elapsedTime * 0.1 + targetX * 0.5;

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
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full min-h-[460px] md:min-h-[520px] flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      {/* Subtle gradient horizon */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60 pointer-events-none" />

      {/* Top Left Architecture Card */}
      <div className="absolute left-4 sm:left-8 top-8 sm:top-10 z-20 max-w-[280px] bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-zinc-800 text-left pointer-events-auto shadow-2xl">
        <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mb-2">
          <span>PIPELINE VERIFIED</span>
          <span className="text-zinc-300 font-semibold">STAGING</span>
        </div>
        <p className="text-xs text-zinc-200 font-mono leading-relaxed">
          Next.js 16 + NestJS microservice architecture. PostgreSQL connection pooling and Paystack webhook validation active.
        </p>
        <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span>LATENCY: 42ms</span>
          <span className="text-zinc-300 font-bold">PASS 100%</span>
        </div>
      </div>

      {/* Top Right Continuity & Timezone Badge */}
      <div className="absolute right-4 sm:right-8 top-8 sm:top-10 z-20 bg-zinc-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-zinc-800 text-left pointer-events-auto shadow-xl">
        <div className="text-[11px] font-mono text-zinc-400">TIMEZONE ALIGNMENT</div>
        <div className="text-xs font-bold text-zinc-200 font-mono mt-0.5">
          GMT+1 (Lagos / London Real-Time Sync)
        </div>
      </div>

      {/* Bottom Center Governance Strip */}
      <div className="absolute bottom-6 inset-x-4 sm:inset-x-8 z-20 max-w-xl mx-auto bg-zinc-900/90 backdrop-blur-md p-3.5 rounded-xl border border-zinc-800 text-left pointer-events-auto shadow-2xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-zinc-200">
              Contract &amp; IP Governance
            </div>
            <div className="text-[11px] text-zinc-400">
              100% Source Code &amp; Infrastructure Ownership upon Milestone Clearance.
            </div>
          </div>
        </div>
        <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-400 uppercase tracking-wider bg-zinc-800 px-2 py-1 rounded">
          CAC Reg: RC-741908
        </span>
      </div>
    </div>
  );
}
