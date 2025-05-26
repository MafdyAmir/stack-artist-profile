
import { Code, Server, Database, Terminal, Github, Laptop, Box, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

const getProficiencyDots = (level: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className={cn(
        "w-2 h-2 rounded-full transition-colors duration-300",
        i < level ? "bg-primary" : "bg-muted"
      )}
    />
  ));
};

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

        <div className="animate-on-scroll grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills
            .filter((skill) => skill.category === activeCategory)
            .map((skill, index) => (
              <Card
                key={skill.name}
                className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-card/80"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <div className="flex gap-1 justify-center">
                      {getProficiencyDots(skill.proficiency)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
