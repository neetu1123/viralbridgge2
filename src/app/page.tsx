import React from 'react';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import HeroSection from './home/components/HeroSection';
import LiveActivityFeed from './home/components/LiveActivityFeed';
import HowItWorks from './home/components/HowItWorks';
import PricingSection from './home/components/PricingSection';
import CreatorMarketplace from './home/components/CreatorMarketplace';
import DashboardPreview from './home/components/DashboardPreview';
import AgencyComparison from './home/components/AgencyComparison';
import FinalCTA from './home/components/FinalCTA';

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