"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Sparkles, Eye, RotateCw, MapPin, Layers } from "lucide-react";

interface ModelOption {
  id: string;
  name: string;
  category: string;
  path: string;
  description: string;
  materialsBadge: string;
}

const MODEL_OPTIONS: ModelOption[] = [
  {
    id: "robot",
    name: "Autonomous Robotics Unit",
    category: "Robotics & Automation",
    path: "/models/robot.glb",
    description: "Multi-joint articulated robotics system with mechanical PBR alloys and animated servos.",
    materialsBadge: "Powder-coated Alloy • Anodized Steel",
  },
  {
    id: "ferrari",
    name: "Automotive Body & Chassis",
    category: "Automotive Engineering",
    path: "/models/ferrari.glb",
    description: "Curved aerodynamics with metallic clearcoat lacquer, transparent glass, and rubber treads.",
    materialsBadge: "Clearcoat Metallic • Tinted Glass • Carbon Trim",
  },
  {
    id: "rolex",
    name: "Precision Chronograph",
    category: "Luxury Physical Product",
    path: "/models/rolex.glb",
    description: "Mechanical watch assembly with brushed 904L steel, sapphire crystal, and dial relief.",
    materialsBadge: "Brushed 904L Steel • Sapphire Crystal",
  },
  {
    id: "sofa",
    name: "Architectural Interior Lounge",
    category: "Interior Architecture",
    path: "/models/sofa.glb",
    description: "Contemporary seating with physically modeled velvet micro-sheen and polished brass legs.",
    materialsBadge: "Velvet Sheen • Polished Brass • Hardwood",
  },
];

