import { CheckCircle2 } from "lucide-react";

import Button from "../components/Button";
import websiteImage from "../assets/services/ai-data-solutions.jpg";

const offerings = [
  {
    title: "Responsive Website Design",
    description:
      "We design responsive websites that adapt to different screen sizes and provide consistent experiences across desktops, tablets and mobile devices.",
  },
  {
    title: "User-Friendly Interfaces",
    description:
      "We create intuitive website interfaces that make navigation simple and help visitors find the information they need.",
  },
  {
    title: "Business Website Development",
    description:
      "We develop professional websites that showcase your business, services and offerings while strengthening your online presence.",
  },
  {
    title: "Website Optimization",
    description:
      "We focus on website performance, usability and accessibility to provide smooth and reliable browsing experiences.",
  },
];

const benefits = [
  "Stronger online business presence",
  "Responsive experiences across devices",
  "Easy navigation and user-friendly design",
  "Improved website performance and usability",
];

export default function WebsiteDevelopment() {
  return (
    <main className="service-detail-page">

      <section className="service-detail-hero">

        <h1>Website Development</h1>

        <p>
          Creating responsive and user-friendly websites
          that strengthen your digital presence.
        </p>

        <Button to="/contact">Enquire Now</Button>
      </section>

      <section className="service-detail-intro">

        <img
          src={websiteImage}
          alt="Website Development"
        />

        <div>
          <div className="section-label">OVERVIEW</div>

          <h2>Websites designed for your business</h2>

          <p>
            We design and develop responsive, user-friendly
            websites that strengthen your online presence
            and provide seamless experiences across devices.
            Our focus is on creating professional websites
            that help businesses connect with their audiences
            and communicate their services effectively.
          </p>
        </div>
      </section>

      <section className="service-detail-information">

        <div className="service-detail-container">

          <div className="section-label">WHAT WE OFFER</div>

          <h2>Our Website Development Services</h2>

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

          <h2>Benefits of Website Development</h2>

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

        <h2>Ready to build your website?</h2>

        <p>
          Share your website requirements with our team
          and let's create your digital presence.
        </p>

        <Button to="/contact">Contact Us</Button>

      </section>

    </main>
  );
}