import React, { useState } from 'react';
import { contactInfo } from '../data/siteData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.message || 'An error occurred.');
      }
    } catch (error) {
      setStatus('An error occurred while sending the message.');
    }
  };


  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
              <p className="text-gray-600 mt-2">Have a project in mind? Let's talk about how we can help.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 p-8 rounded-xl shadow-sm">
              {/* Contact Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input type="text" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" />
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input type="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" />
                  </div>
                  <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"></textarea>
                  </div>
                  <div>
                      <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300">
                          Send Message
                      </button>
                  </div>
                  {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
              </form>
              {/* Contact Info */}
              <div className="space-y-6 text-gray-600">
                  <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
                  <p>
                      We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
                  </p>
                  <div className="space-y-4">
                     {contactInfo.map((item) => (
                       <div key={item.text} className="flex items-start space-x-3">
                            <div dangerouslySetInnerHTML={{ __html: item.icon }} className="text-orange-500 mt-1 h-6 w-6 flex-shrink-0"></div>
                            <span>{item.text}</span>
                       </div>
                     ))}
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
