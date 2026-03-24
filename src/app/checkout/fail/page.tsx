"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function FailContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const message = searchParams.get("message");

  return (
    <div className="min-h-screen bg-warm-bg">
      <div className="max-w-lg mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>

          <h1 className="text-xl font-semibold text-dark mb-2">결제에 실패했습니다</h1>
          <p className="text-sm text-warm-gray mb-2">
            {message || "알 수 없는 오류가 발생했습니다."}
          </p>
          {code && (
            <p className="text-xs text-warm-gray mb-8">
              오류 코드: {code}
            </p>
          )}

          <div className="space-y-3">
            <Link
              href="/checkout"
              className="block w-full bg-accent text-white py-3.5 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-[#e8877e]"
            >
              다시 시도하기
            </Link>
            <Link
              href="/"
              className="block w-full border border-warm-border text-dark py-3.5 rounded-full text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutFailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-warm-bg flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <FailContent />
    </Suspense>
  );
}
