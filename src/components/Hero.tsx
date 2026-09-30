"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import { TectonicHeroCanvas } from "./TectonicHeroCanvas";

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Institutional Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono font-medium text-zinc-600 mb-8 tracking-wide uppercase">
          <span>Tectonic NG Technologies Ltd</span>
          <span className="text-zinc-300">/</span>
          <span>Product Engineering Studio</span>
        </div>

        {/* Main Hero Header */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-950 max-w-5xl mx-auto leading-[1.08] font-sans">
          Enterprise Software Engineering &amp; Digital Infrastructure
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-zinc-600 max-w-3xl mx-auto font-normal leading-relaxed">
          We design, build, and maintain production-grade web applications, transactional backends, and interactive WebGL platforms for Nigerian scaling businesses, cross-border diaspora founders, and global engineering teams.
        </p>

        {/* Action Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-lg bg-zinc-950 text-white text-xs font-semibold tracking-tight hover:bg-zinc-800 transition-all active:scale-95"
          >
            <span>Book Technical Architecture Audit</span>
          </a>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-lg bg-white text-zinc-800 text-xs font-semibold tracking-tight border border-zinc-300 hover:bg-zinc-50 transition-all active:scale-95"
          >
            <span>Review Production Case Studies</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-500 font-mono">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-zinc-700" /> Full Repository IP Assignment
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-zinc-700" /> Milestone Escrow Protection
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-zinc-700" /> NDPR Compliant &amp; CAC Registered
          </span>
        </div>

        {/* Hero Showcase Container */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-zinc-200">
          <TectonicHeroCanvas />
        </div>

      </div>
    </section>
  );
}
