
import { Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <Card className="project-card h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        {demoUrl && (
          <Button size="sm" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
