import { Layout, Compass, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenModal: (type: 'services' | 'contact' | 'quote') => void;
}

export const ServicesSection = ({ onOpenModal }: ServicesSectionProps) => {
  const serviceCategories = [
    {
      code: '01',
      category: 'Webflow & Engineering',
      icon: Layout,
      services: [
        {
          title: 'Scalable Component Build',
          description: 'Production-ready component libraries built to scale your site with consistency and zero technical debt.',
        },
        {
          title: 'Website Architecture',
          description: 'The foundational blueprint ensuring intuitive navigation, rapid load speeds, and seamless CMS pipelines.',
        },
        {
          title: 'Handover & Team Enablement',
          description: 'Hands-on documentation and bespoke workshops ensuring your internal team can ship new pages autonomously.',
        },
      ],
    },
    {
      code: '02',
      category: 'Branding & Design Systems',
      icon: Compass,
      services: [
        {
          title: 'Brand Guidelines & Formats',
          description: 'Modern identity systems, color palettes, and typographic scales built specifically for high-growth tech.',
        },
        {
          title: 'Motion Design & Micro-Interactions',
          description: 'Tactile transitions, video assets, and scroll experiences that turn static interfaces into memorable stories.',
        },
        {
          title: 'Component Design Systems',
          description: 'Unified Figma-to-Webflow design systems that eliminate friction between marketing and engineering.',
        },
      ],
    },
    {
      code: '03',
      category: 'AI & Organic Visibility',
      icon: Sparkles,
      services: [
        {
          title: 'GEO & AEO Optimization',
          description: 'Architecting your brand data, citations, and authority so AI engines (ChatGPT, Perplexity) recommend you first.',
        },
        {
          title: 'AI Prototyping & Internal Tooling',
          description: 'Building custom multi-agent assistants, prompt chains, and automated content workflows for your team.',
        },
        {
          title: 'Conversion Architecture',
          description: 'High-intent landing pages, friction-free forms, and data-informed user paths to drive verified pipeline.',
        },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-black">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-black/50 mb-3">
            [ 04 // CAPABILITIES &amp; ARCHITECTURE ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-black tracking-[-0.035em] leading-[1.08]">
            End-to-end craft across{' '}
            <span className="font-serif-italic font-normal">design, engineering</span>{' '}
            and intelligence.
          </h2>
        </div>

        <button
          onClick={() => onOpenModal('services')}
          className="self-start md:self-auto text-xs font-mono font-bold uppercase px-4 py-2 bg-white border border-black hover:bg-black hover:text-white transition"
        >
          [ View detailed offerings ]
        </button>
      </div>

      {/* 3 Column Brutalist Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {serviceCategories.map((col, idx) => {
          const Icon = col.icon;
          return (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-black p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-black">
                  <div>
                    <span className="font-mono text-[11px] text-black/50 uppercase block">
                      CAPABILITY // {col.code}
                    </span>
                    <span className="font-bold text-base text-black uppercase tracking-tight">
                      {col.category}
                    </span>
                  </div>
                  <div className="w-8 h-8 border border-black flex items-center justify-center bg-[#F0F0F0]">
                    <Icon className="w-4 h-4 text-black" />
                  </div>
                </div>

                <div className="space-y-6">
                  {col.services.map((srv, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <h3 className="text-sm font-bold text-black uppercase tracking-tight">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-black/75 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black font-mono text-xs">
                <button
                  onClick={() => onOpenModal('quote')}
                  className="w-full text-left py-2 px-3 border border-black bg-[#F0F0F0] hover:bg-black hover:text-white transition flex items-center justify-between font-bold uppercase"
                >
                  <span>Request {col.category.split('&')[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
