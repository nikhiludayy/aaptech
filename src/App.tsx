// import React, { useState } from "react";

// // --- TYPE DEFINITIONS ---
// interface Service {
//   title: string;
//   description: string;
//   icon: string;
//   iconBg: string;
// }

// interface ContactInfo {
//   icon: string;
//   text: string;
// }

// // --- DATA ---
// const services: Service[] = [
//   {
//     title: "Web Design and Development",
//     description:
//       "We provide full stack development under one roof. We architect the conceptual design, API development using microservice architecture and modernized the existing legacy web application. We have expertise in building SPA, Progressive web apps and hybrid applications.",
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>',
//     iconBg: "bg-orange-100 text-orange-500",
//   },
//   {
//     title: "DevOps & Automation",
//     description:
//       "We help organization to achieve secure environment, fast deployment, easy recovery and continuous monitoring. We implement CICD, Infrastructure as Code, Configuration as code and integrate automation testing to improve the entire process. ",
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
//     iconBg: "bg-gray-200 text-gray-600",
//   },
//   {
//     title: "Business Intelligence ",
//     description: `We solves complex data and analytics challenges that enable your business to:
//       / Have a single point of truth
//       / Make data driven decisions
//       / Discover new markets and opportunities`,
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
//     iconBg: "bg-orange-100 text-orange-500",
//   },
//   {
//     title: "Software Development",
//     description:
//       "Custom software solutions designed to meet your unique business challenges.",
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
//     iconBg: "bg-gray-200 text-gray-600",
//   },
// ];

// const contactInfo: ContactInfo[] = [
//   {
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
//     text: "I-1628 Chittaranjan Park, New Delhi 110019, India",
//   },
//   {
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>',
//     text: "+91-9871817837 (M), +91-11-45108859 (L)",
//   },
//   {
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
//     text: "admin@aaptech.com",
//   },
//   {
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>',
//     text: "www.aaptech.com",
//   },
// ];

// const Header: React.FC = () => (
//   <header className="bg-white/10 backdrop-blur-lg shadow-sm sticky top-0 z-50">
//     <nav className="container mx-auto px-32 py-6 flex justify-between items-center">
//       <div className="flex items-center space-x-2">
//          <a
//           href="#home"
//         >
//           <img src="/assets/aaptech.svg" alt="AAPTech logo" width={120} height={120} />
//         </a>
        
//       </div>
//       <div className="hidden md:flex items-center space-x-8 text-lg">
//         <a
//           href="#home"
//           className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
//         >
//           Home
//         </a>
//         <a
//           href="#services"
//           className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
//         >
//           Services
//         </a>
//         <a
//           href="#about"
//           className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
//         >
//           About Us
//         </a>
//         <a
//           href="#contact"
//           className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
//         >
//           Contact
//         </a>
//       </div>
//       <button className="md:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-orange-500 hover:border-orange-500">
//         <svg
//           className="fill-current h-3 w-3"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <title>Menu</title>
//           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-3z" />
//         </svg>
//       </button>
//     </nav>
//   </header>
// );

// const Hero: React.FC = () => (
//   <section
//     id="home"
//     className="relative bg-white pt-20 pb-24 md:pt-64 md:pb-64 text-center"
//   >
//     <div
//       className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"
//       style={{
//         backgroundImage:
//           "linear-gradient(to right, rgba(229, 231, 235, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(229, 231, 235, 0.5) 1px, transparent 1px)",
//         backgroundSize: "2rem 2rem",
//       }}
//     ></div>
//     <div className="container mx-auto px-6 relative">
//       <h1 className="text-4xl md:text-8xl font-extrabold text-gray-800 leading-tight mb-4">
//         Driving <span className="text-orange-500">Innovation</span>, Delivering{" "}
//         <span className="text-orange-500">Excellence</span>
//       </h1>
//       <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//         Your trusted partner in navigating the complexities of the digital
//         landscape. We deliver cutting-edge tech consulting and solutions
//         tailored to your business needs.
//       </p>
//       <a
//         href="#contact"
//         className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
//       >
//         Get a Free Consultation
//       </a>
//     </div>
//   </section>
// );

