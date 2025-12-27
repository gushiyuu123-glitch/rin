// src/components/sp/HeaderSP.jsx
import { useState, useEffect } from "react";

const HEADER_HEIGHT = 64; // CSSと一致させる

export default function HeaderSP() {
  const [open, setOpen] = useState(false);

  // ===== body scroll lock =====
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const jumpTo = (id) => {
    // ① 先にメニューを閉じる
    setOpen(false);

    // ② overlay解除後にスクロール
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) {
        console.warn("target not found:", id);
        return;
      }

      const y = el.offsetTop - HEADER_HEIGHT;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 200);
  };

  const jumpTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur border-b border-neutral-200">
        <div className="h-[64px] px-5 flex items-center justify-between">
          {/* ロゴ（トップへ） */}
          <button
            onClick={jumpTop}
            className="text-[13px] tracking-[0.26em] text-rin"
            aria-label="トップへ戻る"
          >
            R I N
          </button>

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

      {/* OVERLAY MENU */}
      {open && (
        <div
          id="sp-menu"
          className="fixed inset-0 z-[60] bg-white/96 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="ナビゲーションメニュー"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-[14px] tracking-[0.18em] text-rin"
            aria-label="メニューを閉じる"
          >
            ×
          </button>

          <nav className="h-full flex flex-col items-center justify-center gap-12 text-center">
            <button
              onClick={() => jumpTo("pricing")}
              className="text-[14px] tracking-[0.22em] text-rinSub"
            >
              料金について
            </button>

            <button
              onClick={() => jumpTo("review")}
              className="text-[14px] tracking-[0.22em] text-rinSub"
            >
              ご来店の声
            </button>

            <button
              onClick={() => jumpTo("contact")}
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
