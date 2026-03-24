import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secretKey = process.env.TOSS_SECRET_KEY;

  if (!secretKey || secretKey.startsWith("[")) {
    return NextResponse.json(
      { message: "토스페이먼츠 시크릿 키가 설정되지 않았습니다." },
      { status: 500 }
    );
  }

  try {
    const { paymentKey, orderId, amount } = await request.json();

    if (!paymentKey || !orderId || !amount) {
      return NextResponse.json(
        { message: "필수 파라미터가 누락되었습니다." },
        { status: 400 }
      );
    }

    const encryptedSecretKey = Buffer.from(`${secretKey}:`).toString("base64");

    const response = await fetch(
      "https://api.tosspayments.com/v1/payments/confirm",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${encryptedSecretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentKey, orderId, amount }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || "결제 승인에 실패했습니다.", code: data.code },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
