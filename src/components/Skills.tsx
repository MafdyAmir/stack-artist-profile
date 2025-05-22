
import { Code, Server, Database, Terminal, Github, Laptop, Box, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "languages" | "frameworks" | "databases" | "tools";
  proficiency: number; // 1-5 scale
}

const skills: Skill[] = [
  { name: "JavaScript", icon: Code, category: "languages", proficiency: 5 },
  { name: "TypeScript", icon: Code, category: "languages", proficiency: 4 },
  { name: "Python", icon: Code, category: "languages", proficiency: 4 },
  { name: "Node.js", icon: Server, category: "frameworks", proficiency: 5 },
  { name: "NestJS", icon: Server, category: "frameworks", proficiency: 4 },
  { name: "Express.js", icon: Server, category: "frameworks", proficiency: 5 },
  { name: "GraphQL", icon: Code, category: "frameworks", proficiency: 4 },
  { name: "MongoDB", icon: Database, category: "databases", proficiency: 5 },
  { name: "PostgreSQL", icon: Database, category: "databases", proficiency: 4 },
  { name: "Redis", icon: Database, category: "databases", proficiency: 4 },
  { name: "Docker", icon: Box, category: "tools", proficiency: 4 },
  { name: "Git", icon: Github, category: "tools", proficiency: 5 },
  { name: "AWS", icon: Cloud, category: "tools", proficiency: 3 },
  { name: "CI/CD", icon: Terminal, category: "tools", proficiency: 4 },
  { name: "REST API", icon: Server, category: "frameworks", proficiency: 5 },
  { name: "Jest", icon: Terminal, category: "tools", proficiency: 4 },
];

const categories = [
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks & Libraries" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools & Platforms" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("languages");

  return (
    <section id="skills" className="bg-gradient-to-br from-secondary/30 to-background py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="text-lg text-foreground/80 mb-8 max-w-3xl">
          Here are some of the technologies, tools, and platforms I work with
          regularly as a backend developer.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="animate-on-scroll grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills
            .filter((skill) => skill.category === activeCategory)
            .map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card bg-card rounded-lg shadow-sm p-4 border border-border/30 flex flex-col items-center space-y-4 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <skill.icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-center">{skill.name}</span>
                <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 rounded-full"
                    style={{ 
                      width: `${skill.proficiency * 20}%`,
                      animationDelay: `${(index * 100) + 500}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
