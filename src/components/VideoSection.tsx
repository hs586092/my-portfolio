"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function VideoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[#f9f8f6] py-20 lg:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-dark mb-3">
            제품 소개 영상
          </h2>
          <p className="text-sm text-warm-gray">
            발산마켓 키즈카페 양말을 영상으로 만나보세요
          </p>
        </div>

        {/* 2-column: Video + Text */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          {/* Left: YouTube embed */}
          <div className="flex justify-center">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
              style={{ maxWidth: "280px", aspectRatio: "9/16", maxHeight: "500px" }}
            >
              <iframe
                src="https://www.youtube.com/embed/TxzjM63NnMk"
                title="발산마켓 제품 소개 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Right: Text + CTA */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <p className="text-xl lg:text-2xl font-semibold text-dark leading-relaxed mb-4">
              20종이 넘는 샘플을 직접 비교하여
              <br />
              셀렉한 <span className="text-[#F4978E]">고퀄리티, 합리적인 가격!</span>
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              논슬립 양말 판매 쿠팡 1위 발산마켓이 선보이는 키즈카페 양말
            </p>
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
