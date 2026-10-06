"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "A starter business website typically takes 2 to 3 weeks. A full business package with a custom tool or automation takes 3 to 5 weeks. 3D visualization projects are scoped individually depending on complexity, but most complete within 4 to 6 weeks. We give you a clear timeline before we start.",
    },
    {
      q: "Do I own the website and everything you build?",
      a: "Yes — fully. On project completion, all files, code, hosting accounts, and design assets transfer to you. We do not use proprietary systems or lock you into any platform. You can take everything and work with any developer in the future.",
    },
    {
      q: "Can I pay in Naira?",
      a: "Yes. Nigerian clients pay in NGN via direct bank transfer, Paystack, or Flutterwave. International and diaspora clients pay in USD, GBP, or EUR via Stripe or Wise. We are transparent about all fees — no hidden conversion charges.",
    },
    {
      q: "What exactly is a 3D visualization?",
      a: "We build interactive 3D experiences that run in the browser using Three.js and WebGL. This means a real estate developer can let buyers tour a property before it is built, a furniture brand can let customers change fabric and finish in real time, or a manufacturer can showcase a machine with photorealistic metal, glass, and rubber textures — all without a physical photoshoot or video production.",
    },
    {
      q: "What does 'business automation' mean?",
      a: "Business automation means using software to handle repetitive tasks automatically — so your team spends less time on admin. Examples include: automatic invoice generation when an order is placed, scheduled email or SMS reminders for appointments, form submissions that populate a dashboard or spreadsheet, and payment reconciliation reports delivered to your inbox weekly. We identify what manual steps cost you the most time and build tools to eliminate them.",
    },
    {
      q: "Do you offer support after the project is launched?",
      a: "All projects include a 14 to 30-day post-launch support window depending on the package. During this period we fix any bugs and help you get comfortable using the site or tool. Beyond that, we offer optional monthly maintenance retainers for clients who want ongoing updates, hosting management, and priority support.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 font-sans">
            Answers before you ask
          </h2>
          <p className="mt-3 text-sm text-zinc-500">
            Straightforward answers about how we work, what we charge, and what you get.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-50 rounded-xl border border-zinc-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-zinc-900 text-sm hover:text-black cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 text-zinc-600">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 pt-3">
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
