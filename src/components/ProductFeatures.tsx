"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    number: "01",
    title: "확실한 미끄럼방지 기능",
    description:
      "에너지 넘치는 우리 아이들, 언제나 미끄러질 걱정 없이 놀 수 있게 만들었습니다. 발바닥부분이 짱짱하고 넓습니다.",
    image: "/images/feature-01.png",
    alt: "확실한 미끄럼방지 기능",
  },
  {
    number: "02",
    title: "다양하고 선명한 컬러 구성",
    description:
      "우리아이 취향에 맞게 매일매일 색다르게 골라 신을 수 있습니다.",
    image: "/images/feature-02.png",
    alt: "다양하고 선명한 컬러 구성",
  },
  {
    number: "03",
    title: "어린이 제품 적합검사 완료",
    description:
      "국가공인기관의 안전인증 검사를 모두 합격한 안전한 키즈카페 양말입니다. 알러지성 염료, 아릴아민, pH, 폼알데하이드 등 전 항목 합격.",
    image: "/images/safety-cert-1.png",
    alt: "어린이 제품 적합검사 완료",
  },
  {
    number: "04",
    title: "전국 프랜차이즈 키즈카페 납품중",
    description:
      "대형 프랜차이즈 키즈카페에 납품중인 제품입니다. 키즈카페, 태권도장, 체육학원등 전문매장에서 먼저 알아봐주신 미끄럼방지 양말입니다.",
    image: "/images/feature-04.png",
    alt: "전국 프랜차이즈 키즈카페 납품중",
  },
];

export default function ProductFeatures() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-dark mb-3">
            왜 <span className="text-[#F4978E]">발산마켓</span>인가?
          </h2>
          <p className="text-sm text-warm-gray">
            전문가가 인정한 품질, 4가지 핵심 특징
          </p>
        </div>

        {/* Features */}
        <div className="space-y-16 lg:space-y-20">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={feature.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
                }}
              >
                {/* Text */}
                <div
                  className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <span className="text-sm font-semibold text-[#F4978E] mb-3 block">
                    {feature.number}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-dark mb-4 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-warm-gray font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f9f8f6]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-cover"
                    />
                    {/* Fallback overlay for missing images */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#f9f8f6] peer-[.loaded]:hidden">
                      <div className="text-center">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="mx-auto text-warm-gray/40 mb-2"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span className="text-xs text-warm-gray/60">
                          이미지 준비중
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
