import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { isArabic } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" dir={isArabic ? "rtl" : "ltr"}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          {isArabic ? "عذرًا، الصفحة غير موجودة" : "Oops! Page not found"}
        </p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          {isArabic ? "العودة إلى الرئيسية" : "Return to Home"}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
