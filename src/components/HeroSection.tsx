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
    <section
      id="about"
      className="relative bg-white overflow-hidden"
    >
      {/* Background — subtle warm gradient + grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 85% 15%, rgba(244,151,142,0.10) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 10% 90%, rgba(244,151,142,0.05) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0F0F10 1px, transparent 1px), linear-gradient(to bottom, #0F0F10 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-section-tight">
        {/* Eyebrow — small badge at the very top */}
        <div className="animate-hero-fade-in opacity-0 [animation-delay:100ms] mb-10 lg:mb-14">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-warm-border bg-white/70 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-eyebrow text-ink/70">
              B2B · 기관 납품 전문
            </span>
          </span>
        </div>

        {/* Headline grid — editorial asymmetric layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: headline spans 7 cols */}
          <div className="lg:col-span-7 relative z-10">
            <h1 className="animate-hero-fade-in opacity-0 [animation-delay:200ms] text-display text-ink">
              연간 70만 켤레,
              <br />
              키즈카페가
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">선택한 양말.</span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-[0.08em] h-[0.22em] bg-accent/25 -z-0"
                />
              </span>
            </h1>

            <p className="animate-hero-fade-in opacity-0 [animation-delay:400ms] mt-8 lg:mt-10 text-lead text-warm-gray max-w-xl">
              어린이집, 체육관, 키즈카페를 위한 미끄럼방지 양말을
              <br className="hidden sm:block" />
              합리적인 단가로 안정적으로 공급합니다.
            </p>

            {/* CTAs */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:600ms] mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-ink text-white px-8 py-4 rounded-full text-sm font-semibold shadow-card hover:shadow-card-hover hover:bg-ink/90 transition-all duration-300"
              >
                대량주문 문의하기
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#business"
                className="inline-flex items-center justify-center gap-2 border border-warm-border text-ink px-8 py-4 rounded-full text-sm font-semibold hover:border-ink hover:bg-warm-bg transition-all duration-300"
              >
                제품 라인업 보기
              </Link>
            </div>
          </div>

          {/* RIGHT: product visual spans 5 cols, shifted up/overlapping */}
          <div className="lg:col-span-5 relative lg:-mt-10">
            <div className="animate-hero-scale-in opacity-0 [animation-delay:350ms] relative aspect-square max-w-[460px] mx-auto lg:mx-0">
              {/* Large accent circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-soft to-[#FFE4DE]" />

              {/* Outlined secondary circle */}
              <div
                aria-hidden
                className="absolute inset-[-24px] rounded-full border border-accent/20"
              />

              <Image
                src="/images/product-7set.png"
                alt="7가지 컬러 미끄럼방지 양말"
                fill
                sizes="(max-width: 1024px) 80vw, 460px"
                className="object-contain p-10 relative z-10"
                priority
              />

              {/* KC cert floating badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-white rounded-full pl-3 pr-4 py-2.5 shadow-card border border-warm-border/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4978E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-xs font-semibold text-ink">KC 안전인증</span>
              </div>

              {/* Floating tag: "쿠팡 논슬립양말 1위" */}
              <div className="absolute -left-2 bottom-14 lg:-left-6 z-20 bg-ink text-white rounded-full pl-4 pr-5 py-2.5 shadow-card-hover flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F4978E" stroke="none">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                <span className="text-xs font-semibold tracking-tight">
                  쿠팡 논슬립양말 1위
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip — floating card that bridges bottom of hero */}
        <div className="animate-hero-fade-in opacity-0 [animation-delay:800ms] relative mt-16 lg:mt-24">
          <div className="bg-white border border-warm-border rounded-2xl shadow-card p-6 lg:p-8 grid grid-cols-3 divide-x divide-warm-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center px-2 lg:px-4"
              >
                <div className="text-2xl lg:text-4xl font-bold text-ink tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] lg:text-xs text-warm-gray mt-2 lg:mt-3 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
