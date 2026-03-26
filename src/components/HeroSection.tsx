"use client";

import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "70만+", label: "연간 판매량" },
  { value: "20+", label: "납품 키즈카페" },
  { value: "4.84", label: "고객 평점" },
];

export default function HeroSection() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Background gradient blob — right side only */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 90% at 75% 50%, rgba(244,151,142,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-8 items-center">
          {/* Mobile: image first */}
          <div className="lg:hidden flex justify-center">
            <div className="relative w-[240px] h-[240px] animate-hero-scale-in opacity-0 [animation-delay:100ms]">
              {/* Circle background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFF0ED] to-[#FFE4DE]" />
              <Image
                src="/images/product-7set.png"
                alt="7가지 컬러 미끄럼방지 양말"
                fill
                className="object-contain p-4 relative z-10"
                priority
              />
              {/* Badge */}
              <span className="absolute top-2 right-2 z-20 px-2.5 py-1 bg-[#F4978E] text-white text-[10px] font-semibold rounded-full shadow-sm">
                안전인증
              </span>
            </div>
          </div>

          {/* Left — Text area */}
          <div className="space-y-6 lg:space-y-7">
            {/* Trust badge */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:100ms]">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FFF0ED] text-[#F4978E] text-xs font-medium rounded-full">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                전국 20여 키즈카페 납품
              </span>
            </div>

            {/* Main headline */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:300ms]">
              <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-warm-gray leading-snug">
                연간 <span className="text-[#F4978E] font-semibold">70만</span> 켤레의
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-dark leading-tight mt-1">
                압도적 판매량!
              </h1>
            </div>

            {/* Sub text */}
            <p className="animate-hero-fade-in opacity-0 [animation-delay:500ms] text-base lg:text-lg font-light text-warm-gray">
              키즈카페 · 어린이집 · 체육관 미끄럼방지 양말 전문
            </p>

            {/* Stats */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:700ms] flex items-center gap-6 lg:gap-8">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 lg:gap-8">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-[#F4978E]">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-warm-gray mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-8 bg-[#e8e4e0]" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:900ms] flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F4978E] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#e8877e] shadow-md hover:shadow-lg"
              >
                대량주문 문의하기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#business"
                className="inline-flex items-center justify-center gap-2 border border-[#F4978E] text-[#F4978E] px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#FFF0ED]"
              >
                제품 보러가기
              </Link>
            </div>
          </div>

          {/* Right — Product visual (desktop) */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[380px] h-[380px] animate-hero-scale-in opacity-0 [animation-delay:400ms]">
              {/* Large circle background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFF0ED] to-[#FFE4DE]" />

              {/* Product image */}
              <Image
                src="/images/product-7set.png"
                alt="7가지 컬러 미끄럼방지 양말"
                fill
                className="object-contain p-6 relative z-10"
                priority
              />

              {/* Safety badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-white text-[#F4978E] text-xs font-semibold rounded-full shadow-md flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                안전인증 합격
              </div>

              {/* BEST badge */}
              <div className="absolute bottom-8 left-0 z-20 px-3 py-1.5 bg-[#F4978E] text-white text-xs font-semibold rounded-full shadow-md">
                BEST
              </div>

              {/* Decorative stars */}
              <svg className="absolute -top-2 -left-4 animate-hero-float [animation-delay:0s]" width="24" height="24" viewBox="0 0 24 24" fill="#F9C74F" opacity="0.6">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
              <svg className="absolute top-12 -right-6 animate-hero-float [animation-delay:1.5s]" width="18" height="18" viewBox="0 0 24 24" fill="#F4978E" opacity="0.5">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
              <svg className="absolute bottom-16 -right-3 animate-hero-float [animation-delay:0.8s]" width="16" height="16" viewBox="0 0 24 24" fill="#A8D5BA" opacity="0.5">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
