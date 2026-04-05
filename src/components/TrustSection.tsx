"use client";

import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const kidsCafePartners = [
  "챔피언",
  "잭슨나인",
  "쁘띠몽드",
  "월드킹",
  "메가키즈",
  "헬로방방",
  "아틀란티스퍼플",
];

const additionalCategories = ["육아종합센터", "학교 및 공공기관", "노인요양시설"];

const certItems = [
  "pH",
  "폼알데하이드",
  "알러지성 염료",
  "아릴아민",
  "유해 중금속",
];

const reviews = [
  {
    author: "김*지",
    role: "필라테스 트레이너",
    title: "논슬립 패드가 촘촘하고 두께가 적당해서 쾌적해요",
    content:
      "필라테스 할 때는 위생상, 부상 예방 목적으로 무조건 미끄럼방지 양말을 신어야 하는데 이 양말은 가격도 품질도 딱 좋습니다. 자세에 집중할 수 있고 두께가 적당해서 운동 중에 발이 쾌적합니다.",
    rating: 5,
  },
  {
    author: "황*민",
    role: "필라테스 트레이너",
    title: "발목과 발바닥을 잡아주어 운동에 집중할 수 있어요",
    content:
      "양말이 흘러내리는 게 늘 신경 쓰였는데, 이 제품은 발바닥 논슬립 패드가 잘 잡아주고 소재도 부드러워 착용감이 좋습니다.",
    rating: 5,
  },
  {
    author: "박*최",
    role: "PT 트레이너",
    title: "웨이트 할 때 발 밀림이 없어 꾸준히 신고 있습니다",
    content:
      "쫀쫀한 재질이라 접지력이 좋고, 가성비도 만족스러워 회원님들께 자주 추천합니다. 하체 운동할 때 특히 도움이 됩니다.",
    rating: 5,
  },
  {
    author: "정*혜",
    role: "PT 트레이너",
    title: "초보자도 안전하게 운동할 수 있어 추천합니다",
    content:
      "웨이트 할 때 발의 힘을 잘 느껴야 하는데, 이 양말은 접지와 반발력이 잘 느껴져서 맨발이 어색한 초보자에게 특히 좋습니다.",
    rating: 5,
  },
];

export default function TrustSection() {
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation();
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
    <section id="trust" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Part 1: Certification ───────────────────────────── */}
        <div
          ref={certRef}
          className={`mb-20 lg:mb-24 transition-all duration-700 ${
            certVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
              Safety Certification
            </span>
            <h2 className="text-3xl lg:text-[2.5rem] font-semibold text-ink tracking-tight leading-tight mb-4">
              안전을 가장 먼저 생각합니다
            </h2>
            <p className="text-base text-warm-gray leading-relaxed max-w-2xl mx-auto">
              국가공인기관의 KC 어린이 제품 적합검사 전 항목을 통과한 제품만 공급합니다.
            </p>
          </div>

          <div className="bg-warm-bg border border-warm-border/60 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center">
              {/* Certificate image */}
              <div className="relative w-full lg:w-[280px] aspect-[3/4] bg-white rounded-xl overflow-hidden border border-warm-border shadow-card mx-auto lg:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/safety-cert-1.png"
                  alt="KC 어린이 제품 적합검사 합격증"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Details */}
              <div>
                <span className="inline-block px-3 py-1 bg-accent-soft text-accent text-xs font-semibold rounded-full mb-4">
                  KC 안전인증 합격
                </span>
                <h3 className="text-xl lg:text-2xl font-semibold text-ink mb-3 leading-snug">
                  유해물질 전 항목 검사 통과
                </h3>
                <p className="text-sm lg:text-base text-warm-gray leading-relaxed mb-6">
                  아이들이 직접 피부에 닿는 제품인 만큼, 까다로운 안전 기준을 모두 충족하는
                  원단과 염료만을 사용합니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  {certItems.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-warm-border rounded-full text-xs font-medium text-ink"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F4978E" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Part 2: Partners ───────────────────────────── */}
        <div
          ref={logosRef}
          className={`mb-20 lg:mb-24 transition-all duration-700 ${
            logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
              Our Partners
            </span>
            <h2 className="text-3xl lg:text-[2.5rem] font-semibold text-ink tracking-tight leading-tight mb-4">
              전국 20여 곳 이상의 키즈카페에 납품 중
            </h2>
            <p className="text-base text-warm-gray leading-relaxed">
              대형 프랜차이즈부터 동네 키즈카페까지, 다양한 현장에서 사용되고 있습니다.
            </p>
          </div>

          {/* Text-only partner cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-4 mb-10">
            {kidsCafePartners.map((name, index) => (
              <div
                key={name}
                className={`flex items-center justify-center aspect-[5/2] bg-white border border-warm-border/80 rounded-xl px-3 transition-all duration-300 hover:border-accent/50 hover:bg-accent-soft/40 hover:-translate-y-0.5 ${
                  logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: logosVisible ? `${200 + index * 60}ms` : "0ms" }}
              >
                <span className="text-sm font-semibold text-ink/75 tracking-tight text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Additional Categories */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {additionalCategories.map((category, index) => (
              <div
                key={category}
                className={`px-5 py-2.5 rounded-full bg-warm-bg border border-warm-border/60 text-sm font-medium text-ink transition-all duration-700 ${
                  logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: logosVisible ? `${700 + index * 100}ms` : "0ms" }}
              >
                {category}
              </div>
            ))}
          </div>

          {/* Footer text + CTA */}
          <div className="text-center">
            <p className="text-sm text-warm-gray mb-5">
              그 외 다수의 기관과 함께하고 있습니다.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-warm-border text-ink text-sm font-medium rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
            >
              납품 문의하기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Part 3: Customer Reviews ───────────────────────────── */}
        <div
          ref={reviewRef}
          className={`transition-all duration-700 ${
            reviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
              Customer Reviews
            </span>
            <h2 className="text-3xl lg:text-[2.5rem] font-semibold text-ink tracking-tight leading-tight mb-4">
              실사용 후기
            </h2>
            <p className="text-base text-warm-gray leading-relaxed mb-6">
              다양한 현장에서 제품을 사용 중인 분들의 후기입니다.
            </p>
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-warm-bg border border-warm-border/60 rounded-full">
              <div className="flex gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="text-ink font-semibold text-sm">4.84</span>
              <span className="text-warm-gray text-xs">/ 5.0</span>
            </div>
          </div>

          {/* Review cards */}
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
                  className={`flex-shrink-0 w-[85vw] sm:w-[340px] lg:w-auto bg-white border border-warm-border/60 rounded-2xl p-6 lg:p-8 shadow-card snap-center transition-all duration-700 hover:-translate-y-0.5 hover:shadow-card-hover ${
                    reviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: reviewVisible ? `${200 + index * 120}ms` : "0ms" }}
                >
                  {/* Author & Role */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-semibold text-ink">{review.author}</span>
                    <span className="text-warm-border">·</span>
                    <span className="text-xs text-warm-gray">{review.role}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3 text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    ))}
                  </div>

                  {/* Title */}
                  <p className="text-ink font-semibold text-base leading-snug mb-2.5">
                    {review.title}
                  </p>

                  {/* Content */}
                  <p
                    className={`text-sm text-warm-gray leading-relaxed ${
                      isExpanded ? "" : "line-clamp-3"
                    }`}
                  >
                    {review.content}
                  </p>

                  {/* Toggle button */}
                  {review.content.length > 80 && (
                    <button
                      type="button"
                      onClick={() => toggleReview(index)}
                      className="text-xs text-accent font-medium mt-3 hover:underline"
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
