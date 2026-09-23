import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NordostTestimonials = () => {
  const testimonials = [
    {
      name: 'Nolita Lobo',
      role: 'Süd RLC',
      avatar: 'https://media.studio-nordost.com/media/pages/start/e96e57ed5c-1786957439/nolita_lobo-300x-q80.webp',
      quote: 'They bring a fresh and unique perspective to design — which is increasingly tough in today’s world with every brand trying to stand out. Aside from their skills, they are extremely personable ‘humans you’d love to work with’.',
    },
    {
      name: 'Max Kickinger',
      role: 'Raven & Finch',
      avatar: 'https://media.studio-nordost.com/media/pages/start/e33a41e8eb-1786957439/maxkickinger-300x-q80.webp',
      quote: 'Usually, wisdom comes with age. But every now and then, youth brings a raw talent to the table that feels every bit as valuable as seniority. While young and fresh in their approach, they pair that with a maturity you’d expect from decades in the field — all while being some of the nicest people to work with.',
    },
    {
      name: 'Christian Salić',
      role: 'Salić GmbH',
      avatar: 'https://media.studio-nordost.com/media/pages/start/8f1805fabc-1786957439/christian_salic-300x-q80.webp',
      quote: 'Working with metl means joy and maturity. The joy comes from fresh, user-focused, purposeful design. Their maturity shows in their reliability, strong commitment, and the professional way they handle project constraints.',
    },
    {
      name: 'Yu Rong',
      role: 'CōLab & WestCap',
      avatar: 'https://media.studio-nordost.com/media/pages/start/b76adda9cd-1786957439/yu_rong-300x-q80.webp',
      quote: 'Incredibly fast, creative, and thoughtful in the details, which makes the whole process feel smooth, collaborative, and genuinely fun. And a super reliable and easy partner to work with.',
    },
    {
      name: 'Jannik Neumann',
      role: 'Perlin.bio',
      avatar: 'https://media.studio-nordost.com/media/pages/work/perlinbio/a372b8a28c-1787150427/jannik_perlin-300x-q80.webp',
      quote: 'We wanted to stand out in the crowded Swiss startup market. metl really impressed us with the depth of their strategic process and the resulting identity will be a real asset as we head into our seed round.',
    },
    {
      name: 'Gregor Wöckl',
      role: 'Studio Wöckl',
      avatar: 'https://media.studio-nordost.com/media/pages/start/586eff2f70-1786957439/gergor_woeckl-300x-q80.webp',
      quote: 'metl gave us clear guidance as we refined our brand and came up with an out-of-the-box solution that truly fit our needs. The whole team is super friendly, structured and responsive.',
    },
    {
      name: 'Gernot Pompenig',
      role: 'Merlicek & Partner',
      avatar: 'https://media.studio-nordost.com/media/pages/start/ad3d422cb5-1786957439/gernot_pompenig-300x-q80.webp',
      quote: 'Ease, professionalism, charm, perfection. If I had to put it in one sentence: a highly inspiring collaboration at a very high level — deeply in tune with the times, and meticulous and well-grounded in every detail.',
    },
    {
      name: 'Jacob Berger',
      role: '3D Fox',
      avatar: 'https://media.studio-nordost.com/media/pages/start/7e358c86d7-1786957439/jacob_berger-300x-q80.webp',
      quote: 'The collaboration worked exactly as we hoped: they listened, guided us professionally, and were always honest. I was especially impressed by the time they took upfront to really understand our needs.',
    },
    {
      name: 'Tobias Woegerer',
      role: 'Videographer',
      avatar: 'https://media.studio-nordost.com/media/pages/start/62bbad9030-1786957439/tobias_woegerer-300x-q80.webp',
      quote: 'They not only do incredible work but really dive deep into your ideas and wishes to create something that’s 100% true to you and your brand. I couldn’t be happier with our collab!',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const quoteContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Animate testimonial transition with GSAP
  useEffect(() => {
    if (quoteContainerRef.current) {
      gsap.fromTo(
        quoteContainerRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);

  // Section entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto rotate carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[activeIndex];

  return (
    <section ref={sectionRef} data-bg="dark" className="bg-[#090909] text-[#F6F6F6] py-20 md:py-28 border-b border-neutral-800 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-widest text-[#888888]">
              Clients and Partners
            </p>
            <span className="font-mono text-xs text-neutral-500">
              {activeIndex + 1} / {testimonials.length}
            </span>
          </div>

          {/* Active Testimonial Card */}
          <div
            ref={quoteContainerRef}
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            className="cursor-pointer min-h-[280px] sm:min-h-[240px] md:min-h-[210px] flex flex-col justify-between group"
          >
            {/* Person Bio */}
            <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-10 h-10 rounded-full object-cover grayscale"
                loading="lazy"
              />
              <div className="leading-tight">
                <p className="text-sm font-medium text-white">{current.name}</p>
                <p className="text-xs font-mono text-neutral-400">{current.role}</p>
              </div>
            </div>

            {/* Big Statement Quote */}
            <blockquote className="text-lg sm:text-2xl md:text-3xl font-light text-[#D4D4D4] leading-relaxed group-hover:text-white transition-colors duration-300">
              "{current.quote}"
            </blockquote>
          </div>

          {/* Navigation Controls: Dots + Prev/Next Arrows for Mobile & Desktop */}
          <div className="pt-6 sm:pt-8 flex items-center justify-between">
            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonials">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Testimonial ${idx + 1} of ${testimonials.length} — ${t.name}`}
                  onClick={() => setActiveIndex(idx)}
                  className="py-3 px-1 cursor-pointer focus:outline-none"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-7 sm:w-8 bg-white'
                        : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Prev/Next Quick Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition active:scale-95 cursor-pointer"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev + 1) % testimonials.length);
                }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition active:scale-95 cursor-pointer"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