// const Services: React.FC = () => (
//   <section id="services" className="py-20 bg-gray-50">
//     <div className="container mx-auto px-6">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Let our Services Take Your Business to Higher Grounds
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Our services help business to save crucial resources by automating and
//           optimizing processes and routine operations.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((service) => (
//           <div
//             key={service.title}
//             className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
//           >
//             <div
//               className={`${service.iconBg} rounded-full w-16 h-16 flex items-center justify-center mb-6`}
//               dangerouslySetInnerHTML={{ __html: service.icon }}
//             ></div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               {service.title}
//             </h3>
//             <p className="text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// const About: React.FC = () => (
//   <section id="about" className="py-20 bg-white">
//     <div className="container mx-auto px-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div>
//           <img
//             src="https://placehold.co/600x400/f97316/ffffff?text=Our+Team"
//             alt="AAPTech Team"
//             className="rounded-xl shadow-lg w-full"
//           />
//         </div>
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Who We Are
//           </h2>
//           <p className="text-gray-600 mb-4">
//             AAPTech is a forward-thinking technology consulting firm dedicated
//             to helping businesses thrive in the digital age. Our team of experts
//             brings a wealth of experience and a passion for technology to every
//             project.
//           </p>
//           <p className="text-gray-600 mb-6">
//             We believe in building strong partnerships with our clients, founded
//             on trust, transparency, and a shared commitment to success. Our
//             mission is to demystify technology and make it a powerful asset for
//             your growth.
//           </p>
//           <a
//             href="#contact"
//             className="text-orange-500 font-semibold hover:underline"
//           >
//             Connect with us &rarr;
//           </a>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [id]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     if (formData.name && formData.email && formData.message) {
//       console.log("Form Submitted:", formData);
//       setStatus("Thank you! Your message has been sent successfully.");
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       setStatus("Please fill out all fields before sending.");
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Get In Touch
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Have a project in mind? Let's talk about how we can help.
//           </p>
//         </div>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 p-8 rounded-xl shadow-sm">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
//               ></textarea>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300 disabled:bg-gray-400"
//               >
//                 Send Message
//               </button>
//             </div>
//             {status && (
//               <p className="text-center text-gray-600 mt-4">{status}</p>
//             )}
//           </form>
//           <div className="space-y-6 text-gray-600">
//             <h3 className="text-xl font-bold text-gray-800">
//               Contact Information
//             </h3>
//             <p>
//               We're here to answer any questions you may have. Reach out to us
//               and we'll respond as soon as we can.
//             </p>
//             <div className="space-y-4">
//               {contactInfo.map((item) => (
//                 <div key={item.text} className="flex items-start space-x-3">
//                   <div
//                     dangerouslySetInnerHTML={{ __html: item.icon }}
//                     className="text-orange-500 mt-1 h-6 w-6 flex-shrink-0"
//                   ></div>
//                   <span>{item.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Footer: React.FC = () => (
//   <footer className="bg-gray-800 text-white">
//     <div className="container mx-auto px-6 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center justify-items-center md:text-right">
//         <div>
//           <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
//             <img
//               src="/assets/Aw.svg"
//               alt="AAPTech logo"
//               width={100}
//               height={100}
//             />
//           </div>
//           <p className="text-gray-400">
//             Driving Innovation, Delivering Excellence.
//           </p>
//         </div>
//         <div>
//           <h4 className="font-bold mb-4">Quick Links</h4>
//           <ul className="space-y-2">
//             <li>
//               <a href="#home" className="text-gray-400 hover:text-white">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="text-gray-400 hover:text-white">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="text-gray-400 hover:text-white">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="text-gray-400 hover:text-white">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold mb-4">Connect With Us</h4>
//           <div className="flex justify-center md:justify-start space-x-4">
//             <a href="#" className="text-gray-400 hover:text-white">
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03A4.29 4.29 0 0016.06 4c-2.35 0-4.26 1.92-4.26 4.29 0 .34.04.67.11.98-3.54-.18-6.68-1.88-8.79-4.45-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.91 3.56-.71 0-1.37-.22-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.94.07 4.28 4.28 0 004 2.98 8.52 8.52 0 01-5.33 1.84c-.35 0-.69-.02-1.03-.06A12.02 12.02 0 008.29 20c7.55 0 11.68-6.25 11.68-11.68l-.01-.53c.8-.58 1.49-1.3 2.04-2.13z" />
//               </svg>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
//         <p>&copy; 2025 AAP Technologies. All Rights Reserved.</p>
//       </div>
//     </div>
//   </footer>
// );

// function App() {
//   return (
//     <div className="bg-gray-50 font-sans text-gray-800">
//       <Header />
//       <main>
//         <Hero />
//         <Services />
//         <About />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;