import React from 'react';
import { NavLink } from 'app/router';

const NavigationBar = () => {
  return (
    <nav className="bg-white shadow-md py-2">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="EvoX Logo" width={30} height={30} />
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
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
