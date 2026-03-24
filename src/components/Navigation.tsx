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
  const [searchOpen, setSearchOpen] = useState(false);
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
    <nav className="sticky top-0 z-50 bg-white border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => handleClick(e, "#top")}
            className="font-semibold text-xl text-dark"
          >
            Balsan Market
          </a>

          {/* Desktop Menu + Icons */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-sm transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-dark hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Divider */}
            <div className="w-px h-5 bg-warm-border" />

            {/* Search Icon */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="검색"
              className="text-dark hover:text-accent transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Cart Icon */}
            <button
              type="button"
              aria-label="장바구니"
              className="relative text-dark hover:text-accent transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-dark text-[10px] font-medium rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile: Icons + Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="검색"
              className="text-dark"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="장바구니"
              className="relative text-dark"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-dark text-[10px] font-medium rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col justify-center gap-1.5 w-8 h-8"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="메뉴 열기"
              aria-expanded={isOpen}
            >
              <span className={`block h-px w-6 bg-dark transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-dark transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-dark transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Slide Down */}
      <div className={`overflow-hidden transition-all duration-300 bg-warm-bg ${searchOpen ? "max-h-16" : "max-h-0"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
          <input
            type="text"
            placeholder="상품 검색..."
            className="w-full bg-white border border-warm-border rounded-full px-5 py-2 text-sm outline-none focus:border-accent transition-colors duration-300"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${isOpen ? "max-h-80" : "max-h-0"}`}>
        <ul className="px-6 py-4 space-y-1">
          {menuItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`block py-3 text-sm transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-dark hover:text-accent"
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
