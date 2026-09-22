import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NordostCtaProps {
  onBookCall?: () => void;
}

export const NordostCta = ({ onBookCall }: NordostCtaProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ctaBoxRef.current) {
        gsap.from(ctaBoxRef.current.children, {
          scrollTrigger: {
            trigger: ctaBoxRef.current,
            start: 'top 95%',
            once: true,
          },
          y: 25,
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#F6F6F6] text-[#090909] py-16 sm:py-24 md:py-36 border-t border-neutral-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ctaBoxRef} className="max-w-4xl space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#090909]">
            Interested in working with us?
          </h2>
          <p className="text-sm sm:text-xl text-[#666666] max-w-2xl leading-relaxed">
            A free 30 minute call. Tell us where your brand is now, and we'll give you an honest read on what's holding it back. No pitch.
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href="https://cal.com/denise-hodl/lets-talk?utm_source=home&utm_content=closing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (onBookCall) {
                  e.preventDefault();
                  onBookCall();
                }
              }}
              className="btn-nordost-dark w-full sm:w-auto px-6 py-3.5 text-sm inline-flex items-center justify-center gap-3 transition active:scale-95 cursor-pointer hover:opacity-85"
            >
              <span className="status-dot animate-pulse" />
              <span>Book Free Discovery Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
