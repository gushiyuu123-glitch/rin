// src/components/Section03.jsx
import usePageFade from "../hooks/usePageFade";

export default function Section03() {
  usePageFade(".page-fade-criteria", {
    y: 18,
    blur: true,
    duration: 1.2,
    ease: "expo.out",
    start: "top 82%",
  });

  return (
    <section
      id="criteria"
      className="
        py-40
        bg-[#fafafa]
      "
    >
      <div className="max-w-[1040px] mx-auto px-12">

        {/* =====================
            見出し
        ===================== */}
        <h2
          className="
            text-center
            text-[26px]
            leading-[1.75]
            tracking-[0.10em]
            text-rin
            mb-28
            page-fade-criteria
          "
        >
          自然さには、基準があります。
        </h2>

        {/* =====================
            中央2カラム
        ===================== */}
        <div
          className="
            grid
            grid-cols-2
            gap-28
            items-center
          "
        >
          {/* 判断基準 */}
          <ul
            className="
              text-[15px]
              leading-[2.25]
              text-rinSub
              space-y-14
              page-fade-criteria
            "
          >
            <li>
              <p className="text-rin mb-3 tracking-[0.04em]">
                足さない判断
              </p>
              <p>
                付け足す前に、抑える選択ができるか。
              </p>
            </li>

            <li>
              <p className="text-rin mb-3 tracking-[0.04em]">
                横顔での確認
              </p>
              <p>
                正面だけでなく、横から見ても違和感がないか。
              </p>
            </li>

            <li>
              <p className="text-rin mb-3 tracking-[0.04em]">
                崩れない自然さ
              </p>
              <p>
                時間が経っても、印象が変わりすぎないか。
              </p>
            </li>
          </ul>

          {/* 写真（少しだけ主張させる） */}
          <div
            className="
              page-fade-criteria
              -mr-6
            "
          >
            <img
              src="/assets/images/section03.png"
              alt="横顔から仕上がりを確認する様子"
              loading="lazy"
              className="
                w-[150%]
                object-cover
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}
