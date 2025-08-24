import React from 'react';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import KeyFeaturesSection from './KeyFeaturesSection';
import CodeExampleSection from './CodeExampleSection';
import CommunityEcosystemSection from './CommunityEcosystemSection';
import Footer from './Footer';

const EvoXHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* News / Updates */}
      <div className="bg-blue-500 text-white p-2 text-sm">
        Released EvoX 1.2.1 - EvoX v1.2.1 release is now available, featuring the new Mujoco Playground and an official tutorial!
      </div>

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Key Features Section */}
      <KeyFeaturesSection />

      {/* Code Example Section */}
      <CodeExampleSection />

      {/* Community / Ecosystem Section */}
      <CommunityEcosystemSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EvoXHomepage;
