import { Film, Globe, Theater, Newspaper, Share2, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Movie Promotions",
      description:
        "Comprehensive promotional campaigns for theatrical releases, OTT content, and film festivals.",
    },
    {
      icon: Globe,
      title: "Digital & Influencer PR",
      description:
        "Strategic partnerships with top influencers and content creators for maximum digital reach.",
    },
    {
      icon: Theater,
      title: "Drama & Show Promotions",
      description:
        "Specialized PR campaigns for theatrical plays, TV shows, and web series.",
    },
    {
      icon: Newspaper,
      title: "Event PR & Media Coverage",
      description:
        "End-to-end event publicity including press releases, media invites, and live coverage.",
    },
    {
      icon: Share2,
      title: "Social Media Buzz Campaigns",
      description:
        "Viral marketing strategies that create organic buzz and trending conversations.",
    },
    {
      icon: Users,
      title: "Creator & Promoter Collaborations",
      description:
        "Direct connections with Marathi YouTubers, podcasters, and regional content creators.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Our Services
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-0">
              <div className="h-0.5 w-12 bg-primary" />
              <div className="h-0.5 w-12 bg-secondary" />
            </div>
          </div>
          <p className="text-muted-foreground text-lg">
            Comprehensive PR solutions tailored for the entertainment industry
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 hover:border-primary transition-all duration-300 group hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="heading-display text-xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
