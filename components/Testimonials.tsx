import React from 'react';
import { testimonials } from '../data/siteData';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
              <p className="text-gray-600 mt-2">Real stories from businesses we've helped transform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-md">
                    <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                        <img src={testimonial.avatar} alt="Client Avatar" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <p className="font-bold text-gray-800">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                    </div>
                </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
