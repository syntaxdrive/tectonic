"use client";

import React, { useState } from "react";
import { Check, Shield, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Nigerian SME Operations",
    budget: "$3,000 - $6,000",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Governance */}
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-600 uppercase tracking-wider mb-4">
              Direct Inquiries
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
              Schedule a Technical Architecture Audit
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Consult directly with senior solutions engineers. We review existing codebases, design data schemas, and draft fixed-scope delivery milestones.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-400">Direct Email</div>
                  <a href="mailto:hello@tectonic.ng" className="text-sm font-semibold text-zinc-950 hover:underline">
                    hello@tectonic.ng
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-400">Engineering Headquarters</div>
                  <div className="text-sm font-semibold text-zinc-950">
                    Ibadan, Nigeria (GMT+1) • Global Distributed
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-400">Response SLA</div>
                  <div className="text-sm font-semibold text-zinc-950">
                    Technical evaluation delivered within 4 business hours
                  </div>
                </div>
              </div>
            </div>

            {/* NDA Trust Box */}
            <div className="mt-10 p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <div className="flex items-center gap-2 text-zinc-900 font-semibold text-xs mb-1">
                <Shield className="w-4 h-4 text-zinc-700" />
                Non-Disclosure Agreement (NDA) Protected
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-mono">
                All business proposals, proprietary operational records, and system specifications are protected under binding mutual non-disclosure terms prior to technical discovery calls.
              </p>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7 bg-zinc-50 rounded-xl p-8 border border-zinc-200">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-zinc-950 text-white mx-auto flex items-center justify-center mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-950">Architecture Brief Received</h3>
                <p className="mt-2 text-zinc-600 text-xs sm:text-sm max-w-md mx-auto">
                  A lead systems engineer will review your operational specifications and reply with an initial technical roadmap within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-mono text-zinc-900 underline"
                >
                  Submit additional brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-600 mb-1.5">
                    Engagement Profile
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 font-mono text-xs focus:outline-none focus:border-zinc-950"
                  >
                    <option value="Nigerian SME Operations">Nigerian SME Operations (Digitization &amp; Settlement)</option>
                    <option value="Diaspora Cross-Border">Diaspora Founder / Cross-Border Platform</option>
                    <option value="Foreign Engineering Pod">Foreign Engineering Pod Outsourcing (GMT+1)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-600 mb-1.5">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Babatunde Alabi or James Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-xs focus:outline-none focus:border-zinc-950"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-600 mb-1.5">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="corporate@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-xs focus:outline-none focus:border-zinc-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-600 mb-1.5">
                    Anticipated Capital Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 font-mono text-xs focus:outline-none focus:border-zinc-950"
                  >
                    <option value="Under $3,000 / ₦4.5M">Under $3,000 / ₦4.5M (Technical Audit / Rapid Setup)</option>
                    <option value="$3,000 - $6,000 / ₦4.5M - ₦9M">$3,000 - $6,000 / ₦4.5M - ₦9M (Production MVP Sprint)</option>
                    <option value="$6,000 - $15,000 / ₦9M - ₦23M">$6,000 - $15,000 / ₦9M - ₦23M (Scale &amp; Multi-Tenant)</option>
                    <option value="Retainer ($4,000+/mo)">Retainer ($4,000+/mo / ₦6M+/mo Dedicated Pod)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-600 mb-1.5">
                    Technical Scope &amp; Current Bottlenecks
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Outline existing databases, transaction flows, integrations, or operational leakage..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-xs focus:outline-none focus:border-zinc-950"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-zinc-950 text-white font-sans font-semibold text-xs hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  Submit Architecture Brief for Formal Review
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
