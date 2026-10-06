"use client";

import React, { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";

export function ProjectCalculator() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [projectType, setProjectType] = useState<"starter" | "business" | "visual3d">("business");
  const [include3D, setInclude3D] = useState(false);
  const [includePayments, setIncludePayments] = useState(true);
  const [includeBooking, setIncludeBooking] = useState(false);

  const exchangeRate = 1500;

  const basePrices = {
    starter: {
      ngn: 250000,
      usd: 300,
      time: "2–3 Weeks Delivery",
      title: "Starter Website",
      desc: "Clean, fast, mobile-first business site (up to 5 pages).",
    },
    business: {
      ngn: 550000,
      usd: 700,
      time: "3–5 Weeks Delivery",
      title: "Business Site + Tool",
      desc: "Custom business site paired with a custom dashboard or tool.",
    },
    visual3d: {
      ngn: 950000,
      usd: 1200,
      time: "3–5 Weeks Delivery",
      title: "3D Visualization",
      desc: "Interactive WebGL architectural or product walkthrough in 3D.",
    },
  };

  let totalNGN = basePrices[projectType].ngn;
  let totalUSD = basePrices[projectType].usd;

  if (include3D && projectType !== "visual3d") {
    totalNGN += 350000;
    totalUSD += 450;
  }
  if (includePayments) {
    totalNGN += 150000;
    totalUSD += 200;
  }
  if (includeBooking) {
    totalNGN += 150000;
    totalUSD += 200;
  }

  return (
    <section id="calculator" className="py-24 bg-zinc-950 text-white border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-zinc-800 bg-zinc-900 text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight font-sans">
            Estimate your project in seconds
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Select what you need below to get an upfront estimate. All projects include full code ownership and transparent milestones.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-900/90 rounded-2xl p-6 sm:p-10 border border-zinc-800 shadow-2xl">
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800 font-mono text-xs">
            <span className="text-zinc-400 uppercase">Billing Currency</span>
            <div className="flex bg-zinc-950 p-1 rounded-lg border border-zinc-800">
              <button
                onClick={() => setCurrency("NGN")}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  currency === "NGN"
                    ? "bg-white text-zinc-950 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                NGN (₦) Local
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  currency === "USD"
                    ? "bg-white text-zinc-950 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                USD ($) International
              </button>
            </div>
          </div>

          {/* Project Type Selector */}
          <div className="mt-8 font-mono">
            <label className="block text-xs uppercase text-zinc-400 mb-3">
              1. Choose Project Base
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "starter", data: basePrices.starter },
                { id: "business", data: basePrices.business },
                { id: "visual3d", data: basePrices.visual3d },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setProjectType(item.id as any)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    projectType === item.id
                      ? "bg-zinc-800 border-white text-white shadow-lg"
                      : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <div className="font-semibold text-xs text-white">{item.data.title}</div>
                  <div className="text-[11px] text-zinc-400 mt-1">{item.data.time}</div>
                  <div className="text-[10px] text-zinc-500 mt-2 line-clamp-2">{item.data.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-8 font-mono">
            <label className="block text-xs uppercase text-zinc-400 mb-3">
              2. Optional Features &amp; Integrations
            </label>
            <div className="space-y-2.5">
              {projectType !== "visual3d" && (
                <label className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={include3D}
                      onChange={(e) => setInclude3D(e.target.checked)}
                      className="w-4 h-4 rounded text-zinc-900 bg-zinc-900 border-zinc-700 focus:ring-0"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Three.js Interactive 3D Model / Tour
                      </div>
                      <div className="text-[11px] text-zinc-400">Photorealistic PBR materials &amp; mobile orbit controls</div>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-300 font-semibold">
                    +{currency === "NGN" ? "₦350,000" : "$450"}
                  </span>
                </label>
              )}

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includePayments}
                    onChange={(e) => setIncludePayments(e.target.checked)}
                    className="w-4 h-4 rounded text-zinc-900 bg-zinc-900 border-zinc-700 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Automated Paystack / Stripe Invoicing Rails
                    </div>
                    <div className="text-[11px] text-zinc-400">One-click payment links, receipt dispatch &amp; webhook confirmation</div>
                  </div>
                </div>
                <span className="text-xs text-zinc-300 font-semibold">
                  +{currency === "NGN" ? "₦150,000" : "$200"}
                </span>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeBooking}
                    onChange={(e) => setIncludeBooking(e.target.checked)}
                    className="w-4 h-4 rounded text-zinc-900 bg-zinc-900 border-zinc-700 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Self-Serve Appointment &amp; Booking Calendar
                    </div>
                    <div className="text-[11px] text-zinc-400">Automated SMS/Email reminders &amp; consultation deposit collection</div>
                  </div>
                </div>
                <span className="text-xs text-zinc-300 font-semibold">
                  +{currency === "NGN" ? "₦150,000" : "$200"}
                </span>
              </label>
            </div>
          </div>

          {/* Result Calculation Bar */}
          <div className="mt-10 p-6 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono">
            <div>
              <div className="text-[10px] uppercase text-zinc-400">
                Estimated Upfront Investment
              </div>
              <div className="text-3xl font-bold text-white mt-1">
                {currency === "NGN"
                  ? `₦${totalNGN.toLocaleString()}`
                  : `$${totalUSD.toLocaleString()}`}
                <span className="text-xs font-normal text-zinc-400 ml-2">
                  fixed delivery
                </span>
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Estimated Delivery: {basePrices[projectType].time}
              </div>
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-zinc-950 font-sans font-semibold text-xs hover:bg-zinc-200 transition-all cursor-pointer"
            >
              <span>Discuss This Scope With Us</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
