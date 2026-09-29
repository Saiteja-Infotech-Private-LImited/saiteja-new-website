import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import companyLogo from "../assets/logo.png";
import { CONTACT_DETAILS } from "../data/contact";

const FOOTER_LINKS = {
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Careers", to: "/careers" },
    { label: "FAQ", to: "/faq" },
  ],

  Connect: [
    {
      label: "LinkedIn",
      href: CONTACT_DETAILS.social.linkedin,
      icon: FaLinkedinIn,
    },
    {
      label: "Instagram",
      href: CONTACT_DETAILS.social.instagram,
      icon: FaInstagram,
    },
    {
      label: "Facebook",
      href: CONTACT_DETAILS.social.facebook,
      icon: FaFacebookF,
    },
    {
      label: "YouTube",
      href: CONTACT_DETAILS.social.youtube,
      icon: FaYoutube,
    },
    {
      label: "Telegram",
      href: CONTACT_DETAILS.social.telegram,
      icon: FaTelegramPlane,
    },
  ],
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <Link
            className="brand footer-logo"
            to="/"
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

          <p>
            Technology, talent and digital solutions designed to help ambitious
            businesses move forward.
          </p>

          <a
            className="footer-contact-link"
            href={`mailto:${CONTACT_DETAILS.email}`}
          >
            <Mail size={16} />
            {CONTACT_DETAILS.email}
          </a>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="footer-column">
              <h3>{heading}</h3>

              {links.map((link) => {
                const Icon = link.icon;

                return link.to ? (
                  <Link key={link.label} to={link.to}>
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Icon && <Icon size={14} />}

                    {link.label}

                    <ArrowUpRight size={14} />
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        {/* CONTACT DETAILS */}
        <div className="footer-details">
          <h3>Get in touch</h3>

          <a href={`tel:${CONTACT_DETAILS.phone}`}>
            <Phone size={16} />
            {CONTACT_DETAILS.phoneDisplay}
          </a>

          <a
            href={CONTACT_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <a
            href={CONTACT_DETAILS.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            <MapPin size={16} />

            <span>{CONTACT_DETAILS.address}</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2025 SAITEJA INFOTECH PRIVATE LIMITED. All
          rights reserved.
        </span>

        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;