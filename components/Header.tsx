"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        <Logo width={156} className="w-[130px] md:w-[156px] shrink-0" variant="dark" />

        <a
          href="mailto:hello@harvestt.com"
          className="btn btn-primary !py-2.5 !px-6 !text-[11px]"
        >
          Speak With Our Team
        </a>
      </nav>
    </header>
  );
}
