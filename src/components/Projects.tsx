import { useState } from "react";

type ProjectType = "all" | "movie" | "show" | "event";

interface Project {
  id: number;
  title: string;
  year: string;
  type: "movie" | "show" | "event";
  image: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");

  const projects: Project[] = [
    { id: 1, title: "Marathi Blockbuster", year: "2024", type: "movie", image: "" },
    { id: 2, title: "Drama Premiere", year: "2024", type: "show", image: "" },
    { id: 3, title: "Award Night", year: "2024", type: "event", image: "" },
    { id: 4, title: "Regional Hit Film", year: "2023", type: "movie", image: "" },
    { id: 5, title: "TV Series Launch", year: "2023", type: "show", image: "" },
    { id: 6, title: "Music Festival", year: "2023", type: "event", image: "" },
    { id: 7, title: "Indie Film", year: "2023", type: "movie", image: "" },
    { id: 8, title: "Web Series", year: "2024", type: "show", image: "" },
  ];

  const filters: { value: ProjectType; label: string }[] = [
    { value: "all", label: "All" },
    { value: "movie", label: "Movies" },
    { value: "show", label: "Shows" },
    { value: "event", label: "Events" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "movie":
        return "Film";
      case "show":
        return "Show";
      case "event":
        return "Event";
      default:
        return type;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Projects We've Promoted
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-0">
              <div className="h-0.5 w-12 bg-primary" />
              <div className="h-0.5 w-12 bg-secondary" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[3/4] bg-secondary overflow-hidden cursor-pointer"
            >
              {/* Placeholder for project image */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/60 flex items-center justify-center">
                <span className="heading-display text-4xl text-secondary-foreground/30">
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-primary-foreground p-6">
                <h3 className="heading-display text-xl text-center mb-2">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80">{project.year}</p>
                <span className="mt-4 px-4 py-1.5 border border-primary-foreground text-xs uppercase tracking-wider">
                  {getTypeLabel(project.type)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
