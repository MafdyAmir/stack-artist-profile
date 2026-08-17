import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export const LanguageToggle = () => {
  const { isArabic, toggleLanguage } = useLanguage();
  const accessibleLabel = isArabic ? "التبديل إلى الإنجليزية" : "Switch to Arabic";

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="keep-ltr h-9 min-w-9 px-2 text-xs font-bold"
      onClick={toggleLanguage}
      aria-label={accessibleLabel}
      title={accessibleLabel}
      dir="ltr"
    >
      <span aria-hidden="true" lang="en">
        {isArabic ? "EN" : "AR"}
      </span>
    </Button>
  );
};
