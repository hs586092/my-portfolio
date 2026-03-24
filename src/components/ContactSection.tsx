"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
    ),
    label: "전화",
    value: "[전화번호를 입력하세요]",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg>
    ),
    label: "이메일",
    value: "[이메일을 입력하세요]",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
    label: "주소",
    value: "[주소를 입력하세요]",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
    label: "영업시간",
    value: "평일 09:00 - 18:00",
  },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2
          className={`text-3xl lg:text-4xl font-semibold text-dark mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          문의하기
        </h2>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-6 h-6 text-accent mt-0.5 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-medium text-dark mb-1">{item.label}</div>
                  <div className="text-warm-gray">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <div>
              <input
                type="text"
                placeholder="이름"
                className="w-full px-5 py-3.5 bg-warm-bg border border-transparent rounded-xl text-dark text-sm outline-none transition-colors duration-300 focus:border-accent focus:bg-white"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="연락처"
                className="w-full px-5 py-3.5 bg-warm-bg border border-transparent rounded-xl text-dark text-sm outline-none transition-colors duration-300 focus:border-accent focus:bg-white"
              />
            </div>

            <div>
              <textarea
                placeholder="문의내용"
                rows={5}
                className="w-full px-5 py-3.5 bg-warm-bg border border-transparent rounded-xl text-dark text-sm outline-none transition-colors duration-300 focus:border-accent focus:bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white py-3.5 rounded-full text-sm transition-colors duration-300 hover:bg-[#b3725f]"
            >
              문의 보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
