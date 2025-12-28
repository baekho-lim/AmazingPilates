import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { WhyWonder } from "@/components/sections/WhyWonder";
import { Programs } from "@/components/sections/Programs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyWonder />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
