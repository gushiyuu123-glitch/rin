// src/components/sp/HeroSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

import heroImg from "../../assets/images/hero-sp.png";

export default function HeroSP() {
  const rootRef = useRef(null);

  useEffect(() => {
    const items = rootRef.current.querySelectorAll("[data-anim]");
    gsap.fromTo(
      items,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
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
        min-h-[100svh]
        overflow-hidden
        bg-white
      "
    >
      {/* ===== 背景 ===== */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="自然な目元の仕上がり"
          className="
            w-full h-full object-cover
            object-[48%_38%]   /* ← 右に寄せた */
            brightness-[0.98]
            saturate-[0.92]
            contrast-[1.02]
          "
        />

        {/* 写真の質感を整える白膜（弱め） */}
        <div className="absolute inset-0 bg-white/06" />

        {/* 下部：文字のための空気（白を削る） */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-white/65
            via-white/32
            to-white/00
          "
        />
      </div>

      {/* ===== テキスト（下寄せ） ===== */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-end
          min-h-[100svh]
          px-6
          pb-16
          text-center
        "
      >
        <h1
          className="
            text-[22px]
            leading-[1.9]
            tracking-[0.08em]
            text-rin
          "
          data-anim
        >
          派手にしない。<br />
          <span className="opacity-85">
            安心して通える。
          </span>
        </h1>

        <p
          className="
            mt-6
            text-[13px]
            leading-[2]
            tracking-[0.06em]
            text-rinSub
          "
          data-anim
        >
          自然さの基準を、事前に共有します。
        </p>

        <div className="mt-10" data-anim>
          <a
            href="#reserve"
            className="
              inline-flex
              items-center
              justify-center
              w-full
              h-[46px]
              text-[12px]
              tracking-[0.22em]
              text-rin
              border
              border-black/12
              bg-white/60
              hover:bg-white/75
              transition
            "
          >
            ご予約へ
          </a>
        </div>
      </div>
    </section>
  );
}
