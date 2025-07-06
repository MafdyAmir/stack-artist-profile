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
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
          <p className="text-slate-300 max-w-md mx-auto">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/projects">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation Breadcrumb */}
      <nav className="bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                Home
              </Link>
              <span className="text-slate-500">›</span>
              <Link to="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
                Projects
              </Link>
              <span className="text-slate-500">›</span>
              <span className="text-slate-300 uppercase tracking-wider">{project.title}</span>
            </div>
            <Link 
              to="/projects"
              className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Title Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-8 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 mt-4">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project
              </p>
            </div>
          </div>

          {/* Main Project Card */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Project Image */}
            {project.imageUrl && (
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={getStatusVariant(project.status)} 
                    className="bg-white/90 text-slate-800 border-0 shadow-md"
                  >
                    {project.status.replace('-', ' ')}
                  </Badge>
                </div>
              </div>
            )}

            {/* Project Content */}
            <div className="p-8">
              {/* Project Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Timeline</h3>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
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
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Links</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      size="sm" 
                      className="bg-gray-900 hover:bg-gray-800 text-white"
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
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
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
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Technology Stack */}
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Code className="h-5 w-5 mr-2 text-amber-500" />
                    Technology Stack
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Technologies and tools used in this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <Badge 
                        key={index} 
                        className="bg-slate-800 text-slate-200 border-slate-600 hover:bg-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Key Features
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Main functionalities implemented in this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Challenges */}
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-white">
                    <Wrench className="h-5 w-5 mr-2 text-orange-500" />
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-slate-300 text-sm leading-relaxed">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Key Learnings */}
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-white">
                    <CheckCircle className="h-5 w-5 mr-2 text-blue-500" />
                    Key Learnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="text-slate-300 text-sm leading-relaxed">
                        • {learning}
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
      <section className="py-16 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/projects">
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
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