import { useState, useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Detect scroll to add background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <ul
        className={`nav-backdrop max-w-full mx-auto flex justify-center items-center h-16 px-6 md:px-8 font-medium transition-all duration-300 ${
          scrolled
            ? "bg-brand.bg/90 shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Desktop Links */}
        <li className="hidden md:flex space-x-8 text-[var(--color-dark)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--color-light)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </li>

        {/* Hamburger Button */}
        <li className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none text-[var(--color-dark)]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </li>
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-5 py-6 bg-brand.bg/90 backdrop-blur-md shadow-md text-[var(--color-dark)] font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[var(--color-light)] transition-colors text-lg"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
