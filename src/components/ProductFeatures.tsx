"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    number: "01",
    title: "확실한 미끄럼방지 설계",
    description:
      "발바닥 전면에 넓고 촘촘한 실리콘 패드를 적용해, 활동량이 많은 아이들도 미끄러질 걱정 없이 안전하게 사용할 수 있습니다.",
    image: "/images/feature-01.png",
    alt: "확실한 미끄럼방지 설계",
  },
  {
    number: "02",
    title: "선명한 컬러, 다양한 선택지",
    description:
      "운영 환경과 연령대에 맞춰 고를 수 있도록 7가지 이상의 컬러 라인업을 준비했습니다. 일괄 납품 시 색상 구성 조율이 가능합니다.",
    image: "/images/feature-02.png",
    alt: "선명한 컬러 구성",
  },
  {
    number: "03",
    title: "KC 어린이 제품 적합검사 합격",
    description:
      "국가공인기관 안전인증 전 항목 합격. pH · 폼알데하이드 · 알러지성 염료 · 아릴아민 등 유해물질 검사를 모두 통과한 제품입니다.",
    image: "/images/safety-cert-1.png",
    alt: "KC 어린이 제품 적합검사 합격",
  },
  {
    number: "04",
    title: "전국 키즈카페 · 기관 납품 실적",
    description:
      "대형 프랜차이즈 키즈카페, 어린이집, 태권도장, 체육학원 등 전문 현장에서 꾸준히 선택받고 있습니다.",
    image: "/images/feature-04.png",
    alt: "전국 키즈카페 납품 실적",
  },
];

export default function ProductFeatures() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
            Why 발산마켓
          </span>
          <h2 className="text-3xl lg:text-[2.5rem] font-semibold text-ink tracking-tight leading-tight mb-4">
            품질을 만드는 4가지 기준
          </h2>
          <p className="text-base text-warm-gray leading-relaxed">
            발산마켓이 제품을 고르고 공급할 때 지키는 원칙입니다.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20 lg:space-y-24">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={feature.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
                }}
              >
                {/* Text */}
                <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                  {/* Number chip */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-soft text-accent text-base font-bold tracking-tight mb-5">
                    {feature.number}
                  </div>
                  <h3 className="text-2xl lg:text-[1.75rem] font-semibold text-ink mb-4 leading-snug tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-warm-gray leading-relaxed max-w-xl">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-warm-bg border border-warm-border/60">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-cover"
                    />
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
