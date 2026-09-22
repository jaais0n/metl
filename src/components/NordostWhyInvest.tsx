import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NordostWhyInvest = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
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

      // Animate cards staggered
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
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

  const cards = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11.013 18.582L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904L20 11.5M15 18h6m-3-3v6" />
        </svg>
      ),
      title: '35% more time from investors',
      desc: 'In a randomized study of nearly 35,000 early-stage investors, better-designed pitch decks increased time spent by 35%.',
      link: 'https://journals.aom.org/doi/10.5465/AMPROC.2025.456bp',
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 6v12m5.196-9L6.804 15m0-6l10.392 6" />
        </svg>
      ),
      title: '46% link credibility to website design',
      desc: "In a study of 2,684 people evaluating real websites, visual design was the most frequently mentioned factor when judging credibility.",
      link: 'https://credibility.stanford.edu/pdf/How_Do_People_Evaluate_a_Web_Site%27s_Credibility_v37.pdf',
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
          <path d="M7 16c.5-2 1.5-7 4-7c2 0 2 3 4 3c2.5 0 4.5-5 5-7" />
        </svg>
      ),
      title: '36% higher market cap for strong brands',
      desc: 'Across 21 public companies over four years, a 10-point rise in brand consideration tracked with a 36.4% increase in market cap.',
      link: 'https://www.westcap.com/stories/brand-isnt-vanity-its-a-valuation-multiplier',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#F6F6F6] text-[#090909] py-16 md:py-24 border-t border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Head */}
        <div ref={headRef} className="space-y-4 mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
            Why invest in brand
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#090909] max-w-2xl leading-tight">
            Design isn't decoration. It changes behavior.
          </h2>
        </div>

        {/* 3 Research Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full min-h-[300px] border border-neutral-200/70 hover:border-neutral-400 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-8 h-8 rounded-full bg-[#F6F6F6] text-[#090909] flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#090909] leading-snug">
                  {card.title}
                </h3>
              </div>

              <div className="mt-8 pt-4 space-y-4">
                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                  {card.desc}
                </p>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#090909] hover:underline"
                >
                  <span>Read the study</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10M7 17L17 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
