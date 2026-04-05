export interface ProductSize {
  label: string;
  footLength: string;
  age: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number | null;
  unit: string | null;
  unitPrice: number | null;
  bulkDiscount: string | null;
  freeShipping: boolean;
  images: string[];
  features: string[];
  sizes: ProductSize[];
  rating: number;
  reviewCount: number;
  minOrder: string;
  exchangePolicy: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "프리미엄 미끄럼방지 양말 (5켤레)",
    description:
      "어린이집 필수템! 안전한 실리콘 미끄럼방지 양말을 유통합니다. 뛰어난 착용감과 내구성으로 오래 사용할 수 있습니다.",
    price: 35000,
    unit: "5켤레",
    unitPrice: 7000,
    bulkDiscount: "50켤레 이상 → 1켤레당 5,000원",
    freeShipping: true,
    images: [],
    features: [
      "프리미엄 실리콘 미끄럼방지 패드",
      "부드러운 코튼 소재로 뛰어난 착용감",
      "내구성이 뛰어나 오래 사용 가능",
      "면 75%, 폴리에스테르 23%, 스판덱스 2% 소재",
    ],
    sizes: [
      { label: "S", footLength: "140-160mm", age: "3-4세" },
      { label: "M", footLength: "160-180mm", age: "5-6세" },
      { label: "L", footLength: "180-220mm", age: "7-10세" },
    ],
    rating: 4.72,
    reviewCount: 999,
    minOrder: "최소 5켤레부터 주문 가능합니다.",
    exchangePolicy: "미개봉 제품에 한해 수령 후 7일 이내 교환 가능합니다. 교환 배송비는 무료입니다.",
  },
  {
    id: 2,
    name: "스트라이프 미끄럼방지 양말 (3켤레)",
    description:
      "감각적인 스트라이프 패턴의 미끄럼방지 양말입니다. 통기성이 우수하여 장시간 착용에도 쾌적합니다.",
    price: 18000,
    unit: "3켤레",
    unitPrice: 6000,
    bulkDiscount: "50켤레 이상 → 1켤레당 4,500원",
    freeShipping: true,
    images: [],
    features: [
      "감각적인 스트라이프 디자인",
      "통기성 우수한 메쉬 소재 적용",
      "탄력 있는 밴드로 흘러내림 방지",
      "면 68%, 폴리에스테르 30%, 스판덱스 2% 소재",
    ],
    sizes: [
      { label: "S", footLength: "140-160mm", age: "3-4세" },
      { label: "M", footLength: "160-180mm", age: "5-6세" },
      { label: "L", footLength: "180-220mm", age: "7-10세" },
    ],
    rating: 4.65,
    reviewCount: 128,
    minOrder: "최소 3켤레부터 주문 가능합니다.",
    exchangePolicy: "미개봉 제품에 한해 수령 후 7일 이내 교환 가능합니다. 교환 배송비는 무료입니다.",
  },
  {
    id: 3,
    name: "어린이용 미끄럼방지 양말",
    description:
      "안전하고 귀여운 디자인의 어린이 미끄럼방지 양말을 유통합니다. 어린이집, 키즈카페 등에 납품하고 있습니다.",
    price: 50000,
    unit: "10켤레",
    unitPrice: 5000,
    bulkDiscount: "100켤레 이상 → 1켤레당 3,500원",
    freeShipping: true,
    images: ["/images/product-7set.png", "/images/product-wearing.png"],
    features: [
      "확실한 미끄럼방지 기능 — 발바닥 논슬립패드가 촘촘하고 넓음",
      "다양하고 선명한 7가지 컬러 — 블랙, 블루, 오렌지, 보라, 회색, 핑크, 그린",
      "국가공인기관 안전인증 전 항목 합격 (KOTERI)",
      "면 70%, 폴리에스테르 28%, 스판덱스 2% 소재",
    ],
    sizes: [
      { label: "XS", footLength: "140-160mm", age: "3-4세" },
      { label: "S", footLength: "160-180mm", age: "5-6세" },
      { label: "M", footLength: "180-220mm", age: "7-10세" },
      { label: "L", footLength: "230-280mm", age: "10세이상" },
    ],
    rating: 4.84,
    reviewCount: 256,
    minOrder: "최소 10켤레부터 주문 가능합니다. 대량 주문(100켤레 이상) 시 추가 할인이 적용됩니다.",
    exchangePolicy: "미개봉 제품에 한해 수령 후 7일 이내 교환 가능합니다. 교환 배송비는 무료입니다. 정확한 사이즈 안내는 사이즈 가이드를 참고해주세요.",
  },
];

export default products;
