"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-zinc-200 shrink-0">
            <Image
              src="/tectonic-logo.jpg"
              alt="Tectonic NG Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold text-lg tracking-tight text-zinc-950 font-sans">
            Tectonic <span className="text-xs font-mono font-medium text-zinc-500 uppercase">NG</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <div className="relative group">
            <button 
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              onMouseEnter={() => setSolutionsOpen(true)}
              className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors py-2 cursor-pointer"
            >
              <span>Solutions</span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 transition-transform" />
            </button>

            {/* Dropdown Menu */}
            <div 
              onMouseLeave={() => setSolutionsOpen(false)}
              className={`absolute top-full left-0 mt-1 w-80 p-2 bg-white rounded-xl shadow-xl border border-zinc-200 transition-all duration-150 ${
                solutionsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <a href="#solutions" className="block p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                <div className="font-semibold text-zinc-900 text-xs flex items-center justify-between">
                  SME Systems & Digitization
                  <span className="text-[10px] text-zinc-500 font-mono">Domestic</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Payment reconciliation, inventory engines, and offline-first mobile architecture.</p>
              </a>
              <a href="#solutions" className="block p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                <div className="font-semibold text-zinc-900 text-xs flex items-center justify-between">
                  Diaspora Ventures & Escrow
                  <span className="text-[10px] text-zinc-500 font-mono">Cross-Border</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Contract-backed engineering, milestone escrows, and audited GitHub delivery.</p>
              </a>
              <a href="#solutions" className="block p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                <div className="font-semibold text-zinc-900 text-xs flex items-center justify-between">
                  Engineering Pod Outsourcing
                  <span className="text-[10px] text-zinc-500 font-mono">GMT+1</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Dedicated senior TypeScript & Three.js engineering pods aligned with UK and Europe.</p>
              </a>
            </div>
          </div>

          <a href="#portfolio" className="hover:text-zinc-950 transition-colors font-medium">
            Case Studies
          </a>

          <a href="#blueprints" className="hover:text-zinc-950 transition-colors">
            Software Engines
          </a>

          <a href="#stack" className="hover:text-zinc-950 transition-colors">
            Architecture
          </a>

          <a href="#calculator" className="hover:text-zinc-950 transition-colors">
            Estimator
          </a>

          <a href="#pricing" className="hover:text-zinc-950 transition-colors">
            Engagements
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Inquire
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-zinc-950 text-white text-xs font-semibold tracking-tight hover:bg-zinc-800 transition-all active:scale-95"
          >
            Schedule Technical Audit
          </a>
        </div>

        {/* Mobile Hamburger Button */}
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Case Studies
          </a>
          <a
            href="#blueprints"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Software Engines
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Solutions
          </a>
          <a
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Architecture
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Cost Estimator
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Engagements
          </a>
          <div className="pt-3 border-t border-zinc-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-zinc-950 text-white text-xs font-semibold"
            >
              Schedule Technical Audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
