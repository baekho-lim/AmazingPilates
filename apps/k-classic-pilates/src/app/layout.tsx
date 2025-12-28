import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kclassicpilates.kr"),
  title: {
    default: "K Classic Pilates | K클래식 필라테스",
    template: "%s | K Classic Pilates",
  },
  description:
    "필라테스 지도자의 새로운 기준, K Classic Pilates Association. 체계적인 커리큘럼과 공인 자격증으로 전문 필라테스 강사를 양성합니다.",
  keywords: [
    "필라테스 자격증",
    "필라테스 강사 자격증",
    "필라테스 지도자 자격증",
    "김포 필라테스 자격증",
    "필라테스 자격증 비용",
    "필라테스 자격증 종류",
    "리포머 자격증",
    "캐딜락 자격증",
  ],
  authors: [{ name: "K Classic Pilates Association" }],
  creator: "K Classic Pilates Association",
  publisher: "K Classic Pilates Association",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://kclassicpilates.kr",
    siteName: "K Classic Pilates",
    title: "K Classic Pilates | K클래식 필라테스",
    description:
      "필라테스 지도자의 새로운 기준, K Classic Pilates Association. 체계적인 커리큘럼과 공인 자격증으로 전문 필라테스 강사를 양성합니다.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "K Classic Pilates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K Classic Pilates | K클래식 필라테스",
    description:
      "필라테스 지도자의 새로운 기준, K Classic Pilates Association.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // TODO: Google Search Console 인증 코드
    other: {
      "naver-site-verification": "", // TODO: Naver Search Advisor 인증 코드
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
