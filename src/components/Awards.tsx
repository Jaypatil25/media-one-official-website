import { Award, Trophy, Star, Newspaper } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Best PR Agency 2024",
      description: "Marathi Entertainment Awards",
      year: "2024"
    },
    {
      icon: Award,
      title: "Excellence in Digital Marketing",
      description: "Mumbai PR Association",
      year: "2023"
    },
    {
      icon: Star,
      title: "Top Entertainment Promoter",
      description: "Industry Recognition Award",
      year: "2023"
    }
  ];

  const certifications = [
    "Certified Digital Marketing Professional",
    "PR & Communications Excellence",
    "Entertainment Industry Specialist"
  ];

  const mediaFeatures = [
    "Featured in Mumbai Mirror - 'Rising PR Stars'",
    "Times of India - 'Marathi Cinema Promoters'",
    "Maharashtra Times - 'Digital PR Revolution'"
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Recognition
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Awards & Recognition
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-0">
              <div className="h-0.5 w-12 bg-primary" />
              <div className="h-0.5 w-12 bg-secondary" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Industry Awards */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Industry Awards</h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <award.icon className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm text-primary font-medium">{award.year}</span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{award.title}</h4>
                  <p className="text-xs text-muted-foreground">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Media Coverage */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Newspaper className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Media Coverage</h3>
            <div className="space-y-3">
              {mediaFeatures.map((feature, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;