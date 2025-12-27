// src/components/Section05.jsx
import usePageFade from "../hooks/usePageFade";

export default function Section05() {
  usePageFade(".page-fade-attitude", {
  y: 24,
  blur: true,
  duration: 1.6,
  ease: "expo.out",
  start: "top 85%",
});

  return (
    <section
      id="attitude"
      className="
        relative
        py-[260px]
        bg-[#fafafa]
        overflow-hidden
      "
    >
      <div className="relative max-w-[1400px] mx-auto px-12">

<h2
  className="
    absolute
    top-[-135px]
    left-1/2
    -translate-x-1/2
    text-[30px]
    tracking-[0.24em]
    text-rin
    whitespace-nowrap
  "
>
  決めない、という選択。
</h2>


        {/* ===== メイン構図 ===== */}
        <div className="relative flex items-center gap-32">

          {/* ===== 左：写真（主役・はみ出す） ===== */}
        <div
  className="
    relative
    w-[820px]
    max-w-none
    -ml-24
    flex-shrink-0
  "
>

           <img
  src="src/assets/images/rin-consulting.png"
  alt="カウンセリングの様子"
  className="
    w-full
    h-auto
    block
    page-fade-attitude
  "
/>

          </div>

          {/* ===== 右：強み ===== */}
          <div className="max-w-[480px]">

<div className="mb-28">
  {/* 問い（感情の入口） */}
  <p
    className="
      text-[18px]
      leading-[2.4]
      tracking-[0.08em]
      text-rin
      mb-12
    "
  >
    これでいいのかな…？
  </p>

  {/* 方針（強い断言） */}
  <p
    className="
      text-[24px]
      leading-[2.4]
      tracking-[0.08em]
      text-rin
    "
  >
    そう思ったまま、<br />
    進めることはしません。
  </p>
</div>



            <div className="space-y-16">
            <p className="text-[15px] leading-[2.6] text-rinSub">
  仕上がりは、こちらだけで決めません。<br />
  迷う時間も、大切な工程のひとつです。
</p>


       <p className="text-[15px] leading-[2.6] text-rinSub">
  納得できたところで、はじめて手を動かします。<br />
  急ぐ施術は、ここにはありません。
</p>

            </div>

          </div>
        </div>

{/* ===== 余韻（選別・締め） ===== */}
<div
  className="
    mt-24
    pt-12
    border-t
    border-neutral-200
    text-center
  "
>
  <p
    className="
      text-[13px]
      leading-[2.4]
      tracking-[0.16em]
      text-rinSub
    "
  >
    流れ作業のような施術を、<br />
    ここでは行っていません。
  </p>
</div>

      </div>
    </section>
  );
}
