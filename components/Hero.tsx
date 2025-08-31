import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white pt-20 pb-24 md:pt-64 md:pb-64 text-center">
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 relative">
          <h1 className="text-4xl md:text-8xl font-extrabold text-gray-800 leading-tight mb-4">
              Driving <span className="text-orange-500">Innovation</span>, Delivering <span className="text-orange-500">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your trusted partner in navigating the complexities of the digital landscape. We deliver cutting-edge tech consulting and solutions tailored to your business needs.
          </p>
          <a href="#contact" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get a Free Consultation
          </a>
      </div>
    </section>
  );
};

export default Hero;
