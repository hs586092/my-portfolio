"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "10+", label: "업력 (년)" },
  { value: "500+", label: "누적 거래처" },
  { value: "100만+", label: "누적 판매량" },
  { value: "99%", label: "고객 만족도" },
];

const logos = ["[로고 1]", "[로고 2]", "[로고 3]", "[로고 4]", "[로고 5]", "[로고 6]"];

export default function TrustSection() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();

  return (
    <section id="trust">
      {/* 파트1: 숫자로 보는 실적 */}
      <div className="bg-navy py-24 md:py-32 px-6">
        <div ref={statsRef} className="mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              신뢰와 실적
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: statsVisible ? `${300 + index * 150}ms` : "0ms" }}
              >
                <p className="font-serif text-5xl md:text-6xl font-bold text-gold mb-3">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-300 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 파트2: 주요 거래처 / 인증 */}
      <div className="bg-white py-24 md:py-32 px-6">
        <div ref={logosRef} className="mx-auto max-w-6xl">
          <h3
            className={`font-serif text-2xl md:text-3xl text-navy text-center mb-14 transition-all duration-700 ${
              logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            주요 거래처 및 파트너
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12">
            {logos.map((logo, index) => (
              <div
                key={logo}
                className={`flex items-center justify-center h-20 bg-[#f8f8f8] border border-gray-200 rounded-md transition-all duration-700 ${
                  logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: logosVisible ? `${300 + index * 100}ms` : "0ms" }}
              >
                <span className="text-xs text-gray-400">{logo}</span>
              </div>
            ))}
          </div>

          <p
            className={`text-center text-sm text-gray-400 transition-all duration-700 ${
              logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: logosVisible ? "900ms" : "0ms" }}
          >
            그 외 다수의 어린이집, 키즈카페, 소매점과 거래하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
