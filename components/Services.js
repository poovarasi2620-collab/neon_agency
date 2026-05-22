"use client";

import { motion } from "framer-motion";
import { FiMonitor, FiPenTool, FiBarChart2, FiExternalLink } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiMonitor />,
      title: "Software Development",
      desc: "Robust architectures and scalable code built for high-performance enterprise systems and disruptive startups.",
    },
    {
      icon: <FiPenTool />,
      title: "Graphic Designer",
      desc: "Bespoke visual identities that bridge technical precision and human emotion.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Digital Marketing",
      desc: "Data-driven growth strategies that leverage optimization and creative storytelling.",
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

              <button className="flex items-center gap-3 md:gap-4 text-[#0646d8] text-[12px] md:text-[14px] font-bold uppercase">
                Learn More
                <FiExternalLink className="text-[18px] md:text-[21px]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}