
import { Database, Server, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Database,
    title: "Database Design",
    description:
      "Expertise in designing efficient database schemas for optimal performance and scalability.",
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "Building RESTful and GraphQL APIs that are secure, well-documented, and developer-friendly.",
  },
  {
    icon: Code,
    title: "System Architecture",
    description:
      "Designing scalable backend systems that can handle high loads while maintaining reliability.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-secondary/30 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
          <div className="lg:col-span-2 animate-on-scroll">
            <p className="text-lg text-foreground/80 mb-6">
              I'm a passionate backend developer with over 5 years of experience building robust server-side applications.
              I specialize in creating efficient, scalable, and maintainable backend systems that power modern web applications.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              My journey in software development started with a deep curiosity about how systems work behind the scenes.
              This led me to focus on backend technologies, where I've developed expertise in Node.js, NestJS, and various database systems.
            </p>
            <p className="text-lg text-foreground/80">
              I believe in writing clean, well-tested code that solves real business problems. My approach combines technical excellence with practical solutions,
              ensuring that the systems I build are not only technically sound but also aligned with business goals.
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4">My Approach</h3>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-foreground">{feature.title}</h4>
                    <p className="mt-2 text-base text-foreground/70">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
