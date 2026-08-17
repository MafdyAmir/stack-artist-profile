import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ar";

interface LanguageContextValue {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "mafdy-portfolio-language";

const seoCopy: Record<
  Language,
  {
    title: string;
    description: string;
    openGraphDescription: string;
  }
> = {
  en: {
    title: "Mafdy Amir — Full-Stack Engineer for Business Web Solutions",
    description:
      "Full-stack engineer helping businesses and recruiters evaluate a portfolio of scalable web apps, business systems, e-commerce platforms, APIs, and automation.",
    openGraphDescription:
      "I build fast, reliable, and scalable web applications for businesses, product teams, and recruiters evaluating full-stack talent.",
  },
  ar: {
    title: "مفدي أمير — مهندس برمجيات متكامل لحلول الويب للأعمال",
    description:
      "مهندس برمجيات متكامل يساعد الشركات وأصحاب العمل على استعراض مجموعة من تطبيقات الويب القابلة للتوسع وأنظمة الأعمال ومنصات التجارة الإلكترونية وواجهات البرمجة والأتمتة.",
    openGraphDescription:
      "أبني تطبيقات ويب سريعة وموثوقة وقابلة للتوسع للشركات وفرق المنتجات وأصحاب العمل الباحثين عن خبرات برمجية متكاملة.",
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";

  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage === "en" || storedLanguage === "ar") {
      return storedLanguage;
    }
  } catch {
    // Storage may be unavailable in privacy-focused browser modes.
  }

  const browserLanguage = window.navigator.languages?.[0] ?? window.navigator.language;
  return /^ar(?:-|$)/i.test(browserLanguage) ? "ar" : "en";
};

const updateMetaContent = (selector: string, content: string) => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const isArabic = language === "ar";

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((currentLanguage) => (currentLanguage === "ar" ? "en" : "ar"));
  }, []);

  useLayoutEffect(() => {
    const documentElement = document.documentElement;
    const copy = seoCopy[language];

    documentElement.lang = language;
    documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = copy.title;
    updateMetaContent('meta[name="description"]', copy.description);
    updateMetaContent('meta[property="og:title"]', copy.title);
    updateMetaContent('meta[property="og:description"]', copy.openGraphDescription);

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // The language still works for the current session without persistence.
    }
  }, [isArabic, language]);

  useEffect(() => {
    const syncLanguageAcrossTabs = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && (event.newValue === "en" || event.newValue === "ar")) {
        setLanguageState(event.newValue);
      }
    };

    window.addEventListener("storage", syncLanguageAcrossTabs);
    return () => window.removeEventListener("storage", syncLanguageAcrossTabs);
  }, []);

  const value = useMemo(
    () => ({ language, isArabic, setLanguage, toggleLanguage }),
    [isArabic, language, setLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
