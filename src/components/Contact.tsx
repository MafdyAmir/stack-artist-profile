
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! This is a demo form - in a real portfolio, this would send your message.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <div className="animate-on-scroll">
            <p className="text-lg text-gray-700 mb-6">
              I'm currently open for new opportunities and collaborations. If you'd like to discuss a project or just say hello, feel free to reach out through the form or my social links.
            </p>
            <div className="flex flex-col space-y-4 mt-8">
              <a
                href="mailto:contact@example.com"
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 mr-3" />
                contact@example.com
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5 mr-3" />
                github.com/yourusername
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>

          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  rows={5}
                  placeholder="Your message here..."
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
