function ITSolutions() {
  return (
    <>
      <main className="services-page">

        {/* HERO SECTION */}
        <section className="services-hero">
          <div className="section-label">IT SOLUTIONS</div>

          <h1>
            Technology that
            <span> drives business forward.</span>
          </h1>

          <p>
            Technology solutions designed to help businesses improve
            processes, productivity and digital capabilities.
          </p>
        </section>


        {/* IT SOLUTIONS INTRODUCTION */}
        <section className="services-list-section">
          <div className="services-intro">

            <div className="section-label">
              IT SOLUTIONS
            </div>

            <h2>
              Smarter technology.
              <span> Better business.</span>
            </h2>

            <p>
              We provide practical technology solutions designed to help
              organizations improve their processes, increase productivity,
              and strengthen their digital capabilities.
            </p>

          </div>
        </section>


        {/* DETAILED IT SOLUTIONS INFORMATION */}
        <section className="it-details-section">
          <div className="it-details-container">

            <div className="it-detail-content">
              <h3>Digital Transformation</h3>

              <p>
                We help organizations adopt practical digital solutions that
                improve the way they operate and respond to changing business
                requirements. Our approach focuses on using technology to
                simplify processes and create more efficient ways of working.
              </p>
            </div>


            <div className="it-detail-content">
              <h3>Business Process Improvement</h3>

              <p>
                Technology can help organizations reduce manual effort,
                streamline workflows, and improve operational efficiency. We
                support businesses in identifying opportunities where digital
                solutions can make everyday processes more effective.
              </p>
            </div>


            <div className="it-detail-content">
              <h3>Software & Application Solutions</h3>

              <p>
                We support organizations with technology solutions designed
                around their business requirements. Our focus is on creating
                practical and user-focused applications that support business
                operations and evolving organizational needs.
              </p>
            </div>


            <div className="it-detail-content">
              <h3>Technology Support</h3>

              <p>
                Reliable technology support helps organizations maintain
                efficient digital operations. We provide technology-focused
                support that helps businesses address their operational
                requirements and maintain productivity.
              </p>
            </div>


            <div className="it-detail-content">
              <h3>Digital Growth</h3>

              <p>
                As businesses grow, their technology requirements also evolve.
                We help organizations strengthen their digital capabilities
                with solutions that can support changing needs and contribute
                to long-term business growth.
              </p>
            </div>

          </div>
        </section>

      </main>


      {/* PAGE-SPECIFIC STYLING */}
      <style>{`

        .it-details-section {
          width: 100%;
          background: #f7f8fc;
          padding: 30px 40px 110px;
        }

        .it-details-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .it-detail-content {
          max-width: 1000px;
          margin: 0 auto 55px;
        }

        .it-detail-content:last-child {
          margin-bottom: 0;
        }

        .it-detail-content h3 {
          font-size: 28px;
          line-height: 1.3;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px;
        }

        .it-detail-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #53627a;
          margin: 0;
        }


        @media (max-width: 900px) {

          .it-details-section {
            padding: 25px 30px 90px;
          }

          .it-detail-content h3 {
            font-size: 26px;
          }

          .it-detail-content p {
            font-size: 16px;
          }

        }


        @media (max-width: 600px) {

          .it-details-section {
            padding: 20px 20px 70px;
          }

          .it-detail-content {
            margin-bottom: 40px;
          }

          .it-detail-content h3 {
            font-size: 23px;
          }

          .it-detail-content p {
            font-size: 16px;
            line-height: 1.7;
          }

        }

      `}</style>
    </>
  );
}

export default ITSolutions;