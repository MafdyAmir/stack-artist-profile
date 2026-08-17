import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github, CheckCircle2, Lightbulb, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProjectById } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const featureMap: Record<string, string[]> = {
  "business-system": [
    "Role-based workflows and access control",
    "Clear data structure for day-to-day operations",
    "Admin-friendly management screens",
    "Reliable API flow for frontend integration",
    "Scalable foundation for future modules",
  ],
  commerce: [
    "Checkout flow designed to reduce friction",
    "Cart, orders, and inventory handling",
    "Payment-ready architecture",
    "Admin operations support",
    "Built to scale with business growth",
  ],
  automation: [
    "Process automation to reduce manual work",
    "Prompt or event-driven workflow design",
    "Structured outputs for consistency",
    "Reusable system for repeated tasks",
    "Designed to save time and improve output quality",
  ],
  support: [
    "Real-time communication flow",
    "Persistent message handling",
    "Presence and status awareness",
    "Responsive experience across devices",
    "Reliable support workflow under load",
  ],
  platform: [
    "Clear product structure and navigation",
    "User-friendly operational flow",
    "Performance-focused implementation",
    "Reusable components and scalable layout",
    "Easy expansion for future features",
  ],
  architecture: [
    "Service separation for maintainability",
    "Event-driven communication between modules",
    "Deployment-friendly structure",
    "Monitoring-ready foundation",
    "Built for scale and future teams",
  ],
};

const challengePoints: Record<string, string[]> = {
  "business-system": [
    "Teams needed one reliable place to manage core work without juggling multiple tools.",
    "Manual handoffs were slowing down daily operations and creating room for mistakes.",
  ],
  commerce: [
    "The buying flow needed to stay smooth while handling products, payments, and stock updates.",
    "The system had to support growth without creating checkout friction.",
  ],
  automation: [
    "The process had to be faster without losing structure or consistency.",
    "The team needed repeatable output instead of starting from scratch every time.",
  ],
  support: [
    "The chat experience needed to stay responsive while preserving message history.",
    "Support teams needed a dependable live workflow across devices and sessions.",
  ],
  platform: [
    "The product needed a clear structure that could grow without becoming difficult to manage.",
    "The experience had to stay intuitive for both users and administrators.",
  ],
  architecture: [
    "The system needed to scale without turning into a difficult-to-maintain monolith.",
    "Each service needed to remain observable, testable, and easy to extend.",
  ],
};

const arabicFeatureMap: Record<string, string[]> = {
  "business-system": [
    "سير عمل وصلاحيات وصول مبنية على الأدوار",
    "هيكل بيانات واضح للعمليات اليومية",
    "شاشات إدارة سهلة للمسؤولين",
    "تدفق موثوق للواجهة البرمجية مع الواجهة الأمامية",
    "أساس قابل للتوسع لإضافة وحدات مستقبلية",
  ],
  commerce: [
    "مسار شراء مصمم لتقليل التعقيد",
    "إدارة سلة التسوق والطلبات والمخزون",
    "بنية جاهزة لتكامل المدفوعات",
    "أدوات لدعم عمليات الإدارة",
    "قابلية للتوسع مع نمو النشاط التجاري",
  ],
  automation: [
    "أتمتة العمليات لتقليل العمل اليدوي",
    "تصميم سير عمل قائم على الطلبات أو الأحداث",
    "مخرجات منظمة ومتسقة",
    "نظام قابل لإعادة الاستخدام للمهام المتكررة",
    "توفير الوقت وتحسين جودة المخرجات",
  ],
  support: [
    "تواصل في الوقت الفعلي",
    "حفظ الرسائل بصورة دائمة",
    "متابعة الحضور والحالة",
    "تجربة متجاوبة عبر الأجهزة",
    "سير دعم موثوق تحت الضغط",
  ],
  platform: [
    "هيكل وتنقل واضحان للمنتج",
    "سير عمليات سهل الاستخدام",
    "تنفيذ يركز على الأداء",
    "مكونات قابلة لإعادة الاستخدام وتخطيط قابل للتوسع",
    "سهولة إضافة مزايا مستقبلية",
  ],
  architecture: [
    "فصل الخدمات لتسهيل الصيانة",
    "تواصل قائم على الأحداث بين الوحدات",
    "هيكل ملائم للنشر",
    "أساس جاهز للمراقبة",
    "بنية قابلة للتوسع ودعم فرق مستقبلية",
  ],
};

