"use client";

import React, { useState } from "react";
import { ChevronDown, PhoneCall, Mail, HelpCircle } from "lucide-react";

interface FAQProps {
  onOpenBooking: () => void;
}

export default function FAQ({ onOpenBooking }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why do corporate leaders need specialized wealth planning?",
      answer:
        "Standard Chartered Accountants focus retrospectively on tax filing, while bank relationship managers push high-commission insurance or structured PMS products. Fintoo operates as a SEBI-registered Fiduciary (RIA) — we do not sell products or accept commissions. We specialize specifically in RSU foreign tax credits (Form 67), ESOP liquidity timing, 39% peak surcharge mitigation, and single-stock de-risking.",
    },
    {
      question: "How does Fintoo charge for advisory? Are there any hidden commissions?",
      answer:
        "We operate strictly on a transparent, fee-only advisory model. We do not earn any distributor commissions, referral kickbacks, or brokerage cuts. All investments are recommended exclusively in 100% Direct Plan Mutual Funds, which saves you 1.5% to 2.0% in recurring fees every year.",
    },
    {
      question: "What are the consequences of omitting US RSUs in Schedule FA?",
      answer:
        "Under the Indian Black Money Act, failure to disclose foreign assets (including vested RSUs in US brokerages like Morgan Stanley, E*TRADE, or Charles Schwab) in Schedule FA can attract a flat penalty of ₹10 Lakhs, even if all taxes were already deducted at source by your employer. Our team conducts a complete Schedule FA foreign asset audit.",
    },
    {
      question: "How do you assist with ESOP exercise timing if my company is unlisted?",
      answer:
        "Exercising unlisted ESOPs triggers a substantial perquisite tax liability payable in cash today, while the shares cannot be liquidated until a secondary buyback or IPO. We build a cashflow runway model, calculate your exact tax outlay, and help you plan staged exercises so you don't exhaust emergency reserves on illiquid shares.",
    },
    {
      question: "Is my compensation data and net worth strictly confidential?",
      answer:
        "Yes, absolutely 100%. Fintoo operates under strict fiduciary non-disclosure protocols. We will never share, verify, or discuss your salary, equity holdings, or financial strategies with your employer, HR department, or third-party institutions.",
    },
    {
      question: "What can I expect in the complimentary 15-minute introductory call?",
      answer:
        "The 15-minute call is a high-level diagnostic session with a Certified Financial Planner (CFP). We discuss your current CTC structure, equity components, upcoming vesting milestones, and your long-term wealth goals. You do not need to prepare or upload documents in advance.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-slate-700" />
              <span>Executive FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Clear answers before we get started.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Everything you need to know about our fiduciary wealth advisory, tax compliance, and process.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 pt-4">
              <div className="text-xs font-bold text-slate-900">
                Have an urgent or specific question?
              </div>
              <div className="space-y-1.5 text-xs text-slate-600">
                <a
                  href="tel:+919699800600"
                  className="flex items-center gap-2 hover:text-slate-900 transition-colors font-medium"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                  <span>Call: +91 9699 800 600</span>
                </a>
                <a
                  href="mailto:executive@fintoo.in"
                  className="flex items-center gap-2 hover:text-slate-900 transition-colors font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Email: executive@fintoo.in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-slate-700 transition-colors gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-slate-900" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
