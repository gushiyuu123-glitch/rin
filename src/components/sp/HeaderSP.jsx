import { useState, useEffect } from "react";

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

    // ② 次のフレームでスクロール（overlay完全解除後）
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) {
        console.warn("target not found:", id);
        return;
      }

      const y = el.offsetTop - 64; // header 高さ

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur border-b border-neutral-200">
        <div className="h-[64px] px-5 flex items-center justify-between">
          <span className="text-[13px] tracking-[0.26em] text-rin">
            R I N
          </span>

          <button
            onClick={() => setOpen(true)}
            className="text-[12px] tracking-[0.18em] text-rin"
          >
            MENU
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-white/96 backdrop-blur">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-[14px] tracking-[0.18em] text-rin"
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
