"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    label: "카카오톡 상담",
    value: "채널 '발산마켓'",
    href: "http://pf.kakao.com/",
    sub: "견적 · 배송 상담",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    alert(
      "문의 접수 기능은 준비 중입니다.\n빠른 상담은 카카오톡 '발산마켓' 또는 031-962-0314로 연락 부탁드립니다."
    );
  };

  return (
    <section id="contact" className="bg-white py-section">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: sticky title + info cards */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="lg:sticky lg:top-24">
              <span className="text-eyebrow text-accent">Contact</span>
              <h2 className="text-h1 text-ink mt-3 mb-5">
                대량주문 · 납품
                <br />
                문의
              </h2>
              <p className="text-lead text-warm-gray mb-10 max-w-md">
                수량, 색상 구성, 예산에 맞춰 견적을 안내해 드립니다.
              </p>

              <div className="space-y-3">
                {contactInfo.map((item) => {
                  const content = (
                    <div className="group flex items-center gap-5 p-5 lg:p-6 bg-white border border-warm-border rounded-2xl transition-all duration-300 hover:border-ink hover:shadow-card">
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full bg-warm-bg text-ink group-hover:bg-ink group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-semibold tracking-wider uppercase text-warm-gray mb-1">
                          {item.label}
                        </div>
                        <div className="text-base font-bold text-ink truncate">
                          {item.value}
                        </div>
                        <div className="text-xs text-warm-gray mt-0.5">
                          {item.sub}
                        </div>
                      </div>
                      {item.href && (
                        <svg
                          className="flex-shrink-0 text-warm-gray group-hover:text-ink group-hover:translate-x-0.5 transition-all duration-300"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      )}
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
            </div>
          </div>

          {/* Right: form card */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-7 bg-warm-bg border border-warm-border rounded-2xl p-8 lg:p-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <h3 className="text-h2 text-ink mb-2">문의 남기기</h3>
            <p className="text-sm text-warm-gray mb-8">
              필요한 수량과 일정을 함께 알려주시면 더 정확한 견적을 드릴 수 있습니다.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    className="w-full px-5 py-4 bg-white border border-warm-border rounded-xl text-ink text-sm placeholder:text-warm-gray/60 outline-none transition-all duration-300 focus:border-ink focus:ring-2 focus:ring-ink/5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-2">
                    기관명 <span className="text-warm-gray font-normal">(선택)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="○○키즈카페"
                    className="w-full px-5 py-4 bg-white border border-warm-border rounded-xl text-ink text-sm placeholder:text-warm-gray/60 outline-none transition-all duration-300 focus:border-ink focus:ring-2 focus:ring-ink/5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  className="w-full px-5 py-4 bg-white border border-warm-border rounded-xl text-ink text-sm placeholder:text-warm-gray/60 outline-none transition-all duration-300 focus:border-ink focus:ring-2 focus:ring-ink/5"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-2">
                  문의 내용
                </label>
                <textarea
                  placeholder="필요 수량, 납품 일정, 예산 등을 자유롭게 작성해 주세요."
                  rows={6}
                  className="w-full px-5 py-4 bg-white border border-warm-border rounded-xl text-ink text-sm placeholder:text-warm-gray/60 outline-none transition-all duration-300 focus:border-ink focus:ring-2 focus:ring-ink/5 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group w-full mt-8 bg-ink text-white py-4 rounded-full text-sm font-semibold shadow-card hover:shadow-card-hover hover:bg-ink/90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              문의 보내기
              <svg
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <p className="text-xs text-warm-gray text-center mt-5">
              빠른 상담은 카카오톡 &lsquo;발산마켓&rsquo; 또는{" "}
              <a href="tel:031-962-0314" className="font-semibold text-ink hover:underline">
                031-962-0314
              </a>
              로 연락 부탁드립니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
