import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-zinc-800">

          {/* Brand */}
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
                Tectonic
              </span>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-6">
              A website, business tools, and 3D visualization studio based in Ibadan, Nigeria. We help brands look premium and operate smarter.
            </p>

            <div className="text-[11px] font-mono text-zinc-500 space-y-1">
              <div>CAC Registration: <strong className="text-zinc-400">RC-741908</strong></div>
              <div>Data Protection: <strong className="text-zinc-400">NDPR Compliant</strong></div>
              <div>Headquarters: <strong className="text-zinc-400">Ibadan, Nigeria (GMT+1)</strong></div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Business Websites
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Business Tools
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Business Automation
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  3D Visualization
                </a>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Technology
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  Next.js 16
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  Three.js & WebGL
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  React & TailwindCSS
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  Paystack & Flutterwave
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  PostgreSQL & Prisma
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="mailto:tectonicteamz@gmail.com" className="hover:text-white transition-colors break-all">
                  tectonicteamz@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2347085905248" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  07085905248 (WhatsApp)
                </a>
              </li>
              <li className="pt-1">
                <a href="#contact" className="hover:text-white transition-colors">
                  Start a Project
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  View Pricing
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Tectonic. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
