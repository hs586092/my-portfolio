"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PRODUCT = {
  name: "어린이용 미끄럼방지 양말 (10켤레)",
  price: 50000,
  description: "프리미엄 미끄럼방지 양말 10켤레 세트",
};

export default function CheckoutPage() {
  const widgetRef = useRef<any>(null);
  const paymentMethodRef = useRef<HTMLDivElement>(null);
  const agreementRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
  const hasKey = clientKey && !clientKey.startsWith("[");

  useEffect(() => {
    if (!hasKey) return;

    const script = document.createElement("script");
    script.src = "https://js.tosspayments.com/v2/standard";
    script.onload = async () => {
      try {
        // @ts-expect-error TossPayments is loaded via script
        const tossPayments = TossPayments(clientKey);
        const widgets = tossPayments.widgets({ customerKey: "ANONYMOUS" });

        await widgets.setAmount({
          currency: "KRW",
          value: PRODUCT.price,
        });

        if (paymentMethodRef.current) {
          await widgets.renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT",
          });
        }

        if (agreementRef.current) {
          await widgets.renderAgreement({
            selector: "#agreement",
            variantKey: "AGREEMENT",
          });
        }

        widgetRef.current = widgets;
        setReady(true);
      } catch (err: any) {
        setError(err.message || "결제 위젯 로드 실패");
      }
    };
    script.onerror = () => setError("토스페이먼츠 SDK 로드 실패");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [clientKey, hasKey]);

  const handlePayment = async () => {
    if (!widgetRef.current) return;
    setLoading(true);

    try {
      await widgetRef.current.requestPayment({
        orderId: `order_${Date.now()}`,
        orderName: PRODUCT.name,
        successUrl: `${window.location.origin}/checkout/success`,
        failUrl: `${window.location.origin}/checkout/fail`,
      });
    } catch (err: any) {
      setError(err.message || "결제 요청 실패");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-bg">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-warm-gray hover:text-accent transition-colors">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-2xl font-semibold text-dark mt-4">주문/결제</h1>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <h2 className="text-sm text-warm-gray mb-3 font-medium">주문 상품</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark font-medium">{PRODUCT.name}</p>
              <p className="text-sm text-warm-gray mt-1">{PRODUCT.description}</p>
            </div>
            <p className="text-xl font-semibold text-dark">
              {PRODUCT.price.toLocaleString()}원
            </p>
          </div>
        </div>

        {/* Key Not Set Warning */}
        {!hasKey && (
          <div className="bg-white rounded-2xl p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <div className="w-16 h-16 bg-warm-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm-gray">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">토스페이먼츠 키를 설정해주세요</h3>
            <p className="text-sm text-warm-gray leading-relaxed mb-4">
              결제 기능을 사용하려면 <code className="bg-warm-bg px-1.5 py-0.5 rounded text-xs">.env.local</code> 파일에
              <br />
              토스페이먼츠 클라이언트 키를 입력해야 합니다.
            </p>
            <div className="bg-warm-bg rounded-xl p-4 text-left text-xs text-warm-gray font-mono">
              <p>NEXT_PUBLIC_TOSS_CLIENT_KEY=&quot;test_ck_...&quot;</p>
              <p>TOSS_SECRET_KEY=&quot;test_sk_...&quot;</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 rounded-2xl p-4 mb-6 text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Payment Widget */}
        {hasKey && (
          <>
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
              <div id="payment-method" ref={paymentMethodRef} />
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
              <div id="agreement" ref={agreementRef} />
            </div>

            {/* Pay Button */}
            <button
              type="button"
              onClick={handlePayment}
              disabled={!ready || loading}
              className="w-full bg-accent text-white py-4 rounded-full text-base font-medium transition-all duration-300 hover:bg-[#e8877e] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "처리 중..." : `${PRODUCT.price.toLocaleString()}원 결제하기`}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
