"use client";

import React, { useState } from "react";
import {
  Clock,
  Box,
  CreditCard,
  Calendar,
  X,
  Layers,
  ArrowRight,
} from "lucide-react";

interface Blueprint {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  icon: any;
  badge: string;
  badgeColor: string;
  deploymentTime: string;
  techStack: string[];
  description: string;
  features: string[];
  idealFor: string;
  architectureDetails: {
    frontend: string;
    backend: string;
    database: string;
    localization: string;
    hosting: string;
  };
  mockupDetails: {
    heading: string;
    stats: { label: string; value: string }[];
    recentActivity: string[];
  };
  pricingFlat: string;
  pricingNGN: string;
  monthlyManaged: string;
}

export function BlueprintsSection() {
  const [activeModalBlueprint, setActiveModalBlueprint] = useState<Blueprint | null>(null);

  const blueprints: Blueprint[] = [
    {
      id: "3d-property",
      name: "Interactive 3D Property Showcase",
      subtitle: "Web-based architectural walkthrough for property developments & interior spaces.",
      category: "Architectural 3D & Virtual Tours",
      icon: Box,
      badge: "Three.js / WebGL Core",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "7–14 Days",
      techStack: ["Three.js", "React 19", "GLTF / Draco", "Next.js 16"],
      description:
        "Allow prospective buyers to inspect spaces, zoom in on material textures (stone, glass, wood), and explore spatial scale in real-time right in their browser.",
      features: [
        "Real-time orbit, pan & walk controls optimized for mobile and desktop",
        "Photorealistic PBR materials: concrete, oak timber, and architectural glass",
        "Interactive room hotspots with floor plan details & private tour booking",
        "Ultra-lightweight Draco model compression for fast loading in Nigeria",
      ],
      idealFor: "Real Estate Developers, Architectural Studios, Luxury Property Agencies",
      architectureDetails: {
        frontend: "Three.js with React 19 & WebGL rendering pipeline",
        backend: "Next.js 16 serverless route handlers",
        database: "PostgreSQL for lead & inquiry storage",
        localization: "Nigerian NGN & USD pricing swatches",
        hosting: "Vercel Edge with global CDN asset caching",
      },
      mockupDetails: {
        heading: "Interactive 3D Spatial Walkthrough Engine",
        stats: [
          { label: "Target FPS", value: "60 FPS" },
          { label: "Inquiry Lift", value: "+52%" },
          { label: "Asset Size", value: "1.4 MB" },
        ],
        recentActivity: [
          "[Render Engine] Orbit view initialized on mobile viewport",
          "[Lighting] Day / Dusk lighting preset switched",
          "[Lead Generated] Private viewing booked via form",
        ],
      },
      pricingFlat: "$650",
      pricingNGN: "₦850,000",
      monthlyManaged: "Optional ₦65k/mo updates",
    },
    {
      id: "invoicing",
      name: "Automated Invoicing & Payment Hub",
      subtitle: "Streamlined billing workflow for client invoices, instant Paystack checkout & receipts.",
      category: "Business Invoicing & Automation",
      icon: CreditCard,
      badge: "Paystack & Flutterwave",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "5–7 Days",
      techStack: ["Next.js 16", "Paystack API", "PostgreSQL", "WhatsApp Notifications"],
      description:
        "Eliminate manual invoice chasing. Send branded invoice links, verify bank transfers automatically, and issue branded receipts the moment funds clear.",
      features: [
        "Automatic payment verification via Paystack & Flutterwave webhooks",
        "One-click shareable payment links with custom company branding",
        "Automatic WhatsApp & email payment reminders for unpaid invoices",
        "Real-time revenue dashboard and settlement ledger tracking",
      ],
      idealFor: "Law Firms, Medical Clinics, Design Studios, Professional Consultancies",
      architectureDetails: {
        frontend: "Next.js 16 responsive dashboard in TailwindCSS",
        backend: "Server Actions & webhook micro-handlers",
        database: "PostgreSQL transaction ledger with Prisma ORM",
        localization: "Dual NGN Naira & USD domiciliary accounts",
        hosting: "Vercel serverless with automated backups",
      },
      mockupDetails: {
        heading: "Automated Invoicing & Settlement Hub",
        stats: [
          { label: "Settlement Rate", value: "99.4%" },
          { label: "Avg Payment Time", value: "3.2 Hours" },
          { label: "Pending Invoices", value: "₦1,850,000" },
        ],
        recentActivity: [
          "[Invoice Sent] Ref #INV-2026-08 dispatched to client",
          "[Webhook] Paystack verified ₦450,000 settlement",
          "[Automation] PDF receipt generated and emailed",
        ],
      },
      pricingFlat: "$400",
      pricingNGN: "₦500,000",
      monthlyManaged: "Optional ₦45k/mo maintenance",
    },
    {
      id: "booking",
      name: "Self-Serve Appointment & Booking Engine",
      subtitle: "Online calendar reservation with automated SMS reminders and consultation deposits.",
      category: "Booking & Intake Automation",
      icon: Calendar,
      badge: "Calendar & Schedule Core",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "4–6 Days",
      techStack: ["Next.js", "Google Calendar API", "Paystack", "Termii SMS"],
      description:
        "Stop losing hours to back-and-forth WhatsApp scheduling. Let clients book open slots, submit intake questions, and pay upfront booking deposits.",
      features: [
        "Live calendar synchronization preventing double-booking conflicts",
        "Mandatory deposit or upfront consultation fee collection",
        "Automated SMS & email appointment reminders 24h and 1h prior",
        "Custom intake questionnaires tailored to your clinic or practice",
      ],
      idealFor: "Private Clinics, Salons & Spas, Legal Advisors, Executive Consultants",
      architectureDetails: {
        frontend: "Ultra-fast mobile booking widget",
        backend: "Google Calendar & webhook sync engines",
        database: "PostgreSQL appointment records",
        localization: "Nigerian local time (WAT / GMT+1) auto-detection",
        hosting: "Vercel Edge hosting",
      },
      mockupDetails: {
        heading: "Live Booking & Patient Schedule",
        stats: [
          { label: "Confirmed Bookings", value: "148 / mo" },
          { label: "No-Show Rate", value: "4.1%" },
          { label: "Deposit Total", value: "₦1,120,000" },
        ],
        recentActivity: [
          "[Booking Slot] 11:30 AM reserved with Dr. Alabi",
          "[Deposit Paid] ₦25,000 consultation fee confirmed",
          "[SMS Dispatch] Reminder scheduled via Termii",
        ],
      },
      pricingFlat: "$350",
      pricingNGN: "₦450,000",
      monthlyManaged: "Optional ₦35k/mo updates",
    },
  ];

  return (
    <section id="blueprints" className="py-24 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-white text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">
            Production Engines
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Ready-to-deploy tools &amp; visual engines
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
            Instead of building from scratch every time, we configure, brand, and connect proven software engines for your business in days.
          </p>
        </div>

        {/* Blueprints Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blueprints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 border border-zinc-200/90 hover:border-zinc-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700">
                      {item.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                      <Clock className="w-3.5 h-3.5" />
                      {item.deploymentTime}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-zinc-950 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-950 tracking-tight">
                        {item.name}
                      </h3>
                      <div className="text-xs font-mono text-zinc-400">{item.category}</div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 leading-relaxed mt-3 mb-5">
                    {item.description}
                  </p>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-50 text-zinc-600 border border-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-4 border-t border-zinc-100 text-xs text-zinc-600 font-mono">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className="text-zinc-400">&bull;</span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">From</div>
                    <div className="text-sm font-bold font-mono text-zinc-950">
                      {item.pricingNGN} <span className="text-[11px] font-normal text-zinc-400">({item.pricingFlat})</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModalBlueprint(item)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-950 text-white font-sans text-xs font-semibold hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-zinc-200 text-xs font-mono text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Need a custom tool or specific business workflow built for your operation?
          </div>
          <a
            href="#contact"
            className="text-zinc-950 underline hover:text-zinc-700 shrink-0 font-semibold"
          >
            Start a Custom Project &rarr;
          </a>
        </div>

      </div>

      {/* Architecture Modal */}
      {activeModalBlueprint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200 p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalBlueprint(null)}
              className="absolute top-5 right-5 p-1.5 rounded-md hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                {activeModalBlueprint.badge}
              </span>
              <span className="text-zinc-400">
                Deployment Timeline: {activeModalBlueprint.deploymentTime}
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-zinc-950 font-sans">
              {activeModalBlueprint.name}
            </h3>
            <p className="text-xs text-zinc-500 mt-0.5">
              {activeModalBlueprint.subtitle}
            </p>

            {/* Dashboard Telemetry Mock */}
            <div className="mt-6 rounded-xl bg-zinc-950 text-white p-5 border border-zinc-800 font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs text-zinc-400">
                <span className="text-zinc-200 font-semibold">
                  {activeModalBlueprint.mockupDetails.heading}
                </span>
                <span className="text-[11px] text-zinc-500">Live Telemetry</span>
              </div>

              <div className="grid grid-cols-3 gap-3 my-4">
                {activeModalBlueprint.mockupDetails.stats.map((st, sIdx) => (
                  <div key={sIdx} className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                    <div className="text-[10px] uppercase text-zinc-500">{st.label}</div>
                    <div className="text-base font-bold text-zinc-100 mt-0.5">{st.value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-1.5 pt-2 border-t border-zinc-800 text-[11px] text-zinc-400">
                {activeModalBlueprint.mockupDetails.recentActivity.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-center gap-2">
                    <span className="text-zinc-600">&gt;</span>
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Architecture Breakdown */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase font-bold text-zinc-900 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                Technical Architecture Specification
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-400 block mb-0.5">Frontend Tier</span>
                  <span className="text-zinc-900 font-medium">{activeModalBlueprint.architectureDetails.frontend}</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-400 block mb-0.5">API &amp; Backend</span>
                  <span className="text-zinc-900 font-medium">{activeModalBlueprint.architectureDetails.backend}</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-400 block mb-0.5">Database Tier</span>
                  <span className="text-zinc-900 font-medium">{activeModalBlueprint.architectureDetails.database}</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-400 block mb-0.5">Hosting &amp; Edge</span>
                  <span className="text-zinc-900 font-medium">{activeModalBlueprint.architectureDetails.hosting}</span>
                </div>
              </div>
            </div>

            {/* Pricing & Deployment Action */}
            <div className="mt-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div>
                <div className="text-zinc-500 uppercase text-[10px]">Indicative Project Investment</div>
                <div className="text-xl font-bold text-zinc-950 mt-0.5">
                  {activeModalBlueprint.pricingNGN} <span className="text-xs font-normal text-zinc-500">({activeModalBlueprint.pricingFlat} USD)</span>
                </div>
                <div className="text-zinc-500 text-[11px] mt-0.5">
                  Includes full source code handover, deployment &amp; post-launch warranty.
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setActiveModalBlueprint(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-zinc-950 text-white font-sans font-semibold text-xs hover:bg-zinc-800 transition-all shrink-0"
              >
                <span>Inquire on Engine</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
