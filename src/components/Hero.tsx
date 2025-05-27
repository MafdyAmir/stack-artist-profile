
import { Button } from "@/components/ui/button";
import { GitBranch, Code } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';



const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput >$ Welcome to Mafdy's Portfolio Terminal!</TerminalOutput>,
    <TerminalOutput>$ I am Mafdy — a passionate backend developer.</TerminalOutput>,
    <TerminalOutput>$ Skilled in Node.js, Express.js, and MongoDB.</TerminalOutput>,
  ]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 hero-gradient bg-size-200"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={ `transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}` }>
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
                <Terminal
                  height={ "300px " }
                  colorMode={ ColorMode.Dark }
                  onInput={ (terminalInput) =>
                    console.log(`New terminal input received: '${terminalInput}'`)
                  }
                >
                  { terminalLineData }
                </Terminal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
