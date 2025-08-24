import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineDocument } from 'react-icons/hi';
import Link from 'next/link';
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
