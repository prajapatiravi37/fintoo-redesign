"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight, X } from "lucide-react";

interface FloatingCtaProps {
  onOpenBooking: () => void;
}

export default function FloatingCta({ onOpenBooking }: FloatingCtaProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <aside
      aria-label="Quick scheduling action"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-2xl p-3 sm:py-3 sm:px-5 shadow-2xl border border-slate-700/80 flex items-center justify-between gap-3">
        
        {/* Left message */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="truncate">
            <div className="text-xs font-black text-white flex items-center gap-2">
              <span>Executive Advisory</span>
              <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hidden sm:inline-block">
                SEBI RIA
              </span>
            </div>
            <div className="text-[11px] text-slate-300 truncate font-normal">
              100% Fee-Only Fiduciary • Zero Product Commissions
            </div>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs shadow-sm transition-all"
          >
            <span>Book 15-Min Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
}
