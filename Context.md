# 🧠 GitHub Copilot Instructions — Irham Ciptadi Portfolio

Modern bilingual portfolio (Indonesia/English) built with Next.js 16, TypeScript, Tailwind, and Framer Motion.
Animated, colorful, futuristic, and language/theme preferences are stored in localStorage.

---

## 🧩 PHASE 1 — PROJECT SETUP

### Task 1.1 — Create Project

```bash
npx create-next-app@latest irham-portfolio --typescript --tailwind --eslint --src-dir
cd irham-portfolio
npm install framer-motion lucide-react
```

### Task 1.2 — Clean Defaults

- Delete `/src/app/page.tsx`, `/src/app/layout.tsx`, and `/src/app/globals.css` defaults.
- Replace with custom files in next phases.

---

## 🧱 PHASE 2 — FOLDER STRUCTURE

Create this structure:

```
src/
 └── app/
     ├── layout.tsx
     ├── page.tsx
     ├── globals.css
     ├── components/
     │   ├── Navbar.tsx
     │   ├── Hero.tsx
     │   ├── About.tsx
     │   ├── Skills.tsx
     │   ├── Projects.tsx
     │   ├── Contact.tsx
     │   ├── Footer.tsx
     │   └── GradientBg.tsx
     └── lib/
         ├── i18n.ts
         └── usePersistedState.ts
```

---

## ⚙️ PHASE 3 — BASE CONFIGURATION

### Task 3.1 — `layout.tsx`

```tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irham Ciptadi — Full-Stack Web Developer",
  description: "Modern bilingual portfolio of Irham Ciptadi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
```

### Task 3.2 — `globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
body {
  @apply antialiased selection:bg-fuchsia-300/50;
}
```

### Task 3.3 — `tailwind.config.ts`

Add:

```ts
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
```

---

## 🌈 PHASE 4 — CORE COMPONENTS

### Task 4.1 — Build Components

Create each in `src/app/components/`:

- `Navbar.tsx`
- `Hero.tsx`
- `About.tsx`
- `Skills.tsx`
- `Projects.tsx`
- `Contact.tsx`
- `Footer.tsx`
- `GradientBg.tsx`

Use the previous React single-file portfolio as reference (copy section by section).

Each component:

- Uses Tailwind for styling
- Uses Framer Motion for animation
- Uses data from bilingual `i18n.ts`

### Task 4.2 — `GradientBg.tsx`

Add the animated colorful background blobs.

---

## 🌍 PHASE 5 — BILINGUAL LOGIC

### Task 5.1 — `lib/i18n.ts`

Move the bilingual dictionary (ID & EN) from the previous React file here and **add Work Experience** section inside About:

```ts
export const i18n = {
  en: {
    about: {
      title: "About",
      body: "Full-stack developer with 5+ years building insurance/finance systems...",
      highlights: [
        "Frontend: React, Next.js, Vue 3, Tailwind",
        "Backend: Node.js, Express/Nest, Laravel",
        "Data: PostgreSQL, MySQL, Redis",
        "DevOps: Docker, CI/CD, Vercel",
      ],
      experience: [
        {
          company: "Salam Enterprise",
          role: "Full-Stack Developer",
          period: "2020 – Present",
          desc: [
            "Support problem user",
            "Lead small team with 3 people include in team",
            "Developing insurance automation systems (health, reinsurance, claim workflows) and financial apps using Laravel, Node.js, and PostgreSQL.",
          ],
        },
        {
          company: "Freelance Projects",
          role: "Web Developer",
          period: "2018 – 2020",
          desc: [
            "Build websites for SMEs and fintech startups",
            "Focus on UI/UX and API integration",
            "Deliver responsive, SEO-friendly web apps.",
          ],
        },
      ],
    },
  },
  id: {
    about: {
      title: "Tentang",
      body: "Full-stack developer dengan pengalaman 5+ tahun membangun sistem asuransi/keuangan...",
      highlights: [
        "Frontend: React, Next.js, Vue 3, Tailwind",
        "Backend: Node.js, Express/Nest, Laravel",
        "Data: PostgreSQL, MySQL, Redis",
        "DevOps: Docker, CI/CD, Vercel",
      ],
      experience: [
        {
          company: "Salam Enterprise",
          role: "Full-Stack Developer",
          period: "2020 – Sekarang",
          desc: [
            "Membantu menyelesaikan masalah user",
            "Memimpin tim kecil beranggotakan 3 orang",
            "Mengembangkan sistem otomasi asuransi (kesehatan, reasuransi, alur klaim) dan aplikasi keuangan menggunakan Laravel, Node.js, dan PostgreSQL.",
          ],
        },
        {
          company: "Freelance Projects",
          role: "Web Developer",
          period: "2018 – 2020",
          desc: [
            "Membangun website untuk UMKM dan startup fintech",
            "Fokus pada UI/UX dan integrasi API",
            "Mengembangkan aplikasi web responsif dan SEO-friendly.",
          ],
        },
      ],
    },
  },
};
```

### Task 5.2 — `lib/usePersistedState.ts`

```ts
"use client";
import { useEffect, useState } from "react";
export default function usePersistedState<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState] as const;
}
```

### Task 5.3 — Implement in Navbar

- Auto-detect browser language (`navigator.language`)
- Save preference in localStorage (`irham.lang`)
- Add switcher button to toggle between ID/EN.

---

## 💡 PHASE 6 — PAGE INTEGRATION

### Task 6.1 — `page.tsx`

Combine all components:

```tsx
"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GradientBg from "./components/GradientBg";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GradientBg />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
```

---

## 🚀 PHASE 7 — TEST & DEPLOY

### Task 7.1 — Run Locally

```bash
npm run dev
```

Access: [http://localhost:3000](http://localhost:3000)

### Task 7.2 — Production Build

```bash
npm run build
npm start
```

### Task 7.3 — Deploy to Vercel

```bash
vercel
```

Domain: **irhamciptadi.dev**

---

## 🧠 PHASE 8 — ENHANCEMENTS (Optional)

- Add dark/light theme toggle persisted in localStorage.
- Add OG image + SEO metadata.
- Add Work Experience cards inside About section (use Framer Motion fade-up animation).
- Add smooth scroll & scroll spy in Navbar.
- Add PWA support for offline access.

---

✅ **Goal:**
End result is a **fully animated bilingual portfolio**, modern & responsive, deployable to Vercel, with persistent language and theme preferences in localStorage, and a new **Work Experience** section inside About with detailed bullet points for each experience.
