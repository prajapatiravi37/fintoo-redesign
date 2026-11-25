"use server";

export interface ConsultationInput {
  fullName: string;
  workEmail: string;
  phone: string;
  role: string;
  ctcRange: string;
  equityType: string;
  preferredSlot: string;
}

export interface ConsultationResult {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  data?: {
    bookingRef: string;
    confirmedAt: string;
  };
}

// Server-side email regex conforming to standard RFC standards
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone regex: Supports 10-digit Indian numbers, optional +91, spaces and hyphens
const PHONE_REGEX = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;

export async function submitConsultationAction(
  input: ConsultationInput
): Promise<ConsultationResult> {
  const errors: Record<string, string> = {};

  // 1. Full Name Validation
  const trimmedName = (input.fullName || "").trim();
  if (!trimmedName) {
    errors.fullName = "Full name is required.";
  } else if (trimmedName.length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  } else if (trimmedName.length > 70) {
    errors.fullName = "Name cannot exceed 70 characters.";
  }

  // 2. Email Validation
  const trimmedEmail = (input.workEmail || "").trim().toLowerCase();
  if (!trimmedEmail) {
    errors.workEmail = "Corporate or personal email is required.";
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.workEmail = "Please enter a valid email address.";
  }

  // 3. Phone Number Validation
  const cleanedPhone = (input.phone || "").replace(/[\s-]/g, "");
  if (!cleanedPhone) {
    errors.phone = "Phone number is required for calendar invite.";
  } else if (!PHONE_REGEX.test(cleanedPhone) && cleanedPhone.length < 10) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }

  // 4. Role & Selection Validation
  const validRoles = [
    "CXO / Founder",
    "VP / Director",
    "Principal / Tech Lead",
    "Senior Manager / Partner",
  ];
  if (input.role && !validRoles.includes(input.role)) {
    errors.role = "Please select a valid leadership role.";
  }

  // If validation fails on server, return descriptive errors
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors,
    };
  }

  // Generate unique booking reference and timestamp on server
  const bookingRef = `FIN-${Date.now().toString(36).toUpperCase()}-${Math.floor(
    Math.random() * 1000
  )}`;

  return {
    success: true,
    message: "Consultation successfully scheduled with an independent CFP.",
    data: {
      bookingRef,
      confirmedAt: new Date().toISOString(),
    },
  };
}
