import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import services from "../data/services";

function Services() {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="section-label">OUR SERVICES</div>

        <h1>
          Capabilities built
          <span> around your goals.</span>
        </h1>

        <p>
          From people and technology to branding and training, we bring
          complementary capabilities together to help organizations move
          forward.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services-list-section">
        <div className="services-intro">
          <SectionHeading
            label="WHAT WE DO"
            title="One ecosystem."
            highlight=" Multiple capabilities."
          />
        </div>

        <div className="services-detail-grid">
          {services.map(({ image, number, title, description }) => (
            <article className="service-detail-card" key={title}>
              <div className="service-detail-image">
                <img src={image} alt={title} />

                <span className="service-detail-number">{number}</span>
              </div>

              <div className="service-detail-content">
                <h3>{title}</h3>

                <p>{description}</p>

                <Link
                  to={
                    title === "HR & Staffing"
                      ? "/services/hr-staffing"
                      : title === "IT Solutions"
                      ? "/services/it-solutions"
                      : title === "AI & Data Solutions"
                      ? "/services/ai-data-solutions"
                      : title === "Branding & Digital"
                      ? "/services/branding-digital"
                      : title === "Training & Development"
                      ? "/services/training-development"
                      : title === "Recruitment"
                      ? "/services/recruitment"
                      : "/contact"
                  }
                >
                  Learn more
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div>
          <div className="section-label">NEED A SOLUTION?</div>

          <h2>
            Let's understand
            <span> your challenge.</span>
          </h2>

          <p>
            Tell us what you're trying to achieve and let's explore the right
            approach together.
          </p>
        </div>

        <Button to="/contact">Start a Conversation</Button>
      </section>
    </main>
  );
}

export default Services;
