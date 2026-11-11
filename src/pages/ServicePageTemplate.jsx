
import { CheckCircle2 } from "lucide-react";
import Button from "../components/Button";

export default function ServicePageTemplate({
  title,
  subtitle,
  image,
  overviewTitle,
  overview,
  offerings,
  benefits,
}) {
  return (
    <main className="service-detail-page">

      <section className="service-detail-hero">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Button to="/contact">Enquire Now</Button>
      </section>

      <section className="service-detail-intro">
        <img src={image} alt={title} />

        <div>
          <div className="section-label">OVERVIEW</div>
          <h2>{overviewTitle}</h2>
          <p>{overview}</p>
        </div>
      </section>

      <section className="service-detail-information">
        <div className="service-detail-container">
          <div className="section-label">WHAT WE OFFER</div>
          <h2>Our {title} Services</h2>

          <div className="service-detail-sections-grid">
            {offerings.map((item, index) => (
              <article className="service-info-card" key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-benefits">
        <div className="service-detail-container">
          <div className="section-label">WHY CHOOSE US</div>
          <h2>Benefits of {title}</h2>

          <div className="service-benefits-grid">
            {benefits.map((benefit) => (
              <div className="service-benefit-item" key={benefit}>
                <CheckCircle2 />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <h2>Looking for {title}?</h2>
        <p>
          Share your business requirements with our team
          and let's discuss the right solution.
        </p>
        <Button to="/contact">Contact Us</Button>
      </section>

    </main>
  );
}
