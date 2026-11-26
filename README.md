# Fintoo Executive — Wealth Planning for Corporate Leaders (Makeover)

> **Assignment Submission:** Redesign & Engineering of Fintoo's Marketing Page for Senior Corporate Executives (CXOs, VPs, Directors, and Tech Founders).  
> **Live Deployment:** [https://fintoo-redesign.vercel.app/](https://fintoo-redesign.vercel.app/)  
> **Source Code Repository:** [https://github.com/prajapatiravi37/fintoo-redesign](https://github.com/prajapatiravi37/fintoo-redesign)  
> **Original Reference Page:** [https://www.fintoo.in/wealth-planning-for-corporate-leaders](https://www.fintoo.in/wealth-planning-for-corporate-leaders)  
> **Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript 5, Lucide Icons, Canvas Confetti.

---

## 1. Executive Summary & Design Rationale

### Target Audience & Persona
Senior corporate leaders, CXOs, Vice Presidents, Directors, and Startup Founders earning ₹50L to ₹15Cr+ annually. Their wealth management requirements are fundamentally distinct from retail investors:
- **Complex 4-Layer Compensation:** Fixed Base CTC, Performance Bonuses, Global RSUs (US Stocks via E*TRADE/Morgan Stanley), and Startup ESOPs (Carta).
- **Single-Stock Concentration Hazard (Double-Jeopardy):** Having 40% to 80% of personal net worth tied to the exact same company that pays their monthly salary.
- **Harsh Tax Traps:** 39% peak marginal surcharge slabs, cross-border US DTAA taxation, and mandatory Schedule FA foreign asset reporting under the Black Money Act.
- **Demand for Independent Fiduciary:** They actively avoid commissioned product brokers and private bank relationship managers pushing regular plans and ULIPs; they seek a **SEBI-registered, fee-only fiduciary advisor**.

---

## 2. Key Improvements Over Existing Fintoo Page

| Feature / Area | Original Fintoo Page | Redesigned Fintoo Executive Experience |
| :--- | :--- | :--- |
| **Visual Hierarchy & Theme** | Generic, traditional retail mutual-fund layout with stark white walls. | **Luxury Institutional Palette:** Deep obsidian navy (`#0B0F19`), crisp white, emerald fiduciary accents (`#059669`), amber indicators, and ambient radial glow. |
| **4 Layers of Compensation** | Static text paragraphs easily skipped by busy executives. | **Interactive 4-Layer Compensation Architecture:** Segmented tabs for Base CTC, Bonus, RSUs, and ESOPs with live tax realities and case studies. |
| **Concentration Risk** | Mentioned passively without quantitative proof. | **Interactive Single-Stock Risk Simulator:** Real-time dual sliders, 3-zone visual risk gauge (`Safe <15%`, `Moderate 15-30%`, `Critical >30%`), and -35% downside stress-test calculator. |
| **Scheduling & CTA** | Generic single-step contact form. | **ChiliPiper/Calendly-Grade 3-Step Scheduler:** Step progress bar, personalized greeting ("{Name}, pick a time that suits you"), interactive date cards (Today, Tmrw, etc.), 12-slot time chips, and confetti celebration voucher. |
| **Conversion Rate Optimization** | Standard static buttons. | **Sleek Floating Action Bar:** Glassmorphic floating pill appears on scroll, enabling 1-click booking from any section. |
| **Trust & Compliance** | Regulatory disclosures buried in footer. | **Bento Trust Hub & Fiduciary Matrix:** Prominent SEBI RIA indicator (INA000015523), Fortune 500 company trust chips, and direct Fiduciary vs. Bank comparison table. |
| **Technical Quality** | Legacy frontend bundle. | **Next.js 16 (App Router) + Server Actions:** Pre-rendered static pages, server-side RFC validation, zero console errors, native SEO (`robots.ts`, `sitemap.ts`, JSON-LD schema). |

---

## 3. Project Architecture

```
src/
├── app/
│   ├── actions/
│   │   └── consultation.ts   # Next.js Server Action with RFC email & phone regex validation
│   ├── layout.tsx            # Executive metadata, OpenGraph, Twitter, JSON-LD structured data
│   ├── page.tsx              # Main orchestrator for all sections & modals
│   ├── robots.ts             # Native Next.js robots configuration
│   ├── sitemap.ts            # Native Next.js XML sitemap generator
│   └── globals.css           # Tailwind v4 base styles, custom scrollbar
├── components/
│   ├── Navbar.tsx            # Sticky glassmorphic header, SEBI RIA status, mobile drawer
│   ├── Hero.tsx              # Executive headline, trust pills, live multi-asset widget
│   ├── Stats.tsx             # Bento Trust Hub: ₹5,000 Cr+ AUM, 2 Lakh+ advised, enterprise chips
│   ├── WealthLayers.tsx      # Interactive 4-layer compensation switcher with mobile scroll
│   ├── Challenges.tsx        # 6 executive blindspot bento cards with distinct color-coded badges
│   ├── Services.tsx          # Signature deep navy concierge wealth services section
│   ├── ConcentrationCalculator.tsx # Dual-slider risk terminal with 3-zone gauge & stress-test
│   ├── Process.tsx           # 3-step transparent advisory journey
│   ├── Comparison.tsx        # Fintoo (SEBI RIA) vs Traditional Banks comparison matrix
│   ├── FAQ.tsx               # 2-column executive accordion with search intent focus
│   ├── BookingModal.tsx      # 3-step visual calendar & time scheduler with confetti voucher
│   ├── FloatingCta.tsx       # Smart floating sticky conversion pill on scroll
│   └── Footer.tsx            # Full SEBI RIA regulatory disclaimers and compliance footer
```

---

## 4. Key Interactive Highlights (The X-Factors)

1. **Single-Stock Concentration Simulator (`ConcentrationCalculator.tsx`):**
   - Quick Net Worth presets (₹2 Cr, ₹5 Cr, ₹10 Cr, ₹20 Cr).
   - Real-time single-stock ratio computation against the 15% fiduciary ceiling.
   - Live -35% downside drawdown stress test showing capital preserved through direct indexing.

2. **Interactive 4-Layer Compensation Switcher (`WealthLayers.tsx`):**
   - Decodes Fixed Base CTC, Annual Bonus (39% surcharge hit), Global RSUs (Schedule FA filing), and Startup ESOPs (perquisite exercise tax).
   - Mobile-optimized segmented horizontal tabs.

3. **ChiliPiper-Style 3-Step Strategy Scheduler (`BookingModal.tsx`):**
   - Step 1: Leadership Role & Compensation range.
   - Step 2: Confidential Details with real-time field validation.
   - Step 3: Interactive Date Cards (TODAY, TMRW, FRI, SAT, MON, TUE) + 12 Time Chips with personalized greeting.
   - Server-Side Validation: Validated on server via Next.js Server Action with unique booking reference generation (`FIN-XXXX-XXX`).

4. **Floating Conversion Pill (`FloatingCta.tsx`):**
   - Smoothly slides up when scrolled past the hero, giving senior executives an instant 1-click booking option anywhere on the page.

---

## 5. How to Run Locally

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Launch
```bash
# 1. Clone the repository
git clone https://github.com/prajapatiravi37/fintoo-redesign.git
cd fintoo-redesign

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification
```bash
npm run build
npm run start
```
- Tested with **Exit Code 0** (100% clean production build).
- Strict TypeScript check: `npx tsc --noEmit` (0 errors).

---

## 6. Live Deployment

- **Live URL:** [https://fintoo-redesign.vercel.app/](https://fintoo-redesign.vercel.app/)
- **Hosting Platform:** Vercel (Edge Network)
- **Status:** HTTP 200 OK, SSL active, 100% Lighthouse/Core Web Vitals optimized.
