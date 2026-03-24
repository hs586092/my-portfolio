"use client";

import { useState, useEffect } from "react";

const menuItems = [
  { label: "회사소개", href: "#top" },
  { label: "사업영역", href: "#business" },
  { label: "신뢰와 실적", href: "#trust" },
  { label: "문의하기", href: "#contact" },
];

const sectionIds = ["top", "business", "trust", "contact"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === "top") {
          if (scrollPos < (document.getElementById("business")?.offsetTop ?? Infinity)) {
            setActiveSection("top");
          }
          continue;
        }
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => handleClick(e, "#top")}
            className="font-bold text-2xl text-[#111]"
          >
            Balsan Market
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-[#111] transition-colors duration-300 ${
                    isActive ? "text-[#c9a96e]" : "hover:text-[#c9a96e]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴 열기"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-px w-6 bg-[#111] transition-all duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#111] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#111] transition-all duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {menuItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`block py-3 transition-colors duration-300 ${
                    isActive ? "text-[#c9a96e]" : "text-[#111] hover:text-[#c9a96e]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
