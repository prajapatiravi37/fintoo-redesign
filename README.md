# Fintoo Executive — Wealth Planning for Corporate Leaders (Makeover)

> **Assignment Submission:** Redesign & Engineering of Fintoo's Marketing Page for Senior Corporate Executives (CXOs, VPs, Directors, and Tech Founders).  
> **Reference Page:** [https://www.fintoo.in/wealth-planning-for-corporate-leaders](https://www.fintoo.in/wealth-planning-for-corporate-leaders)  
> **Built With:** Next.js (App Router), React 19, Tailwind CSS, TypeScript, Lucide Icons, and Canvas Confetti.

---

## 1. Executive Summary & Design Rationale

### Target Audience
Senior corporate professionals, CXOs, Vice Presidents, Directors, and Startup Founders earning ₹50L to ₹15Cr+ annually. Their wealth challenges differ fundamentally from retail investors:
- **Complex 4-Layer Compensation:** Fixed CTC, Annual Performance Bonuses, Global RSUs (US Stocks), and Startup ESOPs.
- **Single-Stock Concentration (Double-Jeopardy):** Having 40% to 80% of personal net worth tied to the exact same employer that signs their paycheck.
- **Harsh Tax Traps:** 39% marginal peak surcharge brackets, cross-border US DTAA taxes, and mandatory Schedule FA foreign asset disclosures.
- **Fiduciary Demand:** They distrust traditional bank relationship managers pushing commissioned ULIPs and require a **SEBI-registered fee-only fiduciary advisor**.

---

## 2. Key Improvements Over Existing Fintoo Page

| Feature / Area | Original Fintoo Page | Redesigned Fintoo Executive Page |
| :--- | :--- | :--- |
| **Visual Aesthetic** | Generic, traditional layout resembling standard retail finance portals. | **Modern Executive Light Theme:** Crisp white/slate background with deep emerald accents, subtle luxury glassmorphism, and high-trust typography. |
| **4 Layers of Compensation** | Static text blocks that are easily skimmed or skipped. | **Interactive 4-Pillar Explorer:** Dynamic tabs for Fixed CTC, Bonus, RSUs, and ESOPs showing the tax reality, executive pitfall, and Fintoo's proprietary playbook with case studies. |
| **Concentration Risk** | Mentioned passively in text. | **Interactive Concentration Simulator:** Live sliders for Net Worth and Stock Value, dynamic risk gauge (Safe `<15%`, Moderate `15-30%`, Danger `>30%`), and -35% downside stress-test calculation. |
| **Call to Action (CTA)** | Generic single form at the bottom. | **Frictionless 2-Step Executive Booking Modal:** Designation and comp selection, preferred slot picker, non-disclosure badge, and instant celebratory feedback. |
| **Trust & Compliance** | SEBI registration and fee-only status hidden in footer text. | **Prominent Trust Badges in Hero:** Pulsing SEBI RIA indicator (INA000015523), Zero Commission guarantee, and 100% Employer Confidentiality badges. |
| **Performance & Code** | Legacy frontend bundle. | **Next.js Static Generation:** 100% pre-rendered static HTML, zero hydration mismatches, sub-second load times, and full mobile/tablet responsiveness. |

---

## 3. Page Architecture & Component Structure

```
src/
├── app/
│   ├── layout.tsx         # Executive metadata, Google Geist fonts, viewport
│   ├── page.tsx           # Main marketing page orchestrating all components
│   └── globals.css        # Tailwind v4 directives, custom luxury card styling
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphic header, SEBI badge, quick call link
│   ├── Hero.tsx           # High-impact CXO headline, fiduciary pills, live portfolio preview
│   ├── Stats.tsx          # ₹5,000 Cr+ AUM, 2 Lakh+ advised, enterprise logo marquee
│   ├── WealthLayers.tsx   # Interactive tabs for Fixed CTC, Bonus, RSUs, ESOPs
│   ├── ConcentrationCalculator.tsx # Dynamic single-stock risk calculator with slider controls
│   ├── Challenges.tsx     # 6 executive blind spots & traps
│   ├── Services.tsx       # 6 core concierge wealth services with key deliverables
│   ├── Comparison.tsx     # Fintoo (SEBI RIA) vs Traditional Private Banks comparison matrix
│   ├── Process.tsx        # 4-step transparent onboarding timeline
│   ├── FAQ.tsx            # Interactive accordion addressing RSU tax, Schedule FA, fees
│   ├── BookingModal.tsx   # 2-step booking workflow with confetti celebration
│   └── Footer.tsx         # Full SEBI RIA compliance disclosures and legal links
```

---

## 4. Key Interactive Highlights (The X-Factors)

1. **Single-Stock Concentration Simulator (`ConcentrationCalculator.tsx`):**
   - Allows users to adjust their net worth (up to ₹20 Cr) and employer stock holdings.
   - Calculates real-time concentration percentages and evaluates risk against the 15% fiduciary ceiling.
   - Computes a -35% market correction scenario showing potential wealth loss in Lakhs/Crores.
2. **Interactive 4-Layer Compensation Switcher (`WealthLayers.tsx`):**
   - Seamless switching between Fixed Salary, Annual Bonus, Global RSUs, and Startup ESOPs.
   - Real-world case study cards illustrating tax savings (e.g. ₹16.8L tax alpha via Section 80CCD(2)).
3. **2-Step Strategy Booking Modal (`BookingModal.tsx`):**
   - Step 1 captures role (CXO, VP, Director) and equity focus (RSUs, ESOPs, Surcharges).
   - Step 2 collects confidential contact info and preferred slot.
   - Triggers celebratory confetti (`canvas-confetti`) upon submission.

---

## 5. How to Run Locally

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Launch
```bash
# 1. Clone repository or navigate to directory
cd fintoo-redesign

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build
```bash
npm run build
npm run start
```

---

## 6. Deployment to Vercel (1-Click)

This project is fully optimized for **Vercel** with zero custom configuration:
1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Click **Deploy**. Vercel will automatically detect Next.js and build the production site in ~45 seconds.

---

## 7. Compliance & SEBI Disclaimer
*Fintoo Wealth Private Limited is a SEBI-Registered Investment Adviser (Registration No: INA000015523). Investment in securities market are subject to market risks. Read all related documents carefully before investing.*
