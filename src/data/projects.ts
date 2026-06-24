export interface Project {
  id: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  category:
    | "business-system"
    | "commerce"
    | "automation"
    | "support"
    | "platform"
    | "architecture";
  status: "completed" | "in-progress" | "planned";
  timeframe: string;
}

export const projects: Project[] = [
  {
    id: "traditional-cms",
    title: "Content Management System",
    summary:
      "A CMS built to help teams publish faster, manage content safely, and keep websites updated without relying on developers.",
    challenge:
      "The team needed a single place to manage pages, media, and reusable content without breaking the live website or creating extra manual work.",
    solution:
      "I designed a structured content platform with role-based access, flexible content models, media handling, and clean API access for the frontend.",
    result:
      "Publishing became quicker and more reliable, with fewer content bottlenecks and a smoother handoff between marketing and development.",
    techStack: ["NestJS", "MongoDB", "AWS S3", "Redis", "REST API"],
    githubUrl: "https://github.com/username/traditional-cms",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    category: "business-system",
    status: "completed",
    timeframe: "2024",
  },
  {
    id: "ecommerce-api",
    title: "Commerce Backend Engine",
    summary:
      "A backend for an online store with secure checkout, inventory handling, and order management built to support growth.",
    challenge:
      "The store needed a dependable checkout flow that could handle product browsing, payment processing, and order tracking without slowing sales.",
    solution:
      "I built a commerce API with authentication, cart logic, payment integration, product management, and admin tools for operations.",
    result:
      "The business got a stable buying flow that supports sales operations, reduces manual handling, and is ready for future scaling.",
    techStack: ["Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    githubUrl: "https://github.com/MafdyAmir/E-commerce---express",
    demoUrl: "https://api-docs.example.com",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg",
    category: "commerce",
    status: "completed",
    timeframe: "2023",
  },
  {
    id: "healthcare-api",
    title: "Service Booking API",
    summary:
      "A backend for service-based businesses that need appointment handling, secure data flow, and reliable customer interactions.",
    challenge:
      "The system needed to support request management, user access, and business workflows while keeping sensitive data organized and easy to retrieve.",
    solution:
      "I implemented a service-focused API with authentication, validation, data structure design, and secure gateway integration for daily operations.",
    result:
      "Teams could manage requests more efficiently, while customers experienced a cleaner and more dependable service flow.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    githubUrl: "https://github.com/username/healthcare-api",
    demoUrl: "https://api-docs.example.com",
    imageUrl:
      "https://media.istockphoto.com/id/863958328/vector/stethoscope-icon.jpg?s=612x612&w=0&k=20&c=to7jGDQ9xktMUmA1CjHs5Dg_9Xg9fwhG2M5jOR-NtXk=",
    category: "business-system",
    status: "completed",
    timeframe: "2023",
  },
  {
    id: "realtime-chat",
    title: "Real-Time Support Chat",
    summary:
      "A live messaging system for faster customer communication, better response times, and conversation history that stays organized.",
    challenge:
      "The client needed a chat experience that stayed responsive under load and kept message history available across devices.",
    solution:
      "I built a real-time chat layer with persistent storage, presence tracking, and scalable socket handling for live support.",
    result:
      "Support teams could answer users in real time with a smoother experience and more dependable message delivery.",
    techStack: ["NestJS", "Socket.io", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/username/chat-backend",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9NM_T4hvsLnEZXdVx55CScxYGLJ5YlPLlw&s",
    category: "support",
    status: "completed",
    timeframe: "2023",
  },
  {
    id: "task-management-api",
    title: "Team Workflow API",
    summary:
      "A work management platform that helps teams assign tasks, track progress, and reduce confusion around ownership.",
    challenge:
      "The team needed a clearer workflow for planning work, assigning tasks, and keeping everyone aligned on delivery status.",
    solution:
      "I developed an API with task hierarchy, permissions, notifications, reporting, and workflow structure for day-to-day operations.",
    result:
      "The team got better visibility into work in progress and fewer dropped handoffs across projects.",
    techStack: ["Node.js", "Express", "MongoDB", "Jest", "Swagger"],
    githubUrl: "https://github.com/MafdyAmir/Trello-App",
    demoUrl: "https://task-api.example.com/docs",
    imageUrl:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    category: "business-system",
    status: "completed",
    timeframe: "2023",
  },
  {
    id: "event-booking",
    title: "Booking and Ticketing Platform",
    summary:
      "A platform for events and reservations that keeps ticket sales, seat selection, and payments dependable under pressure.",
    challenge:
      "The client needed a booking flow that could handle peak traffic, hold inventory correctly, and process payments securely.",
    solution:
      "I built a reservation engine with dynamic pricing, ticket handling, payment processing, and real-time availability updates.",
    result:
      "The platform handled sales more reliably and reduced the risk of overselling or manual reconciliation.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "Stripe"],
    githubUrl: "https://github.com/username/event-booking",
    imageUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop",
    category: "commerce",
    status: "in-progress",
    timeframe: "2024",
  },
  {
    id: "ai-code-generator",
    title: "AI Productivity Builder",
    summary:
      "An internal productivity tool that turns prompts into starter code, helping teams prototype faster and stay consistent.",
    challenge:
      "The team wanted to shorten the time between an idea and a working starting point without sacrificing structure or quality.",
    solution:
      "I created a prompt-based workflow with streaming responses, history tracking, and output formatting for practical code generation.",
    result:
      "Prototyping became faster and more repeatable, making it easier to move from concept to execution.",
    techStack: ["NestJS", "OpenAI API", "TypeScript", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/username/ai-code-generator",
    imageUrl:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=400&fit=crop",
    category: "automation",
    status: "in-progress",
    timeframe: "2025",
  },
  {
    id: "microservices-demo",
    title: "Scalable Service Architecture",
    summary:
      "A service-based architecture example that shows how to break large systems into reliable, independently managed parts.",
    challenge:
      "The goal was to demonstrate how a growing product can move beyond a monolith and stay observable as complexity increases.",
    solution:
      "I structured services around event-driven communication, gateway routing, health checks, and traceable deployment flows.",
    result:
      "The architecture is easier to scale, monitor, and extend when new products or teams need to plug in.",
    techStack: ["NestJS", "gRPC", "RabbitMQ", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/username/microservices-demo",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    category: "architecture",
    status: "completed",
    timeframe: "2024",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};
