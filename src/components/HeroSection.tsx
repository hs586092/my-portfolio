"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="animate-hero-fade-in opacity-0 [animation-delay:100ms]">
              <span className="inline-block px-4 py-2 bg-[#f5f5f5] text-sm text-[#111]">
                Since 2015
              </span>
            </div>

            <h1 className="animate-hero-fade-in text-5xl lg:text-6xl font-bold text-[#111] leading-tight opacity-0 [animation-delay:300ms]">
              연간 20만 켤레의
              <br />
              압도적 판매량!
            </h1>

            <p className="animate-hero-fade-in text-2xl text-gray-600 opacity-0 [animation-delay:500ms]">
              키즈카페 미끄럼 방지 양말
            </p>

            <div className="animate-hero-fade-in opacity-0 [animation-delay:700ms]">
              <Link
                href="#business"
                className="inline-flex items-center gap-2 bg-[#111] text-white px-8 py-4 transition-colors duration-300 hover:bg-[#333]"
              >
                사업영역 보기
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2">
            <div className="animate-hero-fade-in opacity-0 [animation-delay:400ms] relative aspect-square lg:aspect-[4/3] bg-[#f5f5f5] overflow-hidden">
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
