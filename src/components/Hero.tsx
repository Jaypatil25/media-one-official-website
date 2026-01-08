import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            <span className="text-primary">Media</span>{" "}
            <span className="text-secondary">One</span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80">
              The One That Does It All
            </span>
          </h1>

          {/* Animated Underline */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-0">
              <div className="h-0.5 w-16 sm:w-24 bg-primary animate-pulse" />
              <div className="h-0.5 w-16 sm:w-24 bg-secondary" />
            </div>
          </div>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 tracking-wide">
            Entertainment PR | Movie Promotion | Drama | Events
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("#contact")}
              className="group bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="group border-2 border-secondary text-secondary px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
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
