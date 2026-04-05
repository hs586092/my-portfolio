"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SockIllustration from "./SockIllustration";

type Product = {
  name: string;
  description: string;
  image?: string;
  alt: string;
  badge: string | null;
  price: number | null;
  unit: string | null;
  unitPrice: number | null;
  bulkDiscount: string | null;
  reviews: string;
  illustration?: 1 | 2 | 3 | 4;
};

const products: Product[] = [
  {
    name: "프리미엄 미끄럼방지 양말",
    description: "어린이집 필수템, 실리콘 미끄럼방지 패드",
    alt: "프리미엄 미끄럼방지 양말",
    badge: "BEST",
    price: null,
    unit: null,
    unitPrice: null,
    bulkDiscount: null,
    reviews: "999+",
    illustration: 1,
  },
  {
    name: "스트라이프 미끄럼방지 양말",
    description: "감각적인 스트라이프 패턴, 통기성 우수",
    alt: "스트라이프 양말",
    badge: "NEW",
    price: null,
    unit: null,
    unitPrice: null,
    bulkDiscount: null,
    reviews: "128",
    illustration: 2,
  },
  {
    name: "어린이용 미끄럼방지 양말",
    description: "어린이집 · 키즈카페에서 많이 찾는 기본 라인",
    image: "/images/product-7set.png",
    alt: "어린이용 양말",
    badge: null,
    price: 50000,
    unit: "10켤레",
    unitPrice: 5000,
    bulkDiscount: "100켤레 이상 · 1켤레당 3,500원",
    reviews: "256",
  },
  {
    name: "하트 패턴 미끄럼방지 양말",
    description: "사랑스러운 하트 패턴, 부드러운 촉감",
    alt: "하트 패턴 양말",
    badge: null,
    price: null,
    unit: null,
    unitPrice: null,
    bulkDiscount: null,
    reviews: "87",
    illustration: 4,
  },
];

export default function BusinessSection() {
  const { ref, isVisible } = useScrollAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    scrollContainerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="business" className="bg-warm-bg py-section">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Split header: title left, navigation right */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            <span className="text-eyebrow text-accent">Product Lineup</span>
            <h2 className="text-h1 text-ink mt-3 mb-4">
              현장에서 가장 많이 찾는 상품
            </h2>
            <p className="text-lead text-warm-gray">
              어린이집 · 키즈카페에서 꾸준히 주문해 주시는 주력 라인입니다.
            </p>
          </div>

          {/* Scroll controls */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-320)}
              aria-label="이전 상품"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-warm-border bg-white text-ink hover:border-ink hover:bg-ink hover:text-white transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(320)}
              aria-label="다음 상품"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-warm-border bg-white text-ink hover:border-ink hover:bg-ink hover:text-white transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Cards — larger, refined */}
        <div className="relative -mx-6 lg:mx-0">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 lg:gap-6 overflow-x-auto pb-4 px-6 lg:px-0 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/products/${index + 1}`}
                className={`group relative flex-shrink-0 w-[280px] md:w-[320px] bg-white border border-warm-border/80 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 snap-start ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + index * 120}ms` : "0ms" }}
              >
                {/* Image block */}
                <div className="relative aspect-square bg-warm-bg overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="320px"
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  ) : product.illustration ? (
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <SockIllustration
                        variant={product.illustration}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                  ) : null}

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-ink text-white text-[10px] font-bold tracking-[0.12em] rounded-full">
                      {product.badge}
                    </span>
                  )}

                  {/* Arrow button — shown on hover */}
                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white border border-warm-border flex items-center justify-center shadow-card opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F0F10" strokeWidth="2" strokeLinecap="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-base font-semibold text-ink leading-snug line-clamp-1">
                    {product.name}
                  </p>
                  <p className="text-sm text-warm-gray mt-1.5 line-clamp-1">
                    {product.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-warm-border my-5" />

                  {/* Price or inquiry */}
                  {product.price ? (
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold text-ink tracking-tight">
                          {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-warm-gray">원 / {product.unit}</span>
                      </div>
                      <p className="text-xs text-warm-gray mt-1">
                        1켤레당 {product.unitPrice?.toLocaleString()}원
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-ink">
                        문의 시 견적
                      </span>
                      <span className="text-xs text-warm-gray">· 수량별 단가</span>
                    </div>
                  )}

                  {/* Bulk discount */}
                  {product.bulkDiscount && (
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-soft text-accent text-[11px] font-semibold rounded-full">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {product.bulkDiscount}
                      </span>
                    </div>
                  )}

                  {/* Meta bar */}
                  <div className="mt-5 pt-4 border-t border-warm-border flex items-center gap-1.5 text-xs text-warm-gray">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    후기 {product.reviews}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
