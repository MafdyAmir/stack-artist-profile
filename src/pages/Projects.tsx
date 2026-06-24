import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const categories = [
    { id: "all", label: "All Case Studies" },
    { id: "business-system", label: "Business Systems" },
    { id: "commerce", label: "Commerce" },
    { id: "automation", label: "Automation" },
    { id: "support", label: "Support" },
    { id: "architecture", label: "Architecture" },
  ];

  const filteredProjects = getProjectsByCategory(filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="section-container">
        <Link
          to="/"
          className="mb-8 inline-flex items-center text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Portfolio Case Studies
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">Work that shows the business value</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Browse projects by business focus, then open a case study to see the challenge, solution, and result behind each build.
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
            <p className="text-lg text-foreground/70">No projects match the selected filter.</p>
            <Button className="mt-4" onClick={() => setFilter("all")}>
              Show all projects
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;