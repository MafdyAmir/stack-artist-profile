import { Code2, Compass, Gauge, Layers, MessageCircle, Server } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const reasons = [
  {
    icon: Code2,
    title: "Clean, maintainable code",
    description: "Easy to read, easy to extend, and easier to hand off later.",
  },
  {
    icon: Layers,
    title: "Scalable architecture",
    description: "Built with growth in mind so new features do not become rewrites.",
  },
  {
    icon: Server,
    title: "Strong backend expertise",
    description: "APIs, data flow, and business logic are handled with care.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    description: "You always know what is being built, what is next, and what changed.",
  },
  {
    icon: Compass,
    title: "Long-term thinking",
    description: "I optimize for systems that stay useful after launch.",
  },
  {
    icon: Gauge,
    title: "Performance focus",
    description: "Fast experiences, efficient flows, and fewer bottlenecks.",
  },
];

const WhyWorkWithMe = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="why" className="bg-background py-20 md:py-28">
      <div className="section-container !py-0">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Work With Me
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            The kind of developer you want when quality matters
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Hiring is about trust. I focus on clarity, dependable execution, and software that keeps working after the launch day.
          </p>
        </div>

        <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${reducedMotion ? "" : "animate-on-scroll"}`}>
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
