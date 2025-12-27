// src/components/sp/Section05SP.jsx
import usePageFade from "../../hooks/usePageFade";

export default function Section05SP() {
  usePageFade(".sp-attitude", {
    y: 16,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 85%",
  });

  return (
    <section
      id="attitude"
      className="
        py-32
        bg-[#fafafa]
      "
    >
      <div className="px-6 text-center sp-attitude">

        {/* =====================
            見出し（静かに）
        ===================== */}
        <h2
          className="
            text-[20px]
            tracking-[0.16em]
            text-rin
            mb-16
          "
        >
          決めない、という選択。
        </h2>

        {/* =====================
            写真（証拠）
        ===================== */}
        <div className="mb-20">
          <img
            src="/assets/images/rin-consulting.png"
            alt="カウンセリングの様子"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>

        {/* =====================
            感情の入口
        ===================== */}
        <p
          className="
            text-[16px]
            leading-[2.2]
            tracking-[0.06em]
            text-rin
            mb-10
          "
        >
          これでいいのかな…？
        </p>

        {/* =====================
            強い断言
        ===================== */}
        <p
          className="
            text-[18px]
            leading-[2.3]
            tracking-[0.06em]
            text-rin
            mb-16
          "
        >
          そう思ったまま、<br />
          進めることはしません。
        </p>

        {/* =====================
            補足（2ブロック）
        ===================== */}
        <div className="space-y-12">
          <p
            className="
              text-[14px]
              leading-[2.4]
              tracking-[0.06em]
              text-rinSub
            "
          >
            仕上がりは、こちらだけで決めません。<br />
            迷う時間も、大切な工程のひとつです。
          </p>

          <p
            className="
              text-[14px]
              leading-[2.4]
              tracking-[0.06em]
              text-rinSub
            "
          >
            納得できたところで、<br />
            はじめて手を動かします。
          </p>
        </div>

        {/* =====================
            余韻
        ===================== */}
        <p
          className="
            mt-24
            pt-12
            border-t
            border-neutral-200
            text-[12px]
            leading-[2.3]
            tracking-[0.14em]
            text-rinSub
          "
        >
          流れ作業のような施術を、<br />
          ここでは行っていません。
        </p>

      </div>
    </section>
  );
}
