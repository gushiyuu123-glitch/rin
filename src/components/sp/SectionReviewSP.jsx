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
      {/* 写真を現実から引く白膜（強化） */}
      <div className="absolute inset-0 bg-white/18" />

      {/* ===== 下部：文字専用の空気（強化） ===== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[62%]
          bg-gradient-to-t
          from-white/85
          via-white/60
          to-white/10
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
            tracking-[0.18em]
            text-neutral-700
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
              text-neutral-800
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
              text-neutral-600
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
              text-neutral-600
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
