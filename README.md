# Orel Tako Yoga | אוראל טקו יוגה

> **מרחב לתנועה, נשימה ונוכחות** — A mindful sanctuary uniting body and spirit through conscious movement, breathwork, and deep inner reflection.

A modern, high-end, responsive React web application built for **Orel Tako Yoga**, designed around the **Earth & Breath** design system with full bilingual (Hebrew RTL / English LTR) support.

---

## ✨ Features

- **🧘 Zen Editorial Aesthetic ("Earth & Breath" Design System)**:
  - Curated warm linen palette (`#fff8f5`), sage green (`#475347`), terracotta clay (`#8e4d34`), and soft tonal containers.
  - High-end typography pairing Google Fonts **Playfair Display** (headlines) and **Assistant / Inter** (body text).
  - Organic arch shapes, floating rotating motifs, and subtle glassmorphic navigation.

- **🌐 Full Bilingual Support (Hebrew & English)**:
  - Hebrew (RTL) as primary locale with instant toggle to English (LTR).
  - Automatic `dir="rtl"` / `dir="ltr"` HTML switching and localized typography.

- **📅 Interactive Booking Engine (`/private-sessions`)**:
  - Monthly & weekly calendar schedule with real-time availability indicators.
  - Interactive date picking and time slot selection (`08:00`, `10:30`, `18:00`).
  - Direct on-site booking confirmation flow with animated success state.
  - Conflict detection / booked slot simulation with alternate suggestions.
  - One-click WhatsApp scheduling integration with pre-filled custom message.

- **🌿 Retreats & Workshops (`/retreats-workshops`)**:
  - Curated immersion cards (Judean Desert, Tel Aviv, Greek Islands, Jerusalem Hills).
  - Dynamic status tags (*Most Popular*, *Few Spots Left*, *Early Bird*), pricing, and spots remaining.
  - Interactive newsletter subscription form with instant feedback.

- **📖 The Yoga Journal & Blog (`/blog` & `/blog/:slug`)**:
  - Category filtering (*All, Philosophy, Anatomy & Alignment, Mindfulness, Lifestyle, Home Practice*).
  - Rich single article reading experience with drop-lead styling, physiology breakdowns, pull quotes, and related article recommendations.

- **📬 Contact & Community**:
  - Direct WhatsApp chat integration.
  - Interactive contact form with client-side validation and confirmation feedback.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with customized Earth & Breath theme tokens
- **Routing**: [React Router 6](https://reactrouter.com/) (with automatic scroll-to-top handler)
- **Icons**: [Lucide React](https://lucide.dev/) & [Google Material Symbols Outlined](https://fonts.google.com/icons)
- **Fonts**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), [Assistant](https://fonts.google.com/specimen/Assistant), [Inter](https://fonts.google.com/specimen/Inter)

---

## 📁 Project Structure

```text
orelyoga/
├── public/
│   └── favicon.svg               # Minimalist Lotus brand favicon
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Glassmorphism header with language toggle & mobile drawer
│   │   └── Footer.tsx            # 3-column footer with brand story and quick links
│   ├── context/
│   │   └── LanguageContext.tsx   # Bilingual translation provider & RTL/LTR switcher
│   ├── data/
│   │   └── content.ts            # Content datasets (teaching styles, retreats, articles, schedule)
│   ├── pages/
│   │   ├── Home.tsx              # Hero, About, Offerings preview, Journal preview, Contact
│   │   ├── PrivateSessions.tsx   # Monthly calendar & interactive booking engine
│   │   ├── RetreatsWorkshops.tsx # Immersions showcase & newsletter signup
│   │   ├── Blog.tsx              # Category filtering & article list
│   │   └── ArticleDetail.tsx     # Editorial reading view & related reads
│   ├── types/
│   │   └── index.ts              # TypeScript data interfaces
│   ├── App.tsx                   # Main router setup & layout
│   ├── index.css                 # Base Tailwind styles & custom typography
│   └── main.tsx                  # React DOM entry point
├── index.html                    # Root HTML with Google Fonts & Material Symbols
├── tailwind.config.js            # Custom color palette, spacing & animation tokens
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or later
- **npm**: v9.0.0 or later

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd /Users/inbaltako/Developers/orelyoga
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port displayed in your terminal) in your browser.

### Production Build

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Color Palette & Design Tokens

| Token | Hex | Role |
| :--- | :--- | :--- |
| `background` / `surface` | `#fff8f5` | Warm linen base surface |
| `primary` | `#475347` | Grounding Sage Green (CTAs & primary titles) |
| `primary-container` | `#5f6b5e` | Soft Sage container |
| `secondary` | `#8e4d34` | Terracotta Clay accent (active highlights & tags) |
| `secondary-container` | `#fea98b` | Soft Clay background (calendar active state) |
| `on-surface` | `#1e1b18` | Espresso typography |
| `surface-container-low` | `#fbf2ed` | Tonal card background |

---

## 📄 License

© 2024 Orel Tako Yoga. All rights reserved.
