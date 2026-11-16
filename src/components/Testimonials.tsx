import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonials = [
  {
    id: "tungsten",
    name: "Hany Fathy",
    role: "Founder & CEO at",
    roleAr: "المؤسس والرئيس التنفيذي في",
    title: "A system the team actually uses",
    titleAr: "نظام الفريق بيستخدمه فعلًا",
    content:
      "Mafdy turned our content workflow into a system the team can publish with. The work landed on time, and we are not waiting on a developer for every update.",
    contentAr:
      "حوّل مفدي طريقة إدارة المحتوى عندنا لنظام الفريق يقدر ينشر من خلاله. التسليم كان في وقته، وبقينا نحدّث الموقع من غير ما نستنى مطور كل مرة.",
    avatar: "/projects/traditional-cms/logo.png",
    linkLabel: "Tungsten Media",
    href: "https://tungsten-media.com/",
    external: true,
  },
  {
    id: "commerce",
    name: "Commerce Backend",
    role: "Store API on",
    roleAr: "واجهة المتجر على",
    title: "Checkout that stays reliable",
    titleAr: "دفع يفضل ثابت",
    content:
      "Cart, payments, products, and orders live in one API, so a store can take orders without a fragile checkout or a pile of manual work.",
    contentAr:
      "السلة والدفع والمنتجات والطلبات في واجهة واحدة، فالمتجر يستقبل الطلبات من غير مسار شراء هش أو شغل يدوي زيادة.",
    avatar: "/projects/ecommerce-api/ecommerce-logo-.jpg",
    linkLabel: "GitHub",
    href: "https://github.com/MafdyAmir/E-commerce---express",
    external: true,
  },
  {
    id: "workflow",
    name: "Team Workflow",
    role: "Task system on",
    roleAr: "نظام المهام على",
    title: "Every task has an owner",
    titleAr: "كل مهمة لها صاحب",
    content:
      "Tasks, status, and deadlines stay visible, so a team can see who owns the work and what is due before it slips.",
    contentAr:
      "المهام والحالة والمواعيد بتبقى واضحة، فالفريق يشوف مين مسؤول عن الشغل وإيه اللي لازم يتسلم قبل ما يتأخر.",
    avatar: "",
    linkLabel: "GitHub",
    href: "https://github.com/MafdyAmir/Trello-App",
    external: true,
  },
];

const Testimonials = () => {
  const reducedMotion = useReducedMotion();
  const { isArabic } = useLanguage();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className={`text-center mb-14 ${reducedMotion ? "" : "animate-on-scroll"}`}>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-primary mb-4">
            {isArabic ? "آراء العملاء" : "Testimonials"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {isArabic ? "عملاء ومشاريع حقيقية" : "Happy Clients & Users"}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {isArabic
              ? "اقرأ رأي العميل، وافتح المشروع من اللينك تحت كل كارت."
              : "Read what clients say, then open the project from the link under each card."}
          </p>
        </div>

        <div className={`grid gap-6 md:grid-cols-3 ${reducedMotion ? "" : "animate-on-scroll"}`}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className={`flex h-full flex-col rounded-2xl border border-border/60 bg-card px-6 py-8 text-center shadow-lg ${
                reducedMotion ? "" : "transition-shadow duration-300 hover:shadow-xl"
              }`}
            >
              <div className="mb-5 flex justify-center gap-1" aria-label={isArabic ? "خمس نجوم" : "5 stars"}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <h3 className="mb-4 text-xl font-bold text-foreground">
                {isArabic ? testimonial.titleAr : testimonial.title}
              </h3>

              <p className="mb-8 flex-1 text-sm leading-relaxed text-foreground/75">
                {isArabic ? testimonial.contentAr : testimonial.content}
              </p>

              <div className="flex items-center justify-center gap-3 text-start">
                <Avatar className="h-11 w-11">
                  {testimonial.avatar ? (
                    <AvatarImage src={testimonial.avatar} alt="" className="object-cover" />
                  ) : null}
                  <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                    {testimonial.name.split(" ").map((part) => part[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p dir="ltr" className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {isArabic ? testimonial.roleAr : testimonial.role}{" "}
                    <a
                      href={testimonial.href}
                      dir="ltr"
                      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                      {...(testimonial.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {testimonial.linkLabel}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
