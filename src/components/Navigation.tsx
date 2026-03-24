"use client";

import { useState, useEffect } from "react";

const menuItems = [
  { label: "회사소개", href: "#top" },
  { label: "사업영역", href: "#business" },
  { label: "신뢰와 실적", href: "#trust" },
  { label: "문의하기", href: "#contact" },
];

const categoryTabs = [
  "인기상품", "신상품", "미끄럼방지양말", "키즈용품", "안전용품", "특가/혜택",
];

const sectionIds = ["top", "business", "trust", "contact"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [activeTab, setActiveTab] = useState("인기상품");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
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
    <>
      {/* Row 1: Main Header */}
      <div className="bg-white border-b border-warm-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <a
              href="#top"
              onClick={(e) => handleClick(e, "#top")}
              className="font-semibold text-lg lg:text-xl text-dark flex-shrink-0"
            >
              Balsan Market
            </a>

            {/* Search — desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="미끄럼방지 양말 검색"
                  className="w-full border border-accent rounded-full pl-5 pr-10 py-2.5 text-sm outline-none focus:ring-1 focus:ring-accent transition-all"
                />
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-accent"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              {/* Search icon — mobile only */}
              <button type="button" aria-label="검색" className="md:hidden text-dark">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>

              {/* Heart/Wish */}
              <button type="button" aria-label="찜 목록" className="hidden md:block text-dark hover:text-accent transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>

              {/* Cart */}
              <button type="button" aria-label="장바구니" className="relative text-dark hover:text-accent transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-dark text-[10px] font-medium rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile hamburger */}
              <button
                type="button"
                className="md:hidden flex flex-col justify-center gap-1.5 w-7 h-7"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="메뉴 열기"
                aria-expanded={isOpen}
              >
                <span className={`block h-px w-5 bg-dark transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-px w-5 bg-dark transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px w-5 bg-dark transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${isOpen ? "max-h-80" : "max-h-0"}`}>
          <ul className="px-4 py-3 space-y-1 border-t border-warm-border">
            {menuItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block py-2.5 text-sm transition-colors duration-300 ${
                      isActive ? "text-accent font-medium" : "text-dark hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Row 2: Category Bar — sticky */}
      <nav className="sticky top-0 z-50 bg-white border-b border-warm-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex items-center h-12 gap-6">
            {/* Category hamburger — desktop */}
            <button type="button" className="hidden md:flex items-center gap-2 text-dark text-sm font-medium flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              카테고리
            </button>

            <div className="hidden md:block w-px h-5 bg-warm-border flex-shrink-0" />

            {/* Tabs */}
            <div className="flex-1 overflow-x-auto">
              <div className="flex items-center gap-1 md:gap-2 min-w-max">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 text-sm whitespace-nowrap transition-colors duration-200 ${
                      activeTab === tab
                        ? "text-accent font-medium border-b-2 border-accent"
                        : "text-dark hover:text-accent"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Right text — desktop */}
            <span className="hidden lg:block text-xs text-warm-gray flex-shrink-0">
              전국 무료배송
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
