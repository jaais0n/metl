import { 
  FileCode2, 
  Terminal, 
  FolderTree, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';
import { NordostHeader } from '../components/NordostHeader';
import { NordostFooter } from '../components/NordostFooter';

export const AboutPage = () => {
  const steps = [
    {
      title: '1. CSS-First Tailwind v4 Engine',
      description: 'In Tailwind CSS v4, styling is defined directly in CSS with @import "tailwindcss". No legacy config files required.',
    },
    {
      title: '2. Declarative React Router DOM',
      description: 'Uses createBrowserRouter with RootLayout for clean nesting, scroll preservation, and seamless client transitions.',
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
    <div className="min-h-screen bg-[#F6F6F6] text-[#090909] flex flex-col justify-between">
      <div>
        <NordostHeader />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-10 sm:mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono font-medium mb-4">
              <Cpu className="w-3.5 h-3.5" />
              Under the Hood
            </div>
            <h1 className="text-3xl sm:text-5xl font-medium text-[#090909] tracking-tight">
              Architecture & Setup Guide
            </h1>
            <p className="mt-4 text-[#737373] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Learn how the project is organized, how to add new routes, and how Tailwind CSS v4 works with Vite.
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200 shadow-xs">
                <div className="flex items-center gap-2 text-black font-medium text-sm sm:text-base mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{step.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Directory Structure */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-neutral-200 shadow-xs mb-10 sm:mb-12">
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <FolderTree className="w-5 h-5 text-[#FF5500]" />
              <h2 className="text-lg sm:text-xl font-medium text-[#090909]">Project Structure</h2>
            </div>

            <div className="bg-[#090909] rounded-2xl p-4 sm:p-5 border border-neutral-800 font-mono text-[11px] sm:text-xs text-neutral-300 overflow-x-auto leading-relaxed">
              <p className="text-[#FF5500] font-semibold mb-2">metl/</p>
              <p>├── index.html <span className="text-neutral-500"># Entry HTML with modern typography & viewport</span></p>
              <p>├── vite.config.ts <span className="text-neutral-500"># Vite configuration with @tailwindcss/vite</span></p>
              <p>├── package.json <span className="text-neutral-500"># Scripts, dependencies (React 19, Tailwind v4, Router)</span></p>
              <p>└── src/</p>
              <p>{'    '}├── main.tsx <span className="text-neutral-500"># Application bootstrap and router mount</span></p>
              <p>{'    '}├── index.css <span className="text-neutral-500"># Tailwind v4 import (@import "tailwindcss")</span></p>
              <p>{'    '}├── router.tsx <span className="text-neutral-500"># React Router route tree definitions</span></p>
              <p>{'    '}├── layouts/</p>
              <p>{'    '}│   └── RootLayout.tsx <span className="text-neutral-500"># Shared shell (Navbar + Outlet + Footer)</span></p>
              <p>{'    '}├── components/</p>
              <p>{'    '}│   ├── NordostHeader.tsx <span className="text-neutral-500"># Adaptive header navigation & drawer</span></p>
              <p>{'    '}│   ├── NordostHero.tsx <span className="text-neutral-500"># Kinetic hero headline & stage</span></p>
              <p>{'    '}│   └── NordostFooter.tsx <span className="text-neutral-500"># Studio footer with live clock</span></p>
              <p>{'    '}└── pages/</p>
              <p>{'        '}├── HomePage.tsx <span className="text-neutral-500"># Studio home landing experience</span></p>
              <p>{'        '}├── ExplorePage.tsx <span className="text-neutral-500"># Interactive showcase & filters</span></p>
              <p>{'        '}└── AboutPage.tsx <span className="text-neutral-500"># Technical guide and docs</span></p>
            </div>
          </div>

          {/* Guide: How to Add New Routes */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-neutral-200 shadow-xs mb-10 sm:mb-12 space-y-4">
            <div className="flex items-center gap-2.5">
              <FileCode2 className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg sm:text-xl font-medium text-[#090909]">How to Add a New Route</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
              Open <code className="text-black bg-neutral-100 px-1.5 py-0.5 rounded font-mono text-xs">src/router.tsx</code> and add your new route inside the children array of the root route:
            </p>
            <div className="bg-[#090909] rounded-2xl p-4 border border-neutral-800 font-mono text-[11px] sm:text-xs text-neutral-300 overflow-x-auto">
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
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-neutral-200 shadow-xs mb-12">
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <Terminal className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg sm:text-xl font-medium text-[#090909]">Development Commands</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="text-xs font-mono font-semibold text-emerald-700 mb-1">npm run dev</div>
                <p className="text-xs text-[#737373]">Starts local Vite dev server with instant HMR</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="text-xs font-mono font-semibold text-indigo-700 mb-1">npm run build</div>
                <p className="text-xs text-[#737373]">Compiles TypeScript and builds production bundle</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="text-xs font-mono font-semibold text-purple-700 mb-1">npm run preview</div>
                <p className="text-xs text-[#737373]">Locally serves the built production bundle</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <NordostFooter />
    </div>
  );
};
