"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    title: "[사업영역 1]",
    description: "[사업 내용을 입력하세요]",
  },
  {
    title: "[사업영역 2]",
    description: "[사업 내용을 입력하세요]",
  },
  {
    title: "어린이용 미끄럼방지 양말",
    description:
      "안전하고 귀여운 디자인의 어린이 미끄럼방지 양말을 유통합니다. 어린이집, 키즈카페 등에 납품하고 있습니다.",
  },
];

export default function BusinessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="business" className="bg-white py-24 md:py-32 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
            사업영역
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-gray-400 text-sm italic">
            [여기에 사업 소개 한줄 요약을 입력하세요]
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms" }}
            >
              {/* Image Placeholder */}
              <div className="flex items-center justify-center h-[150px] bg-[#f0f0f0] border-b border-dashed border-gray-300">
                <span className="text-sm text-gray-400">
                  이미지를 넣어주세요
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-serif text-lg text-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
