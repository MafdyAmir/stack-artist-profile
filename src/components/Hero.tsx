
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-lg font-medium text-primary mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              John Doe
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Backend Developer
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I build scalable, reliable and maintainable backend systems that power modern web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block animate-on-scroll">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <pre className="text-xs sm:text-sm font-mono bg-gray-50 p-4 rounded overflow-x-auto">
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
