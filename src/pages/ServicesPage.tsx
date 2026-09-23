import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles, Layers, Compass, Code, Play } from 'lucide-react';
import { NordostHeader } from '../components/NordostHeader';
import { NordostFooter } from '../components/NordostFooter';
import { NordostBookingModal } from '../components/NordostBookingModal';

export const ServicesPage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      code: '01',
      title: 'Brand Strategy & Market Positioning',
      icon: Compass,
      tagline: 'Establish undeniable clarity before writing a line of code.',
      deliverables: [
        'Strategic Narrative & Core Messaging Pillars',
        'Competitive Landscape & Differentiation Matrix',
        'Investor Pitch Deck Storytelling & Flow',
        'Customer Persona & ICP Mapping',
      ],
      description:
        'We clarify your core value proposition so your target market, investors, and talent immediately grasp why your product matters.',
    },
    {
      code: '02',
      title: 'Brand Identity & Visual Systems',
      icon: Layers,
      tagline: 'Visual identities that look iconic, timeless, and venture-grade.',
      deliverables: [
        'Vector Logotype, Wordmark & App Iconography',
        'Tailored Typographic Hierarchy & Licensing Setup',
        'Curated Color Palette & Contrast Tokens',
        'Figma Design System & Style Guidelines',
      ],
      description:
        'From primary logotypes to micro-badges and UI kits, we build systematic visual identities designed to scale effortlessly across every medium.',
    },
    {
      code: '03',
      title: 'Webdesign & Creative Engineering',
      icon: Code,
      tagline: 'High-performance digital flagships that convert visitors into advocates.',
      deliverables: [
        'Custom React / Vite / Tailwind Architecture',
        'Fluid Responsive Layouts & Breakpoint Systems',
        'SEO, GEO (Generative Engine Optimization) & Meta',
        'Lighthouse 95+ Performance & Speed Optimization',
      ],
      description:
        'Websites built with craft, clean code, and zero technical debt. Lightning fast loading speeds, smooth routing, and bulletproof accessibility.',
    },
    {
      code: '04',
      title: 'Motion Design & 3D Interactive Assets',
      icon: Play,
      tagline: 'Tactile motion that brings digital interfaces to life.',
      deliverables: [
        'GSAP Kinetic Animations & ScrollTrigger Rigging',
        'Interactive 3D Device & Hardware Mockups',
        'Dynamic Video Teasers & Social Launch Assets',
        'Micro-Interactions & Tactile Button States',
      ],
      description:
        'Dynamic motion gives software weight and presence. We build silky smooth animations that captivate users without sacrificing device performance.',
    },
  ];

  const packages = [
    {
      name: 'Strategic Brand Sprint',
      duration: '2 Weeks',
      bestFor: 'Early-stage startups preparing for fundraising or initial launch.',
      features: [
        'Complete Brand Narrative & Positioning',
        'Primary Logotype & Wordmark System',
        'Typography, Color Tokens & Asset Pack',
        'Pitch Deck Design & Investor Teaser',
        'Direct Partner Communication',
      ],
      highlight: false,
    },
    {
      name: 'Full Identity + Web Flagship',
      duration: '4–6 Weeks',
      bestFor: 'Seed to Series A startups ready for their landmark public debut.',
      features: [
        'Everything in Strategic Brand Sprint',
        'Complete Interactive Figma Design System',
        'Full Production Website Development (Vite/React)',
        'Kinetic Micro-Interactions & Custom GSAP Motion',
        'SEO Architecture & Launch Day Support',
      ],
      highlight: true,
    },
    {
      name: 'Studio Partnership Retainer',
      duration: 'Ongoing / Monthly',
      bestFor: 'Scaling teams needing continuous design leadership & high velocity.',
      features: [
        'Fractional Creative Direction & Design Lead',
        'Weekly Feature & Marketing Page Drops',
        'Interactive 3D & Product Motion Assets',
        'Continuous Performance & Conversion Optimization',
        'Priority Slack / Async Access',
      ],
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: 'How does your sprint model differ from traditional agencies?',
      a: 'Traditional agencies pass your project through account managers, junior designers, and slow bureaucratic review cycles. At Metl, you work directly with senior partners who execute everything from brand narrative to production code. This eliminates miscommunication and delivers exceptional quality in weeks rather than months.',
    },
    {
      q: 'Do you also develop the websites you design?',
      a: 'Yes. We are engineers as well as designers. We build with modern stacks including React, Vite, Next.js, and Tailwind CSS. Every animation, layout, and component is tested for performance, responsiveness, and clean maintainable code.',
    },
    {
      q: 'Can you work with our existing in-house engineering team?',
      a: 'Absolutely. We regularly deliver production-ready React components, Figma token libraries, or clean markup repositories that your internal engineering team can easily integrate into their product codebase.',
    },
    {
      q: 'How quickly can we start?',
      a: 'We take on a strictly limited number of clients at any given time to preserve our standard of excellence. Typically, new client sprints kick off within 1 to 2 weeks of scoping.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#090909] flex flex-col justify-between antialiased selection:bg-black selection:text-white">
      <div>
        <NordostHeader onBookCall={() => setIsBookingOpen(true)} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16 sm:mb-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>STUDIO SERVICES & CAPABILITIES</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#090909] leading-[1.08] mb-6">
              Strategic design and engineering for ambitious founders.
            </h1>
            <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
              We turn complex technologies and bold visions into unmistakable brands, iconic digital products, and high-converting web flagships.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="space-y-6 sm:space-y-8 mb-20 sm:mb-28">
            <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
              <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                Our 4 Core Practice Areas
              </p>
              <span className="font-mono text-xs text-neutral-500">End-to-End Execution</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.code}
                    className="bg-white p-7 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-xs flex flex-col justify-between hover:border-neutral-400 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-[#FF5500]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs text-neutral-400 font-semibold">
                          {pillar.code}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-medium text-[#090909] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#FF5500] font-medium mb-4">{pillar.tagline}</p>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-neutral-100">
                      <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                        Key Deliverables
                      </p>
                      <ul className="space-y-2">
                        {pillar.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Engagement Models */}
          <div className="mb-20 sm:mb-28">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <p className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-3">
                Engagement Formats
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#090909]">
                Structured for velocity, clarity, and impact.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-[#090909] text-white shadow-xl scale-[1.02] border border-neutral-800'
                      : 'bg-white text-[#090909] border border-neutral-200/80 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono px-3 py-1 rounded-full ${
                          pkg.highlight
                            ? 'bg-[#FF5500] text-white font-medium'
                            : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        {pkg.duration}
                      </span>
                      {pkg.highlight && (
                        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-medium mb-2">{pkg.name}</h3>
                    <p
                      className={`text-xs sm:text-sm mb-6 ${
                        pkg.highlight ? 'text-neutral-400' : 'text-neutral-600'
                      }`}
                    >
                      {pkg.bestFor}
                    </p>

                    <div
                      className={`pt-6 border-t ${
                        pkg.highlight ? 'border-neutral-800' : 'border-neutral-100'
                      }`}
                    >
                      <ul className="space-y-3">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                pkg.highlight ? 'text-[#FF5500]' : 'text-emerald-600'
                              }`}
                            />
                            <span className={pkg.highlight ? 'text-neutral-300' : 'text-neutral-700'}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-transparent">
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className={`w-full py-3 px-5 rounded-full font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        pkg.highlight
                          ? 'bg-white text-black hover:bg-neutral-200'
                          : 'bg-[#090909] text-white hover:bg-neutral-800'
                      }`}
                    >
                      <span>Inquire for Sprint</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto mb-20 sm:mb-28">
            <div className="text-center mb-10">
              <p className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-2">
                Frequently Asked Questions
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#090909]">
                Everything you need to know
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-xs transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-medium text-sm sm:text-base text-[#090909]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-black' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing CTA Banner */}
          <div className="bg-[#090909] text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight mb-4">
              Have an upcoming product launch or brand pivot?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Book a 30-minute discovery session with our senior team. We’ll review your goals and provide immediate strategic perspective.
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#ff661a] text-white font-medium text-sm transition-all cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Free Discovery Call
            </button>
          </div>
        </main>
      </div>

      <NordostFooter />
      <NordostBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};
