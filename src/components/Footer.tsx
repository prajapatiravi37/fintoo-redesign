"use client";

import React from "react";
import { ShieldCheck, Mail, PhoneCall, ExternalLink, ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenBooking?: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16">
      
      {/* Signature Pre-Footer Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="rounded-3xl bg-[#0F172A] border border-slate-800 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              You&apos;ve built a great career. <br />
              <span className="text-slate-400 font-extrabold">Let&apos;s make sure it builds lasting wealth.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Join 2,00,000+ corporate leaders who trust Fintoo with their equity and wealth advisory.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99]"
              >
                <span>Schedule Free 15-Min Audit</span>
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 border-t border-slate-900 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-950 font-black text-sm flex items-center justify-center">
                F
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                fintoo
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 uppercase">
                Executive
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-normal">
              India&apos;s premier SEBI-registered fee-only fiduciary wealth advisory 
              tailored specifically for CXOs, VPs, Directors, and Tech Founders.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs">
              <a
                href="tel:+919699800600"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                <span>+91 9699 800 600</span>
              </a>
              <a
                href="mailto:executive@fintoo.in"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>executive@fintoo.in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Executive Advisory
            </div>
            <ul className="space-y-1.5">
              <li><a href="#wealth-layers" className="hover:text-white transition-colors">4 Wealth Layers</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Core Challenges</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Concentration Calculator</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Why Fiduciary</a></li>
            </ul>
          </div>

          {/* Regulatory */}
          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Compliance & Legal
            </div>
            <ul className="space-y-1.5">
              <li><span className="text-emerald-400 font-semibold">SEBI RIA: INA000015523</span></li>
              <li><span>BASL Membership: 1845</span></li>
              <li><span>100% Fee-Only Fiduciary</span></li>
              <li><span>Strict Non-Disclosure</span></li>
              <li>
                <a
                  href="https://scores.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  <span>SEBI SCORES Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Office */}
          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Registered Office
            </div>
            <p className="text-slate-400 leading-relaxed font-normal">
              Fintoo Wealth Private Limited<br />
              Times Square Building, Andheri East,<br />
              Mumbai, Maharashtra - 400059, India.
            </p>
            <div className="pt-2 flex items-center gap-1 text-[11px] text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Certified Financial Planners (CFP®)</span>
            </div>
          </div>

        </div>

        {/* Disclaimers */}
        <div className="mt-12 pt-8 border-t border-slate-900 space-y-2 text-[11px] text-slate-500 leading-relaxed font-normal">
          <p>
            <strong>SEBI Statutory Disclosure:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Fintoo Wealth Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Advisory</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Grievance Redressal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
