import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSP() {
  const rootRef = useRef(null);

  useEffect(() => {
    const items = rootRef.current.querySelectorAll("[data-anim]");
    gsap.fromTo(
      items,
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power2.out",
        stagger: 0.14,
      }
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative
        min-h-screen
        bg-white
      "
    >
      {/* 背景 */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/hero-sp.png"
          alt="自然な目元の仕上がり"
          className="
            w-full h-full object-cover
            object-[48%_38%]
            brightness-[0.98]
            saturate-[0.92]
          "
        />

        {/* 下部グラデ */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/35 to-transparent" />
      </div>

      {/* テキスト */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen px-6 pb-16 text-center">
        <h1
          className="text-[22px] leading-[1.9] tracking-[0.08em] text-rin"
          data-anim
        >
          派手にしない。<br />
          <span className="opacity-85">安心して通える。</span>
        </h1>

        <p
          className="mt-6 text-[13px] leading-[2] tracking-[0.06em] text-rinSub"
          data-anim
        >
          自然さの基準を、事前に共有します。
        </p>

        <div className="mt-10" data-anim>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (!el) return;
              const y =
                el.getBoundingClientRect().top +
                window.pageYOffset -
                64;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            className="
              w-full h-[46px]
              text-[12px]
              tracking-[0.22em]
              text-rin
              border border-black/12
              bg-white/70
            "
          >
            ご予約へ
          </button>
        </div>
      </div>
    </section>
  );
}
