"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

export function PricingSection() {
  const tiers = [
    {
      name: "MVP Engineering Sprint",
      tagline: "For early-stage founders & diaspora launching a commercial v1 product.",
      priceUSD: "$3,500",
      priceNGN: "₦5,250,000",
      duration: "Fixed Scope • 4-Week Delivery",
      badge: "Founders & Startups",
      highlight: false,
      features: [
        "Full Next.js 16 + NestJS REST / GraphQL API stack",
        "Mobile-first responsive interface in TailwindCSS",
        "Authentication (OAuth, JWT, email magic links)",
        "PostgreSQL relational schema + Prisma / Drizzle ORM",
        "Paystack or Stripe payment gateway with idempotent webhooks",
        "Automated CI/CD staging pipeline on Railway / Vercel",
        "100% intellectual property transfer & private GitHub repository",
        "30-day post-handover bug warranty & SLA",
      ],
      cta: "Inquire on MVP Sprint",
    },
    {
      name: "Dedicated Engineering Pod",
      tagline: "For funded startups and foreign digital teams needing nearshore velocity.",
      priceUSD: "$4,200",
      priceNGN: "₦6,300,000",
      duration: "Monthly Retainer • Rolling Contract",
      badge: "Nearshore Teams",
      highlight: true,
      features: [
        "Dedicated Senior Full-Stack Engineer + QA Lead",
        "Core stack: Next.js 16, Three.js (WebGL), NestJS, PostgreSQL",
        "Aligned timezone: GMT+1 (Direct Slack, Discord & Linear sync)",
        "Daily asynchronous standups + weekly milestone demonstrations",
        "Playwright & Vitest automated test suites",
        "High-availability cloud infrastructure (AWS / Docker)",
        "Terminable with 14-day notice — zero vendor lock-in",
        "Zero employee pension, benefits, or local tax overhead",
      ],
      cta: "Reserve Engineering Pod",
    },
    {
      name: "SME Operations Overhaul",
      tagline: "For established Nigerian businesses eliminating manual operational loss.",
      priceUSD: "$2,200",
      priceNGN: "₦3,400,000",
      duration: "Fixed Scope + Support Retainer",
      badge: "Domestic Enterprises",
      highlight: false,
      features: [
        "Multi-warehouse inventory, POS, or logistics dashboard",
        "Multi-channel payment reconciliation (Moniepoint, Paystack)",
        "Offline-resilient data synchronization for poor network",
        "Role-based staff clearance (prevent internal leakage and fraud)",
        "Automated WhatsApp & SMS customer transaction dispatch",
        "On-site staff onboarding in Lagos or remote orientation",
        "Direct local technical support desk",
        "99.9% uptime hosting configuration",
      ],
      cta: "Inquire on SME Modernization",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-600 uppercase tracking-wider mb-4">
            Engagement Structures
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Transparent Retainers &amp; Fixed Milestones
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Predictable capital allocation with strict milestone-based delivery. No unbudgeted hourly creep or opaque staffing bills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 flex flex-col justify-between transition-all ${
                tier.highlight
                  ? "bg-zinc-950 text-white shadow-2xl border border-zinc-800"
                  : "bg-zinc-50/70 text-zinc-900 border border-zinc-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded ${
                      tier.highlight
                        ? "bg-zinc-800 text-zinc-200 border border-zinc-700"
                        : "bg-zinc-200 text-zinc-700"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  {tier.name}
                </h3>
                <p
                  className={`text-xs leading-relaxed mb-6 font-mono ${
                    tier.highlight ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {tier.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-zinc-200/40">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold tracking-tight font-mono">
                      {tier.priceUSD}
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        tier.highlight ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      / {tier.priceNGN}
                    </span>
                  </div>
                  <div
                    className={`text-xs font-mono mt-1 ${
                      tier.highlight ? "text-zinc-300 font-semibold" : "text-zinc-600"
                    }`}
                  >
                    {tier.duration}
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2.5 font-mono text-xs">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          tier.highlight ? "text-zinc-300" : "text-zinc-600"
                        }`}
                      />
                      <span
                        className={`leading-snug ${
                          tier.highlight ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200/20">
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg text-xs font-semibold font-sans transition-all cursor-pointer ${
                    tier.highlight
                      ? "bg-white text-zinc-950 hover:bg-zinc-200"
                      : "bg-zinc-950 text-white hover:bg-zinc-800"
                  }`}
                >
                  <span>{tier.cta}</span>
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
