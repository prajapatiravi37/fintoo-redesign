"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertOctagon, ArrowRight, TrendingUp } from "lucide-react";

interface WealthLayersProps {
  onOpenBooking: () => void;
}

export default function WealthLayers({ onOpenBooking }: WealthLayersProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const layers = [
    {
      id: "fixed",
      tabTitle: "01. Fixed Salary",
      subtitle: "Peak Slabs (30% + Surcharges)",
      headline: "Restructure CTC to Prevent ₹2L - ₹6L in Annual Tax Bleed",
      taxReality:
        "TDS is deducted monthly at peak slab rates. Incremental basic pay crossing ₹50L or ₹1Cr attracts aggressive 10% to 25% surcharges, pushing effective taxes near 39%.",
      blindspot:
        "Defaulting to standard ₹1.5L 80C deductions without utilizing Section 80CCD(2) employer NPS (which allows up to 14% of basic fully tax-exempt without cap).",
      playbook: [
        "Employer NPS restructuring under Section 80CCD(2) for up to 14% of Basic pay.",
        "Dynamic Old vs New tax regime simulation based on your exact loan & rent deductions.",
        "Tax-free perquisite allowances optimization (remote work, vehicle lease, book allowances).",
      ],
      caseStudy: "Director of Engineering (CTC: ₹65L) saved ₹3.8 Lakhs/year through structured NPS and tax regime realignment.",
    },
    {
      id: "bonus",
      tabTitle: "02. Annual Bonus",
      subtitle: "Immediate Peak Surcharges",
      headline: "Eliminate Idle Cash Drag and Peak Surcharge on Lumpsums",
      taxReality:
        "Taxes are deducted upfront at your highest marginal rate. The remaining lump sum often sits idle in 3% savings accounts for months out of decision paralysis.",
      blindspot:
        "Allowing ₹15L - ₹40L bonus to suffer 'Cash Drag' in low-yield accounts, or impulsively locking funds in high-commission bank ULIPs.",
      playbook: [
        "Pre-deployment allocation mandate: Designating asset destinations before the bonus hits.",
        "Automated STP (Systematic Transfer Plans) into diversified equity portfolios while earning liquid yields.",
        "Systematic annual tax-loss harvesting across equity holdings to offset capital gains.",
      ],
      caseStudy: "Chief Product Officer (Bonus: ₹35L) eliminated idle cash drag, adding ₹2.4 Lakhs in first-year portfolio yield.",
    },
    {
      id: "rsu",
      tabTitle: "03. Global RSUs",
      subtitle: "Dual Taxation & Schedule FA",
      headline: "Master Dual Taxation and Mandatory Foreign Asset Compliance",
      taxReality:
        "Taxed twice: (1) As salary perquisite upon vesting at Fair Market Value, and (2) As capital gains upon sale under foreign asset rules.",
      blindspot:
        "Holding 70%+ of net worth in company stock, exposing you to single-stock volatility, US currency swings, and ₹10 Lakhs in penalties for omitting Schedule FA in ITR.",
      playbook: [
        "Rule-based 'Vest-and-Sell' framework to systematically re-allocate into global index & Indian assets.",
        "Form 67 and DTAA Foreign Tax Credit (FTC) filing under Section 90/91.",
        "Meticulous Schedule FA compliance audit under Indian Black Money Act regulations.",
      ],
      caseStudy: "Principal Architect ($120k RSUs) systematically diversified $75k into global indices and saved ₹4.2L via DTAA tax credits.",
    },
    {
      id: "esop",
      tabTitle: "04. Startup ESOPs",
      subtitle: "Exercise Cash Shock & Exits",
      headline: "Navigate Perquisite Tax Shocks, Staged Exercises and Exits",
      taxReality:
        "Exercising unlisted options triggers huge perquisite taxes based on paper Fair Market Value, requiring upfront cash before shares can even be sold.",
      blindspot:
        "Forfeiting unexercised vested options during job switches due to short 30-90 day exercise windows, or exercising without cash to pay perquisite tax.",
      playbook: [
        "Cash flow modeling for exercise tax liabilities to prevent emergency borrowing.",
        "Secondary sale & tender offer evaluation during company buyback rounds.",
        "Post-exit unlisted equity tax optimization under Section 54F reinvestment provisions.",
      ],
      caseStudy: "VP of Product (₹1.8 Cr ESOPs) structured a staged exercise schedule, saving ₹14 Lakhs in cash perquisite penalties.",
    },
  ];

  const current = layers[activeTab];

  return (
    <section id="wealth-layers" className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-slate-700" />
            <span>Executive Compensation Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Your pay has four layers. <br />
            <span className="text-slate-500 font-extrabold">Each requires its own playbook.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Corporate leaders leave 15–30% of their potential net worth on the table due to misaligned tax structures, single-stock lockups, and unoptimized vesting.
          </p>
        </div>

        {/* Modern Segmented Control */}
        <div className="w-full overflow-x-auto pb-2 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex justify-start sm:justify-center min-w-max sm:min-w-0">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 gap-1.5 shrink-0">
              {layers.map((layer, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                      isSelected
                        ? "bg-slate-900 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
                    }`}
                  >
                    {layer.tabTitle}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bento Detail Card */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-800">
                {current.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mt-2">
                {current.headline}
              </h3>
            </div>

            <button
              onClick={onOpenBooking}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              <span>Audit This Layer</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            
            {/* Left */}
            <div className="space-y-6">
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  The Tax Reality
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {current.taxReality}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-xs text-amber-900">
                  <AlertOctagon className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Costly Executive Blindspot</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {current.blindspot}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs">
                <span className="font-bold text-slate-900">Case Example: </span>
                <span className="text-slate-600 font-medium">{current.caseStudy}</span>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Fintoo Fiduciary Playbook
              </div>
              <ul className="space-y-3">
                {current.playbook.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
