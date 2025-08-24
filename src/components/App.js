import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineDocument } from 'react-icons/hi';
import Link from 'next/link';

function EvoXHomepage() {
  return (
    <div className="flex flex-col h-screen">
      {/* News / Updates */}
      <div className="bg-gray-200 p-4 text-sm">
        <span>2025-05-13: Released EvoX 1.2.1 - EvoX v1.2.1 release is now available, featuring the new Mujoco Playground and an official tutorial!</span>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img src="/logo.png" alt="EvoX Logo" className="h-8" />
          <span className="ml-2 text-lg font-bold">EvoX</span>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/docs">
              <a>Docs</a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/EMI-Group/evox" target="_blank" rel="noreferrer">
              <AiOutlineGithub size={20} />
            </a>
          </li>
          <li>
            <Link href="/install">
              <a>Install</a>
            </Link>
          </li>
        </ul>
      </nav>
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineDocument } from 'react-icons/hi';
import Link from 'next/link';
import CodeExample from './CodeExample';
import Community from './Community';
import Footer from './Footer';
import Hero from './Hero';
import KeyFeatures from './KeyFeatures';
import NavigationBar from './NavigationBar';
import News from './News';

function EvoXHomepage() {
  return (
    <div className="flex flex-col h-screen">
      <News />
      <NavigationBar />
      <Hero />
      <KeyFeatures />
      <CodeExample />
      <Community />
      <Footer />
    </div>
  );
}

export default EvoXHomepage;

            <a href="https://github.com/EMI-Group/evox" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://discord.gg/Vbtgcpy7G4" target="_blank" rel="noreferrer">
              Discord Community
            </a>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog / Tutorials</a>
            </Link>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-200 text-sm">
        <div className="flex justify-between">
          <div>
            <Link href="/docs">
              <a>Docs</a>
            </Link>
          </div>
          <div>
            <Link href="/install">
              <a>Install</a>
            </Link>
          </div>
          <div>
            <Link href="/contribute">
              <a>Contribute</a>
            </Link>
          </div>
          <div>
            <Link href="/license">
              <a>License</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default EvoXHomepage;
