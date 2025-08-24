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

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold">EvoX: Evolutionary Computation Reimagined</h1>
          <p className="text-lg">A powerful, flexible distributed and GPU-accelerated framework for evolutionary algorithms in modern AI workflows.</p>
          <div className="flex justify-center space-x-4 mt-8">
            <Link href="/docs">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </a>
            </Link>
            <a href="https://github.com/EMI-Group/evox" target="_blank" rel="noreferrer" className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
              GitHub Repo
            </a>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Install
            </button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="p-4 bg-white shadow-md">
        <h2 className="text-3xl font-bold">Key Features</h2>
        <ul className="list-disc space-y-2 mt-4">
          <li>High-Performance Computing</li>
          <li>All-in-One Solution</li>
          <li>Easy-to-Use Design</li>
          <li>Versatile Benchmarking</li>
          <li>Flexible Visualization</li>
        </ul>
      </section>

      {/* Code Example Section */}
      <section className="p-4 bg-white shadow-md">
        <h2 className="text-3xl font-bold">Code Example</h2>
        <pre className="mt-4">
          <code>
            {`
import torch
from evox.algorithms import PSO
from evox.problems.numerical import Ackley
from evox.workflows import StdWorkflow, EvalMonitor

algorithm = PSO(pop_size=100, lb=-32 * torch.ones(10), ub=32 * torch.ones(10))
problem = Ackley()
monitor = EvalMonitor()
workflow = StdWorkflow(algorithm, problem, monitor)
workflow.init_step()
for i in range(100):
    workflow.step()

monitor.plot()
            `}
          </code>
        </pre>
      </section>

      {/* Community / Ecosystem Section */}
      <section className="p-4 bg-white shadow-md">
        <h2 className="text-3xl font-bold">Community / Ecosystem</h2>
        <ul className="list-disc space-y-2 mt-4">
          <li>
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
