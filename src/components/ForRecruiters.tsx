import { Download, Github, Linkedin, Briefcase, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLanguage } from "@/i18n/LanguageContext";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
];

const ForRecruiters = () => {
  const reducedMotion = useReducedMotion();
  const { isArabic } = useLanguage();

  return (
    <section id="recruiters" className="bg-secondary/20 py-20 md:py-28">
      <div className="section-container !py-0">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className={`lg:col-span-2 ${reducedMotion ? "" : "animate-on-scroll"}`}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {isArabic ? "لمسؤولي التوظيف" : "For Recruiters"}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {isArabic
                ? "هل تبحث عن مهندس برمجيات ينجز العمل ويتواصل بوضوح؟"
                : "Looking for a software engineer who can ship and communicate clearly?"}
            </h2>
            <p className="mb-6 leading-8 text-foreground/70">
              {isArabic
                ? "يمنحك هذا القسم أسرع طريقة لتقييم مدى ملاءمتي للدور: السيرة الذاتية وروابط الحسابات وملخص قصير للخبرة والتقنيات التي أستخدمها غالبًا."
                : "This section gives you the fastest path to evaluate fit: resume, profile links, a short experience summary, and the technical stack I use most often."}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a
                  href="https://drive.google.com/file/d/1Q67mbk0Dp7EiN3hVbwfrupzA0xV4eF3c/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="me-2 h-4 w-4" />
                  {isArabic ? "تحميل السيرة الذاتية" : "Download Resume"}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/mafdyamir" target="_blank" rel="noopener noreferrer">
                  <Github className="me-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/mafdy-amir/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="me-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Briefcase className="h-5 w-5" />
                <h3 className="font-semibold">
                  {isArabic ? "ملخص الخبرة" : "Experience Summary"}
                </h3>
              </div>
              <ul className="space-y-2 text-sm leading-6 text-foreground/75">
                <li>
                  • {isArabic ? "أكثر من سنتين في بناء تطبيقات ويب وواجهات برمجة جاهزة للإنتاج" : "2+ years building production web applications and APIs"}
                </li>
                <li>
                  • {isArabic ? "خبرة في أنظمة الأعمال والتجارة الإلكترونية والدعم والأتمتة" : "Experience across business systems, commerce, support, and automation"}
                </li>
                <li>
                  • {isArabic ? "القدرة على تولي تنفيذ الواجهة الأمامية وبنية الواجهة الخلفية" : "Comfortable owning both frontend delivery and backend architecture"}
                </li>
                <li>
                  • {isArabic ? "تواصل قوي وانضباط في التسليم وتركيز على حل المشكلات" : "Strong communication, delivery discipline, and problem-solving focus"}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Code2 className="h-5 w-5" />
                <h3 className="font-semibold">
                  {isArabic ? "المهارات التقنية" : "Technical Skills"}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    dir="ltr"
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRecruiters;
