"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMonitor,
  FiPenTool,
  FiBarChart2,
  FiExternalLink,
  FiX,
  FiCheckCircle,
} from "react-icons/fi";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FiMonitor />,
      title: "Software Development",
      desc: "Robust architectures and scalable code built for high-performance enterprise systems and disruptive startups.",
      details: [
        "Custom website and web application development",
        "Frontend and backend development",
        "Responsive and mobile-friendly design",
        "API integration and database setup",
        "Secure, scalable, and high-performance code",
      ],
    },
    {
      icon: <FiPenTool />,
      title: "Graphic Designer",
      desc: "Bespoke visual identities that bridge technical precision and human emotion.",
      details: [
        "Logo design and brand identity",
        "Social media poster design",
        "Business card and brochure design",
        "UI visual design for websites",
        "Creative designs based on brand style",
      ],
    },
    {
      icon: <FiBarChart2 />,
      title: "Digital Marketing",
      desc: "Data-driven growth strategies that leverage optimization and creative storytelling.",
      details: [
        "Social media marketing strategy",
        "SEO optimization for websites",
        "Content planning and campaign ideas",
        "Brand reach and engagement improvement",
        "Performance tracking and growth analysis",
      ],
    },
  ];

  return (
    <section className="bg-[#fafafa] py-9 md:py-[55px] md:min-h-[540px]">
      <div className="max-w-[1165px] mx-auto px-5 md:px-6">
        <h2 className="text-[#111827] text-[30px] leading-[36px] md:text-[44px] md:leading-[50px] font-extrabold tracking-[-1px] mb-3 md:mb-5">
          Our Core Capabilities
        </h2>

        <p className="text-[#111827] text-[14px] leading-[24px] md:text-[20px] md:leading-[32px] max-w-[760px] mb-6 md:mb-[45px]">
          We provide a full spectrum of digital services designed to scale your brand and
          <br className="hidden md:block" />
          engage your audience through intentional design.
        </p>

        <div className="grid md:grid-cols-3 gap-5 md:gap-[48px]">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
              className="bg-[#f3f3f3] rounded-[22px] md:rounded-[28px] px-6 md:px-10 py-6 md:py-9 md:min-h-[300px]"
            >
              <div className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] rounded-[10px] bg-[#0646d8] text-white flex items-center justify-center text-[20px] md:text-[22px] mb-5 md:mb-7">
                {item.icon}
              </div>

              <h3 className="text-[#111827] text-[22px] leading-[27px] md:text-[26px] md:leading-[31px] font-bold mb-3 md:mb-6">
                {item.title}
              </h3>

              <p className="text-[#111827] text-[14px] leading-[25px] md:text-[16px] md:leading-[30px] font-medium mb-4 md:mb-6">
                {item.desc}
              </p>

              <button
                onClick={() => setSelectedService(item)}
                className="flex items-center gap-3 md:gap-4 text-[#0646d8] text-[12px] md:text-[14px] font-bold uppercase"
              >
                Learn More
                <FiExternalLink className="text-[18px] md:text-[21px]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-[24px] max-w-[560px] w-full p-6 md:p-8 shadow-2xl"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-[#111827] text-[24px]"
              >
                <FiX />
              </button>

              <div className="w-[55px] h-[55px] rounded-[14px] bg-[#0646d8] text-white flex items-center justify-center text-[24px] mb-5">
                {selectedService.icon}
              </div>

              <h3 className="text-[#111827] text-[26px] md:text-[32px] font-extrabold mb-4">
                {selectedService.title}
              </h3>

              <p className="text-[#4b5563] text-[15px] md:text-[16px] leading-[28px] mb-6">
                {selectedService.desc}
              </p>

              <div className="space-y-4">
                {selectedService.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#0646d8] text-[20px] mt-1 shrink-0" />
                    <p className="text-[#111827] text-[14px] md:text-[16px] leading-[26px] font-medium">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="mt-7 w-full bg-[#0646d8] text-white py-3 rounded-[14px] font-bold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}