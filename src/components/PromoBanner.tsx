"use client";

import { useState } from "react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-accent text-white text-sm text-center py-2.5 px-6 relative">
      <span>대량 주문 시 최대 30% 할인! 지금 문의하세요</span>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="프로모션 닫기"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
