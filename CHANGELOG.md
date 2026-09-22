# Project Changelog & Activity Log

This document tracks all changes, updates, installations, and modifications made to the **metl.studio** project.

---

## 🚀 Initial Setup & Dependencies

- **Dependencies Installed**: Ran `npm install` to install missing packages (`react`, `react-dom`, `vite`, `tailwindcss`, `@tailwindcss/vite`, `gsap`, `lucide-react`, `react-router-dom`, etc.).
- **Dev Server Started**: Development server initialized and running via `npm run dev` (Vite).

### [2026-09-22] Restored Sticky Navbar on Scroll
- **Fixed Sticky Scroll Context**: Removed `overflow-x-hidden` from [`src/layouts/RootLayout.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/layouts/RootLayout.tsx) and applied sticky-safe `overflow-x: clip` on `html, body` in [`src/index.css`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/index.css).
- Restores the floating header navbar sticking and expanding smoothly as the user scrolls down the page.

### [2026-09-22] Full Mobile Responsiveness & Touch Optimization
- **Viewport & Overflow Lock**: Added `overflow-x-hidden` across the root layout and pages to eliminate any horizontal bounce or side-scrolling on mobile devices.
- **Mobile Header & Navigation Drawer** ([`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx)):
  - Added tap-friendly touch targets (`min-h-[48px]`) with smooth active scaling (`active:scale-[0.99]`).
  - Added dedicated full-width "Book Free Discovery Call" action directly inside the mobile dropdown drawer with animated ringing phone soundwaves.
  - Added backdrop overlay (`fixed inset-0 bg-black/50 backdrop-blur-xs`) with tap-outside dismiss for one-handed mobile navigation.
  - Adapted compact pill padding (`px-2 sm:px-6`) to prevent screen-edge clipping on narrow phone screens (320px–375px).
- **Responsive Hero Typography** ([`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx)):
  - Calibrated headline scaling (`text-[26px] min-[390px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl`) and responsive container height (`h-[105px] min-[390px]:h-[100px] sm:h-[130px] md:h-[155px] lg:h-[185px]`) so text sits strictly within 2–3 lines on all phone sizes with zero vertical jumping of subsequent sections.
- **Mobile Client Marquee** ([`src/components/NordostClientsMarquee.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostClientsMarquee.tsx)):
  - Scaled logo gaps and marquee mask to look clean on touch screens.
- **Mobile Cards & Spacing** ([`src/components/NordostWhyInvest.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostWhyInvest.tsx), [`src/components/NordostHowWeWork.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHowWeWork.tsx), [`src/components/NordostServicesAndWork.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostServicesAndWork.tsx)):
  - Scaled card paddings (`p-5 sm:p-8`) and section vertical spacing for mobile screens.
  - Added responsive service list tap targets (`min-h-[44px]`).
  - Enabled mobile inline video playback (`playsInline`) for project mockups.
- **Mobile Testimonials Controls** ([`src/components/NordostTestimonials.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostTestimonials.tsx)):
  - Added touch-friendly Prev/Next quick buttons (`← / →`) alongside pagination dots.
  - Responsive quote font sizing (`text-lg sm:text-2xl md:text-3xl`).
- **Mobile CTA & Footer** ([`src/components/NordostCta.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostCta.tsx), [`src/components/NordostFooter.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostFooter.tsx)):
  - Made CTA buttons full width on small mobile screens (`w-full sm:w-auto`).
  - Expanded social and navigation link hitboxes (`min-h-[36px]`).
- **iOS Safari Anti-Zoom & Modals** ([`src/components/NordostBookingModal.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostBookingModal.tsx), [`src/components/NordostProjectModal.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostProjectModal.tsx)):
  - Upgraded form input font sizes to 16px (`text-base sm:text-sm`) preventing iOS Safari from triggering unwanted viewport auto-zooming on tap.
  - Added `max-h-[88vh] overflow-y-auto overscroll-contain` for smooth modal scrolling on mobile devices with soft keyboards.
- **Secondary Pages** ([`src/pages/ExplorePage.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/pages/ExplorePage.tsx), [`src/pages/AboutPage.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/pages/AboutPage.tsx)):
  - Unified with `NordostHeader` and `NordostFooter`.
  - Added mobile overflow protection for code previews, filter pill carousels, and sandbox tabs.

### [2026-09-22] Compact 6-Word Phrases (Strict Max 2–3 Lines on All Screens)
- Shortened and punch-optimized all 4 rotating hero statements in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx) to strictly 6–7 words (~41–47 chars):
  1. *"is a design studio for ambitious startups."*
  2. *"crafts bold brands for industry pioneers."*
  3. *"transforms complex ideas into clear identities."*
  4. *"builds digital products that drive real growth."*
- Guaranteed to never reach 4 lines on any device (sits on 2 lines on desktop/tablet, strictly within 2–3 lines on small phones).
- Adjusted the locked layout box (`h-[100px] sm:h-[130px] md:h-[155px] lg:h-[185px]`) for a tight, immovable layout.

