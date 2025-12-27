// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      className="
        bg-white
        border-t
        border-neutral-200
        py-28
      "
    >
      <div
        className="
          max-w-[720px]
          mx-auto
          px-12
          text-center
        "
      >
        {/* ===== ブランド ===== */}
        <p
          className="
            text-[16px]
            tracking-[0.26em]
            text-rin
            mb-10
          "
        >
          R I N
        </p>

        {/* ===== スタンス ===== */}
        <p
          className="
            text-[12px]
            leading-[2.6]
            tracking-[0.14em]
            text-rinSub
            mb-24
          "
        >
          急がず、決めない時間も大切にする<br />
          まつエクサロンです。
        </p>

        {/* ===== フッターリンク（情報ではなく、道しるべ） ===== */}
        <div
          className="
            flex
            justify-center
            gap-16
            mb-28
          "
        >
          <span
            className="
              text-[12px]
              tracking-[0.18em]
              text-rinSub
              cursor-default
            "
          >
            料金について
          </span>

          <span
            className="
              text-[12px]
              tracking-[0.18em]
              text-rinSub
              cursor-default
            "
          >
            ご相談・ご予約
          </span>

          <span
            className="
              text-[12px]
              tracking-[0.18em]
              text-rinSub
              cursor-default
            "
          >
            アクセス
          </span>
        </div>

        {/* ===== クレジット（そっと） ===== */}
        <p
          className="
            text-[10px]
            tracking-[0.16em]
            text-neutral-400
            mb-6
          "
        >
          © RIN eyelash salon
        </p>

        {/* ===== 制作者リンク（気づく人だけ） ===== */}
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            text-[10px]
            tracking-[0.18em]
            text-neutral-300
            hover:text-neutral-400
            transition-colors
          "
        >
          Designed by GUSHIKEN DESIGN
        </a>
      </div>
    </footer>
  );
}
