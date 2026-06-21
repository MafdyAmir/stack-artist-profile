import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Briefcase, Code2 } from "lucide-react";

const skills = [
  "Node.js", "NestJS", "Express", "TypeScript", "Python",
  "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs",
  "Docker", "AWS", "CI/CD", "Microservices", "System Design",
];

const ForRecruiters = () => {
  return (
    <section id="recruiters" className="py-20 md:py-28 bg-background">
      <div className="section-container !py-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              For Recruiters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Evaluating me for a role?
            </h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Everything you need to assess my fit — resume, code, profile, and a quick
              experience summary — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a
                  href="https://drive.google.com/file/d/16V6YNjkMBD-3IDZp6HkbQWgcUpVnqPKm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/mafdyamir" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/mafdy-amir/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <Briefcase className="h-5 w-5" />
                <h3 className="font-semibold">Experience Summary</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed">
                <li>• 2+ years building production backend systems</li>
                <li>• Delivered APIs, CMSs, e-commerce, and real-time platforms</li>
                <li>• Comfortable across the full stack with React on the frontend</li>
                <li>• Remote-ready, available immediately for new opportunities</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <Code2 className="h-5 w-5" />
                <h3 className="font-semibold">Core Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRecruiters;
