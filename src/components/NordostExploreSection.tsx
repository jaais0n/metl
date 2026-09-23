import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Sliders, Volume2, MoveRight, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NordostExploreSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const [activeTheme, setActiveTheme] = useState<'orange' | 'periwinkle' | 'lime' | 'monochrome'>('orange');
  const [fontSize, setFontSize] = useState<number>(36);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [inputText, setInputText] = useState<string>('metl.studio / precision & craft');
  const [isHoveredInteractive, setIsHoveredInteractive] = useState<boolean>(false);

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const themes = [
    { id: 'orange', name: 'Kinetic Orange', bg: '#FF5500', text: '#FFFFFF', pill: 'bg-[#FF5500]' },
    { id: 'periwinkle', name: 'Nordost Lilac', bg: '#E2DCFF', text: '#121024', pill: 'bg-[#E2DCFF]' },
    { id: 'lime', name: 'Cyber Lime', bg: '#CCFF00', text: '#090909', pill: 'bg-[#CCFF00]' },
    { id: 'monochrome', name: 'Pure Contrast', bg: '#090909', text: '#FFFFFF', pill: 'bg-[#090909]' },
  ];

  const currentTheme = themes.find((t) => t.id === activeTheme) || themes[0];

  return (
    <section
      id="explore"
      ref={containerRef}
      className="bg-[#090909] text-[#F6F6F6] py-16 sm:py-24 md:py-32 border-b border-neutral-800"
      data-bg="dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>04 / EXPLORE & LABS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Interactive Design System & Creative Technology Lab
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Experience the tactile motion physics, responsive typographic engines, and dynamic color systems powering modern digital experiences.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 group"
            >
              <span>View Full Showcase Suite</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Interactive Lab Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Module 1: Live Kinetic Typography Tester (Col 7) */}
          <div className="lg:col-span-7 bg-[#141417] rounded-3xl p-6 sm:p-8 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse" />
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    Interactive Typography Rig
                  </span>
                </div>
                <span className="font-mono text-xs text-neutral-500">Live SVG & Text Engine</span>
              </div>

              {/* Live Preview Display */}
              <div
                className="w-full min-h-[160px] sm:min-h-[200px] flex items-center justify-center p-6 rounded-2xl transition-all duration-300 overflow-hidden text-center select-none"
                style={{
                  backgroundColor: currentTheme.bg,
                  color: currentTheme.text,
                }}
              >
                <p
                  className="font-medium tracking-tight transition-all duration-150 break-words max-w-full leading-tight"
                  style={{
                    fontSize: `${fontSize}px`,
                    letterSpacing: `${letterSpacing}px`,
                  }}
                >
                  {inputText || 'Type something...'}
                </p>
              </div>

              {/* Text Input Control */}
              <div className="mt-6">
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Sample Text String
                </label>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter custom headline..."
                  className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition"
                />
              </div>
            </div>

            {/* Sliders Control Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-neutral-800/80">
              <div>
                <div className="flex justify-between text-xs font-mono text-neutral-400 mb-2">
                  <span>Scale / Size</span>
                  <span>{fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="64"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-[#FF5500] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-neutral-400 mb-2">
                  <span>Tracking / Spacing</span>
                  <span>{letterSpacing}px</span>
                </div>
                <input
                  type="range"
                  min="-3"
                  max="8"
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(Number(e.target.value))}
                  className="w-full accent-[#FF5500] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Module 2: Color Science & Micro-Interaction Sandbox (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Swatch Selector */}
            <div className="bg-[#141417] rounded-3xl p-6 sm:p-7 border border-neutral-800">
              <div className="flex items-center gap-2 mb-4">
                <Sliders className="w-4 h-4 text-[#FF5500]" />
                <h3 className="text-sm font-mono text-neutral-300 uppercase tracking-wider">
                  Brand Color Swatches
                </h3>
              </div>
              <p className="text-xs text-neutral-400 mb-4">
                Select an accent token to re-calibrate the studio identity preview:
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setActiveTheme(theme.id as any)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs font-medium transition cursor-pointer text-left ${
                      activeTheme === theme.id
                        ? 'bg-neutral-800/90 border-white text-white shadow-sm'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${theme.pill}`} />
                    <span className="truncate">{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tactile Micro-Interactions Showcase */}
            <div className="bg-[#141417] rounded-3xl p-6 sm:p-7 border border-neutral-800 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-sm font-mono text-neutral-300 uppercase tracking-wider">
                      Tactile Micro-States
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    60 FPS
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                  Hover and interact with stateful component tokens engineered for low latency feedback:
                </p>

                <div className="space-y-3">
                  {/* Interactive Button A */}
                  <button
                    onMouseEnter={() => setIsHoveredInteractive(true)}
                    onMouseLeave={() => setIsHoveredInteractive(false)}
                    className="w-full py-3 px-5 rounded-2xl bg-[#090909] border border-neutral-700 hover:border-neutral-500 text-white font-medium text-xs flex items-center justify-between transition-all duration-200 cursor-pointer active:scale-[0.98]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Fluid Magnetic Capsule
                    </span>
                    <MoveRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isHoveredInteractive ? 'translate-x-1.5 text-[#FF5500]' : 'text-neutral-500'
                      }`}
                    />
                  </button>

                  {/* Interactive Pill Tag */}
                  <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-mono">Sound Physics</span>
                    <span className="inline-flex items-center gap-1.5 text-neutral-300 font-mono">
                      <Volume2 className="w-3.5 h-3.5 text-[#FF5500]" /> Haptic Feedback
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
                <span>Vite 8 + React 19 + GSAP</span>
                <Link to="/explore" className="text-white hover:underline flex items-center gap-1">
                  Full Catalog <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
