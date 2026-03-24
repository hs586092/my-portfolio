"use client";

const quickLinks = [
  { label: "회사소개", href: "#top" },
  { label: "사업영역", href: "#business" },
  { label: "신뢰와 실적", href: "#trust" },
  { label: "문의하기", href: "#contact" },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* 회사정보 */}
          <div>
            <h3 className="font-serif text-lg tracking-[0.15em] text-gold mb-4">
              HS TRADING
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              신뢰를 바탕으로 다양한 생활잡화를 공급하는
              <br />
              종합 무역 전문 기업입니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-gold mb-4">
              바로가기
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="text-sm text-gray-300 transition-colors duration-300 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-gold mb-4">
              연락처
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">Tel</span>
                <span>02-1234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">Email</span>
                <span>info@hstrading.co.kr</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">Addr</span>
                <span>서울특별시 강남구 테헤란로 123, 8층</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6">
          <p className="text-center text-xs text-gray-400 tracking-wide">
            &copy; {new Date().getFullYear()} HS TRADING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
