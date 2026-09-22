import { ArrowUpRight } from 'lucide-react';

export const LabsSection = () => {
  const labItems = [
    {
      num: '01',
      title: 'ASCII',
      category: 'Design Tool',
      type: 'Experiment',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
      tag: 'Interactive',
    },
    {
      num: '02',
      title: 'Sketch',
      category: 'Client Project',
      type: 'Branding',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
      tag: 'Identity',
    },
    {
      num: '03',
      title: 'AI Assistant',
      category: 'Internal Multi-Agent',
      type: 'Tool',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
      tag: 'AI/RAG',
    },
    {
      num: '04',
      title: 'Noteworthy',
      category: 'Concept & Grid',
      type: 'Archive',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
      tag: 'Editorial',
    },
    {
      num: '05',
      title: 'GEO Workspace',
      category: 'AEO / GEO Engine',
      type: 'Tool',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
      tag: 'Search',
    },
    {
      num: '06',
      title: 'Hubform',
      category: 'Webflow Product',
      type: 'Component',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
      tag: 'Utility',
    },
    {
      num: '07',
      title: 'SuppStack',
      category: 'Product Concept',
      type: 'Prototype',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
      tag: 'SaaS',
    },
    {
      num: '08',
      title: 'FlowGuide',
      category: 'Webflow Template',
      type: 'Design System',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
      tag: 'Template',
    },
  ];

  return (
    <section id="labs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-black">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="font-mono text-xs uppercase tracking-widest text-black/50 mb-3">
          [ 03 // LABS &amp; EXPERIMENTS ]
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-black tracking-[-0.035em] leading-[1.08]">
          Our{' '}
          <span className="font-serif-italic font-normal">experiments, products</span>{' '}
          and{' '}
          <span className="font-serif-italic font-normal">curiosity</span>{' '}
          shapes new ways of working.
        </h2>
      </div>

      {/* Brutalist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {labItems.map((item, idx) => (
          <div
            key={idx}
            className="group cursor-pointer bg-[#FFFFFF] border border-black p-3 flex flex-col justify-between hover:bg-black hover:text-white transition duration-150"
          >
            {/* Visual Media */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#F0F0F0] border border-black relative mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition duration-300"
              />
              <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black text-white text-[9px] font-mono uppercase">
                {item.tag}
              </div>
            </div>

            {/* Information */}
            <div className="pt-2 border-t border-black/20 flex items-center justify-between font-mono text-xs">
              <div>
                <div className="text-[10px] opacity-50">EXP // {item.num}</div>
                <h3 className="font-bold uppercase tracking-tight text-xs mt-0.5">
                  {item.title} <span className="opacity-50 font-normal">/ {item.category}</span>
                </h3>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
