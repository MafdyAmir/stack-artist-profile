import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const { language, isArabic } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const categories = [
    { id: "all", label: isArabic ? "كل دراسات الحالة" : "All Case Studies" },
    { id: "business-system", label: isArabic ? "أنظمة الأعمال" : "Business Systems" },
    { id: "commerce", label: isArabic ? "التجارة الإلكترونية" : "Commerce" },
    { id: "automation", label: isArabic ? "الأتمتة" : "Automation" },
    { id: "support", label: isArabic ? "الدعم" : "Support" },
    { id: "architecture", label: isArabic ? "هندسة الأنظمة" : "Architecture" },
  ];

  const filteredProjects = getProjectsByCategory(filter, language);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="section-container">
        <Link
          to="/"
          className="mb-8 inline-flex items-center text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className={`h-4 w-4 ${isArabic ? "ml-2 rotate-180" : "mr-2"}`} />
          {isArabic ? "العودة إلى الرئيسية" : "Back to Home"}
        </Link>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className={`mb-3 text-sm font-semibold text-primary ${isArabic ? "" : "uppercase tracking-[0.2em]"}`}>
            {isArabic ? "دراسات حالة من معرض الأعمال" : "Portfolio Case Studies"}
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            {isArabic ? "أعمال توضح قيمتها للنشاط التجاري" : "Work that shows the business value"}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {isArabic
              ? "تصفح المشروعات بحسب مجالها، ثم افتح دراسة الحالة لتتعرف على التحدي والحل والنتيجة وراء كل مشروع."
              : "Browse projects by business focus, then open a case study to see the challenge, solution, and result behind each build."}
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-foreground/70">
              {isArabic ? "لا توجد مشروعات تطابق التصنيف المحدد." : "No projects match the selected filter."}
            </p>
            <Button className="mt-4" onClick={() => setFilter("all")}>
              {isArabic ? "عرض كل المشروعات" : "Show all projects"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
