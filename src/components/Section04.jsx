// src/components/Section04.jsx
import usePageFade from "../hooks/usePageFade";

export default function Section04() {
  usePageFade(".page-fade-fit-head", {
  y: 16,
  blur: true,
  duration: 1.2,
  ease: "expo.out",
  start: "top 82%",
});

usePageFade(".page-fade-fit-cols", {
  y: 10,
  blur: false,
  duration: 1.0,
  delay: 0.15,
  ease: "power2.out",
  start: "top 78%",
});

usePageFade(".page-fade-fit-end", {
  y: 8,
  blur: false,
  duration: 0.8,
  delay: 0.25,
  ease: "power2.out",
  start: "top 72%",
});

  return (
    <section
      id="fit"
      className="
        py-40
        bg-white
      "
    >
      <div className="max-w-[960px] mx-auto px-12">

        {/* ===== 見出し ===== */}
        <h2
          className="
            text-center
            text-[24px]
            leading-[1.8]
            tracking-[0.08em]
            text-rin
            mb-12
            page-fade-fit-head
          "
        >
          RINが大切にしている考え方
        </h2>

        {/* ===== 補足コピー（理由） ===== */}
        <p
          className="
            text-center
            text-[13px]
            leading-[2]
            tracking-[0.06em]
            text-rinSub
            max-w-[460px]
            mx-auto
            mb-32
            page-fade-fit-head
          "
        >
          お一人おひとりにとって心地よい仕上がりを保つため、<br />
          RINでは施術の方向性を大切にしています。
        </p>
{/* ===== 向き・不向き ===== */}
<div
  className="
    relative
    grid
    grid-cols-2
    gap-28
    justify-items-center
  "
>
  {/* 中央の縦線 */}
  <span
    className="
      absolute
      top-0
      bottom-0
      left-1/2
      -translate-x-1/2
      w-[1px]
      bg-rinSub/20
    "
    aria-hidden
  />

  {/* 向いている方 */}
  <div className="text-center page-fade-fit-cols">
    <p className="text-[14px] tracking-[0.14em] text-rin mb-8">
      向いている方
    </p>
    <ul className="text-[14px] leading-[2.1] text-rinSub space-y-3 max-w-[280px] mx-auto">
      <li>派手になりすぎるのが不安な方</li>
      <li>自然な仕上がりを大切にしたい方</li>
      <li>事前にしっかり相談したい方</li>
      <li>日常の延長として、無理なく通いたい方</li>
    </ul>
  </div>

  {/* 向いていない方 */}
  <div className="text-center page-fade-fit-cols">
    <p className="text-[14px] tracking-[0.14em] text-rin mb-8 ">
      向いていない方
    </p>
    <ul className="text-[14px] leading-[2.1] text-rinSub space-y-3 max-w-[280px] mx-auto">
      <li>はっきり分かる変化を求めている方</li>
      <li>本数やボリュームを重視したい方</li>
      <li>すべてお任せで決めたい方</li>
      <li>すぐに印象を変えたいと感じている方</li>
    </ul>
  </div>
</div>


        {/* ===== 余韻コピー ===== */}
        <p
          className="
            text-center
            text-[12px]
            leading-[2.3]
            tracking-[0.12em]
            text-rinSub
            mt-36
            page-fade-fit-end
          "
        >
          どちらが良い・悪いではなく、<br />
          大切にしている考え方の違いです。
        </p>
      </div>
    </section>
  );
}
