"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const isIphone5 = window.innerWidth <= 320;

    if (isIphone5) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      };
    }

    const handleMove = (e) => {
      if (menuRef.current && menuRef.current.contains(e.target)) return;
      setOpen(false);
    };

    document.addEventListener("touchmove", handleMove, { passive: true });
    document.addEventListener("wheel", handleMove, { passive: true });

    return () => {
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("wheel", handleMove);
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="bg-white max-w-[1180px] mx-auto px-4 h-[64px] flex items-center justify-between">
        <a href="/" onClick={closeMenu}>
          <h1 className="text-[15px] sm:text-[18px] font-extrabold text-[#111]">
            NEON_AGENCY
          </h1>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-500">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="/contact" className="hidden md:block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
          Let’s Talk
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full"
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden fixed left-0 top-[64px] w-full bg-white border-b border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-[calc(100svh-64px)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-3 px-4 py-4 text-[13px] font-semibold text-gray-700 max-h-[calc(100svh-64px)] overflow-y-auto overscroll-contain">
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/projects" onClick={closeMenu}>Projects</a>
          <a href="/services" onClick={closeMenu}>Services</a>
          <a href="/blog" onClick={closeMenu}>Blog</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>

          <a href="/contact" onClick={closeMenu} className="mt-1 w-fit bg-blue-600 text-white px-5 py-2 rounded-full text-[13px]">
            Let’s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}