import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink, Github, CheckCircle, Lightbulb, Target, Zap, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The project you are looking for does not exist or may have been moved.
          </p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'completed':
        return { icon: <CheckCircle className="h-4 w-4 mr-2 text-green-500" />, text: 'Completed', className: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' };
      case 'in-progress':
        return { icon: <Zap className="h-4 w-4 mr-2 text-blue-500" />, text: 'In Progress', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' };
      case 'planned':
        return { icon: <Lightbulb className="h-4 w-4 mr-2 text-gray-500" />, text: 'Planned', className: 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300' };
      default:
        return { icon: null, text: status, className: 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300' };
    }
  };

  const statusInfo = getStatusInfo(project.status);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to All Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">
            {project.imageUrl && (
              <Card className="overflow-hidden border-none shadow-lg">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-auto object-cover aspect-[16/9]"
                />
              </Card>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {project.fullDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-3" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 text-orange-400 mr-3" />
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {project.challenges.map((challenge, index) => <li key={index}>{challenge}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Key Learnings
                  </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {project.learnings.map((learning, index) => <li key={index}>{learning}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex gap-3">
              <Button className="flex-1 group" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View Code
                </a>
              </Button>
              {project.demoUrl && (
                <Button variant="outline" className="flex-1 group" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <span>Live Demo</span>
                    <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              )}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="secondary" className={statusInfo.className}>{statusInfo.icon}{statusInfo.text}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Start Date</span>
                  <span>{new Date(project.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
                {project.endDate && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">End Date</span>
                    <span>{new Date(project.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;