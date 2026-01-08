import { useEffect, useRef } from "react";

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Partner placeholders - replace with actual logos
  const partners = [
    { name: "Partner 1", initials: "P1" },
    { name: "Partner 2", initials: "P2" },
    { name: "Partner 3", initials: "P3" },
    { name: "Partner 4", initials: "P4" },
    { name: "Partner 5", initials: "P5" },
    { name: "Partner 6", initials: "P6" },
    { name: "Partner 7", initials: "P7" },
    { name: "Partner 8", initials: "P8" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      if (scrollContainer.scrollWidth / 2 <= Math.abs(position)) {
        position = 0;
      }
      scrollContainer.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="partners" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Collaborations
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Our Promotion Network
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-0">
              <div className="h-0.5 w-12 bg-primary" />
              <div className="h-0.5 w-12 bg-secondary" />
            </div>
          </div>
          <p className="text-muted-foreground text-lg">
            Trusted partnerships with leading promoters, brands, and content creators
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-8 md:gap-12 whitespace-nowrap">
            {/* Double the partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-muted flex items-center justify-center grayscale hover:grayscale-0 hover:bg-primary/10 transition-all duration-300 cursor-pointer group"
              >
                <span className="heading-display text-2xl md:text-3xl text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.initials}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Partners;
