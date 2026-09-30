"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Play } from "lucide-react";
import { LiveDemoViewer } from "./LiveDemoViewer";

interface Project {
  id: string;
  title: string;
  category: "sme" | "diaspora" | "threejs" | "fintech";
  categoryLabel: string;
  demoKey: "commerce" | "contracts" | "threejs" | "fintech";
  client: string;
  location: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export function PortfolioSection() {
  const [filter, setFilter] = useState<string>("all");
  const [activeDemo, setActiveDemo] = useState<"threejs" | "commerce" | "contracts" | "fintech" | null>(null);

  const projects: Project[] = [
    {
      id: "fmcg-pos",
      title: "Omnichannel Multi-Branch Inventory & POS Engine",
      category: "sme",
      categoryLabel: "Nigerian SME Operations",
      demoKey: "commerce",
      client: "Apex Distribution Merchants Ltd",
      location: "Lagos & Kano, Nigeria",
      problem:
        "Loss of an estimated ₦12M annually from stock reconciliation variances, unverified transfer alerts, and POS terminal timeouts across 6 warehouse distribution hubs.",
      solution:
        "Engineered an offline-first Next.js and NestJS multi-tenant inventory architecture with automated Paystack webhook validation and role-based clearance permissions.",
      metrics: [
        { label: "Volume Settled", value: "₦240M+" },
        { label: "Audit Discrepancies", value: "0.0%" },
        { label: "Webhook Success", value: "99.98%" },
      ],
      tags: ["Next.js 16", "NestJS", "PostgreSQL", "Paystack Rails"],
    },
    {
      id: "diaspora-escrow",
      title: "Cross-Border Escrow & Digital Property Execution",
      category: "diaspora",
      categoryLabel: "Diaspora Cross-Border",
      demoKey: "contracts",
      client: "AfriTrust Capital & Properties",
      location: "London, UK & Lagos",
      problem:
        "Diaspora investors in the UK and North America routinely abandoned property transactions due to counterparty execution risk and lack of verifiable milestone disbursements.",
      solution:
        "Deployed a dual-currency milestone escrow platform with cryptographic digital signatures (Documenso core), milestone evidence auditing, and scheduled release authorizations.",
      metrics: [
        { label: "Escrow Administered", value: "$1.85M USD" },
        { label: "Contract Disputes", value: "0" },
        { label: "Turnaround SLA", value: "3.4 mins" },
      ],
      tags: ["Next.js", "Documenso Core", "Prisma", "Cryptographic Signatures"],
    },
    {
      id: "threejs-luxury",
      title: "Interactive 3D WebGL Spatial Product Studio",
      category: "threejs",
      categoryLabel: "Immersive 3D & WebGL",
      demoKey: "threejs",
      client: "Kroma Spatial Design Ltd",
      location: "London, UK (Nearshore Team)",
      problem:
        "Conventional 2D photography caused high bounce rates (68%) on custom luxury architectural installations, where clients required material reflection and tactile angle audits.",
      solution:
        "Constructed a high-throughput Three.js WebGL interactive configurator featuring physically based rendering (PBR), dynamic reflection probes, and strict 60 FPS mobile execution.",
      metrics: [
        { label: "Conversion Lift", value: "+46%" },
        { label: "Mobile Frame Rate", value: "60 FPS" },
        { label: "Session Duration", value: "4.8 mins" },
      ],
      tags: ["Three.js", "React 19", "WebGL", "Next.js"],
    },
    {
      id: "credit-engine",
      title: "Automated Credit Underwriting & Mandate API",
      category: "fintech",
      categoryLabel: "Fintech & Payments",
      demoKey: "fintech",
      client: "KrediDirect Finance Ltd",
      location: "Abuja, Nigeria",
      problem:
        "Manual credit assessments required 48 hours per applicant, causing high borrower drop-off while fraudulent applications bypassed visual paper checks.",
      solution:
        "Constructed an automated scoring microservice in NestJS, interfacing with IdentityPass BVN/NIN verification rails and automated direct debit tokenization via Flutterwave.",
      metrics: [
        { label: "Underwriting SLA", value: "45 Seconds" },
        { label: "Default Reduction", value: "-32%" },
        { label: "System Uptime", value: "99.99%" },
      ],
      tags: ["NestJS", "PostgreSQL", "Redis", "Flutterwave API"],
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-white text-[11px] font-mono text-zinc-600 uppercase tracking-wider mb-4">
            Production References
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Case Studies &amp; Architectural Implementations
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Examine production-grade systems engineered for commercial durability. Test functional sandboxes below to verify interface velocity and transactional reliability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Engagements" },
            { id: "sme", label: "Nigerian SME Operations" },
            { id: "diaspora", label: "Diaspora Cross-Border" },
            { id: "threejs", label: "3D & Three.js" },
            { id: "fintech", label: "Fintech & Payments" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
                filter === btn.id
                  ? "bg-zinc-950 text-white font-semibold"
                  : "bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-medium uppercase text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
                    {item.categoryLabel}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {item.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-tight mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mb-6">
                  Client: {item.client}
                </div>

                {/* Problem vs Solution Brief */}
                <div className="space-y-3 mb-6 text-xs text-zinc-600">
                  <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
                    <span className="font-semibold text-zinc-900 block mb-1">Business Bottleneck:</span>
                    <span className="leading-relaxed">{item.problem}</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
                    <span className="font-semibold text-zinc-900 block mb-1">Architecture Delivered:</span>
                    <span className="leading-relaxed">{item.solution}</span>
                  </div>
                </div>

                {/* Quantifiable Metrics Strip */}
                <div className="grid grid-cols-3 gap-2.5 p-4 rounded-lg bg-zinc-950 text-white mb-6">
                  {item.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">
                        {metric.label}
                      </div>
                      <div className="text-base font-bold font-mono text-zinc-100 mt-0.5">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveDemo(item.demoKey);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Functional Sandbox</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveDemo(item.demoKey);
                  }}
                  className="inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-zinc-100 text-zinc-800 text-xs font-medium hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  <span>Architecture Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Live Interactive Demo Modal */}
      {activeDemo && (
        <LiveDemoViewer
          demoId={activeDemo}
          onClose={() => setActiveDemo(null)}
        />
      )}
    </section>
  );
}
