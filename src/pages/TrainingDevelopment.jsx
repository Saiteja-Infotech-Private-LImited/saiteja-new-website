function TrainingDevelopment() {
  return (
    <>
      <main className="services-page">

        {/* HERO SECTION */}
        <section className="services-hero">
          <div className="section-label">TRAINING & DEVELOPMENT</div>

          <h1>
            Developing skills
            <span> for a stronger future.</span>
          </h1>

          <p>
            Learning and development opportunities designed to strengthen
            skills and prepare people for what comes next.
          </p>
        </section>


        {/* INTRODUCTION */}
        <section className="services-list-section">
          <div className="services-intro">

            <div className="section-label">
              TRAINING & DEVELOPMENT
            </div>

            <h2>
              Building skills.
              <span> Enabling growth.</span>
            </h2>

            <p>
              We help organizations and individuals strengthen their
              capabilities through structured learning and development
              opportunities aligned with professional and organizational
              requirements.
            </p>

          </div>
        </section>


        {/* DETAILED CONTENT */}
        <section className="training-details-section">
          <div className="training-details-container">

            <div className="training-detail-content">
              <h3>Skill Development</h3>

              <p>
                Continuous skill development helps employees adapt to changing
                technologies, processes, and workplace requirements. We support
                learning initiatives that focus on building practical and
                relevant capabilities.
              </p>
            </div>


            <div className="training-detail-content">
              <h3>Professional Development</h3>

              <p>
                Professional development enables individuals to improve their
                knowledge, confidence, and effectiveness. Our approach supports
                continuous learning and helps people prepare for new
                responsibilities and opportunities.
              </p>
            </div>


            <div className="training-detail-content">
              <h3>Organizational Learning</h3>

              <p>
                Organizations benefit when learning becomes part of their
                workplace culture. We support organizations in creating
                development-focused environments that encourage employees to
                learn, improve, and contribute effectively.
              </p>
            </div>


            <div className="training-detail-content">
              <h3>Capability Building</h3>

              <p>
                Building organizational capabilities requires continuous
                investment in people and their skills. We help organizations
                identify development needs and support learning approaches
                that strengthen workforce capabilities.
              </p>
            </div>


            <div className="training-detail-content">
              <h3>Continuous Improvement</h3>

              <p>
                Learning does not end after training. Continuous improvement
                encourages employees to apply new knowledge, strengthen their
                capabilities, and adapt to changing business requirements.
              </p>
            </div>

          </div>
        </section>

      </main>


      {/* PAGE-SPECIFIC STYLING */}
      <style>{`

        .training-details-section {
          width: 100%;
          background: #f7f8fc;
          padding: 30px 40px 110px;
        }

        .training-details-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .training-detail-content {
          max-width: 1000px;
          margin: 0 auto 55px;
        }

        .training-detail-content:last-child {
          margin-bottom: 0;
        }

        .training-detail-content h3 {
          font-size: 28px;
          line-height: 1.3;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px;
        }

        .training-detail-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #53627a;
          margin: 0;
        }


        @media (max-width: 900px) {

          .training-details-section {
            padding: 25px 30px 90px;
          }

          .training-detail-content h3 {
            font-size: 26px;
          }

          .training-detail-content p {
            font-size: 16px;
          }

        }


        @media (max-width: 600px) {

          .training-details-section {
            padding: 20px 20px 70px;
          }

          .training-detail-content {
            margin-bottom: 40px;
          }

          .training-detail-content h3 {
            font-size: 23px;
          }

          .training-detail-content p {
            font-size: 16px;
            line-height: 1.7;
          }

        }

      `}</style>
    </>
  );
}

export default TrainingDevelopment;