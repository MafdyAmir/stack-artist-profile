import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Only update active section on home page
      if (location.pathname === "/") {
        const sections = ["home", "about", "projects", "skills", "contact"];
        const sectionElements = sections.map(id => document.getElementById(id));
        
        const currentSectionIndex = sectionElements.findIndex((section, index) => {
          if (!section) return false;
          const nextSection = sectionElements[index + 1];
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = nextSection ? nextSection.offsetTop - 100 : document.body.scrollHeight;
          return window.scrollY >= sectionTop && window.scrollY < sectionBottom;
        });
        
        if (currentSectionIndex !== -1) {
          setActiveSection(sections[currentSectionIndex]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/#home", section: "home" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Projects", href: "/projects", section: "projects" },
    { name: "Skills", href: "/#skills", section: "skills" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];

  const isProjectsPage = location.pathname.startsWith("/projects");

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold relative group">
         <span className="relative z-10 animated-text">&lt;MafdyAmir /&gt;</span>

              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isProjectsPage && link.section === "projects" 
                ? true 
                : !isProjectsPage && activeSection === link.section;
              
              if (link.href.startsWith("/#") && location.pathname !== "/") {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "nav-link transition-colors",
                      isActive
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              }
              
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "nav-link transition-colors",
                      isActive
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              }
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "nav-link transition-colors",
                    isActive
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
            <ThemeToggle />
          </div>
          
          <div className="flex md:hidden">
            <div className="mr-2">
              <ThemeToggle />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div
        className={cn(
          "md:hidden transition-all duration-500 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/90 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = isProjectsPage && link.section === "projects" 
              ? true 
              : !isProjectsPage && activeSection === link.section;
            
            if (link.href.startsWith("/#") && location.pathname !== "/") {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            }
            
            if (link.href.startsWith("/")) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            }
            
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;