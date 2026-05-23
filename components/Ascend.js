"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiAtSign, FiCheckCircle, FiX } from "react-icons/fi";

export default function Ascend() {
  const [connected, setConnected] = useState(false);
  const [token, setToken] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectTitle: "",
    message: "",
  });

  const generateToken = () => {
    const randomToken = `NEON-${Math.floor(100000 + Math.random() * 900000)}`;
    setToken(randomToken);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateToken();
    setConnected(true);

    setFormData({
      fullName: "",
      email: "",
      projectTitle: "",
      message: "",
    });
  };

  useEffect(() => {
    if (connected) {
      const timer = setTimeout(() => {
        setConnected(false);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [connected]);

  return (
    <section id="ascend" className="relative bg-[#f3f3f3] py-9 md:py-[55px] overflow-hidden">
      <AnimatePresence>
        {connected && (
          <motion.div
            initial={{ opacity: 0, x: 120, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 120, scale: 0.92 }}
            transition={{ duration: 0.35 }}
            className="fixed top-5 right-5 z-[9999] w-[290px] sm:w-[340px] rounded-[20px] border border-green-200 bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <div className="w-[42px] h-[42px] rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <FiCheckCircle className="text-green-600 text-[22px]" />
                </div>

                <div>
                  <p className="text-green-700 text-[11px] font-extrabold uppercase tracking-[2px]">
                    Initiate Connected
                  </p>

                  <h4 className="text-[#111] text-[16px] font-bold mt-1">
                    Connection Success
                  </h4>

                  <p className="mt-2 inline-block bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full text-[12px] font-bold tracking-[1px]">
                    {token}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setConnected(false)}
                className="text-gray-400 hover:text-black transition"
              >
                <FiX className="text-[18px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            Every great partnership starts with a single message Reach out and
            let’s discuss your next Project.
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

        <motion.form
          onSubmit={handleSubmit}
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
              <input
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                placeholder="e.g Satoshi Nakamoto"
                className="w-full h-[46px] md:h-[52px] bg-[#efefef] px-4 text-[13px] outline-none rounded-[6px]"
              />
            </div>

            <div>
              <label className="block text-[9px] uppercase tracking-[1px] text-[#444] mb-2 md:mb-3 font-semibold">
                Email Protocol
              </label>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="your@email.com"
                className="w-full h-[46px] md:h-[52px] bg-[#efefef] px-4 text-[13px] outline-none rounded-[6px]"
              />
            </div>
          </div>

          <div className="mb-5 md:mb-6">
            <label className="block text-[9px] uppercase tracking-[1px] text-[#444] mb-2 md:mb-3 font-semibold">
              Project Title
            </label>
            <textarea
              required
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              placeholder="Tell us about your mission"
              className="w-full h-[90px] md:h-[110px] bg-[#efefef] px-4 py-4 text-[13px] outline-none resize-none rounded-[6px]"
            />
          </div>

          <div className="mb-6 md:mb-8">
            <label className="block text-[9px] uppercase tracking-[1px] text-[#444] mb-2 md:mb-3 font-semibold">
              Message
            </label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about"
              className="w-full h-[90px] md:h-[110px] bg-[#efefef] px-4 py-4 text-[13px] outline-none resize-none rounded-[6px]"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[50px] md:h-[56px] bg-[#0646d8] rounded-[14px] text-white text-[12px] uppercase tracking-[1px] font-bold shadow-[0_0_18px_rgba(6,70,216,0.35)] hover:bg-[#003fc7] transition"
          >
            Initiate Connection
          </button>
        </motion.form>
      </div>
    </section>
  );
}