import React from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import FeaturesSection from "./components/FeaturesSection";
import AISection from "./components/AISection";
import TestimonialsSection from "./components/TestimonialsSection";
import IntegrationsSection from "./components/IntegrationsSection";
import SolutionsSection from "./components/SolutionsSection";
import SupportSection from "./components/SupportSection";
import DirectBookingSection from "./components/DirectBookingSection";
import CustomerStoriesSection from "./components/CustomerStoriesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <AISection />
        <TestimonialsSection />
        <IntegrationsSection />
        <SolutionsSection />
        <SupportSection />
        <DirectBookingSection />
        <CustomerStoriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
