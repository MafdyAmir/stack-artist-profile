export type ProjectLanguage = "en" | "ar";

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
  gallery?: string[];
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
    imageUrl: "/projects/traditional-cms/logo.png",
    gallery: [
      "/projects/traditional-cms/traditional-cms (1).png",
      "/projects/traditional-cms/traditional-cms (2).png",
      "/projects/traditional-cms/traditional-cms (3).png",
      "/projects/traditional-cms/traditional-cms (4).png",
      "/projects/traditional-cms/traditional-cms (5).png",
      "/projects/traditional-cms/traditional-cms (6).png",
      "/projects/traditional-cms/traditional-cms (7).png",
      "/projects/traditional-cms/traditional-cms (8).png",
      "/projects/traditional-cms/traditional-cms (9).png",
    ],
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
    imageUrl: "/projects/ecommerce-api/ecommerce-logo-.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop",
    ],
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
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=900&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1580281657527-47f249e8f3ea?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&h=900&fit=crop",
    ],
    category: "business-system",
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
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1600&h=900&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?w=1600&h=900&fit=crop",
    ],
    category: "business-system",
    status: "completed",
    timeframe: "2023",
  },



];

type ProjectCopy = Pick<Project, "title" | "summary" | "challenge" | "solution" | "result">;

const arabicProjectCopy: Record<string, ProjectCopy> = {
  "traditional-cms": {
    title: "نظام إدارة محتوى",
    summary:
      "نظام إدارة محتوى يساعد الفرق على النشر بسرعة أكبر، وإدارة المحتوى بأمان، وتحديث المواقع دون الاعتماد المستمر على المطورين.",
    challenge:
      "احتاج الفريق إلى مكان واحد لإدارة الصفحات والوسائط والمحتوى القابل لإعادة الاستخدام، دون التأثير في الموقع المنشور أو إضافة أعمال يدوية غير ضرورية.",
    solution:
      "صممت منصة محتوى منظمة بصلاحيات مبنية على الأدوار، ونماذج محتوى مرنة، وإدارة للوسائط، وواجهة برمجية واضحة لربط الواجهة الأمامية.",
    result:
      "أصبح النشر أسرع وأكثر موثوقية، مع تقليل اختناقات المحتوى وتحسين التعاون بين فريقي التسويق والتطوير.",
  },
  "ecommerce-api": {
    title: "محرك خلفي للتجارة الإلكترونية",
    summary:
      "نظام خلفي لمتجر إلكتروني يوفر دفعًا آمنًا، وإدارة للمخزون والطلبات، وبنية جاهزة لدعم النمو.",
    challenge:
      "احتاج المتجر إلى مسار شراء موثوق يدير تصفح المنتجات ومعالجة المدفوعات وتتبع الطلبات دون إبطاء المبيعات.",
    solution:
      "أنشأت واجهة برمجية للتجارة الإلكترونية تشمل المصادقة، ومنطق سلة التسوق، وتكامل الدفع، وإدارة المنتجات، وأدوات تشغيل للمسؤولين.",
    result:
      "حصل النشاط التجاري على تجربة شراء مستقرة تدعم عمليات المبيعات، وتقلل المعالجة اليدوية، وتستعد للتوسع مستقبلًا.",
  },
  "healthcare-api": {
    title: "واجهة برمجية لحجز الخدمات",
    summary:
      "نظام خلفي للأنشطة الخدمية التي تحتاج إلى إدارة المواعيد، وتدفق آمن للبيانات، وتفاعل موثوق مع العملاء.",
    challenge:
      "كان على النظام دعم إدارة الطلبات وصلاحيات المستخدمين وسير العمل، مع إبقاء البيانات الحساسة منظمة وسهلة الاسترجاع.",
    solution:
      "طورت واجهة برمجية موجهة للخدمات تشمل المصادقة والتحقق من البيانات وتصميم هياكلها والتكامل الآمن مع بوابات العمليات اليومية.",
    result:
      "تمكنت الفرق من إدارة الطلبات بكفاءة أكبر، بينما حصل العملاء على تجربة خدمة أوضح وأكثر موثوقية.",
  },
  "task-management-api": {
    title: "واجهة برمجية لسير عمل الفرق",
    summary:
      "منصة لإدارة العمل تساعد الفرق على توزيع المهام، ومتابعة التقدم، وتوضيح مسؤولية كل عضو.",
    challenge:
      "احتاج الفريق إلى سير عمل أوضح لتخطيط المهام وتوزيعها وإبقاء الجميع على اطلاع بحالة التسليم.",
    solution:
      "طورت واجهة برمجية تشمل تسلسل المهام والصلاحيات والإشعارات والتقارير وهيكلًا منظمًا للعمليات اليومية.",
    result:
      "حصل الفريق على رؤية أوضح للعمل الجاري، وانخفضت حالات تعطل التسليم بين مراحل المشروعات.",
  },
};

const localizeProject = (project: Project, language: ProjectLanguage): Project =>
  language === "ar" && arabicProjectCopy[project.id]
    ? { ...project, ...arabicProjectCopy[project.id] }
    : project;

export const getProjects = (language: ProjectLanguage = "en"): Project[] =>
  projects.map((project) => localizeProject(project, language));

export const getProjectById = (
  id: string,
  language: ProjectLanguage = "en",
): Project | undefined => {
  const project = projects.find((item) => item.id === id);
  return project ? localizeProject(project, language) : undefined;
};

export const getProjectsByCategory = (
  category: string,
  language: ProjectLanguage = "en",
): Project[] => {
  const localizedProjects = getProjects(language);
  if (category === "all") return localizedProjects;
  return localizedProjects.filter((project) => project.category === category);
};
