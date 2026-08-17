import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const reducedMotion = useReducedMotion();
  const { toast } = useToast();
  const { language, isArabic } = useLanguage();

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

      if (!serviceId || !templateId || !contactEmail) {
        throw new Error(
          isArabic
            ? "إعدادات خدمة البريد غير مكتملة. يرجى مراجعة ملف .env.local."
            : "EmailJS configuration is incomplete. Please check your .env.local file.",
        );
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        time: new Date().toLocaleString(language === "ar" ? "ar-EG" : "en-US"),
        message: formData.message,
        title: formData.subject,
        email: formData.email,
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast({
        title: isArabic ? "تم إرسال الرسالة!" : "Message sent!",
        description: isArabic ? "سأتواصل معك قريبًا." : "I will get back to you soon.",
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("EmailJS error:", error);
      toast({
        title: isArabic ? "حدث خطأ ما" : "Something went wrong",
        description:
          error instanceof Error
            ? error.message
            : isArabic
              ? "تعذر إرسال الرسالة. حاول مرة أخرى أو راسلني عبر البريد الإلكتروني مباشرة."
              : "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      title: "Email",
      titleAr: "البريد الإلكتروني",
      value: "mafdyamir15@gmail.com",
      href: "mailto:mafdyamir15@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      titleAr: "واتساب",
      value: "+20 127 115 1446",
      href: "https://wa.me/201271151446",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      titleAr: "لينكدإن",
      value: "Mafdy Amir",
      href: "https://www.linkedin.com/in/mafdy-amir/",
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-background to-secondary/10 py-20 md:py-28">
      <div className="section-container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className={`mb-3 text-sm font-semibold text-primary ${isArabic ? "" : "uppercase tracking-[0.2em]"}`}>
            {isArabic ? "تواصل معي" : "Get In Touch"}
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            {isArabic ? "لديك مشروع في ذهنك؟" : "Have a Project in Mind?"}
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            {isArabic
              ? "دعنا نناقش فكرتك ونحوّلها إلى منتج حقيقي."
              : "Let's discuss your idea and turn it into a real product."}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <link.icon className="h-5 w-5" />
              </div>
              <p className={`text-sm font-semibold text-muted-foreground ${isArabic ? "" : "uppercase tracking-[0.2em]"}`}>
                {isArabic ? link.titleAr : link.title}
              </p>
              <p dir="ltr" className="mt-2 text-start font-medium text-foreground">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className={`border-border/60 bg-card/90 shadow-lg ${reducedMotion ? "" : "animate-on-scroll"}`}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold">
                {isArabic ? "أرسل رسالة" : "Send a Message"}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {isArabic
                  ? "أخبرني بما تريد بناءه، والمشكلة التي تحاول حلها، وكيف تبدو النتيجة الناجحة بالنسبة لك."
                  : "Tell me what you want to build, what problem you're solving, and what a successful outcome looks like."}
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={isArabic ? "الاسم الكامل" : "Full name"}
                    required
                    className="h-12"
                    disabled={isSubmitting}
                  />
                  <Input
                    name="email"
                    type="email"
                    dir="auto"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={isArabic ? "البريد الإلكتروني" : "Email address"}
                    required
                    className="h-12"
                    disabled={isSubmitting}
                  />
                </div>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={
                    isArabic
                      ? "مناقشة مشروع أو فرصة عمل أو تعاون"
                      : "Project discussion, job opportunity, or collaboration"
                  }
                  required
                  className="h-12"
                  disabled={isSubmitting}
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    isArabic
                      ? "شارك بعض التفاصيل عن مشروعك أو الوظيفة التي تفكر فيها."
                      : "Share a little about your project or the role you have in mind."
                  }
                  required
                  className="min-h-[150px]"
                  disabled={isSubmitting}
                />

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                    <Check className="h-5 w-5" />
                    <p className="text-sm font-medium">
                      {isArabic ? "تم إرسال الرسالة بنجاح!" : "Message sent successfully!"}
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm font-medium">
                      {isArabic
                        ? "تعذر إرسال الرسالة. حاول مرة أخرى أو راسلني مباشرة عبر البريد الإلكتروني."
                        : "Failed to send message. Please try again or email me directly."}
                    </p>
                  </div>
                )}

                <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="me-2 h-4 w-4 animate-spin" />
                      {isArabic ? "جارٍ الإرسال..." : "Sending..."}
                    </>
                  ) : (
                    isArabic ? "إرسال الرسالة" : "Send Message"
                  )}
                </Button>

                <p className="text-xs text-foreground/50">
                  {isArabic
                    ? "إذا تعذر الإرسال، فتأكد من أن حقول قالب EmailJS هي: name وtime وmessage وtitle وemail."
                    : "If delivery fails, make sure your EmailJS template fields are: name, time, message, title, and email."}
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-border/60 bg-card/90">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold">
                  {isArabic ? "لماذا تتواصل معي" : "Why contact me"}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/70">
                  <li>
                    - {isArabic ? "أرد بسرعة وأحافظ على وضوح التواصل." : "I reply quickly and keep communication straightforward."}
                  </li>
                  <li>
                    - {isArabic ? "أركز على النتائج، لا على قوائم الميزات فقط." : "I focus on outcomes, not just feature checklists."}
                  </li>
                  <li>
                    - {isArabic ? "يمكنني مساعدتك في ضبط نطاق العمل قبل بدء المشروع." : "I can help refine scope before the project starts."}
                  </li>
                  <li>
                    - {isArabic ? "أبني حلولًا تحافظ على أدائها وسهولة صيانتها على المدى الطويل." : "I build for long-term maintainability and performance."}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/90">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    {isArabic ? "الأفضل للاستفسارات السريعة" : "Best for quick inquiries"}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-foreground/70">
                  {isArabic
                    ? "إذا كنت تعرف ما تحتاجه بالفعل، فالبريد الإلكتروني أو واتساب هما أسرع طريقة للبدء."
                    : "If you already know what you need, email or WhatsApp is the fastest way to start."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <a href="mailto:mafdyamir15@gmail.com">
                      <Mail className="me-2 h-4 w-4" />
                      {isArabic ? "راسلني" : "Email Me"}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://wa.me/201271151446" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="me-2 h-4 w-4" />
                      {isArabic ? "واتساب" : "WhatsApp"}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://github.com/mafdyamir" target="_blank" rel="noopener noreferrer">
                      <Github className="me-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
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
