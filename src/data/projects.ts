export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  category: 'backend' | 'fullstack' | 'api' | 'microservice';
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-api",
    title: "E-commerce API",
    description: "A RESTful API for an e-commerce platform with authentication, product management, order processing, and payment integration.",
    fullDescription: "A comprehensive e-commerce backend API built with Node.js and Express.js. This project demonstrates advanced backend development skills including user authentication, product catalog management, shopping cart functionality, order processing, and secure payment integration with Stripe. The API follows RESTful principles and includes comprehensive error handling, input validation, and security measures.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Stripe", "Bcrypt", "Joi"],
    githubUrl: "https://github.com/username/ecommerce-api",
    demoUrl: "https://api-docs.example.com",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    features: [
      "User authentication and authorization with JWT",
      "Product catalog with categories and search functionality",
      "Shopping cart management",
      "Order processing and tracking",
      "Payment integration with Stripe",
      "Admin dashboard for inventory management",
      "Email notifications for order updates",
      "Rate limiting and security middleware"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Handling concurrent inventory updates",
      "Designing scalable database schema",
      "Managing complex order states"
    ],
    learnings: [
      "Advanced Express.js middleware patterns",
      "MongoDB aggregation pipelines",
      "Payment gateway integration best practices",
      "API security and rate limiting strategies"
    ],
    category: "backend",
    status: "completed",
    startDate: "2023-06-01",
    endDate: "2023-08-15"
  },
  {
    id: "realtime-chat",
    title: "Real-time Chat System",
    description: "Scalable backend for a real-time chat application supporting private messages, group chats, and message persistence.",
    fullDescription: "A high-performance real-time chat system built with NestJS and Socket.io. The system supports multiple chat rooms, private messaging, file sharing, and real-time notifications. It uses Redis for session management and message caching, PostgreSQL for data persistence, and implements horizontal scaling capabilities.",
    techStack: ["NestJS", "Socket.io", "PostgreSQL", "Redis", "Docker", "TypeScript"],
    githubUrl: "https://github.com/username/chat-backend",
    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
    features: [
      "Real-time messaging with Socket.io",
      "Private and group chat rooms",
      "File and image sharing",
      "Message history and search",
      "Online presence indicators",
      "Push notifications",
      "Message encryption",
      "Typing indicators"
    ],
    challenges: [
      "Scaling WebSocket connections",
      "Implementing message delivery guarantees",
      "Managing connection state across multiple servers",
      "Optimizing database queries for chat history"
    ],
    learnings: [
      "WebSocket scaling patterns",
      "Redis pub/sub for distributed systems",
      "NestJS advanced features and decorators",
      "Real-time application architecture"
    ],
    category: "backend",
    status: "completed",
    startDate: "2023-09-01",
    endDate: "2023-11-30"
  },
  {
    id: "task-management-api",
    title: "Task Management API",
    description: "API for a task management system with user authentication, task CRUD operations, assignments, and notifications.",
    fullDescription: "A comprehensive task management API that enables teams to organize, track, and collaborate on projects. Built with Node.js and Express, it features role-based access control, project hierarchies, task dependencies, time tracking, and automated notifications. The system includes advanced filtering, sorting, and reporting capabilities.",
    techStack: ["Node.js", "Express", "MongoDB", "Jest", "Swagger", "Nodemailer"],
    githubUrl: "https://github.com/username/task-api",
    demoUrl: "https://task-api.example.com/docs",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    features: [
      "Project and task hierarchy management",
      "Role-based access control",
      "Task assignments and dependencies",
      "Time tracking and reporting",
      "Automated email notifications",
      "Advanced filtering and search",
      "File attachments",
      "Activity logging and audit trails"
    ],
    challenges: [
      "Implementing complex task dependencies",
      "Designing flexible permission system",
      "Optimizing queries for large datasets",
      "Managing notification preferences"
    ],
    learnings: [
      "Advanced MongoDB query optimization",
      "Role-based access control patterns",
      "Email template management",
      "API documentation with Swagger"
    ],
    category: "api",
    status: "completed",
    startDate: "2023-03-01",
    endDate: "2023-05-15"
  },
  {
    id: "headless-cms",
    title: "Content Management System",
    description: "Headless CMS backend with content modeling, user roles, API access, and media management.",
    fullDescription: "A flexible headless CMS built with NestJS that allows content creators to manage digital content through a powerful API. Features include dynamic content modeling, multi-language support, version control, and a robust media management system with image optimization and CDN integration.",
    techStack: ["NestJS", "GraphQL", "TypeORM", "PostgreSQL", "AWS S3", "Redis"],
    githubUrl: "https://github.com/username/headless-cms",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    features: [
      "Dynamic content type creation",
      "GraphQL API with real-time subscriptions",
      "Multi-language content support",
      "Version control and content history",
      "Media library with image optimization",
      "Role-based content permissions",
      "Content scheduling and publishing",
      "SEO optimization tools"
    ],
    challenges: [
      "Building flexible content modeling system",
      "Implementing efficient GraphQL resolvers",
      "Managing large media files",
      "Creating intuitive content workflows"
    ],
    learnings: [
      "GraphQL schema design and optimization",
      "TypeORM advanced relationships",
      "AWS S3 integration patterns",
      "Content versioning strategies"
    ],
    category: "fullstack",
    status: "completed",
    startDate: "2023-12-01",
    endDate: "2024-02-28"
  },
  {
    id: "event-booking",
    title: "Event Booking Platform",
    description: "Backend for an event booking platform with event creation, ticket management, and payment processing.",
    fullDescription: "A comprehensive event booking platform backend that handles event creation, ticket sales, seat management, and payment processing. The system supports multiple event types, dynamic pricing, promotional codes, and real-time availability updates. Built with scalability in mind to handle high-traffic events.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "Stripe"],
    githubUrl: "https://github.com/username/event-booking",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop",
    features: [
      "Event creation and management",
      "Dynamic ticket pricing",
      "Seat selection and reservation",
      "Payment processing with multiple gateways",
      "Promotional codes and discounts",
      "Real-time availability updates",
      "QR code ticket generation",
      "Event analytics and reporting"
    ],
    challenges: [
      "Handling concurrent ticket purchases",
      "Implementing seat reservation timeouts",
      "Managing complex pricing rules",
      "Ensuring payment security"
    ],
    learnings: [
      "Concurrency control in high-traffic scenarios",
      "Redis for session and cache management",
      "Payment gateway integration patterns",
      "Event-driven architecture principles"
    ],
    category: "backend",
    status: "in-progress",
    startDate: "2024-03-01"
  },
  {
    id: "microservices-demo",
    title: "Microservice Architecture",
    description: "Example implementation of a microservice architecture with service discovery, API gateway, and inter-service communication.",
    fullDescription: "A demonstration of microservices architecture patterns using modern technologies. This project showcases service decomposition, inter-service communication, distributed data management, and deployment strategies. It includes examples of event sourcing, CQRS, and distributed tracing.",
    techStack: ["NestJS", "gRPC", "RabbitMQ", "Docker", "Kubernetes", "Prometheus"],
    githubUrl: "https://github.com/username/microservices-demo",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    features: [
      "Service discovery and registration",
      "API Gateway with rate limiting",
      "Event-driven communication",
      "Distributed tracing and monitoring",
      "Circuit breaker pattern",
      "Database per service",
      "Automated deployment pipelines",
      "Health checks and metrics"
    ],
    challenges: [
      "Managing distributed transactions",
      "Implementing service discovery",
      "Handling network failures gracefully",
      "Monitoring distributed systems"
    ],
    learnings: [
      "Microservices design patterns",
      "gRPC for inter-service communication",
      "Kubernetes orchestration",
      "Distributed system monitoring"
    ],
    category: "microservice",
    status: "completed",
    startDate: "2024-01-01",
    endDate: "2024-03-15"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
};