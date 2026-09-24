function AIDataSolutions() {
  return (
    <>
      <main className="services-page">

        {/* HERO SECTION */}
        <section className="services-hero">
          <div className="section-label">AI & DATA SOLUTIONS</div>

          <h1>
            Turning data into
            <span> meaningful business value.</span>
          </h1>

          <p>
            Practical approaches to data and intelligent technology that turn
            information into business value.
          </p>
        </section>


        {/* INTRODUCTION */}
        <section className="services-list-section">
          <div className="services-intro">

            <div className="section-label">
              AI & DATA SOLUTIONS
            </div>

            <h2>
              Smarter data.
              <span> Intelligent solutions.</span>
            </h2>

            <p>
              We help organizations use data effectively and explore
              intelligent technologies to improve decision-making,
              operational efficiency, and business processes.
            </p>

          </div>
        </section>


        {/* DETAILED CONTENT */}
        <section className="ai-details-section">
          <div className="ai-details-container">

            <div className="ai-detail-content">
              <h3>Data Management & Insights</h3>

              <p>
                Well-managed data helps organizations understand their
                operations and make informed decisions. We support businesses
                in organizing, managing, and using their data to generate
                meaningful insights and support business objectives.
              </p>
            </div>


            <div className="ai-detail-content">
              <h3>Data Analytics</h3>

              <p>
                We help organizations analyze business information to identify
                trends, patterns, and opportunities. Data-driven insights can
                support better planning, performance monitoring, and
                strategic decision-making.
              </p>
            </div>


            <div className="ai-detail-content">
              <h3>Artificial Intelligence Solutions</h3>

              <p>
                Artificial intelligence can help organizations automate
                repetitive activities, improve processes, and create
                intelligent solutions. We explore practical AI applications
                based on specific business requirements and objectives.
              </p>
            </div>


            <div className="ai-detail-content">
              <h3>Data-Driven Decision Making</h3>

              <p>
                Our approach focuses on transforming available data into useful
                information that organizations can apply to their business.
                This helps teams make informed decisions and respond more
                effectively to changing business needs.
              </p>
            </div>


            <div className="ai-detail-content">
              <h3>Intelligent Business Growth</h3>

              <p>
                Combining data with intelligent technologies can help
                organizations identify new opportunities and improve
                efficiency. We help businesses explore data and AI solutions
                that support innovation, operational improvement, and
                long-term growth.
              </p>
            </div>

          </div>
        </section>

      </main>


      {/* PAGE-SPECIFIC STYLING */}
      <style>{`

        .ai-details-section {
          width: 100%;
          background: #f7f8fc;
          padding: 30px 40px 110px;
        }

        .ai-details-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ai-detail-content {
          max-width: 1000px;
          margin: 0 auto 55px;
        }

        .ai-detail-content:last-child {
          margin-bottom: 0;
        }

        .ai-detail-content h3 {
          font-size: 28px;
          line-height: 1.3;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px;
        }

        .ai-detail-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #53627a;
          margin: 0;
        }


        @media (max-width: 900px) {

          .ai-details-section {
            padding: 25px 30px 90px;
          }

          .ai-detail-content h3 {
            font-size: 26px;
          }

          .ai-detail-content p {
            font-size: 16px;
          }

        }


        @media (max-width: 600px) {

          .ai-details-section {
            padding: 20px 20px 70px;
          }

          .ai-detail-content {
            margin-bottom: 40px;
          }

          .ai-detail-content h3 {
            font-size: 23px;
          }

          .ai-detail-content p {
            font-size: 16px;
            line-height: 1.7;
          }

        }

      `}</style>
    </>
  );
}

export default AIDataSolutions;