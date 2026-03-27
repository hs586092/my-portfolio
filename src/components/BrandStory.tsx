"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BrandStory() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* 상단 라벨 */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span
            className="text-xs font-medium tracking-[0.3em] uppercase"
            style={{ color: "#F4978E" }}
          >
            발산마켓 이야기
          </span>
        </div>

        {/* 큰 따옴표 장식 */}
        <div
          className={`text-center mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span
            className="text-7xl md:text-8xl font-serif leading-none select-none"
            style={{ color: "#F4978E", opacity: 0.15 }}
          >
            &ldquo;
          </span>
        </div>

        {/* 파트1: 시작 */}
        <div
          className={`mb-10 md:mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0]"
            style={{
              color: "#2c2c2c",
              fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
            }}
          >
            어릴 적 저희 집 앞 슈퍼마켓에서는 항상 좋은 물건을 팔고 있었습니다.
            <br />
            지금 생각해보면 품질도 좋았지만
            <br />
            저희 집의 주머니 사정이나 니즈에 잘 맞아서 고민없이 구매했던 것 같습니다.
          </p>
        </div>

        {/* 파트2: 문제 인식 + 발산마켓의 탄생 */}
        <div
          className={`mb-10 md:mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0] mb-8"
            style={{
              color: "#2c2c2c",
              fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
            }}
          >
            시간이 흘러 요즘은 휴대폰 켜서 검색만 하면
            <br />
            사고싶은 몇만 개의 상품이 나오지만
            <br />
            정작 내가 원하는 것, 내 예산에 맞는 것이 무엇인지
            <br />
            찾기가 더 어렵고, 찾는데 노동도 많이 들어갑니다.
            <br />
            보이는데 비교 안 할 수도 없는 노릇이구요.
          </p>

          <p
            className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0] mb-8"
            style={{
              color: "#2c2c2c",
              fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
            }}
          >
            그래서 발산마켓은 생각했습니다.
          </p>

          {/* 강조 문장들 */}
          <div
            className={`text-center my-8 md:my-10 space-y-3 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p
              className="text-xl md:text-2xl font-semibold"
              style={{ color: "#F4978E" }}
            >
              &lsquo;여기서 사면 가격도 품질도 믿을만해&rsquo;
            </p>
            <p
              className="text-xl md:text-2xl font-semibold"
              style={{ color: "#F4978E" }}
            >
              &lsquo;안전한 제품이니 안심하고 사자&rsquo;
            </p>
          </div>

          <p
            className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0]"
            style={{
              color: "#2c2c2c",
              fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
            }}
          >
            고객님께 쇼핑의 피로를 줄여주고
            <br />
            믿음직스러운 집 앞 슈퍼마켓 같은 온라인몰을 만들어야겠다.
          </p>
        </div>

        {/* 파트3: 감사 + 다짐 */}
        <div
          className={`mb-10 md:mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0] mb-6"
            style={{
              color: "#2c2c2c",
              fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
            }}
          >
            그래서 탄생했습니다.
          </p>

          <p
            className="text-xl md:text-2xl font-semibold leading-[1.8] mb-6"
            style={{
              color: "#2c2c2c",
              fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
            }}
          >
            논슬립양말 연간 100만 켤레 판매의 신화..!
          </p>

          <p
            className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0] mb-6"
            style={{
              color: "#2c2c2c",
              fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
            }}
          >
            이름없는 셀러인 저를 믿고 찾아와주신
            <br />
            고객님들이 만들어주신{" "}
            <span className="font-semibold" style={{ color: "#F4978E" }}>
              감동의 신화
            </span>
            입니다.
          </p>

          <p
            className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0]"
            style={{
              color: "#2c2c2c",
              fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
            }}
          >
            앞으로도 고객님 곁에 믿음직스러운 발산마켓이 되도록
            <br />
            매일 노력하겠습니다. 찾아와주셔서 감사합니다.
          </p>
        </div>

        {/* 하단 서명 */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex justify-end">
            <div className="text-right">
              <div
                className="w-16 h-px mb-4 ml-auto"
                style={{ backgroundColor: "#d4cfc9" }}
              />
              <p
                className="text-sm"
                style={{ color: "#8a8580" }}
              >
                — 발산마켓 대표 올림
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
