// src/components/sp/Section07SP.jsx
import usePageFade from "../../hooks/usePageFade";

export default function Section07SP() {
  usePageFade(".page-fade-contact-sp", {
    y: 8,
    blur: false,
    duration: 0.7,
    ease: "power2.out",
    start: "top 90%",
  });

  return (
    <section
      id="contact"
      className="
        py-28
        bg-[#fafafa]
        page-fade-contact-sp
      "
    >
      <div className="max-w-[420px] mx-auto px-6">
        <div
          className="
            bg-white
            border
            border-neutral-200
            px-6
            py-20
            text-center
          "
        >
          {/* 前置き */}
          <p
            className="
              text-[12px]
              tracking-[0.16em]
              text-rinSub
              mb-8
            "
          >
            少し気になる、くらいで十分です。
          </p>

          {/* 核 */}
          <p
            className="
              text-[15px]
              leading-[2.4]
              tracking-[0.08em]
              text-rin
              mb-16
            "
          >
            「これでいいのかな」と思ったまま、<br />
            来てください。
          </p>

          {/* 擬似CTA */}
          <span
            className="
              inline-block
              text-[11px]
              tracking-[0.18em]
              text-rin
              border-b
              border-rin
              pb-1
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
