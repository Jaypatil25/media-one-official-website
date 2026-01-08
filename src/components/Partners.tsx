import { useEffect, useRef } from "react";

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Partner placeholders - replace with actual logos
  const partners = [
    { name: "Planet Marathi", initials: "PM", image: "https://planetmarathi.org/wp-content/uploads/2020/03/LOGO-10-01-2018-1024x725.png" },
    { name: "Marathi Times", initials: "MT", image: "https://static.mediawire.in/brands/profilepic/1099/MT%20LOGO.jpg" },
    { name: "Marathi Bigg Boss", initials: "MB", image: "https://yt3.googleusercontent.com/kjHXNX90_bSJ_VLe3ucj5RnuzMBhMjDlr2XyGl2oEjK08lVz01T-bZUNn8dNhoMw8GLJAP965g=s900-c-k-c0x00ffffff-no-rj" },
    { name: "Zee Marathi", initials: "ZM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2i4rHE2pPQVnOiYsOaz23heDQI8Kl4Fi_4Q&s"},
    { name: "Colors Marathi", initials: "CM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9L4NgBtyEdzRYln4yvS19PZYndv3nuHm2g&s" },
    { name: "Star Pravah", initials: "SP", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuaP2L3DU5Y3r5Bk8HhocNg2iGlarKIdygQ&s" },
    { name: "Marathi Bigg Boss 5", initials: "MB5", image: "https://yt3.googleusercontent.com/Ntgc6M2IzhPehvTV-Zk_xM2RckqXnY-JoUEzkqAqnk6k1N78Mw_A8G8j3Z9PfmVzLodQo8H1TQ=s900-c-k-c0x00ffffff-no-rj" },
    { name: "Sony Marathi", initials: "SM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6zR7-4b-GUJ9NtwJUYYNiSsZVI_zc5Mp0A&s" },
    { name: "Shemaroo Marathi", initials: "SHM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xsn6BD4vWL0rVRq48HYxaC3Dxu73e9Q3eQ&s" },
    { name: "Fakt Marathi", initials: "FM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrNZaZuQH-_O6yjnJ4iUiT10RPDcC4rR6uA&s" },
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
    <section id="partners" className="py-20 md:py-32 bg-background overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 text-primary text-8xl transform rotate-12">🎥</div>
        <div className="absolute top-20 right-20 text-secondary text-6xl transform -rotate-12">🎬</div>
        <div className="absolute bottom-20 left-1/4 text-primary text-4xl transform rotate-45">🎤</div>
        <div className="absolute bottom-10 right-1/3 text-secondary text-5xl transform -rotate-30">🎭</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
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
          <div ref={scrollRef} className="flex gap-4 sm:gap-8 md:gap-12 whitespace-nowrap">
            {/* Double the partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                {partner.image ? (
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className={`w-full h-full ${partner.name === "Marathi Times" ? "object-contain" : "object-cover"} ${partner.name === "Marathi Bigg Boss" || partner.name === "Marathi Bigg Boss 5" || partner.name === "Sony Marathi" ? "rounded-full" : ""} ${partner.name === "Shemaroo Marathi" || partner.name === "Fakt Marathi" || partner.name === "Colors Marathi" || partner.name === "Star Pravah" ? "rounded-lg" : ""}`}
                    onError={(e) => {
                      console.log(`Failed to load image for ${partner.name}:`, partner.image);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <span className="heading-display text-2xl md:text-3xl text-muted-foreground group-hover:text-primary transition-colors">
                    {partner.initials}
                  </span>
                )}
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
