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
            </li>
            <li>
              <NavLink href="#" className="text-gray-600 hover:text-gray-900">
                GitHub
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="text-gray-600 hover:text-gray-900">
                Install
              </NavLink>
import React from 'react';
import { NavLink } from 'app/router';
import Image from 'next/image';
import { HiStar, HiCode } from 'react-icons/hi';
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

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Docs
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Install
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contribute
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              License
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Acknowledgments
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EvoXHomepage;
