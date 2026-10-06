"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { ModelCardViewer } from "./ModelCardViewer";

export function PillarsSection() {
  const pillars = [
    {
      id: "realestate",
      badge: "Segment 01",
      title: "Real Estate & Architecture",
      subtitle: "Help buyers see it before it is built. Interactive 3D walkthroughs, photorealistic renders, and property websites that close deals faster.",
      modelPath: "/models/sofa.glb",
      modelBadge: "Architectural Interior",
      features: [
        "Interactive architectural walkthroughs with real-world materials and lighting",
        "Property listing sites with booking, virtual tour, and inquiry flow",
        "Photorealistic renders of homes and developments — no photoshoot required",
        "Estate agent portfolio sites that stand out from templated competitors",
      ],
      ctaText: "Inquire on Real Estate",
    },
    {
      id: "retail",
      badge: "Segment 02",
      title: "Retail, Fashion & Products",
      subtitle: "Showcase your products in stunning detail. Real-time 3D configurators, brand-forward online stores, and business tools that run your operations.",
      modelPath: "/models/rolex.glb",
      modelBadge: "Product Configurator",
      features: [
        "3D product configurators — change colour, material, and finish in real time",
        "Online stores and lookbooks with fast mobile checkout",
        "Inventory, order management, and invoice automation",
        "Automated customer notifications and scheduling tools",
      ],
      ctaText: "Inquire on Retail",
    },
    {
      id: "international",
      badge: "Segment 03",
      title: "Robotics & Engineering",
      subtitle: "Premium web and 3D production from Ibadan, delivered to international standards. Billed in USD or GBP with clear milestones and full ownership.",
      modelPath: "/models/robot.glb",
      modelBadge: "Robotics Assembly",
      features: [
        "Photorealistic Three.js and WebGL production for European and UK clients",
        "Full-stack websites and web applications in Next.js",
        "Direct GMT+1 timezone alignment with London and European teams",
        "Fixed-scope delivery with 100% intellectual property assignment",
      ],
      ctaText: "Inquire on Engineering",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">
            Who We Work With
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Built for brands that want to stand out
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
            Whether you need a professional website, an automated business tool, or a photorealistic 3D visualization — we deliver work that earns attention.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-zinc-200/80 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-200 text-zinc-700">
                    {pillar.badge}
                  </span>
                </div>

                {/* Live 3D Interactive Model Embed */}
                <div className="mb-5">
                  <ModelCardViewer
                    modelPath={pillar.modelPath}
                    badgeLabel={pillar.modelBadge}
                    heightClass="h-44 sm:h-48"
                  />
                </div>

                <h3 className="text-xl font-semibold text-zinc-950 tracking-tight mb-2">
                  {pillar.title}
                </h3>

                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  {pillar.subtitle}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-zinc-200 text-xs text-zinc-600">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg bg-zinc-950 text-white font-semibold text-xs hover:bg-zinc-800 transition-all"
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
