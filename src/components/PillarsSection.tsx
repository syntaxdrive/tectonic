import React from "react";
import { Check, ArrowRight } from "lucide-react";

export function PillarsSection() {
  const pillars = [
    {
      id: "sme",
      badge: "Market 01 / Domestic",
      title: "Nigerian SMEs & Scaling Enterprises",
      subtitle: "Eliminate inventory variances, un-reconciled bank transfers, and fragile commercial software.",
      features: [
        "Paystack, Flutterwave & Moniepoint webhook automation",
        "Offline-resilient architecture engineered for erratic bandwidth",
        "Multi-warehouse inventory, POS, and internal audit tracking",
        "Local currency billing (NGN) with zero foreign exchange risk",
      ],
      ctaText: "Inquire on SME Systems",
    },
    {
      id: "diaspora",
      badge: "Market 02 / Cross-Border",
      title: "Diaspora Founders & Cross-Border Ventures",
      subtitle: "Execute tech products in Africa with institutional governance and enforceable accountability.",
      features: [
        "Sprint-by-sprint staging builds and automated repository access",
        "Milestone-based escrow contracts (USD, GBP, EUR, CAD, NGN)",
        "On-the-ground operational insight paired with clean TypeScript",
        "Full intellectual property assignment under binding commercial contracts",
      ],
      ctaText: "Inquire on Venture Studio",
    },
    {
      id: "outsourcing",
      badge: "Market 03 / Global Nearshore",
      title: "Foreign Tech Companies & Digital Agencies",
      subtitle: "Senior engineering pods operating in GMT+1 at 40-50% cost advantage.",
      features: [
        "Dedicated senior pods: Next.js 16, Three.js (WebGL), and NestJS backends",
        "Direct timezone overlap with London, Berlin, and US East Coast",
        "Automated CI/CD pipelines, test coverage (Playwright/Vitest), and Docker",
        "Flexible staff augmentation or autonomous delivery squads",
      ],
      ctaText: "Inquire on Nearshore Pods",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-zinc-50/60 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-white text-[11px] font-mono text-zinc-600 uppercase tracking-wider mb-4">
            Engagement Categories
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Engineered for Commercial Reality
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            We adapt contract structures, payment schedules, and system resilience to the specific operating requirements of each client profile.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-xl p-8 border border-zinc-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 mb-6">
                  {pillar.badge}
                </span>

                <h3 className="text-xl font-semibold text-zinc-950 tracking-tight mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  {pillar.subtitle}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-zinc-100 font-mono text-xs text-zinc-700">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg bg-zinc-950 text-white font-sans font-semibold text-xs hover:bg-zinc-800 transition-all"
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
