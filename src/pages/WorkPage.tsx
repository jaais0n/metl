import { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { NordostHeader } from '../components/NordostHeader';
import { NordostFooter } from '../components/NordostFooter';
import { NordostProjectModal } from '../components/NordostProjectModal';
import { NordostBookingModal } from '../components/NordostBookingModal';

export const WorkPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  const categories = ['All', 'Brand Strategy', 'Brand Identity', 'Web & Engineering', 'Motion & 3D'];

  const allProjects = [
    {
      id: 'perlinbio',
      name: 'perlin.bio',
      industry: 'Swiss Biotech Startup',
      category: 'Brand Strategy',
      tags: ['Brand Strategy', 'Brand Identity', 'Motion Identity'],
      year: '2025',
      metrics: '$18M Seed Raised',
      description: 'A transformative brand and digital platform positioning Perlin Bio as the premier computational biology pioneer.',
      type: 'image',
      src: 'https://media.studio-nordost.com/media/pages/work/perlinbio/63a0bed36c-1786957438/perlin_thumbnail-1200x-q80.jpg',
    },
    {
      id: 'humafinance',
      name: 'Huma Finance',
      industry: 'Fintech / Crypto Startup',
      category: 'Brand Identity',
      tags: ['Brand Identity', 'Website', 'UI Kit'],
      year: '2025',
      metrics: '350% TVL Growth',
      description: 'End-to-end identity system, token launch design, and responsive web flagship for decentralized income-backed financing.',
      type: 'image',
      src: 'https://media.studio-nordost.com/media/pages/work/humafinance/c4540a5866-1787640073/huma_thumbail-1200x-q80.jpg',
    },
    {
      id: 'viiala',
      name: 'Viiala AG',
      industry: 'Swiss Mobility Startup',
      category: 'Motion & 3D',
      tags: ['Brand Strategy', 'Motion Identity', 'Website'],
      year: '2024',
      metrics: 'Fleet Expansion Across 4 Cities',
      description: 'Kinetic 3D vehicle visualizations, custom typography, and high-cadence digital experience for sustainable micro-mobility.',
      type: 'video',
      poster: 'https://media.studio-nordost.com/dist/video/viialla-motion-mockup-1080p-poster.webp',
      videoSrc: 'https://media.studio-nordost.com/media/pages/work/viiala/01aee31ed3-1786957438/viialla-motion-mockup-1080p.mp4',
    },
    {
      id: 'evooq',
      name: 'Evooq Private Wealth',
      industry: 'Private Banking Wealthtech',
      category: 'Web & Engineering',
      tags: ['Web Architecture', 'Design System', 'React/Tailwind'],
      year: '2024',
      metrics: '$40B+ Assets Managed on Platform',
      description: 'Trustworthy, scalable flagship site establishing Evooq as the premier wealthtech choice for Tier-1 Swiss private banks.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'danelec',
      name: 'Danelec Systems',
      industry: 'Maritime Tech & IoT',
      category: 'Brand Identity',
      tags: ['Brand Architecture', 'Global Rebrand', 'Design Tokens'],
      year: '2024',
      metrics: 'Global Brand Rollout in 14 Nations',
      description: 'Future-facing brand platform empowering Danelec to lead maritime digitalization and sustainable ocean vessel tracking.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'bequant',
      name: 'Bequant Network Core',
      industry: 'Telecommunications & Traffic Ops',
      category: 'Web & Engineering',
      tags: ['Performance Engineering', 'Technical Narrative', 'Website'],
      year: '2024',
      metrics: '80M Users Benefited',
      description: 'Brand narrative and technical flagship positioning Bequant at the cutting edge of global traffic optimization.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const filteredProjects = selectedFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedFilter || p.tags.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#090909] flex flex-col justify-between antialiased selection:bg-black selection:text-white">
      <div>
        <NordostHeader onBookCall={() => setIsBookingOpen(true)} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
          {/* Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>PORTFOLIO & CASE STUDIES</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#090909] leading-[1.08] mb-6">
              Proof over promises. Selected case studies.
            </h1>
            <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
              A curated collection of category-defining brands, scalable web applications, and kinetic identity systems we’ve shipped with ambitious partners.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-neutral-300">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-neutral-500" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-600">
                Filter Work ({filteredProjects.length})
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition cursor-pointer whitespace-nowrap ${
                    selectedFilter === cat
                      ? 'bg-[#090909] text-white'
                      : 'bg-white text-neutral-600 hover:text-black hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20 sm:mb-28">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className="group cursor-pointer flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-5 border border-neutral-200/80 hover:border-neutral-400 transition-all duration-300 shadow-xs"
              >
                <div>
                  {/* Media Wrapper */}
                  <div className="relative aspect-[4/3] bg-neutral-900 rounded-2xl overflow-hidden mb-5">
                    {project.type === 'video' ? (
                      <video
                        poster={project.poster}
                        src={project.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <img
                        src={project.src}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-white">
                      {project.year}
                    </div>
                  </div>

                  {/* Meta details */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium text-[#090909] group-hover:text-[#FF5500] transition">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>

                  <p className="text-xs font-mono text-neutral-500 mb-3">{project.industry}</p>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-[#FF5500]">
                    {project.metrics}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Pitch Callout */}
          <div className="bg-[#090909] text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight mb-4">
              Ready to make your product the category benchmark?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
              We partner with a maximum of three clients per quarter to ensure relentless focus and bespoke craft.
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#ff661a] text-white font-medium text-sm transition-all cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a Conversation
            </button>
          </div>
        </main>
      </div>

      <NordostFooter />
      <NordostProjectModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
      <NordostBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};
