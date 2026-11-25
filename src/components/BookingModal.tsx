"use client";

import React, { useState, useMemo } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Clock,
  User,
  Mail,
  Briefcase,
  AlertCircle,
  Loader2,
  Calendar,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";
import { submitConsultationAction } from "@/app/actions/consultation";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DaySlot {
  label: string;
  dayName: string;
  dateNum: number;
  monthStr: string;
  fullDateStr: string;
}

const TIME_SLOTS = [
  "10:00 am",
  "11:30 am",
  "01:30 pm",
  "02:00 pm",
  "02:30 pm",
  "03:00 pm",
  "03:30 pm",
  "04:00 pm",
  "04:30 pm",
  "05:00 pm",
  "05:30 pm",
  "06:30 pm",
];

const DEFAULT_DAYS: DaySlot[] = [
  { label: "TODAY", dayName: "Today", dateNum: 25, monthStr: "Nov", fullDateStr: "Today, 25 Nov" },
  { label: "TMRW", dayName: "Tomorrow", dateNum: 26, monthStr: "Nov", fullDateStr: "Tomorrow, 26 Nov" },
  { label: "FRI", dayName: "Fri", dateNum: 27, monthStr: "Nov", fullDateStr: "Fri, 27 Nov" },
  { label: "SAT", dayName: "Sat", dateNum: 28, monthStr: "Nov", fullDateStr: "Sat, 28 Nov" },
  { label: "MON", dayName: "Mon", dateNum: 30, monthStr: "Nov", fullDateStr: "Mon, 30 Nov" },
  { label: "TUE", dayName: "Tue", dateNum: 1, monthStr: "Dec", fullDateStr: "Tue, 1 Dec" },
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Record<string, string>>({});
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [bookingRef, setBookingRef] = useState<string>("");

  // Step 1: Profile states
  const [role, setRole] = useState<string>("VP / Director");
  const [ctcRange, setCtcRange] = useState<string>("₹75L - ₹1.5 Cr");
  const [equityType, setEquityType] = useState<string>("RSUs (US/Global Stocks)");

  // Step 2: Contact states
  const [fullName, setFullName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // Step 3: Date & Time states
  const [selectedDateIdx, setSelectedDateIdx] = useState<number>(1); // Default to tomorrow
  const [selectedTime, setSelectedTime] = useState<string>("02:30 pm");
  const [upcomingDays, setUpcomingDays] = useState<DaySlot[]>(DEFAULT_DAYS);

  // Compute live upcoming days only on client inside useEffect to avoid prerender date error
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const days: DaySlot[] = [];
      const baseDate = new Date();

      for (let i = 0; i < 6; i++) {
        const d = new Date(baseDate);
        d.setDate(baseDate.getDate() + i);

        let label = "";
        if (i === 0) label = "TODAY";
        else if (i === 1) label = "TMRW";
        else {
          label = d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
        }

        const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
        const dateNum = d.getDate();
        const monthStr = d.toLocaleDateString("en-US", { month: "short" });
        const fullDateStr = `${dayName}, ${dateNum} ${monthStr}`;

        days.push({ label, dayName, dateNum, monthStr, fullDateStr });
      }
      setUpcomingDays(days);
    }
  }, [isOpen]);

  const selectedDate = upcomingDays[selectedDateIdx] || upcomingDays[0];
  const preferredSlotFormatted = `${selectedDate?.fullDateStr || "Tomorrow"} at ${selectedTime} (IST)`;

  // Reset all fields whenever the modal is opened fresh
  const resetFormState = () => {
    setStep(1);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setServerErrors({});
    setClientErrors({});
    setBookingRef("");
    setFullName("");
    setWorkEmail("");
    setPhone("");
    setRole("VP / Director");
    setCtcRange("₹75L - ₹1.5 Cr");
    setEquityType("RSUs (US/Global Stocks)");
    setSelectedDateIdx(1);
    setSelectedTime("02:30 pm");
  };

  React.useEffect(() => {
    if (isOpen) {
      resetFormState();
    }
  }, [isOpen]);

  const handleResetAndClose = () => {
    resetFormState();
    onClose();
  };

  // Validate step 2 contact details before proceeding to time slot picker
  const handleProceedToTimePicker = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!workEmail.trim() || !emailRegex.test(workEmail.trim())) {
      errors.workEmail = "Please enter a valid corporate or personal email.";
    }

    const phoneClean = phone.replace(/[\s-]/g, "");
    if (!phoneClean || phoneClean.length < 10) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (Object.keys(errors).length > 0) {
      setClientErrors(errors);
      return;
    }

    setClientErrors({});
    setStep(3);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerErrors({});
    setIsSubmitting(true);

    try {
      // Call Next.js Server Action with complete server-side validation
      const result = await submitConsultationAction({
        fullName,
        workEmail,
        phone,
        role,
        ctcRange,
        equityType,
        preferredSlot: preferredSlotFormatted,
      });

      if (!result.success && result.errors) {
        setServerErrors(result.errors);
        // If the error was in contact info, navigate back to step 2
        if (result.errors.fullName || result.errors.workEmail || result.errors.phone) {
          setStep(2);
        }
        setIsSubmitting(false);
        return;
      }

      if (result.data?.bookingRef) {
        setBookingRef(result.data.bookingRef);
      }

      // Trigger celebratory confetti on confirmed booking
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // fallback
      }

      setIsSubmitted(true);
    } catch {
      setServerErrors({
        general: "Failed to schedule consultation. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Extract first name for personalized greeting
  const firstName = fullName.trim() ? fullName.trim().split(" ")[0] : "";

  if (!isOpen) return null;

  return (
    <div
      onClick={handleResetAndClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70 shrink-0">
          <div>
            <div className="text-base font-black text-slate-900 flex items-center gap-2">
              <span>Schedule Executive Consultation</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                Free 15-Min
              </span>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1 font-medium mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>SEBI-Registered RIA (INA000015523) • Strict Non-Disclosure</span>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Segmented Progress Bar (Only during active steps) */}
        {!isSubmitted && (
          <div className="px-6 pt-4 pb-1 bg-white shrink-0">
            <div className="grid grid-cols-3 gap-2">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step >= 1 ? "bg-slate-900" : "bg-slate-200"
                }`}
              />
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step >= 2 ? "bg-slate-900" : "bg-slate-200"
                }`}
              />
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step >= 3 ? "bg-slate-900" : "bg-slate-200"
                }`}
              />
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto">
          
          {isSubmitted ? (
            /* Confirmation Success Voucher State */
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">
                  Consultation Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. A dedicated Certified Financial Planner (CFP) has reserved your strategy slot for <strong>{preferredSlotFormatted}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto">
                {bookingRef && (
                  <div className="flex justify-between items-center text-slate-500 pb-2 border-b border-slate-200/70">
                    <span className="font-medium">Booking Reference:</span>
                    <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {bookingRef}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-slate-500">
                  <span>Reserved Slot:</span>
                  <span className="font-bold text-slate-900">{preferredSlotFormatted}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Selected Focus:</span>
                  <span className="font-semibold text-slate-800">{equityType}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Confirmation Sent:</span>
                  <span className="font-semibold text-slate-800">{workEmail}</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-200/70">
                  <span>Advisory Model:</span>
                  <span className="font-bold text-emerald-700">100% Fee-Only Fiduciary</span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all"
              >
                Close Window
              </button>
            </div>
          ) : step === 1 ? (
            /* STEP 1: Executive Profile */
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-5">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-slate-100 pb-2">
                <span className="text-slate-900 font-bold">Step 1 of 3: Executive Profile</span>
                <span>Next: Confidential Details</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-700" />
                  <span>Current Leadership Role</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "CXO / Founder",
                    "VP / Director",
                    "Principal / Tech Lead",
                    "Senior Manager / Partner",
                  ].map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`py-2 px-3 text-xs font-medium rounded-xl border text-left transition-all ${
                        role === r
                          ? "bg-slate-900 border-slate-900 text-white font-bold shadow-xs"
                          : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Total Compensation Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "₹40L - ₹75L",
                    "₹75L - ₹1.5 Cr",
                    "₹1.5 Cr - ₹3 Cr",
                    "₹3 Cr+",
                  ].map((range) => (
                    <button
                      type="button"
                      key={range}
                      onClick={() => setCtcRange(range)}
                      className={`py-2 px-3 text-xs font-medium rounded-xl border text-left transition-all ${
                        ctcRange === range
                          ? "bg-slate-900 border-slate-900 text-white font-bold shadow-xs"
                          : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Primary Wealth Focus
                </label>
                <div className="space-y-1.5">
                  {[
                    "RSUs (US/Global Stocks) & Schedule FA",
                    "Startup ESOPs (Exercise Tax & Secondary Exits)",
                    "39% Peak Tax Surcharge & CTC Restructuring",
                    "Full Multi-Asset Portfolio Management",
                  ].map((eq) => (
                    <button
                      type="button"
                      key={eq}
                      onClick={() => setEquityType(eq)}
                      className={`w-full py-2.5 px-3 text-xs font-medium rounded-xl border text-left transition-all ${
                        equityType === eq
                          ? "bg-slate-900 border-slate-900 text-white font-bold shadow-xs"
                          : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {eq}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            </form>
          ) : step === 2 ? (
            /* STEP 2: Confidential Details */
            <form onSubmit={handleProceedToTimePicker} className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-slate-900 font-bold hover:underline flex items-center gap-1"
                >
                  ← Back to Step 1
                </button>
                <span>Step 2 of 3: Confidential Details</span>
              </div>

              {serverErrors.general && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{serverErrors.general}</span>
                </div>
              )}

              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-700" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajiv Sharma"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (clientErrors.fullName) setClientErrors((prev) => ({ ...prev, fullName: "" }));
                  }}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none transition-all ${
                    clientErrors.fullName || serverErrors.fullName
                      ? "border-rose-500 bg-rose-50/30"
                      : "border-slate-300 focus:border-slate-900 bg-white"
                  }`}
                />
                {(clientErrors.fullName || serverErrors.fullName) && (
                  <p className="text-[11px] text-rose-600 font-medium">
                    {clientErrors.fullName || serverErrors.fullName}
                  </p>
                )}
              </div>

              {/* Work Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-700" />
                  <span>Corporate / Personal Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="rajiv@company.com"
                  value={workEmail}
                  onChange={(e) => {
                    setWorkEmail(e.target.value);
                    if (clientErrors.workEmail) setClientErrors((prev) => ({ ...prev, workEmail: "" }));
                  }}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none transition-all ${
                    clientErrors.workEmail || serverErrors.workEmail
                      ? "border-rose-500 bg-rose-50/30"
                      : "border-slate-300 focus:border-slate-900 bg-white"
                  }`}
                />
                {(clientErrors.workEmail || serverErrors.workEmail) && (
                  <p className="text-[11px] text-rose-600 font-medium">
                    {clientErrors.workEmail || serverErrors.workEmail}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-slate-700" />
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (clientErrors.phone) setClientErrors((prev) => ({ ...prev, phone: "" }));
                  }}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none transition-all ${
                    clientErrors.phone || serverErrors.phone
                      ? "border-rose-500 bg-rose-50/30"
                      : "border-slate-300 focus:border-slate-900 bg-white"
                  }`}
                />
                {(clientErrors.phone || serverErrors.phone) && (
                  <p className="text-[11px] text-rose-600 font-medium">
                    {clientErrors.phone || serverErrors.phone}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Select Preferred Date & Time</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>
              </div>
            </form>
          ) : (
            /* STEP 3: Interactive Calendly / ChiliPiper-Style Visual Date & Time Picker */
            <form onSubmit={handleFinalSubmit} className="space-y-5">
              
              {/* Back Nav & Step Counter */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-slate-900 font-bold hover:underline flex items-center gap-1"
                >
                  ← Back
                </button>
                <span>Step 3 of 3</span>
              </div>

              {/* Personalized Heading */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {firstName ? `${firstName}, pick a time that suits you` : "Pick a time that suits you"}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>15-minute video call · IST (Indian Standard Time)</span>
                </p>
              </div>

              {/* DATE SECTION */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-700" />
                    <span>Date</span>
                  </label>
                  
                  {/* Active Selected Slot Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-[11px] font-bold">
                    <Zap className="w-3 h-3 text-amber-600 fill-amber-500" />
                    <span>{selectedDate.dayName}, {selectedTime}</span>
                  </div>
                </div>

                {/* Horizontal Scrollable Date Cards */}
                <div className="w-full overflow-x-auto pb-1.5 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <div className="flex items-center gap-2 min-w-max">
                    {upcomingDays.map((d, idx) => {
                      const isSelected = selectedDateIdx === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedDateIdx(idx)}
                          className={`flex flex-col items-center justify-center min-w-[72px] sm:min-w-[80px] py-2.5 px-2 rounded-2xl border transition-all text-center ${
                            isSelected
                              ? "bg-slate-900 border-slate-900 text-white shadow-sm scale-102"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              isSelected ? "text-slate-300" : "text-slate-400"
                            }`}
                          >
                            {d.label}
                          </span>
                          <span className="text-xl sm:text-2xl font-black my-0.5">
                            {d.dateNum}
                          </span>
                          <span
                            className={`text-[11px] font-medium ${
                              isSelected ? "text-slate-300" : "text-slate-500"
                            }`}
                          >
                            {d.monthStr}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* TIME SECTION */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-700" />
                  <span>Time</span>
                </label>

                {/* Grid of Interactive Time Chips */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((timeSlot) => {
                    const isSelected = selectedTime === timeSlot;
                    return (
                      <button
                        key={timeSlot}
                        type="button"
                        onClick={() => setSelectedTime(timeSlot)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                          isSelected
                            ? "bg-slate-900 border-slate-900 text-white font-bold shadow-xs"
                            : "border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900 bg-white"
                        }`}
                      >
                        {timeSlot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-300" />
                      <span>Reserving Strategy Session...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Confirm 15-Min Strategy Session</span>
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
