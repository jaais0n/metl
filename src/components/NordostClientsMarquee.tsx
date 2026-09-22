import React from 'react';

export const NordostClientsMarquee = () => {
  const logos = [
    {
      id: 'google',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span className="font-sans font-bold text-base tracking-tight">Google</span>
        </div>
      ),
    },
    {
      id: 'microsoft',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1 1h10v10H1zM13 1h10v10H13zM1 13h10v10H1zM13 13h10v10H13z" />
          </svg>
          <span className="font-sans font-semibold text-base tracking-tight">Microsoft</span>
        </div>
      ),
    },
    {
      id: 'apple',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.56.65-1.05 1.7-0.92 2.72 1.01.08 2.03-.49 2.62-1.22z" />
          </svg>
          <span className="font-sans font-semibold text-base tracking-tight">Apple</span>
        </div>
      ),
    },
    {
      id: 'openai',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.5 12a8.5 8.5 0 0 0-.4-2.6 4.8 4.8 0 0 0-3.3-3.3 8.7 8.7 0 0 0-4.8-.4 8.7 8.7 0 0 0-4.3 2.5 4.8 4.8 0 0 0-2.3 4.1 8.7 8.7 0 0 0 .4 4.8 4.8 4.8 0 0 0 3.3 3.3 8.7 8.7 0 0 0 4.8.4 8.7 8.7 0 0 0 4.3-2.5 4.8 4.8 0 0 0 2.3-4.1z" />
            <path d="M12 7v10M7 9.5l10 5M7 14.5l10-5" />
          </svg>
          <span className="font-sans font-bold text-base tracking-tight">OpenAI</span>
        </div>
      ),
    },
    {
      id: 'stripe',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.521.5 6.78.5 2.87 3.518 2.87 8.163c0 6.643 9.07 5.568 9.07 8.448 0 .984-.813 1.488-2.226 1.488-2.49 0-5.385-1.127-7.234-2.227L1.5 21.465C3.398 22.58 6.657 23.5 10.027 23.5c6.046 0 10.158-2.91 10.158-7.733 0-6.942-9.209-5.877-9.209-8.617z" />
          </svg>
          <span className="font-sans font-bold text-base tracking-tight">Stripe</span>
        </div>
      ),
    },
    {
      id: 'meta',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M4 14c1.5 2.5 3.5 3.5 5.5 2s4-5 6-7 4-2 5 .5 0 5-2 6-4-1-6-4.5S9 5 7 5 3 7.5 3 11c0 2 1 3 1 3z" />
          </svg>
          <span className="font-sans font-bold text-base tracking-tight">Meta</span>
        </div>
      ),
    },
    {
      id: 'figma',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-5" viewBox="0 0 24 36" fill="currentColor">
            <path d="M6 36c3.3 0 6-2.7 6-6v-6H6c-3.3 0-6 2.7-6 6s2.7 6 6 6zM0 18c0-3.3 2.7-6 6-6h6v12H6c-3.3 0-6-2.7-6-6zM0 6C0 2.7 2.7 0 6 0h6v12H6C2.7 12 0 9.3 0 6zM12 0h6c3.3 0 6 2.7 6 6s-2.7 6-6 6h-6V0zM18 12c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
          </svg>
          <span className="font-sans font-bold text-base tracking-tight">Figma</span>
        </div>
      ),
    },
    {
      id: 'linear',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.5 18.5a16 16 0 0 1 16-16l3 3a16 16 0 0 1-16 16l-3-3zM8 20a16 16 0 0 1 12-12l1.5 1.5A16 16 0 0 1 9.5 21.5L8 20z" />
          </svg>
          <span className="font-sans font-bold text-base tracking-tight">Linear</span>
        </div>
      ),
    },
    {
      id: 'amazon',
      content: (
        <div className="flex items-center gap-1.5">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.9 14.5c-2.3 1.7-5.6 2.6-8.5 2.6-4 0-7.6-1.5-10.4-4-.2-.2 0-.5.2-.3 2.9 1.7 6.4 2.7 10 2.7 2.6 0 5.4-.6 8-1.7.4-.2.7.2.7.7z" />
            <path d="M14.8 13.5c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.3-.9 3.5-.6 3.7-.4.3.3.1 2.5-1.1 3.6-.2.2-.4.1-.3-.1.4-.7.6-2.3.4-2.7z" />
          </svg>
          <span className="font-sans font-black text-base tracking-tight">amazon</span>
        </div>
      ),
    },
    {
      id: 'spotify',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 10.5c3.5-1 6.5-.5 9.5 1M8.5 13c3-.8 5.5-.4 8 .8M9 15.5c2.5-.6 4.5-.3 6.5.6" stroke="#F6F6F6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          </svg>
          <span className="font-sans font-bold text-base tracking-tight">Spotify</span>
        </div>
      ),
    },
    {
      id: 'vercel',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L24 22H0L12 2Z" />
          </svg>
          <span className="font-sans font-bold text-base tracking-tight">Vercel</span>
        </div>
      ),
    },
    {
      id: 'airbnb',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8 2 6 5 6 9c0 5 6 13 6 13s6-8 6-13c0-4-2-7-6-7zm0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <span className="font-sans font-bold text-base tracking-tight">airbnb</span>
        </div>
      ),
    },
  ];

  // Duplicate for smooth seamless infinite loop
  const marqueeList = [...logos, ...logos];

  return (
    <section className="bg-[#F6F6F6] text-[#090909] pt-2 pb-10 sm:pb-14 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-zinc-600 text-center">
          Trusted by teams at world-class companies
        </p>
      </div>

      {/* Marquee Track with gradient fade mask on left and right */}
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="animate-client-marquee flex items-center gap-12 sm:gap-20 py-2">
          {marqueeList.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="text-zinc-600 hover:text-black transition-colors duration-200 shrink-0 cursor-default"
            >
              {logo.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
