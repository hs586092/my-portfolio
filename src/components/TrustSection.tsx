"use client";

import { useRef, useState } from "react";
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

const kidsCafePartners = [
  {
    name: "챔피언",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
        <path d="M4 22h16" />
        <path d="M10 22V2h4v20" />
        <path d="M8 6h8" />
      </svg>
    ),
  },
  {
    name: "잭슨나인",
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
    name: "쁘띠몽드",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    name: "월드킹",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
  {
    name: "메가키즈",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
  },
  {
    name: "헬로방방",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20l4-4 4 4" />
        <path d="M6 16q6-12 12 0" />
        <circle cx="12" cy="6" r="3" />
      </svg>
    ),
  },
  {
    name: "아틀란티스퍼플",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 10h.01M15 10h.01" />
      </svg>
    ),
  },
];

const additionalCategories = [
  {
    name: "육아종합센터",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    name: "학교 및 공공기관",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M9 21V11h6v10" />
        <path d="M5 21V5l7-2 7 2v16" />
        <path d="M12 7v.01" />
      </svg>
    ),
  },
  {
    name: "노인요양시설",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const reviews = [
  {
    author: "김*지",
    role: "필라테스 트레이너",
    title: "논슬립패드가 촘촘하고 적당한 두께라 쾌적하고 좋아요!",
    content: "필라테스 할 때는 위생상, 부상 예방 목적으로 무조건 미끄럼방지 양말을 신어야하는데 이 양말은 가격도 품질도 딱 좋아요! 자세에 집중할 수 있고 적당한 두께라 운동중에 발이 쾌적합니다. 발가락 나눠지 않는 양말은 감사라니 귀찮을 때가 있는데 이건 그냥 쏙 신으면 되어서 너무 편해요!",
    rating: 5,
  },
  {
    author: "황*민",
    role: "필라테스 트레이너",
    title: "발목과 발바닥을 딱 잡아주니 운동에 집중할 수 있어요!",
    content: "양말 대비나 운동할때 양말 흘러내리는거 신경 쓰셨는데 이 양말 신으니 발바닥 논슬립패드가 딱 잡아주고 소재도 부드러워 착용감 좋아요.",
    rating: 5,
  },
  {
    author: "박*최",
    role: "PT 트레이너",
    title: "신발안에서 발 밀림없어 웨이트 할 때 꼭 신습니다!",
    content: "완전 쫀쫀한 재질이 너무 좋아요!! 착한 가격에 가성비 인정 최고여서 회원님들께 추천 많이 드립니다. 안에서 발밀림없어서 요즘 하체 운동할 때 꼭 신발 벗고 신을때 편합니다.",
    rating: 5,
  },
  {
    author: "정*혜",
    role: "PT 트레이너",
    title: "초보자들 웨이트 할 때 안전하게 운동할 수 있어요!",
    content: "웨이트할 때 발의 힘을 잘 느껴야 하는데 이 양말 신으니 접지가 잘 되고 지면 반발력이 엄청 잘 느껴집니다. 맨동시 발바닥을 딛는 힘을 느끼기 어려운 초보자에게 완전 강추!",
    rating: 5,
  },
];

export default function TrustSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation();
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();
  const { ref: reviewRef, isVisible: reviewVisible } = useScrollAnimation();
  const reviewScrollRef = useRef<HTMLDivElement>(null);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

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
          {/* Headline */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-dark text-center mb-12">
            전국 <span className="text-[#F4978E]">20여 곳 이상</span>의 키즈카페에 납품하고 있습니다
          </h3>

          {/* Kids Cafe Partners */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-5 mb-12">
            {kidsCafePartners.map((partner, index) => (
              <div
                key={partner.name}
                className={`flex flex-col items-center justify-center gap-3 py-6 px-3 bg-white rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-[#FFF0ED] ${
                  logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: logosVisible ? `${300 + index * 80}ms` : "0ms" }}
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

          {/* Additional Categories */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
            {additionalCategories.map((category, index) => (
              <div
                key={category.name}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#f9f8f6] transition-all duration-700 ${
                  logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: logosVisible ? `${800 + index * 100}ms` : "0ms" }}
              >
                <div className="text-[#F4978E]">
                  {category.icon}
                </div>
                <span className="text-sm font-semibold text-dark">
                  {category.name}
                </span>
              </div>
            ))}
          </div>

          {/* Footer text + CTA */}
          <div className="text-center">
            <p className="text-sm text-warm-gray mb-4">그 외 다수의 기관과 함께하고 있습니다</p>
            <a
              href="#contact"
              className="inline-block px-6 py-2.5 border border-[#F4978E] text-[#F4978E] text-sm font-medium rounded-full hover:bg-[#F4978E] hover:text-white transition-colors duration-200"
            >
              납품 문의하기
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
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-semibold text-dark mb-3">현직 트레이너가 인정한 품질</h3>
            <p className="text-sm text-warm-gray mb-4">필라테스, PT 전문가들이 직접 사용하고 추천합니다</p>
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <div className="flex gap-0.5 text-[#F4978E]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="text-dark font-semibold text-sm">4.84</span>
              <span className="text-warm-gray text-xs">/ 5.0</span>
            </div>
          </div>

          {/* Review cards — scroll on mobile, 2x2 grid on desktop */}
          <div
            ref={reviewScrollRef}
            className="flex lg:grid lg:grid-cols-2 gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => {
              const isExpanded = expandedReviews.has(index);
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[85vw] sm:w-[340px] lg:w-auto bg-white rounded-2xl p-7 lg:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] snap-center transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] ${
                    reviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: reviewVisible ? `${300 + index * 150}ms` : "0ms" }}
                >
                  {/* Author badge */}
                  <span className="inline-block px-3.5 py-1.5 bg-[#F4978E] text-white text-xs font-medium rounded-full mb-4">
                    {review.author} {review.role}
                  </span>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3 text-[#F4978E]">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    ))}
                  </div>

                  {/* Title */}
                  <p className="text-dark font-semibold text-sm lg:text-base leading-snug mb-2">
                    {review.title}
                  </p>

                  {/* Content */}
                  <p className={`text-sm text-warm-gray leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
                    {review.content}
                  </p>

                  {/* Toggle button */}
                  {review.content.length > 80 && (
                    <button
                      type="button"
                      onClick={() => toggleReview(index)}
                      className="text-xs text-[#F4978E] font-medium mt-2 hover:underline"
                    >
                      {isExpanded ? "접기" : "더보기"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
