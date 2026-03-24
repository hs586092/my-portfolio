"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    title: "유아용 양말",
    description: "부드러운 소재와 안전한 디자인으로 아기의 발을 보호합니다",
    image: "https://images.unsplash.com/photo-1542355581-caf7454785ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc29ja3MlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQzMTc2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "유아용 양말",
  },
  {
    title: "어린이용 실내화",
    description: "키즈카페와 어린이집에 최적화된 편안한 실내화",
    image: "https://images.unsplash.com/photo-1763256340027-41477e097519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNob2VzJTIwaW5kb29yfGVufDF8fHx8MTc3NDMxNzY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "실내화",
  },
  {
    title: "어린이용 미끄럼방지 양말",
    description: "안전한 활동을 위한 프리미엄 미끄럼방지 양말",
    image: "https://images.unsplash.com/photo-1632337948797-ba161d29532b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xvdGhpbmclMjBwcm9kdWN0fGVufDF8fHx8MTc3NDMxNzY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "어린이용 미끄럼방지 양말",
  },
];

export default function BusinessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="business" className="bg-white py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2
          className={`text-4xl lg:text-5xl font-bold text-[#111] mb-16 transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          사업영역
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group space-y-6 transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="aspect-square bg-[#f5f5f5] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-[#111] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
