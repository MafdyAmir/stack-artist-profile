import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Lightbulb, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProjectById } from "@/data/projects";

const featureMap: Record<string, string[]> = {
  "business-system": [
    "Role-based workflows and access control",
    "Clear data structure for day-to-day operations",
    "Admin-friendly management screens",
    "Reliable API flow for frontend integration",
    "Scalable foundation for future modules",
  ],
  commerce: [
    "Checkout flow designed to reduce friction",
    "Cart, orders, and inventory handling",
    "Payment-ready architecture",
    "Admin operations support",
    "Built to scale with business growth",
  ],
  automation: [
    "Process automation to reduce manual work",
    "Prompt or event-driven workflow design",
    "Structured outputs for consistency",
    "Reusable system for repeated tasks",
    "Designed to save time and improve output quality",
  ],
  support: [
    "Real-time communication flow",
    "Persistent message handling",
    "Presence and status awareness",
    "Responsive experience across devices",
    "Reliable support workflow under load",
  ],
  platform: [
    "Clear product structure and navigation",
    "User-friendly operational flow",
    "Performance-focused implementation",
    "Reusable components and scalable layout",
    "Easy expansion for future features",
  ],
  architecture: [
    "Service separation for maintainability",
    "Event-driven communication between modules",
    "Deployment-friendly structure",
    "Monitoring-ready foundation",
    "Built for scale and future teams",
  ],
};

const challengePoints: Record<string, string[]> = {
  "business-system": [
    "Teams needed one reliable place to manage core work without juggling multiple tools.",
    "Manual handoffs were slowing down daily operations and creating room for mistakes.",
  ],
  commerce: [
    "The buying flow needed to stay smooth while handling products, payments, and stock updates.",
    "The system had to support growth without creating checkout friction.",
  ],
  automation: [
    "The process had to be faster without losing structure or consistency.",
    "The team needed repeatable output instead of starting from scratch every time.",
  ],
  support: [
    "The chat experience needed to stay responsive while preserving message history.",
    "Support teams needed a dependable live workflow across devices and sessions.",
  ],
  platform: [
    "The product needed a clear structure that could grow without becoming difficult to manage.",
    "The experience had to stay intuitive for both users and administrators.",
  ],
  architecture: [
    "The system needed to scale without turning into a difficult-to-maintain monolith.",
    "Each service needed to remain observable, testable, and easy to extend.",
  ],
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            The case study you&apos;re looking for does not exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const features = featureMap[project.category] ?? featureMap["platform"];
  const challenges = challengePoints[project.category] ?? challengePoints["platform"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.12),_transparent_35%),linear-gradient(180deg,_hsl(var(--background))_0%,_hsl(var(--secondary)/0.12)_100%)]" />
        <div className="section-container">
          <Link to="/projects" className="mb-8 inline-flex items-center text-primary transition-colors hover:text-primary/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1 uppercase tracking-[0.2em]">
              {project.timeframe}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {project.imageUrl && (
        <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-2xl shadow-primary/10">
            <img src={project.imageUrl} alt={project.title} className="h-80 w-full object-cover md:h-[30rem]" />
          </div>
        </section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <section className="section-container pt-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Screenshots
              </p>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                A closer look at the product
              </h2>
            </div>
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {project.gallery.map((src, i) => (
                  <CarouselItem key={i}>
                    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl shadow-primary/10">
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="h-72 w-full object-cover md:h-[28rem]"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:-left-6" />
              <CarouselNext className="right-2 md:-right-6" />
            </Carousel>
          </div>
        </section>
      )}



      <section className="section-container pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Project Overview
              </p>
              <p className="leading-7 text-foreground/75">
                {project.summary} This case study focuses on the practical thinking behind the build: how the structure supports the business, what was improved, and why the solution is maintainable long term.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Project Objective
              </p>
              <div className="space-y-3 text-sm leading-7 text-foreground/75">
                <p>Build a reliable product that solves a real business problem without adding unnecessary complexity.</p>
                <p>Create a clean foundation that can scale with future features, users, and operational needs.</p>
                <p>Keep the experience easy to understand for both customers and the team managing it.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Technology Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-container pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">The Challenge</h2>
              </div>
              <p className="mb-4 leading-7 text-foreground/75">{project.challenge}</p>
              <div className="space-y-4">
                {challenges.map((item) => (
                  <div key={item} className="rounded-2xl border border-border/50 bg-secondary/20 p-4 text-sm leading-7 text-foreground/75">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">The Solution</h2>
              </div>
              <p className="mb-4 leading-7 text-foreground/75">{project.solution}</p>
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                <p className="text-sm font-medium text-foreground/80">
                  The implementation was designed to keep the product simple to use, dependable in production, and easy to extend later.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-container pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Key Features Implemented</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/60 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-foreground/75">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Key Learnings</h2>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-border/50 bg-secondary/20 p-4 text-sm leading-7 text-foreground/75">
                  Strong structure upfront makes later expansion much easier and safer.
                </div>
                <div className="rounded-2xl border border-border/50 bg-secondary/20 p-4 text-sm leading-7 text-foreground/75">
                  Clear communication and focused scope matter as much as the technical implementation.
                </div>
                <div className="rounded-2xl border border-border/50 bg-secondary/20 p-4 text-sm leading-7 text-foreground/75">
                  The best systems are the ones that are useful, maintainable, and easy for real people to use.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-container pt-0 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-border/60 bg-card/90 lg:col-span-2">
            <CardContent className="p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold">The Result</h2>
              <p className="leading-7 text-foreground/75">{project.result}</p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-primary/5">
            <CardContent className="space-y-4 p-6 md:p-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Need a similar build?</h2>
              </div>
              <p className="text-sm leading-6 text-foreground/70">
                I can help scope the work, shape the architecture, and build the product around the outcome you want.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="/#contact">Start a Project</a>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;