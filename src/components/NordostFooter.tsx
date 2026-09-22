import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NordostFooter = () => {
  const [viennaTime, setViennaTime] = useState('');
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<SVGSVGElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Vienna',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setViennaTime(formatter.format(now));
      } catch {
        const now = new Date();
        setViennaTime(now.toTimeString().split(' ')[0]);
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (topBarRef.current) {
        gsap.from(topBarRef.current, {
          scrollTrigger: {
            trigger: topBarRef.current,
            start: 'top 98%',
            once: true,
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      // Monumental Wordmark Letters Stagger Animation
      if (wordmarkRef.current) {
        const letters = wordmarkRef.current.querySelectorAll('.wordmark-letter');
        gsap.from(letters, {
          scrollTrigger: {
            trigger: wordmarkRef.current,
            start: 'top 98%',
            once: true,
          },
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power4.out',
          clearProps: 'all',
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} data-bg="dark" className="bg-[#090909] text-[#F6F6F6] pt-12 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div ref={topBarRef} className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-16 border-b border-neutral-800">
          {/* Live Vienna Time */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-neutral-400">Vienna</span>
            <time className="text-white font-medium tracking-wider">
              {viennaTime || '--:--:--'}
            </time>
            <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 text-[10px]">
              CEST
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                YouTube
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Instagram
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                X
              </a>
            </div>

            <span className="hidden sm:inline text-neutral-700">/</span>

            <div className="flex items-center gap-4">
              <a href="#imprint" className="hover:text-white transition">
                Imprint
              </a>
              <a href="#privacy" className="hover:text-white transition">
                Privacy
              </a>
            </div>

            <span className="hidden sm:inline text-neutral-700">/</span>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-white transition cursor-pointer"
              >
                Back to top ↑
              </button>
            </div>
          </nav>
        </div>

        {/* Monumental METL Wordmark SVG with GSAP Stagger */}
        <div className="w-full pt-10 pb-4 text-neutral-300 hover:text-white transition-colors duration-500">
          <svg
            ref={wordmarkRef}
            viewBox="0 0 1000 220"
            className="w-full h-auto max-h-[22vw] select-none block"
            aria-label="METL"
          >
            <g id="Letters" fill="currentColor">
              <text
                x="80"
                y="185"
                className="wordmark-letter"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '240px',
                  fontWeight: 800,
                  letterSpacing: '-0.06em',
                }}
              >
                M
              </text>
              <text
                x="330"
                y="185"
                className="wordmark-letter"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '240px',
                  fontWeight: 800,
                  letterSpacing: '-0.06em',
                }}
              >
                E
              </text>
              <text
                x="560"
                y="185"
                className="wordmark-letter"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '240px',
                  fontWeight: 800,
                  letterSpacing: '-0.06em',
                }}
              >
                T
              </text>
              <text
                x="770"
                y="185"
                className="wordmark-letter"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '240px',
                  fontWeight: 800,
                  letterSpacing: '-0.06em',
                }}
              >
                L
              </text>
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};
