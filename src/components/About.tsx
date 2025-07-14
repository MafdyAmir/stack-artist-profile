import { Database, Server, Code, Download, Mail, CloudCog, ShieldCheck, ClipboardCheck, Zap, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "../hooks/useReducedMotion";

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
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="bg-secondary/30 py-20 md:py-28">
      <div className="section-container">
        <div className="space-y-20">
          {/* About Me: Image and Text */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className={`lg:col-span-2 flex justify-center ${reducedMotion ? "" : "animate-on-scroll"}`}>
              <div className="glowing-border">
                <Avatar className="w-80 h-80 md:w-96 md:h-96 rounded-2xl">
                  <AvatarImage src="profile_Image.jpg" alt="Mafdy - Backend Developer" className="object-cover rounded-2xl" />
                  <AvatarFallback className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-primary to-primary/70 text-white rounded-2xl">M</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className={`lg:col-span-3 space-y-6 ${reducedMotion ? "" : "animate-on-scroll"}`}>
              <h2 className="section-title text-left">About Me</h2>
              <p className="text-xl text-foreground/80 leading-relaxed">
                I'm a passionate backend developer with over 2 years of experience building robust server-side applications. I specialize in creating efficient, scalable, and maintainable systems.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                My journey in software development is driven by a deep curiosity for how systems work. I thrive on solving complex problems and believe in writing clean, well-tested code that aligns with business goals.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I'm currently expanding my knowledge in frontend technologies (React) to become a more versatile developer. I'm passionate about writing clean, testable code and collaborating with teams to build real-world digital solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="glow" asChild>
                  <a href="#contact"><Mail className="h-5 w-5 mr-2" />Contact Me</a>
                </Button>
                <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
                  <a href="https://drive.google.com/file/d/16V6YNjkMBD-3IDZp6HkbQWgcUpVnqPKm/view?usp=sharing" target="_blank"><Download className="h-5 w-5 mr-2" />Download CV</a>
                </Button>
              </div>
            </div>
          </div>

          {/* My Approach */}
          <div className={`text-center ${reducedMotion ? "" : "animate-on-scroll"}`}>
            <h3 className="section-subtitle">My Approach</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {features.map((feature, index) => (
                <div key={index} className={`bg-background p-6 rounded-lg shadow-md flex flex-col items-center text-center ${
                  reducedMotion ? "" : "hover:shadow-primary/20 transition-shadow duration-300"
                }`}>
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
