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
  const technicalSkills = [
    { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "Python", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "MongoDB", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Redis", color: "bg-red-100 text-red-800 border-red-200" },
    { name: "Docker", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
    { name: "AWS", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { name: "Kubernetes", color: "bg-purple-100 text-purple-800 border-purple-200" }
  ];

  const architectureSkills = [
    { name: "Microservices", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { name: "System Design", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    { name: "DevOps", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "API Design", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
    { name: "Cloud Architecture", color: "bg-sky-100 text-sky-800 border-sky-200" },
    { name: "Performance Optimization", color: "bg-emerald-100 text-emerald-800 border-emerald-200" }
  ];

  const projectManagement = [
    { name: "Agile", color: "bg-pink-100 text-pink-800 border-pink-200" },
    { name: "Scrum", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "Team Leadership", color: "bg-rose-100 text-rose-800 border-rose-200" },
    { name: "Code Review", color: "bg-violet-100 text-violet-800 border-violet-200" },
    { name: "Mentoring", color: "bg-teal-100 text-teal-800 border-teal-200" },
    { name: "Documentation", color: "bg-amber-100 text-amber-800 border-amber-200" }
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 md:py-28">
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
              </div>
            </div>
            <div className="lg:col-span-3 animate-on-scroll space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-left">About Me</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                I'm a passionate backend developer with over 5 years of experience building robust server-side applications. I specialize in creating efficient, scalable, and maintainable systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in software development is driven by a deep curiosity for how systems work. I thrive on solving complex problems and believe in writing clean, well-tested code that aligns with business goals.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg" asChild>
                  <a href="#contact"><Mail className="h-5 w-5 mr-2" />Contact Me</a>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
                  <a href="/resume.pdf" download><Download className="h-5 w-5 mr-2" />Download CV</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">🛠️ Technical Skills</h3>
              <p className="text-gray-600">Core technologies and tools I work with</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-wrap gap-3 justify-center">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture & Leadership */}
          <div className="animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">🏗️ Architecture & Leadership</h3>
              <p className="text-gray-600">System design and development practices</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-wrap gap-3 justify-center">
                {architectureSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Management & Leadership */}
          <div className="animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">📋 Project Management & Leadership</h3>
              <p className="text-gray-600">Leadership skills and project management experience</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-wrap gap-3 justify-center">
                {projectManagement.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${skill.color}`}
                  >
                    {skill.name}
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

export default About;
