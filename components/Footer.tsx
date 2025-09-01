import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center justify-items-center md:text-right">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Image
                src="/assets/Aw.svg"
                alt="AAPTech logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-gray-400">
              Driving Innovation, Delivering Excellence.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03A4.29 4.29 0 0016.06 4c-2.35 0-4.26 1.92-4.26 4.29 0 .34.04.67.11.98-3.54-.18-6.68-1.88-8.79-4.45-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.91 3.56-.71 0-1.37-.22-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.94.07 4.28 4.28 0 004 2.98 8.52 8.52 0 01-5.33 1.84c-.35 0-.69-.02-1.03-.06A12.02 12.02 0 008.29 20c7.55 0 11.68-6.25 11.68-11.68l-.01-.53c.8-.58 1.49-1.3 2.04-2.13z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 AAP Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
