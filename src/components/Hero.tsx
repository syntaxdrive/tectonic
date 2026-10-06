"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { TectonicHeroCanvas } from "./TectonicHeroCanvas";

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Studio Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono font-medium text-zinc-500 mb-8 tracking-wide uppercase">
          <span>Tectonic</span>
          <span className="text-zinc-300">/</span>
          <span>Website & 3D Visualization Studio</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-950 max-w-5xl mx-auto leading-[1.08] font-sans">
          Websites, tools, and real-time 3D for ambitious brands
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-zinc-500 max-w-2xl mx-auto font-normal leading-relaxed">
          We design and build professional websites, business automation tools, and photorealistic Three.js visualizations — homes, products, and machines rendered in the browser.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-all active:scale-95"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-lg bg-white text-zinc-700 text-sm font-semibold border border-zinc-200 hover:bg-zinc-50 transition-all active:scale-95"
          >
            View Our Work
          </a>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-zinc-500" /> Full IP Ownership
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-zinc-500" /> Fixed Transparent Pricing
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-zinc-500" /> CAC Registered Studio
          </span>
        </div>

        {/* Hero Canvas */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
          <TectonicHeroCanvas />
        </div>

      </div>
    </section>
  );
}
