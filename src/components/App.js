import React from 'react';
import { NavLink } from 'app/router';
import Image from 'next/image';
import { HiStar, HiCode } from 'react-icons/hi';

const EvoXHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* News / Updates */}
      <div className="bg-blue-500 text-white p-2 text-sm">
        Released EvoX 1.2.1 - EvoX v1.2.1 release is now available, featuring the new Mujoco Playground and an official tutorial!
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-2">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/logo.png" alt="EvoX Logo" width={30} height={30} />
          <ul className="flex items-center space-x-4">
            <li>
              <NavLink href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="text-gray-600 hover:text-gray-900">
                Docs
              </NavLink>
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

      </footer>
    </div>
  );
};

export default EvoXHomepage;
