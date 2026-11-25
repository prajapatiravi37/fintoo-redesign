"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, PieChart, TrendingDown, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";

interface CalculatorProps {
  onOpenBooking: () => void;
}

export default function ConcentrationCalculator({ onOpenBooking }: CalculatorProps) {
  // Stored in Lakhs (Default: ₹5 Cr Net Worth, ₹2.8 Cr Company Stock)
  const [netWorth, setNetWorth] = useState<number>(500);
  const [stockValue, setStockValue] = useState<number>(280);

  const adjustedStockValue = Math.min(stockValue, netWorth);

  const concentrationRatio = useMemo(() => {
    if (netWorth <= 0) return 0;
    return Math.round((adjustedStockValue / netWorth) * 100);
  }, [adjustedStockValue, netWorth]);

  const potentialLoss = useMemo(() => {
    return Math.round(adjustedStockValue * 0.35);
  }, [adjustedStockValue]);

  const diversifiedRemainder = Math.max(0, netWorth - adjustedStockValue);

  const riskStatus = useMemo(() => {
    if (concentrationRatio <= 15) {
      return {
        level: "Prudent & Diversified",
        badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
        barColor: "bg-emerald-500",
        desc: "Your single-stock exposure is within safe institutional limits (<15%).",
        advice: "Maintain direct indexing and harvest tax losses systematically.",
      };
    } else if (concentrationRatio <= 30) {
      return {
        level: "Moderate Concentration",
        badge: "bg-amber-50 text-amber-800 border-amber-200",
        barColor: "bg-amber-500",
        desc: "Caution advised: an employer downturn directly threatens lifestyle runway.",
        advice: "Staged 'Vest-and-Sell' schedule recommended to cap employer stock at 15%.",
      };
    } else {
      return {
        level: "Critical Overconcentration",
        badge: "bg-rose-50 text-rose-800 border-rose-200",
        barColor: "bg-rose-500",
        desc: "Severe risk: Salary, career trajectory, AND >30% of wealth depend on one firm.",
        advice: "Immediate fiduciary de-risking roadmap needed: phased 10b5-1 selling & multi-asset reallocation.",
      };
    }
  }, [concentrationRatio]);

  const formatAmount = (lakhs: number) => {
    if (lakhs >= 100) {
      const cr = (lakhs / 100).toFixed(2);
      return `₹${cr} Cr`;
    }
    return `₹${lakhs} Lakhs`;
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-slate-50/60 border-y border-slate-200/80 scroll-mt-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-emerald-100/40 via-transparent to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Context & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <PieChart className="w-3.5 h-3.5 text-slate-700" />
              <span>Interactive Portfolio Risk Simulator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              How much of your wealth <br />
              <span className="text-slate-500 font-extrabold">rides on your employer?</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Most senior leaders accumulate 40% to 80% of their net worth in their own employer&apos;s stock without realizing the double-jeopardy. 
              If your company stock corrects by 35% (common in market drawdowns), how does it impact your family&apos;s freedom?
            </p>

            {/* Quick Insights List */}
            <div className="space-y-3 pt-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Single-stock risk is <strong>uncompensated volatility</strong>.</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct indexing replicates market alpha without the concentration hazard.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99]"
              >
                <span>Audit My Concentration Risk</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Fintech Terminal Box */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-xl space-y-7">
              
              {/* Presets header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Quick Net Worth Presets
                </span>
                <div className="flex items-center gap-1.5">
                  {[200, 500, 1000, 2000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => {
                        setNetWorth(preset);
                        setStockValue(Math.round(preset * 0.5));
                      }}
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border transition-all ${
                        netWorth === preset
                          ? "bg-slate-900 border-slate-900 text-white"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {preset >= 100 ? `₹${preset / 100} Cr` : `₹${preset}L`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Total Net Worth */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Total Net Worth</span>
                  <span className="font-black text-slate-900 text-base font-mono">
                    {formatAmount(netWorth)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={netWorth}
                  onChange={(e) => setNetWorth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>₹50 Lakhs</span>
                  <span>₹10 Crores</span>
                  <span>₹20 Crores</span>
                </div>
              </div>

              {/* Slider 2: Employer Equity */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Employer Equity (RSUs + ESOPs + Direct Shares)</span>
                  <span className="font-black text-slate-900 text-base font-mono">
                    {formatAmount(adjustedStockValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={netWorth}
                  step="10"
                  value={adjustedStockValue}
                  onChange={(e) => setStockValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>₹0 (Diversified)</span>
                  <span>50% Exposure</span>
                  <span>100% (Single Entity)</span>
                </div>
              </div>

              {/* Live Metric Showcase Card */}
              <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-4">
                
                {/* Ratio Header */}
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">
                      {concentrationRatio}%
                    </div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                      Single-Stock Concentration Ratio
                    </div>
                  </div>

                  <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-2xs ${riskStatus.badge}`}>
                    {riskStatus.level}
                  </span>
                </div>

                {/* 3-Zone Visual Gauge Bar */}
                <div className="space-y-1.5">
                  <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden flex">
                    <div
                      className={`h-full transition-all duration-300 ${riskStatus.barColor}`}
                      style={{ width: `${Math.min(concentrationRatio, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    <span className="text-emerald-700">Safe (&lt;15%)</span>
                    <span className="text-amber-700">Moderate (15-30%)</span>
                    <span className="text-rose-700">Critical (&gt;30%)</span>
                  </div>
                </div>

                {/* Downside Stress Test Card */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold">
                    <TrendingDown className="w-4 h-4 shrink-0" />
                    <span>Downside Stress Test (-35% Drawdown):</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    If your employer stock corrects by -35%, you face an immediate loss of approximately{" "}
                    <strong className="text-rose-600 font-mono font-bold text-sm">
                      {formatAmount(potentialLoss)}
                    </strong>
                    . Remaining diversified net worth:{" "}
                    <strong className="text-slate-900 font-mono">
                      {formatAmount(diversifiedRemainder)}
                    </strong>
                    .
                  </p>
                </div>

                {/* Fiduciary Prescription */}
                <div className="text-xs text-slate-600 flex items-start gap-2 pt-1">
                  <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Fiduciary Recommendation:</strong> {riskStatus.advice}
                  </span>
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Book 15-Min Strategy Session on Your Portfolio</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
