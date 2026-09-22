import { useState, useEffect } from 'react';
import { ArrowUpRight, Plus, X, Clock, Mail, Phone, MapPin } from 'lucide-react';

interface StudioNavbarProps {
  onOpenModal: (type: 'work' | 'services' | 'posts' | 'about' | 'contact' | 'quote') => void;
}

export const StudioNavbar = ({ onOpenModal }: StudioNavbarProps) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [copenhagenTime, setCopenhagenTime] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Copenhagen',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCopenhagenTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-[#F0F0F0]/95 backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch justify-between h-14">
          {/* Studio Brand Logo - Sharp Brutalist Box */}
          <div className="flex items-stretch">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 pr-6 border-r border-black font-bold text-sm tracking-tight text-black hover:bg-black hover:text-white transition px-2"
            >
              <span className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono font-bold">
                O
              </span>
              <span className="uppercase text-sm tracking-normal">Oimachi</span>
              <span className="text-[10px] font-mono border border-black px-1 py-0.5 ml-1 hidden sm:inline-block">
                STUDIO // 2026
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-stretch text-xs font-semibold uppercase tracking-wider">
              <button
                onClick={() => onOpenModal('work')}
                className="px-4 flex items-center border-r border-black hover:bg-black hover:text-white transition"
              >
                Work
              </button>
              <button
                onClick={() => onOpenModal('services')}
                className="px-4 flex items-center border-r border-black hover:bg-black hover:text-white transition"
              >
                Services
              </button>
              <button
                onClick={() => onOpenModal('posts')}
                className="px-4 flex items-center border-r border-black hover:bg-black hover:text-white transition"
              >
                Posts
              </button>

              {/* Products Dropdown */}
              <div className="relative flex items-stretch">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="px-4 flex items-center gap-1.5 border-r border-black hover:bg-black hover:text-white transition"
                >
                  <span>Products</span>
                  <span className="font-mono text-[10px]">{productsOpen ? '▲' : '▼'}</span>
                </button>

                {productsOpen && (
                  <div 
                    onMouseLeave={() => setProductsOpen(false)}
                    className="absolute left-0 top-full w-72 bg-[#FFFFFF] border-x border-b border-black shadow-none z-50 text-left divide-y divide-black/20"
                  >
                    <a
                      href="https://flowguide.webflow.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="block p-3 hover:bg-[#F0F0F0] transition group"
                    >
                      <div className="font-bold text-xs text-black flex items-center justify-between">
                        <span>Flowguide</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[11px] text-black/70 mt-1 leading-snug">
                        Flexible brand guide architecture for Webflow.
                      </p>
                    </a>
                    <a
                      href="https://www.steep.design/"
                      target="_blank"
                      rel="noreferrer"
                      className="block p-3 hover:bg-[#F0F0F0] transition group"
                    >
                      <div className="font-bold text-xs text-black flex items-center justify-between">
                        <span>STEEP</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[11px] text-black/70 mt-1 leading-snug">
                        1000+ curated sponsored Instagram stories.
                      </p>
                    </a>
                    <div className="p-3 bg-[#F0F0F0]">
                      <div className="font-bold text-xs text-black flex items-center justify-between">
                        <span>Hubform</span>
                        <span className="text-[9px] uppercase px-1 py-0.5 bg-black text-white font-mono">Utility</span>
                      </div>
                      <p className="text-[11px] text-black/70 mt-1 leading-snug">
                        Trigger native HubSpot forms in Webflow.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => onOpenModal('about')}
                className="px-4 flex items-center border-r border-black hover:bg-black hover:text-white transition"
              >
                About
              </button>
            </nav>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-stretch text-xs font-semibold uppercase tracking-wider">
            {/* Quick Quote */}
            <button
              onClick={() => onOpenModal('quote')}
              className="hidden lg:flex items-center px-4 border-l border-black hover:bg-black hover:text-white transition"
            >
              Get a quote
            </button>

            {/* Contact Dropdown Toggle */}
            <div className="relative flex items-stretch">
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className="flex items-center gap-2 px-4 border-l border-black hover:bg-black hover:text-white transition"
              >
                <span>Contact</span>
                <Plus className={`w-3.5 h-3.5 transition-transform duration-150 ${contactOpen ? 'rotate-45' : ''}`} />
              </button>

              {contactOpen && (
                <div 
                  className="absolute right-0 top-full w-80 bg-[#FFFFFF] border-x border-b border-black shadow-none z-50 text-left p-5 space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-black">
                    <div className="flex items-center gap-1.5 text-xs text-black font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>CPH TIME</span>
                    </div>
                    <span className="font-mono text-xs font-bold bg-black text-white px-2 py-0.5">
                      {copenhagenTime || '10:53:00'}
                    </span>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between p-2 border border-black bg-[#F0F0F0]">
                      <div className="flex items-center gap-2 text-black">
                        <Mail className="w-3.5 h-3.5" />
                        <span className="text-[11px]">hello@oimachi.co</span>
                      </div>
                      <button
                        onClick={() => handleCopy('hello@oimachi.co', 'email')}
                        className="px-1.5 py-0.5 bg-black text-white hover:bg-neutral-800 text-[10px]"
                      >
                        {copiedEmail ? 'COPIED' : 'COPY'}
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-2 border border-black bg-[#F0F0F0]">
                      <div className="flex items-center gap-2 text-black">
                        <Phone className="w-3.5 h-3.5" />
                        <span className="text-[11px]">+45 4180 1001</span>
                      </div>
                      <button
                        onClick={() => handleCopy('+4541801001', 'phone')}
                        className="px-1.5 py-0.5 bg-black text-white hover:bg-neutral-800 text-[10px]"
                      >
                        {copiedPhone ? 'COPIED' : 'COPY'}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-black space-y-2">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-black/50">Partners</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 border border-black bg-white">
                        <div className="font-bold text-black">Casper Nielsen</div>
                        <div className="text-[10px] text-black/60 font-mono">Partner / Design</div>
                      </div>
                      <div className="p-2 border border-black bg-white">
                        <div className="font-bold text-black">Daniel Bech</div>
                        <div className="text-[10px] text-black/60 font-mono">Partner / Tech</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-black/70 flex items-start gap-1.5 font-mono pt-1">
                    <MapPin className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span>Rådmandsgade 46B, 2200 Copenhagen, DK</span>
                  </div>
                </div>
              )}
            </div>

            {/* Plan Project Action */}
            <button
              onClick={() => onOpenModal('contact')}
              className="flex items-center px-5 bg-black text-white hover:bg-neutral-800 transition border-l border-black"
            >
              Plan project
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center px-4 border-l border-black text-black"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black bg-[#FFFFFF] divide-y divide-black font-semibold uppercase text-xs">
          <button
            onClick={() => { onOpenModal('work'); setMobileMenuOpen(false); }}
            className="w-full text-left py-3 px-4 hover:bg-[#F0F0F0]"
          >
            [ 01 ] Work
          </button>
          <button
            onClick={() => { onOpenModal('services'); setMobileMenuOpen(false); }}
            className="w-full text-left py-3 px-4 hover:bg-[#F0F0F0]"
          >
            [ 02 ] Services
          </button>
          <button
            onClick={() => { onOpenModal('posts'); setMobileMenuOpen(false); }}
            className="w-full text-left py-3 px-4 hover:bg-[#F0F0F0]"
          >
            [ 03 ] Posts &amp; Insights
          </button>
          <button
            onClick={() => { onOpenModal('about'); setMobileMenuOpen(false); }}
            className="w-full text-left py-3 px-4 hover:bg-[#F0F0F0]"
          >
            [ 04 ] About
          </button>
        </div>
      )}
    </header>
  );
};
