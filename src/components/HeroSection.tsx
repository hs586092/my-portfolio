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
      {/* Subtle background gradient — right side only */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 90% at 75% 50%, rgba(244,151,142,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-8 items-center">
          {/* Mobile: image first */}
          <div className="lg:hidden flex justify-center">
            <div className="relative w-[260px] h-[260px] animate-hero-scale-in opacity-0 [animation-delay:100ms]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFF7F5] to-[#FFF0ED]" />
              <Image
                src="/images/product-7set.png"
                alt="7가지 컬러 미끄럼방지 양말"
                fill
                className="object-contain p-6 relative z-10"
                priority
              />
            </div>
          </div>

          {/* Left — Text area */}
          <div className="space-y-7 lg:space-y-8">
            {/* Eyebrow label */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:100ms]">
              <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent">
                B2B · 기관 납품 전문
              </span>
            </div>

            {/* Main headline */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:250ms]">
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-ink leading-[1.15] tracking-tight">
                연간 <span className="text-accent">70만 켤레</span>,<br />
                전국 키즈카페가 선택한 양말
              </h1>
            </div>

            {/* Sub text */}
            <p className="animate-hero-fade-in opacity-0 [animation-delay:400ms] text-base lg:text-lg text-warm-gray leading-relaxed max-w-xl">
              키즈카페 · 어린이집 · 체육관을 위한 미끄럼방지 양말을
              합리적인 단가로 공급합니다.
            </p>

            {/* Stats */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:550ms] flex items-center gap-8 lg:gap-10 pt-2">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8 lg:gap-10">
                  <div>
                    <div className="text-2xl lg:text-[1.75rem] font-bold text-ink leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs text-warm-gray mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-10 bg-warm-border" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:700ms] flex flex-col sm:flex-row gap-3 pt-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#e8877e] shadow-card hover:shadow-card-hover"
              >
                대량주문 문의하기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#business"
                className="inline-flex items-center justify-center gap-2 border border-warm-border text-ink px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:border-accent hover:text-accent"
              >
                제품 라인업 보기
              </Link>
            </div>
          </div>

          {/* Right — Product visual (desktop) */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[420px] h-[420px] animate-hero-scale-in opacity-0 [animation-delay:350ms]">
              {/* Large circle background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFF7F5] to-[#FFF0ED]" />

              {/* Product image */}
              <Image
                src="/images/product-7set.png"
                alt="7가지 컬러 미끄럼방지 양말"
                fill
                className="object-contain p-8 relative z-10"
                priority
              />

              {/* Single safety cert badge */}
              <div className="absolute top-6 right-6 z-20 px-3.5 py-2 bg-white text-ink text-xs font-semibold rounded-full shadow-card flex items-center gap-1.5 border border-warm-border/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F4978E" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                KC 안전인증
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
