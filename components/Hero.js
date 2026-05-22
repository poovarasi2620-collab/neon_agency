"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#fafafa] overflow-hidden pt-[105px] pb-4 sm:pt-[115px] sm:pb-8 md:min-h-screen md:flex md:items-center md:pt-[90px] md:pb-12">
      <div className="relative z-10 w-full max-w-[1160px] mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 lg:gap-16">
        
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1 className="text-[#303136] font-extrabold italic tracking-[-1px] text-[32px] leading-[38px] min-[375px]:text-[36px] min-[375px]:leading-[42px] sm:text-[42px] sm:leading-[48px] md:text-[58px] md:leading-[62px] md:tracking-[-3px] lg:text-[68px] lg:leading-[70px] lg:tracking-[-4px]">
            We create standout
            <br />
            <span className="text-[#0646d8]">digital experiences</span>
          </h1>

          <p className="mt-4 text-[#4b5563] font-light mx-auto md:mx-0 text-[14px] leading-[23px] min-[375px]:text-[15px] min-[375px]:leading-[24px] sm:text-[17px] sm:leading-[28px] md:text-[20px] md:leading-[32px] lg:text-[22px] lg:leading-[34px] max-w-[600px]">
            Merging clinical precision with high-energy creativity.
            We don’t just build websites; we curate future-proof
            digital identities.
          </p>

          <div className="mt-5 flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full">
            <button className="bg-[#0646d8] text-white px-8 py-3.5 rounded-[16px] text-[15px] font-semibold shadow-[0_0_25px_rgba(6,70,216,0.35)]">
              Career
            </button>

            <button className="bg-[#e1e1e1] text-[#222] px-8 py-3.5 rounded-[16px] text-[15px] font-semibold">
              Contact
            </button>
          </div>
        </motion.div>

        <div className="relative hidden md:flex h-[360px] lg:h-[430px] items-center justify-center overflow-hidden">
          <motion.img
            src="/hero/line-shape.png"
            alt="line animation"
            className="w-[300px] h-[260px] lg:w-[370px] lg:h-[310px] object-contain opacity-90"
            animate={{ rotate: 360, y: [0, -12, 0] }}
            transition={{
              rotate: { repeat: Infinity, duration: 30, ease: "linear" },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
          />
        </div>
      </div>
    </section>
  );
}