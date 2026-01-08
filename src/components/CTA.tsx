import { ArrowRight } from "lucide-react";

const CTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Have a Film, Show, or Event to Promote?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let us create the buzz your project deserves. Partner with Media One 
            for impactful entertainment PR.
          </p>
          <button
            onClick={scrollToContact}
            className="group bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
          >
            Let's Create the Buzz
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
