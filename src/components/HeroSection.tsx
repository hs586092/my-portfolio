"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-7 order-2 lg:order-1">
            <div className="animate-hero-fade-in opacity-0 [animation-delay:100ms]">
              <span className="inline-block px-4 py-1.5 bg-warm-bg text-sm text-warm-gray rounded-full">
                Since 2015
              </span>
            </div>

            <h1 className="animate-hero-fade-in text-4xl lg:text-5xl xl:text-6xl font-semibold text-dark leading-tight opacity-0 [animation-delay:300ms]">
              연간 20만 켤레의
              <br />
              압도적 판매량!
            </h1>

            <p className="animate-hero-fade-in text-xl text-warm-gray font-light opacity-0 [animation-delay:500ms]">
              키즈카페 미끄럼 방지 양말
            </p>

            <div className="animate-hero-fade-in opacity-0 [animation-delay:700ms] space-y-3">
              <Link
                href="#business"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full text-sm transition-all duration-300 hover:bg-[#e8877e]"
              >
                사업영역 보기
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
              <p className="text-sm text-warm-gray font-light">
                전국 어린이집·키즈카페 납품
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2">
            <div className="animate-hero-fade-in opacity-0 [animation-delay:400ms] relative aspect-square lg:aspect-[4/3] bg-warm-bg overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1696694023045-2112ad21284b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYW50aS1zbGlwJTIwc29ja3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzQzMTc2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="키즈 미끄럼 방지 양말"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
