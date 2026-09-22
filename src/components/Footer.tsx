import { Layers, Heart, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">Metl Template</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              An enterprise-grade, lightning-fast foundation crafted with React 19, Vite, Tailwind CSS v4, and React Router.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Built with Vite & TypeScript</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-indigo-400 transition">Explore Features</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition">About the Stack</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://vite.dev" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">Vite Documentation</a>
              </li>
              <li>
                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">Tailwind CSS v4</a>
              </li>
              <li>
                <a href="https://reactrouter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">React Router</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Metl Project. Released under MIT License.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using modern web standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
