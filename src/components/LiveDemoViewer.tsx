"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  X,
  Check,
  RotateCcw,
  CreditCard,
  FileCheck,
} from "lucide-react";

interface LiveDemoViewerProps {
  demoId: "threejs" | "commerce" | "contracts" | "fintech";
  onClose: () => void;
}

export function LiveDemoViewer({ demoId, onClose }: LiveDemoViewerProps) {
  const [activeTab, setActiveTab] = useState(demoId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl max-w-4xl w-full h-[90vh] max-h-[820px] shadow-2xl border border-zinc-200 flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar Navigation */}
        <div className="px-6 py-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
          <div>
            <div className="text-sm font-semibold text-zinc-950 font-sans">
              Architectural Verification Sandbox
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              Live functional runtime demonstration
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Demo Switcher Tabs */}
            <div className="hidden sm:flex bg-zinc-200/70 p-0.5 rounded-lg text-xs font-mono">
              <button
                onClick={() => setActiveTab("threejs")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "threejs"
                    ? "bg-white text-zinc-950 shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                3D Configurator
              </button>
              <button
                onClick={() => setActiveTab("commerce")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "commerce"
                    ? "bg-white text-zinc-950 shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                Commerce &amp; POS
              </button>
              <button
                onClick={() => setActiveTab("contracts")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "contracts"
                    ? "bg-white text-zinc-950 shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                Escrow Signature
              </button>
              <button
                onClick={() => setActiveTab("fintech")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "fintech"
                    ? "bg-white text-zinc-950 shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                Underwriting API
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-zinc-200 text-zinc-600 transition-colors"
              aria-label="Close Sandbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sandbox Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-zinc-100/60">
          {activeTab === "threejs" && <ThreeJsDemo />}
          {activeTab === "commerce" && <CommerceDemo />}
          {activeTab === "contracts" && <ContractsDemo />}
          {activeTab === "fintech" && <FintechDemo />}
        </div>

        {/* Bottom Banner */}
        <div className="px-6 py-3.5 bg-white border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="text-zinc-600">
            Source codebase, architecture models, and deployment configurations are fully transferable.
          </div>
          <a
            href="#contact"
            onClick={onClose}
            className="px-4 py-2 rounded bg-zinc-950 text-white font-sans font-semibold text-xs hover:bg-zinc-800 transition-all shrink-0"
          >
            Inquire About Implementation
          </a>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 1. THREE.JS 3D CONFIGURATOR (SOBER & ARCHITECTURAL)
// -----------------------------------------------------------------------------
function ThreeJsDemo() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("#27272a");
  const [wireframe, setWireframe] = useState(false);
  const [speed, setSpeed] = useState(1);
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1, 0.32, 128, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color),
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 0.6,
      wireframe: wireframe,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    const ambient = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambient);
    const dir1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dir1.position.set(3, 4, 3);
    scene.add(dir1);
    const dir2 = new THREE.DirectionalLight(0xa1a1aa, 1.2);
    dir2.position.set(-3, -3, 3);
    scene.add(dir2);

    let mouseX = 0;
    let mouseY = 0;
    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    container.addEventListener("mousemove", handleMove);

    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime() * speed;
      mesh.rotation.y = elapsed * 0.2 + mouseX * 0.5;
      mesh.rotation.x = elapsed * 0.1 + mouseY * 0.3;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshPhysicalMaterial;
      mat.color.set(color);
      mat.wireframe = wireframe;
    }
  }, [color, wireframe]);

  return (
    <div className="h-full flex flex-col lg:flex-row gap-4">
      {/* 3D Canvas Box */}
      <div className="flex-1 bg-zinc-950 rounded-xl relative overflow-hidden flex items-center justify-center min-h-[300px] border border-zinc-800">
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
        <div className="absolute top-4 left-4 bg-zinc-900/90 px-2.5 py-1 rounded text-zinc-300 font-mono text-[11px] border border-zinc-800">
          WebGL 60 FPS • Real-Time PBR Shader
        </div>
      </div>

      {/* Control Panel */}
      <div className="w-full lg:w-72 bg-white rounded-xl p-5 border border-zinc-200 flex flex-col justify-between">
        <div>
          <div className="text-xs font-mono font-medium text-zinc-400 uppercase">Interactive Configurator</div>
          <h4 className="text-sm font-semibold text-zinc-950 mt-1 mb-4">
            Physically Based Rendering
          </h4>

          <label className="block text-xs font-mono uppercase text-zinc-600 mb-2">
            Material Finish
          </label>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {[
              { id: "#27272a", name: "Titanium Charcoal" },
              { id: "#09090b", name: "Obsidian Black" },
              { id: "#52525b", name: "Zinc Grey" },
              { id: "#047857", name: "Deep Emerald" },
              { id: "#0369a1", name: "Baltic Blue" },
              { id: "#b45309", name: "Architectural Bronze" },
              { id: "#4c1d95", name: "Imperial Slate" },
              { id: "#e4e4e7", name: "Brushed Aluminium" },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => setColor(c.id)}
                className={`h-8 rounded border transition-all ${
                  color === c.id ? "border-zinc-950 ring-1 ring-zinc-950" : "border-zinc-300"
                }`}
                style={{ backgroundColor: c.id }}
                title={c.name}
              />
            ))}
          </div>

          <label className="block text-xs font-mono uppercase text-zinc-600 mb-2">
            Geometry View
          </label>
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setWireframe(false)}
              className={`flex-1 py-1.5 rounded text-xs font-mono font-medium border transition-all ${
                !wireframe
                  ? "bg-zinc-950 text-white border-zinc-950"
                  : "bg-zinc-50 text-zinc-700 border-zinc-200"
              }`}
            >
              Solid PBR
            </button>
            <button
              onClick={() => setWireframe(true)}
              className={`flex-1 py-1.5 rounded text-xs font-mono font-medium border transition-all ${
                wireframe
                  ? "bg-zinc-950 text-white border-zinc-950"
                  : "bg-zinc-50 text-zinc-700 border-zinc-200"
              }`}
            >
              Wireframe
            </button>
          </div>

          <label className="block text-xs font-mono uppercase text-zinc-600 mb-1">
            Rotation Velocity: {speed}x
          </label>
          <input
            type="range"
            min="0"
            max="3"
            step="0.5"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-full accent-zinc-950 cursor-pointer"
          />
        </div>

        <div className="pt-4 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
          Engine: Three.js core. Zero third-party runtime dependencies.
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 2. COMMERCE & PAYSTACK POS SIMULATOR (CLEAN & METRIC-DRIVEN)
// -----------------------------------------------------------------------------
function CommerceDemo() {
  const [lagosStock, setLagosStock] = useState(48);
  const [kanoStock, setKanoStock] = useState(32);
  const [cart, setCart] = useState(1);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success">("idle");
  const [webhookLogs, setWebhookLogs] = useState<string[]>([
    "19:42:01 [System] Listener initialized: POST /api/webhooks/paystack",
  ]);

  const unitPrice = 45000;

  const handleSimulatePayment = () => {
    setPaymentStatus("processing");
    setWebhookLogs((prev) => [
      `${new Date().toLocaleTimeString()} [Paystack API] Charge initiated: ₦${(
        cart * unitPrice
      ).toLocaleString()} NGN...`,
      ...prev,
    ]);

    setTimeout(() => {
      setLagosStock((prev) => Math.max(0, prev - cart));
      setPaymentStatus("success");
      setWebhookLogs((prev) => [
        `${new Date().toLocaleTimeString()} [Paystack 200 OK] Event: charge.success (Transaction ID: trx_89104)`,
        `${new Date().toLocaleTimeString()} [Inventory Service] Decremented ${cart} units from Ikeja Hub. Remaining: ${
          lagosStock - cart
        }`,
        `${new Date().toLocaleTimeString()} [SMS Gateway] Notification dispatched to customer terminal`,
        ...prev,
      ]);
    }, 1200);
  };

  const handleReset = () => {
    setLagosStock(48);
    setKanoStock(32);
    setCart(1);
    setPaymentStatus("idle");
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-4">
      {/* Product & Checkout Box */}
      <div className="flex-1 bg-white rounded-xl p-6 border border-zinc-200 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-medium uppercase text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
              Medusa.js + Paystack Integration
            </span>
            <button
              onClick={handleReset}
              className="text-xs font-mono text-zinc-500 hover:text-zinc-950 flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          <h3 className="text-lg font-semibold text-zinc-950">
            Industrial Logistics Scanner Hub
          </h3>
          <p className="text-xs text-zinc-500 font-mono mt-0.5 mb-4">
            SKU: TECT-POS-09 • Headless Storefront Item
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
              <div className="text-[10px] uppercase font-mono text-zinc-500">Ikeja Warehouse Stock</div>
              <div className="text-xl font-bold font-mono text-zinc-950 mt-1">{lagosStock} Units</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
              <div className="text-[10px] uppercase font-mono text-zinc-500">Kano Distribution Hub</div>
              <div className="text-xl font-bold font-mono text-zinc-950 mt-1">{kanoStock} Units</div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 mb-6 font-mono text-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-zinc-500">Unit Price:</span>
              <span className="font-semibold text-zinc-900">₦{unitPrice.toLocaleString()} NGN</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-zinc-500">Order Quantity:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCart((c) => Math.max(1, c - 1))}
                  className="w-5 h-5 rounded bg-zinc-200 font-bold flex items-center justify-center hover:bg-zinc-300"
                >
                  -
                </button>
                <span className="font-bold w-5 text-center">{cart}</span>
                <button
                  onClick={() => setCart((c) => Math.min(lagosStock, c + 1))}
                  className="w-5 h-5 rounded bg-zinc-200 font-bold flex items-center justify-center hover:bg-zinc-300"
                >
                  +
                </button>
              </div>
            </div>
            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between font-bold text-sm text-zinc-950">
              <span>Settlement Total:</span>
              <span>₦{(cart * unitPrice).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div>
          {paymentStatus === "idle" && (
            <button
              onClick={handleSimulatePayment}
              className="w-full py-3 px-4 rounded-lg bg-zinc-950 text-white font-sans font-semibold text-xs hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Simulate Paystack Authorization (₦{(cart * unitPrice).toLocaleString()})</span>
            </button>
          )}

          {paymentStatus === "processing" && (
            <div className="w-full py-3 px-4 rounded-lg bg-zinc-800 text-white font-mono text-xs text-center">
              Awaiting webhook payload verification...
            </div>
          )}

          {paymentStatus === "success" && (
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-300 text-center font-mono text-xs">
              <div className="font-semibold text-zinc-950">Transaction Settled &amp; Inventory Synchronized</div>
              <div className="text-[11px] text-zinc-500 mt-0.5">Webhook verified with cryptographic HMAC signature.</div>
            </div>
          )}
        </div>
      </div>

      {/* Webhook Log Console */}
      <div className="w-full lg:w-80 bg-zinc-950 rounded-xl p-5 border border-zinc-800 text-white flex flex-col font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-400">
          <span className="font-bold text-zinc-200">Webhook Telemetry</span>
          <span className="text-[10px] text-zinc-500">HTTP Port 3000</span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 py-4 text-[11px] leading-relaxed">
          {webhookLogs.map((log, idx) => (
            <div
              key={idx}
              className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono"
            >
              {log}
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-zinc-800 text-[10px] text-zinc-500">
          Idempotent webhook queue with Redis deduplication.
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 3. CRYPTOGRAPHIC ESCROW SIGNING (DOCUMENSO CORE)
// -----------------------------------------------------------------------------
function ContractsDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [isAnchored, setIsAnchored] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = "#18181b";
    ctx.lineWidth = 2.0;
    ctx.lineCap = "round";
  }, []);

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDraw = () => setIsDrawing(false);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
    setIsAnchored(false);
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-4">
      {/* Contract Document Preview */}
      <div className="flex-1 bg-white rounded-xl p-6 border border-zinc-200 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-4">
            <div>
              <div className="text-xs font-mono font-medium uppercase text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded inline-block">
                Documenso Core v1.4
              </div>
              <h3 className="text-base font-semibold text-zinc-950 mt-1">
                Milestone Escrow Agreement (Ref: 2026-AFR)
              </h3>
            </div>
            <div className="text-right text-xs text-zinc-500 font-mono">
              Status: <span className="text-zinc-900 font-bold">{isAnchored ? "Signed" : "Pending Signature"}</span>
            </div>
          </div>

          <div className="text-xs text-zinc-600 font-mono leading-relaxed space-y-2 bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            <p><strong>Parties:</strong> AfriTrust Capital Ltd (London) &amp; Tectonic NG Technologies (Lagos).</p>
            <p><strong>Release Condition:</strong> Passing automated test suite and production build verification.</p>
            <p><strong>Escrow Value:</strong> $4,500.00 USD (Regulated Domiciliary Depository).</p>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-zinc-600 mb-1">
              <span>Digital Execution Signature:</span>
              {hasSignature && (
                <button onClick={clearSignature} className="text-[11px] text-zinc-500 hover:text-zinc-900 underline font-normal">
                  Clear
                </button>
              )}
            </div>
            <div className="border border-zinc-300 rounded-lg overflow-hidden bg-white">
              <canvas
                ref={canvasRef}
                width={500}
                height={100}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={stopDraw}
                onMouseLeave={stopDraw}
                className="w-full h-24 cursor-crosshair"
              />
            </div>
            <div className="text-[10px] text-zinc-400 font-mono mt-1">
              Draw to generate cryptographically signed audit certificate.
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            disabled={!hasSignature || isAnchored}
            onClick={() => setIsAnchored(true)}
            className={`w-full py-3 px-4 rounded-lg font-sans font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
              hasSignature && !isAnchored
                ? "bg-zinc-950 text-white hover:bg-zinc-800 cursor-pointer"
                : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>{isAnchored ? "Cryptographic Signature Sealed" : "Anchor Digital Signature"}</span>
          </button>
        </div>
      </div>

      {/* Cryptographic Inspector */}
      <div className="w-full lg:w-80 bg-zinc-950 rounded-xl p-5 border border-zinc-800 text-white flex flex-col justify-between font-mono text-xs">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-400">
            <span className="font-bold text-zinc-200">Legal Audit Trail</span>
            <span className="text-[10px] text-zinc-500">Evidence Act 2011</span>
          </div>

          <div className="mt-4 space-y-3 text-[11px]">
            <div>
              <div className="text-zinc-500 uppercase text-[10px]">Document Hash</div>
              <div className="text-zinc-300 break-all mt-0.5">
                sha256:8f9a2e41b369cd71...
              </div>
            </div>

            <div>
              <div className="text-zinc-500 uppercase text-[10px]">Timestamp Authority</div>
              <div className="text-zinc-300 mt-0.5">DigiCert Global CA</div>
            </div>

            <div>
              <div className="text-zinc-500 uppercase text-[10px]">Verification State</div>
              <div className="mt-0.5">
                {isAnchored ? (
                  <span className="text-zinc-200 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-zinc-400" /> Tamper-Proof Certified
                  </span>
                ) : (
                  <span className="text-zinc-500">Awaiting Signature</span>
                )}
              </div>
            </div>

            {isAnchored && (
              <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] leading-relaxed">
                Cryptographic hash anchored. Immutable PDF record sealed for legal enforcement.
              </div>
            )}
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-800 text-[10px] text-zinc-500">
          Standard: ISO 27001 &amp; Nigerian Data Protection Regulation compliant.
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 4. FINTECH CREDIT SCORING SANDBOX (NESTJS MICROSERVICE)
// -----------------------------------------------------------------------------
function FintechDemo() {
  const [turnover, setTurnover] = useState(8500000);
  const [creditHistory, setCreditHistory] = useState(720);
  const [monthsActive, setMonthsActive] = useState(24);
  const [apiResult, setApiResult] = useState<any>({
    status: "APPROVED",
    maxCreditLimit: "₦3,400,000",
    interestRate: "2.4% / month",
    riskClassification: "Tier-A",
    decisionLatency: "38ms",
  });

  const recalculate = (t: number, c: number, m: number) => {
    let limit = Math.round((t * 0.4 * (c / 800) * (m / 24)));
    setApiResult({
      status: c >= 620 ? "APPROVED" : "MANUAL_AUDIT_REQUIRED",
      maxCreditLimit: `₦${limit.toLocaleString()}`,
      interestRate: c >= 700 ? "2.2% / month" : "3.1% / month",
      riskClassification: c >= 740 ? "Tier-A+" : c >= 680 ? "Tier-A" : "Tier-B",
      decisionLatency: "41ms",
    });
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-4">
      {/* Parameters Panel */}
      <div className="flex-1 bg-white rounded-xl p-6 border border-zinc-200 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-4">
            <span className="text-xs font-mono font-medium uppercase text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
              NestJS Microservice
            </span>
            <span className="text-xs text-zinc-400 font-mono">POST /api/v1/credit-assessment</span>
          </div>

          <h3 className="text-base font-semibold text-zinc-950 mb-1">
            Algorithmic Borrower Underwriting
          </h3>
          <p className="text-xs text-zinc-500 font-mono mb-5">
            Real-time evaluation model interfacing with transaction ledgers.
          </p>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono text-zinc-600 mb-1">
                <span>Verified Monthly Turnover:</span>
                <span className="font-bold text-zinc-900">₦{turnover.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000000"
                max="25000000"
                step="500000"
                value={turnover}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setTurnover(val);
                  recalculate(val, creditHistory, monthsActive);
                }}
                className="w-full accent-zinc-950 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-zinc-600 mb-1">
                <span>Credit Bureau Score (CRC):</span>
                <span className="font-bold text-zinc-900">{creditHistory} / 850</span>
              </div>
              <input
                type="range"
                min="500"
                max="850"
                step="10"
                value={creditHistory}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setCreditHistory(val);
                  recalculate(turnover, val, monthsActive);
                }}
                className="w-full accent-zinc-950 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-zinc-600 mb-1">
                <span>Operating History:</span>
                <span className="font-bold text-zinc-900">{monthsActive} Months</span>
              </div>
              <input
                type="range"
                min="6"
                max="60"
                step="3"
                value={monthsActive}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setMonthsActive(val);
                  recalculate(turnover, creditHistory, val);
                }}
                className="w-full accent-zinc-950 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-600">Runtime: NestJS + PostgreSQL + Redis</span>
          <span className="text-zinc-900 font-bold">Sub-50ms Execution</span>
        </div>
      </div>

      {/* JSON Response Terminal */}
      <div className="w-full lg:w-80 bg-zinc-950 rounded-xl p-5 border border-zinc-800 text-white flex flex-col justify-between font-mono text-xs">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-400">
            <span className="font-bold text-zinc-200">HTTP 200 OK</span>
            <span className="text-[10px] text-zinc-500">{apiResult.decisionLatency}</span>
          </div>

          <pre className="mt-4 p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-[11px] text-zinc-200 overflow-x-auto leading-relaxed">
{JSON.stringify(apiResult, null, 2)}
          </pre>
        </div>

        <div className="pt-3 border-t border-zinc-800 text-[10px] text-zinc-500">
          Automated decision output formatted for direct loan origination.
        </div>
      </div>
    </div>
  );
}
