interface NordostProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const NordostProjectModal = ({ projectId, onClose }: NordostProjectModalProps) => {
  if (!projectId) return null;

  const projectDetails: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    client: string;
    year: string;
    services: string[];
    images: string[];
  }> = {
    perlinbio: {
      title: 'perlin.bio',
      subtitle: 'Swiss Biotech Startup',
      description: 'Nordost developed a strategic visual and motion identity for perlin.bio, equipping the cutting-edge bioinformatics platform with an authoritative yet forward-thinking brand system as they prepared for their seed funding round.',
      client: 'Perlin Bioinformatics AG',
      year: '2024–2025',
      services: ['Brand Strategy', 'Brand Identity', 'Motion Identity', 'Design System'],
      images: [
        'https://media.studio-nordost.com/media/pages/work/perlinbio/63a0bed36c-1786957438/perlin_thumbnail-1200x-q80.jpg',
      ],
    },
    humafinance: {
      title: 'Huma Finance',
      subtitle: 'Fintech / Crypto Startup',
      description: 'A comprehensive brand identity and digital experience engineered for institutional crypto lending. We crafted high-converting landing experiences, interactive financial models, and a brutalist, clear design language.',
      client: 'Huma Financial Inc.',
      year: '2024–2025',
      services: ['Brand Identity', 'Website Design & Dev', 'Design System'],
      images: [
        'https://media.studio-nordost.com/media/pages/work/humafinance/c4540a5866-1787640073/huma_thumbail-1200x-q80.jpg',
      ],
    },
    viiala: {
      title: 'Viiala AG',
      subtitle: 'Swiss Mobility Startup',
      description: 'End-to-end brand repositioning and digital design for Viiala AG, transforming urban transit and smart fleet telematics with precision Swiss engineering aesthetics.',
      client: 'Viiala AG Zurich',
      year: '2025',
      services: ['Brand Strategy', 'Visual Identity', 'Motion Graphics', 'Web Development'],
      images: [
        'https://media.studio-nordost.com/dist/video/viialla-motion-mockup-1080p-poster.webp',
      ],
    },
  };

  const project = projectDetails[projectId] || projectDetails.perlinbio;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#090909] text-[#F6F6F6] rounded-2xl border border-neutral-800 p-6 sm:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right z-10 w-9 h-9 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="clear-both space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Case Study
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-neutral-400">{project.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 border-y border-neutral-800 font-mono text-xs">
            <div>
              <span className="text-neutral-500 block mb-1">CLIENT</span>
              <span className="text-white">{project.client}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1">YEAR</span>
              <span className="text-white">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1">DISCIPLINES</span>
              <span className="text-white">{project.services.join(', ')}</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="space-y-6 pt-4">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={project.title}
                className="w-full h-auto rounded-xl object-cover border border-neutral-800"
              />
            ))}
          </div>

          <div className="pt-6 flex justify-between items-center border-t border-neutral-800">
            <span className="font-mono text-xs text-neutral-500">Studio Nordost / Work</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-mono font-medium hover:opacity-90 transition"
            >
              Close Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
