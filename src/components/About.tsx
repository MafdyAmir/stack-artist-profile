
import { Database, Server, Code, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Database,
    title: "Database Design",
    description:
      "Expertise in designing efficient database schemas for optimal performance and scalability.",
    skills: [
      { name: "MongoDB", color: "bg-green-600" },
      { name: "PostgreSQL", color: "bg-blue-600" },
      { name: "Redis", color: "bg-red-600" },
    ]
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "Building RESTful and GraphQL APIs that are secure, well-documented, and developer-friendly.",
    skills: [
      { name: "Node.js", color: "bg-green-500" },
      { name: "NestJS", color: "bg-red-500" },
      { name: "GraphQL", color: "bg-pink-500" },
      { name: "REST API", color: "bg-indigo-500" },
    ]
  },
  {
    icon: Code,
    title: "System Architecture",
    description:
      "Designing scalable backend systems that can handle high loads while maintaining reliability.",
    skills: [
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "TypeScript", color: "bg-blue-500" },
      { name: "Docker", color: "bg-cyan-500" },
      { name: "AWS", color: "bg-orange-500" },
      { name: "Git", color: "bg-gray-600" },
    ]
  },
];

const additionalSkills = [
  { name: "Express.js", color: "bg-gray-700" },
  { name: "Mongoose", color: "bg-red-700" },
  { name: "JWT", color: "bg-purple-600" },
  { name: "Testing", color: "bg-teal-600" },
  { name: "Linux", color: "bg-orange-600" },
  { name: "Nginx", color: "bg-green-700" },
  { name: "WebSockets", color: "bg-blue-700" },
  { name: "Microservices", color: "bg-indigo-600" },
];

const About = () => {
  return (
    <section id="about" className="bg-secondary/30 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Profile Image with Additional Skills */}
          <div className="animate-on-scroll flex flex-col items-center lg:items-start space-y-8">
            <div className="relative group">
              <Avatar className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-2xl ring-6 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40 group-hover:scale-[1.02]">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop&crop=face" 
                  alt="Mafdy - Backend Developer"
                  className="object-cover rounded-2xl"
                />
                <AvatarFallback className="text-8xl md:text-9xl lg:text-[10rem] font-bold bg-gradient-to-br from-primary to-primary/70 text-white rounded-2xl">
                  M
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Additional Skills */}
            <div className="w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">Additional Technologies</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {additionalSkills.map((skill, index) => (
                  <Badge
                    key={skill.name}
                    className={cn(
                      "text-white font-medium px-3 py-1 hover:scale-105 transition-transform duration-200",
                      skill.color
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Content - Well spaced text */}
          <div className="animate-on-scroll space-y-8 flex flex-col justify-center">
            {/* About Text with better spacing */}
            <div className="space-y-6">
              <p className="text-xl text-foreground/80 leading-relaxed">
                I'm a passionate backend developer with over 5 years of experience building robust server-side applications.
                I specialize in creating efficient, scalable, and maintainable backend systems that power modern web applications.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in software development started with a deep curiosity about how systems work behind the scenes.
                This led me to focus on backend technologies, where I've developed expertise in Node.js, NestJS, and various database systems.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I believe in writing clean, well-tested code that solves real business problems. My approach combines technical excellence with practical solutions,
                ensuring that the systems I build are not only technically sound but also aligned with business goals.
              </p>
            </div>

            {/* Action Buttons - Better positioned after intro text */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="glow" asChild>
                <a href="#contact">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
                <a href="/resume.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
            
            {/* Skills/Approach with better visual hierarchy */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">My Approach</h3>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary text-primary-foreground shadow-lg">
                        <feature.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-base text-foreground/70 leading-relaxed mb-3">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skill.name}
                            className={cn(
                              "text-white font-medium px-3 py-1 hover:scale-105 transition-transform duration-200",
                              skill.color
                            )}
                            style={{ animationDelay: `${(index * feature.skills.length + skillIndex) * 50}ms` }}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
