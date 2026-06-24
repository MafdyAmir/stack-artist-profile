import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const statusLabels: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
};

const formatCategory = (value: Project["category"]) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group h-full overflow-hidden border-border/70 bg-card/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
      {project.imageUrl && (
        <div className="relative aspect-[16/9] overflow-hidden bg-secondary/20">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <Badge className="absolute left-4 top-4 bg-background/90 text-foreground backdrop-blur-sm">
            {statusLabels[project.status]}
          </Badge>
        </div>
      )}

      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge variant="outline" className="bg-primary/5 text-xs uppercase tracking-wide">
            {project.timeframe}
          </Badge>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {formatCategory(project.category)}
          </span>
        </div>
        <CardTitle className="text-2xl leading-tight">{project.title}</CardTitle>
        <CardDescription className="text-sm leading-6 text-foreground/75">
          {project.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid gap-3 rounded-2xl border border-border/60 bg-secondary/20 p-4 text-sm">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Challenge
            </p>
            <p className="leading-6 text-foreground/75">{project.challenge}</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Solution
            </p>
            <p className="leading-6 text-foreground/75">{project.solution}</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Result
            </p>
            <p className="leading-6 text-foreground/75">{project.result}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap items-center gap-3 border-t border-border/60 pt-5">
        <Button asChild className="group/button">
          <Link to={`/projects/${project.id}`}>
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        {project.demoUrl && (
          <Button variant="outline" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
