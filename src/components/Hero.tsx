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
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cinematic Film Strip Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          <div className="absolute top-10 left-10 w-12 h-40 bg-gradient-to-b from-primary via-primary/80 to-primary/40 transform rotate-12 shadow-lg"></div>
          <div className="absolute top-20 right-20 w-10 h-36 bg-gradient-to-b from-secondary via-secondary/80 to-secondary/40 transform -rotate-12 shadow-lg"></div>
          <div className="absolute bottom-20 left-20 w-14 h-44 bg-gradient-to-b from-primary via-primary/70 to-primary/30 transform rotate-45 shadow-lg"></div>
          <div className="absolute bottom-10 right-10 w-8 h-32 bg-gradient-to-b from-secondary via-secondary/70 to-secondary/30 transform -rotate-45 shadow-lg"></div>
        </div>
        
        {/* Premium Spotlight Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/25 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse shadow-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-secondary/25 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse shadow-2xl" style={{animationDelay: '1s'}}></div>
        
        {/* Elegant Red Accent Effects */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-red-500/30 to-red-700/15 rounded-full blur-2xl transform rotate-12 shadow-xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-tl from-red-600/25 to-red-400/10 rounded-full blur-3xl transform -rotate-12 shadow-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-red-500/35 via-red-600/20 to-transparent rounded-full blur-xl transform rotate-45 shadow-lg"></div>
        <div className="absolute bottom-1/2 right-1/4 w-28 h-28 bg-gradient-to-l from-red-700/30 via-red-500/15 to-transparent rounded-full blur-2xl transform -rotate-45 shadow-lg"></div>
        
        {/* Premium Geometric Accents */}
        <div className="absolute top-16 left-1/3 w-1 h-20 bg-gradient-to-b from-primary to-transparent opacity-30 transform rotate-12"></div>
        <div className="absolute bottom-16 right-1/3 w-1 h-24 bg-gradient-to-t from-secondary to-transparent opacity-30 transform -rotate-12"></div>
        <div className="absolute top-1/2 right-16 w-20 h-1 bg-gradient-to-l from-primary to-transparent opacity-20 transform rotate-45"></div>
        <div className="absolute top-1/2 left-16 w-24 h-1 bg-gradient-to-r from-secondary to-transparent opacity-20 transform -rotate-45"></div>
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
