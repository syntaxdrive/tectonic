"use client";

import React, { useState } from "react";
import {
  Clock,
  Users,
  ShoppingBag,
  FileCheck,
  X,
  Layers,
  ArrowRight,
  Shield,
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
      id: "crm",
      name: "Tectonic Enterprise CRM",
      subtitle: "Open-source business operations core for B2B sales and field teams.",
      category: "Operations & Sales Ledger",
      icon: Users,
      badge: "Twenty CRM Core",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "7–10 Days",
      techStack: ["NestJS", "React 19", "PostgreSQL", "WhatsApp API"],
      description:
        "Manage accounts, multi-stage pipelines, and field staff without paying \$50/user monthly licensing fees to foreign SaaS platforms.",
      features: [
        "Pre-configured NGN (₦) & USD ($) multi-currency pipelines",
        "Direct Meta WhatsApp Business API webhook lead capture",
        "Strict Role-Based Access Control (RBAC) preventing rep theft",
        "Custom kanban boards, activity feeds, and automated reminders",
      ],
      idealFor: "Real Estate Developers, Private Educational Institutions, Financial Advisory",
      architectureDetails: {
        frontend: "React 19 with optimistic mutation UI",
        backend: "NestJS modular microservices & GraphQL/REST APIs",
        database: "PostgreSQL with row-level security & Redis cache",
        localization: "Termii / WhatsApp Business API + NGN Naira pipeline",
        hosting: "Dockerized on Railway / AWS Cape Town (af-south-1)",
      },
      mockupDetails: {
        heading: "Enterprise Account Pipeline (Lagos)",
        stats: [
          { label: "Active Pipeline", value: "₦142,500,000" },
          { label: "Conversion Rate", value: "34.8%" },
          { label: "Field Accounts", value: "14 Active" },
        ],
        recentActivity: [
          "[Lead Routing] Inbound account assigned to Corporate Desk",
          "[Pipeline] Project Lekki-4 transferred to Legal Review (₦18,500,000)",
          "[Audit] Ledger reconciled via PostgreSQL trigger",
        ],
      },
      pricingFlat: "$2,800",
      pricingNGN: "₦4,200,000",
      monthlyManaged: "$350/mo (₦550k)",
    },
    {
      id: "commerce",
      name: "Tectonic Headless Commerce",
      subtitle: "Modular retail engine engineered for high-concurrency mobile transactions.",
      category: "Commerce & Distribution Core",
      icon: ShoppingBag,
      badge: "Medusa.js Core",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "10–14 Days",
      techStack: ["Next.js 16", "Node.js", "PostgreSQL", "Paystack"],
      description:
        "Replace monolithic, fragile CMS setups with a decoupled Next.js storefront engineered for sub-second mobile page loads on Nigerian cellular networks.",
      features: [
        "Native Paystack & Flutterwave multi-split checkout",
        "Multi-warehouse inventory synchronization across branches",
        "Automated WhatsApp & SMS shipping updates via Termii",
        "Full admin dashboard with customer analytics & promo engines",
      ],
      idealFor: "FMCG Distributors, Consumer Electronics Retailers, Cross-Border Merchandisers",
      architectureDetails: {
        frontend: "Next.js 16 App Router with Server-Side Rendering",
        backend: "Medusa.js Headless Node engine with event-driven pub/sub",
        database: "PostgreSQL ACID ledger + Redis session cache",
        localization: "Paystack / Flutterwave + GIGL logistics webhooks",
        hosting: "Vercel edge storefront + isolated Railway backend",
      },
      mockupDetails: {
        heading: "Omnichannel Transaction Telemetry",
        stats: [
          { label: "Daily Volume", value: "₦4,890,000" },
          { label: "Webhook Integrity", value: "99.98%" },
          { label: "Core Web Vitals", value: "480ms" },
        ],
        recentActivity: [
          "[Paystack Webhook] Charge verified: ₦64,000 NGN (Order #4892)",
          "[Inventory] Ikeja Hub inventory decremented. State synchronized.",
          "[Notification] Transaction receipt dispatched to buyer terminal",
        ],
      },
      pricingFlat: "$3,400",
      pricingNGN: "₦5,100,000",
      monthlyManaged: "$380/mo (₦590k)",
    },
    {
      id: "contracts",
      name: "Tectonic Trust & Contracts",
      subtitle: "Cryptographic digital signing and milestone escrow verification.",
      category: "Legal & Escrow Infrastructure",
      icon: FileCheck,
      badge: "Documenso Core",
      badgeColor: "bg-zinc-100 text-zinc-800",
      deploymentTime: "5–7 Days",
      techStack: ["Next.js", "Prisma", "PostgreSQL", "Cryptographic Signatures"],
      description:
        "Designed to eliminate cross-border counterparty risk. Diaspora investors and Nigerian partners execute agreements with legally certified cryptographic timestamps.",
      features: [
        "Cryptographic PDF hashing & timestamped certificate audit trails",
        "Automated milestone release triggers for escrow disbursements",
        "Direct WhatsApp & Email document dispatch",
        "NDPR & international electronic signature compliance",
      ],
      idealFor: "Diaspora Real Estate Investors, Venture Financing, Commercial Retainers",
      architectureDetails: {
        frontend: "Next.js React canvas signature pad & PDF viewer",
        backend: "Prisma ORM with strict document encryption keys",
        database: "PostgreSQL audit logs + encrypted S3 contract storage",
        localization: "Nigerian Evidence Act & NDPR compliance certificates",
        hosting: "Dedicated AWS / Railway cloud instance",
      },
      mockupDetails: {
        heading: "Cryptographic Contract Audit Trail",
        stats: [
          { label: "Contracts Executed", value: "1,240" },
          { label: "Dispute Ratio", value: "0.0%" },
          { label: "Execution Time", value: "3.2 mins" },
        ],
        recentActivity: [
          "[Execution] Diaspora Escrow Agreement #208: Signed (London)",
          "[Cryptographic Seal] SHA-256 hash verified and anchored",
          "[Escrow] Milestone verification certificate sealed",
        ],
      },
      pricingFlat: "$2,200",
      pricingNGN: "₦3,300,000",
      monthlyManaged: "$250/mo (₦390k)",
    },
  ];

  return (
    <section id="blueprints" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-600 uppercase tracking-wider mb-4">
            Pre-Engineered Architecture Blueprints
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Enterprise Software Cores. Ready for Deployment.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Rather than engineering commodity foundation layers from scratch, we harden, localize, and deploy battle-tested open-source architectures tailored to your business rules in days.
          </p>
        </div>

        {/* Blueprints Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blueprints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-zinc-50/70 rounded-xl p-8 border border-zinc-200 hover:border-zinc-400 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-200 text-zinc-800">
                      {item.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-zinc-500">
                      <Clock className="w-3.5 h-3.5" />
                      {item.deploymentTime}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded bg-zinc-950 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-950 tracking-tight">
                        {item.name}
                      </h3>
                      <div className="text-xs font-mono text-zinc-500">{item.category}</div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed mt-3 mb-5">
                    {item.description}
                  </p>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-zinc-700 border border-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-4 border-t border-zinc-200 text-xs text-zinc-700 font-mono">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className="text-zinc-400">/</span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col gap-2">
                  <div className="text-[11px] font-mono text-zinc-500 mb-1">
                    <span className="font-semibold text-zinc-700">Application:</span> {item.idealFor}
                  </div>
                  
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveModalBlueprint(item);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                    <span>Inspect Architecture &amp; Schema</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveModalBlueprint(item);
                    }}
                    className="w-full text-center py-1.5 text-xs font-mono text-zinc-600 hover:text-zinc-950 cursor-pointer"
                  >
                    Deployment Pricing: {item.pricingFlat} ({item.pricingNGN})
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Open-Source Trust Note */}
        <div className="mt-12 p-5 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-zinc-600">
            <span className="font-bold text-zinc-900">Permissive Open-Source Licensing:</span> Isolated instances with 100% source code ownership, zero monthly vendor seat licensing, and complete database control.
          </div>
          <a
            href="#contact"
            className="text-zinc-900 underline hover:text-zinc-700 shrink-0 font-semibold"
          >
            Request Custom Architecture Brief →
          </a>
        </div>

      </div>

      {/* Architecture Modal */}
      {activeModalBlueprint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200 p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalBlueprint(null)}
              className="absolute top-5 right-5 p-1.5 rounded-md hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-medium">
                {activeModalBlueprint.badge}
              </span>
              <span className="text-zinc-500">
                Deployment Timeline: {activeModalBlueprint.deploymentTime}
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-zinc-950 font-sans">
              {activeModalBlueprint.name}
            </h3>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">
              {activeModalBlueprint.subtitle}
            </p>

            {/* Dashboard Telemetry Mock */}
            <div className="mt-6 rounded-xl bg-zinc-950 text-white p-5 border border-zinc-800 font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs text-zinc-400">
                <span className="text-zinc-200 font-semibold">
                  {activeModalBlueprint.mockupDetails.heading}
                </span>
                <span className="text-[11px] text-zinc-500">Isolated Cloud Pod</span>
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
                  <span className="text-zinc-500 block mb-0.5">Frontend Tier</span>
                  <span className="text-zinc-900 font-medium">{activeModalBlueprint.architectureDetails.frontend}</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-500 block mb-0.5">API &amp; Backend Tier</span>
                  <span className="text-zinc-900 font-medium">{activeModalBlueprint.architectureDetails.backend}</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-500 block mb-0.5">Database Tier</span>
                  <span className="text-zinc-900 font-medium">{activeModalBlueprint.architectureDetails.database}</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-500 block mb-0.5">Localization Layer</span>
                  <span className="text-zinc-900 font-medium">{activeModalBlueprint.architectureDetails.localization}</span>
                </div>
              </div>
            </div>

            {/* Pricing & Deployment Action */}
            <div className="mt-6 p-4 rounded-xl bg-zinc-100 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div>
                <div className="text-zinc-500 uppercase text-[10px]">One-Off Deployment Investment</div>
                <div className="text-xl font-bold text-zinc-950 mt-0.5">
                  {activeModalBlueprint.pricingFlat} <span className="text-xs font-normal text-zinc-600">({activeModalBlueprint.pricingNGN})</span>
                </div>
                <div className="text-zinc-500 text-[11px] mt-0.5">
                  Includes full source code handover, deployment scripts &amp; 30-day warranty.
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setActiveModalBlueprint(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-zinc-950 text-white font-sans font-semibold text-xs hover:bg-zinc-800 transition-all shrink-0"
              >
                <span>Request Deployment Brief</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
