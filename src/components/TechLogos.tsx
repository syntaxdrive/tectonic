import React from "react";

export function TechLogos() {
  return (
    <section className="py-12 border-y border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-8">
          Core Engineering Ecosystem &amp; Payment Rails
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-80">
          
          {/* Next.js */}
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-base tracking-tight font-sans">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 180 180" fill="none">
              <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
                <circle cx="90" cy="90" fill="black" r="90" />
              </mask>
              <g mask="url(#mask0)">
                <circle cx="90" cy="90" fill="black" r="90" />
                <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="white" />
                <rect fill="white" height="72" width="12" x="115" y="54" />
              </g>
            </svg>
            <span>Next.js 16</span>
          </div>

          {/* React */}
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-base tracking-tight font-sans">
            <div className="w-5 h-5 rounded bg-zinc-950 text-white flex items-center justify-center font-mono text-[9px] font-bold">
              R
            </div>
            <span>React 19</span>
          </div>

          {/* Three.js */}
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-base tracking-tight font-sans">
            <div className="w-5 h-5 rounded bg-zinc-950 text-white flex items-center justify-center font-mono text-[9px] font-bold">
              3D
            </div>
            <span>Three.js (WebGL)</span>
          </div>

          {/* NestJS */}
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-base tracking-tight font-sans">
            <div className="w-5 h-5 rounded bg-zinc-950 text-white flex items-center justify-center font-mono text-[9px] font-bold">
              N
            </div>
            <span>NestJS Core</span>
          </div>

          {/* PostgreSQL */}
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-base tracking-tight font-sans">
            <div className="w-5 h-5 rounded bg-zinc-950 text-white flex items-center justify-center font-mono text-[9px] font-bold">
              PG
            </div>
            <span>PostgreSQL</span>
          </div>

          {/* Paystack */}
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-base tracking-tight font-sans">
            <div className="w-5 h-5 rounded bg-zinc-950 text-white flex items-center justify-center font-mono text-[9px] font-bold">
              P
            </div>
            <span>Paystack Direct</span>
          </div>

          {/* Flutterwave */}
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-base tracking-tight font-sans">
            <div className="w-5 h-5 rounded bg-zinc-950 text-white flex items-center justify-center font-mono text-[9px] font-bold">
              FW
            </div>
            <span>Flutterwave</span>
          </div>

          {/* Amazon Web Services */}
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-base tracking-tight font-sans">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-800 font-bold">AWS Cape Town</span>
          </div>

        </div>
      </div>
    </section>
  );
}
