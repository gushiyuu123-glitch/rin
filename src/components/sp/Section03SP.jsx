// src/components/sp/Section03SP.jsx
import usePageFade from "../../hooks/usePageFade";

export default function Section03SP() {
  usePageFade(".sp-criteria", {
    y: 14,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 85%",
  });

  return (
    <section
      id="criteria"
      className="bg-[#fafafa]"
    >
      {/* ===== 見出し ===== */}
      <div className="py-28 px-6 text-center sp-criteria">
        <h2
          className="
            text-[20px]
            leading-[1.8]
            tracking-[0.10em]
            text-rin
          "
        >
          自然さには、<br />
          基準があります。
        </h2>
      </div>

      {/* ===== 基準 01 ===== */}
      <div className="pb-24 px-6 sp-criteria">
        <p
          className="
            text-[15px]
            tracking-[0.06em]
            text-rin
            mb-4
          "
        >
          足さない判断
        </p>
        <p
          className="
            text-[14px]
            leading-[2.2]
            tracking-[0.06em]
            text-rinSub
          "
        >
          付け足す前に、抑える選択ができるか。
        </p>

        <div className="mt-12">
          <img
            src="src/assets/images/criteria-01-sp.png"
            alt="仕上がりを抑える判断の様子"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* ===== 基準 02 ===== */}
      <div className="pb-24 px-6 sp-criteria">
        <p
          className="
            text-[15px]
            tracking-[0.06em]
            text-rin
            mb-4
          "
        >
          横顔での確認
        </p>
        <p
          className="
            text-[14px]
            leading-[2.2]
            tracking-[0.06em]
            text-rinSub
          "
        >
          正面だけでなく、横から見ても違和感がないか。
        </p>

        <div className="mt-12">
          <img
            src="src/assets/images/criteria-02-sp.png"
            alt="横顔から確認する様子"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* ===== 基準 03 ===== */}
      <div className="pb-32 px-6 sp-criteria">
        <p
          className="
            text-[15px]
            tracking-[0.06em]
            text-rin
            mb-4
          "
        >
          崩れない自然さ
        </p>
        <p
          className="
            text-[14px]
            leading-[2.2]
            tracking-[0.06em]
            text-rinSub
          "
        >
          時間が経っても、印象が変わりすぎないか。
        </p>

        <div className="mt-12">
          <img
            src="src/assets/images/criteria-03-sp.png"
            alt="時間が経っても自然な仕上がり"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
