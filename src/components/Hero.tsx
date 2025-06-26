import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import InteractiveTerminal from "./InteractiveTerminal";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 hero-gradient-enhanced bg-size-200 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        
        {/* Grid pattern overlay */}
        <div className="grid-pattern"></div>
        
        {/* Gradient orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-lg font-medium text-primary mb-2 animate-pulse hero-subtitle">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 hero-title">
              Mafdy
            </h1>
            <h3 className="text-2xl md:text-3xl mb-6 hero-role">
              <span className="animated-text-enhanced">Backend Developer</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-lg hero-description">
              I build scalable, reliable and maintainable backend systems that power modern web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow-enhanced hero-button" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm hero-button-outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="floating-code mt-8 lg:mt-0 relative z-20">
            <InteractiveTerminal className="w-full max-w-2xl mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;