import React from "react";

const Header: React.FC = () => (
  <header className="bg-white/10 backdrop-blur-lg shadow-sm sticky top-0 z-50">
    <nav className="container mx-auto px-32 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <a href="#home">
          <img
            src="/assets/aaptech.svg"
            alt="AAPTech logo"
            width={120}
            height={120}
          />
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-lg">
        <a
          href="#home"
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#services"
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
        >
          Services
        </a>
        <a
          href="#about"
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
        >
          About Us
        </a>
        <a
          href="#contact"
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
        >
          Contact
        </a>
      </div>
      <button className="md:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-orange-500 hover:border-orange-500">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-3z" />
        </svg>
      </button>
    </nav>
  </header>
);

export default Header;
