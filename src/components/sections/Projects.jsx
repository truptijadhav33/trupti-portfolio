import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Cloud Platform",
      tech: ["React", "Node.js", "AWS", "Docker"],
      link: "https://github.com/truptijadhav33",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    {
      title: "E-Commerce Web App",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/truptijadhav33",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=815",
    },
    {
      title: "Other Projects",
      tech: ["Express", "React"],
      link: "https://github.com/truptijadhav33",
      image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-14 bg-[var(--color-bg)]"
    >
      <div className="mx-auto px-4">
        {/* Heading */}
        <RevealOnScroll animation="animate-fade-up">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-light)] bg-clip-text text-transparent text-center">
            Projects
          </h2>
        </RevealOnScroll>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll
              key={index}
              animation="animate-fade-up"
              className="transition-all"
              style={{ transitionDelay: `${index * 150}ms` }} // stagger effect
            >
              <div className="p-6 rounded-xl border border-brand.light/40 hover:-translate-y-1 hover:shadow-md transition-all h-96 flex flex-col justify-between bg-white">
                <div>
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-light)] bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <RevealOnScroll key={tech} animation="animate-scale-up">
                        <span className="bg-brand.light/10 text-[var(--color-dark)] py-1 px-3 rounded-full text-sm hover:bg-brand.light/20 transition shadow-sm">
                          {tech}
                        </span>
                      </RevealOnScroll>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-[var(--color-light)] hover:text-[var(--color-dark)] transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
