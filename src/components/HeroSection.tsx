"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] text-white overflow-hidden">
      {/* Subtle radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Sub text */}
        <p className="animate-hero-fade-in text-gold text-sm tracking-[0.3em] uppercase mb-6 opacity-0 [animation-delay:200ms]">
          Since 2015
        </p>

        {/* Headline */}
        <h1 className="animate-hero-fade-in font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8 opacity-0 [animation-delay:500ms]">
          신뢰를 거래합니다
        </h1>

        {/* Description */}
        <p className="animate-hero-fade-in text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12 opacity-0 [animation-delay:800ms]">
          주유소 운영부터 생활잡화 유통까지,
          <br className="hidden sm:block" />
          10년의 경험으로 쌓아온 파트너십
        </p>

        {/* CTA Button */}
        <div className="animate-hero-fade-in opacity-0 [animation-delay:1100ms]">
          <Link
            href="#business"
            className="inline-block border border-gold text-gold px-8 py-3.5 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-gold hover:text-navy"
          >
            사업영역 보기
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-400"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
