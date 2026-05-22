"use client";

import { motion } from "framer-motion";

export default function Trusted() {
  const leaders = [
    {
      quote:
        "NEON _ AGENCY redefined our digital presence their attention to detail and ability to blend technical Performance with high - end aesthetic is unmatched in the industry .",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Alex Rivera",
      role: "CEO,VERTEX_FLOW",
    },
    {
      quote:
        "The team didn’t just deliver a website ; they delivered a strategic asset that has increased our conversion By 40% process is pure clinical precision.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Chen",
      role: "DIRECTOR OF UX,LUX_MEDIA",
    },
  ];

  return (
    <section className="bg-[#e6e6e6] py-8 md:py-[30px] md:min-h-[360px] border-t-[2px] border-b-[2px] border-[#0698ff]">
      <div className="max-w-[1110px] mx-auto px-5 md:px-6">
        <div className="text-center mb-6 md:mb-[38px]">
          <h2 className="text-[#111] text-[25px] leading-[32px] md:text-[28px] md:leading-[35px] font-semibold tracking-[0.5px]">
            Trusted by Market Leaders
          </h2>

          <p className="text-[#222] text-[8px] mt-2">
            Client result are only metric that matters .
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-[26px] max-w-[1000px] mx-auto">
          {leaders.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35 }}
              className="bg-[#f8f8f8] rounded-[14px] px-5 md:px-[27px] pt-5 md:pt-[22px] pb-5 md:pb-[24px]"
            >
              <div className="text-[#0646d8] text-[17px] leading-none mb-3 md:mb-[17px]">
                ❞
              </div>

              <p className="text-[#8a8a8a] text-[12px] leading-[22px] md:text-[13px] md:leading-[24px] italic font-semibold max-w-[415px] mb-4 md:mb-[18px]">
                “{item.quote}”
              </p>

              <div className="flex items-center gap-[13px]">
                <img src={item.image} alt={item.name} className="w-[34px] h-[34px] rounded-full object-cover" />

                <div>
                  <h4 className="text-[#111] text-[10px] font-semibold leading-none mb-[5px]">
                    {item.name}
                  </h4>

                  <p className="text-[#111] text-[6px] uppercase font-bold tracking-[0.2px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}