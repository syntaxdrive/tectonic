import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded overflow-hidden bg-white shrink-0">
                <Image
                  src="/tectonic-logo.jpg"
                  alt="Tectonic Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white font-sans">
                Tectonic <span className="text-xs font-mono text-zinc-400">NG</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-6 font-mono">
              Tectonic NG Technologies Ltd is a registered corporate product engineering studio. Designing and maintaining transactional web, mobile, and WebGL architectures.
            </p>

            <div className="text-[11px] font-mono text-zinc-500 space-y-1">
              <div>Corporate Affairs Commission: <strong>RC-741908</strong></div>
              <div>Data Protection: <strong>NDPR Compliant</strong></div>
              <div>Headquarters: <strong>Lagos, Nigeria (GMT+1)</strong></div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  SME Systems &amp; POS
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Diaspora Milestone Escrow
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Nearshore Engineering Pods
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Scope &amp; Budget Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Technology Column */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Core Architecture
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  Next.js 16 &amp; React 19
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  Three.js &amp; WebGL
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  NestJS Microservices
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  PostgreSQL &amp; Redis Ledgers
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  Paystack / Flutterwave Rails
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Compliance */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Contract &amp; Governance
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
              <li>
                <span className="text-zinc-200 block font-semibold">Full IP Assignment</span>
                <span className="text-[10px] text-zinc-500">100% Repository Transfer</span>
              </li>
              <li className="pt-1.5">
                <span className="text-zinc-200 block font-semibold">Milestone Escrows</span>
                <span className="text-[10px] text-zinc-500">Scheduled Staging Clearances</span>
              </li>
              <li className="pt-1.5">
                <span className="text-zinc-200 block font-semibold">NDPR Certified</span>
                <span className="text-[10px] text-zinc-500">Encrypted Data Retention</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Tectonic NG Technologies Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Governance</a>
            <a href="#" className="hover:text-zinc-300">Information Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
