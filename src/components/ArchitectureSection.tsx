import React from "react";
import { Server, Database, Box, RefreshCw, Check } from "lucide-react";

export function ArchitectureSection() {
  const stackLayers = [
    {
      category: "Frontend & Spatial WebGL",
      tech: "Next.js 16 • React 19 • Three.js",
      description: "Sub-second edge rendering and physically based 3D rendering engineered for high Core Web Vitals.",
      highlights: [
        "Interactive 3D configurators with Three.js & WebGL",
        "Sub-second mobile Core Web Vitals and dynamic SEO rendering",
        "Low-bandwidth data compression for cellular networks",
      ],
      icon: Box,
    },
    {
      category: "Enterprise Backend Architecture",
      tech: "NestJS • Node.js • Express • TypeScript",
      description: "Domain-driven architecture structured for dependency injection, testability, and auditability.",
      highlights: [
        "Modular domain microservices with clean architectural boundaries",
        "OpenAPI / Swagger automated endpoint contract generation",
        "Stateless JWT auth with strict Role-Based Access Control (RBAC)",
      ],
      icon: Server,
    },
    {
      category: "Relational Persistence & Cache",
      tech: "PostgreSQL • MySQL • Redis • Prisma / Drizzle",
      description: "ACID-compliant storage infrastructure engineered for transaction auditability and concurrency.",
      highlights: [
        "Row-level locking preventing race condition over-allocations",
        "Sub-5ms session cache and deduplication via Redis",
        "Automated migration pipelines and off-site backup snapshots",
      ],
      icon: Database,
    },
    {
      category: "Payment & Webhook Infrastructure",
      tech: "Paystack • Flutterwave • Stripe • Queue Workers",
      description: "Idempotent payment rails designed to withstand dropped connections and gateway timeouts.",
      highlights: [
        "Dual-currency checkout rails (NGN + USD/GBP/EUR)",
        "Zero-drop queue processing for asynchronous payment webhooks",
        "Automated split settlement ledgers for marketplace platforms",
      ],
      icon: RefreshCw,
    },
  ];

  return (
    <section id="stack" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-600 uppercase tracking-wider mb-4">
            Technical Standards
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Full-Stack TypeScript &amp; Relational Architecture
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Strict type safety across the entire lifecycle. No untyped scripts or unmaintainable CMS themes.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <div
                key={index}
                className="bg-zinc-50/60 rounded-xl p-8 border border-zinc-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase text-zinc-400">
                      Tier 0{index + 1}
                    </span>
                    <div className="w-8 h-8 rounded bg-white border border-zinc-200 flex items-center justify-center text-zinc-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-950 mb-1">
                    {layer.category}
                  </h3>
                  <div className="text-xs font-mono font-medium text-zinc-600 mb-3">
                    {layer.tech}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {layer.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-zinc-200 text-xs font-mono text-zinc-700">
                    {layer.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
