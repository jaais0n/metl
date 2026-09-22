import { useState, useEffect } from 'react';
import { X, Check, Send } from 'lucide-react';

interface StudioModalProps {
  type: 'work' | 'services' | 'posts' | 'about' | 'contact' | 'quote' | null;
  onClose: () => void;
}

export const StudioModal = ({ type, onClose }: StudioModalProps) => {
  const [submittedQuote, setSubmittedQuote] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-none animate-in fade-in duration-100">
      <div 
        className="bg-[#FFFFFF] border-2 border-black rounded-none w-full max-w-4xl max-h-[90vh] flex flex-col shadow-none overflow-hidden"
      >
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-black flex items-center justify-between bg-[#FFFFFF] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-black font-bold">
              {type === 'work' && '[ 01 // SELECTED CASE STUDIES ]'}
              {type === 'services' && '[ 02 // CAPABILITIES & ARCHITECTURE ]'}
              {type === 'posts' && '[ 03 // ESSAYS & INSIGHTS ]'}
              {type === 'about' && '[ 04 // ABOUT STUDIO OIMACHI ]'}
              {(type === 'contact' || type === 'quote') && '[ 05 // PROJECT INQUIRY ]'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 bg-white border border-black hover:bg-black hover:text-white flex items-center justify-center transition font-mono"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-black font-sans">
          {/* WORK MODAL */}
          {type === 'work' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight mb-3">
                  Crafted for <span className="font-serif-italic font-normal">performance</span> and longevity.
                </h2>
                <p className="text-sm text-black/75 max-w-2xl leading-relaxed">
                  Every client partnership is built around deep technical rigor, bespoke typography, and scalable Webflow architecture.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    num: '01',
                    name: 'Evooq',
                    industry: 'Swiss Wealthtech',
                    desc: 'Digital flagship site serving tier-one private banks across Europe and APAC.',
                    tags: ['Webflow', 'Brand System', 'TypeScript'],
                    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
                  },
                  {
                    num: '02',
                    name: 'Danelec',
                    industry: 'Maritime IoT',
                    desc: 'Global leader in vessel safety and decarbonization telemetry platform.',
                    tags: ['Identity', 'Architecture', 'Components'],
                    img: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=600&auto=format&fit=crop',
                  },
                  {
                    num: '03',
                    name: 'Anthill',
                    industry: 'Life Sciences',
                    desc: 'Multi-brand pharmaceutical marketing technology ecosystem.',
                    tags: ['Enterprise Webflow', 'Motion', 'AEO'],
                    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop',
                  },
                  {
                    num: '04',
                    name: 'Bequant',
                    industry: 'Telecommunications',
                    desc: 'TCP optimization network telemetry platform.',
                    tags: ['Rebranding', 'Webflow CMS', 'Illustration'],
                    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
                  },
                ].map((item) => (
                  <div key={item.name} className="p-4 bg-[#F0F0F0] border border-black space-y-3">
                    <div className="aspect-[16/10] overflow-hidden bg-white border border-black">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[10px] text-black/50 block">CASE // {item.num}</span>
                        <h3 className="font-bold text-base text-black uppercase">{item.name}</h3>
                        <div className="text-xs font-mono text-black/60">{item.industry}</div>
                      </div>
                      <div className="flex gap-1 flex-wrap">
                        {item.tags.map((t) => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 bg-white text-black font-mono border border-black">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-black/75">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SERVICES MODAL */}
          {type === 'services' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight mb-3">
                  Services &amp; <span className="font-serif-italic font-normal">Methodology</span>
                </h2>
                <p className="text-sm text-black/75 max-w-2xl leading-relaxed">
                  We blend high-craft brand design, structured Webflow development, and cutting-edge generative engine optimization.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-[#F0F0F0] border border-black space-y-2">
                  <div className="font-mono text-xs text-black/50">[ SEC // 01 ]</div>
                  <div className="font-bold text-lg text-black uppercase">Webflow &amp; Enterprise Architecture</div>
                  <p className="text-xs sm:text-sm text-black/75 leading-relaxed">
                    Custom component build systems following strict client-first naming principles. Optimized for sub-second page loads, localization, and seamless handoff so marketing teams are independent.
                  </p>
                </div>

                <div className="p-6 bg-[#F0F0F0] border border-black space-y-2">
                  <div className="font-mono text-xs text-black/50">[ SEC // 02 ]</div>
                  <div className="font-bold text-lg text-black uppercase">Brand Guidelines &amp; Motion Design</div>
                  <p className="text-xs sm:text-sm text-black/75 leading-relaxed">
                    Typography curation (like Space Grotesk / Aeonik &amp; editorial serif pairings), crisp geometric iconography, and custom scroll micro-interactions that communicate authority.
                  </p>
                </div>

                <div className="p-6 bg-[#F0F0F0] border border-black space-y-2">
                  <div className="font-mono text-xs text-black/50">[ SEC // 03 ]</div>
                  <div className="font-bold text-lg text-black uppercase">GEO &amp; AEO (AI Search Visibility)</div>
                  <p className="text-xs sm:text-sm text-black/75 leading-relaxed">
                    As search shifts to ChatGPT, Perplexity, and Google AI Overviews, we structure your brand schema and semantic citations so LLMs cite your business as the definitive source.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* POSTS MODAL */}
          {type === 'posts' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight mb-2">
                  Studio <span className="font-serif-italic font-normal">Dispatches</span>
                </h2>
                <p className="text-sm text-black/75">Reflections on design, artificial intelligence, and building in Copenhagen.</p>
              </div>

              <div className="divide-y divide-black border-y border-black">
                {[
                  {
                    title: 'Webflow & AI coding: building websites in 2026',
                    date: 'July 17, 2026',
                    summary: 'For serious B2B marketing sites we still choose Webflow. For tools, prototypes, and experiments we build directly with AI.',
                  },
                  {
                    title: 'The Small Studio Advantage In The AI Era',
                    date: 'May 4, 2026',
                    summary: 'AI is changing the value of size. Operational advantage now means adapting fast to AI-powered workflows and developing powerful internal tools.',
                  },
                  {
                    title: 'AEO & GEO: How to stay visible in the age of AI search',
                    date: 'September 8, 2025',
                    summary: 'AI assistants like ChatGPT, Perplexity, and Google’s AI Overviews don’t cite dozens of sources. They mention maybe three. How to ensure your brand is cited.',
                  },
                  {
                    title: 'When AI photography beats stock',
                    date: 'May 6, 2026',
                    summary: 'A practical framework to think about AI-generated corporate photography, stock imagery, and atmosphere.',
                  },
                ].map((post, idx) => (
                  <div key={idx} className="py-4 space-y-1">
                    <div className="text-[11px] font-mono text-black/50 uppercase">{post.date}</div>
                    <h3 className="font-bold text-base text-black hover:underline cursor-pointer uppercase tracking-tight">{post.title}</h3>
                    <p className="text-xs text-black/75 leading-relaxed">{post.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ABOUT MODAL */}
          {type === 'about' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight mb-3">
                  Two partners. <span className="font-serif-italic font-normal">Zero bloated layers</span>.
                </h2>
                <p className="text-sm text-black/75 max-w-2xl leading-relaxed">
                  Oimachi was founded in Copenhagen by Casper Nielsen and Daniel Bech. We deliberately keep our studio compact to ensure every client works directly with principals who design and write the code.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-[#F0F0F0] border border-black space-y-2">
                  <div className="font-bold text-base text-black uppercase">Casper Nielsen</div>
                  <div className="text-xs text-black/50 uppercase font-mono">Partner / Brand &amp; Design Director</div>
                  <p className="text-xs text-black/75 pt-2 leading-relaxed">
                    Specialized in visual brand identity, typography systems, and high-impact digital experiences for technology pioneers.
                  </p>
                </div>

                <div className="p-6 bg-[#F0F0F0] border border-black space-y-2">
                  <div className="font-bold text-base text-black uppercase">Daniel Bech</div>
                  <div className="text-xs text-black/50 uppercase font-mono">Partner / Engineering &amp; AI Architect</div>
                  <p className="text-xs text-black/75 pt-2 leading-relaxed">
                    Oversees Webflow enterprise architecture, custom JavaScript integrations, and AI generative search optimization systems.
                  </p>
                </div>
              </div>

              <div className="p-6 border border-black bg-[#FFFFFF] space-y-2">
                <div className="font-bold text-sm text-black uppercase font-mono">Copenhagen Studio &amp; Accreditation</div>
                <p className="text-xs text-black/75 leading-relaxed">
                  Operating from Rådmandsgade 46B in Copenhagen, Denmark (DK-42836028). Officially certified by B-mærket across branding, Webflow engineering, and ethical AI deployment.
                </p>
              </div>
            </div>
          )}

          {/* CONTACT & QUOTE MODAL */}
          {(type === 'contact' || type === 'quote') && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight mb-2">
                  Plan your <span className="font-serif-italic font-normal">project</span>
                </h2>
                <p className="text-sm text-black/75">
                  Tell us about your objectives, timeline, or book a direct 30-minute intro call.
                </p>
              </div>

              {submittedQuote ? (
                <div className="p-8 bg-[#F0F0F0] border border-black text-center space-y-3">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-black uppercase">Inquiry Received</h3>
                  <p className="text-xs text-black/75 max-w-sm mx-auto">
                    Casper or Daniel will review your brief and reply within 24 business hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 bg-black text-white text-xs font-mono font-bold uppercase mt-2"
                  >
                    Back to site
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmittedQuote(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-black mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Connor"
                        className="w-full px-3 py-2.5 bg-[#F0F0F0] border border-black text-xs text-black focus:outline-none focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-black mb-1">Company / Organization</label>
                      <input
                        type="text"
                        required
                        placeholder="Cyberdyne Systems"
                        className="w-full px-3 py-2.5 bg-[#F0F0F0] border border-black text-xs text-black focus:outline-none focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-black mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        className="w-full px-3 py-2.5 bg-[#F0F0F0] border border-black text-xs text-black focus:outline-none focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-black mb-1">Budget Allocation (EUR)</label>
                      <select className="w-full px-3 py-2.5 bg-[#F0F0F0] border border-black text-xs text-black focus:outline-none focus:bg-white transition font-mono">
                        <option>€10,000 - €25,000</option>
                        <option>€25,000 - €50,000</option>
                        <option>€50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-black mb-1">Project Brief &amp; Scope</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your site goals, timeline, and current challenges..."
                      className="w-full px-3 py-2.5 bg-[#F0F0F0] border border-black text-xs text-black focus:outline-none focus:bg-white transition resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-[11px] font-mono text-black/60">
                      Direct: <a href="mailto:hello@oimachi.co" className="underline font-bold">hello@oimachi.co</a>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-black text-white text-xs font-mono font-bold uppercase hover:bg-neutral-800 transition flex items-center gap-1.5"
                    >
                      <span>[ Submit Inquiry ]</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
