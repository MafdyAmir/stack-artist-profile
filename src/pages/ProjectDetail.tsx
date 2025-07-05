import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink, Github, CheckCircle, Lightbulb, Target } from "lucide-react";
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
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'planned':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Hero Section with Enhanced Design */}
      <div className="relative">
        {project.imageUrl && (
          <div className="relative h-80 md:h-96 overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
            <Badge 
              className={`absolute top-6 right-6 text-sm px-3 py-1 font-medium ${getStatusColor(project.status)}`}
            >
              {project.status.replace('-', ' ').toUpperCase()}
            </Badge>
          </div>
        )}
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-4xl mx-auto w-full">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-6 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                  {project.title}
                </h1>
                <p className="text-xl text-white/90 mb-6 max-w-3xl drop-shadow-md">
                  {project.fullDescription}
                </p>
                
                <div className="flex items-center text-white/80 mb-6">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                    {new Date(project.startDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long',
                      day: 'numeric'
                    })}
                    {project.endDate && (
                      <>
                        {' - '}
                        {new Date(project.endDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long',
                          day: 'numeric' 
                        })}
                      </>
                    )}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="group bg-white text-black hover:bg-white/90" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    View Code
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button size="lg" variant="outline" className="group border-white/30 text-white hover:bg-white/10" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-10">

        {/* Tech Stack with Enhanced Design */}
        <Card className="mb-12 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center text-2xl">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <Target className="h-5 w-5 text-primary" />
              </div>
              Technology Stack
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Technologies and frameworks used in this project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105 font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features with Enhanced Design */}
        <Card className="mb-12 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center text-2xl">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mr-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              Key Features
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Main functionalities and capabilities implemented in this project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg bg-green-500/5 border border-green-500/10 hover:bg-green-500/10 transition-colors duration-300">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <span className="text-sm leading-relaxed font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Challenges with Enhanced Design */}
          <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center text-xl">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mr-3">
                  <Target className="h-5 w-5 text-orange-500" />
                </div>
                Challenges Overcome
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Technical challenges faced and solutions implemented
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start p-4 rounded-lg bg-orange-500/5 border border-orange-500/10 hover:bg-orange-500/10 transition-colors duration-300">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learnings with Enhanced Design */}
          <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center text-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3">
                  <Lightbulb className="h-5 w-5 text-blue-500" />
                </div>
                Key Learnings
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Skills and knowledge gained from this project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <div key={index} className="flex items-start p-4 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 transition-colors duration-300">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{learning}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Navigation */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <div className="flex justify-center">
            <Link to="/projects">
              <Button variant="outline" size="lg" className="group px-8 py-3 text-base font-medium hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;