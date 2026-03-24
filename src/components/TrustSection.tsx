"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "10+", label: "업력(년)" },
  { value: "500+", label: "누적 거래처" },
  { value: "100만+", label: "누적 판매량" },
  { value: "99%", label: "고객 만족도" },
];

const partners = [
  {
    name: "플레이즈 키즈카페",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 10h.01M15 10h.01" />
      </svg>
    ),
  },
  {
    name: "점핑파크",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M12 12v4" />
        <path d="M8 20l4-4 4 4" />
        <path d="M6 16l2-2" />
        <path d="M18 16l-2-2" />
      </svg>
    ),
  },
  {
    name: "키즈앤키즈",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
        <path d="M9 10v6" />
        <path d="M15 10v6" />
        <path d="M7 20l2-4" />
        <path d="M17 20l-2-4" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
  {
    name: "해피플레이",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    name: "리틀포레스트",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l-4 7h8l-4-7z" />
        <path d="M12 10l-5 8h10l-5-8z" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    name: "점프노리",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22l4-4" />
        <path d="M18 22l4-4" />
        <path d="M6 18q6-12 12 0" />
        <circle cx="12" cy="6" r="3" />
        <path d="M10 9l-2 4" />
        <path d="M14 9l2 4" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();

  return (
    <section id="trust" className="bg-warm-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2
          ref={statsRef}
          className={`text-3xl lg:text-4xl font-semibold text-dark mb-16 text-center transition-all duration-700 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          신뢰와 실적
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center bg-white rounded-2xl py-10 px-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-700 ${
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: statsVisible ? `${200 + index * 120}ms` : "0ms" }}
            >
              <div className="text-4xl lg:text-5xl font-semibold text-dark mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-warm-gray">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div
          ref={logosRef}
          className={`bg-white rounded-2xl py-14 px-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-700 ${
            logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: logosVisible ? "200ms" : "0ms" }}
        >
          <h3 className="text-lg font-semibold text-dark text-center mb-10">주요 거래처 및 파트너</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`flex flex-col items-center justify-center gap-3 py-6 px-3 bg-white border border-warm-border rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${
                  logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: logosVisible ? `${300 + index * 100}ms` : "0ms" }}
              >
                <div className="text-accent">
                  {partner.icon}
                </div>
                <span className="text-xs font-semibold text-dark text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
