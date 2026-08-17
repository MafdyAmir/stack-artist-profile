import { Download, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLanguage } from "@/i18n/LanguageContext";

const techGroups = [
  {
    label: "Frontend",
    labelAr: "الواجهة الأمامية",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    label: "Backend",
    labelAr: "الواجهة الخلفية",
    items: ["Node.js", "NestJS", "Express", "REST APIs"],
  },
  {
    label: "Data",
    labelAr: "البيانات",
    items: ["SQL", "PostgreSQL", "MongoDB", "Redis",],
  },
  {
    label: "Devops & Cloud",
    labelAr: "DevOps والسحابة",
    items: ["Docker", "AWS", "CI/CD", "Git"],
  },
];

const About = () => {
  const reducedMotion = useReducedMotion();
  const { isArabic } = useLanguage();

  return (
    <section id="about" className="border-y border-border/60 bg-secondary/20 py-20 md:py-28">
      <div className="section-container !py-0">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className={`lg:col-span-2 flex justify-center ${reducedMotion ? "" : "animate-on-scroll"}`}>
            <div className="glowing-border">
              <Avatar className="w-72 h-72 md:w-96 md:h-96 rounded-2xl">
                <AvatarImage
                  src="profile_Image.jpg"
                  alt={isArabic ? "مفدي أمير — مطوّر ويب متكامل" : "Mafdy Amir — Full-Stack Developer"}
                  className="object-cover rounded-2xl"
                />
                <AvatarFallback className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl">M</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className={`lg:col-span-3 space-y-6 ${reducedMotion ? "" : "animate-on-scroll"}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {isArabic ? "نبذة عني" : "About Me"}
            </p>
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              {isArabic
                ? "مهندس برمجيات متكامل يركز على المنتجات المفيدة لا على التعقيد التقني"
                : "A full-stack engineer focused on useful products, not noisy tech"}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-foreground/75">
              {isArabic
                ? "أنا مفدي، أبني برمجيات تساعد الفرق على العمل بكفاءة أكبر وزيادة المبيعات وخدمة العملاء بسرعة. تتركز خبرتي في تطبيقات الويب الجاهزة للإنتاج وأنظمة الواجهات الخلفية وتجارب المستخدم الموثوقة والقابلة للصيانة وسهلة التسليم."
                : "I'm Mafdy — I build software that helps teams work better, sell better, and serve customers faster. My experience is centered on production-ready web apps, backend systems, and user flows that are reliable, maintainable, and easy to hand over."}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  {isArabic ? "مجالات تخصصي" : "What I specialize in"}
                </p>
                <p className="text-sm leading-6 text-foreground/70">
                  {isArabic
                    ? "أنظمة الأعمال والتجارة الإلكترونية ولوحات التحكم وواجهات البرمجة والتكاملات والأتمتة التي تسهّل العمليات اليومية."
                    : "Business systems, e-commerce, dashboards, APIs, integrations, and automation that remove friction from daily operations."}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  {isArabic ? "منهجية عملي" : "How I work"}
                </p>
                <p className="text-sm leading-6 text-foreground/70">
                  {isArabic
                    ? "أبدأ بفهم المشكلة، ثم نتفق على نطاق واضح، وأنفذ العمل على مراحل مع تواصل بسيط يجعل كل خطوة واضحة."
                    : "I start with the problem, agree on a clear scope, ship in milestones, and keep communication simple so every step stays visible."}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#contact">
                  <Mail className="me-2 h-5 w-5" />
                  {isArabic ? "ابدأ محادثة" : "Start a Conversation"}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://drive.google.com/file/d/1Q67mbk0Dp7EiN3hVbwfrupzA0xV4eF3c/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="me-2 h-5 w-5" />
                  {isArabic ? "تحميل السيرة الذاتية" : "Download Resume"}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className={`mt-12 ${reducedMotion ? "" : "animate-on-scroll"}`}>
          <div className="rounded-[2rem] border border-border/60 bg-background/80 p-6 md:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {isArabic ? "التقنيات التي أعمل بها" : "Technologies I Work With"}
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/60">
                {isArabic
                  ? "التقنيات وسيلة لدعم الحل، وليست هي التي تحدده."
                  : "The stack is there to support the solution — not define it."}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {techGroups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-border/60 bg-card p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {isArabic ? group.labelAr : group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        dir="ltr"
                        className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
