"use client";

import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "최소 주문 수량은 몇 켤레인가요?",
    answer:
      "키즈카페 양말은 최소 10켤레부터 주문 가능합니다. 대량 주문(100켤레 이상) 시 추가 할인이 적용됩니다. 자세한 견적은 문의하기를 통해 상담해주세요.",
  },
  {
    question: "배송 기간은 얼마나 걸리나요?",
    answer:
      "주문 확인 후 1~3 영업일 내 출고됩니다. 전국 무료배송이며, 출고 후 1~2일 내 수령 가능합니다. 대량 주문의 경우 별도 협의가 필요할 수 있습니다.",
  },
  {
    question: "키즈카페 로고 인쇄가 가능한가요?",
    answer:
      "네, 가능합니다! 100켤레 이상 주문 시 키즈카페 로고나 브랜드명을 양말에 인쇄해드립니다. 디자인 시안 확인 후 제작되며, 약 7~14일 소요됩니다.",
  },
  {
    question: "사이즈 교환이 가능한가요?",
    answer:
      "미개봉 제품에 한해 수령 후 7일 이내 교환 가능합니다. 교환 배송비는 무료입니다. 정확한 사이즈 안내는 사이즈 가이드를 참고해주세요.",
  },
  {
    question: "안전인증을 받은 제품인가요?",
    answer:
      "네, 국가공인기관(KOTERI)의 안전인증 검사를 전 항목 합격한 제품입니다. 알러지성 염료, 아릴아민, pH, 폼알데하이드, 노닐페놀, 납/카드뮴 함유량 등 9개 항목 모두 합격했습니다.",
  },
  {
    question: "세금계산서 발행이 되나요?",
    answer:
      "네, 사업자등록번호 확인 후 세금계산서 발행 가능합니다. 주문 시 사업자등록증 사본을 함께 보내주시면 됩니다.",
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
      className={`border-b border-[#e8e4e0] transition-all duration-700 ${
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
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div ref={ref} className="max-w-[800px] mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-dark mb-3">
            자주 묻는 질문
          </h2>
          <p className="text-sm text-warm-gray">
            궁금한 점이 있으시면 먼저 확인해보세요
          </p>
        </div>

        <div>
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
