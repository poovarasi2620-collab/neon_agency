"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#f3f3f3] overflow-hidden py-8 sm:py-10 md:py-0 md:min-h-[530px]">
      <div className="max-w-[1170px] mx-auto px-5 md:px-6 md:min-h-[530px] grid grid-cols-1 md:grid-cols-[42%_1fr] gap-7 md:gap-10 lg:gap-[105px] items-center">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 w-full max-w-[360px] md:max-w-[460px] mx-auto md:mx-0"
        >
          {[
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-full aspect-square md:h-[265px] object-cover"
            />
          ))}

          <div
            className="absolute left-1/2 top-1/2 w-[100px] h-[100px] md:w-[175px] md:h-[175px] bg-[#0646d8] -translate-x-1/2 -translate-y-1/2"
            style={{
              clipPath:
                "path('M87.5 0 C103 55 120 72 175 87.5 C120 103 103 120 87.5 175 C72 120 55 103 0 87.5 C55 72 72 55 87.5 0 Z')",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-[#0646d8] text-[10px] md:text-[13px] tracking-[4px] md:tracking-[6px] font-bold uppercase mb-3 md:mb-6">
            ABOUT US
          </p>

          <h2 className="text-[#0b0b0b] text-[29px] leading-[35px] md:text-[48px] md:leading-[58px] font-medium tracking-[-1px] mb-3 md:mb-6">
            Premium Design Experts
          </h2>

          <p className="text-[#8d8e98] text-[14px] leading-[24px] md:text-[21px] md:leading-[34px] max-w-[680px] font-semibold mb-6 md:mb-[58px]">
            We are a collective of designers, developers, and visionaries based
            in the heart of the digital frontier. Our philosophy is rooted in
            the belief that great design is not just seen, but experienced.
          </p>

          <div className="flex flex-row justify-center md:justify-start gap-10 lg:gap-[150px] mb-6 md:mb-[48px]">
            <div>
              <h3 className="text-[#0646d8] text-[28px] md:text-[36px] leading-none font-medium mb-2 md:mb-3">
                12+
              </h3>
              <p className="text-black text-[9px] md:text-[12px] tracking-[2px] md:tracking-[6px] uppercase font-bold">
                Years Of Curation
              </p>
            </div>

            <div>
              <h3 className="text-[#0646d8] text-[28px] md:text-[36px] leading-none font-medium mb-2 md:mb-3">
                250+
              </h3>
              <p className="text-black text-[9px] md:text-[12px] tracking-[2px] md:tracking-[6px] uppercase font-bold">
                Global Shipment
              </p>
            </div>
          </div>

          <button className="mx-auto md:mx-0 flex items-center gap-3 md:gap-5 text-[#0646d8] text-[11px] md:text-[17px] tracking-[2px] md:tracking-[6px] uppercase font-bold">
            Meet The Collective
            <span className="text-[22px] md:text-[28px] tracking-normal">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}