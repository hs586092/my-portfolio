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
    <section id="trust" className="bg-[#f5f5f5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2
          ref={statsRef}
          className={`text-4xl lg:text-5xl font-bold text-[#111] mb-20 text-center transition-all duration-600 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          신뢰와 실적
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-600 ${
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: statsVisible ? `${200 + index * 120}ms` : "0ms" }}
            >
              <div className="text-5xl lg:text-6xl font-bold text-[#111] mb-3">
                {stat.value}
              </div>
              <div className="text-lg text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div
          ref={logosRef}
          className={`bg-white py-16 px-8 transition-all duration-600 ${
            logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: logosVisible ? "200ms" : "0ms" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[3/2] bg-[#f5f5f5] flex items-center justify-center"
              >
                <span className="text-gray-400 text-sm">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
