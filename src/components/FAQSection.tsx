"use client";

import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "대량주문 최소 수량과 견적 문의는 어떻게 하나요?",
    answer:
      "수량에 따라 단가가 조정되며, 100켤레 이상부터 본격적인 대량주문 할인이 적용됩니다. 카카오톡 '발산마켓' 채널 또는 031-962-0314로 연락주시면 수량별 견적서를 보내드립니다.",
  },
  {
    question: "세금계산서 발행이 가능한가요?",
    answer:
      "네, 가능합니다. 주문 → 입금 → 발송 → 세금계산서 발행 순으로 진행되며, 사업자 정보를 미리 전달해 주시면 더 빠르게 처리됩니다.",
  },
  {
    question: "인증 받은 제품인가요?",
    answer:
      "네, 발산마켓의 모든 제품은 용도에 따라 어린이 안전인증(KC), 공급자적합성확인, 의료기기 판매승인, 식약처 식품안전검사(식기류)를 받은 제품만 취급합니다.",
  },
  {
    question: "택배 배송기간은 얼마나 걸리나요?",
    answer:
      "CJ대한통운을 통해 배송되며, 지역별 사정에 따라 차이가 있을 수 있으나 발송 후 1~2일 내 수령 가능합니다. 당일배송 마감시간은 오후 1시입니다.",
  },
  {
    question: "배송비는 어떻게 되나요?",
    answer: "10,000원 이상 주문 시 전국 무료배송입니다.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
  delay,
  visible,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
  visible: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`border-b border-warm-border last:border-b-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span
          className={`font-semibold text-sm lg:text-base transition-colors duration-300 ${
            isOpen ? "text-[#F4978E]" : "text-dark"
          }`}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 text-xl leading-none transition-colors duration-300 ${
            isOpen ? "text-[#F4978E]" : "text-warm-gray"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height }}
      >
        <div ref={contentRef} className="pb-5">
          <p className="text-sm font-light text-warm-gray leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="bg-warm-bg py-20 lg:py-28">
      <div ref={ref} className="max-w-[820px] mx-auto px-6">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-[2.5rem] font-semibold text-ink tracking-tight leading-tight mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-base text-warm-gray leading-relaxed">
            궁금한 점이 있으시면 먼저 확인해 보세요.
          </p>
        </div>

        <div className="bg-white border border-warm-border/60 rounded-2xl shadow-card px-6 lg:px-8">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              delay={200 + index * 80}
              visible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
