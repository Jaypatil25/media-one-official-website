import { Quote, Target, Users, Trophy } from "lucide-react";

const OurStory = () => {
  const achievements = [
    { icon: Trophy, value: "300+", label: "Films & Shows Promoted" },
    { icon: Users, value: "10+", label: "Years of Excellence" },
    { icon: Target, value: "100%", label: "Dedicated Service" },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Story
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Media One – The Only One That Does It All
          </h2>
          <div className="flex items-center justify-center gap-0 mb-8">
            <div className="h-0.5 w-12 bg-primary" />
            <div className="h-0.5 w-12 bg-secondary" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Story Content */}
          <div className="relative">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Throughout the first decade of this 21st century, the <strong className="text-foreground">Marathi Entertainment Industry</strong> has witnessed exponential growth. Media One takes pride in being committed to help Marathi films, theatre, television and all other types of cultural events taste the glory of success.
              </p>
              
              <p>
                We bring about a well-organized blend of all the innovatively evolving equations required for the publicity of pioneering projects launched by a platoon of fresh talent - next generation producers, technicians, directors, and actors of worthy potential.
              </p>
              
              <p>
                Media One has fast emerged as a <strong className="text-primary">one-point destination</strong> indulged in transforming the most evocative and ambitious visions of fresh talent from the Marathi entertainment industry into reality.
              </p>
              
              <p>
                In this fierce competition, knowing fully well the significance of publicity's immense power, Media One with its dedicated team has made all publicity services available under a single roof - be it advertising, public relations, organizing events and seminars, or tapping other promotional platforms.
              </p>
            </div>

            {/* Quote highlight */}
            <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary">
              <p className="text-foreground font-medium italic">
                "The merit of a publicity medium is always more significant than the numerical strength of publicity mediums available."
              </p>
            </div>
          </div>

          {/* Achievements & Visual */}
          <div className="space-y-8">
            {/* Achievement Stats */}
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <achievement.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="heading-display text-2xl text-foreground">
                        {achievement.value}
                      </div>
                      <div className="text-muted-foreground text-sm">{achievement.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-card border border-border p-8">
              <h3 className="heading-display text-xl text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Media One has emerged as a leading enterprise offering a wide spectrum of media services to help you stay one step ahead in reaching potential targets. We've successfully shouldered the responsibility of offering publicity services to more than 300 films, plays, reality shows and variety of cultural events.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
                  Films
                </span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 text-sm font-medium">
                  Theatre
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
                  Television
                </span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 text-sm font-medium">
                  Cultural Events
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;