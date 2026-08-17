import { Code2, Compass, Gauge, Layers, MessageCircle, Server } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLanguage } from "@/i18n/LanguageContext";

const reasons = [
  {
    icon: Code2,
    title: "Clean, maintainable code",
    titleAr: "كود نظيف وقابل للصيانة",
    description: "Easy to read, easy to extend, and easier to hand off later.",
    descriptionAr: "سهل القراءة والتطوير والتسليم لأي فريق لاحقًا.",
  },
  {
    icon: Layers,
    title: "Scalable architecture",
    titleAr: "بنية قابلة للتوسع",
    description: "Built with growth in mind so new features do not become rewrites.",
    descriptionAr: "مصممة للنمو حتى لا تتحول كل ميزة جديدة إلى إعادة بناء كاملة.",
  },
  {
    icon: Server,
    title: "Strong backend expertise",
    titleAr: "خبرة قوية في الواجهات الخلفية",
    description: "APIs, data flow, and business logic are handled with care.",
    descriptionAr: "عناية دقيقة بواجهات البرمجة وتدفق البيانات ومنطق الأعمال.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    titleAr: "تواصل واضح",
    description: "You always know what is being built, what is next, and what changed.",
    descriptionAr: "تعرف دائمًا ما يتم بناؤه وما الخطوة التالية وما الذي تغيّر.",
  },
  {
    icon: Compass,
    title: "Long-term thinking",
    titleAr: "تفكير طويل المدى",
    description: "I optimize for systems that stay useful after launch.",
    descriptionAr: "أصمم أنظمة تظل مفيدة وفعّالة بعد الإطلاق.",
  },
  {
    icon: Gauge,
    title: "Performance focus",
    titleAr: "تركيز على الأداء",
    description: "Fast experiences, efficient flows, and fewer bottlenecks.",
    descriptionAr: "تجارب سريعة وتدفقات فعّالة واختناقات أقل.",
  },
];

const WhyWorkWithMe = () => {
  const reducedMotion = useReducedMotion();
  const { isArabic } = useLanguage();

  return (
    <section id="why" className="bg-background py-20 md:py-28">
      <div className="section-container !py-0">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {isArabic ? "لماذا تعمل معي" : "Why Work With Me"}
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            {isArabic
              ? "المطوّر الذي تحتاجه عندما تكون الجودة أولوية"
              : "The kind of developer you want when quality matters"}
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            {isArabic
              ? "اختيار المطوّر يعتمد على الثقة. أركز على الوضوح والتنفيذ الموثوق وبرمجيات تستمر في العمل بكفاءة بعد يوم الإطلاق."
              : "Hiring is about trust. I focus on clarity, dependable execution, and software that keeps working after the launch day."}
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
              <h3 className="text-lg font-semibold">
                {isArabic ? reason.titleAr : reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {isArabic ? reason.descriptionAr : reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
