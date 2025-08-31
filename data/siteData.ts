import { Service, Testimonial, ContactInfo } from "../types";

export const services: Service[] = [
  {
    title: "Web Design and Development",
    description:
      "We provide full stack development under one roof. We architect the conceptual design, API development using microservice architecture and modernized the existing legacy web application. We have expertise in building SPA, Progressive web apps and hybrid applications.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>',
    iconBg: "bg-orange-100 text-orange-500",
  },
  {
    title: "DevOps & Automation",
    description:
      "We help organization to achieve secure environment, fast deployment, easy recovery and continuous monitoring. We implement CICD, Infrastructure as Code, Configuration as code and integrate automation testing to improve the entire process. ",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
    iconBg: "bg-gray-200 text-gray-600",
  },
  {
    title: "Business Intelligence ",
    description:
      `We solves complex data and analytics challenges that enable your business to:
      / Have a single point of truth
      / Make data driven decisions
      / Discover new markets and opportunities`,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    iconBg: "bg-orange-100 text-orange-500",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions designed to meet your unique business challenges.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
    iconBg: "bg-gray-200 text-gray-600",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with AAPTech was a game-changer for our company. Their expertise in cloud migration was exceptional, resulting in a seamless transition and significant cost savings.",
    name: "Jane Doe",
    title: "CEO, Innovate Corp",
    avatar: "https://placehold.co/48x48/cccccc/ffffff?text=A",
  },
  {
    quote:
      "The custom software solution they developed for us has streamlined our operations and boosted productivity. The team was professional, responsive, and a pleasure to work with.",
    name: "John Smith",
    title: "COO, Future Solutions",
    avatar: "https://placehold.co/48x48/cccccc/ffffff?text=B",
  },
  {
    quote:
      "AAPTech's cybersecurity audit was incredibly thorough. They identified vulnerabilities we didn't know we had and provided a clear roadmap for strengthening our defenses.",
    name: "Samantha Lee",
    title: "IT Director, Growth Co.",
    avatar: "https://placehold.co/48x48/cccccc/ffffff?text=C",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
    text: "I-1628 Chittaranjan Park, New Delhi 110019, India",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>',
    text: "+91-9871817837 (M), +91-11-45108859 (L)",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
    text: "admin@aaptech.com",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>',
    text: "www.aaptech.com",
  },
];
