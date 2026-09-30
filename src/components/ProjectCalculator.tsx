"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ProjectCalculator() {
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD");
  const [projectType, setProjectType] = useState<"mvp" | "enterprise" | "pod">("mvp");
  const [include3D, setInclude3D] = useState(true);
  const [includePayments, setIncludePayments] = useState(true);
  const [includeMobile, setIncludeMobile] = useState(false);

  const exchangeRate = 1550;

  const basePrices = {
    mvp: { usd: 3500, time: "4–6 Weeks", desc: "Production-ready MVP with Next.js & NestJS" },
    enterprise: { usd: 8500, time: "8–12 Weeks", desc: "Multi-tenant platform, high-concurrency DB & SLA" },
    pod: { usd: 4200, time: "Monthly Retainer", desc: "Dedicated senior full-stack engineer pod" },
  };

  let totalUSD = basePrices[projectType].usd;
  if (include3D) totalUSD += 1200;
  if (includePayments) totalUSD += 600;
  if (includeMobile) totalUSD += 2400;

  const totalNGN = totalUSD * exchangeRate;

  return (
    <section id="calculator" className="py-24 bg-zinc-950 text-white border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-800 bg-zinc-900 text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-4">
            Scope &amp; Architecture Estimator
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight font-sans">
            Calculate Architecture Scope &amp; Budget
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Configure system specifications below for an indicative upfront estimate. All deliverables are fixed-scope with zero billable overages.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl p-6 sm:p-10 border border-zinc-800 shadow-2xl">
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800 font-mono text-xs">
            <span className="text-zinc-400 uppercase">Billing Currency</span>
            <div className="flex bg-zinc-950 p-1 rounded border border-zinc-800">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  currency === "USD"
                    ? "bg-white text-zinc-950 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                USD ($) / Cross-Border
              </button>
              <button
                onClick={() => setCurrency("NGN")}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  currency === "NGN"
                    ? "bg-white text-zinc-950 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                NGN (₦) / Domestic
              </button>
            </div>
          </div>

          {/* Project Type Selector */}
          <div className="mt-8 font-mono">
            <label className="block text-xs uppercase text-zinc-400 mb-3">
              1. Engagement Structure
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "mvp", title: "Founder MVP Sprint", time: "4–6 Weeks Delivery" },
                { id: "enterprise", title: "Scale / Enterprise App", time: "8–12 Weeks Delivery" },
                { id: "pod", title: "Dedicated Engineering Pod", time: "Monthly Rolling Retainer" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setProjectType(item.id as any)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    projectType === item.id
                      ? "bg-zinc-800 border-white text-white"
                      : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <div className="font-semibold text-xs text-white">{item.title}</div>
                  <div className="text-[11px] text-zinc-500 mt-1">{item.time}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-8 font-mono">
            <label className="block text-xs uppercase text-zinc-400 mb-3">
              2. Technical Modules &amp; Infrastructure
            </label>
            <div className="space-y-2.5">
              <label className="flex items-center justify-between p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 cursor-pointer hover:border-zinc-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={include3D}
                    onChange={(e) => setInclude3D(e.target.checked)}
                    className="w-4 h-4 rounded text-zinc-900 bg-zinc-900 border-zinc-700 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Three.js / WebGL Interactive 3D Model
                    </div>
                    <div className="text-[11px] text-zinc-500">Photorealistic PBR materials, orbit controls, and mobile optimization</div>
                  </div>
                </div>
                <span className="text-xs text-zinc-400">
                  +{currency === "USD" ? "$1,200" : `₦${(1200 * exchangeRate).toLocaleString()}`}
                </span>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 cursor-pointer hover:border-zinc-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includePayments}
                    onChange={(e) => setIncludePayments(e.target.checked)}
                    className="w-4 h-4 rounded text-zinc-900 bg-zinc-900 border-zinc-700 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Payment Rails &amp; Webhook Deduplication
                    </div>
                    <div className="text-[11px] text-zinc-500">Paystack / Flutterwave integration with automated retry workers</div>
                  </div>
                </div>
                <span className="text-xs text-zinc-400">
                  +{currency === "USD" ? "$600" : `₦${(600 * exchangeRate).toLocaleString()}`}
                </span>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 cursor-pointer hover:border-zinc-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeMobile}
                    onChange={(e) => setIncludeMobile(e.target.checked)}
                    className="w-4 h-4 rounded text-zinc-900 bg-zinc-900 border-zinc-700 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Cross-Platform Mobile Application
                    </div>
                    <div className="text-[11px] text-zinc-500">React Native codebase with offline-first SQLite sync and push notifications</div>
                  </div>
                </div>
                <span className="text-xs text-zinc-400">
                  +{currency === "USD" ? "$2,400" : `₦${(2400 * exchangeRate).toLocaleString()}`}
                </span>
              </label>
            </div>
          </div>

          {/* Result Calculation Bar */}
          <div className="mt-10 p-6 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono">
            <div>
              <div className="text-[10px] uppercase text-zinc-500">
                Indicative Project Investment
              </div>
              <div className="text-3xl font-bold text-white mt-1">
                {currency === "USD"
                  ? `$${totalUSD.toLocaleString()}`
                  : `₦${totalNGN.toLocaleString()}`}
                <span className="text-xs font-normal text-zinc-500 ml-2">
                  {projectType === "pod" ? "/ month" : "fixed milestone"}
                </span>
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Target Timeline: {basePrices[projectType].time}
              </div>
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-zinc-950 font-sans font-semibold text-xs hover:bg-zinc-200 transition-all cursor-pointer"
            >
              <span>Submit Scope for Technical Review</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
