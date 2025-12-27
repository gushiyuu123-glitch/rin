// src/components/sp/HeaderSP.jsx
import { useState } from "react";

const HEADER_HEIGHT = 64;

export default function HeaderSP() {
  const [open, setOpen] = useState(false);

  /* =========================
     scroll functions
  ========================= */
  const jumpTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jumpTo = (id) => {
    setOpen(false);

    // overlay が消えてからスクロール
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) {
        console.warn("target not found:", id);
        return;
      }

      const y =
        el.getBoundingClientRect().top +
        window.scrollY -
        HEADER_HEIGHT;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };

  return (
    <>
      {/* =========================
          HEADER BAR
      ========================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur border-b border-neutral-200">
        <div className="h-[64px] px-5 flex items-center justify-between">
          {/* LOGO */}
          <button
            onClick={jumpTop}
            className="text-[13px] tracking-[0.26em] text-rin"
            aria-label="トップへ戻る"
          >
            R I N
          </button>

          {/* MENU */}
          <button
            onClick={() => setOpen(true)}
            className="text-[12px] tracking-[0.18em] text-rin"
            aria-expanded={open}
            aria-controls="sp-menu"
          >
            MENU
          </button>
        </div>
      </header>

      {/* =========================
          OVERLAY MENU
      ========================= */}
      {open && (
        <div
          id="sp-menu"
          className="fixed inset-0 z-[60] bg-white/96 backdrop-blur flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="ナビゲーションメニュー"
        >
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 w-[36px] h-[36px] flex items-center justify-center text-[18px] text-rin"
            aria-label="メニューを閉じる"
          >
            ×
          </button>

          {/* NAV */}
          <nav className="flex flex-col items-center gap-12 text-center">
            <button
              onClick={() => jumpTo("pricing-sp")}
              className="text-[14px] tracking-[0.22em] text-rinSub"
            >
              料金について
            </button>

            <button
              onClick={() => jumpTo("review-sp")}
              className="text-[14px] tracking-[0.22em] text-rinSub"
            >
              ご来店の声
            </button>

            <button
              onClick={() => jumpTo("contact-sp")}
              className="text-[14px] tracking-[0.26em] text-rin border-b border-rin pb-1"
            >
              ご相談・ご予約
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
