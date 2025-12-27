// src/components/Section02.jsx
import usePageFade from "../hooks/usePageFade";

export default function Section02() {
  usePageFade(".page-fade-concept-head", {
  y: 18,
  blur: true,
  duration: 1.2,
  ease: "expo.out",
  start: "top 82%",
});

usePageFade(".page-fade-concept-text", {
  y: 12,
  blur: false,
  duration: 1.0,
  delay: 0.15,
  ease: "power2.out",
  start: "top 78%",
});

usePageFade(".page-fade-concept-image", {
  y: 8,
  blur: false,
  duration: 0.9,
  delay: 0.25,
  ease: "power2.out",
  start: "top 72%",
});

  return (
    <section
      id="concept"
      className="
        py-36
        bg-white
      "
    >
      <div className="max-w-[880px] mx-auto px-12 text-center">
        <h2
          className="
            text-[24px]
            leading-[1.8]
            tracking-[0.08em]
            text-rin
            mb-16
            page-fade-concept-head
          "
        >
          やりすぎないことを、大切にしています。
        </h2>

        <div
          className="
            text-[15px]
            leading-[2.2]
            text-rinSub
            space-y-6
            max-w-[720px]
            mx-auto
            page-fade-concept-text
          "
        >
          <p>
            RINでは、強い変化を目的にした施術は行っていません。
          </p>

          <p>
            目元は、少しの違いで印象が大きく変わるからこそ、
            「足す」よりも「抑える」判断を重視しています。
          </p>

          <p>
            仕上がりの基準を事前に共有し、
            納得した上で施術を進めていきます。
          </p>
        </div>

        {/* 写真（証拠） */}
        <div className="mt-20">
          <img
            src="src/assets/images/section.png"
            alt="カウンセリングの様子"
            className="
              w-full
              max-w-[640px]
              mx-auto
              object-cover
              page-fade-concept-image
            "
          />
        </div>
      </div>
    </section>
  );
}
