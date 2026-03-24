"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "10+", label: "업력(년)" },
  { value: "500+", label: "누적 거래처" },
  { value: "100만+", label: "누적 판매량" },
  { value: "99%", label: "고객 만족도" },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[3/2] bg-warm-bg flex items-center justify-center rounded-xl"
              >
                <span className="text-warm-gray text-sm">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
