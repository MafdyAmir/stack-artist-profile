
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const PrivacyPolicy = () => {
  const { isArabic } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className={`h-4 w-4 ${isArabic ? "ml-2 rotate-180" : "mr-2"}`} />
          {isArabic ? "العودة إلى الرئيسية" : "Back to Home"}
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">{isArabic ? "سياسة الخصوصية" : "Privacy Policy"}</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            {isArabic ? "آخر تحديث: " : "Last updated: "}
            {new Date().toLocaleDateString(isArabic ? "ar-EG" : "en-US")}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {isArabic ? "المعلومات التي نجمعها" : "Information We Collect"}
            </h2>
            <p className="mb-4">
              {isArabic
                ? "نجمع المعلومات التي تقدمها لنا مباشرة، مثل المعلومات التي ترسلها عند التواصل معنا عبر نماذج الموقع أو البريد الإلكتروني."
                : "We collect information you provide directly to us, such as when you contact us through our website forms or email."}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {isArabic ? "كيف نستخدم معلوماتك" : "How We Use Your Information"}
            </h2>
            <p className="mb-4">
              {isArabic
                ? "نستخدم المعلومات التي نجمعها للرد على استفساراتك وتقديم الخدمات التي تطلبها."
                : "We use the information we collect to respond to your inquiries and provide the services you request."}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {isArabic ? "مشاركة المعلومات" : "Information Sharing"}
            </h2>
            <p className="mb-4">
              {isArabic
                ? "لا نبيع معلوماتك الشخصية ولا نتاجر بها ولا ننقلها إلى أطراف ثالثة دون موافقتك."
                : "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent."}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            <p className="mb-4">
              {isArabic
                ? "إذا كانت لديك أي أسئلة حول سياسة الخصوصية، فتواصل معنا عبر "
                : "If you have any questions about this Privacy Policy, please contact us at "}
              <a
                href="mailto:mafdyamir15@gmail.com"
                dir="ltr"
                className="text-primary hover:underline"
              >
                mafdyamir15@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
