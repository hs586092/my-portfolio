import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        {/* 상단 라벨 */}
        <div className="text-center mb-4">
          <span
            className="text-xs font-medium tracking-[0.3em] uppercase"
            style={{ color: "#F4978E" }}
          >
            발산마켓 이야기
          </span>
        </div>

        {/* 제목 */}
        <h1
          className="text-3xl md:text-4xl font-semibold text-center mb-16 md:mb-20 leading-snug"
          style={{ color: "#2c2c2c" }}
        >
          집 앞 슈퍼마켓처럼,
          <br />
          믿음직스러운 온라인몰
        </h1>

        {/* 파트1 */}
        <p
          className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0] mb-10 md:mb-12"
          style={{
            color: "#2c2c2c",
            fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
          }}
        >
          어릴 적 저희 집 앞 슈퍼마켓에서는 항상 좋은 물건을 팔고 있었습니다.
          <br />
          지금 생각해보면 품질도 좋았지만
          <br />
          저희 집의 주머니 사정이나 니즈에 잘 맞아서 고민없이 구매했던 것
          같습니다.
        </p>

        {/* 파트2 */}
        <p
          className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0] mb-10 md:mb-12"
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

        {/* 강조 블록 */}
        <div
          className="mb-10 md:mb-12 pl-5 md:pl-6 py-4"
          style={{ borderLeft: "3px solid #F4978E" }}
        >
          <p
            className="text-base md:text-lg font-light leading-[1.9] md:leading-[2.0] mb-6"
            style={{
              color: "#2c2c2c",
              fontFamily: "var(--font-serif-kr), 'Noto Serif KR', serif",
            }}
          >
            그래서 발산마켓은 생각했습니다.
          </p>

          <p
            className="text-lg md:text-xl font-semibold leading-[1.8] mb-1"
            style={{ color: "#F4978E" }}
          >
            &lsquo;여기서 사면 가격도 품질도 믿을만해&rsquo;
          </p>
          <p
            className="text-lg md:text-xl font-semibold leading-[1.8] mb-6"
            style={{ color: "#F4978E" }}
          >
            &lsquo;안전한 제품이니 안심하고 사자&rsquo;
          </p>

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

        {/* 파트3 */}
        <div className="mb-10 md:mb-12">
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
        <div className="flex justify-end mb-16">
          <div className="text-right">
            <div
              className="w-16 h-px mb-4 ml-auto"
              style={{ backgroundColor: "#d4cfc9" }}
            />
            <p className="text-sm" style={{ color: "#8a8580" }}>
              — 발산마켓 대표 올림
            </p>
          </div>
        </div>

        {/* 페이지 하단 링크 */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors duration-200 hover:opacity-80"
            style={{ color: "#F4978E" }}
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
