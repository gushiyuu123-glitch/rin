// src/pages/Home.jsx

// ====================
// PC Components
// ====================
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

// ====================
// SP Components
// ====================
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

        {/* concept */}
        <section id="concept" className="scroll-mt-[64px]">
          <Section title="やりすぎないことを、大切にしています。">
            <p>
              仕上がりが派手になりすぎないよう、<br />
              事前に基準を共有しながら施術を行います。
            </p>
          </Section>
        </section>

        {/* criteria */}
        <section id="criteria" className="scroll-mt-[64px]">
          <Section03 />
        </section>

        {/* fit */}
        <section id="fit" className="scroll-mt-[64px]">
          <Section04 />
        </section>

        {/* attitude */}
        <section id="attitude" className="scroll-mt-[64px]">
          <Section05 />
        </section>

        {/* pricing */}
        <section id="pricing" className="scroll-mt-[64px]">
          <Section06 />
        </section>

        {/* review */}
        <section id="review" className="scroll-mt-[64px]">
          <SectionReview />
        </section>

        {/* contact */}
        <section id="contact" className="scroll-mt-[64px]">
          <Section07 />
        </section>

        <Footer />
      </div>

      {/* =====================================================
          SP（md未満のみ表示）
      ===================================================== */}
      <div className="md:hidden">
        <HeaderSP />
        <HeroSP />

        <section id="concept">
          <Section02SP />
        </section>

        <section id="criteria">
          <Section03SP />
        </section>

        <section id="fit">
          <Section04SP />
        </section>

        <section id="attitude">
          <Section05SP />
        </section>

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
