"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiAtSign } from "react-icons/fi";

export default function Ascend() {
  return (
    <section className="bg-[#f3f3f3] py-9 md:py-[55px] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 md:px-6 grid lg:grid-cols-[360px_1fr] gap-8 lg:gap-[90px] items-start">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-0 md:pt-2"
        >
          <h2 className="text-[#2e2e2e] text-[42px] leading-[42px] md:text-[62px] md:leading-[58px] font-extrabold tracking-[-2px] mb-4 md:mb-5">
            Ready to
            <br />
            <span className="text-[#0646d8] italic">ascend?</span>
          </h2>

          <p className="text-[#707070] text-[14px] leading-[25px] md:text-[18px] md:leading-[33px] max-w-[330px] mb-6 md:mb-10">
            Every great partnership starts with a single
            message Reach out and let’s discuss your next
            Project.
          </p>

          <div className="space-y-5 md:space-y-8">
            <div className="flex gap-4">
              <FiMapPin className="text-[#0646d8] text-[21px] md:text-[22px] mt-1" />
              <div>
                <h4 className="text-black text-[11px] md:text-[12px] font-bold uppercase mb-1 md:mb-2 tracking-[1px]">
                  Global HQ
                </h4>
                <p className="text-[#777] text-[12px] md:text-[13px]">
                  77 Silicon Alley , Newyork , NY 10010
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FiAtSign className="text-[#0646d8] text-[21px] md:text-[22px] mt-1" />
              <div>
                <h4 className="text-black text-[11px] md:text-[12px] font-bold uppercase mb-1 md:mb-2 tracking-[1px]">
                  Secure Email
                </h4>
                <p className="text-[#777] text-[12px] md:text-[13px]">
                  curate@neonagency.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[22px] md:rounded-[28px] p-5 md:p-[34px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] w-full max-w-[720px]"
        >
          <div className="grid md:grid-cols-2 gap-5 md:gap-7 mb-5 md:mb-7">
            <div>
              <label className="block text-[9px] uppercase tracking-[1px] text-[#444] mb-2 md:mb-3 font-semibold">
                Full Name
              </label>
              <input type="text" placeholder="e.g Satoshi Nakamoto" className="w-full h-[46px] md:h-[52px] bg-[#efefef] px-4 text-[13px] outline-none rounded-[6px]" />
            </div>

            <div>
              <label className="block text-[9px] uppercase tracking-[1px] text-[#444] mb-2 md:mb-3 font-semibold">
                Email Protocol
              </label>
              <input type="email" placeholder="your@email.com" className="w-full h-[46px] md:h-[52px] bg-[#efefef] px-4 text-[13px] outline-none rounded-[6px]" />
            </div>
          </div>

          <div className="mb-5 md:mb-6">
            <label className="block text-[9px] uppercase tracking-[1px] text-[#444] mb-2 md:mb-3 font-semibold">
              Full Name
            </label>
            <textarea placeholder="Tell us about your mission" className="w-full h-[90px] md:h-[110px] bg-[#efefef] px-4 py-4 text-[13px] outline-none resize-none rounded-[6px]" />
          </div>

          <div className="mb-6 md:mb-8">
            <label className="block text-[9px] uppercase tracking-[1px] text-[#444] mb-2 md:mb-3 font-semibold">
              Message
            </label>
            <textarea placeholder="Tell us about" className="w-full h-[90px] md:h-[110px] bg-[#efefef] px-4 py-4 text-[13px] outline-none resize-none rounded-[6px]" />
          </div>

          <button className="w-full h-[50px] md:h-[56px] bg-[#0646d8] rounded-[14px] text-white text-[12px] uppercase tracking-[1px] font-bold shadow-[0_0_18px_rgba(6,70,216,0.35)] hover:bg-[#003fc7] transition">
            Initiate Connection
          </button>
        </motion.div>
      </div>
    </section>
  );
}