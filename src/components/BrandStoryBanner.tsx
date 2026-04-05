"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BrandStoryBanner() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative">
      <Link
        href="/about"
        className="block py-16 lg:py-20 transition-colors duration-300 hover:brightness-[1.02]"
        style={{ backgroundColor: "rgba(244,151,142,0.06)" }}
      >
        <div
          className={`max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* 큰 따옴표 장식 */}
          <span
            className="block text-6xl md:text-7xl font-serif leading-none select-none mb-4"
            style={{ color: "#F4978E", opacity: 0.15 }}
          >
            &ldquo;
          </span>

          {/* 핵심 한줄 */}
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: "#2c2c2c" }}
          >
            &lsquo;여기서 사면 가격도 품질도 믿을만해&rsquo;
          </p>

          {/* 서브 텍스트 */}
          <p
            className="text-sm mb-5"
            style={{ color: "#8a8580" }}
          >
            믿음직스러운 집 앞 슈퍼마켓 같은 온라인몰을 꿈꿉니다
          </p>

          {/* 링크 텍스트 */}
          <span
            className="inline-block text-sm font-medium underline underline-offset-4 decoration-1"
            style={{ color: "#F4978E" }}
          >
            발산마켓 이야기 읽기 →
          </span>
        </div>
      </Link>
    </section>
  );
}
