"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, PhoneCall, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Wealth Layers", href: "#wealth-layers" },
    { label: "Risk Calculator", href: "#calculator" },
    { label: "Blindspots", href: "#challenges" },
    { label: "Services", href: "#services" },
    { label: "Why Fintoo", href: "#comparison" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
          : "bg-white border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Fiduciary Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-black text-sm tracking-wider">
                F
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-lg font-black tracking-tight text-slate-900">
                    fintoo
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                    Executive
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium flex items-center gap-1 mt-0.5 leading-none">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>SEBI RIA: INA000015523</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links - Single line, spacious, no wrapping */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:+919699800600"
              className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
              <span>+91 9699 800 600</span>
            </a>

            <div className="hidden lg:block w-px h-4 bg-slate-200" />

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-all active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Book 15-Min Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Mobile & Tablet Trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded-lg whitespace-nowrap"
            >
              Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 mt-2 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-slate-700 py-2 border-b border-slate-100 hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919699800600"
                className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-600 bg-slate-50 rounded-lg border border-slate-200"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
                <span>Call Hotline: +91 9699 800 600</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl shadow-xs"
              >
                Schedule 15-Min Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
