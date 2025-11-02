import { RevealOnScroll } from "../RevealOnScroll";

const technicalSkills = {
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MySQL", "MongoDB"],
  Languages: ["C", "C++", "Python", "Java", "JavaScript"],
  Tools: ["Git", "GitHub", "VS Code"],
};

const aboutCards = [
  {
    title: "Education",
    icon: "fa-solid fa-user-graduate",
    items: [
      { title: "BE in Computer Engineering", desc: "" },
      { title: "Diploma in Computer Engineering", desc: "" },
    ],
  },
  {
    title: "Work Experience",
    icon: "fa-solid fa-briefcase",
    items: [{ title: "Personal Projects", desc: "" }],
  },
  {
    title: "Certifications",
    icon: "fa-solid fa-medal",
    items: [
      {
        title: "JLPT N5 (Japanese Language Proficiency Test)",
        desc: "Japan Foundation & JEES — 2025",
      },
    ],
  },
];

const Card = ({ title, icon, items }) => (
  <RevealOnScroll animation="animate-fade-up">
    <div className="p-5 sm:p-6 rounded-2xl border border-[var(--color-light)]/40 bg-white hover:-translate-y-1 transition-all shadow-sm flex flex-col h-full">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2 text-[var(--color-dark)]">
        {icon && (
          <i
            className={`${icon} bg-gradient-to-tl from-[var(--color-dark)] to-[var(--color-light)] bg-clip-text text-transparent text-xl sm:text-2xl`}
          ></i>
        )}
        {title}
      </h3>
      <div className="space-y-4 text-[var(--color-dark)]/80">
        {items.map((item, idx) => (
          <div key={idx}>
            <h4 className="font-medium text-base">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </RevealOnScroll>
);

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 bg-[var(--color-bg)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Heading */}
        <RevealOnScroll animation="animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[var(--color-dark)]">
            About Me
          </h2>
        </RevealOnScroll>

        {/* Intro / Summary */}
        <RevealOnScroll animation="animate-scale-up">
          <div className="rounded-2xl p-6 sm:p-10 md:p-14 border border-[var(--color-light)]/40 bg-white hover:-translate-y-1 transition-all shadow-md space-y-8">
            <p className="leading-relaxed text-justify text-base sm:text-lg md:text-xl">
              Hello! I&apos;m{" "}
              <span className="font-semibold text-[var(--color-dark)]">
                Trupti Jadhav
              </span>
              , a dedicated and passionate Computer Engineering student. I
              completed my diploma in Computer Engineering, honing my skills in
              software and web development. Currently pursuing my
              bachelor&apos;s degree, I’m eager to contribute to innovative
              projects and continue growing as a developer. 🚀
            </p>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 shadow-md">
                <img
                  src="https://res.cloudinary.com/dmtucqd9i/image/upload/v1762066683/eiu1rotz1leosv0y3xgm.jpg"
                  alt="Trupti's Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {aboutCards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>

        {/* Technical Skills Section */}
        <RevealOnScroll animation="animate-fade-up">
          <div className="rounded-2xl p-6 sm:p-8 md:p-10 border border-[var(--color-light)]/40 bg-white hover:-translate-y-1 transition-all shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--color-dark)] flex items-center justify-center gap-2">
              <i className="fa-solid fa-code text-2xl sm:text-3xl bg-gradient-to-tl from-[var(--color-dark)] to-[var(--color-light)] bg-clip-text text-transparent"></i>
              Technical Skills
            </h3>

            <p className="text-[var(--color-dark)]/80 text-center mb-6 sm:mb-10 text-sm sm:text-base">
              Here are some of the technologies and tools I’ve been working with
              recently and continuously improving.
            </p>

            {/* Grid of Skill Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div
                  key={category}
                  className="p-5 sm:p-6 rounded-xl border border-[var(--color-light)]/40 bg-[var(--color-bg)]/30 hover:bg-white hover:shadow-md transition-all"
                >
                  <h4 className="font-semibold mb-3 text-[var(--color-dark)] flex items-center gap-2 text-base sm:text-lg">
                    {category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-[var(--color-light)]/10 text-[var(--color-dark)] py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-[var(--color-light)]/20 transition shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
