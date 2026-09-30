"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does Tectonic NG protect diaspora investors from execution and delivery failure?",
      a: "We operate under formal legal governance. Every engagement is bound by a commercial contract with scheduled milestone escrows. We maintain continuous deployment pipelines allowing real-time staging audits in your browser, paired with weekly recorded video demonstrations. You have administrative visibility into the private GitHub repository from day one.",
    },
    {
      q: "Why do you specialize in Next.js, Three.js, and NestJS over traditional CMS templates?",
      a: "Monolithic CMS platforms like WordPress or Shopify fail when scaling custom business logic, multi-warehouse synchronization, or complex relational ledgers. Our full-stack TypeScript architecture delivers sub-second load times, total design ownership, strict type safety, and the capacity to process millions of transactions without architectural rewrites.",
    },
    {
      q: "Can domestic Nigerian enterprises settle invoices in local currency (NGN)?",
      a: "Yes. Nigerian corporations settle in NGN via direct corporate bank transfer, Paystack, or Flutterwave. Diaspora and international clients settle in USD, GBP, EUR, or CAD through Stripe, Wise, or international bank wire.",
    },
    {
      q: "Who retains legal ownership of the code and intellectual property?",
      a: "The client owns 100% of all intellectual property. Upon clearance of contractual milestones, all repository ownership, database encryption keys, and infrastructure configurations are formally transferred to your administrative accounts.",
    },
    {
      q: "How does nearshore engineering pod collaboration operate?",
      a: "Nigeria operates in the GMT+1 timezone — sharing identical working hours with London, Berlin, and Paris, with extensive midday overlap with the US East Coast. Our dedicated pods integrate natively into your Slack, Linear, and GitHub workflows with daily asynchronous standups.",
    },
    {
      q: "What is your turnaround SLA for production MVP deliveries?",
      a: "Standard MVP Sprints are delivered in 4 to 6 weeks. This umfasst system architecture, database modeling, responsive UI/UX implementation, transactional API endpoints, third-party payment rails, and production staging deployment.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-50/60 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-white text-[11px] font-mono text-zinc-600 uppercase tracking-wider mb-4">
            Governance &amp; Operations FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 font-sans">
            Frequently Addressed Operational Questions
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            Clear standards governing contracts, IP transfer, and nearshore execution.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-zinc-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-zinc-900 text-sm hover:text-black cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className="w-6 h-6 rounded bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-600">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
