// src/components/sp/Section06SP.jsx
import { useState } from "react";
import usePageFade from "../../hooks/usePageFade";

export default function Section06SP() {
  usePageFade(".sp-pricing", {
    y: 12,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 85%",
  });

  const [open, setOpen] = useState(false);

  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="px-6 text-center sp-pricing">

        {/* =====================
            見出し
        ===================== */}
        <h2 className="text-[20px] tracking-[0.12em] text-rin mb-8">
          料金について
        </h2>

        {/* =====================
            導入
        ===================== */}
        <p className="text-[13px] leading-[2.2] tracking-[0.08em] text-rinSub mb-16">
          価格はすべて税込です。<br />
          状態に合わせて微調整します。
        </p>

        {/* =====================
            アコーディオン
        ===================== */}
        <div className="max-w-[360px] mx-auto">
      <button
  type="button"
  onClick={() => setOpen((v) => !v)}
  aria-expanded={open}
  aria-controls="pricing-panel"
  className="
    w-full
    relative
    py-5
    border-b
    border-neutral-200
    text-[14px]
    tracking-[0.10em]
    text-rin
  "
>
  {/* 中央テキスト */}
  <span className="absolute left-1/2 -translate-x-1/2 bottom-4">
    料金の目安を見る
  </span>

  {/* 右の矢印 */}
  <span
    className={`
      absolute right-0
      transition-transform duration-300 bottom-4
      ${open ? "rotate-180" : ""}
    `}
  >
    ↓
  </span>
</button>


          {/* =====================
              中身
          ===================== */}
          <div
            id="pricing-panel"
            className={`
              overflow-hidden
              transition-all
              duration-300
              ${open ? "max-h-[640px] mt-10" : "max-h-0"}
            `}
          >
            <div className="space-y-14 text-center">

              {/* メニュー */}
              <div>
                <p className="text-[14px] tracking-[0.10em] text-rin mb-1">
                  まつエク ナチュラル
                </p>
                <p className="text-[13px] text-rinSub mb-3">
                  自然に整える、ほんのり印象
                </p>
                <p className="text-[18px] tracking-[0.08em] text-rin">
                  ¥8,800
                </p>
              </div>

              <div>
                <p className="text-[14px] tracking-[0.10em] text-rin mb-1">
                  まつエク ベーシック
                </p>
                <p className="text-[13px] text-rinSub mb-3">
                  日常にちょうどいい、整いのバランス
                </p>
                <p className="text-[18px] tracking-[0.08em] text-rin">
                  ¥12,100
                </p>
              </div>

              <div>
                <p className="text-[14px] tracking-[0.10em] text-rin mb-1">
                  まつエク プレミアム
                </p>
                <p className="text-[13px] text-rinSub mb-3">
                  上品に印象をつくる、丁寧な仕上がり
                </p>
                <p className="text-[18px] tracking-[0.08em] text-rin">
                  ¥16,500
                </p>
              </div>

              {/* 偽リンク */}
              <p
                className="
                  pt-6
                  text-[12px]
                  tracking-[0.18em]
                  text-rinSub
                  border-t
                  border-neutral-200
                  inline-block
                  cursor-default
                  select-none
                "
              >
                その他のメニューについて
              </p>
            </div>
          </div>
        </div>

        {/* =====================
            余韻
        ===================== */}
        <p className="mt-24 pt-12 border-t border-neutral-200 text-[12px] leading-[2.3] tracking-[0.14em] text-rinSub">
          初回は、カウンセリングの時間を<br />
          しっかり確保しています。
        </p>

      </div>
    </section>
  );
}
