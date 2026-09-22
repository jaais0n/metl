import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NordostHeader } from '../components/NordostHeader';
import { NordostHero } from '../components/NordostHero';
import { NordostWhyInvest } from '../components/NordostWhyInvest';
import { NordostServicesAndWork } from '../components/NordostServicesAndWork';
import { NordostTestimonials } from '../components/NordostTestimonials';
import { NordostHowWeWork } from '../components/NordostHowWeWork';
import { NordostCta } from '../components/NordostCta';
import { NordostFooter } from '../components/NordostFooter';
import { NordostBookingModal } from '../components/NordostBookingModal';
import { NordostProjectModal } from '../components/NordostProjectModal';

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    // Refresh ScrollTrigger to recalculate accurate trigger positions after layout shifts
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    window.addEventListener('resize', refresh);

    const t1 = setTimeout(refresh, 200);
    const t2 = setTimeout(refresh, 800);
    const t3 = setTimeout(refresh, 1800);

    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', refresh);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#090909] selection:bg-black selection:text-white antialiased">
      {/* 1. Sticky Header with exact vector logotype and contact actions */}
      <NordostHeader />

      {/* 2. Main Studio Experience */}
      <main id="main">
        {/* Light Hero with Headline, Cal discovery call button, and wide stage presentation image */}
        <NordostHero onBookCall={handleOpenBooking} />

        {/* Light: Why invest in brand (3 Research study cards) */}
        <NordostWhyInvest />

        {/* Dark (#090909): How we can help (Services) & Recent Work (3 Project Cards) */}
        <NordostServicesAndWork onSelectProject={handleSelectProject} />

        {/* Dark (#090909): Clients and Partners Testimonials Carousel with Avatars */}
        <NordostTestimonials />

        {/* Light: How we work (3 Core Principles) */}
        <NordostHowWeWork />

        {/* Light: Interested in working with us? (Closing CTA) */}
        <NordostCta onBookCall={handleOpenBooking} />
      </main>

      {/* 3. Dark (#090909) Footer with live Vienna clock and monumental NORDOST vector wordmark */}
      <NordostFooter />

      {/* Interactive Modals */}
      <NordostBookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
      <NordostProjectModal projectId={selectedProjectId} onClose={handleCloseProject} />
    </div>
  );
};
