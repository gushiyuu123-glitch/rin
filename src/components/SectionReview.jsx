// src/components/SectionReview.jsx
import usePageFade from "../hooks/usePageFade";

export default function SectionReview() {
  usePageFade(".page-fade", {
    y: 14,
    blur: true,
    start: "top 85%",
  });

  return (
    <section
      className="
        relative
        py-44
        page-fade
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('/assets/images/rin-consulting-soft1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 背景をほんの少しだけ現実から引く */}
      <div
        className="absolute inset-0 bg-white/06"
        aria-hidden
      />

      {/* ===== 文字のためだけの白い空気（局所グラデ） ===== */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[70%]
          h-[80%]
          bg-gradient-to-b
          from-white/30
          via-white/40
          to-white/40
          blur-[0.5px]
          pointer-events-none
        "
        aria-hidden
      />

      {/* ===== コンテンツ ===== */}
      <div
        className="
          relative
          max-w-[680px]
          mx-auto
          px-12
          text-center
        "
      >
        {/* 見出し */}
        <h3
          className="
            text-[17px]
            tracking-[0.18em]
            text-rin
            mb-24
          "
        >
          ご来店された方の声
        </h3>

        {/* レビュー */}
        <div className="space-y-20">
          {/* メイン */}
          <p
            className="
              text-[15px]
              leading-[2.6]
              tracking-[0.08em]
              text-rin
            "
          >
            「これでいいのかな、と思ったまま行きました。<br />
            でも、そのままで大丈夫だと言われて、<br />
            気持ちがすっと落ち着きました。」
          </p>

          {/* サブ */}
          <p
            className="
              text-[14px]
              leading-[2.5]
              tracking-[0.08em]
              text-rinSub/85
            "
          >
            「急かされないのが一番よかったです。<br />
            気持ちが整ってから決められました。」
          </p>

          <p
            className="
              text-[14px]
              leading-[2.5]
              tracking-[0.08em]
              text-rinSub/85
            "
          >
            「相談してから決められる、という空気が<br />
            他のお店とはまったく違いました。」
          </p>
        </div>
      </div>
    </section>
  );
}
