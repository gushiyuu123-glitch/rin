// src/components/Section06.jsx
import usePageFade from "../hooks/usePageFade";
export default function Section06() {
  usePageFade(".page-fade-pricing", {
  y: 12,
  blur: false,
  duration: 0.9,
  ease: "power2.out",
  start: "top 85%",
});
  const items = [
    {
      name: "まつエク ナチュラル",
      desc: "自然に整える、ほんのり印象",
      price: "¥8,800",
    },
    {
      name: "まつエク ベーシック",
      desc: "日常にちょうどいい、整いのバランス",
      price: "¥12,100",
    },
    {
      name: "まつエク プレミアム",
      desc: "上品に印象をつくる、丁寧な仕上がり",
      price: "¥16,500",
    },
  ];

  return (
    <section id="pricing" className="py-36 bg-white page-fade-pricing">
      <div className="max-w-[920px] mx-auto px-12 ">
        {/* ===== 見出し ===== */}
        <h2 className="text-center text-[24px] tracking-[0.12em] text-rin mb-10">
          料金について
        </h2>

        {/* ===== 導入（短く） ===== */}
        <p className="text-center text-[13px] leading-[2.2] tracking-[0.08em] text-rinSub max-w-[620px] mx-auto mb-16">
          価格はすべて税込です。内容は状態に合わせて微調整します。
        </p>

        {/* ===== リスト ===== */}
        <div className="border-y border-neutral-200">
          {items.map((it, idx) => (
            <div
              key={it.name}
              className={`
                flex items-center justify-between
                py-10
                ${idx !== items.length - 1 ? "border-b border-neutral-200" : ""}
              `}
            >
              {/* 左：名前＋説明 */}
              <div className="min-w-0 pr-10">
                <p className="text-[16px] tracking-[0.12em] text-rin mb-3">
                  {it.name}
                </p>
                <p className="text-[13px] leading-[2.2] text-rinSub">
                  {it.desc}
                </p>
              </div>

              {/* 右：価格（視線の着地） */}
              <div className="flex-shrink-0 text-right">
                <p className="text-[20px] tracking-[0.08em] text-rin">
                  {it.price}
                </p>
              </div>
            </div>
          ))}
        </div>
<p className="text-center mt-14">
  <span className="text-[11px] tracking-[0.16em] text-rinSub">
    リペア・オフのみ・微調整など
  </span><br />
  <span className="text-[11px] tracking-[0.16em] text-rinSub">
    単品メニューも承っています
  </span>
</p>
<p className="text-center mt-12">
  <span
    className="
      text-[11px]
      tracking-[0.18em]
      text-rinSub
      inline-block
      border-b
      border-neutral-200
      pb-1
      cursor-default
      select-none
    "
  >
    その他の単品メニューについて
  </span>
</p>


        {/* ===== 補足（余韻は短く、下に置く） ===== */}
        <p className="text-center text-[12px] leading-[2.4] tracking-[0.14em] text-rinSub mt-14">
          初回は、カウンセリングの時間をしっかり確保しています。
        </p>
      </div>
    </section>
  );
}
