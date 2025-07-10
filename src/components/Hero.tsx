import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import InteractiveTerminal from "./InteractiveTerminal";
import { useReducedMotion } from "../hooks/useReducedMotion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, reducedMotion ? 0 : 300);

    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 hero-gradient-enhanced bg-size-200 relative overflow-hidden"
    >
      {/* Animated Background Elements - disabled on mobile */}
      {!reducedMotion && (
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
      )}

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Card */}
          <div className={`${reducedMotion ? '' : 'transition-all duration-1000 delay-300'} ${isVisible || reducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="hero-content-card">
              <div className="hero-card-inner">
                <h2 className="hero-greeting">Hello, I'm</h2>
                <h1 className="hero-name">
                  MafdyAmir
                </h1>
                <h3 className="hero-title">
                  <span className="animated-text-enhanced">Backend Developer</span>
                </h3>
                <p className="hero-description">
                  I build scalable, reliable and maintainable backend systems that power modern web applications.
                </p>
                <div className="hero-buttons">
                  <Button size="lg" className={`hero-primary-btn ${reducedMotion ? '' : 'duration-500 transition-all'}`} asChild>
                    <a href="#projects">View Projects</a>
                  </Button>
                  <Button size="lg" variant="outline" className={`hero-secondary-btn ${reducedMotion ? '' : 'duration-500 transition-all'}`} asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Section */}
          <div className="floating-code mt-8 lg:mt-0 relative z-20">
            <InteractiveTerminal className="w-full max-w-2xl mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;