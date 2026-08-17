
import { Github, Linkedin, Mail, Shield } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isArabic } = useLanguage();
  const currentYear = new Intl.DateTimeFormat(isArabic ? "ar-EG" : "en-US", {
    year: "numeric",
  }).format(new Date());

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickLinks = [
    { name: isArabic ? "الرئيسية" : "Home", section: "home" },
    { name: isArabic ? "الخدمات" : "Services", section: "services" },
    { name: isArabic ? "نبذة عني" : "About", section: "about" },
    { name: isArabic ? "المشاريع" : "Projects", href: "/projects" },
    { name: isArabic ? "لماذا تتعاون معي" : "Why Work With Me", section: "why" },
    { name: isArabic ? "لأصحاب العمل" : "Recruiters", section: "recruiters" },
    { name: isArabic ? "تواصل معي" : "Contact", section: "contact" },
  ];

  const services = [
    { id: "business-systems", name: isArabic ? "أنظمة أعمال مخصصة" : "Custom business systems" },
    { id: "e-commerce", name: isArabic ? "منصات تجارة إلكترونية" : "E-commerce platforms" },
    { id: "dashboards", name: isArabic ? "لوحات تحكم إدارية" : "Admin dashboards" },
    { id: "api-integrations", name: isArabic ? "تكامل واجهات برمجة التطبيقات" : "API integrations" },
    { id: "performance", name: isArabic ? "تحسين الأداء" : "Performance optimization" },
  ];

  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-xl text-foreground">
                {isArabic ? "مفدي أمير" : "Mafdy Amir"}
              </h3>
            </div>
            <p className="text-foreground/70 text-sm">
              {isArabic
                ? "مطوّر برمجيات متكامل يبني منتجات ويب تساعد الشركات على العمل بكفاءة أكبر والنمو بثقة."
                : "Full-stack developer building web products that help businesses operate more efficiently and grow with confidence."}
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/mafdyamir" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label={isArabic ? "زيارة حسابي على GitHub" : "Visit my GitHub profile"}>
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/mafdy-amir/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label={isArabic ? "زيارة حسابي على LinkedIn" : "Visit my LinkedIn profile"}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:mafdyamir15@gmail.com" className="text-foreground/70 hover:text-primary transition-colors" aria-label={isArabic ? "إرسال بريد إلكتروني" : "Send an email"}>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:mx-auto">
            <h4 className="font-semibold text-foreground mb-4">{isArabic ? "روابط سريعة" : "Quick Links"}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href ?? link.section}>
                  {link.href ? (
                    <Link to={link.href} className="text-sm text-foreground/60 transition-colors hover:text-primary">
                      {link.name}
                    </Link>
                  ) : (
                    <button onClick={() => handleSectionClick(link.section)} className="bg-transparent border-none cursor-pointer p-0 text-start text-sm text-foreground/60 transition-colors hover:text-primary">
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:mx-auto">
            <h4 className="font-semibold text-foreground mb-4">{isArabic ? "الخدمات" : "Services"}</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id} className="text-foreground/60 text-sm">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-background py-4 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-foreground/50">
          <p>
            © {currentYear} {isArabic ? "مفدي أمير. جميع الحقوق محفوظة." : "Mafdy Amir. All rights reserved."}
          </p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              {isArabic ? "شروط الخدمة" : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
