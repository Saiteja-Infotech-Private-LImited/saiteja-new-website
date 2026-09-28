import { ArrowRight, Award, Eye, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

const milestones = [
  {
    year: "01",
    title: "The Beginning",
    description:
      "Saiteja Infotech Private Limited began with a vision to bring people, technology and business opportunities closer together.",
  },
  {
    year: "02",
    title: "Growing Capabilities",
    description:
      "Our capabilities expanded across staffing, technology, training and digital solutions.",
  },
  {
    year: "03",
    title: "Building Partnerships",
    description:
      "We continue to build relationships with organizations and professionals to create meaningful opportunities.",
  },
  {
    year: "04",
    title: "Looking Ahead",
    description:
      "Our focus remains on creating practical solutions that help businesses and people move forward.",
  },
];

function About() {
  return (
    <main className="about-page">
      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="section-label">
            ABOUT SAITEJA INFOTECH PRIVATE LIMITED
          </div>

          <h1>
            People, technology,
            <span> and possibilities.</span>
          </h1>

          <p>
            Saiteja Infotech Private Limited brings together technology, talent
            and business understanding to help organizations solve problems and
            create new opportunities.
          </p>
        </div>
      </section>

      {/* QUICK FACTS — overlaps hero, mirrors the homepage's featured row */}
      <section className="about-facts-section">
        <div className="about-facts-row">
          <div className="about-fact">
            <Target size={22} />
            <h3>Our Mission</h3>
            <p>Practical technology, talent and business solutions that
              create measurable value.</p>
          </div>

          <div className="about-fact">
            <Eye size={22} />
            <h3>Our Vision</h3>
            <p>A trusted partner for organizations growing through
              technology, people and innovation.</p>
          </div>

          <div className="about-fact">
            <Award size={22} />
            <h3>Our Approach</h3>
            <p>Practical, scalable solutions built around real challenges,
              not just what's trending.</p>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="about-profile">
        <div className="section-label">WHO WE ARE</div>

        <div className="about-profile-grid">
          <h2>
            More than a service provider.
            <span> A partner for progress.</span>
          </h2>

          <div className="about-profile-copy">
            <p>
              We work at the intersection of people, technology and business.
              Our approach is centered around understanding real challenges and
              creating solutions that are practical, scalable and useful.
            </p>

            <p>
              From connecting organizations with talent to enabling digital
              transformation, we aim to make every engagement meaningful and
              outcome-driven.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="section-label">LEADERSHIP</div>

        <div className="leadership-grid">
          <div className="leadership-photo">
            <div className="leadership-placeholder">
              <Users size={44} />
              <span>Leadership Profile</span>
            </div>
          </div>

          <div className="leadership-content">
            <span className="leadership-role">
              CHIEF EXECUTIVE OFFICER
            </span>

            <h2>
              Vision that turns
              <span> possibilities into progress.</span>
            </h2>

            <p>
              Our leadership is focused on building a culture where technology,
              people and business work together to create sustainable growth.
            </p>

            <p>
              The CEO profile and professional message can be expanded here with
              the approved photograph, name and biography once provided by the
              company.
            </p>

            <Link className="text-link" to="/contact">
              Connect with our team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <SectionHeading
          label="OUR JOURNEY"
          title="Growing with"
          highlight=" purpose."
          description="A growing story shaped by people, partnerships and a commitment to creating better solutions."
        />

        <div className="timeline">
          {milestones.map((milestone, index) => (
            <article className="timeline-item" key={milestone.year}>
              <div className="timeline-marker">
                <span>{milestone.year}</span>
              </div>

              <div className="timeline-content">
                <span>0{index + 1}</span>

                <h3>{milestone.title}</h3>

                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <div className="section-label">LET'S BUILD TOGETHER</div>

          <h2>
            Have a vision?
            <span> Let's move it forward.</span>
          </h2>

          <p>
            Explore how Saiteja Infotech Private Limited can support your
            organization's next opportunity.
          </p>
        </div>

        <Button to="/contact">Start a Conversation</Button>
      </section>
    </main>
  );
}

export default About;