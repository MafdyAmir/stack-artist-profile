
import { Github, Linkedin, Mail, Shield } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickLinks = [
    { name: "Home", section: "home" },
    { name: "Services", section: "services" },
    { name: "About", section: "about" },
    { name: "Projects", href: "/projects" },
    { name: "Why Work With Me", section: "why" },
    { name: "Recruiters", section: "recruiters" },
    { name: "Contact", section: "contact" },
  ];

  const services = [
    { name: "Custom business systems" },
    { name: "E-commerce platforms" },
    { name: "Admin dashboards" },
    { name: "API integrations" },
    { name: "Performance optimization" },
  ];

  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-xl text-foreground">Mafdy Amir</h3>
            </div>
            <p className="text-foreground/70 text-sm">
              Full-stack developer building web products that help businesses operate more efficiently and grow with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/mafdyamir" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/mafdy-amir/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@mafdyamir.com" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:mx-auto">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    <Link to={link.href} className="text-sm text-foreground/60 transition-colors hover:text-primary">
                      {link.name}
                    </Link>
                  ) : (
                    <button onClick={() => handleSectionClick(link.section)} className="bg-transparent border-none cursor-pointer p-0 text-sm text-foreground/60 transition-colors hover:text-primary">
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:mx-auto">
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name} className="text-foreground/60 text-sm">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-background py-4 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-foreground/50">
          <p>© {currentYear} Mafdy Amir. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
