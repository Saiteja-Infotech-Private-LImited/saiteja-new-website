import { ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import cultureImage from '../assets/services/training-development.png'

const opportunities = [
  {
    type: 'Technology',
    title: 'Explore Technology Opportunities',
    description:
      'Build your skills and work on technology-focused opportunities with growing organizations.',
  },
  {
    type: 'People & Business',
    title: 'Explore Business Opportunities',
    description:
      'Discover opportunities across recruitment, HR, business development and related functions.',
  },
  {
    type: 'Internships',
    title: 'Start Your Career Journey',
    description:
      'Gain practical experience, develop professional skills and learn by working with real teams.',
  },
]

const benefits = [
  'Meaningful professional opportunities',
  'Learning and skill development',
  'Collaborative working environment',
  'Exposure to real-world challenges',
]

function Careers() {
  return (
    <main className="careers-page">
      {/* HERO */}
      <section className="careers-hero">
        <div className="section-label">CAREERS</div>

        <h1>
          Build your next chapter
          <span> with us.</span>
        </h1>

        <p>
          We believe great organizations are built by great people. Explore
          opportunities to learn, contribute and grow.
        </p>

        <Button href="#opportunities">
          Explore Opportunities
        </Button>
      </section>

      {/* OPPORTUNITIES */}
      <section
        className="opportunities-section"
        id="opportunities"
      >
        <SectionHeading
          label="OPPORTUNITIES"
          title="Find where"
          highlight=" you fit in."
          description="Our opportunities will evolve as our organization and partner network continues to grow."
        />

        <div className="opportunities-grid">
          {opportunities.map((opportunity) => (
            <article
              className="opportunity-card"
              key={opportunity.title}
            >
              <div className="opportunity-icon">
                <Briefcase size={24} />
              </div>

              <span>{opportunity.type}</span>

              <h3>{opportunity.title}</h3>

              <p>{opportunity.description}</p>

              <Link to="/contact">
                Apply / Enquire <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CULTURE */}
      <section className="career-culture">
        <div className="career-culture-visual">
          <img
            src={cultureImage}
            alt="Learning and growth at Saiteja Infotech"
            loading="lazy"
          />
        </div>

        <div className="career-culture-content">
          <div className="section-label">OUR CULTURE</div>

          <h2>
            Grow with people
            <span> who want to build.</span>
          </h2>

          <p>
            We aim to create an environment where people can learn, take
            responsibility and contribute to meaningful work.
          </p>

          <div className="benefits-list">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <CheckCircle2 size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="careers-cta">
        <div>
          <div className="section-label">DON'T SEE YOUR ROLE?</div>

          <h2>
            Your opportunity
            <span> may still be ahead.</span>
          </h2>

          <p>
            Send us your profile and tell us where you can make an impact.
          </p>
        </div>

        <Button to="/contact">
          Get in Touch
        </Button>
      </section>
    </main>
  )
}

export default Careers