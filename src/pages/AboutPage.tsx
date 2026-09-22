import { 
  FileCode2, 
  Terminal, 
  FolderTree, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';

export const AboutPage = () => {
  const steps = [
    {
      title: '1. CSS-First Tailwind v4 Engine',
      description: 'In Tailwind CSS v4, styling is defined directly in CSS with @import "tailwindcss". You no longer need separate tailwind.config.js or postcss.config.js files.',
    },
    {
      title: '2. Declarative React Router DOM',
      description: 'Uses createBrowserRouter with RootLayout and an Outlet for clean nesting, scroll preservation, and seamless client transitions.',
    },
    {
      title: '3. Blazing Fast Vite 8 Dev Server',
      description: 'Instant server start and near-instant Hot Module Replacement powered by modern native ES modules.',
    },
    {
      title: '4. Strict TypeScript 5.8+',
      description: 'Robust end-to-end typing for router props, state variables, and component parameters to prevent runtime bugs.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          <Cpu className="w-3.5 h-3.5" />
          Under the Hood
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Architecture & Setup Guide
        </h1>
        <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
          Learn how the project is organized, how to add new routes, and how Tailwind CSS v4 works with Vite.
        </p>
      </div>

      {/* Architecture Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {steps.map((step, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{step.title}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Directory Structure */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 mb-12">
        <div className="flex items-center gap-2.5 mb-6">
          <FolderTree className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">Project Structure</h2>
        </div>

        <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
          <p className="text-indigo-400 font-semibold mb-2">metl/</p>
          <p>├── index.html <span className="text-slate-500"># Entry HTML with modern typography & viewport</span></p>
          <p>├── vite.config.ts <span className="text-slate-500"># Vite configuration with @tailwindcss/vite</span></p>
          <p>├── package.json <span className="text-slate-500"># Scripts, dependencies (React 19, Tailwind v4, Router)</span></p>
          <p>└── src/</p>
          <p>{'    '}├── main.tsx <span className="text-slate-500"># Application bootstrap and router mount</span></p>
          <p>{'    '}├── index.css <span className="text-slate-500"># Tailwind v4 import (@import "tailwindcss")</span></p>
          <p>{'    '}├── router.tsx <span className="text-slate-500"># React Router route tree definitions</span></p>
          <p>{'    '}├── layouts/</p>
          <p>{'    '}│   └── RootLayout.tsx <span className="text-slate-500"># Shared shell (Navbar + Outlet + Footer)</span></p>
          <p>{'    '}├── components/</p>
          <p>{'    '}│   ├── Navbar.tsx <span className="text-slate-500"># Responsive header navigation</span></p>
          <p>{'    '}│   └── Footer.tsx <span className="text-slate-500"># Footer with navigation and links</span></p>
          <p>{'    '}└── pages/</p>
          <p>{'        '}├── HomePage.tsx <span className="text-slate-500"># Landing hero & feature highlights</span></p>
          <p>{'        '}├── ExplorePage.tsx <span className="text-slate-500"># Interactive showcase & filters</span></p>
          <p>{'        '}├── AboutPage.tsx <span className="text-slate-500"># Technical guide and docs</span></p>
          <p>{'        '}└── NotFoundPage.tsx <span className="text-slate-500"># 404 handler</span></p>
        </div>
      </div>

      {/* Guide: How to Add New Routes */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 mb-12 space-y-4">
        <div className="flex items-center gap-2.5">
          <FileCode2 className="w-5 h-5 text-purple-400" />
          <h2 className="text-xl font-bold text-white">How to Add a New Route</h2>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Open <code className="text-indigo-300 bg-slate-900 px-1.5 py-0.5 rounded">src/router.tsx</code> and add your new route inside the children array of the root route:
        </p>
        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
          <pre>{`// 1. Import your new page component
import { DashboardPage } from './pages/DashboardPage';

// 2. Add to router children array in src/router.tsx:
{
  path: 'dashboard',
  element: <DashboardPage />,
},`}</pre>
        </div>
      </div>

      {/* CLI Reference */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
        <div className="flex items-center gap-2.5 mb-6">
          <Terminal className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl font-bold text-white">Development Commands</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
            <div className="text-xs font-mono font-semibold text-emerald-400 mb-1">npm run dev</div>
            <p className="text-xs text-slate-400">Starts local Vite dev server with instant HMR</p>
          </div>
          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
            <div className="text-xs font-mono font-semibold text-indigo-400 mb-1">npm run build</div>
            <p className="text-xs text-slate-400">Compiles TypeScript and builds optimized production bundle</p>
          </div>
          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
            <div className="text-xs font-mono font-semibold text-purple-400 mb-1">npm run preview</div>
            <p className="text-xs text-slate-400">Locally serves the built production bundle</p>
          </div>
        </div>
      </div>
    </div>
  );
};
