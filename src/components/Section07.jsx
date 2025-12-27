// src/components/Section07.jsx
import usePageFade from "../hooks/usePageFade";

export default function Section07() {
  usePageFade(".page-fade-contact", {
    y: 10,
    blur: false,
    duration: 0.8,
    ease: "power2.out",
    start: "top 88%",
  });

  return (
    <section
      id="contact"
      className="
        py-40
        bg-[#fafafa]
        page-fade-contact
      "
    >
      <div
        className="
          max-w-[720px]
          mx-auto
          px-12
        "
      >
        {/* ===== 導線ブロック（決断点） ===== */}
        <div
          className="
            bg-white
            border
            border-neutral-200
            py-28
            text-center
          "
        >
          {/* 前置き（心理の許可） */}
          <p
            className="
              text-[13px]
              tracking-[0.18em]
              text-rinSub
              mb-10
            "
          >
            少し気になる、くらいで十分です。
          </p>

          {/* メインメッセージ（核心） */}
          <p
            className="
              text-[17px]
              leading-[2.6]
              tracking-[0.08em]
              text-rin
              mb-24
            "
          >
            「これでいいのかな」と思ったまま、<br />
            来てください。
          </p>

          {/* 疑似CTA（リンク未満） */}
          <span
            className="
              inline-block
              text-[12px]
              tracking-[0.2em]
              text-rin
              border-b
              border-rin
              pb-1
              cursor-default
              select-none
            "
          >
            ご相談・ご予約について
          </span>
        </div>
      </div>
    </section>
  );
}
