"use client";

import React from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const services = [
    {
      title: "ESOP & RSU Wealth Architecture",
      desc: "Execution roadmaps for vested options and US shares. We optimize exercise cash timing, manage secondary tender offers, and ensure flawless Schedule FA foreign disclosures.",
      points: ["Form 67 & DTAA foreign tax credits", "Schedule FA compliance verification", "Rule-based 'Vest-and-Sell' de-risking"],
    },
    {
      title: "Executive Tax Optimization & Surcharges",
      desc: "Comprehensive restructuring designed to legally shield corporate leaders from peak 39% marginal slabs without touching dubious tax shelters.",
      points: ["Section 80CCD(2) employer NPS (14% basic)", "Annual systematic tax-loss harvesting", "Dynamic Old vs New regime simulation"],
    },
    {
      title: "Conflict-Free Direct Portfolio Management",
      desc: "Bespoke multi-asset portfolios built strictly with 100% Direct Plan Mutual Funds, sovereign debt, and global index funds. Zero commissions.",
      points: ["Zero distributor kickbacks (saves 1.5% p.a.)", "Drawdown-hedged multi-asset allocation", "Consolidated single-view dashboard"],
    },
    {
      title: "CXO Financial Independence & Transition",
      desc: "Calculate the exact capital needed to step down from corporate leadership on your own terms into angel investing, board advisory, or venture bets.",
      points: ["Passive salary replacement modeling", "Multi-scenario inflation stress-testing", "Pre-exit liquidity event planning"],
    },
    {
      title: "Family Office, Private Trusts & Succession",
      desc: "Shield your wealth from probate delays, tax disputes, and legal liabilities. We help executives structure private family trusts and draft cross-border wills.",
      points: ["Private Family Trust ring-fencing", "Cross-border global asset will drafting", "Multi-generational wealth transfer"],
    },
    {
      title: "Executive Risk & Non-Employer Insurance",
      desc: "Decouple personal life and health coverage from employer-provided group health policies that expire the moment you transition roles.",
      points: ["Independent personal health umbrella", "High-sum-assured term life policy audit", "Keyman & Director liability safeguards"],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0B0F19] text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Concierge Wealth Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built for the way senior professionals earn.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal">
            A dedicated team of Certified Financial Planners (CFPs) and Chartered Tax Experts who understand complex executive wealth.
          </p>
        </div>

        {/* 6 Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111726] rounded-2xl p-7 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-extrabold text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2.5 mb-5 font-normal">
                  {item.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-800">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
