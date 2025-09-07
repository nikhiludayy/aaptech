import React from "react";
import { services } from '../data/siteData';

const Services: React.FC = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Let our Services Take Your Business to Higher Grounds
        </h2>
        <p className="text-gray-600 mt-2">
          Our services help business to save crucial resources by automating and
          optimizing processes and routine operations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div
              className={`${service.iconBg} rounded-full w-16 h-16 flex items-center justify-center mb-6`}
              dangerouslySetInnerHTML={{ __html: service.icon }}
            ></div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;