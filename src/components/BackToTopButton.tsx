import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useLanguage } from '@/i18n/LanguageContext';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  const { isArabic } = useLanguage();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={cn(
        'floating-actions fixed bottom-8 z-50 flex flex-col gap-3',
        reducedMotion ? '' : 'transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <Button
        variant="default"
        size="icon"
        onClick={scrollToTop}
        className="h-12 w-12 rounded-full"
        aria-label={isArabic ? "العودة إلى أعلى الصفحة" : "Scroll to top"}
      >
        <ArrowUp className="h-6 w-6" />
      </Button>

      <Button
        asChild
        variant="secondary"
        className="h-12 rounded-full px-4 shadow-lg shadow-primary/10"
        aria-label={isArabic ? "التواصل عبر واتساب" : "Contact on WhatsApp"}
      >
        <a href="https://wa.me/201271151446" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-5 w-5" />
          {isArabic ? "واتساب" : "WhatsApp"}
        </a>
      </Button>
    </div>
  );
};

export default BackToTopButton;
