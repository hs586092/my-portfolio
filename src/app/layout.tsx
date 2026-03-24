import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Balsan Market | 키즈카페 미끄럼방지 양말 전문",
  description: "연간 20만 켤레의 압도적 판매량, 키즈카페 미끄럼 방지 양말 전문 유통 기업",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
