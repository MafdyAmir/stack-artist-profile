import {
  Briefcase,
  ShoppingCart,
  LayoutDashboard,
  Plug,
  CreditCard,
  MessageSquare,
  FileText,
  Gauge,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const services = [
  {
    icon: Briefcase,
    title: "Custom Business Systems",
    titleAr: "أنظمة أعمال مخصصة",
    description:
      "Internal tools and workflow automation that replace spreadsheets and save your team hours every week.",
    descriptionAr:
      "أدوات داخلية وأتمتة لسير العمل تحل محل جداول البيانات وتوفّر على فريقك ساعات من العمل كل أسبوع.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    titleAr: "منصات التجارة الإلكترونية",
    description:
      "Online stores with secure checkout, inventory, and order management — built to scale with your sales.",
    descriptionAr:
      "متاجر إلكترونية بعمليات دفع آمنة وإدارة للمخزون والطلبات، مصممة للتوسع مع نمو مبيعاتك.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    titleAr: "لوحات تحكم إدارية",
    description:
      "Clean, data-rich dashboards that turn raw data into decisions your team can act on.",
    descriptionAr:
      "لوحات تحكم واضحة وغنية بالبيانات تحوّل المعلومات الخام إلى قرارات يستطيع فريقك تنفيذها.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    titleAr: "تكامل واجهات البرمجة",
    description:
      "Connect your tools — CRMs, ERPs, third-party services — so data flows automatically between systems.",
    descriptionAr:
      "ربط أدواتك، مثل أنظمة إدارة العملاء والموارد والخدمات الخارجية، لتنتقل البيانات تلقائيًا بين الأنظمة.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    titleAr: "بوابات الدفع",
    description:
      "Secure Stripe, PayPal, and local gateway integrations with subscriptions, refunds, and invoicing.",
    descriptionAr:
      "تكاملات آمنة مع Stripe وPayPal وبوابات الدفع المحلية، تشمل الاشتراكات والاسترداد والفواتير.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    titleAr: "أتمتة واتساب",
    description:
      "Automated notifications, order updates, and customer support flows over WhatsApp Business API.",
    descriptionAr:
      "إشعارات وتحديثات للطلبات ومسارات دعم عملاء آلية عبر واجهة WhatsApp Business.",
  },
  {
    icon: FileText,
    title: "CMS Development",
    titleAr: "تطوير أنظمة إدارة المحتوى",
    description:
      "Headless and traditional content systems so your team can update the website without a developer.",
    descriptionAr:
      "أنظمة إدارة محتوى تقليدية ومنفصلة تتيح لفريقك تحديث الموقع دون الحاجة إلى مطوّر.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    titleAr: "تحسين الأداء",
    description:
      "Audit and tune slow apps and APIs — faster pages, lower hosting costs, happier users.",
    descriptionAr:
      "فحص التطبيقات وواجهات البرمجة البطيئة وتحسينها لصفحات أسرع وتكاليف استضافة أقل وتجربة أفضل للمستخدمين.",
  },
];

const HowICanHelp = () => {
  const { isArabic } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="section-container !py-0">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            {isArabic ? "كيف يمكنني مساعدتك" : "How I Can Help"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isArabic ? "حلول مصممة لتحقيق أهداف عملك" : "Solutions tailored to your business goals"}
          </h2>
          <p className="text-lg text-foreground/70">
            {isArabic
              ? "سواء كنت تطلق منتجًا جديدًا أو تطوّر منتجًا قائمًا، يمكنني مساعدتك على إطلاقه بسرعة وتشغيله بموثوقية."
              : "Whether you're launching a new product or modernizing an existing one, here's how I can help you ship it faster and run it reliably."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {isArabic ? s.titleAr : s.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {isArabic ? s.descriptionAr : s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowICanHelp;
