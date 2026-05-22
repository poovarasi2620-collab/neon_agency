"use client";

import { motion } from "framer-motion";

export default function Insight() {
  const insights = [
    {
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
      category: "TECH TRENDS / 2034",
      title: "The Resurgence of Retro - Tech Aesthetics",
      desc: "Exploring why modern interfaces are looking back to move forward inn user experience design .",
      active: false,
    },
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
      category: "AI & DESIGN",
      title: "Augmenting Creativity With Ai Models",
      desc: "How Machine learning is becoming the ultimate Co - pilot For high - end digital agency workflows",
      active: true,
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
      category: "BRANDING",
      title: "Minimalism as a Premium Signal",
      desc: "Why Shopping away the noise is the most effective way to communicate luxury in the digital age.",
      active: false,
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-9 md:py-[58px] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 md:px-6">
        <div className="flex items-start justify-between mb-7 md:mb-[45px]">
          <h2 className="text-[#111] text-[29px] md:text-[33px] leading-none font-medium">
            Digital insights
          </h2>

          <button className="text-[#0646d8] text-[9px] md:text-[10px] uppercase tracking-[1.5px] border-b border-[#0646d8] pb-[2px]">
            View Archive
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-7 md:gap-[28px]">
          {insights.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -6 }} transition={{ duration: 0.35 }} className="group">
              <div className="overflow-hidden rounded-[18px] mb-4 md:mb-[18px] bg-black">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[190px] md:h-[230px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <p className={`text-[8px] tracking-[2px] uppercase font-bold mb-2 md:mb-[12px] ${item.active ? "text-[#0646d8]" : "text-[#7c7c7c]"}`}>
                {item.category}
              </p>

              <h3 className={`text-[23px] leading-[31px] md:text-[28px] md:leading-[38px] font-medium mb-2 md:mb-[14px] max-w-[350px] ${item.active ? "text-[#0646d8]" : "text-[#111]"}`}>
                {item.title}
              </h3>

              <p className="text-[#8b8b8b] text-[12px] leading-[22px] md:text-[13px] md:leading-[24px] max-w-[340px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}