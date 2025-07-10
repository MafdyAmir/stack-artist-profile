import { Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 4,
    name: "Hany Fathy",
    role: "Founder & CEO",
    company: "Tungsten Media",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "MafdyAmir transformed our legacy system into a modern, scalable architecture. The project was delivered on time and within budget. Exceptional work!"
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at TechStart",
    company: "TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "MafdyAmir delivered exceptional backend architecture for our platform. The scalable solutions and clean code implementation exceeded our expectations. Highly recommended!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    company: "DataFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Working with MafdyAmir was a game-changer. The API design and database optimization improved our system performance by 300%. Outstanding technical expertise!"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Product Manager",
    company: "InnovateCorp",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The backend systems built by MafdyAmir are robust and maintainable. The documentation and testing practices are top-notch. A true professional!"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Engineering Director",
    company: "CloudTech Ltd",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The security implementations and DevOps practices implemented by MafdyAmir set new standards for our team. Incredible attention to detail and best practices."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Trusted by clients and companies worldwide
          </p>
        </div>

        <div className="animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="bg-card rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="h-8 w-8 text-primary/60" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-foreground/80 leading-relaxed mb-6">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-foreground/60">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-primary font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-on-scroll">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <p className="text-foreground/70">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-foreground/70">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5★</div>
            <p className="text-foreground/70">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;