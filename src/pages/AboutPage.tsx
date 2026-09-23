import { useState } from 'react';
import { 
  Terminal, 
  FolderTree, 
  CheckCircle2, 
  Cpu,
  Compass
} from 'lucide-react';
import { NordostHeader } from '../components/NordostHeader';
import { NordostFooter } from '../components/NordostFooter';
import { NordostBookingModal } from '../components/NordostBookingModal';

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<'studio' | 'tech'>('studio');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const team = [
    {
      name: 'Lukas Weidmann',
      role: 'Founding Partner & Creative Director',
      bio: 'Former design lead at Pentagram & Meta. Obsessed with Swiss typographic precision and kinetic identity systems.',
      location: 'Vienna, AT',
    },
    {
      name: 'Elena Rostova',
      role: 'Partner & Brand Strategist',
      bio: 'Venture storytelling advisor for Tier-1 European tech founders. Helped startups raise $180M+ in Seed and Series A.',
      location: 'Zurich, CH',
    },
    {
      name: 'Julian Mercer',
      role: 'Partner & Engineering Lead',
      bio: 'Creative technologist building production web flagships with Vite, React, and GSAP micro-animations.',
      location: 'London / Remote',
    },
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Studio Foundation',
      desc: 'Founded in Vienna with a clear thesis: eliminate agency bloat and deliver venture-grade design with senior-only agility.',
    },
    {
      year: '2024',
      title: 'Global Expansion & Fintech Recognition',
      desc: 'Led full rebrands and flagship digital platforms for Evooq, Danelec, and Perlin Bio. Featured on Awwwards & Site of the Day.',
    },
    {
      year: '2025',
      title: 'Next-Gen Creative Technology Lab',
      desc: 'Pioneered custom AI-accelerated sprint workflows, kinetic SVG engines, and living design token libraries.',
    },
    {
      year: '2026',
      title: 'Metl Studio Global Flagship',
      desc: 'Partnering exclusively with visionary founders across North America, the UK, and Switzerland.',
    },
  ];

  const steps = [
    {
      title: '1. CSS-First Tailwind v4 Engine',
      description: 'In Tailwind CSS v4, styling is defined directly in CSS with @import "tailwindcss". No legacy config files required.',
    },
    {
      title: '2. Declarative React Router DOM',
      description: 'Uses createBrowserRouter with RootLayout for clean nesting, scroll preservation, and seamless client transitions.',
    },
    {
      title: '3. Blazing Fast Vite 8 Dev Server',
      description: 'Instant server start and near-instant Hot Module Replacement powered by modern native ES modules.',
    },
    {
      title: '4. Strict TypeScript 5.8+',
      description: 'Robust end-to-end typing for router props, state variables, and component parameters to prevent runtime bugs.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#090909] flex flex-col justify-between antialiased selection:bg-black selection:text-white">
      <div>
        <NordostHeader onBookCall={() => setIsBookingOpen(true)} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
          {/* Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono mb-6">
              <Compass className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>ABOUT METL STUDIO</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#090909] leading-[1.08] mb-6">
              A bespoke design studio engineered for conviction.
            </h1>
            <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
              We operate without bureaucracy or junior handoffs. Senior partners collaborate directly with founders to craft bold brands and digital flagships.
            </p>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 mt-8 p-1.5 bg-neutral-200/80 rounded-full w-fit">
              <button
                onClick={() => setActiveTab('studio')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                  activeTab === 'studio'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                Studio Story & Ethos
              </button>
              <button
                onClick={() => setActiveTab('tech')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'tech'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Architecture & Stack</span>
              </button>
            </div>
          </div>

          {/* TAB 1: STUDIO STORY & ETHOS */}
          {activeTab === 'studio' && (
            <div className="space-y-16 sm:space-y-24">
              {/* Core Philosophy Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-white p-7 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#FF5500] font-semibold mb-4 block">01 / DISCIPLINE</span>
                    <h3 className="text-xl font-medium text-[#090909] mb-3">Relentless Focus</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      We never juggle 20 projects at once. We take on a strictly constrained client roster so every identity and platform receives our complete creative intensity.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#FF5500] font-semibold mb-4 block">02 / PARTNERSHIP</span>
                    <h3 className="text-xl font-medium text-[#090909] mb-3">Senior-Only Roster</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      The people in your kickoff are the ones designing your system and writing your code. Zero junior handoffs, zero misaligned game of telephone.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#FF5500] font-semibold mb-4 block">03 / VELOCITY</span>
                    <h3 className="text-xl font-medium text-[#090909] mb-3">Production-Ready Code</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      We don’t stop at static Figma mocks. We engineer performant, responsive React and Tailwind flagships ready for immediate deployment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership & Partners */}
              <div>
                <div className="border-b border-neutral-300 pb-4 mb-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                    Studio Leadership
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {team.map((member, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-7 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono text-neutral-400">{member.location}</span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        </div>
                        <h4 className="text-lg font-medium text-[#090909]">{member.name}</h4>
                        <p className="text-xs font-mono text-[#FF5500] mt-1 mb-4">{member.role}</p>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Studio Timeline */}
              <div>
                <div className="border-b border-neutral-300 pb-4 mb-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                    Our Journey & Milestones
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {milestones.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs"
                    >
                      <span className="text-2xl font-mono font-bold text-[#FF5500] block mb-2">
                        {m.year}
                      </span>
                      <h4 className="text-base font-medium text-[#090909] mb-2">{m.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pitch CTA */}
              <div className="bg-[#090909] text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-medium tracking-tight mb-4">
                  Let’s build something enduring together.
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
                  Schedule a private consultation with our studio partners. We look forward to learning about your vision.
                </p>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#ff661a] text-white font-medium text-sm transition-all cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Discovery Call
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL ARCHITECTURE & STACK GUIDE */}
          {activeTab === 'tech' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200 shadow-xs">
                    <div className="flex items-center gap-2 text-black font-medium text-sm sm:text-base mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{step.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Directory Structure */}
              <div className="bg-white rounded-3xl p-5 sm:p-8 border border-neutral-200 shadow-xs">
                <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                  <FolderTree className="w-5 h-5 text-[#FF5500]" />
                  <h2 className="text-lg sm:text-xl font-medium text-[#090909]">Project File Tree</h2>
                </div>

                <div className="bg-[#090909] rounded-2xl p-4 sm:p-5 border border-neutral-800 font-mono text-[11px] sm:text-xs text-neutral-300 overflow-x-auto leading-relaxed">
                  <p className="text-[#FF5500] font-semibold mb-2">metl.studio/</p>
                  <p>├── index.html <span className="text-neutral-500"># Entry HTML with modern typography & viewport</span></p>
                  <p>├── vite.config.ts <span className="text-neutral-500"># Vite configuration with @tailwindcss/vite</span></p>
                  <p>├── package.json <span className="text-neutral-500"># Scripts, dependencies (React 19, Tailwind v4, Router)</span></p>
                  <p>└── src/</p>
                  <p>{'    '}├── main.tsx <span className="text-neutral-500"># Application bootstrap and router mount</span></p>
                  <p>{'    '}├── index.css <span className="text-neutral-500"># Tailwind v4 import (@import "tailwindcss")</span></p>
                  <p>{'    '}├── router.tsx <span className="text-neutral-500"># React Router route tree definitions</span></p>
                  <p>{'    '}├── layouts/</p>
                  <p>{'    '}│   └── RootLayout.tsx <span className="text-neutral-500"># Shared shell</span></p>
                  <p>{'    '}├── components/</p>
                  <p>{'    '}│   ├── NordostHeader.tsx <span className="text-neutral-500"># Adaptive header navigation</span></p>
                  <p>{'    '}│   ├── NordostHero.tsx <span className="text-neutral-500"># Kinetic hero headline</span></p>
                  <p>{'    '}│   ├── NordostExploreSection.tsx <span className="text-neutral-500"># Interactive design lab</span></p>
                  <p>{'    '}│   ├── NordostAboutSection.tsx <span className="text-neutral-500"># Studio impact & philosophy</span></p>
                  <p>{'    '}│   └── NordostFooter.tsx <span className="text-neutral-500"># Studio footer with live clock</span></p>
                  <p>{'    '}└── pages/</p>
                  <p>{'        '}├── HomePage.tsx <span className="text-neutral-500"># All 5 studio sections</span></p>
                  <p>{'        '}├── ServicesPage.tsx <span className="text-neutral-500"># Comprehensive services</span></p>
                  <p>{'        '}├── WorkPage.tsx <span className="text-neutral-500"># Filterable case studies</span></p>
                  <p>{'        '}├── ExplorePage.tsx <span className="text-neutral-500"># Component showcase</span></p>
                  <p>{'        '}└── AboutPage.tsx <span className="text-neutral-500"># Studio ethos & tech guide</span></p>
                </div>
              </div>

              {/* Commands */}
              <div className="bg-white rounded-3xl p-5 sm:p-8 border border-neutral-200 shadow-xs">
                <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                  <Terminal className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg sm:text-xl font-medium text-[#090909]">Development CLI</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <div className="text-xs font-mono font-semibold text-emerald-700 mb-1">npm run dev</div>
                    <p className="text-xs text-[#737373]">Starts local Vite dev server with instant HMR</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <div className="text-xs font-mono font-semibold text-indigo-700 mb-1">npm run build</div>
                    <p className="text-xs text-[#737373]">Compiles TypeScript and builds production bundle</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <div className="text-xs font-mono font-semibold text-purple-700 mb-1">npm run preview</div>
                    <p className="text-xs text-[#737373]">Locally serves the built production bundle</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <NordostFooter />
      <NordostBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};
