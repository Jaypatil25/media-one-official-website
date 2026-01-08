import { Check } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    "Strong Marathi entertainment industry reach",
    "Trusted influencer & promoter network",
    "High-impact digital + ground PR",
    "End-to-end campaign execution",
    "Proven visibility and engagement results",
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Why Media One?
            </h2>
            <div className="flex items-center gap-0 mb-8">
              <div className="h-0.5 w-12 bg-primary" />
              <div className="h-0.5 w-12 bg-secondary" />
            </div>

            <ul className="space-y-5">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-1/3 h-1 bg-primary" />
              <div className="absolute top-0 right-0 w-1/4 h-1 bg-secondary" />
              <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-secondary" />
              <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-primary" />
              
              <div className="text-center p-8">
                <div className="heading-display text-6xl md:text-8xl text-primary mb-4">
                  #1
                </div>
                <p className="text-muted-foreground text-lg">
                  Entertainment PR Agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
