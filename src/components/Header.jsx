// src/components/Header.jsx
export default function Header() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/70
        backdrop-blur
        border-b
        border-neutral-200
      "
    >
      <div
        className="
          max-w-[1100px]
          mx-auto
          px-12
          h-[72px]
          flex
          items-center
          justify-between
        "
      >
        {/* ロゴ（トップへ） */}
        <a
          href="#concept"
          className="
            text-[14px]
            tracking-[0.28em]
            text-rin
          "
        >
          R I N
        </a>

        {/* ナビ */}
        <nav
          className="flex items-center gap-12"
          aria-label="グローバルナビゲーション"
        >
          <a
            href="#pricing"
            className="
              text-[12px]
              tracking-[0.16em]
              text-rinSub
              hover:text-rin
              transition-colors
            "
          >
            料金について
          </a>

          <a
            href="#review"
            className="
              text-[12px]
              tracking-[0.16em]
              text-rinSub
              hover:text-rin
              transition-colors
            "
          >
            ご来店の声
          </a>

          <a
            href="#contact"
            className="
              text-[12px]
              tracking-[0.2em]
              text-rin
              border-b
              border-rin
              pb-1
              hover:opacity-70
              transition-opacity
            "
          >
            ご相談・ご予約
          </a>
        </nav>
      </div>
    </header>
  );
}
