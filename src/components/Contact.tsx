import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../data/siteData";

const Contact: React.FC = () => {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setStatus("EmailJS is not configured. Please check your .env file.");
      console.error("EmailJS environment variables are not set!");
      return;
    }

    // Get user's local timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const templateParams = {
      name: fromName,
      email: fromEmail,
      message: message,
      time:
        new Date().toLocaleString("en-US", {
          timeZone: userTimezone,
          dateStyle: "full",
          timeStyle: "long",
        }) + ` (${userTimezone})`,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        setStatus("Thank you! Your message has been sent successfully.");
        setFromName("");
        setFromEmail("");
        setMessage("");
      },
      (error) => {
        setStatus("Failed to send the message. Please try again.");
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-2">
            Have a project in mind? Let's talk about how we can help.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 p-8 rounded-xl shadow-sm">
          <form className="space-y-6" onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300 disabled:bg-gray-400"
              >
                Send Message
              </button>
            </div>
            {status && (
              <p className="text-center text-gray-600 mt-4">{status}</p>
            )}
          </form>
          <div className="space-y-6 text-gray-600">
            <h3 className="text-xl font-bold text-gray-800">
              Contact Information
            </h3>
            <p>
              We're here to answer any questions you may have. Reach out to us
              and we'll respond as soon as we can.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                let href = "";

                if (item.text.startsWith("+")) {
                  href = `tel:${item.text.replace(/[^+\d]/g, "")}`;
                } else if (item.text.includes("@")) {
                  href = `mailto:${item.text}`;
                }

                return (
                  <div
                    key={item.text + (item.address?.join("-") || "")}
                    className="flex items-start space-x-3"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                      className="text-orange-500 mt-1 h-6 w-6 flex-shrink-0"
                    />

                    {href ? (
                      <a
                        href={href}
                        className="hover:text-orange-500 transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : item.address ? (
                      <div className="space-y-1">
                        {item.address.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
