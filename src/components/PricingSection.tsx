"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

export function PricingSection() {
  const tiers = [
    {
      name: "Starter Website",
      tagline: "For small businesses that need a clean, fast, professional online presence.",
      priceNGN: "₦150k – ₦350k",
      priceUSD: "$200 – $450",
      duration: "2 – 3 Weeks Delivery",
      badge: "Small Business",
      highlight: false,
      features: [
        "Up to 5 pages — Home, About, Services, Portfolio, Contact",
        "Mobile-first responsive design, no templates",
        "Contact form and basic SEO setup",
        "Fast hosting configuration and domain connection",
        "Full ownership — your website, your files, your hosting",
        "14-day post-launch support warranty",
      ],
      cta: "Get a Starter Website",
    },
    {
      name: "Business Website + Tool",
      tagline: "For growing brands that need a strong site and a tool that saves hours every week.",
      priceNGN: "₦400k – ₦800k",
      priceUSD: "$500 – $1,000",
      duration: "3 – 5 Weeks Delivery",
      badge: "Most Popular",
      highlight: true,
      features: [
        "Full business website with custom design and animations",
        "One business tool — booking system, invoice generator, or staff portal",
        "Payment integration (Paystack, Flutterwave, or Stripe)",
        "Business automation — scheduled emails, form pipelines, or reports",
        "Client dashboard or admin panel for managing data",
        "30-day post-launch support and maintenance",
      ],
      cta: "Start a Business Package",
    },
    {
      name: "3D Visualization",
      tagline: "For brands that need photorealistic renders — properties, products, or machines.",
      priceNGN: "₦500k – ₦2M+",
      priceUSD: "$600 – $2,500+",
      duration: "Scoped Per Project",
      badge: "Premium",
      highlight: false,
      features: [
        "Interactive Three.js / WebGL visualization in the browser",
        "Photorealistic PBR materials — concrete, glass, metal, fabric, wood",
        "Architectural walkthroughs, product configurators, or industrial renders",
        "Optimized for mobile and slow Nigerian connections",
        "Embeddable in any existing website or standalone experience",
        "Full source code and asset ownership on delivery",
      ],
      cta: "Inquire on 3D Project",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-white text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
            Clear prices. No surprises.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
            Fixed-scope delivery with transparent pricing in NGN and USD. You own everything we build.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                tier.highlight
                  ? "bg-zinc-950 text-white shadow-2xl border border-zinc-800"
                  : "bg-white text-zinc-900 border border-zinc-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                      tier.highlight
                        ? "bg-white text-zinc-950"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  {tier.name}
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${tier.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                  {tier.tagline}
                </p>

                <div className={`mb-6 pb-6 border-b ${tier.highlight ? "border-zinc-800" : "border-zinc-100"}`}>
                  <div className="text-2xl font-bold tracking-tight font-mono">
                    {tier.priceNGN}
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${tier.highlight ? "text-zinc-400" : "text-zinc-400"}`}>
                    {tier.priceUSD} USD equivalent
                  </div>
                  <div className={`text-xs font-mono mt-1 font-semibold ${tier.highlight ? "text-zinc-300" : "text-zinc-600"}`}>
                    {tier.duration}
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${tier.highlight ? "text-zinc-400" : "text-zinc-400"}`} />
                      <span className={`leading-snug ${tier.highlight ? "text-zinc-300" : "text-zinc-600"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200/20">
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg text-xs font-semibold transition-all ${
                    tier.highlight
                      ? "bg-white text-zinc-950 hover:bg-zinc-100"
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

        <p className="text-center text-xs text-zinc-400 font-mono mt-8">
          All prices are indicative. Final scope and pricing confirmed after a free discovery call.
        </p>

      </div>
    </section>
  );
}
