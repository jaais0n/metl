import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const NordostHeader = () => {
  const [copied, setCopied] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const copyBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -20,
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

    if (copyBtnRef.current) {
      gsap.fromTo(
        copyBtnRef.current,
        { scale: 0.94 },
        { scale: 1, duration: 0.3, ease: 'back.out(2)' }
      );
    }

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-40 w-full bg-[#F6F6F6]/90 backdrop-blur-md pt-5 pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logotype Chip */}
        <a href="/" className="inline-flex items-center gap-2 text-[#090909] hover:opacity-80 transition group">
          <span className="font-mono text-xl font-bold tracking-tighter uppercase text-[#090909]">
            metl
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
            studio
          </span>
        </a>

        {/* Center Pill */}
        <div className="hidden sm:block">
          <a
            href="#how-we-work"
            className="px-4 py-1.5 text-xs font-medium rounded-full bg-[#E6E6E6] text-[#090909] hover:bg-[#DCDCDC] transition"
          >
            Studio
          </a>
        </div>

        {/* Right CTA Button */}
        <div>
          <button
            ref={copyBtnRef}
            onClick={handleCopyEmail}
            className="px-4 py-1.5 text-xs font-medium rounded-full bg-[#090909] text-white hover:opacity-90 transition flex items-center gap-2 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{copied ? 'Copied' : 'Contact'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
