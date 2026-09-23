import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Zap, Users, Globe2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NordostAboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headRef.current) {
        gsap.from(headRef.current, {
          scrollTrigger: {
            trigger: headRef.current,
            start: 'top 90%',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      if (metricsRef.current) {
        gsap.from(metricsRef.current.children, {
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 92%',
            once: true,
          },
          y: 25,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      if (principlesRef.current) {
        gsap.from(principlesRef.current.children, {
          scrollTrigger: {
            trigger: principlesRef.current,
            start: 'top 92%',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    { value: '$180M+', label: 'Client Venture Capital Raised', sub: 'Seed to Series B rounds' },
    { value: '38+', label: 'Category Pioneers Scaled', sub: 'Across US, EU & Switzerland' },
    { value: '99.4%', label: 'On-Time Sprint Completion', sub: 'Zero scope drift guarantee' },
    { value: '14', label: 'Global Design & Identity Awards', sub: 'Awwwards, FWA, Type Directors' },
  ];

  const principles = [
    {
      icon: Users,
      title: 'Direct Senior Access',
      desc: 'No account managers, junior handoffs, or agency fluff. You partner directly with the senior partners from kick-off to live launch.',
    },
    {
      icon: Zap,
      title: 'Human Taste & AI Speed',
      desc: 'Obsessive typographic taste and strategic clarity lead every decision. AI accelerators allow us to ship in weeks what traditional agencies take quarters to build.',
    },
    {
      icon: ShieldCheck,
      title: 'Self-Sufficient Design Systems',
      desc: 'We engineer living design systems, component libraries, and Figma tokens so your in-house team remains completely autonomous after launch.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#F6F6F6] text-[#090909] py-16 sm:py-24 md:py-32 border-b border-neutral-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>05 / ABOUT THE STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#090909] leading-tight mb-6">
            We build brands and digital products for founders who refuse to blend in.
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Metl is a modern design & engineering studio founded in Vienna & Zurich. We combine strategic narrative, precision typography, and production engineering to turn high-conviction ideas into enduring market leaders.
          </p>
        </div>

        {/* Studio Metrics Grid */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl sm:text-4xl font-medium tracking-tight text-[#090909]">
                  {item.value}
                </span>
                <h4 className="text-xs sm:text-sm font-medium text-neutral-800 mt-2">
                  {item.label}
                </h4>
              </div>
              <p className="text-[11px] font-mono text-neutral-400 mt-3">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Principles / How We Work Section */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-2">
                Operational Philosophy
              </p>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#090909]">
                How we work. No matter the scale.
              </h3>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#090909] hover:text-[#FF5500] transition"
            >
              <span>Read Full Studio Story & Philosophy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div
            ref={principlesRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col justify-between hover:border-neutral-400 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-[#F6F6F6] text-[#090909] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FF5500]" />
                    </div>
                    <h4 className="text-lg font-medium text-[#090909]">{item.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-6">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Studio Footprint Strip */}
        <div className="bg-[#090909] text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Globe2 className="w-4 h-4 text-[#FF5500]" />
              <span>GLOBAL COLLABORATION</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-medium tracking-tight">
              Operating natively across CET & EST timezones
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              We work asynchronously and in high-cadence synchronous sprints with startups worldwide.
            </p>
          </div>
          <Link
            to="/about"
            className="shrink-0 px-6 py-3 rounded-full bg-[#FF5500] hover:bg-[#ff661a] text-white font-medium text-xs sm:text-sm transition-all"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};
