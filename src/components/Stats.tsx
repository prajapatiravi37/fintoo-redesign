"use client";

import React from "react";
import { ShieldCheck, TrendingUp, Users, Award, Sparkles } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "₹5,000 Cr+",
      label: "Assets Tracked & Advised",
      detail: "Equity, RSUs, ESOPs & global assets",
      icon: TrendingUp,
      tag: "SEBI Registered",
    },
    {
      value: "2,00,000+",
      label: "Corporate Leaders Advised",
      detail: "CXOs, VPs, Directors & Founders",
      icon: Users,
      tag: "10+ Yrs Legacy",
    },
    {
      value: "4.9 / 5.0",
      label: "Verified Client Trust Score",
      detail: "From 3,800+ independent reviews",
      icon: Award,
      tag: "Top Rated",
    },
    {
      value: "100%",
      label: "Direct Plan Fiduciary",
      detail: "Zero distributor commissions (saves 1.5% p.a.)",
      icon: ShieldCheck,
      tag: "Fee-Only",
    },
  ];

  const enterpriseLogos = [
    { name: "Google", role: "Directors & L7+ Tech Leads" },
    { name: "Microsoft", role: "Partner Leads & Engineering VPs" },
    { name: "Amazon", role: "Principal Managers & Directors" },
    { name: "Infosys", role: "AVPs & Senior Executives" },
    { name: "Flipkart", role: "Associate Directors & Staff Leads" },
    { name: "Swiggy", role: "VP Product & Startup Executives" },
    { name: "Razorpay", role: "Engineering Directors & CXOs" },
    { name: "Tata", role: "Corporate General Managers" },
    { name: "Adobe", role: "Senior Engineering Architects" },
    { name: "McKinsey", role: "Partners & Practice Leaders" },
  ];

  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Luxury Bento Trust Showcase Card */}
        <div className="rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-10 shadow-xs">
          
          {/* Top Row: 4 Core Institutional Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                      {item.tag}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight pt-1">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {item.detail}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Elegant Divider */}
          <div className="border-t border-slate-200/80 my-8" />

          {/* Bottom Row: Enterprise Leaders Strip & Quote */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Trusted by Senior Leaders Across Top Tech & Enterprise Firms</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                100% Strict NDA Protection
              </span>
            </div>

            {/* Enterprise Logo Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {enterpriseLogos.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all flex items-center gap-2 group cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
                  <span className="text-xs font-bold text-slate-800 tracking-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Micro Executive Quote */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200/60 mt-4">
              <p className="italic">
                &ldquo;Fintoo systematically de-risked my US RSUs and structured my family trust with zero product push.&rdquo;
              </p>
              <span className="font-semibold text-slate-700 whitespace-nowrap ml-4">
                — VP of Engineering, Tier-1 Tech Firm
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
