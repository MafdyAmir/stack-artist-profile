
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLanguage } from "@/i18n/LanguageContext";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();
  const { isArabic } = useLanguage();

  // Ensure we're rendering client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu dir={isArabic ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 relative"
          aria-label={isArabic ? "تغيير المظهر" : "Change theme"}
        >
          <Sun className={`h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 ${reducedMotion ? '' : 'transition-all'}`} />
          <Moon className={`absolute h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100 ${reducedMotion ? '' : 'transition-all'}`} />
          <span className="sr-only">{isArabic ? "تغيير المظهر" : "Change theme"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("light")}>
          <Sun className="h-4 w-4" />
          <span>{isArabic ? "فاتح" : "Light"}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("dark")}>
          <Moon className="h-4 w-4" />
          <span>{isArabic ? "داكن" : "Dark"}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("system")}>
          <Laptop className="h-4 w-4" />
          <span>{isArabic ? "النظام" : "System"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
