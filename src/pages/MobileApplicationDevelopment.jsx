
import { CheckCircle2 } from "lucide-react";

import Button from "../components/Button";
import mobileImage from "../assets/services/hr-staffing.png";

const offerings = [
  {
    title: "Android Application Development",
    description:
      "We build intuitive Android applications designed to meet business requirements and provide smooth experiences for users.",
  },
  {
    title: "iOS Application Development",
    description:
      "We develop user-friendly iOS applications that help businesses connect with customers through Apple mobile devices.",
  },
  {
    title: "Custom Mobile Applications",
    description:
      "We create customized mobile applications tailored to specific business needs, workflows and customer requirements.",
  },
  {
    title: "Mobile App Integration",
    description:
      "We integrate mobile applications with business systems and services to simplify operations and improve connectivity.",
  },
];

const benefits = [
  "Better customer engagement",
  "Convenient access to business services",
  "Scalable and intuitive applications",
  "Simplified everyday business operations",
];

export default function MobileApplicationDevelopment() {
  return (
    <main className="service-detail-page">

      <section className="service-detail-hero">

        <h1>Mobile Application Development</h1>

        <p>
          Building intuitive and scalable mobile applications
          that connect businesses with their customers.
        </p>

        <Button to="/contact">Enquire Now</Button>

      </section>

      <section className="service-detail-intro">

        <img
          src={mobileImage}
          alt="Mobile Application Development"
        />

        <div>

          <div className="section-label">OVERVIEW</div>

          <h2>Mobile experiences built for your business</h2>

          <p>
            We build scalable and intuitive mobile applications
            that help businesses connect with customers and
            simplify everyday operations. Our focus is on
            developing user-friendly mobile solutions that
            support business requirements and improve
            customer experiences.
          </p>

        </div>

      </section>

      <section className="service-detail-information">

        <div className="service-detail-container">

          <div className="section-label">WHAT WE OFFER</div>

          <h2>Our Mobile Application Development Services</h2>

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

          <h2>Benefits of Mobile Application Development</h2>

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

        <h2>Have a mobile app idea?</h2>

        <p>
          Share your application requirements with our team
          and let's discuss the right solution.
        </p>

        <Button to="/contact">Contact Us</Button>

      </section>

    </main>
  );
}
