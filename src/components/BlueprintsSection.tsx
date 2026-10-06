"use client";

import React, { useState } from "react";
import {
  Clock,
  Box,
  CreditCard,
  Calendar,
  UtensilsCrossed,
  X,
  Layers,
  ExternalLink,
} from "lucide-react";
import { ModelCardViewer } from "./ModelCardViewer";

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
  liveUrl: string;
  modelPath?: string;
  imageUrl?: string;
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
      id: "quick-invoice",
      name: "Tectonic Invoice & Settlement Engine",
      subtitle: "Interactive in-browser commercial invoicing application with VAT calculations & PDF export.",
      category: "Business Tool & Invoicing",
      icon: CreditCard,
      badge: "Functional Web Application (No 3D)",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "5–7 Days",
      techStack: ["Vanilla JS", "TailwindCSS", "Print Engine", "Next.js"],
      liveUrl: "/projects/quick-invoice/index.html",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
      description:
        "A working financial software tool built for Nigerian SMEs and consultancies. Generates itemized invoices, computes 7.5% VAT and WHT deductions, and prints clean client PDFs.",
      features: [
        "Live dynamic line-item addition with real-time subtotal computation",
        "Configurable 7.5% Nigerian VAT and 5% Withholding Tax (WHT) toggles",
        "Multi-currency support: Nigerian Naira (₦), US Dollar ($), British Pound (£)",
        "Zero-dependency instant browser PDF export & print stylesheet",
      ],
      idealFor: "Service Agencies, Consultancies, Freelancers, SME Contractors",
      architectureDetails: {
        frontend: "Responsive utility-first workspace (JetBrains Mono + Plus Jakarta)",
        backend: "Client-side state machine with zero server roundtrips",
        database: "Local storage persistence & session cache",
        localization: "Nigerian NGN Naira formatting & banking details",
        hosting: "Edge deployed on Vercel with zero latency",
      },
      mockupDetails: {
        heading: "Commercial Invoicing Telemetry",
        stats: [
          { label: "Execution Time", value: "< 2 ms" },
          { label: "VAT Auto-Calc", value: "7.5%" },
          { label: "Export Format", value: "Print / PDF" },
        ],
        recentActivity: [
          "[Invoice Created] Ref #INV-2026-084 initialized",
          "[VAT Computed] 7.5% applied to milestone ledger",
          "[Export Engine] Clean print stylesheet rendered",
        ],
      },
      pricingFlat: "$350",
      pricingNGN: "₦450,000",
      monthlyManaged: "Optional ₦35k/mo maintenance",
    },
    {
      id: "villa-komorebi",
      name: "Komorebi Sanctuary & Residence",
      subtitle: "Architectural retreat website with real-time 3D spatial lounge inspection and direct reservations.",
      category: "Architectural 3D & Living",
      icon: Box,
      badge: "Three.js Spatial Engine",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "7–14 Days",
      techStack: ["Three.js", "React 19", "WebGL", "Next.js 16"],
      liveUrl: "/projects/villa-komorebi/index.html",
      modelPath: "/models/sofa.glb",
      description:
        "Bespoke Japanese-Scandinavian architectural residence in Ibadan. Features a live 360° lounge model, floor plan breakdowns, and direct reservation calendar.",
      features: [
        "Real-time 360° orbit inspection of the master suite lounge",
        "Passive architecture data & dedicated solar microgrid telemetry",
        "Direct reservation desk with instant email & WhatsApp dispatch",
        "Mobile-first responsive typography and sub-second load times",
      ],
      idealFor: "Real Estate Developers, Boutique Villas, Architectural Studios",
      architectureDetails: {
        frontend: "Bespoke editorial HTML5/CSS with Three.js WebGL engine",
        backend: "Next.js serverless route handlers & webhook workers",
        database: "PostgreSQL for booking & inquiry storage",
        localization: "Nigerian NGN (₦) & USD ($) rate conversion",
        hosting: "Vercel Edge with global CDN asset delivery",
      },
      mockupDetails: {
        heading: "Spatial 3D & Reservation Telemetry",
        stats: [
          { label: "Target FPS", value: "60 FPS" },
          { label: "Booking Lift", value: "+54%" },
          { label: "Asset Size", value: "3.1 MB" },
        ],
        recentActivity: [
          "[3D Viewport] Orbit controls engaged on master suite",
          "[Booking Request] Full compound stay reserved for Dec",
          "[Concierge] Automated dispatch sent to residence manager",
        ],
      },
      pricingFlat: "$650",
      pricingNGN: "₦850,000",
      monthlyManaged: "Optional ₦65k/mo updates",
    },
    {
      id: "apex-diagnostics",
      name: "Apex Care Diagnostics & Pathology",
      subtitle: "Accredited Ibadan clinical laboratory portal with 48 diagnostic test directories and slot booking.",
      category: "Healthcare & Booking Automation",
      icon: Calendar,
      badge: "Pure Web Engine (No 3D)",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "5–7 Days",
      techStack: ["Next.js 16", "PostgreSQL", "Termii SMS", "Paystack"],
      liveUrl: "/projects/apex-diagnostics/index.html",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
      description:
        "Medical diagnostic laboratory portal in Ibadan with transparent panel pricing, cold-chain home phlebotomy booking, and automated result dispatch.",
      features: [
        "48-panel test directory with transparent pricing (₦15k – ₦42k)",
        "Fasting appointment scheduler with strict morning slot reservation",
        "Home phlebotomy sample pickup option (+₦5,000 logistics)",
        "Automated result dispatch to patient WhatsApp and doctor portal",
      ],
      idealFor: "Private Medical Clinics, Pathology Labs, Dental Practices",
      architectureDetails: {
        frontend: "Clean Swiss clinical UI (Plus Jakarta Sans + IBM Plex)",
        backend: "SMS & WhatsApp result automation workers",
        database: "Encrypted PostgreSQL records (NDPR compliant)",
        localization: "Ibadan clinic (Ring Road) local logistics routing",
        hosting: "High-security Vercel / Supabase backend",
      },
      mockupDetails: {
        heading: "Clinical Pathology Appointment Desk",
        stats: [
          { label: "Monthly Bookings", value: "180+ Slots" },
          { label: "No-Show Drop", value: "-65%" },
          { label: "Result SLA", value: "4.2 Hours" },
        ],
        recentActivity: [
          "[Slot Booked] 08:30 AM Fasting Panel reserved",
          "[Logistics] Home phlebotomy assigned to courier",
          "[Result Alert] Encrypted PDF dispatched via WhatsApp",
        ],
      },
      pricingFlat: "$400",
      pricingNGN: "₦500,000",
      monthlyManaged: "Optional ₦40k/mo maintenance",
    },
    {
      id: "sula-coffee",
      name: "Sula Roastery & All-Day Kitchen",
      subtitle: "Specialty coffee roastery & artisan eatery website with live visual menu and table bookings.",
      category: "Hospitality & Digital Menus",
      icon: UtensilsCrossed,
      badge: "Pure Editorial Web (No 3D)",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "4–6 Days",
      techStack: ["HTML5 / CSS", "TailwindCSS", "WhatsApp Commerce", "Next.js"],
      liveUrl: "/projects/sula-coffee/index.html",
      imageUrl: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=900&q=80",
      description:
        "Tactile culinary experience for a specialty roaster in Jericho, Ibadan. Features single-origin brew bar notes, live table reservation, and takeaway ordering.",
      features: [
        "Visual menu directory with seasonal pricing & origin tasting notes",
        "Interactive table reservation desk (Sun Garden vs Timber Lounge)",
        "Direct WhatsApp click-to-order flow for beans and takeaway",
        "High-contrast editorial serif typography and zero template bloat",
      ],
      idealFor: "Boutique Cafes, Artisan Bakeries, Restaurants, Private Dining",
      architectureDetails: {
        frontend: "Editorial typography (Italiana + Plus Jakarta Sans)",
        backend: "WhatsApp Business API lead routing",
        database: "PostgreSQL table reservation log",
        localization: "Local Ibadan pickup & delivery logistics",
        hosting: "Instant global Vercel Edge caching",
      },
      mockupDetails: {
        heading: "Hospitality Table & Order Flow",
        stats: [
          { label: "Table Bookings", value: "94 / wk" },
          { label: "Page Speed", value: "0.6s" },
          { label: "Mobile Share", value: "86%" },
        ],
        recentActivity: [
          "[Reservation] Sun Garden Terrace table confirmed",
          "[Retail Order] 2x Taraba Highland beans ordered",
          "[Ticket] WhatsApp reservation pass issued",
        ],
      },
      pricingFlat: "$350",
      pricingNGN: "₦450,000",
      monthlyManaged: "Optional ₦35k/mo updates",
    },
    {
      id: "vanguard-horology",
      name: "Vanguard Atelier & Horology",
      subtitle: "Bespoke mechanical watch atelier with 360° 3D timepiece orbit, specs sheet, and allocation drawer.",
      category: "Luxury E-Commerce & Product 3D",
      icon: CreditCard,
      badge: "3D Product Configurator",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "7–10 Days",
      techStack: ["Three.js", "WebGL", "Paystack Rails", "TailwindCSS"],
      liveUrl: "/projects/vanguard-horology/index.html",
      modelPath: "/models/rolex.glb",
      description:
        "Mechanical horology studio showcasing cold-forged 904L steel timepieces with live interactive 3D rotation, technical data sheets, and Paystack allocation checkout.",
      features: [
        "Interactive 360° orbit inspection of brushed steel and bezel detail",
        "Batch allocation counter with real-time availability tracking",
        "Full technical horological data sheet (caliber, power reserve, crystal)",
        "Direct reservation checkout flow with NGN & USD pricing",
      ],
      idealFor: "Luxury Goods, Artisanal Crafts, Fashion & Jewelry Brands",
      architectureDetails: {
        frontend: "Three.js WebGL product canvas with PBR metal shading",
        backend: "Paystack & Stripe idempotent webhook listeners",
        database: "PostgreSQL inventory ledger",
        localization: "Nigerian NGN & international USD checkout rails",
        hosting: "Vercel Edge with instant global delivery",
      },
      mockupDetails: {
        heading: "Product Configurator & Allocation Hub",
        stats: [
          { label: "Frame Rate", value: "60 FPS" },
          { label: "Batch Status", value: "14 Left" },
          { label: "Conversion Lift", value: "+42%" },
        ],
        recentActivity: [
          "[3D Orbit] Steel chamfer inspection triggered",
          "[Allocation] Reference #VG-26 reserved by client",
          "[Invoice] WhatsApp summary generated",
        ],
      },
      pricingFlat: "$550",
      pricingNGN: "₦750,000",
      monthlyManaged: "Optional ₦50k/mo maintenance",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-white text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">
            Live Portfolio Projects
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Featured Projects &amp; Live Deployments
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
            Explore real standalone websites, editorial digital platforms, and 3D WebGL experiences built by Tectonic. Click any project to open the live site.
          </p>
        </div>

        {/* Projects Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blueprints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/90 hover:border-zinc-300 transition-all shadow-xs flex flex-col justify-between"
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

                  {/* Media: 3D Model Viewer OR Editorial Web Photo */}
                  <div className="mb-5">
                    {item.modelPath ? (
                      <ModelCardViewer
                        modelPath={item.modelPath}
                        badgeLabel={item.category}
                        heightClass="h-48 sm:h-52"
                      />
                    ) : item.imageUrl ? (
                      <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 group">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-zinc-950/80 backdrop-blur-md text-[10px] font-mono text-white">
                          {item.category}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Title & Category */}
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

                  <p className="text-xs text-zinc-500 leading-relaxed mt-2 mb-4">
                    {item.description}
                  </p>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
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
                <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Estimated Scope</span>
                    <span className="text-sm font-bold font-mono text-zinc-950">
                      {item.pricingNGN} <span className="text-xs font-normal text-zinc-500">({item.pricingFlat})</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-950 text-white font-sans text-xs font-semibold hover:bg-zinc-800 transition-all cursor-pointer"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setActiveModalBlueprint(item)}
                      className="px-3.5 py-2.5 rounded-lg bg-zinc-100 text-zinc-800 text-xs font-medium hover:bg-zinc-200 transition-all cursor-pointer"
                    >
                      <span>Architecture</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-zinc-200 text-xs font-mono text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Need a custom website, 3D product visualizer, or business tool built for your brand?
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
                Delivery: {activeModalBlueprint.deploymentTime}
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-zinc-950 font-sans">
              {activeModalBlueprint.name}
            </h3>
            <p className="text-xs text-zinc-500 mt-0.5">
              {activeModalBlueprint.subtitle}
            </p>

            {/* Modal Media: 3D or Photo */}
            <div className="mt-5">
              {activeModalBlueprint.modelPath ? (
                <ModelCardViewer
                  modelPath={activeModalBlueprint.modelPath}
                  badgeLabel={activeModalBlueprint.category}
                  heightClass="h-56"
                />
              ) : activeModalBlueprint.imageUrl ? (
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <img
                    src={activeModalBlueprint.imageUrl}
                    alt={activeModalBlueprint.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}
            </div>

            {/* Dashboard Telemetry Mock */}
            <div className="mt-5 rounded-xl bg-zinc-950 text-white p-5 border border-zinc-800 font-mono">
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
                <div className="text-zinc-500 uppercase text-[10px]">Indicative Scope Investment</div>
                <div className="text-xl font-bold text-zinc-950 mt-0.5">
                  {activeModalBlueprint.pricingNGN} <span className="text-xs font-normal text-zinc-500">({activeModalBlueprint.pricingFlat} USD)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={activeModalBlueprint.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-950 text-white font-sans font-semibold text-xs hover:bg-zinc-800 transition-all shrink-0"
                >
                  <span>Open Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
