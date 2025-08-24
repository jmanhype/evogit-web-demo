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
            </li>
            <li>
              <NavLink href="#" className="text-gray-600 hover:text-gray-900">
                Community
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">EvoX: Evolutionary Computation Reimagined</h1>
          <p className="text-lg mb-8">
            A powerful, flexible distributed and GPU-accelerated framework for evolutionary algorithms in modern AI workflows.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              GitHub Repo
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Install
            </button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="flex flex-wrap justify-center">
            <li className="w-full md:w-1/2 xl:w-1/3 p-6">
              <HiStar className="text-yellow-500" size={24} />
              <h3 className="text-lg font-bold mb-2">High-Performance Computing</h3>
              <p className="text-gray-600">
                Supports acceleration on heterogeneous hardware, including both CPUs and GPUs, achieving over 100x speedups.
              </p>
            </li>
            <li className="w-full md:w-1/2 xl:w-1/3 p-6">
              <HiCode className="text-gray-500" size={24} />
              <h3 className="text-lg font-bold mb-2">Easy-to-Use Design</h3>
              <p className="text-gray-600">
                Fully compatible with PyTorch and its ecosystem, simplifying algorithmic development with a tailored programming model.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Code Example</h2>
          <pre className="bg-gray-100 p-4 rounded">
            <code>
              {`
import torch
from evox.algorithms import PSO
from evox.problems.numerical import Ackley
from evox.workflows import StdWorkflow, EvalMonitor

# torch.set_default_device("cuda") # Uncomment this line if you want to use GPU by default

algorithm = PSO(pop_size=100, lb=-32 * torch.ones(10), ub=32 * torch.ones(10))
problem = Ackley()
monitor = EvalMonitor()
workflow = StdWorkflow(algorithm, problem, monitor)
workflow.init_step()
for i in range(100):
  workflow.step()

monitor.plot() # or monitor.plot().show() if you are using headless mode
`}
            </code>
          </pre>
        </div>
      </section>

      {/* Community / Ecosystem Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Community / Ecosystem</h2>
          <ul className="flex flex-wrap justify-center">
            <li className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-lg font-bold mb-2">GitHub</h3>
              <p className="text-gray-600">
                Check out our GitHub repository for the latest updates and contributions.
              </p>
            </li>
            <li className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-lg font-bold mb-2">Discord Community</h3>
              <p className="text-gray-600">
                Join our Discord community to connect with other users and contributors.
              </p>
            </li>
          </ul>
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
