"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const goHomeTop = (e) => {
  if (window.location.pathname === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#dff8ff] overflow-hidden pt-12 md:pt-[70px] pb-5 md:pb-[25px]">
      <div className="absolute top-0 left-0 w-full h-[34px] md:h-[42px] bg-[#0047ff] rounded-br-[100%] z-10" />
      <div className="absolute inset-0 bg-[#dff8ff] z-[1]" />

      <div className="relative z-20 max-w-[1180px] mx-auto px-5 md:px-[12px]">
        <div className="mb-6 md:mb-8">
          <a href="/" onClick={goHomeTop}>
            <h2 className="text-[#0057ff] text-[12px] font-bold tracking-[2px] mb-3 md:mb-4">
              NEON _ AGENCY
            </h2>
          </a>

          <p className="text-[11px] leading-[21px] md:leading-[22px] text-black">
            Empowering businesses with innovative digital solutions.
            We specialize in web development, UI/UX design, branding,
            and marketing to help brands grow digitally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-8">
          {[
            {
              title: "Quick Links",
              links: ["Home", "About Us", "Services", "Courses / Products", "Contact"],
            },
            {
              title: "Our Services",
              links: ["Web Design & Development", "UI/UX Design", "Digital Marketing", "Graphic Design", "Video Editing"],
            },
          ].map((group, i) => (
            <div key={i}>
              <h3 className="text-[#0057ff] text-[13px] font-bold mb-2 md:mb-3">
                {group.title}
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-[11px] text-black">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="/" className="hover:text-[#0057ff] transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[#0057ff] text-[13px] font-bold mb-2 md:mb-3">
              Follow Us
            </h3>

            <ul className="space-y-2 md:space-y-3 text-[11px] text-black">
              {[
                ["Instagram", FaInstagram, "#E4405F"],
                ["Facebook", FaFacebookF, "#1877F2"],
                ["LinkedIn", FaLinkedinIn, "#0A66C2"],
                ["YouTube", FaYoutube, "#FF0000"],
              ].map(([name, Icon, color]) => (
                <li key={name}>
                  <a href="/" className="flex items-center gap-3 hover:text-[#0057ff] transition">
                    <span
                      className="w-[22px] h-[22px] rounded-[5px] text-white flex items-center justify-center"
                      style={{ backgroundColor: color }}
                    >
                      <Icon size={11} />
                    </span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#0057ff] text-[13px] font-bold mb-2 md:mb-3">
              Contact Us
            </h3>

            <ul className="space-y-1.5 md:space-y-2 text-[11px] text-black">
              <li>📍 Coimbatore, Tamil Nadu, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉ info@yourcompany.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-7 md:pt-[35px] text-center">
          <p className="text-[10px] text-black leading-[18px]">
            © 2026 Your NEON _ AGENCY. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}