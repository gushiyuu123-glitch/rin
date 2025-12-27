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
      aria-label="フッター"
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
        <h2
          className="
            text-[16px]
            tracking-[0.26em]
            text-rin
            mb-10
            font-normal
          "
        >
          R I N
        </h2>

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

        {/* ===== フッターナビ（仮リンク） ===== */}
        <nav
          className="
            flex
            justify-center
            gap-16
            mb-28
          "
          aria-label="フッターナビゲーション"
        >
          <a
            href="#pricing"
            className="
              text-[12px]
              tracking-[0.18em]
              text-rinSub
              hover:text-rin
              transition-colors
            "
          >
            料金について
          </a>

          <a
            href="#contact"
            className="
              text-[12px]
              tracking-[0.18em]
              text-rinSub
              hover:text-rin
              transition-colors
            "
          >
            ご相談・ご予約
          </a>

          {/* 仮：アクセス */}
          <a
            href="#"
            aria-disabled="true"
            onClick={(e) => e.preventDefault()}
            className="
              text-[12px]
              tracking-[0.18em]
              text-rinSub
              opacity-60
              cursor-not-allowed
            "
          >
            アクセス（準備中）
          </a>
        </nav>

        {/* ===== クレジット ===== */}
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

        {/* ===== 制作者リンク ===== */}
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
