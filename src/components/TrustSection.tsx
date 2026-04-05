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

const certItems = ["pH", "폼알데하이드", "알러지성 염료", "아릴아민", "유해 중금속"];

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
    <section id="trust" className="bg-white py-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Part 1: Certification — feature card ───────────── */}
        <div
          ref={certRef}
          className={`mb-24 lg:mb-32 transition-all duration-700 ${
            certVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-2xl mb-12">
            <span className="text-eyebrow text-accent">Safety Certification</span>
            <h2 className="text-h1 text-ink mt-3 mb-4">
              안전을 가장 먼저
              <br />
              생각합니다
            </h2>
            <p className="text-lead text-warm-gray">
              국가공인기관의 KC 어린이 제품 적합검사 전 항목을 통과한
              제품만 공급합니다.
            </p>
          </div>

          {/* Feature card */}
          <div className="relative rounded-2xl overflow-hidden bg-ink text-white">
            {/* Decorative background */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div
              aria-hidden
              className="absolute -right-20 -top-20 w-96 h-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(244,151,142,0.22) 0%, transparent 70%)",
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 p-8 lg:p-14 items-center">
              {/* Certificate image */}
              <div className="relative w-full max-w-[300px] aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-card-hover mx-auto lg:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/safety-cert-1.png"
                  alt="KC 어린이 제품 적합검사 합격증"
                  className="w-full h-full object-contain p-3"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 mb-5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4978E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-eyebrow text-accent">KC 안전인증 합격</span>
                </div>

                <h3 className="text-h2 text-white mb-5">
                  유해물질 전 항목 검사 통과
                </h3>
                <p className="text-base text-white/70 leading-relaxed mb-8 max-w-xl">
                  아이들이 직접 피부에 닿는 제품인 만큼, 까다로운 안전 기준을
                  모두 충족하는 원단과 염료만을 사용합니다.
                </p>

                <div className="flex flex-wrap gap-2">
                  {certItems.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F4978E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

        {/* ── Part 2: Partners logo wall ───────────── */}
        <div
          ref={logosRef}
          className={`mb-24 lg:mb-32 transition-all duration-700 ${
            logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-eyebrow text-accent">Our Partners</span>
            <h2 className="text-h1 text-ink mt-3 mb-4">
              전국 20여 곳의 키즈카페가
              <br />
              발산마켓과 함께합니다
            </h2>
            <p className="text-lead text-warm-gray">
              대형 프랜차이즈부터 동네 키즈카페까지, 다양한 현장에서 사용되고 있습니다.
            </p>
          </div>

          {/* Logo wall — bordered grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 border border-warm-border rounded-2xl overflow-hidden bg-white">
            {kidsCafePartners.map((name, index) => (
              <div
                key={name}
                className={`group flex items-center justify-center aspect-[5/3] border-warm-border transition-all duration-500 hover:bg-warm-bg [&:not(:last-child)]:border-b [&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-b-0 ${
                  logosVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: logosVisible ? `${200 + index * 80}ms` : "0ms" }}
              >
                <span className="text-sm font-bold text-ink/60 group-hover:text-ink tracking-tight transition-colors duration-300">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Additional Categories — slim strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-xs text-warm-gray">그 외:</span>
            {additionalCategories.map((category, index) => (
              <div key={category} className="flex items-center gap-8">
                <span className="text-sm font-medium text-ink/70">{category}</span>
                {index < additionalCategories.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-warm-border" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-warm-border text-ink text-sm font-semibold rounded-full hover:border-ink hover:bg-ink hover:text-white transition-all duration-300"
            >
              납품 문의하기
              <svg
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Part 3: Reviews ───────────── */}
        <div
          ref={reviewRef}
          className={`transition-all duration-700 ${
            reviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-2xl mb-14">
            <span className="text-eyebrow text-accent">Customer Reviews</span>
            <h2 className="text-h1 text-ink mt-3 mb-4">실사용 후기</h2>
            <div className="flex items-center gap-5 mt-6">
              <div className="flex gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-ink tracking-tight">4.84</span>
                <span className="text-sm text-warm-gray">/ 5.0</span>
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div
            ref={reviewScrollRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {reviews.map((review, index) => {
              const isExpanded = expandedReviews.has(index);
              return (
                <div
                  key={index}
                  className={`relative bg-white border border-warm-border rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-500 ${
                    reviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: reviewVisible ? `${200 + index * 120}ms` : "0ms" }}
                >
                  {/* Large decorative quote */}
                  <span
                    aria-hidden
                    className="absolute top-6 right-8 text-7xl leading-none font-serif text-accent/15 select-none pointer-events-none"
                  >
                    &ldquo;
                  </span>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5 text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    ))}
                  </div>

                  {/* Title */}
                  <p className="text-lg font-semibold text-ink leading-snug mb-3 pr-10">
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

                  {/* Toggle */}
                  {review.content.length > 80 && (
                    <button
                      type="button"
                      onClick={() => toggleReview(index)}
                      className="text-xs text-accent font-semibold mt-3 hover:underline"
                    >
                      {isExpanded ? "접기" : "더보기"}
                    </button>
                  )}

                  {/* Author footer */}
                  <div className="mt-6 pt-5 border-t border-warm-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-accent text-sm font-bold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink">{review.author}</div>
                      <div className="text-xs text-warm-gray">{review.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
