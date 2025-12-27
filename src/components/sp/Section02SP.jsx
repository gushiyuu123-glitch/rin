// src/components/sp/Section02SP.jsx
import usePageFade from "../../hooks/usePageFade";

export default function Section02SP() {
  usePageFade(".sp-concept", {
    y: 14,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 85%",
  });

  return (
    <section
      id="concept"
      className="
        py-28
        bg-white
      "
    >
      <div className="px-6 text-center sp-concept">
        {/* 見出し */}
        <h2
          className="
            text-[20px]
            leading-[1.8]
            tracking-[0.08em]
            text-rin
            mb-10
          "
        >
          やりすぎないことを、<br />
          大切にしています。
        </h2>

        {/* 本文：1ブロック */}
        <p
          className="
            text-[14px]
            leading-[2.2]
            tracking-[0.06em]
            text-rinSub
          "
        >
          強い変化を目的にした施術は行っていません。<br />
          「足す」よりも「抑える」判断を重視しています。
        </p>

        {/* 写真：証拠 */}
        <div className="mt-16">
          <img
            src="src/assets/images/section.png"
            alt="カウンセリングの様子"
            className="
              w-full
              object-cover
              rounded-none
            "
          />
        </div>

        {/* 補足（1行だけ） */}
        <p
          className="
            mt-10
            text-[13px]
            leading-[2]
            tracking-[0.06em]
            text-rinSub
            opacity-85
          "
        >
          仕上がりの基準を、事前に共有します。
        </p>
      </div>
    </section>
  );
}
