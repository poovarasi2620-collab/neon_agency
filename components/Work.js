"use client";

import { motion } from "framer-motion";

export default function Work() {
  const works = [
    {
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
      title: "UI Wireframe Design",
      category: "UI/UX DESIGN",
      desc: "Creative wireframe planning for modern digital products.",
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
      title: "Web Development",
      category: "DEVELOPMENT",
      desc: "Modern scalable frontend development.",
    },
    {
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
      title: "Game UI Design",
      category: "CREATIVE DESIGN",
      desc: "Immersive interface and visual systems.",
    },
  ];

  return (
    <section className="py-9 md:py-[70px] bg-[#fafafa] overflow-hidden">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-[1160px] mx-auto pl-5 md:pl-6">
        <div className="flex items-start justify-between pr-5 md:pr-6 mb-6 md:mb-[55px]">
          <div>
            <p className="text-[#0646d8] text-[10px] md:text-[13px] font-bold tracking-[4px] uppercase mb-2 md:mb-3">
              FEATURED
            </p>

            <h2 className="text-[34px] leading-[38px] md:text-[56px] md:leading-[58px] font-extrabold tracking-[-2px] text-[#111]">
              Our Work
            </h2>
          </div>

          <div className="hidden md:flex items-start gap-5 max-w-[340px]">
            <div className="w-[4px] h-[85px] bg-[#0646d8]" />
            <p className="text-[#666] text-[18px] leading-[34px] font-light">
              We craft immersive digital experiences that combine creativity,
              technology and strategy.
            </p>
          </div>
        </div>

        <div className="hide-scrollbar flex gap-4 md:gap-6 overflow-x-auto pb-2 md:pb-4 pr-5 md:pr-6">
          {works.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group relative flex-shrink-0 w-[245px] h-[315px] md:w-[300px] md:h-[380px] rounded-[20px] md:rounded-[22px] overflow-hidden bg-gray-200 cursor-pointer"
            >
              <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />

              <div className="absolute inset-0 bg-black/20 md:bg-black/0 md:group-hover:bg-black/60 transition duration-500" />

              <div className="absolute left-0 bottom-0 p-5 md:p-6 md:translate-y-[120px] md:group-hover:translate-y-0 transition duration-500">
                <p className="text-blue-300 text-[9px] md:text-[11px] tracking-[2px] md:tracking-[3px] font-bold uppercase mb-2 md:mb-3 md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                  {item.category}
                </p>

                <h3 className="text-white text-[21px] leading-[25px] md:text-[26px] md:leading-[30px] font-bold mb-2 md:mb-3 md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-[12px] leading-5 md:text-[14px] md:leading-7 max-w-[230px] md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                  {item.desc}
                </p>

                <button className="mt-4 md:mt-5 bg-white text-black px-4 md:px-5 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}