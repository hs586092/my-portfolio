"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  "전체",
  "미끄럼방지 양말",
  "[카테고리2]",
  "[카테고리3]",
  "[카테고리4]",
];

const cards = [
  {
    title: "유아용 양말",
    description: "부드러운 소재와 안전한 디자인으로 아기의 발을 보호합니다",
    price: "[가격 미정]",
    image: "https://images.unsplash.com/photo-1542355581-caf7454785ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc29ja3MlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQzMTc2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "유아용 양말",
  },
  {
    title: "어린이용 실내화",
    description: "키즈카페와 어린이집에 최적화된 편안한 실내화",
    price: "[가격 미정]",
    image: "https://images.unsplash.com/photo-1763256340027-41477e097519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNob2VzJTIwaW5kb29yfGVufDF8fHx8MTc3NDMxNzY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "실내화",
  },
  {
    title: "어린이용 미끄럼방지 양말",
    description: "안전한 활동을 위한 프리미엄 미끄럼방지 양말",
    price: "[가격 미정]",
    image: "https://images.unsplash.com/photo-1632337948797-ba161d29532b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xvdGhpbmclMjBwcm9kdWN0fGVufDF8fHx8MTc3NDMxNzY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "어린이용 미끄럼방지 양말",
  },
];

export default function BusinessSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("전체");

  return (
    <section id="business" className="bg-white py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2
          className={`text-3xl lg:text-4xl font-semibold text-dark mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          사업영역
        </h2>

        {/* Category Bar */}
        <div
          className={`flex gap-3 mb-12 overflow-x-auto pb-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "border border-warm-border text-dark hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-warm-bg overflow-hidden rounded-2xl mb-4">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-dark mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-warm-gray font-light mb-3 leading-relaxed">
                {card.description}
              </p>
              <p className="text-base font-medium text-dark mb-3">
                {card.price}
              </p>
              <button
                type="button"
                className="px-5 py-2 text-sm border border-accent text-accent rounded-full transition-all duration-300 hover:bg-accent hover:text-white"
              >
                문의하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
