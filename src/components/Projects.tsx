
import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects: ProjectCardProps[] = [
  {
    title: "E-commerce API",
    description: "A RESTful API for an e-commerce platform with authentication, product management, order processing, and payment integration.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    githubUrl: "https://github.com/username/ecommerce-api",
    demoUrl: "https://api-docs.example.com",
  },
  {
    title: "Real-time Chat System",
    description: "Scalable backend for a real-time chat application supporting private messages, group chats, and message persistence.",
    techStack: ["NestJS", "Socket.io", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/username/chat-backend",
  },
  {
    title: "Task Management API",
    description: "API for a task management system with user authentication, task CRUD operations, assignments, and notifications.",
    techStack: ["Node.js", "Express", "MongoDB", "Jest", "Swagger"],
    githubUrl: "https://github.com/username/task-api",
    demoUrl: "https://task-api.example.com/docs",
  },
  {
    title: "Content Management System",
    description: "Headless CMS backend with content modeling, user roles, API access, and media management.",
    techStack: ["NestJS", "GraphQL", "TypeORM", "PostgreSQL", "AWS S3"],
    githubUrl: "https://github.com/username/headless-cms",
  },
  {
    title: "Event Booking Platform",
    description: "Backend for an event booking platform with event creation, ticket management, and payment processing.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
    githubUrl: "https://github.com/username/event-booking",
  },
  {
    title: "Microservice Architecture",
    description: "Example implementation of a microservice architecture with service discovery, API gateway, and inter-service communication.",
    techStack: ["NestJS", "gRPC", "RabbitMQ", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/username/microservices-demo",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  // Extract unique tech categories
  const techCategories = ["all", ...new Set(projects.flatMap(p => p.techStack))].sort();
  
  // Filter projects based on selected tech
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.techStack.includes(filter));

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/10">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-3xl">
          Here are some of the backend projects I've worked on. Each project has been built with scalability, maintainability, and performance in mind.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {techCategories.map((tech) => (
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
              <ProjectCard {...project} />
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
      </div>
    </section>
  );
};

export default Projects;
