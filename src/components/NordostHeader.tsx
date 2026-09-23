import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Check, Mail, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

// Custom PhoneCall icon where ONLY the ringing soundwave arcs animate
const RingingPhoneIcon = ({ className = 'w-3.5 h-3.5 sm:w-4 sm:h-4' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Solid steady handset receiver */}
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    {/* Pulsing inner ringing wave arc */}
    <path d="M14.05 6A5 5 0 0 1 18 10" className="ring-wave-inner origin-bottom-left" />
    {/* Pulsing outer ringing wave arc */}
    <path d="M14.05 2a9 9 0 0 1 8 7.94" className="ring-wave-outer origin-bottom-left" />
  </svg>
);

interface NordostHeaderProps {
  onBookCall?: () => void;
}

export const NordostHeader = ({ onBookCall }: NordostHeaderProps) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showCartToast, setShowCartToast] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const brandMetlRef = useRef<HTMLSpanElement>(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animate 'metl' changing color to fluorescent orange after a short delay on initial load
      if (brandMetlRef.current) {
        gsap.timeline({ delay: 1.1 })
          .set(brandMetlRef.current, { color: '#ffffff' })
          .to(brandMetlRef.current, { color: '#09090b', duration: 0.05 })
          .to(brandMetlRef.current, { color: '#ffffff', duration: 0.05 })
          .to(brandMetlRef.current, { color: '#09090b', duration: 0.04 })
          .to(brandMetlRef.current, { color: '#ffffff', duration: 0.06 })
          .to(brandMetlRef.current, {
            color: '#FF5500',
            duration: 0.45,
            ease: 'power2.out',
          });
      }
    }, headerRef);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      // Detect if header is hovering over dark background sections
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const headerMidY = headerRect.top + headerRect.height / 2;

        const darkElements = document.querySelectorAll('[data-bg="dark"]');
        let overDark = false;
        darkElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerMidY && rect.bottom >= headerMidY) {
            overDark = true;
          }
        });
        setIsDarkBackground(overDark);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
    { id: 'home', label: 'Home', route: '/' },
    { id: 'services', label: 'Services', route: '/services' },
    { id: 'work', label: 'Work', route: '/work' },
    { id: 'explore', label: 'Explore', route: '/explore' },
    { id: 'about', label: 'About', route: '/about' },
  ];

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    if (location.pathname === '/services') {
      setActiveSection('services');
      return;
    }
    if (location.pathname === '/work') {
      setActiveSection('work');
      return;
    }
    if (location.pathname === '/explore') {
      setActiveSection('explore');
      return;
    }
    if (location.pathname === '/about') {
      setActiveSection('about');
      return;
    }

    if (location.pathname === '/') {
      const handleSectionScroll = () => {
        const sections = ['home', 'services', 'work', 'explore', 'about'];
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i];
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(sectionId);
              return;
            }
          }
        }
        setActiveSection('home');
      };

      window.addEventListener('scroll', handleSectionScroll, { passive: true });
      handleSectionScroll();
      return () => window.removeEventListener('scroll', handleSectionScroll);
    }
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.id);
        window.history.replaceState(null, '', item.id === 'home' ? '/' : `/#${item.id}`);
      }
    }
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
          className={`relative rounded-full flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isDarkBackground
              ? 'bg-white text-[#090909] shadow-2xl border border-black/5'
              : 'bg-[#09090b] text-white shadow-xl'
          } ${
            isScrolled 
              ? 'p-2 sm:px-4 sm:py-2.5' 
              : 'p-1.5 sm:px-3 sm:py-2'
          }`}
        >
          
          {/* LEFT: Brand Wordmark */}
          <Link to="/" className="flex items-center group shrink-0 pl-3.5 pr-2 py-1">
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight">
              <span 
                ref={brandMetlRef} 
                className={`inline-block transition-colors ${
                  isDarkBackground ? 'text-[#090909]' : 'text-white'
                }`}
              >
                metl
              </span>
              <span 
                className={`inline-block transition-colors ${
                  isDarkBackground 
                    ? 'text-[#090909] group-hover:text-zinc-600' 
                    : 'text-white group-hover:text-zinc-300'
                }`}
              >
                .studio
              </span>
            </span>
          </Link>

          {/* CENTER: Exact Pill Capsule matching reference screenshot */}
          <nav 
            className="hidden md:flex items-center rounded-full p-1 bg-[#131316] border border-white/5 shadow-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none"
          >
            {navItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  to={item.route}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-4 sm:px-4.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#E5E0FF] text-[#121118] font-semibold scale-[1.02] shadow-xs'
                      : 'text-[#8292AF] hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Action Icons & Buttons Group */}
          <div className="flex items-center gap-1.5 sm:gap-2 pr-1 z-20">
            {/* Shopping Bag Button */}
            <button
              onClick={handleCartClick}
              className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer group ${
                isDarkBackground
                  ? 'bg-[#ececec] text-zinc-700 hover:text-black hover:bg-zinc-300'
                  : 'bg-[#18181b] text-zinc-300 hover:text-white hover:bg-zinc-800'
              }`}
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
            <span 
              className={`hidden sm:block w-[1px] h-3.5 sm:h-4 my-auto transition-colors ${
                isDarkBackground ? 'bg-zinc-300/80' : 'bg-zinc-800/80'
              }`} 
            />

            {/* Contact / Email Copy Button */}
            <button
              onClick={handleCopyEmail}
              className={`relative flex items-center justify-center transition-all duration-300 cursor-pointer group ${
                isDarkBackground
                  ? 'bg-[#ececec] text-zinc-700 hover:text-black hover:bg-zinc-300'
                  : 'bg-[#18181b] text-zinc-300 hover:text-white hover:bg-zinc-800'
              } ${
                isScrolled
                  ? 'rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium gap-1.5'
                  : 'w-8 h-8 sm:w-9 sm:h-9 rounded-full'
              }`}
              title={copied ? 'Copied hi@metl.studio!' : 'Contact (hi@metl.studio)'}
              aria-label="Contact Email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                  {isScrolled && (
                    <span className={isDarkBackground ? 'text-emerald-700 font-medium' : 'text-emerald-300 font-medium'}>
                      Copied
                    </span>
                  )}
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                  {isScrolled && <span>Contact</span>}
                </>
              )}
            </button>

            {/* Subtle Vertical Divider */}
            <span 
              className={`hidden sm:block w-[1px] h-3.5 sm:h-4 my-auto transition-colors ${
                isDarkBackground ? 'bg-zinc-300/80' : 'bg-zinc-800/80'
              }`} 
            />

            {/* Mint Green / Dark Book Call Button */}
            <button
              onClick={onBookCall}
              className={`relative flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer group ${
                isDarkBackground
                  ? 'bg-[#09090b] text-white hover:bg-zinc-800'
                  : 'bg-[#e6f7ec] text-[#0a3821] hover:bg-[#d2f3dc]'
              } ${
                isScrolled
                  ? 'rounded-full px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-semibold gap-1.5'
                  : 'w-8 h-8 sm:w-9 sm:h-9 rounded-full'
              }`}
              title="Book Free Discovery Call"
              aria-label="Book Call"
            >
              <RingingPhoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
              {isScrolled && <span>Book Call</span>}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ml-0.5 ${
                isDarkBackground
                  ? 'bg-[#ececec] text-zinc-700 hover:bg-zinc-300'
                  : 'bg-[#18181b] text-zinc-300 hover:bg-zinc-800'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav Menu with Backdrop */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-30 md:hidden pointer-events-auto animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div 
              className={`relative z-40 md:hidden mt-2 p-3 rounded-3xl shadow-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto ${
                isDarkBackground
                  ? 'bg-white text-[#090909] border border-zinc-200'
                  : 'bg-[#09090b] text-white'
              }`}
            >
              {navItems.map((item) => {
                const active = activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    to={item.route}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, item);
                    }}
                    className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors flex items-center justify-between min-h-[48px] active:scale-[0.99] ${
                      active
                        ? 'bg-[#E5E0FF] text-[#121118] font-semibold'
                        : isDarkBackground
                          ? 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                          : 'text-[#8292AF] hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </Link>
                );
              })}

              {/* Mobile Drawer Book Call Action */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookCall?.();
                }}
                className={`mt-1 w-full py-3 px-4 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 min-h-[48px] transition active:scale-[0.98] ${
                  isDarkBackground
                    ? 'bg-[#09090b] text-white hover:bg-zinc-800'
                    : 'bg-[#e6f7ec] text-[#0a3821] hover:bg-[#d2f3dc]'
                }`}
              >
                <RingingPhoneIcon className="w-4 h-4" />
                <span>Book Free Discovery Call</span>
              </button>

              <div 
                className={`pt-2 mt-1 border-t flex items-center justify-between px-2 ${
                  isDarkBackground ? 'border-zinc-200' : 'border-zinc-800/80'
                }`}
              >
                <button
                  onClick={handleCopyEmail}
                  className={`text-xs flex items-center gap-1.5 py-2 min-h-[40px] ${
                    isDarkBackground
                      ? 'text-zinc-600 hover:text-black'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Mail className="w-3.5 h-3.5 text-zinc-400" />}
                  <span>{copied ? 'hi@metl.studio copied' : 'hi@metl.studio'}</span>
                </button>
              </div>
            </div>
          </>
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


