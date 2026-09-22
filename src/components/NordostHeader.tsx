import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Check, Mail, PhoneCall } from 'lucide-react';
import gsap from 'gsap';

interface NordostHeaderProps {
  onBookCall?: () => void;
}

export const NordostHeader = ({ onBookCall }: NordostHeaderProps) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showCartToast, setShowCartToast] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
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
    <header ref={headerRef} className="sticky top-0 z-50 w-full pt-3 pb-2 px-3 sm:px-6 pointer-events-none">
      <div 
        className={`mx-auto pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? 'max-w-7xl' 
            : 'max-w-[720px] lg:max-w-[780px]'
        }`}
      >
        {/* Floating Pill Main Bar */}
        <div 
          className={`relative bg-[#09090b] text-white rounded-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled 
              ? 'p-2 sm:px-4 sm:py-2.5' 
              : 'p-1.5 sm:px-3 sm:py-2'
          }`}
        >
          
          {/* LEFT: Brand Wordmark */}
          <Link to="/" className="flex items-center group shrink-0 pl-3.5 pr-2 py-1">
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-zinc-300 transition-colors">
              metl.studio
            </span>
          </Link>

          {/* CENTER: Dark Nav Pill Capsule (Locked to True Center) */}
          <nav className="hidden md:flex items-center bg-[#18181b] rounded-full p-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {navItems.map((item) => {
              const active = isCurrentActive(item.href, item.isRoute);

              if (item.isRoute) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-[#e2d9ff] text-[#121024] font-semibold scale-[1.02]'
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
                  className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all duration-200"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Action Icons & Buttons Group */}
          <div className="flex items-center gap-1.5 sm:gap-2 pr-1 z-20">
            {/* Shopping Bag Button */}
            <button
              onClick={handleCartClick}
              className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18181b] text-zinc-300 hover:text-white flex items-center justify-center hover:bg-zinc-800 transition-all cursor-pointer group"
              title="View Cart / Inquiry Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 text-black text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Subtle Vertical Divider */}
            <span className="hidden sm:block w-[1px] h-3.5 sm:h-4 bg-zinc-800/80 my-auto" />

            {/* Contact / Email Copy Button (Icon when compact, Full text when stretched) */}
            <button
              onClick={handleCopyEmail}
              className={`relative bg-[#18181b] text-zinc-300 hover:text-white flex items-center justify-center hover:bg-zinc-800 transition-all duration-300 cursor-pointer group ${
                isScrolled
                  ? 'rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium gap-1.5'
                  : 'w-8 h-8 sm:w-9 sm:h-9 rounded-full'
              }`}
              title={copied ? 'Copied hi@metl.studio!' : 'Contact (hi@metl.studio)'}
              aria-label="Contact Email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  {isScrolled && <span className="text-emerald-300 font-medium">Copied</span>}
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                  {isScrolled && <span>Contact</span>}
                </>
              )}
            </button>

            {/* Subtle Vertical Divider */}
            <span className="hidden sm:block w-[1px] h-3.5 sm:h-4 bg-zinc-800/80 my-auto" />

            {/* Mint Green Book Call Button (Icon when compact, Full text when stretched) */}
            <button
              onClick={onBookCall}
              className={`relative bg-[#e6f7ec] text-[#0a3821] hover:bg-[#d2f3dc] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer group ${
                isScrolled
                  ? 'rounded-full px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-semibold gap-1.5'
                  : 'w-8 h-8 sm:w-9 sm:h-9 rounded-full'
              }`}
              title="Book Free Discovery Call"
              aria-label="Book Call"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
              {isScrolled && <span>Book Call</span>}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18181b] text-zinc-300 flex items-center justify-center hover:bg-zinc-800 transition-colors ml-0.5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 bg-[#09090b] rounded-3xl text-white shadow-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
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


