
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const reducedMotion = useReducedMotion();

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
    console.log("Form submitted:", formData);
    alert("Thank you for your message! This is a demo form - in a real portfolio, this would send your message.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Contact Cards */}
          <Card className={`text-center p-6 border-2 border-transparent hover:border-primary/20 ${reducedMotion ? "" : "hover:shadow-lg transition-all duration-300"}`}>
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Me</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send me an email and I'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:mafdyamir15@gmail.com"
                className="text-primary hover:text-primary/80 font-medium text-sm"
              >
                mafdyamir15@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className={`text-center p-6 border-2 border-transparent hover:border-primary/20 ${reducedMotion ? "" : "hover:shadow-lg transition-all duration-300"}`}>
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call or WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Available for calls Monday to Friday, 9 AM - 6 PM (GMT+2).
              </p>
              <a 
                href="tel:+201271151446"
                className="text-primary hover:text-primary/80 font-medium text-sm"
              >
                +20 127 115 1446
              </a>
            </CardContent>
          </Card>

          <Card className={`text-center p-6 border-2 border-transparent hover:border-primary/20 ${reducedMotion ? "" : "hover:shadow-lg transition-all duration-300"}`}>
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Based in Cairo, Egypt. Available for remote work worldwide.
              </p>
              <span className="text-primary font-medium text-sm">
                Cairo, Egypt
              </span>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-12"
                    placeholder="Project Discussion / Job Opportunity / Collaboration"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px] resize-none"
                    placeholder="Tell me about your project, requirements, or how I can help you..."
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg font-medium">
                  Send Message
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links & Additional Info */}
          <div className="space-y-8">
            <Card className="p-6 border-0 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-0">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Follow me on social media or check out my work on these platforms.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://github.com/mafdyamir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 bg-background/50 ${reducedMotion ? "" : "hover:shadow-md transition-all duration-300"}`}
                  >
                    <div className="w-10 h-10 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center">
                      <Github className="h-5 w-5 text-white dark:text-gray-900" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">View my code repositories</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mafdy-amir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 bg-background/50 ${reducedMotion ? "" : "hover:shadow-md transition-all duration-300"}`}
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Professional network</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 bg-gradient-to-br from-green-500/5 to-green-600/10">
              <CardContent className="pt-0">
                <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Email Response</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Project Discussion</p>
                      <p className="text-sm text-muted-foreground">Free 30-minute consultation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-sm text-muted-foreground">Open to new opportunities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
