"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutVideo() {
  const sectionRef = useRef(null);
  const videoId = "ZVnjOPwW4ZA";
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPlay(entry.isIntersecting);
      },
      { threshold: 0.55 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 max-[480px]:py-9 max-[320px]:py-7 bg-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3">
        <div className="relative rounded-[8px] overflow-hidden border border-[#dbeafe] h-[430px] max-[768px]:h-[330px] max-[480px]:h-[230px] max-[360px]:h-[205px] max-[320px]:h-[185px]">
          {play ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0&modestbranding=1`}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <img
              src="/about/video-bg.png"
              alt="video"
              className="w-full h-full object-cover"
            />
          )}

          <h2 className="absolute top-4 left-4 z-20 text-[16px] max-[320px]:text-[13px] font-bold text-white">
            NEON_AGENCY
          </h2>
        </div>
      </div>
    </section>
  );
}