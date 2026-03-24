"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SockIllustration from "./SockIllustration";

const products = [
  {
    name: "프리미엄 미끄럼방지 양말 (5켤레)",
    image: "https://images.unsplash.com/photo-1542355581-caf7454785ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc29ja3MlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQzMTc2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "미끄럼방지 양말",
    badge: "BEST",
    originalPrice: "15,000원",
    discount: "30%",
    salePrice: "10,500원",
    reviews: "999+",
    hasImage: true,
  },
  {
    name: "스트라이프 미끄럼방지 양말 (3켤레)",
    image: "",
    alt: "스트라이프 양말",
    badge: "NEW",
    originalPrice: "9,900원",
    discount: "20%",
    salePrice: "7,920원",
    reviews: "128",
    hasImage: false,
    illustration: 2 as const,
  },
  {
    name: "곰돌이 미끄럼방지 양말 (5켤레)",
    image: "",
    alt: "곰돌이 양말",
    badge: null,
    originalPrice: "12,000원",
    discount: "15%",
    salePrice: "10,200원",
    reviews: "256",
    hasImage: false,
    illustration: 3 as const,
  },
  {
    name: "하트 패턴 미끄럼방지 양말 (3켤레)",
    image: "",
    alt: "하트 패턴 양말",
    badge: null,
    originalPrice: "8,500원",
    discount: null,
    salePrice: "8,500원",
    reviews: "87",
    hasImage: false,
    illustration: 4 as const,
  },
];

export default function BusinessSection() {
  const { ref, isVisible } = useScrollAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <section id="business" className="bg-white py-10 lg:py-14">
      <div ref={ref} className="max-w-7xl mx-auto px-4 lg:px-12">
        {/* Section Title */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-xl lg:text-2xl font-semibold text-dark flex items-center gap-1">
            지금 가장 많이 찾는 상품
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-warm-gray">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </h2>
          <p className="text-sm text-warm-gray mt-1.5 font-light">
            어린이집·키즈카페에서 가장 많이 주문하는 상품
          </p>
        </div>

        {/* Product Cards — horizontal scroll */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[220px] md:w-[250px] transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + index * 120}ms` : "0ms" }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] bg-warm-bg rounded-lg overflow-hidden mb-3">
                  {product.hasImage ? (
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover"
                    />
                  ) : "illustration" in product && product.illustration ? (
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <SockIllustration variant={product.illustration as 1 | 2 | 3 | 4} className="w-full h-full" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center border border-dashed border-warm-border">
                      <span className="text-xs text-warm-gray">이미지를 넣어주세요</span>
                    </div>
                  )}

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-accent text-white text-[10px] font-medium rounded">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-1.5 py-2 border border-warm-border rounded-lg text-sm text-dark mb-3 hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                  담기
                </button>

                {/* Product Name */}
                <p className="text-sm text-dark mb-2 line-clamp-2 leading-snug">
                  {product.name}
                </p>

                {/* Price */}
                <div className="space-y-0.5">
                  <p className="text-xs text-warm-gray line-through">
                    {product.originalPrice}
                  </p>
                  <div className="flex items-center gap-2">
                    {product.discount && (
                      <span className="text-accent font-semibold text-sm">
                        {product.discount}
                      </span>
                    )}
                    <span className="text-dark font-semibold text-base">
                      {product.salePrice}
                    </span>
                  </div>
                </div>

                {/* Reviews */}
                {product.reviews && (
                  <p className="text-xs text-warm-gray mt-2">
                    💬 {product.reviews}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="다음 상품"
            className="hidden md:flex absolute -right-3 top-1/3 -translate-y-1/2 w-10 h-10 bg-white border border-warm-border rounded-full items-center justify-center shadow-md hover:border-accent transition-colors"
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
