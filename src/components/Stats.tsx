import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Systems Built" },
  { value: 20, suffix: "+", label: "Technologies Mastered" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
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
      {n}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-primary/5 border-y border-border">
      <div className="section-container !py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-sm md:text-base text-foreground/70 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
