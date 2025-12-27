// src/pages/Home.jsx

// ===== PC =====
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Section03 from "../components/Section03";
import Section04 from "../components/Section04";
import Section05 from "../components/Section05";
import Section06 from "../components/Section06";
import SectionReview from "../components/SectionReview";
import Section07 from "../components/Section07";
import Footer from "../components/Footer";

// ===== SP =====
import HeaderSP from "../components/sp/HeaderSP";
import HeroSP from "../components/sp/HeroSP";
import Section02SP from "../components/sp/Section02SP";
import Section03SP from "../components/sp/Section03SP";
import Section04SP from "../components/sp/Section04SP";
import Section05SP from "../components/sp/Section05SP";
import Section06SP from "../components/sp/Section06SP";
import SectionReviewSP from "../components/sp/SectionReviewSP";
import Section07SP from "../components/sp/Section07SP";
import FooterSP from "../components/sp/FooterSP";

export default function Home() {
  return (
    <>
      {/* =====================================================
          PC（md以上のみ表示）
      ===================================================== */}
      <div className="hidden md:block">
        <Header />
        <Hero />

        <Section title="やりすぎないことを、大切にしています。">
          <p>
            仕上がりが派手になりすぎないよう、<br />
            事前に基準を共有しながら施術を行います。
          </p>
        </Section>

        <Section03 />
        <Section04 />
        <Section05 />

    <section id="pricing" className="scroll-mt-[64px]">
  <Section06SP />
</section>

<section id="review" className="scroll-mt-[64px]">
  <SectionReviewSP />
</section>

<section id="contact" className="scroll-mt-[64px]">
  <Section07SP />
</section>


        <Footer />
      </div>

      {/* =====================================================
          SP（md未満のみ表示）
      ===================================================== */}
      <div className="md:hidden">
        <HeaderSP />
        <HeroSP />

        <Section02SP />
        <Section03SP />
        <Section04SP />
        <Section05SP />

        <section id="pricing">
          <Section06SP />
        </section>

        <section id="review">
          <SectionReviewSP />
        </section>

        <section id="contact">
          <Section07SP />
        </section>

        <FooterSP />
      </div>
    </>
  );
}
