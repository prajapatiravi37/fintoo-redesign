"use client";

import React from "react";
import { ArrowRight, Compass, Clock, CheckCircle2, FileSpreadsheet, ShieldCheck } from "lucide-react";

interface ProcessProps {
  onOpenBooking: () => void;
}

export default function Process({ onOpenBooking }: ProcessProps) {
  const steps = [
    {
      num: "01",
      icon: Clock,
      timeframe: "15 Minutes · Virtual",
      title: "Confidential Strategy Session",
      desc: "Discuss your CTC structure, RSU/ESOP allocation, and tax concerns. Strictly under non-disclosure with zero paperwork required.",
      benefit: "Zero sales pitch • Pure diagnosis",
    },
    {
      num: "02",
      icon: FileSpreadsheet,
      timeframe: "Within 48 Hours",
      title: "360° Diagnostic Wealth Audit",
      desc: "We analyze single-stock concentration ratio, foreign asset Schedule FA compliance, tax leakage, and direct indexing opportunities.",
      benefit: "Quantitative breakdown report",
    },
    {
      num: "03",
      icon: ShieldCheck,
      timeframe: "Continuous Quarterly Oversight",
      title: "Fiduciary Wealth Architecture",
      desc: "Execute your de-risking roadmap, harvest tax losses, and rebalance multi-asset portfolios directly into zero-commission direct plans.",
      benefit: "100% Fee-Only Fiduciary",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-slate-700" />
            <span>The Advisory Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            From scattered to strategic in 3 steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            A frictionless, concierge journey engineered specifically for the demanding schedules of senior executives.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left relative"
                >
                  <div>
                    {/* Top Row: Number & Timeframe Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
                        {item.num}
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 shadow-2xs">
                        {item.timeframe}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Deliverable Pill */}
                  <div className="pt-5 mt-6 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
          >
            <span>Start with Step 1: Book Strategy Session</span>
            <ArrowRight className="w-4 h-4 text-slate-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
