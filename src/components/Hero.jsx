// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

import heroImg from "../assets/images/hero.png";
import rinLogo from "../assets/logo/rin.png";

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = rootRef.current.querySelectorAll("[data-anim]");

      gsap.fromTo(
        items,
        { opacity: 0, y: 6 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.14,
          delay: 0.15,
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-white
      "
    >
{/* ===== 背景写真 ===== */}
<div className="absolute inset-0">
  <img
    src={heroImg}
    alt="施術直後の自然な目元の仕上がり"
    className="
      w-full h-full object-cover
      object-[72%_50%]
      brightness-[0.98]
      saturate-[0.88]
      contrast-[1.04]
    "
  />

  {/* 👇 写真そのものに薄く白をのせる（質感調整） */}
  <div
    className="
      absolute inset-0
      bg-white/4
      pointer-events-none
    "
  />

  {/* 文字側を守るための横グラデ */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-white/72
      via-white/38
      to-white/08
      pointer-events-none
    "
  />
</div>


      {/* ===== 中央：思想レイヤー ===== */}
      <div className="relative z-10 w-full">
        <div className="max-w-[720px] mx-auto px-12 text-center">
          {/* ロゴ */}
          <div data-anim>
            <img
              src={rinLogo}
              alt="RIN"
              className="w-[60px] opacity-90 mx-auto"
            />
            <p
              className="
                mt-3
                text-[10.5px]
                tracking-[0.34em]
                text-rinSub
                opacity-75
              "
            >
              EYELASH STUDIO
            </p>
          </div>

          {/* コピー：緊張差を作る */}
          <h1
            className="
              mt-12
              text-[34px]
              leading-[1.75]
              tracking-[0.09em]
              text-rin
            "
            data-anim
          >
            派手にしない。<br />
            <span className="opacity-85">
              だから、安心して通える。
            </span>
          </h1>

          {/* 判断軸 */}
          <ul
            className="
              mt-12
              text-[14.5px]
              leading-[2.15]
              text-rinSub
              space-y-4
            "
            data-anim
          >
            <li>派手な目元の仕上がりは扱いません。</li>
            <li>自然さの基準を、事前に共有します。</li>
            <li>任せきりではなく、一緒に決めます。</li>
          </ul>

          {/* CTA */}
          <div
            className="
              mt-14
              flex
              items-center
              justify-center
              gap-12
            "
            data-anim
          >
            <a
              href="#reserve"
              className="
                inline-flex
                items-center
                justify-center
                h-[42px]
                px-7
                text-[11.5px]
                tracking-[0.24em]
                text-rin
                border
                border-black/12
                bg-white/45
                hover:bg-white/65
                transition
              "
            >
              ご予約へ
            </a>

            <a
              href="#criteria"
              className="
                text-[11.5px]
                tracking-[0.24em]
                text-rinSub
                hover:text-rin
                transition
              "
            >
              自然さの基準を見る
            </a>
          </div>

          {/* Scroll */}
          <p
            className="
              mt-16
              text-[10.5px]
              tracking-[0.36em]
              text-rinSub
              opacity-85
            "
            data-anim
          >
            scroll
          </p>
        </div>
      </div>
    </section>
  );
}