const arabicChallengePoints: Record<string, string[]> = {
  "business-system": [
    "احتاجت الفرق إلى مكان موثوق واحد لإدارة العمل الأساسي بدلًا من التنقل بين أدوات متعددة.",
    "كانت عمليات التسليم اليدوية تبطئ العمل اليومي وتزيد فرص حدوث الأخطاء.",
  ],
  commerce: [
    "كان يجب أن تظل تجربة الشراء سلسة أثناء إدارة المنتجات والمدفوعات وتحديث المخزون.",
    "احتاج النظام إلى دعم النمو دون إضافة تعقيد إلى الدفع.",
  ],
  automation: [
    "كان المطلوب تسريع العملية دون فقدان التنظيم أو الاتساق.",
    "احتاج الفريق إلى مخرجات قابلة للتكرار بدل البدء من الصفر في كل مرة.",
  ],
  support: [
    "كان على تجربة المحادثة أن تظل سريعة مع الاحتفاظ بسجل الرسائل.",
    "احتاجت فرق الدعم إلى سير عمل مباشر وموثوق عبر الأجهزة والجلسات.",
  ],
  platform: [
    "احتاج المنتج إلى هيكل واضح ينمو دون أن يصبح صعب الإدارة.",
    "كان يجب أن تظل التجربة سهلة للمستخدمين والمسؤولين معًا.",
  ],
  architecture: [
    "احتاج النظام إلى التوسع دون التحول إلى كتلة برمجية يصعب صيانتها.",
    "كان على كل خدمة أن تظل قابلة للمراقبة والاختبار والتطوير.",
  ],
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, isArabic } = useLanguage();
  const project = id ? getProjectById(id, language) : undefined;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold">{isArabic ? "المشروع غير موجود" : "Project not found"}</h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            {isArabic
              ? "دراسة الحالة التي تبحث عنها غير موجودة أو نُقلت إلى مكان آخر."
              : "The case study you’re looking for does not exist or has been moved."}
          </p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className={`h-4 w-4 ${isArabic ? "ml-2 rotate-180" : "mr-2"}`} />
              {isArabic ? "العودة إلى المشروعات" : "Back to Projects"}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const localizedFeatureMap = isArabic ? arabicFeatureMap : featureMap;
  const localizedChallengePoints = isArabic ? arabicChallengePoints : challengePoints;
  const features = localizedFeatureMap[project.category] ?? localizedFeatureMap["platform"];
  const challenges = localizedChallengePoints[project.category] ?? localizedChallengePoints["platform"];
  const selectedImage = selectedImageIndex !== null ? project.gallery?.[selectedImageIndex] : undefined;

  const openGalleryImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeGalleryImage = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = () => {
    if (!project.gallery?.length || selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + project.gallery.length) % project.gallery.length);
  };

  const goToNextImage = () => {
    if (!project.gallery?.length || selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % project.gallery.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" dir={isArabic ? "rtl" : "ltr"}>
      <section className="relative overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.12),_transparent_35%),linear-gradient(180deg,_hsl(var(--background))_0%,_hsl(var(--secondary)/0.12)_100%)]" />
        <div className="section-container">
          <Link to="/projects" className="mb-8 inline-flex items-center text-primary transition-colors hover:text-primary/80">
            <ArrowLeft className={`h-4 w-4 ${isArabic ? "ml-2 rotate-180" : "mr-2"}`} />
            {isArabic ? "العودة إلى المشروعات" : "Back to Projects"}
          </Link>

          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className={`mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1 ${isArabic ? "" : "uppercase tracking-[0.2em]"}`}>
              <span dir="ltr">{project.timeframe}</span>
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {project.imageUrl && (
        <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-2xl shadow-primary/10">
            <img src={project.imageUrl} alt={project.title} className="h-80 w-full object-cover md:h-[30rem]" />
          </div>
        </section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <section className="section-container pt-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-center">
              <p className={`text-xs font-semibold text-muted-foreground ${isArabic ? "" : "uppercase tracking-[0.2em]"}`}>
                {isArabic ? "لقطات الشاشة" : "Screenshots"}
              </p>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                {isArabic ? "نظرة أقرب إلى المنتج" : "A closer look at the product"}
              </h2>
            </div>
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {project.gallery.map((src, i) => (
                  <CarouselItem key={`${project.id}-${src}-${i}`}>
                    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl shadow-primary/10">
                      <button
                        type="button"
                        className="block w-full cursor-zoom-in"
                        onClick={() => openGalleryImage(i)}
                        aria-label={
                          isArabic
                            ? `فتح لقطة الشاشة ${i + 1} لمشروع ${project.title}`
                            : `Open ${project.title} screenshot ${i + 1}`
                        }
                      >
                        <img
                          src={src}
                          alt={
                            isArabic
                              ? `لقطة الشاشة ${i + 1} لمشروع ${project.title}`
                              : `${project.title} screenshot ${i + 1}`
                          }
                          className="h-72 w-full object-cover md:h-[28rem]"
                          loading="lazy"
                        />
                      </button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="start-2 md:-start-6" />
              <CarouselNext className="end-2 md:-end-6" />
            </Carousel>
          </div>
        </section>
      )}

      <Dialog
        open={selectedImageIndex !== null}
        onOpenChange={(open) => {
          if (!open) closeGalleryImage();
        }}
      >
        <DialogContent className="max-w-6xl border-border/60 bg-background p-0 sm:rounded-2xl">
          {selectedImage && selectedImageIndex !== null && (
            <div className="relative flex items-center justify-center bg-black/5">
              <button
                type="button"
                onClick={goToPreviousImage}
                aria-label={isArabic ? "الصورة السابقة" : "Previous image"}
                className="absolute start-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/60 bg-background/90 p-3 text-foreground shadow-lg transition hover:scale-105 hover:bg-background"
              >
                {isArabic ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
              </button>

              <img
                src={selectedImage}
                alt={
                  isArabic
                    ? `لقطة الشاشة ${selectedImageIndex + 1} لمشروع ${project.title}`
                    : `${project.title} screenshot ${selectedImageIndex + 1}`
                }
                className="max-h-[85vh] w-full object-contain"
              />

              <button
                type="button"
                onClick={goToNextImage}
                aria-label={isArabic ? "الصورة التالية" : "Next image"}
                className="absolute end-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/60 bg-background/90 p-3 text-foreground shadow-lg transition hover:scale-105 hover:bg-background"
              >
                {isArabic ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>



      <section className="section-container pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6">
              <p className={`mb-3 text-xs font-semibold text-muted-foreground ${isArabic ? "" : "uppercase tracking-[0.2em]"}`}>
                {isArabic ? "نظرة عامة على المشروع" : "Project Overview"}
              </p>
              <p className="leading-7 text-foreground/75">
                {project.summary}{" "}
                {isArabic
                  ? "تركز دراسة الحالة هذه على التفكير العملي وراء التنفيذ: كيف يدعم الهيكل النشاط التجاري، وما الذي تحسن، ولماذا يظل الحل سهل الصيانة على المدى الطويل."
                  : "This case study focuses on the practical thinking behind the build: how the structure supports the business, what was improved, and why the solution is maintainable long term."}
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6">
              <p className={`mb-3 text-xs font-semibold text-muted-foreground ${isArabic ? "" : "uppercase tracking-[0.2em]"}`}>
                {isArabic ? "هدف المشروع" : "Project Objective"}
              </p>
              <div className="space-y-3 text-sm leading-7 text-foreground/75">
                <p>{isArabic ? "بناء منتج موثوق يحل مشكلة عمل حقيقية دون إضافة تعقيد غير ضروري." : "Build a reliable product that solves a real business problem without adding unnecessary complexity."}</p>
                <p>{isArabic ? "إنشاء أساس منظم قابل للتوسع مع المزايا والمستخدمين والاحتياجات التشغيلية المستقبلية." : "Create a clean foundation that can scale with future features, users, and operational needs."}</p>
                <p>{isArabic ? "إبقاء التجربة سهلة الفهم للعملاء والفريق الذي يديرها معًا." : "Keep the experience easy to understand for both customers and the team managing it."}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6">
              <p className={`mb-3 text-xs font-semibold text-muted-foreground ${isArabic ? "" : "uppercase tracking-[0.2em]"}`}>
                {isArabic ? "التقنيات المستخدمة" : "Technology Stack"}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full px-3 py-1" dir="ltr">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-container pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">{isArabic ? "التحدي" : "The Challenge"}</h2>
              </div>
              <p className="mb-4 leading-7 text-foreground/75">{project.challenge}</p>
              <div className="space-y-4">
                {challenges.map((item) => (
                  <div key={item} className="rounded-2xl border border-border/50 bg-secondary/20 p-4 text-sm leading-7 text-foreground/75">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">{isArabic ? "الحل" : "The Solution"}</h2>
              </div>
              <p className="mb-4 leading-7 text-foreground/75">{project.solution}</p>
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                <p className="text-sm font-medium text-foreground/80">
                  {isArabic
                    ? "صُمم التنفيذ ليبقى المنتج سهل الاستخدام، وموثوقًا في بيئة الإنتاج، وقابلًا للتطوير لاحقًا."
                    : "The implementation was designed to keep the product simple to use, dependable in production, and easy to extend later."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-container pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">{isArabic ? "أهم المزايا المنفذة" : "Key Features Implemented"}</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/60 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-foreground/75">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/90">
            <CardContent className="p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">{isArabic ? "أهم الدروس المستفادة" : "Key Learnings"}</h2>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-border/50 bg-secondary/20 p-4 text-sm leading-7 text-foreground/75">
                  {isArabic
                    ? "يسهّل بناء هيكل قوي منذ البداية التوسع اللاحق ويجعله أكثر أمانًا."
                    : "Strong structure upfront makes later expansion much easier and safer."}
                </div>
                <div className="rounded-2xl border border-border/50 bg-secondary/20 p-4 text-sm leading-7 text-foreground/75">
                  {isArabic
                    ? "وضوح التواصل والتركيز في نطاق العمل مهمان بقدر أهمية التنفيذ التقني."
                    : "Clear communication and focused scope matter as much as the technical implementation."}
                </div>
                <div className="rounded-2xl border border-border/50 bg-secondary/20 p-4 text-sm leading-7 text-foreground/75">
                  {isArabic
                    ? "أفضل الأنظمة هي المفيدة، والسهلة في الصيانة، والبسيطة في الاستخدام الفعلي."
                    : "The best systems are the ones that are useful, maintainable, and easy for real people to use."}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-container pt-0 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-border/60 bg-card/90 lg:col-span-2">
            <CardContent className="p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold">{isArabic ? "النتيجة" : "The Result"}</h2>
              <p className="leading-7 text-foreground/75">{project.result}</p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-primary/5">
            <CardContent className="space-y-4 p-6 md:p-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">{isArabic ? "هل تحتاج إلى مشروع مشابه؟" : "Need a similar build?"}</h2>
              </div>
              <p className="text-sm leading-6 text-foreground/70">
                {isArabic
                  ? "يمكنني مساعدتك في تحديد نطاق العمل، وتصميم البنية، وبناء المنتج حول النتيجة التي تريدها."
                  : "I can help scope the work, shape the architecture, and build the product around the outcome you want."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="/#contact">{isArabic ? "ابدأ مشروعًا" : "Start a Project"}</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className={`${isArabic ? "ml-2" : "mr-2"} h-4 w-4`} />
                    {isArabic ? "الكود" : "Code"}
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className={`${isArabic ? "ml-2" : "mr-2"} h-4 w-4`} />
                      {isArabic ? "عرض تجريبي" : "Demo"}
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
