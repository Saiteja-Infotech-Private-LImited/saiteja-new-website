function BrandingDigital() {
  return (
    <>
      <main className="services-page">

        {/* HERO SECTION */}
        <section className="services-hero">
          <div className="section-label">BRANDING & DIGITAL</div>

          <h1>
            Building brands
            <span> that connect and inspire.</span>
          </h1>

          <p>
            Creative and digital solutions that help organizations communicate
            their identity and reach their audience.
          </p>
        </section>


        {/* INTRODUCTION */}
        <section className="services-list-section">
          <div className="services-intro">

            <div className="section-label">
              BRANDING & DIGITAL SOLUTIONS
            </div>

            <h2>
              Strong identity.
              <span> Meaningful digital presence.</span>
            </h2>

            <p>
              We help organizations build a consistent brand identity and
              strengthen their digital presence through creative and
              purposeful digital solutions aligned with their business goals.
            </p>

          </div>
        </section>


        {/* DETAILED CONTENT */}
        <section className="branding-details-section">
          <div className="branding-details-container">

            <div className="branding-detail-content">
              <h3>Brand Identity</h3>

              <p>
                A strong brand identity helps organizations communicate who
                they are and what they represent. We support businesses in
                developing clear and consistent brand communication aligned
                with their values, objectives, and audience.
              </p>
            </div>


            <div className="branding-detail-content">
              <h3>Digital Presence</h3>

              <p>
                A professional digital presence helps organizations connect
                with customers, partners, and audiences. We create digital
                approaches that communicate information clearly and support
                an organization's online visibility.
              </p>
            </div>


            <div className="branding-detail-content">
              <h3>Creative Solutions</h3>

              <p>
                We combine creative thinking with digital approaches to
                develop communication materials that represent an
                organization's identity. Our focus is on creating clear,
                engaging, and consistent brand experiences.
              </p>
            </div>


            <div className="branding-detail-content">
              <h3>Digital Communication</h3>

              <p>
                Effective digital communication allows organizations to reach
                their audiences through the right channels. We help businesses
                present their information in a structured and engaging way
                that supports their communication goals.
              </p>
            </div>


            <div className="branding-detail-content">
              <h3>Building Long-Term Brand Value</h3>

              <p>
                A consistent brand and strong digital presence can help
                organizations build recognition and meaningful connections
                with their audiences. We support businesses in creating
                digital experiences that contribute to their long-term
                growth and communication objectives.
              </p>
            </div>

          </div>
        </section>

      </main>


      {/* PAGE-SPECIFIC STYLING */}
      <style>{`

        .branding-details-section {
          width: 100%;
          background: #f7f8fc;
          padding: 30px 40px 110px;
        }

        .branding-details-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .branding-detail-content {
          max-width: 1000px;
          margin: 0 auto 55px;
        }

        .branding-detail-content:last-child {
          margin-bottom: 0;
        }

        .branding-detail-content h3 {
          font-size: 28px;
          line-height: 1.3;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px;
        }

        .branding-detail-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #53627a;
          margin: 0;
        }


        @media (max-width: 900px) {

          .branding-details-section {
            padding: 25px 30px 90px;
          }

          .branding-detail-content h3 {
            font-size: 26px;
          }

          .branding-detail-content p {
            font-size: 16px;
          }

        }


        @media (max-width: 600px) {

          .branding-details-section {
            padding: 20px 20px 70px;
          }

          .branding-detail-content {
            margin-bottom: 40px;
          }

          .branding-detail-content h3 {
            font-size: 23px;
          }

          .branding-detail-content p {
            font-size: 16px;
            line-height: 1.7;
          }

        }

      `}</style>
    </>
  );
}

export default BrandingDigital;