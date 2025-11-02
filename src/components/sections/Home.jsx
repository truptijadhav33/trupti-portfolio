import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-[var(--color-dark)] overflow-hidden px-4 md:px-8"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: "#F2F2F2", // brand.bg
          backgroundImage: `
      linear-gradient(to right, rgba(0,48,73,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,48,73,0.1) 1px, transparent 1px)
    `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Profile Image */}
      <RevealOnScroll animation="animate-fade-up">
        <div className="relative mt-12 mb-6">
          <img
            src="https://res.cloudinary.com/dmtucqd9i/image/upload/v1762067120/eg2ovs9ojm1oqzcziz4p.jpg"
            alt="Trupti Jadhav"
            className="w-48 h-48 md:w-52 md:h-52 object-cover rounded-full shadow-lg mx-auto"
          />
        </div>
      </RevealOnScroll>

      {/* Text Content */}
      <div className="relative z-10 max-w-xl text-center">
        <RevealOnScroll animation="animate-fade-up">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-[var(--color-dark)]">
            Trupti Jadhav
          </h1>
        </RevealOnScroll>

        <RevealOnScroll animation="animate-scale-up">
          <p className="text-[var(--color-light)] text-lg mb-8">
            I’m a full-stack developer passionate about crafting scalable,
            elegant web experiences.
          </p>
        </RevealOnScroll>

        <div className="flex justify-center space-x-4">
          <a
            href="Resume.pdf"
            target="_blank"
            className="bg-[var(--color-light)] text-white py-3 px-8 rounded-3xl font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="border border-[var(--color-light)] text-[var(--color-light)] py-3 px-8 rounded-3xl font-medium transition-transform transform hover:-translate-y-1 hover:bg-[var(--color-light)]/10 duration-300"
          >
            View Projects
          </a>
        </div>

        {/* Social icons */}
        <div className="flex space-x-4 justify-center mt-8 text-[var(--color-dark)]">
          <a href="https://github.com/truptijadhav33" target="_blank" className="hover:text-[var(--color-light)] transition">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/jadhavtrupti/" target="_blank" className="hover:text-[var(--color-light)] transition">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
