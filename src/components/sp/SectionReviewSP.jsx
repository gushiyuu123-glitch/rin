// src/components/sp/SectionReviewSP.jsx
import usePageFade from "../../hooks/usePageFade";

export default function SectionReviewSP() {
  usePageFade(".page-fade-sp", {
    y: 12,
    blur: true,
    start: "top 88%",
  });

  return (
    <section
      className="
        relative
        py-28
        page-fade-sp
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('/assets/images/rin-consulting-soft1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 写真をほんの少しだけ現実から引く */}
      <div className="absolute inset-0 bg-white/05" />

      {/* ===== 下部：文字のための空気（SP専用） ===== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[55%]
          bg-gradient-to-t
          from-white/75
          via-white/45
          to-white/00
          pointer-events-none
        "
      />

      {/* ===== コンテンツ ===== */}
      <div
        className="
          relative
          z-10
          max-w-[520px]
          mx-auto
          px-6
          text-center
        "
      >
        {/* 見出し */}
        <h3
          className="
            text-[14px]
            tracking-[0.16em]
            text-rin/95
            mb-16
          "
        >
          ご来店された方の声
        </h3>

        {/* レビュー */}
        <div className="space-y-14">
          {/* メイン */}
          <p
            className="
              text-[14px]
              leading-[2.4]
              tracking-[0.06em]
              text-rin/95
            "
          >
            「これでいいのかな、と思ったまま行きました。<br />
            でも、そのままで大丈夫だと言われて、<br />
            気持ちがすっと落ち着きました。」
          </p>

          {/* サブ */}
          <p
            className="
              text-[13px]
              leading-[2.3]
              tracking-[0.06em]
              text-rinSub/90
            "
          >
            「急かされないのが一番よかったです。<br />
            気持ちが整ってから決められました。」
          </p>

          <p
            className="
              text-[13px]
              leading-[2.3]
              tracking-[0.06em]
              text-rinSub/90
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
