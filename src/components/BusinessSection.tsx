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
    name: "프리미엄 미끄럼방지 양말 (5켤레)",
    description: "어린이집 필수템, 실리콘 미끄럼방지 패드 적용",
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
    name: "스트라이프 미끄럼방지 양말 (3켤레)",
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
    name: "하트 패턴 미끄럼방지 양말 (3켤레)",
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

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="business" className="bg-warm-bg py-20 lg:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div
          className={`mb-10 lg:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
            Product Lineup
          </span>
          <h2 className="text-3xl lg:text-[2.5rem] font-semibold text-ink tracking-tight leading-tight">
            현장에서 가장 많이 찾는 상품
          </h2>
          <p className="text-base text-warm-gray mt-3 leading-relaxed">
            어린이집 · 키즈카페에서 꾸준히 주문해주시는 주력 라인입니다.
          </p>
        </div>

        {/* Product Cards — horizontal scroll */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/products/${index + 1}`}
                className={`group flex-shrink-0 w-[240px] md:w-[270px] bg-white border border-warm-border/60 rounded-2xl p-4 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + index * 120}ms` : "0ms" }}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] bg-warm-bg rounded-xl overflow-hidden mb-4">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : product.illustration ? (
                    <div className="w-full h-full flex items-center justify-center p-5">
                      <SockIllustration
                        variant={product.illustration}
                        className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : null}

                  {/* Product Badge (BEST/NEW) */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-ink text-white text-[10px] font-semibold tracking-wider rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Name */}
                <p className="text-sm font-semibold text-ink mb-1.5 line-clamp-2 leading-snug">
                  {product.name}
                </p>

                {/* Description */}
                <p className="text-xs text-warm-gray mb-3 line-clamp-1 leading-snug">
                  {product.description}
                </p>

                {/* Price or Inquiry */}
                <div className="mb-3 min-h-[48px]">
                  {product.price ? (
                    <>
                      <p className="text-ink font-bold text-base">
                        {product.price.toLocaleString()}원
                        <span className="text-xs font-normal text-warm-gray ml-1">
                          / {product.unit}
                        </span>
                      </p>
                      <p className="text-xs text-warm-gray mt-0.5">
                        1켤레당 {product.unitPrice?.toLocaleString()}원
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-warm-gray leading-snug">
                      문의 시 수량별 단가 안내
                    </p>
                  )}
                </div>

                {/* Bulk Discount Badge */}
                {product.bulkDiscount && (
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-accent-soft text-accent text-[11px] font-medium rounded-full">
                      {product.bulkDiscount}
                    </span>
                  </div>
                )}

                {/* Reviews */}
                {product.reviews && (
                  <div className="flex items-center gap-1.5 text-xs text-warm-gray pt-3 border-t border-warm-border/60">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    후기 {product.reviews}
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="다음 상품"
            className="hidden md:flex absolute -right-4 top-1/3 -translate-y-1/2 w-11 h-11 bg-white border border-warm-border rounded-full items-center justify-center shadow-card hover:border-accent hover:text-accent transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
