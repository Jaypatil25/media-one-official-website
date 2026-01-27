import { Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'hi' as Language, name: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr' as Language, name: 'मराठी', flag: '🚩' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 ease-out">
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/5 transition-colors duration-200 ${
              language === lang.code ? 'bg-primary/10 text-primary' : 'text-foreground/80'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;