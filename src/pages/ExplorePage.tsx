import { useState } from 'react';
import { 
  Search, 
  Palette, 
  CheckCircle2
} from 'lucide-react';

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
    snippet: '<button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 active:scale-95 transition">Action</button>',
  },
  {
    id: '2',
    title: 'Declarative React Router Navigation',
    category: 'Routing',
    description: 'Nested routes, NavLink active state tracking, scroll restoration, and smooth page transitions.',
    tags: ['react-router-dom', 'Outlets', 'Layouts'],
    snippet: '<NavLink to="/about" className={({ isActive }) => isActive ? "text-indigo-400" : "text-slate-400"} />',
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
    snippet: '<div className="backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl p-6" />',
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
          <Palette className="w-3.5 h-3.5" />
          Component & Feature Showcase
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Explore the Capabilities
        </h1>
        <p className="mt-4 text-slate-400 text-base leading-relaxed">
          Filter and examine the design system, route mechanisms, and developer ergonomics baked into this setup.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Search bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 w-full md:w-auto overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredDemos.map((demo) => (
          <div
            key={demo.id}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {demo.category}
                </span>
                <span className="text-xs text-slate-500 font-mono">#{demo.id}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{demo.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {demo.description}
              </p>
            </div>

            <div>
              {/* Code preview snippet */}
              <div className="bg-slate-950 rounded-xl p-3 border border-slate-800/80 mb-4 font-mono text-[11px] text-slate-300 overflow-x-auto">
                <code>{demo.snippet}</code>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {demo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50"
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
      <div className="glass-panel rounded-3xl p-8 border border-slate-800">
        <div className="max-w-xl mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Live UI Component Sandbox</h2>
          <p className="text-sm text-slate-400">
            Interactive buttons, badges, and toggle switches styled purely with Tailwind CSS v4 utility classes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800/80">
          {/* Column 1: Buttons */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Button Styles</h3>
            <div className="flex flex-col gap-2.5">
              <button className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition">
                Primary Button
              </button>
              <button className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition">
                Secondary Neutral
              </button>
              <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-95 text-white font-medium text-xs transition">
                Gradient Highlight
              </button>
            </div>
          </div>

          {/* Column 2: Badges & Tags */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Status Indicators</h3>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-medium">
                Pending Review
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30 text-xs font-medium">
                Deprecated
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 text-xs font-medium">
                Tailwind v4
              </span>
            </div>
          </div>

          {/* Column 3: Interactive Tabs */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tabbed Switcher</h3>
            <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800 flex gap-1">
              {['Overview', 'Metrics', 'Logs'].map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition ${
                    activeTab === idx
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-xs text-slate-400">
              Active view: <span className="font-semibold text-white">{['Overview Dashboard', 'System Metrics', 'Audit Logs'][activeTab]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
