"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "전화 문의",
    value: "031-962-0314",
    href: "tel:031-962-0314",
    sub: "평일 09:00 – 18:00",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    label: "카카오톡 상담",
    value: "카카오톡 채널 '발산마켓'",
    href: "http://pf.kakao.com/",
    sub: "견적 · 배송 상담 가능",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "영업시간",
    value: "평일 09:00 – 18:00",
    href: null,
    sub: "주말 · 공휴일 휴무",
  },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 별도 백엔드 연동 전까지는 안내 메시지로 대체
    alert(
      "문의 접수 기능은 준비 중입니다.\n빠른 상담은 카카오톡 '발산마켓' 또는 031-962-0314로 연락 부탁드립니다."
    );
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
            Contact
          </span>
          <h2 className="text-3xl lg:text-[2.5rem] font-semibold text-ink tracking-tight leading-tight mb-4">
            대량주문 · 납품 문의
          </h2>
          <p className="text-base text-warm-gray leading-relaxed max-w-xl mx-auto">
            수량, 색상 구성, 예산에 맞춰 견적을 안내해 드립니다.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-[5fr_6fr] gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <div
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            {contactInfo.map((item) => {
              const content = (
                <div className="flex items-start gap-4 p-5 lg:p-6 bg-warm-bg border border-warm-border/60 rounded-2xl transition-all duration-300 hover:border-accent/40 hover:bg-accent-soft/30">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-warm-border text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-warm-gray mb-1">{item.label}</div>
                    <div className="text-ink font-semibold text-base truncate">
                      {item.value}
                    </div>
                    <div className="text-xs text-warm-gray mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="이름"
                className="w-full px-5 py-3.5 bg-white border border-warm-border rounded-xl text-ink text-sm placeholder:text-warm-gray outline-none transition-colors duration-300 focus:border-accent"
              />
              <input
                type="text"
                placeholder="기관명 (선택)"
                className="w-full px-5 py-3.5 bg-white border border-warm-border rounded-xl text-ink text-sm placeholder:text-warm-gray outline-none transition-colors duration-300 focus:border-accent"
              />
            </div>

            <input
              type="tel"
              placeholder="연락처"
              className="w-full px-5 py-3.5 bg-white border border-warm-border rounded-xl text-ink text-sm placeholder:text-warm-gray outline-none transition-colors duration-300 focus:border-accent"
            />

            <textarea
              placeholder="문의 내용 (필요 수량, 납품 일정 등을 함께 적어주세요)"
              rows={6}
              className="w-full px-5 py-3.5 bg-white border border-warm-border rounded-xl text-ink text-sm placeholder:text-warm-gray outline-none transition-colors duration-300 focus:border-accent resize-none"
            />

            <button
              type="submit"
              className="w-full bg-accent text-white py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#e8877e] shadow-card hover:shadow-card-hover"
            >
              문의 보내기
            </button>

            <p className="text-xs text-warm-gray text-center pt-1">
              빠른 상담은 카카오톡 &lsquo;발산마켓&rsquo; 또는 031-962-0314로 연락 부탁드립니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
