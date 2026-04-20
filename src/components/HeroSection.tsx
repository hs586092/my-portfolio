"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative bg-[#FFFDFB] overflow-hidden"
    >
      {/* Warm gradient blob — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[220px] -right-[180px] w-[760px] h-[760px] z-0"
        style={{
          background:
            "radial-gradient(closest-side, #FFE4DD 0%, #FFEFEA 45%, rgba(255,239,234,0) 75%)",
          filter: "blur(2px)",
        }}
      />
      {/* Soft warm blob — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[200px] -left-[160px] w-[520px] h-[520px] z-0"
        style={{
          background:
            "radial-gradient(closest-side, #FFF6E6 0%, rgba(255,246,230,0) 70%)",
        }}
      />

      <div className="relative z-[2] max-w-[1320px] mx-auto px-6 lg:px-14 pt-10 lg:pt-14 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-center">
          {/* ===== LEFT ===== */}
          <div className="lg:pr-3">
            {/* Trust badge */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:100ms]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FAD9D2] bg-[#FFF3F0] py-[7px] pl-2 pr-3.5 text-[13px] font-semibold text-[#E07A70] tracking-[-0.005em]">
                <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-accent text-white text-[10px] font-extrabold">
                  ★
                </span>
                전국 20개 이상 키즈카페 납품
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-hero-fade-in opacity-0 [animation-delay:200ms] mt-[22px] mb-[18px] font-extrabold text-ink leading-[1.15] tracking-[-0.035em] [text-wrap:balance]"
              style={{ fontSize: "clamp(42px, 5.2vw, 72px)" }}
            >
              연간{" "}
              <span className="relative whitespace-nowrap text-accent">
                <span className="relative z-10">700,000+</span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-1 h-[14px] rounded-[2px] bg-[#FBE3DF] opacity-70 -z-0"
                />
              </span>
              <br />
              켤레 판매
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-fade-in opacity-0 [animation-delay:300ms] max-w-[540px] text-[18px] leading-[1.55] font-normal text-[#5A5252]">
              키즈카페
              <span className="inline-block align-middle mx-[10px] mb-[3px] w-1 h-1 rounded-full bg-[#8F8786]" />
              어린이집
              <span className="inline-block align-middle mx-[10px] mb-[3px] w-1 h-1 rounded-full bg-[#8F8786]" />
              실내 체육시설을 위한 미끄럼 방지 양말
            </p>

            {/* Stats card */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:400ms] my-[30px] w-max max-w-full rounded-2xl border border-[#EFE7E3] bg-white/60 backdrop-blur-[6px] px-[22px] py-[18px] flex items-center gap-[22px]">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-baseline gap-[5px] text-[22px] font-bold tracking-[-0.02em] text-ink">
                  7 <span className="text-[13px] font-medium text-[#5A5252]">컬러</span>
                </div>
                <div className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#8F8786]">
                  색상
                </div>
              </div>
              <div className="w-px h-[34px] bg-[#EFE7E3]" />
              <div className="flex flex-col gap-0.5">
                <div className="flex items-baseline gap-[5px] text-[22px] font-bold tracking-[-0.02em] text-ink">
                  4 <span className="text-[13px] font-medium text-[#5A5252]">사이즈</span>
                </div>
                <div className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#8F8786]">
                  유아 → 주니어
                </div>
              </div>
              <div className="w-px h-[34px] bg-[#EFE7E3]" />
              <div className="flex flex-col gap-0.5">
                <div className="flex items-baseline gap-[5px] text-[22px] font-bold tracking-[-0.02em] text-ink">
                  4.84
                  <span className="ml-0.5 text-[11px] tracking-[1px] text-accent">
                    ★★★★★
                  </span>
                </div>
                <div className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#8F8786]">
                  구매자 평점
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:500ms] flex flex-wrap items-center gap-3.5">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-xl px-6 py-4 text-[15px] font-semibold text-white bg-accent border border-transparent transition-all duration-150 hover:bg-[#E07A70] hover:-translate-y-px"
                style={{
                  boxShadow:
                    "0 8px 24px -10px rgba(244,151,142,.85), inset 0 -2px 0 rgba(0,0,0,.08)",
                }}
              >
                대량주문 문의
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  →
                </span>
              </Link>
              <Link
                href="#business"
                className="inline-flex items-center gap-2.5 rounded-xl px-6 py-4 text-[15px] font-semibold text-ink bg-transparent border-[1.5px] border-[#DCD3CF] transition-colors duration-200 hover:border-ink"
              >
                제품 보러가기
              </Link>
            </div>

            {/* Meta row */}
            <div className="animate-hero-fade-in opacity-0 [animation-delay:600ms] mt-8 flex items-center gap-[18px] text-[13px] text-[#5A5252]">
              <div className="flex">
                <span className="inline-block w-7 h-7 rounded-full border-2 border-white bg-[#FFD9A8]" />
                <span className="inline-block w-7 h-7 rounded-full border-2 border-white -ml-2 bg-[#C7E6D6]" />
                <span className="inline-block w-7 h-7 rounded-full border-2 border-white -ml-2 bg-[#D6D3F5]" />
                <span className="inline-block w-7 h-7 rounded-full border-2 border-white -ml-2 bg-[#FBE3DF]" />
              </div>
              전국 키즈 브랜드 구매팀이 신뢰하는 발산마켓
            </div>
          </div>

          {/* ===== RIGHT ===== */}
          <div className="relative aspect-square w-full max-w-[560px] ml-auto mx-auto lg:mx-0 animate-hero-scale-in opacity-0 [animation-delay:350ms]">
            {/* Product circle */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #FFE6E0 0%, #FAD0C7 60%, #F4B5AA 100%)",
                boxShadow:
                  "inset 0 -30px 60px rgba(224,122,112,.12), 0 40px 80px -30px rgba(244,151,142,.45)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-[18px] rounded-full border border-dashed border-white/60"
              />
            </div>

            {/* Decorative stars */}
            <svg
              className="absolute top-[12%] right-[4%] w-[26px] h-[26px] text-accent z-[4] rotate-[8deg]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 1.5l2.6 6.6 7.1.5-5.4 4.7 1.7 6.9L12 16.7 5.9 20.2l1.7-6.9-5.4-4.7 7.1-.5z" />
            </svg>
            <svg
              className="absolute bottom-[22%] -left-[2%] w-[18px] h-[18px] text-accent opacity-70 z-[4] -rotate-[12deg]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 1.5l2.6 6.6 7.1.5-5.4 4.7 1.7 6.9L12 16.7 5.9 20.2l1.7-6.9-5.4-4.7 7.1-.5z" />
            </svg>

            {/* Product photo */}
            <Image
              src="/images/product-7set.png"
              alt="7가지 컬러 미끄럼방지 양말"
              fill
              sizes="(max-width: 880px) 80vw, 560px"
              className="relative z-[3] object-contain p-12"
              priority
            />

            {/* BEST floating badge */}
            <div
              className="absolute top-[8%] -left-[6%] sm:-left-[6%] z-[5] flex items-center gap-2.5 rounded-[14px] bg-white px-4 py-3 text-[13px] font-bold text-ink"
              style={{
                boxShadow:
                  "0 16px 40px -12px rgba(31,26,26,.18), 0 2px 4px rgba(0,0,0,.04)",
              }}
            >
              <span className="rounded-md bg-accent px-2 py-1 text-[11px] font-extrabold tracking-[0.06em] text-white">
                BEST
              </span>
              <span>2025 베스트셀러</span>
            </div>

            {/* Safety certified badge */}
            <div
              className="absolute bottom-[8%] -right-[8%] z-[5] flex items-center gap-2.5 rounded-[14px] bg-white px-4 py-3 text-[13px] font-bold text-ink"
              style={{
                boxShadow:
                  "0 16px 40px -12px rgba(31,26,26,.18), 0 2px 4px rgba(0,0,0,.04)",
              }}
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#E8F4EC] text-[#2E8A55] text-[14px]">
                ✓
              </span>
              <span className="flex flex-col leading-[1.2]">
                안전 인증 완료
                <small className="text-[11px] font-medium text-[#8F8786]">
                  KC · OEKO-TEX®
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
