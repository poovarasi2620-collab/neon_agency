"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceList() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "web-design-development",
      title: "Website Development",
      image: "/services/service-1.png",
      icon: "🌐",
      desc: "We build modern, responsive, and high-performance websites for businesses.",
      details: [
        "Responsive website design for all screen sizes",
        "Fast loading and SEO-friendly website structure",
        "Modern UI with clean layout and smooth navigation",
        "Business, portfolio, company, and landing page websites",
        "Secure and scalable website development",
      ],
    },
    {
      id: "web-application-development",
      title: "Web Application Development",
      image: "/services/service-2.png",
      icon: "💻",
      desc: "We create scalable web applications with secure and user-friendly features.",
      details: [
        "Custom web application development",
        "Admin dashboard and user management",
        "Database integration and API connection",
        "Authentication, login, and role-based access",
        "Secure, scalable, and performance-focused application",
      ],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      image: "/services/service-3.png",
      icon: "🎨",
      desc: "We create clean, user-friendly interfaces with smooth user experiences.",
      details: [
        "Modern and attractive user interface design",
        "User-friendly navigation and layout planning",
        "Mobile and desktop responsive design",
        "Wireframe, prototype, and visual design",
        "Better user experience for higher engagement",
      ],
    },
    {
      id: "e-commerce-solutions",
      title: "E-Commerce Solutions",
      image: "/services/service-4.png",
      icon: "🛒",
      desc: "We develop complete online shopping platforms with product, cart, and checkout features.",
      details: [
        "Product listing and category management",
        "Cart, wishlist, and checkout system",
        "Payment gateway integration",
        "Order management and customer dashboard",
        "Secure and mobile-friendly shopping experience",
      ],
    },
    {
      id: "system-upgrade-maintenance",
      title: "System Upgrade & Maintenance",
      image: "/services/service-5.png",
      icon: "⚙",
      desc: "We maintain, upgrade, and optimize existing systems for better performance.",
      details: [
        "Existing website and system improvement",
        "Bug fixing and performance optimization",
        "Security updates and version upgrades",
        "Code cleanup and feature enhancement",
        "Regular maintenance for smooth operation",
      ],
    },
    {
      id: "system-support",
      title: "System Support",
      image: "/services/service-6.png",
      icon: "🖥",
      desc: "We provide technical support and system monitoring for smooth business operations.",
      details: [
        "Technical issue checking and fixing",
        "Server and system monitoring support",
        "Website error solving and troubleshooting",
        "Backup and recovery support",
        "Continuous support for business systems",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      image: "/services/service-7.png",
      icon: "📢",
      desc: "We help brands grow online through SEO, ads, and social media strategies.",
      details: [
        "SEO optimization for better search ranking",
        "Social media marketing strategy",
        "Google ads and campaign planning",
        "Content marketing and brand promotion",
        "Growth analysis and performance tracking",
      ],
    },
    {
      id: "cloud-api-integration",
      title: "Cloud & API Integration",
      image: "/services/service-8.png",
      icon: "☁",
      desc: "We connect cloud services and APIs to make your business systems smarter.",
      details: [
        "Third-party API integration",
        "Cloud storage and hosting setup",
        "Payment, SMS, email, and map API connection",
        "Secure data transfer between systems",
        "Automation using cloud-based services",
      ],
    },
    {
      id: "graphic-design",
      title: "Graphic Designer",
      image: "/services/service-9.png",
      icon: "🖌",
      desc: "We design creative posters, branding materials, banners, and social media creatives.",
      details: [
        "Logo and brand identity design",
        "Social media poster and banner design",
        "Brochure, flyer, and business card design",
        "Creative ad design for promotions",
        "Professional visual design for your brand",
      ],
    },
    {
      id: "video-editing",
      title: "Video Editing",
      image: "/services/service-10.png",
      icon: "🎬",
      desc: "We create professional videos, reels, promotional edits, and brand content.",
      details: [
        "Instagram reels and short video editing",
        "Business promotional video editing",
        "Text animation and transition effects",
        "Background music and sound adjustment",
        "Clean, professional, and brand-focused video output",
      ],
    },
  ];

  return (
    <section className="py-10 max-[480px]:py-8 max-[320px]:py-6 bg-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-[85px] bg-white rounded-[10px] overflow-hidden border border-[#dbeafe]"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[175px] max-[360px]:h-[160px] max-[320px]:h-[145px] md:h-[210px] object-cover"
                />

                <div className="absolute top-3 right-3 w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center shadow-md text-[13px]">
                  {service.icon}
                </div>
              </div>

              <div className="p-4 max-[320px]:p-3">
                <h3 className="text-[16px] max-[320px]:text-[15px] font-bold text-[#111827] mb-2">
                  {service.title}
                </h3>

                <p className="text-[12px] leading-[20px] text-gray-500 mb-3 max-[320px]:mb-2">
                  {service.desc}
                </p>

                <button
                  onClick={() => setSelectedService(service)}
                  className="text-[12px] font-semibold text-blue-600"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[13px] max-[320px]:text-[12px] leading-[24px] md:leading-7 text-gray-500 mt-7 md:mt-10 max-w-[920px]">
          Empowering your vision with end-to-end digital solutions tailored for
          growth. From design to development, we build the foundation your
          business needs to thrive in today’s competitive landscape.
        </p>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-[18px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 z-10 w-[32px] h-[32px] rounded-full bg-white shadow-md text-[#111827] font-bold"
              >
                ×
              </button>

              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-[190px] md:h-[240px] object-cover"
              />

              <div className="p-5 md:p-7">
                <div className="w-[45px] h-[45px] rounded-full bg-blue-600 text-white flex items-center justify-center text-[22px] mb-4">
                  {selectedService.icon}
                </div>

                <h2 className="text-[24px] md:text-[30px] font-extrabold text-[#111827] mb-3">
                  {selectedService.title}
                </h2>

                <p className="text-[14px] md:text-[15px] leading-[26px] text-gray-500 mb-5">
                  {selectedService.desc}
                </p>

                <h4 className="text-[16px] font-bold text-[#111827] mb-3">
                  What We Provide
                </h4>

                <div className="space-y-3">
                  {selectedService.details.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <p className="text-[13px] md:text-[14px] leading-[24px] text-[#374151]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="mt-6 w-full bg-blue-600 text-white rounded-[10px] py-3 text-[14px] font-bold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}