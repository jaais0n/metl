import { useState, useEffect } from 'react';
import { ArrowUpRight, Copy, Check, Clock, Mail, Phone, MapPin } from 'lucide-react';

interface StudioFooterProps {
  onOpenModal: (type: 'work' | 'services' | 'posts' | 'about' | 'contact' | 'quote') => void;
}

export const StudioFooter = ({ onOpenModal }: StudioFooterProps) => {
  const [copenhagenTime, setCopenhagenTime] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@oimachi.co');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 border-t border-black">
      {/* Big Brutalist CTA Banner */}
      <div className="bg-[#FFFFFF] border border-black p-8 sm:p-14 mb-14">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[11px] font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-emerald-400" />
            Accepting Q2/Q3 2026 Partnerships
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-black tracking-[-0.04em] leading-[1.03]">
            Let&apos;s build something{' '}
            <span className="font-serif-italic font-normal">enduring</span>.
          </h2>

          <p className="text-base sm:text-lg text-black/75 max-w-xl leading-relaxed">
            Have a project in mind or want to explore how our studio can elevate your digital brand and AI search visibility? Let&apos;s talk.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs uppercase font-bold">
            <button
              onClick={() => onOpenModal('contact')}
              className="px-6 py-3 bg-black text-white border border-black hover:bg-neutral-800 transition"
            >
              [ Book 30 min intro call ]
            </button>
            <button
              onClick={() => onOpenModal('quote')}
              className="px-6 py-3 bg-white text-black border border-black hover:bg-black hover:text-white transition"
            >
              [ Get a project quote ]
            </button>
          </div>
        </div>
      </div>

      {/* Studio Directory & Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-black text-xs text-black">
        {/* Col 1: Studio Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-sm tracking-tight uppercase">
            <span className="w-5 h-5 bg-black text-white flex items-center justify-center text-xs font-mono">
              O
            </span>
            <span>Oimachi</span>
          </div>
          <p className="text-black/70 leading-relaxed max-w-xs">
            Design, AI &amp; Webflow Excellence Studio. Helping ambitious teams shape brands and websites built to scale.
          </p>
          <div className="flex items-center gap-2 text-black font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>CPH TIME // {copenhagenTime || '10:53:00'}</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3 font-mono">
          <div className="font-bold text-[11px] uppercase tracking-widest text-black/50">
            [ INDEX ]
          </div>
          <ul className="space-y-2 text-black/80 font-medium">
            <li>
              <button onClick={() => onOpenModal('work')} className="hover:underline">/ SELECTED WORK</button>
            </li>
            <li>
              <button onClick={() => onOpenModal('services')} className="hover:underline">/ CAPABILITIES</button>
            </li>
            <li>
              <button onClick={() => onOpenModal('posts')} className="hover:underline">/ DISPATCHES</button>
            </li>
            <li>
              <button onClick={() => onOpenModal('about')} className="hover:underline">/ ABOUT STUDIO</button>
            </li>
            <li>
              <a href="#labs" className="hover:underline">/ LABS ARCHIVE</a>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Contact */}
        <div className="space-y-3 font-mono">
          <div className="font-bold text-[11px] uppercase tracking-widest text-black/50">
            [ CONTACT ]
          </div>
          <div className="space-y-2 text-black/80">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-black/50" />
              <button onClick={copyEmail} className="hover:underline flex items-center gap-1">
                <span>hello@oimachi.co</span>
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 opacity-50" />}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-black/50" />
              <a href="tel:+4541801001" className="hover:underline">+45 4180 1001</a>
            </div>
            <div className="flex items-start gap-2 pt-1 text-black/70 font-sans text-xs">
              <MapPin className="w-3.5 h-3.5 text-black/50 shrink-0 mt-0.5" />
              <span>Rådmandsgade 46B, 2200 Copenhagen, Denmark</span>
            </div>
          </div>
        </div>

        {/* Col 4: Verified Partner */}
        <div className="space-y-3 font-mono">
          <div className="font-bold text-[11px] uppercase tracking-widest text-black/50">
            [ ACCREDITATION ]
          </div>
          <div className="p-4 bg-[#FFFFFF] border border-black space-y-2 font-sans">
            <div className="font-bold text-black flex items-center justify-between text-xs uppercase font-mono">
              <span>Webflow Partner</span>
              <span className="text-[10px] px-1.5 py-0.5 bg-black text-white">VERIFIED</span>
            </div>
            <p className="text-[11px] text-black/75 leading-relaxed">
              Certified across enterprise builds, high-speed CMS infrastructure, and multi-lingual architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-black/60 gap-4 uppercase">
        <div>
          © {new Date().getFullYear()} Oimachi ApS · DK-42836028 · ALL RIGHTS RESERVED
        </div>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black flex items-center gap-0.5">
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-black flex items-center gap-0.5">
            <span>X (Twitter)</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-black">
            TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
