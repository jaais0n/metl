import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NordostHeroProps {
  onBookCall?: () => void;
}

export const NordostHero = ({ onBookCall }: NordostHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const metlRef = useRef<HTMLSpanElement>(null);
  const [isOrangeActive, setIsOrangeActive] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Initial headline and elements fade in
      tl.from(headlineRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
      })
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
      }, '-=0.5')
      .from(mediaRef.current, {
        y: 40,
        opacity: 0,
        scale: 0.98,
        duration: 1.0,
      }, '-=0.6');

      // Helper to trigger the color flash and orange transition with a delay
      const playFlashEffect = (delay = 0.5) => {
        if (!metlRef.current) return;
        gsap.killTweensOf(metlRef.current);
        const thunderTl = gsap.timeline({ delay });

        thunderTl
          .set(metlRef.current, { color: '#090909' })
          .to(metlRef.current, { color: '#ffffff', duration: 0.05 })
          .to(metlRef.current, { color: '#090909', duration: 0.04 })
          .to(metlRef.current, { color: '#ffffff', duration: 0.06 })
          .to(metlRef.current, { color: '#090909', duration: 0.04 })
          .to(metlRef.current, { color: '#ffffff', duration: 0.06 })
          .to(metlRef.current, {
            color: '#FF5500',
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => {
              setIsOrangeActive(true);
            },
          });
      };

      // 2. ScrollTrigger to play flash with delay whenever user scrolls into this section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 85%',
        onEnter: () => playFlashEffect(0.6),
        onEnterBack: () => playFlashEffect(0.4),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#F6F6F6] text-[#090909] pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12">
          {/* Lede & Headline */}
          <div className="max-w-5xl space-y-6 md:space-y-8">
            <h1
              ref={headlineRef}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08] text-[#090909]"
            >
              {/* Sharp solid fluorescent orange 'metl' with zero blur */}
              <span
                ref={metlRef}
                className={`inline-block font-semibold mr-2 sm:mr-3 ${
                  isOrangeActive ? 'text-[#FF5500]' : 'text-[#090909]'
                }`}
              >
                metl
              </span>
              is a design studio that helps ambitious startups leave lasting impressions.
            </h1>

            <div ref={ctaRef} className="pt-2">
              <a
                href="https://cal.com/denise-hodl/lets-talk?utm_source=home&utm_content=hero"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onBookCall) {
                    e.preventDefault();
                    onBookCall();
                  }
                }}
                className="btn-nordost-dark px-5 py-3 text-sm inline-flex items-center gap-2.5 transition active:scale-95 cursor-pointer hover:opacity-85"
              >
                <span className="status-dot animate-pulse" />
                <span>Book Free Discovery Call</span>
              </a>
            </div>
          </div>

          {/* Hero Media */}
          <div ref={mediaRef} className="w-full overflow-hidden bg-neutral-200 mt-4 rounded-none">
            <img
              src="https://studio-nordost.com/_astro/hero.DMJMwL8O_Z1zzB13.jpg"
              alt="Studio Nordost presenting brand work on stage to an audience"
              className="w-full h-auto aspect-[16/9] object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 block"
              onLoad={() => ScrollTrigger.refresh()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
