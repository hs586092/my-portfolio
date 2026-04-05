"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function VideoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-warm-bg py-section">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Video — 5 cols */}
          <div
            className={`lg:col-span-5 lg:col-start-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative mx-auto lg:mx-0 max-w-[340px]">
              {/* Offset accent plate */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-[2rem] bg-accent-soft translate-x-4 translate-y-4"
              />
              <div
                className="relative rounded-[2rem] overflow-hidden border border-warm-border shadow-card"
                style={{ aspectRatio: "9/16" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/TxzjM63NnMk"
                  title="발산마켓 제품 소개 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Text — 6 cols, offset right */}
          <div
            className={`lg:col-span-6 lg:col-start-7 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <span className="text-eyebrow text-accent">Product Video</span>
            <h2 className="text-h1 text-ink mt-3 mb-6">
              직접 고르고,
              <br />
              직접 검증한 제품.
            </h2>
            <p className="text-lead text-warm-gray mb-8 max-w-lg">
              20종 이상의 샘플을 비교하고, 실제 사용 환경에서 테스트한 제품만
              선정합니다.
            </p>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-8 lg:gap-12 mb-10 py-6 border-y border-warm-border">
              <div>
                <div className="text-3xl font-bold text-ink tracking-tight leading-none">
                  20+
                </div>
                <div className="text-xs text-warm-gray mt-2">샘플 비교</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ink tracking-tight leading-none">
                  4.84
                </div>
                <div className="text-xs text-warm-gray mt-2">고객 평점</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ink tracking-tight leading-none">
                  70만+
                </div>
                <div className="text-xs text-warm-gray mt-2">연간 판매</div>
              </div>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-ink text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-card hover:shadow-card-hover hover:bg-ink/90 transition-all duration-300"
            >
              제품 문의하기
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
