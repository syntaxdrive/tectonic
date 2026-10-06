"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-zinc-200 shrink-0">
            <Image
              src="/tectonic-logo.jpg"
              alt="Tectonic Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold text-lg tracking-tight text-zinc-950 font-sans">
            Tectonic
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors py-2 cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            <div
              onMouseLeave={() => setServicesOpen(false)}
              className={`absolute top-full left-0 mt-1 w-80 p-2 bg-white rounded-xl shadow-xl border border-zinc-200 transition-all duration-150 ${
                servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <a href="#solutions" className="block p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                <div className="font-semibold text-zinc-900 text-xs flex items-center justify-between">
                  Business Websites
                  <span className="text-[10px] text-zinc-400 font-mono">Local & International</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Fast, mobile-first websites that convert visitors into customers.</p>
              </a>
              <a href="#solutions" className="block p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                <div className="font-semibold text-zinc-900 text-xs flex items-center justify-between">
                  Business Tools & Automation
                  <span className="text-[10px] text-zinc-400 font-mono">Custom Software</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Booking systems, invoicing dashboards, and automated workflows.</p>
              </a>
              <a href="#solutions" className="block p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                <div className="font-semibold text-zinc-900 text-xs flex items-center justify-between">
                  3D Visualization
                  <span className="text-[10px] text-zinc-400 font-mono">Three.js / WebGL</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Photorealistic renders of homes, products, and machines in the browser.</p>
              </a>
            </div>
          </div>

          <a href="#projects" className="hover:text-zinc-950 transition-colors">
            Projects
          </a>

          <a href="#pricing" className="hover:text-zinc-950 transition-colors">
            Pricing
          </a>

          <a href="#faq" className="hover:text-zinc-950 transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">
            Contact
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-all active:scale-95"
          >
            Start a Project
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-zinc-700 hover:bg-zinc-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-1">
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded text-sm font-medium text-zinc-900 hover:bg-zinc-50">
            Services
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded text-sm font-medium text-zinc-700 hover:bg-zinc-50">
            Projects
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded text-sm font-medium text-zinc-700 hover:bg-zinc-50">
            Pricing
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded text-sm font-medium text-zinc-700 hover:bg-zinc-50">
            FAQ
          </a>
          <div className="pt-3 border-t border-zinc-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 text-white text-xs font-semibold"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
