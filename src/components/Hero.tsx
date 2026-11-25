"use client";

import React from "react";
import {
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Lock,
  CheckCircle2,
  Calendar,
  PieChart,
  Activity,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      
      {/* High-end ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/30 via-slate-100/40 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: High-Status Editorial Headline */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-slate-800 text-xs font-semibold mx-auto lg:mx-0 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SEBI-Registered RIA (INA000015523)</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">Fee-Only Fiduciary</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Wealth Architecture for Corporate Leaders.{" "}
              <span className="text-slate-500 block mt-1 font-extrabold">
                Engineered for Complexity.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Independent wealth advisory for <strong>CXOs, VPs, Directors, and Startup Founders</strong>. 
              We solve single-stock concentration risk, decode dual RSU taxation, plan ESOP liquidity, 
              and shield bonuses from 39% peak surcharge slabs — with zero product commissions.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-slate-300" />
                <span>Schedule 15-Min Strategy Session</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-200 hover:border-slate-300 shadow-2xs transition-all"
              >
                <PieChart className="w-4 h-4 text-slate-500" />
                <span>Simulate Concentration Risk</span>
              </a>
            </div>

            {/* Trust Reassurances */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Strict NDA Protection</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Product Commissions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dedicated CFP® & Tax Team</span>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Wealth Intelligence Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl p-6 sm:p-7 space-y-6 relative overflow-hidden">
              
              {/* Subtle accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-slate-900 to-amber-500" />

              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black flex items-center justify-center text-xs shadow-xs">
                    RS
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">
                      Rajiv Sharma
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      VP of Engineering • Tech Enterprise
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                  <Activity className="w-3 h-3 text-emerald-600 animate-pulse" />
                  <span>Fiduciary Plan Active</span>
                </div>
              </div>

              {/* 2 Key Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500">
                    Total Tracked Wealth
                  </div>
                  <div className="text-2xl font-black text-slate-900 mt-0.5 font-mono">
                    ₹8.45 Cr
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1 font-medium">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span>Consolidated View</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500">
                    Identified Tax Alpha
                  </div>
                  <div className="text-2xl font-black text-emerald-700 mt-0.5 font-mono">
                    ₹18.4 L
                  </div>
                  <div className="text-[10px] text-emerald-600 mt-1 font-medium">
                    via 80CCD(2) & Harvesting
                  </div>
                </div>
              </div>

              {/* Asset Allocation Breakdown Stack */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Multi-Asset Allocation</span>
                  <span className="text-[11px] text-slate-500">4 Entities Consolidated</span>
                </div>

                <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-100">
                  <div className="bg-slate-900 h-full w-[48%]" title="Global RSUs: 48%" />
                  <div className="bg-emerald-500 h-full w-[24%]" title="Direct Indexing: 24%" />
                  <div className="bg-amber-500 h-full w-[18%]" title="Private ESOPs: 18%" />
                  <div className="bg-sky-400 h-full w-[10%]" title="Liquid Cash: 10%" />
                </div>

                <div className="grid grid-cols-4 gap-1 text-[10px] font-medium text-slate-500 pt-0.5">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-900" />
                    <span>RSUs (48%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Direct (24%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>ESOP (18%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>Cash (10%)</span>
                  </div>
                </div>
              </div>

              {/* Concentration Gauge Box */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Single-Stock Concentration</span>
                  </span>
                  <span className="font-extrabold text-amber-900 font-mono">48% (High Alert)</span>
                </div>
                <div className="w-full bg-amber-200/60 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full w-[48%]" />
                </div>
                <p className="text-[11px] text-amber-800/90 leading-relaxed font-medium">
                  Staged &apos;Vest-and-Sell&apos; plan scheduled to reduce single-employer downside to 15%.
                </p>
              </div>

              {/* Compliance Checklist */}
              <div className="space-y-2 border-t border-slate-100 pt-4 text-xs font-medium">
                <div className="flex items-center justify-between text-slate-600">
                  <span>US RSUs & Schedule FA Filing:</span>
                  <span className="font-bold text-emerald-700">Verified ✓</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Unlisted ESOP Cashflow Buffer:</span>
                  <span className="font-bold text-slate-800">Planned ✓</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Advisor Remuneration Model:</span>
                  <span className="font-bold text-emerald-700">100% Direct Plan Fiduciary</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
