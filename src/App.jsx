import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import CausesSection from './components/CausesSection';
import EventsSection from './components/EventsSection';
import StoriesSection from './components/StoriesSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import VolunteerModal from './components/VolunteerModal';
import CauseDetailsModal from './components/CauseDetailsModal';

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState({
    code: 'USD',
    symbol: '$',
    label: 'USD ($)',
    rate: 1
  });

  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [selectedCauseForDonation, setSelectedCauseForDonation] = useState(null);

  const [selectedCauseDetails, setSelectedCauseDetails] = useState(null);

  const handleOpenDonate = (cause = null) => {
    setSelectedCauseForDonation(cause);
    setDonateModalOpen(true);
  };

  const handleCloseDonate = () => {
    setDonateModalOpen(false);
    setSelectedCauseForDonation(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-body selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <Navbar 
        onOpenDonate={() => handleOpenDonate()}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />

      {/* Main Sections */}
      <main className="pt-20">
        <Hero 
          onOpenDonate={() => handleOpenDonate()}
          onOpenVolunteer={() => setVolunteerModalOpen(true)}
        />

        <StatsBar 
          selectedCurrency={selectedCurrency}
        />

        <AboutSection />

        <CausesSection 
          onOpenDonateWithCause={(cause) => handleOpenDonate(cause)}
          onSelectCauseDetails={(cause) => setSelectedCauseDetails(cause)}
          selectedCurrency={selectedCurrency}
        />

        <EventsSection />

        <StoriesSection />

        <NewsSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenDonate={() => handleOpenDonate()}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DonationModal 
        isOpen={donateModalOpen}
        onClose={handleCloseDonate}
        selectedCause={selectedCauseForDonation}
        selectedCurrency={selectedCurrency}
      />

      <VolunteerModal 
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />

      <CauseDetailsModal 
        cause={selectedCauseDetails}
        onClose={() => setSelectedCauseDetails(null)}
        onOpenDonateWithCause={(cause) => handleOpenDonate(cause)}
        selectedCurrency={selectedCurrency}
      />
    </div>
  );
}
