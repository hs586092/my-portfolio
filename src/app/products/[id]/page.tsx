"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

const tabs = ["상세정보", "사이즈 가이드", "배송/교환"] as const;
type Tab = (typeof tabs)[number];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  const [activeTab, setActiveTab] = useState<Tab>("상세정보");
  const [mainImageIndex, setMainImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <p className="text-warm-gray text-lg mb-6">상품을 찾을 수 없습니다.</p>
        <Link
          href="/"
          className="text-[#F4978E] font-medium hover:underline"
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.id !== product.id);
  const hasImages = product.images.length > 0;

  return (
    <div className="bg-white">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-2">
        <Link
          href="/#business"
          className="inline-flex items-center gap-1.5 text-sm text-warm-gray hover:text-[#F4978E] transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          전체 상품 보기
        </Link>
      </div>

      {/* Product Info — 2 columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-warm-bg rounded-2xl overflow-hidden mb-3">
              {hasImages ? (
                <Image
                  src={product.images[mainImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-warm-gray text-sm">
                    상품 이미지 준비중
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {hasImages && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setMainImageIndex(i)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      mainImageIndex === i
                        ? "border-[#F4978E]"
                        : "border-transparent hover:border-warm-border"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Name */}
            <h1 className="text-2xl lg:text-3xl font-semibold text-dark mb-3">
              {product.name}
            </h1>

            {/* Rating + Reviews */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5 text-[#F4978E]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="text-dark font-semibold text-sm">
                {product.rating}
              </span>
              <span className="text-warm-gray text-sm">
                ({product.reviewCount}개 리뷰)
              </span>
            </div>

            {/* Price */}
            {product.price ? (
              <div className="mb-2">
                <span className="text-2xl lg:text-3xl font-semibold text-dark">
                  {product.price.toLocaleString()}원
                </span>
                <span className="text-warm-gray text-sm ml-2">
                  ({product.unit})
                </span>
              </div>
            ) : (
              <div className="mb-2">
                <span className="text-2xl font-semibold text-dark">
                  가격 문의
                </span>
              </div>
            )}

            {/* Unit price */}
            {product.unitPrice && (
              <p className="text-sm text-warm-gray mb-4">
                1켤레당 {product.unitPrice.toLocaleString()}원
              </p>
            )}

            {/* Bulk discount badge */}
            {product.bulkDiscount && (
              <div className="inline-block px-4 py-2 bg-[#FFF0ED] text-[#F4978E] text-sm font-medium rounded-full mb-4">
                {product.bulkDiscount}
              </div>
            )}

            {/* Free shipping badge */}
            {product.freeShipping && (
              <div className="flex items-center gap-2 mb-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F4978E"
                  strokeWidth="1.5"
                >
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16,8 20,8 23,11 23,16 16,16" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span className="text-sm text-[#F4978E] font-medium">
                  전국 무료배송
                </span>
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a
                href="#contact"
                className="block w-full py-3.5 bg-[#F4978E] text-white text-center font-medium rounded-full hover:bg-[#e8887f] transition-colors"
              >
                문의하기
              </a>
              <a
                href="#contact"
                className="block w-full py-3.5 border border-[#F4978E] text-[#F4978E] text-center font-medium rounded-full hover:bg-[#FFF0ED] transition-colors"
              >
                대량주문 견적 요청
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
        {/* Tab Headers */}
        <div className="flex border-b border-[#e8e4e0] mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-[#F4978E]"
                  : "text-warm-gray hover:text-dark"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F4978E]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {activeTab === "상세정보" && (
            <div>
              <h3 className="text-lg font-semibold text-dark mb-4">
                상품 특징
              </h3>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F4978E"
                      strokeWidth="2"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-sm text-dark leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Detail image placeholder */}
              <div className="bg-warm-bg rounded-2xl py-20 text-center">
                <span className="text-warm-gray text-sm">
                  상세 이미지 준비중
                </span>
              </div>
            </div>
          )}

          {activeTab === "사이즈 가이드" && (
            <div>
              <h3 className="text-lg font-semibold text-dark mb-4">
                사이즈 안내
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full max-w-lg text-sm">
                  <thead>
                    <tr className="border-b border-[#e8e4e0]">
                      <th className="text-left py-3 px-4 font-semibold text-dark">
                        사이즈
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-dark">
                        발 길이
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-dark">
                        권장 연령
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizes.map((size) => (
                      <tr
                        key={size.label}
                        className="border-b border-[#e8e4e0]"
                      >
                        <td className="py-3 px-4 font-medium text-[#F4978E]">
                          {size.label}
                        </td>
                        <td className="py-3 px-4 text-warm-gray">
                          {size.footLength}
                        </td>
                        <td className="py-3 px-4 text-warm-gray">
                          {size.age}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "배송/교환" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-dark mb-3">
                  최소 주문 수량
                </h3>
                <p className="text-sm text-warm-gray">
                  {product.minOrder}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-3">
                  배송 안내
                </h3>
                <ul className="space-y-2 text-sm text-warm-gray">
                  <li>10,000원 이상 무료배송</li>
                  <li>CJ대한통운 택배사를 통해 배송 (배송 후 1~2일 수령)</li>
                  <li>당일배송 마감시간: 오후 1시</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-3">
                  교환/반품
                </h3>
                <p className="text-sm text-warm-gray">
                  {product.exchangePolicy}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-3">
                  세금계산서
                </h3>
                <p className="text-sm text-warm-gray">
                  주문 → 입금 → 발송 → 세금계산서 발행 순으로 진행됩니다.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {otherProducts.length > 0 && (
        <div className="bg-warm-bg py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-xl lg:text-2xl font-semibold text-dark mb-8">
              다른 상품도 확인해보세요
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] bg-warm-bg">
                    {p.images.length > 0 ? (
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-warm-gray text-xs">
                          이미지 준비중
                        </span>
                      </div>
                    )}
                    {p.freeShipping && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#F4978E] text-white text-xs font-medium rounded-md">
                        무료배송
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h4 className="text-sm font-semibold text-dark mb-1">
                      {p.name}
                    </h4>
                    <p className="text-xs text-warm-gray mb-2 line-clamp-1">
                      {p.description}
                    </p>
                    {p.price ? (
                      <span className="text-dark font-semibold">
                        {p.price.toLocaleString()}원
                      </span>
                    ) : (
                      <span className="text-dark font-semibold">
                        가격 문의
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
