"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "10+", label: "업력(년)" },
  { value: "500+", label: "누적 거래처" },
  { value: "100만+", label: "누적 판매량" },
  { value: "99%", label: "고객 만족도" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=600&q=80",
    alt: "키즈카페에서 노는 아이들",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&q=80",
    alt: "컬러풀한 양말 디스플레이",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&q=80",
    alt: "어린이집 실내 놀이",
    span: "",
  },
];

const partners = [
  {
    name: "플레이즈 키즈카페",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 10h.01M15 10h.01" />
      </svg>
    ),
  },
  {
    name: "점핑파크",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M12 12v4" />
        <path d="M8 20l4-4 4 4" />
        <path d="M6 16l2-2" />
        <path d="M18 16l-2-2" />
      </svg>
    ),
  },
  {
    name: "키즈앤키즈",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
        <path d="M9 10v6" />
        <path d="M15 10v6" />
        <path d="M7 20l2-4" />
        <path d="M17 20l-2-4" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
  {
    name: "해피플레이",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    name: "리틀포레스트",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l-4 7h8l-4-7z" />
        <path d="M12 10l-5 8h10l-5-8z" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    name: "점프노리",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22l4-4" />
        <path d="M18 22l4-4" />
        <path d="M6 18q6-12 12 0" />
        <circle cx="12" cy="6" r="3" />
        <path d="M10 9l-2 4" />
        <path d="M14 9l2 4" />
      </svg>
    ),
  },
];

const reviews = [
  {
    text: "양말 품질이 정말 좋아요. 아이들이 미끄러지지 않아서 안심이 됩니다.",
    author: "김○○",
    affiliation: "해피키즈 어린이집 원장",
  },
  {
    text: "대량 주문에도 빠른 배송, 가격도 합리적이에요.",
    author: "이○○",
    affiliation: "점핑파크 키즈카페 대표",
  },
  {
    text: "디자인이 다양해서 아이들이 좋아해요. 재주문률이 높습니다.",
    author: "박○○",
    affiliation: "리틀스타 소아과",
  },
];

export default function TrustSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation();
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();
  const { ref: reviewRef, isVisible: reviewVisible } = useScrollAnimation();
  const reviewScrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="trust" className="bg-warm-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Part 1: Title */}
        <h2
          ref={titleRef}
          className={`text-3xl lg:text-4xl font-semibold text-dark mb-16 text-center transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          신뢰와 실적
        </h2>

        {/* Part 2: Stats + Gallery (2 columns) */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
        >
          {/* Left: Stats 2x2 */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center bg-white rounded-2xl py-8 lg:py-10 px-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-700 ${
                  statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: statsVisible ? `${200 + index * 120}ms` : "0ms" }}
              >
                <div className="text-3xl lg:text-4xl font-semibold text-[#F4978E] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-warm-gray">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Photo Gallery */}
          <div
            className={`grid grid-cols-2 grid-rows-2 gap-3 min-h-[300px] lg:min-h-[360px] transition-all duration-700 ${
              statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: statsVisible ? "600ms" : "0ms" }}
          >
            {/* Large image — spans 2 rows */}
            <div className="row-span-2 relative rounded-2xl overflow-hidden bg-[#f9f8f6] group">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            {/* Top right */}
            <div className="relative rounded-2xl overflow-hidden bg-[#f9f8f6] group">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            {/* Bottom right */}
            <div className="relative rounded-2xl overflow-hidden bg-[#f9f8f6] group">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Part 3: Video Banner */}
        <div
          ref={videoRef}
          className={`relative w-full aspect-video max-h-[400px] rounded-3xl overflow-hidden mb-20 transition-all duration-700 ${
            videoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: videoVisible ? "200ms" : "0ms" }}
        >
          {/* Background image with dark overlay */}
          <Image
            src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1200&q=80"
            alt="제품 사용 현장"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Play button + text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <button
              type="button"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#F4978E] flex items-center justify-center shadow-lg hover:bg-[#e8887f] transition-colors duration-200"
              aria-label="동영상 재생"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-1"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </button>
            <p className="text-white text-sm lg:text-base font-medium text-center px-4">
              우리의 제품이 사용되는 현장을 확인하세요
            </p>
          </div>
        </div>

        {/* Part 4: Partners */}
        <div
          ref={logosRef}
          className={`bg-white rounded-2xl py-14 px-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] mb-16 transition-all duration-700 ${
            logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: logosVisible ? "200ms" : "0ms" }}
        >
          <h3 className="text-lg font-semibold text-dark text-center mb-10">주요 거래처 및 파트너</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`flex flex-col items-center justify-center gap-3 py-6 px-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-gradient-to-b from-white to-white hover:from-[#FFF0ED] hover:to-white ${
                  logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: logosVisible ? `${300 + index * 100}ms` : "0ms" }}
              >
                <div className="text-[#F4978E]">
                  {partner.icon}
                </div>
                <span className="text-xs font-semibold text-dark text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-warm-gray mb-2">그 외 다수의 어린이집, 키즈카페, 소아과와 함께하고 있습니다</p>
            <a
              href="#contact"
              className="text-sm text-[#F4978E] font-medium hover:underline"
            >
              파트너 문의하기 →
            </a>
          </div>
        </div>

        {/* Part 5: Customer Reviews */}
        <div
          ref={reviewRef}
          className={`transition-all duration-700 ${
            reviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-2xl font-semibold text-dark text-center mb-10">고객 후기</h3>

          {/* Review cards — horizontal scroll on mobile, grid on desktop */}
          <div
            ref={reviewScrollRef}
            className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[85vw] sm:w-[340px] lg:w-auto bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] snap-center transition-all duration-700 ${
                  reviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: reviewVisible ? `${300 + index * 150}ms` : "0ms" }}
              >
                {/* Quote icon */}
                <span className="text-4xl lg:text-5xl font-serif text-[#F4978E] leading-none block mb-4">
                  &ldquo;
                </span>

                {/* Review text */}
                <p className="text-dark text-sm lg:text-base leading-relaxed mb-6">
                  {review.text}
                </p>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4 text-[#F4978E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="text-sm font-semibold text-dark">{review.author}</p>
                  <p className="text-xs text-warm-gray">{review.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
