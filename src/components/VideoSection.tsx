"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function VideoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[#f9f8f6] py-12 lg:py-16">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-dark mb-3">
              제품 소개 영상
            </h2>
            <p className="text-sm lg:text-base text-warm-gray">
              20종이 넘는 샘플을 직접 비교하여 셀렉한{" "}
              <span className="text-[#F4978E] font-medium">고퀄리티, 합리적인 가격!</span>
            </p>
          </div>

          {/* YouTube embed */}
          <div
            className={`w-full max-w-[360px] rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)] mb-6 transition-all duration-700 ${
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

          {/* Description */}
          <p
            className={`text-sm text-warm-gray mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            논슬립 양말 판매 쿠팡 1위 발산마켓이 선보이는 키즈카페 양말
          </p>

          {/* CTA */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
          >
            <a
              href="#contact"
              className="inline-block px-7 py-3 bg-[#F4978E] text-white text-sm font-medium rounded-full hover:bg-[#e8887f] transition-colors duration-200"
            >
              제품 문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
