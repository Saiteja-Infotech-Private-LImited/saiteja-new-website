function Recruitment() {
  return (
    <>
      <main className="services-page">

        {/* HERO SECTION */}
        <section className="services-hero">
          <div className="section-label">RECRUITMENT</div>

          <h1>
            Finding the right
            <span> talent for your business.</span>
          </h1>

          <p>
            Talent acquisition support focused on finding professionals
            aligned with organizational needs.
          </p>
        </section>


        {/* INTRODUCTION */}
        <section className="services-list-section">
          <div className="services-intro">

            <div className="section-label">
              RECRUITMENT SOLUTIONS
            </div>

            <h2>
              The right talent.
              <span> The right opportunity.</span>
            </h2>

            <p>
              We help organizations connect with professionals whose skills,
              experience, and capabilities align with their business and role
              requirements. Our recruitment approach focuses on understanding
              organizational needs and supporting an effective hiring process.
            </p>

          </div>
        </section>


        {/* DETAILED CONTENT */}
        <section className="recruitment-details-section">
          <div className="recruitment-details-container">

            <div className="recruitment-detail-content">
              <h3>Understanding Hiring Requirements</h3>

              <p>
                Every organization has different hiring requirements. We begin
                by understanding the role, responsibilities, required skills,
                experience, and organizational expectations to establish a
                clear understanding of the talent needed.
              </p>
            </div>


            <div className="recruitment-detail-content">
              <h3>Talent Identification</h3>

              <p>
                Finding suitable talent starts with identifying professionals
                whose qualifications and capabilities align with the
                requirements of the position. We focus on connecting
                organizations with candidates who match their specific needs.
              </p>
            </div>


            <div className="recruitment-detail-content">
              <h3>Candidate Evaluation</h3>

              <p>
                A structured evaluation process helps organizations assess
                candidates based on relevant skills, experience,
                qualifications, and role requirements. This supports informed
                decisions throughout the hiring process.
              </p>
            </div>


            <div className="recruitment-detail-content">
              <h3>Role & Candidate Alignment</h3>

              <p>
                Successful recruitment involves more than matching a candidate
                to a job title. We focus on aligning candidate capabilities
                with the responsibilities, expectations, and requirements of
                the role.
              </p>
            </div>


            <div className="recruitment-detail-content">
              <h3>Hiring Support</h3>

              <p>
                We support organizations throughout the recruitment process,
                helping them connect with suitable professionals and build
                teams that contribute to their business objectives and
                long-term growth.
              </p>
            </div>

          </div>
        </section>

      </main>


      {/* PAGE-SPECIFIC STYLING */}
      <style>{`

        .recruitment-details-section {
          width: 100%;
          background: #f7f8fc;
          padding: 30px 40px 110px;
        }

        .recruitment-details-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .recruitment-detail-content {
          max-width: 1000px;
          margin: 0 auto 55px;
        }

        .recruitment-detail-content:last-child {
          margin-bottom: 0;
        }

        .recruitment-detail-content h3 {
          font-size: 28px;
          line-height: 1.3;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px;
        }

        .recruitment-detail-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #53627a;
          margin: 0;
        }


        @media (max-width: 900px) {

          .recruitment-details-section {
            padding: 25px 30px 90px;
          }

          .recruitment-detail-content h3 {
            font-size: 26px;
          }

          .recruitment-detail-content p {
            font-size: 16px;
          }

        }


        @media (max-width: 600px) {

          .recruitment-details-section {
            padding: 20px 20px 70px;
          }

          .recruitment-detail-content {
            margin-bottom: 40px;
          }

          .recruitment-detail-content h3 {
            font-size: 23px;
          }

          .recruitment-detail-content p {
            font-size: 16px;
            line-height: 1.7;
          }

        }

      `}</style>
    </>
  );
}

export default Recruitment;