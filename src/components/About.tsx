import React from 'react';

const About: React.FC = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://placehold.co/600x400/f97316/ffffff?text=Our+Team"
            alt="AAPTech Team"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            AAPTech is a forward-thinking technology consulting firm dedicated
            to helping businesses thrive in the digital age. Our team of experts
            brings a wealth of experience and a passion for technology to every
            project.
          </p>
          <p className="text-gray-600 mb-6">
            We believe in building strong partnerships with our clients, founded
            on trust, transparency, and a shared commitment to success. Our
            mission is to demystify technology and make it a powerful asset for
            your growth.
          </p>
          <a
            href="#contact"
            className="text-orange-500 font-semibold hover:underline"
          >
            Connect with us &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;