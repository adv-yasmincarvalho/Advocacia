import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // 🔥 função central que resolve seu problema
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("#inicio");
          }}
          className="font-display text-xl tracking-wide text-primary font-semibold"
        >
          YC
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="text-sm font-body tracking-wide text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2 -mr-2"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100 border-t border-border"
            : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-md`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4 w-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="text-base font-body text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
