"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const sizes = [
  { label: "XS", length: "140-160", age: "3-4세" },
  { label: "S", length: "160-180", age: "5-6세" },
  { label: "M", length: "180-220", age: "7-10세" },
  { label: "L", length: "230-280", age: "10세 이상" },
];

export default function SizeGuide() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-warm-bg py-16 lg:py-20">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-dark mb-2">
            사이즈 안내
          </h2>
          <p className="text-sm text-warm-gray">
            발길이는 측정 자세에 따라 오차가 있을 수 있으며 연령은 참고용 표기입니다
          </p>
        </div>

        <div
          className={`bg-white rounded-xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FFF0ED] text-dark">
                <th className="py-4 px-6 text-left font-semibold">사이즈 표기</th>
                <th className="py-4 px-6 text-left font-semibold">발길이 (mm)</th>
                <th className="py-4 px-6 text-left font-semibold">연령</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size, index) => (
                <tr
                  key={size.label}
                  className={index % 2 === 1 ? "bg-[#fafaf9]" : "bg-white"}
                >
                  <td className="py-4 px-6 font-semibold text-[#F4978E]">
                    {size.label}
                  </td>
                  <td className="py-4 px-6 text-dark">{size.length}</td>
                  <td className="py-4 px-6 text-warm-gray">{size.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
