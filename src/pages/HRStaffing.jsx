function HRStaffing() {
  return (
    <>
      <main className="services-page">

        <section className="services-hero">
          <div className="section-label">HR & STAFFING</div>

          <h1>
            Building teams
            <span> that move businesses forward.</span>
          </h1>

          <p>
            Flexible workforce solutions that connect organizations with the
            right people and capabilities.
          </p>
        </section>

        <section className="services-list-section">
          <div className="services-intro">

            <div className="section-label">
              HR & STAFFING SOLUTIONS
            </div>

            <h2>
              The right people.
              <span> The right capabilities.</span>
            </h2>

            <p>
              We help organizations build capable teams through flexible
              workforce and staffing solutions aligned with their business
              requirements.
            </p>

          </div>
        </section>

        <section className="hr-details-section">
          <div className="hr-details-container">

            {/* Workforce Management */}
            <div className="hr-detail-content">
              <h3>Workforce Management</h3>

              <p>
                Effective workforce management helps organizations align their
                people, skills, and business requirements. We support businesses
                in managing workforce needs efficiently while creating a
                structured approach to their people and operations.
              </p>
            </div>


            {/* Employee Engagement & Support */}
            <div className="hr-detail-content">
              <h3>Employee Engagement & Support</h3>

              <p>
                A positive employee experience contributes to a productive and
                collaborative workplace. Our HR solutions support organizations
                in strengthening employee engagement, communication, workplace
                relationships, and overall employee support.
              </p>
            </div>


            {/* Performance & Development */}
            <div className="hr-detail-content">
              <h3>Performance & Development</h3>

              <p>
                We help organizations support employee performance through
                clear objectives, continuous feedback, professional development,
                and opportunities to strengthen skills and capabilities.
              </p>
            </div>


            {/* HR Operations */}
            <div className="hr-detail-content">
              <h3>HR Operations</h3>

              <p>
                Our HR operations support helps organizations maintain
                structured and efficient people processes. From employee-related
                administration to workforce coordination, we help businesses
                manage their HR activities effectively.
              </p>
            </div>


            {/* Organizational Growth */}
            <div className="hr-detail-content">
              <h3>Supporting Organizational Growth</h3>

              <p>
                Strong people practices play an important role in helping
                organizations achieve their business objectives. By combining
                flexible workforce solutions with structured HR practices, we
                help businesses develop their workforce, improve employee
                experiences, and build capabilities that support long-term
                growth.
              </p>
            </div>

          </div>
        </section>

      </main>

      <style>{`

        /* HR & STAFFING DETAILS */

        .hr-details-section {
          width: 100%;
          background: #f7f8fc;
          padding: 30px 40px 110px;
        }

        .hr-details-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hr-detail-content {
          max-width: 1000px;
          margin: 0 auto 55px;
        }

        .hr-detail-content:last-child {
          margin-bottom: 0;
        }

        .hr-detail-content h3 {
          font-size: 28px;
          line-height: 1.3;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px;
        }

        .hr-detail-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #53627a;
          margin: 0;
        }


        /* TABLET */

        @media (max-width: 900px) {

          .hr-details-section {
            padding: 25px 30px 90px;
          }

          .hr-detail-content {
            max-width: 850px;
          }

          .hr-detail-content h3 {
            font-size: 26px;
          }

          .hr-detail-content p {
            font-size: 16px;
          }

        }


        /* MOBILE */

        @media (max-width: 600px) {

          .hr-details-section {
            padding: 20px 20px 70px;
          }

          .hr-detail-content {
            margin-bottom: 40px;
          }

          .hr-detail-content h3 {
            font-size: 23px;
            line-height: 1.35;
          }

          .hr-detail-content p {
            font-size: 16px;
            line-height: 1.7;
          }

        }

      `}</style>
    </>
  );
}

export default HRStaffing;