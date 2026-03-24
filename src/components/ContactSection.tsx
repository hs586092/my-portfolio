"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  { label: "전화", value: "[전화번호를 입력하세요]" },
  { label: "이메일", value: "[이메일을 입력하세요]" },
  { label: "주소", value: "[주소를 입력하세요]" },
  { label: "영업시간", value: "평일 09:00 - 18:00" },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
  };

  return (
    <section id="contact" className="bg-[#fafafa] py-24 md:py-32 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
            문의하기
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-gray-500 text-sm">
            제품 문의, 대량 주문, 사업 제안 등 편하게 연락주세요.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            {contactInfo.map((item) => (
              <div key={item.label}>
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-1.5">
                  {item.label}
                </p>
                <p className="text-navy text-lg">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs tracking-[0.1em] uppercase text-gray-500 mb-2"
              >
                이름
              </label>
              <input
                type="text"
                id="name"
                placeholder="이름을 입력하세요"
                className="w-full border-b border-gray-300 bg-transparent py-3 text-navy text-sm outline-none transition-colors duration-300 focus:border-gold"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs tracking-[0.1em] uppercase text-gray-500 mb-2"
              >
                연락처
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="연락처를 입력하세요"
                className="w-full border-b border-gray-300 bg-transparent py-3 text-navy text-sm outline-none transition-colors duration-300 focus:border-gold"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs tracking-[0.1em] uppercase text-gray-500 mb-2"
              >
                문의내용
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="문의 내용을 입력하세요"
                className="w-full border border-gray-300 rounded-sm bg-transparent p-3 text-navy text-sm outline-none transition-colors duration-300 focus:border-gold resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-white py-3.5 text-sm tracking-[0.15em] uppercase transition-colors duration-300 hover:bg-[#b8963f]"
            >
              문의 보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
