"use client";

const topLinks = [
  { label: "회사소개", href: "#top", bold: false },
  { label: "사업영역", href: "#business", bold: false },
  { label: "이용약관", href: "#", bold: false },
  { label: "개인정보처리방침", href: "#", bold: true },
  { label: "이용안내", href: "#", bold: false },
];

const inquiries = [
  {
    label: "카카오톡 문의",
    desc: "월~토요일 오전 7시 - 오후 6시\n일/공휴일 오전 7시 - 오후 1시",
  },
  {
    label: "1:1 문의",
    desc: "365일 고객센터 운영시간에 순차적으로 답변드리겠습니다.",
  },
  {
    label: "대량주문 문의",
    desc: "월~금요일 오전 9시 - 오후 6시\n점심시간 낮 12시 - 오후 1시",
  },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") return;
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
    <footer className="bg-white">
      {/* 영역 1: 상단 링크 바 */}
      <div className="border-t border-warm-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {topLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm transition-colors duration-300 hover:text-accent ${
                  link.bold ? "font-bold text-dark" : "text-dark"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 영역 2: 메인 콘텐츠 */}
      <div className="border-t border-warm-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* 왼쪽: 고객행복센터 */}
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">고객행복센터</h3>
              <p className="text-3xl lg:text-4xl font-bold text-dark mb-2">1644-0000</p>
              <p className="text-sm text-warm-gray mb-8">월~토요일 오전 7시 - 오후 6시</p>

              <div className="space-y-4">
                {inquiries.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex-shrink-0 px-3 py-1.5 border border-warm-border rounded-md text-sm text-dark whitespace-nowrap">
                      {item.label}
                    </span>
                    <p className="text-sm text-warm-gray leading-relaxed whitespace-pre-line pt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 소셜 + 회사 정보 */}
            <div>
              {/* 소셜 미디어 */}
              <div className="flex items-center gap-3 mb-8">
                {[
                  { label: "B", ariaLabel: "블로그" },
                  { label: "f", ariaLabel: "페이스북" },
                  { label: "ig", ariaLabel: "인스타그램" },
                  { label: "yt", ariaLabel: "유튜브" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.ariaLabel}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xs text-warm-gray font-medium hover:bg-gray-200 transition-colors duration-300"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              {/* 회사 정보 */}
              <div className="text-xs text-warm-gray leading-6 space-y-0.5">
                <p>
                  법인명(상호): [회사명]
                  <span className="mx-1.5 text-warm-border">|</span>
                  사업자등록번호: [000-00-00000]
                  <a href="#" className="ml-1 underline underline-offset-2">사업자정보 확인</a>
                </p>
                <p>통신판매업: [제0000-서울강남-0000호]</p>
                <p>주소: [서울특별시 강남구 테헤란로 123, 8층]</p>
                <p>
                  대표이사: [대표자명]
                  <span className="mx-1.5 text-warm-border">|</span>
                  이메일: [info@example.com]
                </p>
                <p>팩스: [02-0000-0000]</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 영역 3: Copyright */}
      <div className="border-t border-warm-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-6">
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} Balsan Market. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
