"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");

  useEffect(() => {
    if (!paymentKey || !orderId || !amount) {
      setError("결제 정보가 올바르지 않습니다.");
      setLoading(false);
      return;
    }

    const confirmPayment = async () => {
      try {
        const res = await fetch("/api/payment/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentKey, orderId, amount: Number(amount) }),
        });

        const data = await res.json();

        if (res.ok) {
          setResult(data);
        } else {
          setError(data.message || "결제 승인에 실패했습니다.");
        }
      } catch {
        setError("결제 승인 요청 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    confirmPayment();
  }, [paymentKey, orderId, amount]);

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-warm-gray">결제를 승인하고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-bg">
      <div className="max-w-lg mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          {error ? (
            <>
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-dark mb-2">결제 승인 실패</h1>
              <p className="text-sm text-warm-gray mb-6">{error}</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-dark mb-2">결제가 완료되었습니다</h1>
              <p className="text-sm text-warm-gray mb-6">주문이 정상적으로 처리되었습니다.</p>

              <div className="bg-warm-bg rounded-xl p-5 text-left space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">주문번호</span>
                  <span className="text-dark font-medium">{result?.orderId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">결제 금액</span>
                  <span className="text-dark font-medium">
                    {result?.totalAmount?.toLocaleString()}원
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">결제 방법</span>
                  <span className="text-dark font-medium">{result?.method || "-"}</span>
                </div>
              </div>
            </>
          )}

          <Link
            href="/"
            className="inline-block w-full bg-accent text-white py-3.5 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-[#e8877e]"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-warm-bg flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
