
import { Button } from "@/components/ui/button";
import { GitBranch, Code, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

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
      className="min-h-screen flex items-center pt-16 hero-gradient bg-size-200"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-lg font-medium text-primary mb-2 animate-pulse">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              John Doe
            </h1>
            <h3 className="text-2xl md:text-3xl text-foreground/80 mb-6">
              <span className="animated-text">Backend Developer</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-lg">
              I build scalable, reliable and maintainable backend systems that power modern web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block floating-code">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-40 animate-pulse"></div>
              <div className="relative bg-card p-6 rounded-lg shadow-xl border border-border/30">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-destructive/70 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  <span className="ml-auto text-xs text-foreground/60 font-mono">server.js</span>
                </div>
                <pre className="text-xs sm:text-sm font-mono bg-background/60 p-4 rounded overflow-x-auto">
{`// backend.js
const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello, I build robust 
    backend systems!'
  });
});

// Connect to database
initDatabase()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running...');
    });
  });`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
