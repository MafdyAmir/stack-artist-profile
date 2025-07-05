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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/projects"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            <Badge variant={getStatusVariant(project.status)} className="capitalize">
              {project.status.replace('-', ' ')}
            </Badge>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              {project.fullDescription}
            </p>
            
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Calendar className="h-4 w-4 mr-2" />
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

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View Source
                </a>
              </Button>
              {project.demoUrl && (
                <Button size="lg" variant="outline" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {project.imageUrl && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Technology Stack */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    Technology Stack
                  </CardTitle>
                  <CardDescription>
                    Technologies and tools used in this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Key Features
                  </CardTitle>
                  <CardDescription>
                    Main functionalities implemented in this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-3 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Challenges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Wrench className="h-4 w-4 mr-2 text-primary" />
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Key Learnings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    Learnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {learning}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/projects">
            <Button variant="outline" size="lg">
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