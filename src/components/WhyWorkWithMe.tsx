import { Code2, Layers, Server, MessageCircle, Compass, Gauge } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Clean, maintainable code",
    description: "Readable, well-tested, and documented — so future changes are cheap, not painful.",
  },
  {
    icon: Layers,
    title: "Scalable architecture",
    description: "Built to handle growth from day one — modular, observable, and ready to scale.",
  },
  {
    icon: Server,
    title: "Strong backend expertise",
    description: "Deep experience with APIs, databases, and infrastructure where business logic actually lives.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    description: "Plain-language updates, predictable delivery, and no surprises mid-project.",
  },
  {
    icon: Compass,
    title: "Long-term thinking",
    description: "I build solutions you can keep — not throwaway code that locks you in.",
  },
  {
    icon: Gauge,
    title: "Performance focus",
    description: "Fast pages, fast APIs, lower hosting bills — measured, not assumed.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container !py-0">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why Work With Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The kind of developer you actually want on your team
          </h2>
          <p className="text-lg text-foreground/70">
            Hiring a developer is a long-term decision. Here's what you can expect when we work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <r.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{r.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
