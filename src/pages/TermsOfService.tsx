
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const TermsOfService = () => {
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
        
        <h1 className="text-4xl font-bold mb-8">{isArabic ? "شروط الخدمة" : "Terms of Service"}</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            {isArabic ? "آخر تحديث: " : "Last updated: "}
            {new Date().toLocaleDateString(isArabic ? "ar-EG" : "en-US")}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{isArabic ? "قبول الشروط" : "Acceptance of Terms"}</h2>
            <p className="mb-4">
              {isArabic
                ? "بدخولك إلى هذا الموقع واستخدامه، فإنك تقبل هذه الشروط وتوافق على الالتزام بأحكامها."
                : "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{isArabic ? "ترخيص الاستخدام" : "Use License"}</h2>
            <p className="mb-4">
              {isArabic
                ? "يُسمح بتنزيل نسخة واحدة مؤقتة من مواد هذا الموقع للاطلاع الشخصي غير التجاري فقط."
                : "Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only."}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{isArabic ? "إخلاء المسؤولية" : "Disclaimer"}</h2>
            <p className="mb-4">
              {isArabic
                ? "تُقدم مواد هذا الموقع كما هي، دون أي ضمانات صريحة أو ضمنية، ونخلي مسؤوليتنا عن أي ضمانات أخرى."
                : "The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties."}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{isArabic ? "حدود المسؤولية" : "Limitations"}</h2>
            <p className="mb-4">
              {isArabic
                ? "لن تتحمل شركتنا أو موردوها بأي حال مسؤولية الأضرار الناتجة عن استخدام مواد الموقع أو تعذر استخدامها."
                : "In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website."}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{isArabic ? "معلومات التواصل" : "Contact Information"}</h2>
            <p className="mb-4">
              {isArabic
                ? "إذا كانت لديك أي أسئلة حول شروط الخدمة، فتواصل معنا عبر "
                : "If you have any questions about these Terms of Service, please contact us at "}
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

export default TermsOfService;
