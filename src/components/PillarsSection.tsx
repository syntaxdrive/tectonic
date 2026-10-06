"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

export function PillarsSection() {
  const pillars = [
    {
      id: "realestate",
      badge: "Category 01",
      title: "Real Estate & Architecture",
      subtitle: "Help buyers see it before it is built. Interactive 3D walkthroughs, photorealistic renders, and property websites that close deals faster.",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Modern architectural villa with ambient lighting",
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
      badge: "Category 02",
      title: "Retail, Fashion & Luxury Goods",
      subtitle: "Showcase your products in stunning detail. Real-time 3D configurators, brand-forward online stores, and business tools that run your operations.",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Minimalist fashion boutique display",
      features: [
        "3D product configurators — change colour, material, and finish in real time",
        "Online stores and lookbooks with fast mobile checkout",
        "Inventory, order management, and invoice automation",
        "Automated customer notifications and scheduling tools",
      ],
      ctaText: "Inquire on Retail",
    },
    {
      id: "healthcare",
      badge: "Category 03",
      title: "Private Clinics & Diagnostics",
      subtitle: "Modern, reassuring patient experiences. Online test directories, automated appointment booking, and instant result delivery portals.",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Clean modern clinical medical laboratory interior",
      features: [
        "Self-serve diagnostic test booking with strict fasting slot management",
        "Transparent test pricing directories with home sample collection toggles",
        "Automated WhatsApp & email test result dispatch for patients",
        "Physician referral portals with patient test history tracking",
      ],
      ctaText: "Inquire on Healthcare",
    },
    {
      id: "hospitality",
      badge: "Category 04",
      title: "Hospitality, Dining & Cafés",
      subtitle: "Elevate your guest experience before they arrive. Visual digital menus, direct table reservation engines, and private event booking desks.",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Warm artisan coffee roastery and restaurant dining room",
      features: [
        "Editorial food & drink visual menus with mobile ordering links",
        "Live table reservation calendar with party size and seating options",
        "Direct WhatsApp takeaway orders with automated payment verification",
        "Private dining room and corporate event inquiry pipelines",
      ],
      ctaText: "Inquire on Hospitality",
    },
    {
      id: "consulting",
      badge: "Category 05",
      title: "Professional Firms & Consultancies",
      subtitle: "Institutional credibility that wins high-value retainers. Bespoke sites for law chambers, accounting practices, and advisory firms.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Modern executive legal and corporate boardroom",
      features: [
        "Credential and partner profile directories that build corporate trust",
        "Secure client portals with encrypted file sharing and milestone sign-offs",
        "Automated retainer invoicing with Paystack & bank wire confirmation",
        "Formal discovery brief intake forms with mutual NDA protection",
      ],
      ctaText: "Inquire on Professional Firms",
    },
    {
      id: "international",
      badge: "Category 06",
      title: "International & Diaspora Brands",
      subtitle: "Premium web and 3D production from Ibadan, delivered to international standards. Billed in USD or GBP with clear milestones and full ownership.",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Modern technology hardware and robotics design laboratory",
      features: [
        "Photorealistic Three.js and WebGL production for European and UK clients",
        "Full-stack websites and web applications in Next.js",
        "Direct GMT+1 timezone alignment with London and European teams",
        "Fixed-scope delivery with 100% intellectual property assignment",
      ],
      ctaText: "Inquire on International",
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
            Built for businesses ready to look world-class
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
            From property developers and boutique retailers to private diagnostic clinics and executive advisory firms. We build websites and custom tools that drive genuine business outcomes.
          </p>
        </div>

        {/* 6-Category Grid (2 rows of 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/80 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="inline-block text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-200 text-zinc-700">
                    {pillar.badge}
                  </span>
                </div>

                {/* Web Photography Header */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 bg-zinc-200 border border-zinc-200">
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <h3 className="text-xl font-semibold text-zinc-950 tracking-tight mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs text-zinc-500 leading-relaxed mb-5">
                  {pillar.subtitle}
                </p>

                <div className="space-y-2 pt-4 border-t border-zinc-200 text-xs text-zinc-600">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-200">
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
