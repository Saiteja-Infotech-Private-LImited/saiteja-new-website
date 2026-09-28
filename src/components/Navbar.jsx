import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import companyLogo from "../assets/logo.png";
import Button from "./Button";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <Link
        className="brand"
        to="/"
        onClick={closeMenu}
        aria-label="SAITEJA INFOTECH PRIVATE LIMITED Home"
      >
        <img
          src={companyLogo}
          alt="SAITEJA INFOTECH PRIVATE LIMITED"
          className="brand-logo-image"
        />

        <span className="brand-name">
          SAITEJA INFOTECH
          <small>PRIVATE LIMITED</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {NAV_LINKS.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Button to="/quotation">
        Get In Touch
      </Button>

      <button
        type="button"
        className="menu-toggle"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link key={link.to} to={link.to} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}

        <Button
          to="/quotation"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Get In Touch
        </Button>
      </div>
    </header>
  );
}

export default Navbar;