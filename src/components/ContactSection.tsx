"use client";

import React, { useState } from "react";
import { Check, Shield, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Business Website",
    budget: "₦150k – ₦350k",
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

          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-sans">
              Tell us about your project
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
              We offer a free discovery call to understand your goals, review your requirements, and give you an honest scope and price estimate.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-400 mb-0.5">Email</div>
                  <a href="mailto:tectonicteamz@gmail.com" className="text-sm font-semibold text-zinc-950 hover:underline">
                    tectonicteamz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-400 mb-0.5">WhatsApp</div>
                  <a href="https://wa.me/2347085905248" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-950 hover:underline">
                    07085905248
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-400 mb-0.5">Studio Location</div>
                  <div className="text-sm font-semibold text-zinc-950">
                    Ibadan, Nigeria (GMT+1)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <div className="flex items-center gap-2 text-zinc-800 font-semibold text-xs mb-1">
                <Shield className="w-4 h-4 text-zinc-500" />
                Your details stay private
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                All project briefs are treated confidentially. We do not share your information with third parties.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-zinc-950 text-white mx-auto flex items-center justify-center mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-950">Message received</h3>
                <p className="mt-2 text-zinc-500 text-sm max-w-md mx-auto">
                  We will review your brief and get back to you within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-mono text-zinc-500 hover:text-zinc-900 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-500 mb-1.5">
                    What do you need?
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="Business Tool or Automation">Business Tool or Automation</option>
                    <option value="3D Visualization">3D Visualization (Architectural / Product / Industrial)</option>
                    <option value="Website + Tool Bundle">Website + Tool Bundle</option>
                    <option value="International Project">International / Diaspora Project</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-500 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amara Osei"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-500 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-500 mb-1.5">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                  >
                    <option value="₦150k – ₦350k">₦150k – ₦350k (Starter Website)</option>
                    <option value="₦400k – ₦800k">₦400k – ₦800k (Business Package)</option>
                    <option value="₦800k – ₦2M+">₦800k – ₦2M+ (3D Visualization / Large Project)</option>
                    <option value="$200 – $1,000 USD">$200 – $1,000 USD (International)</option>
                    <option value="$1,000 – $3,500 USD">$1,000 – $3,500 USD (International Premium)</option>
                    <option value="Not sure yet">Not sure yet — need guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-500 mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="What does your business do? What problem are you trying to solve or what do you want to build?"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  Send Project Brief
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
