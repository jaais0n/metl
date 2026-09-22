import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Check, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

interface NordostHeaderProps {
  onBookCall?: () => void;
}

export const NordostHeader = ({ onBookCall }: NordostHeaderProps) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showCartToast, setShowCartToast] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hi@metl.studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleCartClick = () => {
    setCartCount((prev) => prev + 1);
    setShowCartToast(true);
    setTimeout(() => setShowCartToast(false), 2000);
  };

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Services', href: '/#services', isRoute: false },
    { label: 'Work', href: '/#work', isRoute: false },
    { label: 'Explore', href: '/explore', isRoute: true },
    { label: 'About', href: '/about', isRoute: true },
  ];

  const isCurrentActive = (itemHref: string, isRoute: boolean) => {
    if (isRoute) {
      if (itemHref === '/' && location.pathname === '/') return true;
      if (itemHref !== '/' && location.pathname.startsWith(itemHref)) return true;
    }
    return false;
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full pt-3 pb-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Floating Pill Main Bar */}
        <div className="relative bg-[#09090b] text-white rounded-full p-2 sm:px-3 sm:py-2.5 flex items-center justify-between shadow-2xl shadow-black/40 border border-zinc-800/80 backdrop-blur-xl">
          
          {/* LEFT: Logo Badge & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 pl-1">
            {/* White Circle Badge with Spiral Swirl Logo */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-black shadow-md transition-transform duration-300 group-hover:scale-105">
              <svg 
                className="w-5 h-5 text-black transition-transform duration-500 group-hover:rotate-45" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 12c.5 1.5 2 2 3.5 1.5s2-2 1.5-3.5S14 8 11 8.5 7 11 7.5 15s4.5 5 8.5 4.5S21 14 20.5 9 15 3 9.5 3.5 3 9 3.5 15" />
              </svg>
            </div>
            
            {/* Brand Title */}
            <div className="flex items-center gap-1.5 pr-2">
              <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                metl
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium hidden xs:inline">
                .studio
              </span>
            </div>
          </Link>

          {/* CENTER: Dark Nav Pill Capsule (Desktop) */}
          <nav className="hidden lg:flex items-center bg-[#18181b] rounded-full p-1 border border-zinc-800/60 shadow-inner">
            {navItems.map((item) => {
              const active = isCurrentActive(item.href, item.isRoute);

              if (item.isRoute) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-[#e2d9ff] text-[#121024] font-semibold shadow-sm scale-[1.02]'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all duration-200"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Action Icons & Buttons Group */}
          <div className="flex items-center gap-1.5 sm:gap-2 pr-1">
            {/* Shopping Bag Button */}
            <button
              onClick={handleCartClick}
              className="relative w-9 h-9 rounded-full bg-[#18181b] text-zinc-300 hover:text-white flex items-center justify-center hover:bg-zinc-800 border border-zinc-800/60 transition-all cursor-pointer group"
              title="View Cart / Inquiry Bag"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 text-black text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Subtle Vertical Divider */}
            <span className="hidden sm:block w-[1px] h-4 bg-zinc-800/80 my-auto" />

            {/* Contact / Email Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#18181b] text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-800/60 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied</span>
                </>
              ) : (
                <span>Contact</span>
              )}
            </button>

            {/* Subtle Vertical Divider */}
            <span className="hidden sm:block w-[1px] h-4 bg-zinc-800/80 my-auto" />

            {/* Mint Green Sign Up / Book Call Button */}
            <button
              onClick={onBookCall}
              className="bg-[#e6f7ec] text-[#0a3821] hover:bg-[#d2f3dc] font-semibold rounded-full px-4 sm:px-5 py-1.5 text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-emerald-900/20 active:scale-95 cursor-pointer flex items-center gap-1"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-[#18181b] text-zinc-300 flex items-center justify-center hover:bg-zinc-800 border border-zinc-800/60 transition-colors ml-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-3 bg-[#09090b]/95 backdrop-blur-2xl rounded-3xl border border-zinc-800 text-white shadow-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-2xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {item.href.startsWith('/') && <ArrowUpRight className="w-4 h-4 text-zinc-500" />}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between px-2">
              <button
                onClick={handleCopyEmail}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 py-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                <span>{copied ? 'hi@metl.studio copied' : 'hi@metl.studio'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Floating Cart Toast */}
        {showCartToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 border border-zinc-800 text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-3 duration-300">
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="text-xs font-medium">
              Added item to studio inquiry bag! ({cartCount})
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