export function TectonicHeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState<ModelOption>(MODEL_OPTIONS[0]);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Store active scene controls and model ref
  const activeSceneRef = useRef<{
    loadModel: (path: string) => void;
  } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x131316);
    scene.fog = new THREE.FogExp2(0x131316, 0.04);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(3.4, 2.2, 4.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.75;
    controls.maxPolarAngle = Math.PI / 2 + 0.05; // don't go below floor
    controls.minDistance = 1.8;
    controls.maxDistance = 8.5;
    controls.target.set(0, 0.7, 0);

    // ==========================================
    // STUDIO PEDESTAL & GROUND PLANE
    // ==========================================
    const pedestalGroup = new THREE.Group();
    scene.add(pedestalGroup);

    // Pedestal Cylinder
    const pedestalGeo = new THREE.CylinderGeometry(2.2, 2.3, 0.2, 48);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x1c1c21,
      roughness: 0.8,
      metalness: 0.15,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.1;
    pedestal.receiveShadow = true;
    pedestalGroup.add(pedestal);

    // Subtle outer ring glow / border
    const ringGeo = new THREE.RingGeometry(2.25, 2.32, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x3f3f46,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.005;
    pedestalGroup.add(ring);

    // Studio Floor Grid
    const floorGrid = new THREE.GridHelper(8, 16, 0x27272a, 0x18181b);
    floorGrid.position.y = -0.2;
    scene.add(floorGrid);

    // ==========================================
    // STUDIO LIGHTING SETUP
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.1);
    scene.add(ambientLight);

    // Key Light (Warm daylight)
    const keyLight = new THREE.DirectionalLight(0xffedd5, 2.4);
    keyLight.position.set(5, 7, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Fill Light (Cool sky soft fill)
    const fillLight = new THREE.DirectionalLight(0x93c5fd, 1.2);
    fillLight.position.set(-4, 3, -3);
    scene.add(fillLight);

    // Rim / Backlight for separation
    const rimLight = new THREE.DirectionalLight(0xfef08a, 1.0);
    rimLight.position.set(0, 4, -5);
    scene.add(rimLight);

    // ==========================================
    // DYNAMIC MODEL LOADER
    // ==========================================
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    let currentModel: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    const loadModel = (modelPath: string) => {
      setLoading(true);
      setLoadProgress(15);

      // Remove existing model
      if (currentModel) {
        modelGroup.remove(currentModel);
        currentModel.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry?.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m) => m.dispose());
            } else {
              mesh.material?.dispose();
            }
          }
        });
        currentModel = null;
      }
      if (mixer) {
        mixer.stopAllAction();
        mixer = null;
      }

      loader.load(
        modelPath,
        (gltf) => {
          currentModel = gltf.scene;

          // Enable shadows and physical materials
          currentModel.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              if (mesh.material) {
                // Ensure materials respond accurately to environment
                if ((mesh.material as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
                  (mesh.material as THREE.MeshStandardMaterial).envMapIntensity = 1.0;
                }
              }
            }
          });

          // Compute bounding box and normalize scale & position
          const box = new THREE.Box3().setFromObject(currentModel);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const targetScale = 2.1 / (maxDim || 1);

          currentModel.scale.setScalar(targetScale);
          currentModel.position.set(
            -center.x * targetScale,
            -box.min.y * targetScale, // sit exactly on pedestal top (y = 0)
            -center.z * targetScale
          );

          modelGroup.add(currentModel);

          // If animations exist, play first one (e.g. Robot idle/wave)
          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(currentModel);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
          }

          setLoading(false);
          setLoadProgress(100);
        },
        (progress) => {
          if (progress.total > 0) {
            const pct = Math.round((progress.loaded / progress.total) * 100);
            setLoadProgress(pct);
          }
        },
        (error) => {
          console.error("Error loading 3D model:", error);
          setLoading(false);
        }
      );
    };

    activeSceneRef.current = { loadModel };

    // Initial load
    loadModel(selectedModel.path);

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
      const delta = clock.getDelta();

      if (mixer) {
        mixer.update(delta);
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      controls.dispose();
      dracoLoader.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  // Handle switching model from UI buttons
  const handleSelectModel = (model: ModelOption) => {
    setSelectedModel(model);
    if (activeSceneRef.current) {
      activeSceneRef.current.loadModel(model.path);
    }
  };

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full min-h-[500px] md:min-h-[560px] flex items-center justify-center overflow-hidden bg-zinc-950 select-none cursor-grab active:cursor-grabbing"
    >
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-30 bg-zinc-950/75 backdrop-blur-xs flex flex-col items-center justify-center gap-3 text-white pointer-events-none transition-opacity">
          <RotateCw className="w-6 h-6 animate-spin text-zinc-400" />
          <div className="text-xs font-mono text-zinc-300">
            Streaming GLTF Geometry &bull; {loadProgress}%
          </div>
        </div>
      )}

      {/* Top Left Floating Spec Card */}
      <div className="absolute left-4 sm:left-8 top-6 sm:top-8 z-20 max-w-[290px] bg-zinc-950/85 backdrop-blur-md p-4 rounded-xl border border-zinc-800 text-left pointer-events-auto shadow-2xl">
        <div className="flex items-center justify-between text-xs font-mono mb-1.5">
          <span className="text-zinc-400 font-semibold uppercase">{selectedModel.category}</span>
          <span className="text-emerald-400 font-bold">60 FPS</span>
        </div>
        <h3 className="text-sm font-semibold text-white tracking-tight">
          {selectedModel.name}
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed mt-1.5 font-sans">
          {selectedModel.description}
        </p>
        <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>{selectedModel.materialsBadge}</span>
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

      {/* Bottom Floating Selector Bar */}
      <div className="absolute bottom-6 inset-x-4 sm:inset-x-8 z-20 max-w-2xl mx-auto bg-zinc-950/90 backdrop-blur-md p-2 rounded-2xl border border-zinc-800 text-left pointer-events-auto shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Model Switcher Pills */}
        <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto p-1">
          {MODEL_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelectModel(opt)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                selectedModel.id === opt.id
                  ? "bg-white text-zinc-950 font-bold shadow-sm"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {opt.name.split(" ")[0]} ({opt.category.split(" ")[0]})
            </button>
          ))}
        </div>

        {/* Orbit Hint */}
        <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-zinc-400 pr-3">
          <Eye className="w-3.5 h-3.5" />
          <span>Click &amp; Drag to Orbit 360&deg;</span>
        </div>
      </div>
    </div>
  );
}
