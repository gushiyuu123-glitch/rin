// src/components/sp/Section04SP.jsx
import usePageFade from "../../hooks/usePageFade";

export default function Section04SP() {
  usePageFade(".sp-fit", {
    y: 14,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 85%",
  });

  return (
    <section
      id="fit"
      className="py-28 bg-white"
    >
      <div className="px-6 text-center sp-fit">
        {/* 見出し */}
        <h2
          className="
            text-[20px]
            leading-[1.8]
            tracking-[0.08em]
            text-rin
            mb-10
          "
        >
          RINが大切にしている考え方
        </h2>

        {/* 補足 */}
        <p
          className="
            text-[13px]
            leading-[2]
            tracking-[0.06em]
            text-rinSub
            mb-20
          "
        >
          心地よい仕上がりを保つため、<br />
          施術の方向性を大切にしています。
        </p>

        {/* 向いている方 */}
        <div className="mb-20">
          <p
            className="
              text-[14px]
              tracking-[0.12em]
              text-rin
              mb-8
            "
          >
            このような方に向いています
          </p>
          <ul
            className="
              text-[14px]
              leading-[2.2]
              tracking-[0.06em]
              text-rinSub
              space-y-4
            "
          >
            <li>派手になりすぎるのが不安な方</li>
            <li>自然な仕上がりを大切にしたい方</li>
            <li>事前にしっかり相談したい方</li>
            <li>無理なく、日常の延長として通いたい方</li>
          </ul>
        </div>

        {/* 向いていない方（トーンを下げる） */}
        <div className="opacity-75">
          <p
            className="
              text-[13px]
              tracking-[0.10em]
              text-rin
              mb-6
            "
          >
            もしかすると合わないかもしれません
          </p>
          <ul
            className="
              text-[13px]
              leading-[2.1]
              tracking-[0.05em]
              text-rinSub
              space-y-3
            "
          >
            <li>はっきりした変化を求めている方</li>
            <li>本数やボリュームを重視したい方</li>
            <li>すべてお任せで決めたい方</li>
          </ul>
        </div>

        {/* 余韻 */}
        <p
          className="
            mt-24
            text-[12px]
            leading-[2.2]
            tracking-[0.10em]
            text-rinSub
          "
        >
          良い・悪いではなく、<br />
          大切にしている考え方の違いです。
        </p>
      </div>
    </section>
  );
}
