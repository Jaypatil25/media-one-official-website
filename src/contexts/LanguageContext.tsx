import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.about': 'About',
    'nav.ourStory': 'Our Story',
    'nav.services': 'Services',
    'nav.partners': 'Partners',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.workWithUs': 'Work With Us',
    'hero.title': 'Media One',
    'hero.subtitle': 'The One That Does It All',
    'hero.tagline': 'Entertainment PR | Movie Promotion | Drama | Events',
    'hero.cta1': 'Work With Us',
    'hero.cta2': 'View Our Work',
    'about.title': 'About Us',
    'about.heading': 'The Powerhouse Behind Marathi Entertainment PR',
    'story.title': 'Our Story',
    'story.heading': 'Media One – The Only One That Does It All',
    'story.founder': 'Founder & CEO',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us'
  },
  hi: {
    'nav.about': 'हमारे बारे में',
    'nav.ourStory': 'हमारी कहानी',
    'nav.services': 'सेवाएं',
    'nav.partners': 'साझेदार',
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.contact': 'संपर्क',
    'nav.workWithUs': 'हमारे साथ काम करें',
    'hero.title': 'मीडिया वन',
    'hero.subtitle': 'जो सब कुछ करता है',
    'hero.tagline': 'मनोरंजन पीआर | फिल्म प्रमोशन | नाटक | इवेंट्स',
    'hero.cta1': 'हमारे साथ काम करें',
    'hero.cta2': 'हमारा काम देखें',
    'about.title': 'हमारे बारे में',
    'about.heading': 'मराठी मनोरंजन पीआर की शक्ति',
    'story.title': 'हमारी कहानी',
    'story.heading': 'मीडिया वन – जो सब कुछ करता है',
    'story.founder': 'संस्थापक और सीईओ',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.contactUs': 'हमसे संपर्क करें'
  },
  mr: {
    'nav.about': 'आमच्याबद्दल',
    'nav.ourStory': 'आमची कहाणी',
    'nav.services': 'सेवा',
    'nav.partners': 'भागीदार',
    'nav.projects': 'प्रकल्प',
    'nav.contact': 'संपर्क',
    'nav.workWithUs': 'आमच्यासोबत काम करा',
    'hero.title': 'मीडिया वन',
    'hero.subtitle': 'जो सर्व काही करतो',
    'hero.tagline': 'मनोरंजन पीआर | चित्रपट प्रमोशन | नाटक | कार्यक्रम',
    'hero.cta1': 'आमच्यासोबत काम करा',
    'hero.cta2': 'आमचे काम पहा',
    'about.title': 'आमच्याबद्दल',
    'about.heading': 'मराठी मनोरंजन पीआरची शक्ती',
    'story.title': 'आमची कहाणी',
    'story.heading': 'मीडिया वन – जो सर्व काही करतो',
    'story.founder': 'संस्थापक आणि सीईओ',
    'footer.quickLinks': 'द्रुत दुवे',
    'footer.contactUs': 'आमच्याशी संपर्क साधा'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};