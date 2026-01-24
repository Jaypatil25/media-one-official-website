import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/media-one-logo.jpg";

const Footer = () => {
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#our-story", label: "Our Story" },
    { href: "#timeline", label: "Timeline" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-background border-t-2 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Media One" className="h-12 w-auto mb-6" />
            <p className="text-muted-foreground max-w-md mb-6">
              Media One is a leading entertainment PR agency specializing in 
              movie promotions, digital PR, drama promotions, and event media 
              coverage across the Marathi entertainment industry.
            </p>
            <div className="flex items-center gap-0">
              <div className="h-0.5 w-12 bg-primary" />
              <div className="h-0.5 w-12 bg-secondary" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-display text-lg text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-display text-lg text-foreground mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">mediaone@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">+91 00000 00000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Media One. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Entertainment PR | Movie Promotion | Drama | Events
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
