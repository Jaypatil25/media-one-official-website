import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/media-one-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#our-story", label: "Our Story" },
    { href: "#services", label: "Services" },
    { href: "#partners", label: "Partners" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center smooth-hover">
            <img src={logo} alt="Media One" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 ease-out text-sm font-medium tracking-wide uppercase animate-underline"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5"
            >
              Work With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground transition-all duration-300 ease-out hover:bg-primary/10 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 ease-out text-sm font-medium tracking-wide uppercase text-left py-2 hover:bg-primary/5 rounded-md px-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 ease-out mt-2 hover:shadow-lg"
              >
                Work With Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
