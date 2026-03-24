"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about" className="bg-white py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-dark">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1696694023045-2112ad21284b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYW50aS1zbGlwJTIwc29ja3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzQzMTc2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="키즈 미끄럼 방지 양말"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex items-center min-h-[250px] md:min-h-[400px] px-8 md:px-16 py-12">
            <div className="max-w-lg space-y-5">
              <div className="animate-hero-fade-in opacity-0 [animation-delay:100ms]">
                <span className="inline-block px-4 py-1.5 bg-accent text-white text-xs rounded-full font-medium">
                  Since 2015
                </span>
              </div>

              <h1 className="animate-hero-fade-in text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight opacity-0 [animation-delay:300ms]">
                연간 70만 켤레의
                <br />
                압도적 판매량!
              </h1>

              <p className="animate-hero-fade-in text-white/70 text-base md:text-lg font-light opacity-0 [animation-delay:500ms]">
                키즈카페 미끄럼 방지 양말
              </p>

              <div className="animate-hero-fade-in opacity-0 [animation-delay:700ms]">
                <Link
                  href="#business"
                  className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3 rounded-full text-sm transition-all duration-300 hover:bg-[#e8877e]"
                >
                  사업영역 보기
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-5 left-8 md:left-16 flex items-center gap-2 z-10">
            <span className="w-6 h-1.5 rounded-full bg-accent" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>

          {/* Slide Counter */}
          <div className="absolute bottom-5 right-8 md:right-16 text-white/50 text-xs z-10">
            01 / 03
          </div>
        </div>
      </div>
    </section>
  );
}
