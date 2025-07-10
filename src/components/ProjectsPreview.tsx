import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const ProjectsPreview = () => {
  const [filter, setFilter] = useState<string>("all");
  
  // Show only first 6 projects for preview
  const previewProjects = projects.slice(0, 6);
  
  // Extract unique tech categories from preview projects
  const techCategories = ["all", ...new Set(previewProjects.flatMap(p => p.techStack))].sort();
  
  // Filter projects based on selected tech
  const filteredProjects = filter === "all" 
    ? previewProjects 
    : previewProjects.filter(project => project.techStack.includes(filter));

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/10">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-3xl">
          Here are some of the backend projects I've worked on. Each project has been built with scalability, maintainability, and performance in mind.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {techCategories.slice(0, 8).map((tech) => (
            <Button 
              key={tech} 
              variant={filter === tech ? "default" : "outline"}
              size="sm"
              className="mb-2 transition-all duration-300"
              onClick={() => setFilter(tech)}
            >
              {tech}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="animate-on-scroll" 
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                transform: "translateY(20px)"
              }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                imageUrl={project.imageUrl}
                id={project.id}
              />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-foreground/70">No projects match the selected filter.</p>
            <Button onClick={() => setFilter("all")} className="mt-4">
              Show all projects
            </Button>
          </div>
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button size="lg" className="group">
              View All Projects
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;