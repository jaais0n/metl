import { useState } from 'react';
import { 
  Search, 
  Palette, 
  CheckCircle2
} from 'lucide-react';
import { NordostHeader } from '../components/NordostHeader';
import { NordostFooter } from '../components/NordostFooter';

interface ComponentDemo {
  id: string;
  title: string;
  category: 'Routing' | 'Styling' | 'Vite & Tooling';
  description: string;
  tags: string[];
  snippet: string;
}

const DEMOS: ComponentDemo[] = [
  {
    id: '1',
    title: 'Tailwind v4 Modern Buttons & Gradients',
    category: 'Styling',
    description: 'Dynamic gradient fills, subtle border rings, hover scale micro-animations, and focus ring accessibility.',
    tags: ['Tailwind v4', 'Transitions', 'CSS-in-HTML'],
    snippet: '<button className="bg-[#090909] text-white px-5 py-3 rounded-full hover:opacity-85 transition">Action</button>',
  },
  {
    id: '2',
    title: 'Declarative React Router Navigation',
    category: 'Routing',
    description: 'Nested routes, NavLink active state tracking, scroll restoration, and smooth page transitions.',
    tags: ['react-router-dom', 'Outlets', 'Layouts'],
    snippet: '<NavLink to="/about" className={({ isActive }) => isActive ? "font-bold text-black" : "text-neutral-500"} />',
  },
  {
    id: '3',
    title: 'Vite 8 Lightning Fast Bundler',
    category: 'Vite & Tooling',
    description: 'Sub-second dev server boot time, native ESM modules, and instant Hot Module Replacement out of the box.',
    tags: ['Vite', 'HMR', 'ESM', 'TypeScript'],
    snippet: 'export default defineConfig({ plugins: [react(), tailwindcss()] });',
  },
  {
    id: '4',
    title: 'Glassmorphic Backdrop Blur Cards',
    category: 'Styling',
    description: 'Frosted glass styling using backdrop-filter blur and subtle semi-transparent borders for high-end UI depth.',
    tags: ['Glassmorphism', 'CSS Variables', 'Depth'],
    snippet: '<div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl p-6" />',
  },
  {
    id: '5',
    title: 'Dynamic Route Error & 404 Boundaries',
    category: 'Routing',
    description: 'Custom fallback handling for unmatched URLs, preserving seamless single-page application experience.',
    tags: ['Error Handling', 'Catch-all Routes', 'UX'],
    snippet: '<Route path="*" element={<NotFoundPage />} />',
  },
  {
    id: '6',
    title: 'TypeScript Type-Safe Navigation & Props',
    category: 'Vite & Tooling',
    description: 'Compile-time validation for component properties, state shapes, and router hook parameters.',
    tags: ['TypeScript', 'Type Checking', 'Productivity'],
    snippet: 'interface PageProps { title: string; onSelect: (id: string) => void; }',
  },
];

export const ExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories = ['All', 'Styling', 'Routing', 'Vite & Tooling'];

  const filteredDemos = DEMOS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const TAB_NAMES = ['Overview Dashboard', 'System Metrics', 'Audit Logs'];

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#090909] flex flex-col justify-between">
      <div>
        <NordostHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono font-medium mb-4">
              <Palette className="w-3.5 h-3.5" />
              Component & Feature Showcase
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium text-[#090909] tracking-tight">
              Explore the Capabilities
            </h1>
            <p className="mt-4 text-[#737373] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Filter and examine the design system, route mechanisms, and developer ergonomics baked into this setup.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {/* Search bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-base sm:text-sm text-[#090909] placeholder-neutral-400 focus:outline-none focus:border-black transition shadow-xs"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-neutral-300 w-full sm:w-auto overflow-x-auto shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono transition whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#090909] text-white font-medium'
                      : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {filteredDemos.map((demo) => (
              <div
                key={demo.id}
                className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-neutral-200 hover:border-neutral-400 transition-all duration-300 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {demo.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">#{demo.id}</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#090909] mb-2">{demo.title}</h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-4">
                    {demo.description}
                  </p>
                </div>

                <div>
                  {/* Code preview snippet */}
                  <div className="bg-[#090909] rounded-xl p-3 border border-neutral-800 mb-4 font-mono text-[11px] text-neutral-300 overflow-x-auto">
                    <code>{demo.snippet}</code>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Interactive UI Elements Playground */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs mb-12">
            <div className="max-w-xl mb-6">
              <h2 className="text-xl sm:text-2xl font-medium text-[#090909] mb-2">Live UI Component Sandbox</h2>
              <p className="text-xs sm:text-sm text-[#737373]">
                Interactive buttons, badges, and toggle switches styled purely with modern utility classes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-200">
              {/* Column 1: Buttons */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">Button Styles</h3>
                <div className="flex flex-col gap-2.5">
                  <button className="w-full py-2.5 px-4 rounded-full bg-[#090909] hover:opacity-85 text-white font-medium text-xs transition cursor-pointer min-h-[44px]">
                    Primary Action Button
                  </button>
                  <button className="w-full py-2.5 px-4 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-900 font-medium text-xs transition cursor-pointer min-h-[44px]">
                    Secondary Neutral
                  </button>
                  <button className="w-full py-2.5 px-4 rounded-full bg-[#FF5500] hover:opacity-90 text-white font-medium text-xs transition cursor-pointer min-h-[44px]">
                    Fluorescent Accent
                  </button>
                </div>
              </div>

              {/* Column 2: Badges & Tags */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">Status Indicators</h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Active
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-medium">
                    Pending Review
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-medium">
                    Archived
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-300 text-xs font-medium">
                    Tailwind v4
                  </span>
                </div>
              </div>

              {/* Column 3: Interactive Tabs */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">Tabbed Switcher</h3>
                <div className="bg-neutral-100 p-1 rounded-xl border border-neutral-200 flex gap-1">
                  {['Overview', 'Metrics', 'Logs'].map((tab, idx) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(idx)}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition cursor-pointer min-h-[36px] ${
                        activeTab === idx
                          ? 'bg-white text-black shadow-xs font-semibold'
                          : 'text-neutral-500 hover:text-black'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600">
                  Active view: <span className="font-semibold text-black">{TAB_NAMES[activeTab]}</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <NordostFooter />
    </div>
  );
};
