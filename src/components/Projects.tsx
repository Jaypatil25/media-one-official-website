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
    { id: 1, title: "Jabrat", year: "2026", type: "movie", image: "https://updatenownews.com/wp-content/uploads/2025/08/marathi-movie.jpg" },
    { id: 2, title: "Ranapati Shivray Swari Agra", year: "2026", type: "movie", image: "https://cdn.district.in/movies-assets/images/cinema/_Poster%20(2)-431a3b70-eadd-11f0-a6e4-8561ba1a7e47.jpg" },
    { id: 3, title: "Case No. 73", year: "2026", type: "movie", image: "https://updatenownews.com/wp-content/uploads/2025/12/case.jpg" },
    { id: 4, title: "Taath Kana", year: "2025", type: "movie", image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tath-kana-et00336599-1762150091.jpg" },
    { id: 5, title: "Abhanga Tukaram", year: "2025", type: "movie", image: "https://cdn.district.in/movies-assets/images/cinema/Abhanga-Tukaram_Poster-462f6f00-a281-11f0-bc10-53b4fd296cbf.jpg" },
    { id: 6, title: "Aatli Batli Phutli", year: "2025", type: "movie", image: "https://m.media-amazon.com/images/M/MV5BODAwM2Y2ZWItOTE2ZS00NjI1LWIxMjItNTczMjg3OWMyOTIxXkEyXkFqcGc@._V1_.jpg" },
    { id: 7, title: "Sant Dnyaneshwaranchi Muktaai", year: "2025", type: "movie", image: "https://m.media-amazon.com/images/M/MV5BMzA5NDBmOTQtOWJlOC00NmE0LWI1YWYtNmE4NDQxODUyNDRjXkEyXkFqcGc@._V1_.jpg" },
    { id: 8, title: "Gharat Ganpati", year: "2024", type: "movie", image: "https://m.media-amazon.com/images/M/MV5BN2Q5MzBjYWItNTg3ZC00M2UxLTkxZDItYTUyNDgyMTg1YmQwXkEyXkFqcGc@._V1_.jpg" },
    ,
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
    <section id="projects" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-16 right-16 text-primary text-7xl transform rotate-12">🎬</div>
        <div className="absolute bottom-16 left-16 text-secondary text-6xl transform -rotate-12">🎥</div>
        <div className="absolute top-1/2 left-1/4 text-primary text-5xl transform rotate-30">🎭</div>
        <div className="absolute bottom-1/3 right-1/3 text-secondary text-4xl transform -rotate-45">🎪</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[3/4] bg-secondary overflow-hidden cursor-pointer"
            >
              {/* Project image */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/60 flex items-center justify-center">
                  <span className="heading-display text-4xl text-secondary-foreground/30">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

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
        
        {/* Many More Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
            <span className="text-2xl"></span>
            <span className="text-lg font-semibold text-foreground">& Many More...</span>
            <span className="text-2xl"></span>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            Over 50+ successful campaigns across movies, shows, and events
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
