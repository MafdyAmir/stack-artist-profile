import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { useReducedMotion } from "../hooks/useReducedMotion";

const ProjectsPreview = () => {
  const reducedMotion = useReducedMotion();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="bg-gradient-to-b from-background via-secondary/10 to-background py-20 md:py-28">
      <div className="section-container !py-0">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Featured Case Studies
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Projects framed around business outcomes
          </h2>
          <p className="text-lg leading-8 text-foreground/70">
            Each project below shows the challenge, the approach, and the result — so clients and recruiters can understand the value quickly.
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
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;