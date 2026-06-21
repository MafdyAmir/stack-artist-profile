import { Download, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "../hooks/useReducedMotion";

const techGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "Bun", "GraphQL", "REST"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "ORMs"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "AWS", "CI/CD", "Git"],
  },
];

const About = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="bg-secondary/30 py-20 md:py-28">
      <div className="section-container !py-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">
          <div className={`lg:col-span-2 flex justify-center ${reducedMotion ? "" : "animate-on-scroll"}`}>
            <div className="glowing-border">
              <Avatar className="w-72 h-72 md:w-96 md:h-96 rounded-2xl">
                <AvatarImage src="profile_Image.jpg" alt="Mafdy Amir — Full-Stack Developer" className="object-cover rounded-2xl" />
                <AvatarFallback className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl">M</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className={`lg:col-span-3 space-y-5 ${reducedMotion ? "" : "animate-on-scroll"}`}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              A developer who thinks like a partner, not just a coder
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm Mafdy — a full-stack developer with 2+ years of experience building
              backend systems and web applications for startups and growing businesses.
              I focus on what actually matters: clean architecture, reliable performance,
              and code that won't become tomorrow's headache.
            </p>
            <div className="space-y-3 text-foreground/75">
              <p>
                <strong className="text-foreground">What I specialize in:</strong> scalable
                APIs, custom business systems, e-commerce backends, payment & WhatsApp
                integrations, and turning messy workflows into clean software.
              </p>
              <p>
                <strong className="text-foreground">How I work with clients:</strong> we
                start with a short call to understand the business problem, agree on a
                clear scope and timeline, then ship in small, reviewable milestones — so
                you always know where the project stands.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="glow" asChild>
                <a href="#contact"><Mail className="h-5 w-5 mr-2" />Start a Conversation</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://drive.google.com/file/d/16V6YNjkMBD-3IDZp6HkbQWgcUpVnqPKm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5 mr-2" />Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Technologies subsection */}
        <div className={reducedMotion ? "" : "animate-on-scroll"}>
          <div className="border-t border-border pt-10">
            <h3 className="text-xl font-semibold mb-2">Technologies I work with</h3>
            <p className="text-foreground/60 mb-6 text-sm">
              The stack behind the solutions — chosen for reliability, scalability, and developer velocity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techGroups.map((g) => (
                <div key={g.label} className="bg-background border border-border rounded-xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{g.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <span key={t} className="text-sm px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
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
