import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import InteractiveTerminal from "./InteractiveTerminal";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), reducedMotion ? 0 : 200);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 hero-gradient-enhanced bg-size-200 relative overflow-hidden"
    >
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
          <div className="floating-shape shape-5"></div>
          <div className="grid-pattern"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      )}

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`${reducedMotion ? "" : "transition-all duration-1000"} ${
              isVisible || reducedMotion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content-card">
              <div className="hero-card-inner">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Available for new projects
                </div>
                <h1 className="hero-name text-balance">
                  I Build Web Solutions That Help Businesses Grow
                </h1>
                <h2 className="hero-title">
                  <span className="animated-text-enhanced">Full-Stack Developer</span>
                  <span className="text-foreground/70"> · Backend Specialist</span>
                </h2>
                <p className="hero-description">
                  I partner with startups, agencies, and product teams to design and build
                  fast, reliable, and scalable web applications — from custom business
                  systems to e-commerce platforms and APIs.
                </p>
                <div className="hero-buttons">
                  <Button size="lg" className="hero-primary-btn" asChild>
                    <a href="#contact">
                      Let's Discuss Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="hero-secondary-btn" asChild>
                    <a href="#projects">View My Work</a>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Replies within 24 hours
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" /> Free 30-min consultation
                  </span>
                </div>
              </div>
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
