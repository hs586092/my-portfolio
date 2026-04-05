"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BrandStoryBanner() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "rgba(244,151,142,0.06)" }}
    >
      {/* Oversized decorative quote */}
      <span
        aria-hidden
        className="absolute -top-10 left-1/2 -translate-x-1/2 text-[22rem] lg:text-[28rem] leading-none font-serif text-accent/10 select-none pointer-events-none"
      >
        &ldquo;
      </span>

      <Link
        href="/about"
        className="relative block py-section-tight group transition-all duration-500"
      >
        <div
          className={`max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-eyebrow text-accent">Brand Story</span>

          {/* Main line */}
          <p className="text-h2 text-ink mt-5 mb-4 leading-snug">
            &lsquo;여기서 사면 가격도 품질도 믿을만해&rsquo;
          </p>

          {/* Sub */}
          <p className="text-base text-warm-gray mb-8 leading-relaxed">
            믿음직스러운 집 앞 슈퍼마켓 같은 온라인몰을 꿈꿉니다.
          </p>

          {/* Link pill */}
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-warm-border rounded-full text-sm font-semibold text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-white transition-all duration-300">
            발산마켓 이야기 읽기
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
          </span>
        </div>
      </Link>
    </section>
  );
}
