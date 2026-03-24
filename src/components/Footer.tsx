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
    <footer className="bg-[#2c2c2c] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Balsan Market</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              키즈 전문 무역 기업
              <br />
              Since 2015
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 font-light">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="hover:text-[#c4826d] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 font-light">
              <li>Tel: 02-1234-5678</li>
              <li>Email: contact@balsanmarket.com</li>
              <li>서울시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Balsan Market. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
