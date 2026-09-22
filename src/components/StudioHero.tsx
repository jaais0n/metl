import { useState, useRef } from 'react';
import { ArrowUpRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface StudioHeroProps {
  onOpenModal: (type: 'work' | 'services' | 'posts' | 'about' | 'contact' | 'quote') => void;
}

export const StudioHero = ({ onOpenModal }: StudioHeroProps) => {
  const [activeTick, setActiveTick] = useState(24);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const ticks = Array.from({ length: 50 }, (_, i) => i);

  const posts = [
    {
      type: 'Studio',
      date: 'Aug 2026',
      title: 'About Oimachi',
      desc: 'Copenhagen innovation studio for branding, websites, and AI visibility. Two partners, Casper and Daniel.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      id: 'about',
    },
    {
      type: 'Insight',
      date: 'Aug 17',
      title: 'Oimachi is now a B-mærket certified agency',
      desc: 'Certified across branding, websites, graphic design, motion design, CRM, GEO, and AEO.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop',
      id: 'b-maerket',
    },
    {
      type: 'Insight',
      date: 'Jul 17',
      title: 'Webflow & AI coding: building websites in 2026',
      desc: 'For serious B2B sites we choose Webflow. For tools and prototypes we build directly with AI.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
      id: 'webflow-ai',
    },
    {
      type: 'Insight',
      date: 'May 6',
      title: 'When AI photography beats stock',
      desc: 'A practical framework for thinking about corporate photography, generative imagery, and atmosphere.',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop',
      id: 'ai-photo',
    },
    {
      type: 'Insight',
      date: 'Sep 8',
      title: 'AEO & GEO: How to stay visible in the age of AI search',
      desc: 'AI assistants like ChatGPT and Perplexity mention maybe three sources. How to ensure your brand is cited.',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop',
      id: 'aeo-geo',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      {/* Studio Statement Hero Headline */}
      <div className="max-w-5xl mb-10">
        <div className="font-mono text-xs uppercase tracking-widest text-black/50 mb-3">
          [ 00 // DISPATCH &amp; OVERVIEW ]
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-semibold text-black tracking-[-0.04em] leading-[1.03]">
          Branding, Website &amp; AI Visibility.{' '}
          <span className="font-serif-italic font-normal text-black">Innovation</span>{' '}
          Studio.
        </h1>
      </div>

      {/* Brutalist Frame Indicator Ticks */}
      <div 
        className="w-full py-2.5 mb-8 flex items-center justify-between border-y border-black select-none cursor-ew-resize bg-white/40"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const percent = (e.clientX - rect.left) / rect.width;
          const index = Math.min(Math.max(0, Math.floor(percent * ticks.length)), ticks.length - 1);
          setActiveTick(index);
        }}
      >
        {ticks.map((tick) => (
          <div
            key={tick}
            className={`h-5 w-[2px] transition-colors duration-100 ${
              tick === activeTick ? 'bg-black scale-y-125' : 'bg-black/20 hover:bg-black/80'
            }`}
          />
        ))}
      </div>

      {/* Split Hero: Showreel Left + Latest Posts Feed Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Studio Showreel Video & Media Presentation */}
        <div className="lg:col-span-8 bg-[#FFFFFF] border border-black p-4 flex flex-col justify-between">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden border border-black">
            <video
              ref={videoRef}
              src="https://player.vimeo.com/progressive_redirect/playback/1202824078/rendition/1440p/file.mp4%20%281440p%29.mp4?loc=external&log_user=0&signature=6aaa8908c558bcaa925cada70b06a685827ef6303dbacf0c2e4dfb58dfbb2496"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Top Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px]">
              <div className="px-2 py-1 bg-white text-black font-bold border border-black uppercase">
                Showreel 2026
              </div>
              <div className="px-2 py-1 bg-black text-white uppercase">
                Copenhagen · 4K
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 bg-white border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-8 h-8 bg-white border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="text-[11px] font-mono bg-black text-white px-2 py-1">
                FRAME {String(activeTick + 1).padStart(2, '0')} / 50
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <p className="max-w-md text-black/80 font-normal">
              Bespoke digital architecture, typography frameworks, and generative AI search systems for international scale.
            </p>
            <button
              onClick={() => onOpenModal('work')}
              className="inline-flex items-center gap-1 font-bold text-black uppercase hover:underline"
            >
              <span>[ Explore Selected Work ]</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Latest Posts & Insights Feed */}
        <div className="lg:col-span-4 bg-[#FFFFFF] border border-black p-4 flex flex-col">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-black">
            <div className="font-mono text-xs font-bold uppercase text-black">
              [ Latest Dispatches ]
            </div>
            <button
              onClick={() => onOpenModal('posts')}
              className="text-[11px] font-mono font-bold px-2 py-0.5 border border-black hover:bg-black hover:text-white transition uppercase"
            >
              View all
            </button>
          </div>

          <div className="divide-y divide-black/15 overflow-y-auto max-h-[480px] pr-1 space-y-1">
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => onOpenModal('posts')}
                className="pt-3 pb-3 group cursor-pointer hover:bg-[#F0F0F0] -mx-2 px-2 transition flex gap-3 items-start"
              >
                <div className="w-16 h-16 shrink-0 bg-[#F0F0F0] border border-black overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-black/50 uppercase tracking-wider mb-0.5">
                    <span>{post.type}</span>
                    <span>/</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xs font-semibold text-black group-hover:underline line-clamp-1 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-black/70 line-clamp-2 mt-0.5 leading-relaxed">
                    {post.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
