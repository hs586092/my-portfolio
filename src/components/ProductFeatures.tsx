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
    tags: ["실리콘 패드", "전면 논슬립"],
  },
  {
    number: "02",
    title: "선명한 컬러, 다양한 선택지",
    description:
      "운영 환경과 연령대에 맞춰 고를 수 있도록 7가지 이상의 컬러 라인업을 준비했습니다. 일괄 납품 시 색상 구성 조율이 가능합니다.",
    image: "/images/feature-02.png",
    alt: "선명한 컬러 구성",
    tags: ["7+ 컬러", "구성 조율"],
  },
  {
    number: "03",
    title: "KC 어린이 제품 적합검사 합격",
    description:
      "국가공인기관 안전인증 전 항목 합격. pH · 폼알데하이드 · 알러지성 염료 · 아릴아민 등 유해물질 검사를 모두 통과한 제품입니다.",
    image: "/images/safety-cert-1.png",
    alt: "KC 어린이 제품 적합검사 합격",
    tags: ["KC 인증", "유해물질 전 항목"],
  },
  {
    number: "04",
    title: "전국 키즈카페 · 기관 납품 실적",
    description:
      "대형 프랜차이즈 키즈카페, 어린이집, 태권도장, 체육학원 등 전문 현장에서 꾸준히 선택받고 있습니다.",
    image: "/images/feature-04.png",
    alt: "전국 키즈카페 납품 실적",
    tags: ["20+ 파트너", "B2B 전문"],
  },
];

export default function ProductFeatures() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-section">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div
          className={`max-w-2xl mb-20 lg:mb-28 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-eyebrow text-accent">Why 발산마켓</span>
          <h2 className="text-h1 text-ink mt-3 mb-4">
            품질을 만드는
            <br />
            4가지 기준
          </h2>
          <p className="text-lead text-warm-gray">
            발산마켓이 제품을 고르고 공급할 때 지키는 원칙입니다.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={feature.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
                }}
              >
                {/* Text block — 5 cols */}
                <div
                  className={`lg:col-span-5 relative ${
                    isReversed ? "lg:order-2 lg:col-start-8" : "lg:order-1"
                  }`}
                >
                  {/* Giant outlined number — decorative background */}
                  <div
                    aria-hidden
                    className="absolute -top-8 -left-2 lg:-top-16 lg:-left-6 text-[120px] lg:text-[180px] font-bold leading-none tracking-tighter pointer-events-none select-none"
                    style={{
                      WebkitTextStroke: "1.5px rgba(244,151,142,0.25)",
                      color: "transparent",
                    }}
                  >
                    {feature.number}
                  </div>

                  <div className="relative">
                    {/* Small inline number chip */}
                    <div className="inline-flex items-center gap-2 mb-6">
                      <div className="h-px w-8 bg-accent" />
                      <span className="text-eyebrow text-accent">
                        Feature {feature.number}
                      </span>
                    </div>

                    <h3 className="text-h2 text-ink mb-5 max-w-md">
                      {feature.title}
                    </h3>
                    <p className="text-base text-warm-gray leading-relaxed max-w-lg">
                      {feature.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-warm-bg border border-warm-border rounded-full text-xs font-medium text-ink"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image block — 6 cols, offset */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-7"
                  }`}
                >
                  <div className="relative">
                    {/* Background plate */}
                    <div
                      aria-hidden
                      className={`absolute inset-0 rounded-2xl bg-accent-soft/60 ${
                        isReversed ? "translate-x-4 translate-y-4" : "-translate-x-4 translate-y-4"
                      }`}
                    />
                    <div className="relative aspect-[5/4] rounded-2xl overflow-hidden bg-warm-bg border border-warm-border">
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 640px"
                        className="object-cover"
                      />
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
