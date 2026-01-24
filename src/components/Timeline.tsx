import { useState } from "react";
import { Calendar, Trophy, Film, Users, TrendingUp, Star } from "lucide-react";

const Timeline = () => {
  const [activeTab, setActiveTab] = useState("milestones");

  const timelineData = {
    milestones: [
      {
        year: "2014",
        title: "Media One Founded",
        description: "Ganesh Gargote establishes Media One with a vision to transform Marathi entertainment PR",
        icon: Star,
        color: "primary"
      },
      {
        year: "2016",
        title: "First 50 Projects",
        description: "Successfully promoted 50+ Marathi films and cultural events, establishing strong industry connections",
        icon: Trophy,
        color: "secondary"
      },
      {
        year: "2018",
        title: "Digital Expansion",
        description: "Expanded into digital PR and influencer marketing, partnering with top Marathi YouTubers",
        icon: TrendingUp,
        color: "primary"
      },
      {
        year: "2020",
        title: "100+ Projects Milestone",
        description: "Reached 100+ successful campaigns during challenging pandemic times through innovative digital strategies",
        icon: Users,
        color: "secondary"
      },
      {
        year: "2022",
        title: "Industry Leadership",
        description: "Became the go-to PR agency for major Marathi productions with 200+ successful campaigns",
        icon: Film,
        color: "primary"
      },
      {
        year: "2024",
        title: "300+ Projects Achievement",
        description: "Celebrating 300+ films, plays, reality shows and cultural events successfully promoted",
        icon: Trophy,
        color: "secondary"
      }
    ],
    campaigns: [
      {
        year: "2015",
        title: "Breakthrough Theatre Campaign",
        description: "First major theatre promotion that established Media One's reputation in Marathi entertainment",
        icon: Film,
        color: "primary"
      },
      {
        year: "2017",
        title: "Regional Film Festival Success",
        description: "Managed PR for multiple films at regional festivals, creating industry buzz and recognition",
        icon: Star,
        color: "secondary"
      },
      {
        year: "2019",
        title: "Digital-First Movie Launch",
        description: "Pioneered digital-first promotion strategy for Marathi cinema with influencer collaborations",
        icon: TrendingUp,
        color: "primary"
      },
      {
        year: "2021",
        title: "Virtual Event Management",
        description: "Successfully managed virtual premieres and events during pandemic, setting new industry standards",
        icon: Users,
        color: "secondary"
      },
      {
        year: "2023",
        title: "Multi-Platform Campaign",
        description: "Executed comprehensive multi-platform campaign reaching 10M+ impressions for major Marathi release",
        icon: Trophy,
        color: "primary"
      }
    ],
    industry: [
      {
        year: "2000-2010",
        title: "Traditional Media Era",
        description: "Marathi entertainment relied heavily on print media and radio for promotions",
        icon: Calendar,
        color: "secondary"
      },
      {
        year: "2010-2015",
        title: "Digital Transition",
        description: "Industry began adopting digital platforms, social media emerged as promotional tool",
        icon: TrendingUp,
        color: "primary"
      },
      {
        year: "2015-2020",
        title: "Influencer Revolution",
        description: "Rise of Marathi YouTubers and content creators transformed entertainment marketing landscape",
        icon: Users,
        color: "secondary"
      },
      {
        year: "2020-2024",
        title: "Integrated PR Era",
        description: "Modern entertainment PR combines traditional media, digital platforms, and experiential marketing",
        icon: Film,
        color: "primary"
      }
    ]
  };

  const tabs = [
    { id: "milestones", label: "Company Milestones", icon: Trophy },
    { id: "campaigns", label: "Major Campaigns", icon: Film },
    { id: "industry", label: "Industry Evolution", icon: TrendingUp }
  ];

  return (
    <section id="timeline" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Journey
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Interactive Timeline
          </h2>
          <div className="flex items-center justify-center gap-0 mb-8">
            <div className="h-0.5 w-12 bg-primary" />
            <div className="h-0.5 w-12 bg-secondary" />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {timelineData[activeTab].map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10" />

                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${item.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-6 h-6 ${item.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-semibold ${item.color === 'primary' ? 'text-primary' : 'text-secondary'} mb-2`}>
                          {item.year}
                        </div>
                        <h3 className="heading-display text-xl text-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year Badge for larger screens */}
                <div className="hidden md:block flex-shrink-0">
                  <div className={`px-4 py-2 ${item.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} text-sm font-bold`}>
                    {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;