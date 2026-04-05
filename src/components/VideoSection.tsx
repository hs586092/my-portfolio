"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function VideoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-warm-bg py-20 lg:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <div
            className={`mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
              Product Video
            </span>
            <h2 className="text-3xl lg:text-[2.5rem] font-semibold text-ink tracking-tight leading-tight mb-4">
              제품 소개 영상
            </h2>
            <p className="text-base text-warm-gray leading-relaxed max-w-xl">
              20종 이상의 샘플을 직접 비교해 선정한 제품입니다.
            </p>
          </div>

          {/* YouTube embed */}
          <div
            className={`w-full max-w-[360px] rounded-2xl overflow-hidden shadow-card border border-warm-border/60 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ aspectRatio: "9/16", transitionDelay: isVisible ? "200ms" : "0ms" }}
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

          {/* CTA */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-medium rounded-full shadow-card hover:shadow-card-hover hover:bg-[#e8877e] transition-all duration-300"
            >
              제품 문의하기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
