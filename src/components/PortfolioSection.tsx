"use client";

import React, { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { LiveDemoViewer } from "./LiveDemoViewer";

interface Project {
  id: string;
  title: string;
  category: "all" | "threejs" | "retail" | "tools" | "international";
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
      id: "villa-walkthrough",
      title: "Modern Villa & Spatial Architectural Walkthrough",
      category: "threejs",
      categoryLabel: "3D Visualization",
      demoKey: "threejs",
      client: "Primrose Haven Residences",
      location: "Ibadan & Lagos, Nigeria",
      problem:
        "Prospective buyers hesitated on off-plan purchases due to generic 2D blueprints that failed to convey natural lighting, spatial volume, and material luxury.",
      solution:
        "Engineered an interactive WebGL walkthrough with real-time orbit controls, PBR materials (concrete, glass, wood), and instant consultation booking.",
      metrics: [
        { label: "Inquiry Lift", value: "+54%" },
        { label: "Avg Session", value: "4.2 mins" },
        { label: "Frame Rate", value: "60 FPS" },
      ],
      tags: ["Three.js", "WebGL", "PBR Materials", "Next.js 16"],
    },
    {
      id: "fashion-store",
      title: "Boutique Apparel Store & Interactive Product Showcase",
      category: "retail",
      categoryLabel: "Retail & Products",
      demoKey: "commerce",
      client: "Oduwa Luxury Apparel",
      location: "Lagos & London",
      problem:
        "High bounce rates and cart abandonment on luxury fashion collections because standard product photos couldn't showcase fine tailoring and finish options.",
      solution:
        "Built a mobile-first digital lookbook with interactive product configurator swatches, fast checkout, and Paystack/Stripe payment links.",
      metrics: [
        { label: "Checkout Rate", value: "+38%" },
        { label: "Load Time", value: "0.8s" },
        { label: "Mobile Share", value: "82%" },
      ],
      tags: ["Next.js 16", "Paystack Rails", "TailwindCSS", "Product Visualizer"],
    },
    {
      id: "clinic-portal",
      title: "Diagnostic Center Booking & Payment Automation Hub",
      category: "tools",
      categoryLabel: "Business Tools",
      demoKey: "fintech",
      client: "Apex Health Diagnostics",
      location: "Ibadan, Nigeria",
      problem:
        "Over 80 manual phone calls and messages daily for lab appointments, causing double-bookings, long patient wait times, and uncollected upfront fees.",
      solution:
        "Constructed a clean self-serve booking portal with automated appointment reminders, intake form collection, and instant deposit reconciliation.",
      metrics: [
        { label: "Hours Saved", value: "24 hrs/wk" },
        { label: "No-Shows", value: "-65%" },
        { label: "Instant Confirm", value: "100%" },
      ],
      tags: ["Next.js", "PostgreSQL", "Automated Invoicing", "Paystack"],
    },
    {
      id: "diaspora-hub",
      title: "Diaspora Property Portfolio & Private Investor Hub",
      category: "international",
      categoryLabel: "International & Diaspora",
      demoKey: "contracts",
      client: "Heritage Capital Properties",
      location: "London, UK & Ibadan",
      problem:
        "Diaspora property buyers lacked a transparent system to inspect construction milestones, verify receipts, and execute digital sign-offs from abroad.",
      solution:
        "Deployed a secure client dashboard with photo milestone feeds, digital agreement execution, and transparent dual-currency transaction ledgers.",
      metrics: [
        { label: "Disputes", value: "0" },
        { label: "Sign-off Time", value: "< 5 mins" },
        { label: "Satisfaction", value: "98%" },
      ],
      tags: ["Next.js", "Digital Signatures", "Prisma", "Client Dashboard"],
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">
            Our Work
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Real projects built for real businesses
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
            From photorealistic 3D architectural showcases to automated booking tools and e-commerce experiences. Test live interactive sandboxes below.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "threejs", label: "3D Visualization" },
            { id: "retail", label: "Retail & Products" },
            { id: "tools", label: "Business Tools" },
            { id: "international", label: "International & Diaspora" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                filter === btn.id
                  ? "bg-zinc-950 text-white font-semibold"
                  : "bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200"
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
              className="bg-zinc-50/70 rounded-2xl p-8 border border-zinc-200/80 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-semibold uppercase text-zinc-700 bg-zinc-200 px-2.5 py-0.5 rounded-full">
                    {item.categoryLabel}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {item.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-tight mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-zinc-500 mb-6">
                  Client: {item.client}
                </div>

                {/* Problem vs Solution Brief */}
                <div className="space-y-3 mb-6 text-xs text-zinc-600">
                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
                    <span className="font-semibold text-zinc-900 block mb-1">The Challenge:</span>
                    <span className="leading-relaxed">{item.problem}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
                    <span className="font-semibold text-zinc-900 block mb-1">What We Built:</span>
                    <span className="leading-relaxed">{item.solution}</span>
                  </div>
                </div>

                {/* Quantifiable Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-zinc-950 text-white mb-6">
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
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-zinc-200/60 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveDemo(item.demoKey);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Interactive Preview</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveDemo(item.demoKey);
                  }}
                  className="inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-white text-zinc-800 text-xs font-medium border border-zinc-200 hover:bg-zinc-100 transition-all cursor-pointer"
                >
                  <span>Inspect Details</span>
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
