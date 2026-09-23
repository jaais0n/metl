import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NordostHowWeWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headRef.current) {
        gsap.from(headRef.current, {
          scrollTrigger: {
            trigger: headRef.current,
            start: 'top 95%',
            once: true,
          },
          y: 25,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 95%',
            once: true,
          },
          y: 35,
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

  const principles = [
    {
      title: 'Direct Senior Access',
      desc: 'You work directly with the three senior leads. Weekly loops, decisions straight into production.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 21a8 8 0 0 0-16 0" />
          <circle cx="10" cy="8" r="5" />
          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
        </svg>
      ),
    },
    {
      title: 'Human Taste & AI Speed',
      desc: 'Judgment leads every call. AI helps us move faster, so speed never costs you taste.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m17 2 4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
      ),
    },
    {
      title: 'Built for Self-Sufficiency',
      desc: 'Motion templates, UI kits, guidelines, and Claude skills. You hold the quality yourself.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033zM5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h2m3-18h1M3 9v1m18-1v2M3 14v1" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-we-work" ref={sectionRef} className="bg-[#F6F6F6] text-[#090909] py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="space-y-4 mb-10 sm:mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
            How we work
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#090909]">
            No matter the project.
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full min-h-[220px] sm:min-h-[260px] border border-neutral-200/70 hover:border-neutral-400 transition-all duration-300"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="w-8 h-8 rounded-full bg-[#F6F6F6] text-[#090909] flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#090909]">
                  {item.title}
                </h3>
              </div>

              <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#737373] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
