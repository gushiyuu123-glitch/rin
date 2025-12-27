// src/components/sp/FooterSP.jsx
export default function FooterSP() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-20">
      <div className="max-w-[420px] mx-auto px-6 text-center">
        {/* ブランド */}
        <p
          className="
            text-[14px]
            tracking-[0.24em]
            text-rin
            mb-8
          "
        >
          R I N
        </p>

        {/* スタンス */}
        <p
          className="
            text-[11px]
            leading-[2.4]
            tracking-[0.12em]
            text-rinSub
            mb-16
          "
        >
          急がず、決めない時間も大切にする<br />
          まつエクサロンです。
        </p>

        {/* 道しるべ */}
        <div className="flex justify-center gap-10 mb-18">
          <span className="text-[11px] tracking-[0.16em] text-rinSub">
            料金について
          </span>
          <span className="text-[11px] tracking-[0.16em] text-rinSub">
            ご相談・ご予約
          </span>
          <span className="text-[11px] tracking-[0.16em] text-rinSub">
            アクセス
          </span>
        </div>

        {/* クレジット */}
        <p
          className="
            text-[9px]
            tracking-[0.14em]
            text-neutral-400
            mb-4
          "
        >
          © RIN eyelash salon
        </p>

        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            text-[9px]
            tracking-[0.16em]
            text-neutral-300
          "
        >
          Designed by GUSHIKEN DESIGN
        </a>
      </div>
    </footer>
  );
}
