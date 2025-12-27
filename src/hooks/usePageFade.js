import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePageFade(selector, options = {}) {
  useEffect(() => {
    const targets = gsap.utils.toArray(selector);
    if (!targets.length) return;

    targets.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: options.y ?? 16,
          filter: options.blur ? "blur(2px)" : "blur(0px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: options.duration ?? 1.4,
          ease: options.ease ?? "power2.out",
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 80%",
            once: true,
          },
        }
      );
    });
  }, [selector]);
}
