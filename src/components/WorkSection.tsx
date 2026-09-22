import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WorkSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const WorkSection = ({ onSelectProject }: WorkSectionProps) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const projects = [
    {
      id: 'evooq',
      num: '01',
      name: 'Evooq',
      industry: 'Fintech',
      description: "A trustworthy, scalable site that establishes Evooq as the wealthtech of choice for the world's leading private banks.",
      images: [
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
      ],
    },
    {
      id: 'danelec',
      num: '02',
      name: 'Danelec',
      industry: 'Maritime',
      description: "A future-facing brand platform empowering Danelec® to lead the maritime sector’s digital and sustainable transformation.",
      images: [
        'https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
      ],
    },
    {
      id: 'bequant',
      num: '03',
      name: 'Bequant',
      industry: 'Networks',
      description: 'Brand and website to position Bequant as best in class in global network optimization and traffic engineering.',
      images: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
      ],
    },
    {
      id: 'anthill',
      num: '04',
      name: 'Anthill',
      industry: 'Pharma',
      description: 'A scalable, brand platform uniting Anthill’s products and empowering healthcare marketers to drive conversion.',
      images: [
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop',
      ],
    },
    {
      id: 'veo',
      num: '05',
      name: 'Veo',
      industry: 'Sports Tech',
      description: 'Scalable Webflow components and advanced multi-language setup for a fast-growing AI sports tech brand.',
      images: [
        'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop',
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-black">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-black/50 mb-3">
            [ 01 // SELECTED WORK ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-black tracking-[-0.035em] leading-[1.08]">
            Partnering with{' '}
            <span className="font-serif-italic font-normal">ambitious</span>{' '}
            teams to build relevant digital experiences in the age of prompting.
          </h2>
        </div>

        <button
          onClick={() => onSelectProject('all')}
          className="self-start md:self-auto text-xs font-mono font-bold uppercase px-4 py-2 bg-white border border-black hover:bg-black hover:text-white transition"
        >
          [ Explore all work ]
        </button>
      </div>

      {/* Brutalist Grid Rows */}
      <div className="border-t border-black divide-y divide-black">
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredRow(project.id)}
            onMouseLeave={() => setHoveredRow(null)}
            onClick={() => onSelectProject(project.id)}
            className="group cursor-pointer py-8 transition-colors duration-150 hover:bg-white/60"
          >
            {/* Row meta */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-xs font-bold text-black/50">
                  {project.num}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-black uppercase tracking-tight group-hover:underline flex items-center gap-2">
                    {project.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <div className="font-mono text-[11px] text-black/50 uppercase tracking-widest mt-0.5">
                    // {project.industry}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-sm text-black/80 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Brutalist Sharp Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] overflow-hidden bg-white border border-black"
                >
                  <img
                    src={img}
                    alt={`${project.name} preview ${idx + 1}`}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      hoveredRow === project.id ? 'scale-105' : 'scale-100'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
