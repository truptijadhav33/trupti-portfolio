export const Footer = () => {
  return (
    <footer id="footer" className="bg-[var(--color-bg)] text-[var(--color-dark)] py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center space-y-4 md:space-y-8">
        {/* Navigation links */}
        <div className="flex space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-[var(--color-light)] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[var(--color-light)] transition">
            About
          </a>
          <a href="#projects" className="hover:text-[var(--color-light)] transition">
            Projects
          </a>
          <a
            href="Resume.pdf"
            target="_blank"
            className="hover:text-[var(--color-light)] transition"
          >
            Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="flex space-x-4 text-lg">
          <a href="#" className="hover:text-[var(--color-light)] transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-[var(--color-light)] transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/jadhavtrupti/" target="_blank" className="hover:text-[var(--color-light)] transition">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/truptijadhav33" target="_blank" className="hover:text-[var(--color-light)] transition">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-[var(--color-dark)]/60 mt-6">
        © 2025 Trupti Jadhav
      </p>
    </footer>
  );
};
