import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import companyLogo from "../assets/logo.png";
import { CONTACT_DETAILS } from "../data/contact";

import SectionHeading from "../components/SectionHeading";
import services from "../data/services";

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            Technology • Talent • Transformation
          </div>

          <h1>
            Building what's next
            <span> for ambitious businesses.</span>
          </h1>

          <p>
            SAITEJA INFOTECH PRIVATE LIMITED delivers technology, staffing, and
            digital solutions that help organizations move forward with
            confidence.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#services">
              Explore Services <ArrowRight size={18} />
            </a>

            <Link className="secondary-button" to="/contact">
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-logo-container">
            <img src={companyLogo} alt="" className="hero-company-logo" />
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES ROW — overlaps the hero, image-led cards */}
      <section className="featured-row-section">
        <div className="featured-row">
          {services.slice(0, 3).map(({ image, title, description }) => (
            <article className="featured-card" key={title}>
              <div className="featured-card-image">
                <img src={image} alt={title} />
              </div>

              <div className="featured-card-body">
                <h3>{title}</h3>
                <p>{description}</p>

                <Link to="/services" aria-label={`Learn more about ${title}`}>
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="stats-strip-inner">
          <div className="stat-item">
            <strong>10+</strong>
            <span>Years of Experience</span>
          </div>

          <div className="stat-item">
            <strong>150+</strong>
            <span>Projects Delivered</span>
          </div>

          <div className="stat-item">
            <strong>50+</strong>
            <span>Enterprise Clients</span>
          </div>

          <div className="stat-item">
            <strong>24/7</strong>
            <span>Support & Delivery</span>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="intro-section" id="about">
        <div className="section-label">WHO WE ARE</div>

        <div className="intro-grid">
          <h2>
            One partner.
            <br />
            <span>Multiple possibilities.</span>
          </h2>

          <div>
            <p>
              We combine technology, talent and business understanding to create
              solutions that are practical, scalable and built for real-world
              impact.
            </p>

            <Link className="text-link" to="/about">
              Discover SAITEJA INFOTECH PRIVATE LIMITED{" "}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <SectionHeading
          label="WHAT WE DO"
          title="Solutions built around"
          highlight=" your goals."
          description="From people and processes to technology and security, our capabilities are designed to work together."
        />

        <div className="services-grid">
          {services.map(({ image, number, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-image">
                <img src={image} alt={title} />

                <span className="service-image-number">{number}</span>
              </div>

              <div className="service-card-content">
                <h3>{title}</h3>

                <p>{description}</p>

                <Link to="/services" aria-label={`Learn more about ${title}`}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VISION / APPROACH */}
      <section className="vision-section">
        <div className="vision-box">
          <div>
            <div className="section-label">OUR APPROACH</div>

            <h2>
              Technology should
              <span> create momentum.</span>
            </h2>
          </div>

          <p>
            We believe the best solutions are not simply impressive — they solve
            problems, empower people and create measurable progress for the
            organizations behind them.
          </p>

          <div className="vision-tags">
            {services.slice(0, 3).map(({ title }) => (
              <span key={title}>{title}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS PREVIEW */}
      <section className="careers-section" id="careers">
        <div className="careers-content">
          <div className="section-label">JOIN THE JOURNEY</div>

          <h2>
            Your next opportunity
            <span> could start here.</span>
          </h2>

          <p>
            Work with people who are building technology, solving problems and
            shaping what comes next.
          </p>

          <Link className="primary-button" to="/careers">
            Explore Careers <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-section" id="contact">
        <div className="contact-card">
          <div>
            <div className="section-label">LET'S CONNECT</div>

            <h2>Have a challenge?</h2>

            <p>
              Let's talk about how SAITEJA INFOTECH PRIVATE LIMITED can help
              turn your next idea into something real.
            </p>
          </div>

          <a
            className="primary-button"
            href={`mailto:${CONTACT_DETAILS.email}`}
          >
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;