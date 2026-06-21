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

const services = [
  {
    icon: Briefcase,
    title: "Custom Business Systems",
    description:
      "Internal tools and workflow automation that replace spreadsheets and save your team hours every week.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description:
      "Online stores with secure checkout, inventory, and order management — built to scale with your sales.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description:
      "Clean, data-rich dashboards that turn raw data into decisions your team can act on.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    description:
      "Connect your tools — CRMs, ERPs, third-party services — so data flows automatically between systems.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    description:
      "Secure Stripe, PayPal, and local gateway integrations with subscriptions, refunds, and invoicing.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description:
      "Automated notifications, order updates, and customer support flows over WhatsApp Business API.",
  },
  {
    icon: FileText,
    title: "CMS Development",
    description:
      "Headless and traditional content systems so your team can update the website without a developer.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Audit and tune slow apps and APIs — faster pages, lower hosting costs, happier users.",
  },
];

const HowICanHelp = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="section-container !py-0">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            How I Can Help
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions tailored to your business goals
          </h2>
          <p className="text-lg text-foreground/70">
            Whether you're launching a new product or modernizing an existing one,
            here's how I can help you ship it faster and run it reliably.
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
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowICanHelp;
