
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
          <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 p-10 shadow-md bg-white dark:bg-gray-900 transition-all">
            <p className="text-xl text-gray-800 dark:text-gray-300 mb-8 leading-relaxed">
              I'm currently open for new opportunities and collaborations. If you'd like to discuss a project or just say hello, feel free to reach out through the form or my social links below.
            </p>

            <div className="flex flex-col space-y-5">
              <a
                href="mailto:contact@example.com"
                className="flex items-center text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-white  transition-all duration-200"
              >
                <Mail className="h-6 w-6 mr-4 text-primary" />
                <span className="text-base">contact@example.com</span>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-white  transition-all duration-200"
              >
                <Github className="h-6 w-6 mr-4 text-primary" />
                <span className="text-base">github.com/yourusername</span>
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-white  transition-all duration-200"
              >
                <Linkedin className="h-6 w-6 mr-4 text-primary" />
                <span className="text-base">linkedin.com/in/yourusername</span>
              </a>
            </div>
          </div>


          <div className="animate-on-scroll rounded-2xl border border-gray-200 p-8 shadow-lg shadow-primary/20 transition-all duration-300 -translate-y-2  border-primary/30 bg-gradient-to-br from-card to-card/80 cursor-pointer">
            <form onSubmit={ handleSubmit } className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={ formData.name }
                  onChange={ handleChange }
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={ formData.email }
                  onChange={ handleChange }
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={ formData.message }
                  onChange={ handleChange }
                  required
                  className="w-full"
                  rows={ 5 }
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
