import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Founder } from "@/components/sections/Founder";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "대표 소개",
  description: "경이로운 필라테스 김현경 대표 소개. 10년 이상의 지도 경험, 다양한 자격증과 저서를 보유한 전문가입니다.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Founder />
      </main>
      <Footer />
    </>
  );
}
