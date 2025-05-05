
import { Code, Server, Database, Terminal, Docker, Github, Aws, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "languages" | "frameworks" | "databases" | "tools";
}

const skills: Skill[] = [
  { name: "JavaScript", icon: Code, category: "languages" },
  { name: "TypeScript", icon: Code, category: "languages" },
  { name: "Python", icon: Code, category: "languages" },
  { name: "Node.js", icon: Server, category: "frameworks" },
  { name: "NestJS", icon: Server, category: "frameworks" },
  { name: "Express.js", icon: Server, category: "frameworks" },
  { name: "GraphQL", icon: Code, category: "frameworks" },
  { name: "MongoDB", icon: Database, category: "databases" },
  { name: "PostgreSQL", icon: Database, category: "databases" },
  { name: "Redis", icon: Database, category: "databases" },
  { name: "Docker", icon: Docker, category: "tools" },
  { name: "Git", icon: Github, category: "tools" },
  { name: "AWS", icon: Aws, category: "tools" },
  { name: "CI/CD", icon: Terminal, category: "tools" },
  { name: "REST API", icon: Server, category: "frameworks" },
  { name: "Jest", icon: Terminal, category: "tools" },
];

const categories = [
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks & Libraries" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools & Platforms" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Here are some of the technologies, tools, and platforms I work with
          regularly as a backend developer.
        </p>

        <div className="space-y-12 animate-on-scroll">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl font-semibold mb-6">{category.label}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-3 hover:shadow-md transition-shadow"
                    >
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
