import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NordostServicesAndWorkProps {
  onSelectProject?: (project: string) => void;
}

export const NordostServicesAndWork = ({ onSelectProject }: NordostServicesAndWorkProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const servicesListRef = useRef<HTMLUListElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Statement Reveal
      if (statementRef.current) {
        gsap.from(statementRef.current, {
          scrollTrigger: {
            trigger: statementRef.current,
            start: 'top 95%',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      // 2. Services List Stagger
      if (servicesListRef.current) {
        gsap.from(servicesListRef.current.children, {
          scrollTrigger: {
            trigger: servicesListRef.current,
            start: 'top 95%',
            once: true,
          },
          x: 25,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      // 3. Projects Grid Stagger
      if (projectsGridRef.current) {
        gsap.from(projectsGridRef.current.children, {
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: 'top 95%',
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    'Brand Strategy',
    'Brand Identity Design',
    'Webdesign & Development',
    'Motion Design & 3D',
  ];

  const projects = [
    {
      id: 'perlinbio',
      name: 'perlin.bio',
      industry: 'Swiss Biotech Startup',
      tags: ['Brand Strategy', 'Brand Identity', 'Motion Identity'],
      type: 'image',
      src: 'https://media.studio-nordost.com/media/pages/work/perlinbio/63a0bed36c-1786957438/perlin_thumbnail-1200x-q80.jpg',
    },
    {
      id: 'humafinance',
      name: 'Huma Finance',
      industry: 'Fintech / Crypto Startup',
      tags: ['Brand Identity', 'Website'],
      type: 'image',
      src: 'https://media.studio-nordost.com/media/pages/work/humafinance/c4540a5866-1787640073/huma_thumbail-1200x-q80.jpg',
    },
    {
      id: 'viiala',
      name: 'Viiala AG',
      industry: 'Swiss Mobility Startup',
      tags: ['Brand Strategy', 'Brand Identity', 'Website'],
      type: 'video',
      poster: 'https://media.studio-nordost.com/dist/video/viialla-motion-mockup-1080p-poster.webp',
      videoSrc: 'https://media.studio-nordost.com/media/pages/work/viiala/01aee31ed3-1786957438/viialla-motion-mockup-1080p.mp4',
    },
  ];

  return (
    <div ref={containerRef} data-bg="dark" className="bg-[#090909] text-[#F6F6F6]">
      {/* 1. How we can help / Services */}
      <section id="services" className="py-16 sm:py-20 md:py-28 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
            {/* Left Col: Eyebrow + Statement */}
            <div ref={statementRef} className="lg:col-span-7 space-y-4 sm:space-y-6">
              <p className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                How we can help
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#F6F6F6]">
                We help startups turn ideas into clear stories, strong brands, and fundable pitches.
              </h2>
            </div>

            {/* Right Col: Services List */}
            <div className="lg:col-span-5 lg:pl-12 flex flex-col justify-end space-y-4 sm:space-y-6 pt-4 lg:pt-0">
              <p className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                Services
              </p>
              <ul ref={servicesListRef} className="space-y-3 sm:space-y-4">
                {services.map((service, idx) => (
                  <li
                    key={idx}
                    className="text-base sm:text-xl md:text-2xl font-normal text-[#D4D4D4] border-b border-neutral-800 pb-3 flex items-center justify-between group hover:text-white transition cursor-pointer min-h-[44px]"
                  >
                    <span>{service}</span>
                    <span className="text-xs font-mono text-neutral-500 group-hover:text-white transition">
                      0{idx + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Recent Work Grid */}
      <section id="work" className="py-16 sm:py-20 md:py-28 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-[#888888]">
              Recent Work
            </p>
            <span className="font-mono text-xs text-neutral-500">
              Selected 2024–2026
            </span>
          </div>

          <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject?.(proj.id)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative aspect-[4/5] bg-neutral-900 rounded-none overflow-hidden mb-4">
                  {proj.type === 'video' ? (
                    <video
                      poster={proj.poster}
                      src={proj.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={proj.src}
                      alt={proj.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-medium">
                      View Case Study
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-medium text-white group-hover:text-neutral-300 transition">
                      {proj.name}
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono">
                      {proj.industry}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
