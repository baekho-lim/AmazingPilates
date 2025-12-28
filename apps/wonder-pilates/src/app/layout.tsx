import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wonderpilates.kr"),
  title: {
    default: "경이로운 필라테스 | Wonder Pilates",
    template: "%s | 경이로운 필라테스",
  },
  description:
    "김포 마산동 프리미엄 필라테스 스튜디오. 개인 레슨, 체형교정, 재활 필라테스 전문. 경이로운 필라테스에서 건강한 변화를 시작하세요.",
  keywords: [
    "마산동 필라테스",
    "김포 필라테스",
    "구래동 필라테스",
    "장기동 필라테스",
    "운양동 필라테스",
    "필라테스 개인레슨",
    "체형교정 필라테스",
    "재활 필라테스",
  ],
  authors: [{ name: "경이로운 필라테스" }],
  creator: "경이로운 필라테스",
  publisher: "경이로운 필라테스",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://wonderpilates.kr",
    siteName: "경이로운 필라테스",
    title: "경이로운 필라테스 | Wonder Pilates",
    description:
      "김포 마산동 프리미엄 필라테스 스튜디오. 개인 레슨, 체형교정, 재활 필라테스 전문.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "경이로운 필라테스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "경이로운 필라테스 | Wonder Pilates",
    description:
      "김포 마산동 프리미엄 필라테스 스튜디오. 개인 레슨, 체형교정, 재활 필라테스 전문.",
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2C5530" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
