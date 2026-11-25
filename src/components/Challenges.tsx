"use client";

import React from "react";
import {
  ArrowRight,
  AlertTriangle,
  Flame,
  ShieldAlert,
  FileWarning,
  Layers,
  Coins,
  Scale,
} from "lucide-react";

interface ChallengesProps {
  onOpenBooking: () => void;
}

export default function Challenges({ onOpenBooking }: ChallengesProps) {
  const problems = [
    {
      num: "01",
      icon: Flame,
      category: "Single-Stock Exposure",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      topBorder: "border-t-rose-500",
      title: "70%+ net worth tied to one corporate employer",
      desc: "Base salary, annual bonus, and equity all ride on one company. A single downturn impacts both career income and balance sheet at the same time.",
      impact: "High Vulnerability",
    },
    {
      num: "02",
      icon: Coins,
      category: "Perquisite Tax Shock",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      topBorder: "border-t-amber-500",
      title: "Startup ESOP exercise cashflow trap",
      desc: "Exercising unlisted options triggers massive perquisite tax upon exercise — payable in real cash today even if company shares cannot yet be sold.",
      impact: "Immediate Cash Drain",
    },
    {
      num: "03",
      icon: FileWarning,
      category: "Foreign Asset Compliance",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      topBorder: "border-t-blue-500",
      title: "Schedule FA foreign asset penalties",
      desc: "Missing vested US RSUs in Morgan Stanley or E*TRADE on your Indian ITR invites scrutiny under the Black Money Act with penalties up to ₹10 Lakhs.",
      impact: "Legal & Regulatory Drag",
    },
    {
      num: "04",
      icon: Scale,
      category: "Peak Surcharge Cliff",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
      topBorder: "border-t-violet-500",
      title: "Surrendering 39% on incremental salary & bonus",
      desc: "Senior executives surrender nearly 40% on incremental bonuses. Without structured CTC planning and direct plan strategies, you overpay lakhs annually.",
      impact: "Severe Tax Leakage",
    },
    {
      num: "05",
      icon: Layers,
      category: "Fragmented Assets",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      topBorder: "border-t-indigo-500",
      title: "Uncoordinated, scattered portfolio sprawl",
      desc: "RSUs in foreign brokerages, ESOPs on Carta, mutual funds across 3 retail apps, idle bank savings, and PPF. Nobody has a unified asset allocation view.",
      impact: "Sub-Optimal Compounding",
    },
    {
      num: "06",
      icon: ShieldAlert,
      category: "Broker Conflict",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      topBorder: "border-t-emerald-500",
      title: "Distributor conflicts of interest",
      desc: "Private bank relationship managers push proprietary ULIPs and high-commission regular plans with 1.5–2% hidden trailing cuts. They are sales reps, not fiduciaries.",
      impact: "Trailing Fee Erosion",
    },
  ];

  return (
    <section id="challenges" className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80 scroll-mt-20 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-slate-200/40 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Executive Financial Blindspots</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            You manage a P&L at work. <br />
            <span className="text-slate-500 font-extrabold">Your personal finances run on autopilot.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Six high-stakes vulnerabilities senior corporate leaders face — that traditional bank relationship managers are incentivized to ignore.
          </p>
        </div>

        {/* 6 High-Contrast Elevated Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border-t-4 ${item.topBorder}`}
              >
                <div>
                  
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                      #{item.num}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Impact Callout */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    Impact: <strong className="text-slate-800">{item.impact}</strong>
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    <span>Fix with Fintoo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
