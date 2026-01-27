import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Film Strip Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-8 h-32 bg-primary transform rotate-12 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-8 h-32 bg-secondary transform -rotate-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-8 h-32 bg-primary transform rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 right-10 w-8 h-32 bg-secondary transform -rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Spotlight Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Red Gradient Effects */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-700/10 rounded-full blur-2xl transform rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-tl from-red-600/15 to-red-400/5 rounded-full blur-3xl transform -rotate-12 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-red-500/25 to-transparent rounded-full blur-xl transform rotate-45 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/2 right-1/4 w-28 h-28 bg-gradient-to-l from-red-700/20 to-red-500/10 rounded-full blur-2xl transform -rotate-45 animate-pulse" style={{animationDelay: '3.5s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Headline */}
          <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-slide-up">
            <span className="text-primary">{t('hero.title').split(' ')[0]}</span>{" "}
            <span className="text-secondary">{t('hero.title').split(' ')[1] || 'One'}</span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Animated Underline */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="flex items-center gap-0">
              <div className="h-0.5 w-16 sm:w-24 bg-primary animate-pulse" />
              <div className="h-0.5 w-16 sm:w-24 bg-secondary" />
            </div>
          </div>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 tracking-wide animate-fade-in" style={{animationDelay: '0.3s'}}>
            {t('hero.tagline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button
              onClick={() => scrollToSection("#contact")}
              className="group bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 ease-out flex items-center gap-2 w-full sm:w-auto justify-center hover:shadow-lg hover:-translate-y-0.5"
            >
              {t('hero.cta1')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="group border-2 border-secondary text-secondary px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 ease-out flex items-center gap-2 w-full sm:w-auto justify-center hover:shadow-lg hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              {t('hero.cta2')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
