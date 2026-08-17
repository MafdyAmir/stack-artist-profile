import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const stats = [
  { value: 15, suffix: "+", label: "Projects Completed", labelAr: "مشروعًا مكتملًا" },
  { value: 2, suffix: "+", label: "Years of Experience", labelAr: "سنوات من الخبرة" },
  { value: 10, suffix: "+", label: "Systems Built", labelAr: "أنظمة تم بناؤها" },
  { value: 20, suffix: "+", label: "Technologies Mastered", labelAr: "تقنية أتقنها" },
];

const Counter = ({
  value,
  suffix,
  language,
}: {
  value: number;
  suffix: string;
  language: "en" | "ar";
}) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setN(Math.floor(p * value));
            if (p < 1) requestAnimationFrame(tick);
            else setN(value);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {new Intl.NumberFormat(language === "ar" ? "ar-EG" : "en-US").format(n)}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const { language, isArabic } = useLanguage();

  return (
    <section id="achievements" className="border-y border-border/60 bg-primary/5 py-16">
      <div className="section-container !py-0">
        <div className="grid gap-6 rounded-[2rem] border border-border/60 bg-background/80 p-6 md:grid-cols-4 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} language={language} />
              </div>
              <p className="text-sm font-medium text-foreground/70">
                {isArabic ? stat.labelAr : stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
