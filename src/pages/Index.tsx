import { useEffect, useRef } from "react";

import About from "@/components/About";
import ProjectsPreview from "@/components/ProjectsPreview";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Skip animation setup on mobile/reduced motion
    if (reducedMotion) return;

    // Cleanup previous observer if component re-renders
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.add("translate-y-0");

          // Add a delay before animating child elements
          const animatedChildren = entry.target.querySelectorAll(".animated-child");
          animatedChildren.forEach((child, index) => {
            setTimeout(() => {
              (child as HTMLElement).classList.add("opacity-100");
              (child as HTMLElement).classList.add("translate-y-0");
            }, index * 100);
          });

          // Stop observing this element after animation
          observerRef.current?.unobserve(entry.target);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((element) => observerRef.current?.observe(element));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [reducedMotion]);

  useEffect(() => {
    // Skip parallax effects on mobile/reduced motion
    if (reducedMotion) return;

    // Apply subtle parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());

      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = (el as HTMLElement).dataset.speed || '20';
        const xPos = (x - 0.5) * parseInt(speed);
        const yPos = (y - 0.5) * parseInt(speed);

        (el as HTMLElement).style.transform = `translate(${xPos}px, ${yPos}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  useEffect(() => {
    // Always scroll to top on page load/refresh
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen bg-backgrounds text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Hero />
      
      <About />
      <ProjectsPreview />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;