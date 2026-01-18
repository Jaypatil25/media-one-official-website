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
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Dynamic Film Strips */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-12 h-40 bg-gradient-to-b from-primary to-primary/50 transform rotate-12 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-10 h-36 bg-gradient-to-b from-secondary to-secondary/50 transform -rotate-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-14 h-44 bg-gradient-to-b from-primary to-primary/30 transform rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 right-10 w-8 h-32 bg-gradient-to-b from-secondary to-secondary/30 transform -rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Enhanced Spotlight Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-secondary/20 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/2 right-1/4 w-5 h-5 bg-secondary rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-1/2 w-16 h-16 border-2 border-primary/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 right-1/2 w-12 h-12 border-2 border-secondary/20 rotate-12 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced Headline with Animation */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                ✨ Premier Entertainment PR Agency
              </span>
            </div>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              <span className="text-primary drop-shadow-lg">Media</span>{" "}
              <span className="text-secondary drop-shadow-lg">One</span>
              <span className="block mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text">
                The One That Does It All
              </span>
            </h1>
          </div>

          {/* Enhanced Animated Underline */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-primary/50 animate-pulse rounded-full" />
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
              <div className="h-1 w-16 sm:w-24 bg-gradient-to-l from-secondary to-secondary/50 animate-pulse rounded-full" />
            </div>
          </div>

          {/* Enhanced Sub-headline */}
          <div className="mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 tracking-wide">
              Entertainment PR | Movie Promotion | Drama | Events
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground/80">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                500+ Projects
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                10+ Years
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                50+ Partners
              </span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("#contact")}
              className="group bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="group border-2 border-secondary text-secondary px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center hover:shadow-lg hover:scale-105 transform"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              View Our Work
              <div className="w-2 h-2 bg-secondary group-hover:bg-secondary-foreground rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
