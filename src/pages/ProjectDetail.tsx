import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink, Github, CheckCircle, Code, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-foreground">Project Not Found</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'completed':
        return 'default';
      case 'in-progress':
        return 'secondary';
      case 'planned':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image/Media Section */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.imageUrl && (
            <div className="relative rounded-xl overflow-hidden bg-card border border-border">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge 
                  variant={getStatusVariant(project.status)} 
                  className="shadow-md"
                >
                  {project.status.replace('-', ' ')}
                </Badge>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Project Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription}
              </p>
              
              {/* Project Timeline and Links */}
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>
                    {new Date(project.startDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long'
                    })}
                    {project.endDate && (
                      <>
                        {' - '}
                        {new Date(project.endDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long'
                        })}
                      </>
                    )}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="sm" 
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Source
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Technology Stack */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Objective */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Project Objective</h2>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              The primary objective was to develop a fully functional, responsive, and easy-to-navigate {project.category} project based on the provided requirements. The goal was to:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Faithfully implement the technical requirements and design specifications
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Create a robust and maintainable codebase using modern technologies
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Ensure optimal performance and user experience across all devices
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Implement industry best practices for code organization and documentation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Features (Implemented)</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Based on the project requirements, the following features were implemented using modern web technologies:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges and Key Learnings */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Wrench className="h-6 w-6 text-orange-500 mr-3" />
                Challenges
              </h2>
              <div className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Scaling WebSocket connections
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Implementing message delivery guarantees
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Managing connection state across multiple servers
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Optimizing database queries for chat history
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Learnings */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3" />
                Key Learnings
              </h2>
              <div className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    WebSocket scaling patterns
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Redis pub/sub for distributed systems
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    NestJS advanced features and decorators
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Real-time application architecture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/projects">
            <Button 
              variant="outline" 
              size="lg"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;