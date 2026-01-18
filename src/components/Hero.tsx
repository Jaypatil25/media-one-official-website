import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 pt-20 relative overflow-hidden">
      {/* Cinema-Inspired Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Movie Theater Curtain Effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary/20 via-primary/10 to-transparent"></div>
        
        {/* Vintage Film Reel Circles */}
        <div className="absolute top-20 left-20 w-24 h-24 border-4 border-primary/30 rounded-full">
          <div className="absolute inset-2 border-2 border-primary/20 rounded-full">
            <div className="absolute inset-2 border border-primary/10 rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-secondary/30 rounded-full">
          <div className="absolute inset-3 border-2 border-secondary/20 rounded-full">
            <div className="absolute inset-2 border border-secondary/10 rounded-full"></div>
          </div>
        </div>
        
        {/* Film Strip Perforations */}
        <div className="absolute left-8 top-0 h-full w-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          {Array.from({length: 20}).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-primary/20 rounded-full mx-auto mb-8" style={{marginTop: i === 0 ? '40px' : '0'}}></div>
          ))}
        </div>
        <div className="absolute right-8 top-0 h-full w-6 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
          {Array.from({length: 20}).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-secondary/20 rounded-full mx-auto mb-8" style={{marginTop: i === 0 ? '60px' : '0'}}></div>
          ))}
        </div>
        
        {/* Spotlight Beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary/30 via-transparent to-transparent transform rotate-12"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-secondary/30 via-transparent to-transparent transform -rotate-12"></div>
        
        {/* Stage Lights */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-4">
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Premium Headline */}
          <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 drop-shadow-sm">
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">Media</span>{" "}
            <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text">One</span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80">
              The One That Does It All
            </span>
          </h1>

          {/* Premium Animated Underline */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-1">
              <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-pulse rounded-full shadow-sm" />
              <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
              <div className="h-1 w-16 sm:w-24 bg-gradient-to-l from-secondary via-secondary/80 to-secondary/60 rounded-full shadow-sm" />
            </div>
          </div>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 tracking-wide">
            Entertainment PR | Movie Promotion | Drama | Events
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("#contact")}
              className="group bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="group border-2 border-secondary text-secondary px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Play className="w-4 h-4" />
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
