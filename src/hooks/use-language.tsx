import { createContext, useContext, useState, useEffect } from 'react';
import { type Lang, type Translations, translations } from '@/lib/i18n';

const MANUAL_KEY = 'aye-lang';

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    // If user already manually picked a language, honour it
    const manual = localStorage.getItem(MANUAL_KEY) as Lang | null;
    if (manual === 'tr' || manual === 'en') {
      setLang(manual);
      return;
    }

    // Otherwise auto-detect from IP
    fetch('https://api.country.is/')
      .then((r) => r.json())
      .then((d) => { if (d.country === 'TR') setLang('tr'); })
      .catch(() => {}); // default stays 'en'
  }, []);

  const toggleLang = () => {
    setLang((l) => {
      const next = l === 'en' ? 'tr' : 'en';
      localStorage.setItem(MANUAL_KEY, next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
