
import { Github, ExternalLink, ChevronDown, ChevronUp, Link } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  id?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
  id,
  imageUrl,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  return (
    <a href={`/projects/${id}`}>

    <Card className="project-card h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center justify-between">
          {title}
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0" 
            onClick={toggleExpand}
          >
            {isExpanded ? 
              <ChevronUp className="h-4 w-4" /> : 
              <ChevronDown className="h-4 w-4" />
            }
          </Button>
        </CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-primary/5 text-xs transition-all duration-300 hover:bg-primary/10">
              {tech}
            </Badge>
          ))}
          {techStack.length > 3 && !isExpanded && (
            <Badge variant="outline" className="bg-secondary/30 text-xs">
              +{techStack.length - 3}
            </Badge>
          )}
          {isExpanded && techStack.slice(3).map((tech, index) => (
            <Badge key={`extra-${index}`} variant="outline" className="bg-primary/5 text-xs animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <CardDescription className={cn(
          "text-sm text-foreground/70 transition-all duration-300",
          isExpanded ? "line-clamp-none" : "line-clamp-3"
        )}>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between pt-3 border-t border-border/30">
        <Button variant="outline" size="sm" className="group" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
            Code
          </a>
        </Button>
        {demoUrl && (
          <Button size="sm" className="group" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <span>Demo</span>
              <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
    </a>)
};

export default ProjectCard;
