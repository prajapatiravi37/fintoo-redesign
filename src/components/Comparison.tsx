"use client";

import React from "react";
import { ShieldCheck, Check, X, Sparkles } from "lucide-react";

interface ComparisonProps {
  onOpenBooking: () => void;
}

export default function Comparison({ onOpenBooking }: ComparisonProps) {
  const rows = [
    {
      dim: "Regulatory Standard",
      fintoo: "SEBI Registered Investment Advisor (RIA) — bound by law to fiduciary duty.",
      traditional: "Product distributors & brokers (AMFI ARN holders) — paid on transactions.",
    },
    {
      dim: "Revenue Model",
      fintoo: "100% Fee-Only. Zero commissions from mutual fund houses, PMS, or insurers.",
      traditional: "Earns 1.0% to 2.5% p.a. trailing cut silently deducted from your corpus.",
    },
    {
      dim: "Portfolio Implementation",
      fintoo: "100% Direct Plans. Zero distributor commission drag saves ~1.5% p.a. compounding.",
      traditional: "Regular plans only. You pay retail distribution commission every single year.",
    },
    {
      dim: "Executive Equity Strategy",
      fintoo: "Custom Schedule FA filing, staged RSU tax harvesting, and ESOP exercise cashflow models.",
      traditional: "Pushes proprietary bank PMS, high-margin ULIPs, and corporate loan products.",
    },
    {
      dim: "Client Data Privacy",
      fintoo: "Strict non-disclosure agreement. Never shared with your employer or third-party marketers.",
      traditional: "Customer data shared across bank divisions for relentless cross-sales telemarketing.",
    },
  ];

  return (
    <section id="comparison" className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold mb-3 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Fiduciary Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Advice that&apos;s on your side of the table.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            &apos;Free&apos; wealth advisory is rarely free. Compare the compounding difference between an independent 
            SEBI-registered fiduciary and commissioned product distributors.
          </p>
        </div>

        {/* Clean Responsive Table Container with elevated Fintoo column */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[580px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/90">
                  <th className="py-5 px-6 font-bold text-slate-700 w-1/3">
                    Dimension
                  </th>
                  <th className="py-5 px-6 font-black text-white bg-slate-900 w-1/3 border-x border-slate-800 relative">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Fiduciary Standard</span>
                    </div>
                    <span>Fintoo Executive (SEBI RIA)</span>
                  </th>
                  <th className="py-5 px-6 font-bold text-slate-500 w-1/3">
                    Traditional Banks / Agents
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4.5 px-6 font-bold text-slate-800">
                      {row.dim}
                    </td>
                    <td className="py-4.5 px-6 bg-slate-50/90 font-semibold text-slate-900 border-x border-slate-200/80">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 font-bold" />
                        </div>
                        <span className="leading-relaxed">{row.fintoo}</span>
                      </div>
                    </td>
                    <td className="py-4.5 px-6 text-slate-500">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-relaxed">{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Stats Cards below */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
              ₹5,000 Cr+
            </div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
              Assets Advised
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono">
              100%
            </div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
              Direct Mutual Funds
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
              ZERO
            </div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
              Hidden Commissions
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
              SEBI RIA
            </div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
              Registered Fiduciary
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
