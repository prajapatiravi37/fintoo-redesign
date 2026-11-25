"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WealthLayers from "@/components/WealthLayers";
import Challenges from "@/components/Challenges";
import Services from "@/components/Services";
import ConcentrationCalculator from "@/components/ConcentrationCalculator";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* 1. Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Section: Headline, Stats & Lead Capture Form */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Institutional Enterprise Logos */}
        <Stats />

        {/* 4. The 4 Layers of Wealth (Decoding Your CTC) */}
        <WealthLayers onOpenBooking={handleOpenBooking} />

        {/* 5. Core Problems: Managing P&L vs Personal Finances (01 to 06) */}
        <Challenges onOpenBooking={handleOpenBooking} />

        {/* 6. Signature Deep Navy Services Section */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 7. Concentration Risk Calculator */}
        <ConcentrationCalculator onOpenBooking={handleOpenBooking} />

        {/* 8. The Advisory Process (3 Steps) */}
        <Process onOpenBooking={handleOpenBooking} />

        {/* 9. Comparison: Advice That's on Your Side of the Table */}
        <Comparison onOpenBooking={handleOpenBooking} />

        {/* 10. Frequently Asked Questions (2-Column Layout) */}
        <FAQ onOpenBooking={handleOpenBooking} />
      </main>

      {/* 11. Pre-Footer Curved Banner & Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Bottom Conversion Bar */}
      <FloatingCta onOpenBooking={handleOpenBooking} />

      {/* Interactive Consultation Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
