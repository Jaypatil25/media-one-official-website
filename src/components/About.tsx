import { Award, Users, TrendingUp, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Projects Delivered" },
    { icon: TrendingUp, value: "100M+", label: "Impressions Generated" },
    { icon: Star, value: "50+", label: "Industry Partners" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="relative">
            {/* Red vertical accent */}
            <div className="absolute left-0 top-0 w-1 h-full bg-primary hidden lg:block" />
            
            <div className="lg:pl-8">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                About Us
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
                The Powerhouse Behind Marathi Entertainment PR
              </h2>
              
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Media One is a full-service Public Relations agency at the forefront of 
                entertainment promotions. We specialize in creating impactful campaigns 
                for movies, dramas, shows, and events across the Marathi entertainment industry.
              </p>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With strong connections to leading Marathi YouTubers, promoters, content 
                creators, and media networks, we ensure your project gets the visibility 
                it deserves. Our integrated approach combines digital PR, influencer 
                marketing, and traditional media outreach for maximum impact.
              </p>

              {/* Divider */}
              <div className="flex items-center gap-0 mb-8">
                <div className="h-0.5 w-12 bg-primary" />
                <div className="h-0.5 w-12 bg-secondary" />
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/10 text-primary px-4 py-2 text-sm font-medium">
                  Movie Promotions
                </span>
                <span className="bg-secondary/10 text-secondary px-4 py-2 text-sm font-medium">
                  Influencer Network
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 text-sm font-medium">
                  Event Coverage
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="heading-display text-3xl md:text-4xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
