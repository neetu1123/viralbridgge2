import React from 'react';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import HeroSection from './components/HeroSection';
import LiveActivityFeed from './components/LiveActivityFeed';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import CreatorMarketplace from './components/CreatorMarketplace';
import DashboardPreview from './components/DashboardPreview';
import AgencyComparison from './components/AgencyComparison';
import FinalCTA from './components/FinalCTA';

export default function HomePage() {
  return (
    <main className="hero-mesh min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <LiveActivityFeed />
      <HowItWorks />
      <PricingSection />
      <CreatorMarketplace />
      <DashboardPreview />
      <AgencyComparison />
      <FinalCTA />
      <Footer />
    </main>
  );
}