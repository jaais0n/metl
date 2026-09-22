import { useState } from 'react';
import { Play } from 'lucide-react';

export const QuotesSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      author: 'Andrew Johnson',
      role: 'Founder, No Walls Studio',
      quote: "Oimachi's work is exceptional. Their communication is seamless, and that’s something we definitely don’t take for granted. They’re clear, articulate, and always thoughtful in how they approach both our briefs and our clients’ vision.",
      company: 'No Walls Studio',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/1128785707/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=ddfcfa3f09a050edaf345f1dc47254b130d8ef40c0bf91b4cfc29c872f6d2c8b',
    },
    {
      id: 2,
      author: 'Rasmus Kalms',
      role: 'CPO, Anthill',
      quote: "Working with Casper and Daniel gave us the architectural clarity and high-performance Webflow platform our global marketing teams needed to scale across multiple healthcare verticals.",
      company: 'Anthill Health',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/1133809240/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=1b2f97f22e1bfb4e13958e8c852e4815d8c5cd678cfbcc4fe40ba7f4f2be9d33',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-black">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="font-mono text-xs uppercase tracking-widest text-black/50 mb-3">
          [ 02 // TESTIMONIALS &amp; CITATIONS ]
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-black tracking-[-0.035em] leading-[1.08]">
          An{' '}
          <span className="font-serif-italic font-normal">award-winning</span>{' '}
          studio that care about good work and developing relationships that enables it.
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFFFF] border border-black p-6 flex flex-col justify-between"
          >
            {/* Media Box */}
            <div className="relative aspect-[16/10] w-full bg-black overflow-hidden border border-black mb-6">
              {activeVideo === item.id ? (
                <video
                  src={item.videoUrl}
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button
                      onClick={() => setActiveVideo(item.id)}
                      className="w-12 h-12 bg-white border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition"
                      aria-label="Play interview"
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black text-white text-[10px] font-mono uppercase">
                    Interview // 2026
                  </div>
                </>
              )}
            </div>

            {/* Quote and Author */}
            <div className="space-y-6">
              <blockquote className="text-sm sm:text-base text-black leading-relaxed font-normal">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-black flex items-center justify-between font-mono text-xs">
                <div>
                  <div className="font-bold text-black uppercase">{item.author}</div>
                  <div className="text-[11px] text-black/60">{item.role}</div>
                </div>
                <div className="text-[11px] font-bold px-2 py-1 bg-[#F0F0F0] border border-black text-black uppercase">
                  {item.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
