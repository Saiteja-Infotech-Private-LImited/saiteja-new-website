
import { CheckCircle2 } from "lucide-react";

import Button from "../components/Button";
import softwareImage from "../assets/services/it-solutions.jpg";

const offerings = [
  {
    title: "Customized Software Solutions",
    description:
      "Software applications developed according to your specific business requirements, goals and workflows.",
  },
  {
    title: "Business Process Automation",
    description:
      "Automate repetitive tasks and business processes to improve productivity and reduce manual effort.",
  },
  {
    title: "Scalable Software Applications",
    description:
      "Flexible software solutions designed to support your business as it grows and evolves.",
  },
  {
    title: "Software Integration",
    description:
      "Connect your software applications and business systems to improve data flow and operational efficiency.",
  },
];

const benefits = [
  "Solutions tailored to business requirements",
  "Improved operational efficiency",
  "Reduced manual work through automation",
  "Scalable and flexible software solutions",
];

export default function CustomSoftwareDevelopment() {
  return (
    <main className="service-detail-page">

      <section className="service-detail-hero">

        <h1>Custom Software Development</h1>

        <p>
          Building customized software solutions to
          solve business challenges and support growth.
        </p>

        <Button to="/contact">Enquire Now</Button>

      </section>

      <section className="service-detail-intro">

        <img
          src={softwareImage}
          alt="Custom Software Development"
        />

        <div>

          <div className="section-label">OVERVIEW</div>

          <h2>Software designed around your business</h2>

          <p>
            We develop customized software applications
            designed to address business challenges,
            improve operational efficiency, and support
            business growth. Our solutions are designed
            around your business requirements and
            operational needs.
          </p>

        </div>

      </section>

      <section className="service-detail-information">

        <div className="service-detail-container">

          <div className="section-label">WHAT WE OFFER</div>

          <h2>Our Custom Software Development Services</h2>

          <div className="service-detail-sections-grid">

            {offerings.map((item, index) => (
              <article
                className="service-info-card"
                key={item.title}
              >
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

          <div className="section-label">
            WHY CHOOSE US
          </div>

          <h2>Benefits of Custom Software Development</h2>

          <div className="service-benefits-grid">

            {benefits.map((benefit) => (
              <div
                className="service-benefit-item"
                key={benefit}
              >
                <CheckCircle2 />
                <span>{benefit}</span>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="service-detail-cta">

        <h2>Have a software project in mind?</h2>

        <p>
          Tell us about your business requirements
          and let's discuss the right software solution.
        </p>

        <Button to="/contact">Contact Us</Button>

      </section>

    </main>
  );
}
