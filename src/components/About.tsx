import { Database, Server, Code, Download, Mail, CloudCog, ShieldCheck, ClipboardCheck, Zap, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient, scalable database schemas for optimal performance.",
  },
  {
    icon: Server,
    title: "API Development",
    description: "Building secure, well-documented RESTful and GraphQL APIs.",
  },
  {
    icon: Code,
    title: "System Architecture",
    description: "Architecting reliable systems that handle high loads and scale effectively.",
  },
  {
    icon: CloudCog,
    title: "DevOps & Deployment",
    description: "Streamlining development with CI/CD pipelines and efficient deployment.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    description: "Implementing robust authentication and security best practices.",
  },
  {
    icon: ClipboardCheck,
    title: "Testing & QA",
    description: "Ensuring code quality with comprehensive unit and integration testing.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Identifying and resolving performance bottlenecks to ensure speed.",
  },
  {
    icon: Users,
    title: "Agile & Collaboration",
    description: "Working effectively in agile teams to deliver high-quality software.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-secondary/30 py-20 md:py-28">
      <div className="section-container">
        <div className="space-y-20">
          {/* About Me: Image and Text */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 animate-on-scroll flex justify-center">
              <div className="relative group">
                <Avatar className="w-80 h-80 md:w-96 md:h-96 rounded-2xl ring-8 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40 group-hover:scale-105">
                  <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop&crop=face" alt="Mafdy - Backend Developer" className="object-cover rounded-2xl" />
                  <AvatarFallback className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-primary to-primary/70 text-white rounded-2xl">M</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="lg:col-span-3 animate-on-scroll space-y-6">
              <h2 className="section-title text-left">About Me</h2>
              <p className="text-xl text-foreground/80 leading-relaxed">
                I'm a passionate backend developer with over 5 years of experience building robust server-side applications. I specialize in creating efficient, scalable, and maintainable systems.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                My journey in software development is driven by a deep curiosity for how systems work. I thrive on solving complex problems and believe in writing clean, well-tested code that aligns with business goals.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="glow" asChild>
                  <a href="#contact"><Mail className="h-5 w-5 mr-2" />Contact Me</a>
                </Button>
                <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
                  <a href="/resume.pdf" download><Download className="h-5 w-5 mr-2" />Download CV</a>
                </Button>
              </div>
            </div>
          </div>

          {/* My Approach */}
          <div className="animate-on-scroll text-center">
            <h3 className="section-subtitle">My Approach</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {features.map((feature, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-md hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-base text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
