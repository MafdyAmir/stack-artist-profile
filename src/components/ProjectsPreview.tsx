import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";

const ProjectsPreview = () => {
  const reducedMotion = useReducedMotion();
  const { language, isArabic } = useLanguage();
  const featuredProjects = getProjects(language).slice(0, 3);

  return (
    <section id="projects" className="bg-gradient-to-b from-background via-secondary/10 to-background py-20 md:py-28">
      <div className="section-container !py-0">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className={`mb-3 text-sm font-semibold text-primary ${isArabic ? "" : "uppercase tracking-[0.2em]"}`}>
            {isArabic ? "دراسات حالة مختارة" : "Featured Case Studies"}
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {isArabic ? "مشروعات مبنية حول نتائج الأعمال" : "Projects framed around business outcomes"}
          </h2>
          <p className="text-lg leading-8 text-foreground/70">
            {isArabic
              ? "يعرض كل مشروع التحدي والمنهج والنتيجة، حتى يتمكن العملاء ومسؤولو التوظيف من فهم قيمته بسرعة."
              : "Each project below shows the challenge, the approach, and the result — so clients and recruiters can understand the value quickly."}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={reducedMotion ? "" : "animate-on-scroll"}
              style={reducedMotion ? {} : { animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/projects">
              {isArabic ? "عرض كل دراسات الحالة" : "View All Case Studies"}
              <ArrowRight className={`h-5 w-5 ${isArabic ? "mr-2 rotate-180" : "ml-2"}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