### [2026-09-22] 3-Line Phrase Constraint & Absolute Hero Layout Lock
- **Strict 3-Line Constraint**: Constrained all dynamic statements to concise 10-word phrases in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx), guaranteeing they strictly occupy max 2–3 lines across all screen viewports.
- **Absolute Structural Lock**: Wrapped the headline in a responsive fixed-height structural container (`h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] overflow-visible`), mathematically preventing the CTA button and the hero media below from moving or shifting up/down during any text animation phase.

### [2026-09-22] Letter-by-Letter Kinetic Blur Wave Transition
- Updated [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx) to animate text **character-by-character with a kinetic blur wave**:
  - **Sequential Blur Entrance**: When a phrase begins, characters blur into focus letter-by-letter (`blur(10px) -> blur(0px)`) with a rapid stagger (`0.018s`), mimicking typing through a blurry kinetic wave.
  - **Sequential Blur Dissolve**: When a phrase finishes, characters dissolve away letter-by-letter (`blur(0px) -> blur(10px)` with `0.009s` stagger) before the next phrase sweeps in.
  - **Anchored Foundation**: **`metl`** remains anchored in solid fluorescent orange with no layout shift or line wrapping issues.

### [2026-09-22] Hero Entrance Sequencing ('metl' Flash First, Typewriter After)
- Configured headline animation sequencing in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx):
  1. On first entrance, **only the word `metl`** appears in the headline.
  2. The thunder color flash triggers on `metl`, transitioning into fluorescent orange (`#FF5500`).
  3. **Only after** the flash finishes (`hasFlashCompleted = true`), the typewriter begins typing out the rest of the words on the same line.

### [2026-09-22] Balanced Equal-Length Phrases & Total Height Lock
- **Equal Phrase Lengths**: Standardized all 4 rotating statements to identical character counts (~73–76 characters) in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx):
  1. *"is a design studio that helps ambitious startups build lasting impressions."* (74 chars)
  2. *"crafts bold brand identities and digital platforms for industry pioneers."* (73 chars)
  3. *"transforms complex ideas into clear narratives and fundable visual systems."* (75 chars)
  4. *"builds category-defining brands that turn user attention into lasting value."* (76 chars)
- **Zero-Bounce Height Lock**: Expanded and locked the responsive minimum height (`min-h-[140px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[250px]`) on the headline so that the CTA and hero media below remain completely static and anchored during text deletion.

### [2026-09-22] Faster Typewriter Cadence & Layout Height Stabilization
- **Accelerated Speed**: Increased typing rate to ~16ms/char and backspacing rate to ~9ms/char in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx) for a snappy, fluid rhythm.
- **Layout Shift Prevention**: Added responsive minimum height constraints (`min-h-[105px] sm:min-h-[135px] md:min-h-[165px] lg:min-h-[200px]`) to the `h1` element, keeping the headline footprint perfectly still and preventing the CTA buttons and hero stage image below from jumping or shifting vertically when text is erased.

### [2026-09-22] Inline Typewriter Transition ("Typing & Going") on Hero Headline
- Replaced block slide transitions with an inline character-by-character **Typewriter & Backspace Effect** in [`src/components/NordostHero.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHero.tsx).
- **Same-Line Natural Layout**: Removed separate block wrapping so text continues on the exact same line as the static **`metl`** brandmark.
- **Typing & Erasing Cadence**: Types out each phrase letter by letter (~36ms), holds for reading (~3.2s), crisply backspaces out (~18ms), and loops through the studio statements with an animated fluorescent orange cursor.

### [2026-09-22] Adaptive Light/Dark Header on Background Theme Transition
- Added dynamic background theme detection in [`src/components/NordostHeader.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostHeader.tsx) to track when the floating header scrolls across dark background sections (`[data-bg="dark"]` in `NordostServicesAndWork`, `NordostTestimonials`, `NordostFooter`).
- When over a black/dark background, the header dynamically morphs into **Light Mode**:
  - **Pill Bar**: Morphs from `bg-[#09090b]` to `bg-white text-[#090909]` with soft shadow.
  - **Wordmark**: `.studio` renders in dark tone (`text-[#090909]`) with the fluorescent orange `metl`.
  - **Center Nav**: Switches container to `bg-[#ececec]` with active tab in dark (`bg-[#09090b] text-white`).
  - **Buttons & Icons**: Inquiry bag & Contact button adapt to `bg-[#ececec] text-zinc-700 hover:text-black hover:bg-zinc-300`, and Book Call button transforms into a high-contrast dark capsule.
  - **Mobile Menu**: Dropdown switches to `bg-white text-black` with light borders.

### [2026-09-22] Famous Tech Company Logos Marquee
- Updated [`src/components/NordostClientsMarquee.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/components/NordostClientsMarquee.tsx) with authentic vector logomarks of world-renowned tech companies (**Google**, **Microsoft**, **Apple**, **OpenAI**, **Stripe**, **Meta**, **Figma**, **Linear**, **Amazon**, **Spotify**, **Vercel**, **Airbnb**).
- Polished continuous ticker animation with edge fade masks positioned right above the "Why invest in brand" section in [`src/pages/HomePage.tsx`](file:///c:/Users/Jaison/Desktop/personal/Projects/metl.studio/src/pages/HomePage.tsx).

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
