# Project Changelog & Activity Log

This document tracks all changes, updates, installations, and modifications made to the **metl.studio** project.

---

## 🚀 Initial Setup & Dependencies

- **Dependencies Installed**: Ran `npm install` to install missing packages (`react`, `react-dom`, `vite`, `tailwindcss`, `@tailwindcss/vite`, `gsap`, `lucide-react`, `react-router-dom`, etc.).
- **Dev Server Started**: Development server initialized and running via `npm run dev` (Vite).

---

## 📝 Recent Changes & Updates

### [2026-09-22] Animated Ringing Waves on Book Call Phone Icon
- Replaced static `PhoneCall` icon with custom `RingingPhoneIcon` in [`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx).
- Added `ringWaveInner` and `ringWaveOuter` CSS keyframe animations in [`src/index.css`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/index.css) to animate **only the two ringing soundwave arcs** (radiating outward in a pulsing rhythm) while keeping the phone handset firmly in place.

### [2026-09-22] Delayed Color Flash on Header 'metl' Brandmark
- Segmented the header brandmark into `metl` and `.studio` in [`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx).
- Added a delayed GSAP animation sequence (`delay: 1.1s`) on initial page load / mount that performs the thunder color flash and transitions **`metl`** to fluorescent orange (`#FF5500`) while preserving `.studio` in crisp white.

### [2026-09-22] Delayed Thunder Flash on 'metl' Text
- Added a timing delay (`delay: 0.6s` on enter, `0.4s` on re-enter) to the thunder color flash sequence in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx).
- Allows the headline text to settle into view in solid dark tone first before the lightning strobe strikes and settles into fluorescent orange (`#FF5500`).

### [2026-09-22] True Center Alignment for Header Navigation Capsule
- Replaced flex spacing with absolute 50% center positioning (`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`) for the navigation pill (`Home`, `Services`, `Work`, `Explore`, `About`) in [`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx), guaranteeing perfect geometric centering even when the header stretches to full width.

### [2026-09-22] Adaptive Action Buttons (Icons when Compact, Full Text when Stretched)
- Updated action buttons in [`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx) to adaptively switch:
  - **Compact State (Top)**: Circular icon-only buttons (`Mail`, `PhoneCall`) for a tight, centered look.
  - **Stretched State (Scroll)**: Smoothly expands into full-text pill buttons ("Contact", "Book Call") as the header expands across the viewport.

### [2026-09-22] Header Brandmark Updated to 'metl.studio' Text
- Removed the circular swirl logo badge from the header in [`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx).
- Rendered clean, bold typography **`metl.studio`** as the main brandmark.

### [2026-09-22] Scroll-Triggered Hero Flash & Orange Transition
- Bound the thunder color flash and fluorescent orange transition to `ScrollTrigger` in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx) so it dynamically re-plays whenever the user scrolls into or returns to the hero section.

### [2026-09-22] Removed Header Borders & Strokes
- Removed all border and outline strokes from the floating header bar and inner capsule buttons in [`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx), creating a pure seamless solid dark pill design.

### [2026-09-22] Sharp Solid Fluorescent Orange Typography (Zero Blur)
- Completely removed all `textShadow`, `filter`, and `drop-shadow` blur effects from the **`metl`** text in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx).
- Retained clean flash strobe and smooth color transition to crisp, 100% solid fluorescent orange (`#FF5500`).

### [2026-09-22] Solid Plain Background Header
- Removed all `backdrop-blur` and frosted effects; switched header to a clean, crisp, solid plain dark background (`bg-[#09090b]`) in [`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx).

### [2026-09-22] Pure Typography Thunder Flash & Fluorescent Orange Transition
- Removed all SVG graphics; implemented pure typography-based thunder flash animation sequence directly on the **`metl`** text in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx).
- Features realistic multi-strobe lightning brightness flares, voltage dips, and micro-vibrations across the typography.
- Smoothly burns in and settles into vibrant **fluorescent neon orange** (`#FF5E00`) with warm neon text glow.

### [2026-09-22] Header Compact Center & Scroll Expansion
- Configured default **compact centered size** (`max-w-[720px]`) when at the top of the page with balanced snug spacing.
- Added smooth **scroll-reactive transition** (`cubic-bezier` easing) that expands the header to the **actual full size** (`max-w-7xl`) upon scrolling down.

### [2026-09-22] ExplorePage TSX Parse Error Fix
- Fixed JSX tag closing alignment and inline array indexing in [`src/pages/ExplorePage.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/pages/ExplorePage.tsx).
- Verified syntax with `tsc --noEmit` (0 errors).

### [2026-09-22] Floating Pill Header Redesign
- Created floating pill header matching reference design in [`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx).
- **Left Logo**: White circular badge with spiral swirl SVG logo and `metl.studio` logotype.
- **Center Capsule**: Dark capsule nav container with active pill highlighting (`Home`, `Services`, `Work`, `Explore`, `About`).
- **Right Actions**: Shopping Bag icon with counter toast, vertical dividers `|`, "Contact" email copy action, and mint-green "Book Call" pill button.

---

## 📌 Log of Ongoing Modifications

*Future changes, bug fixes, refactoring, and feature additions will be updated here systematically.*
