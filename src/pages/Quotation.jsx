import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  Layers,
  IndianRupee,
  Clock3,
  MessageSquare,
  Send,
} from "lucide-react";

function Quotation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    // ...

    try {
      const response = await fetch("http://localhost:8080/api/quotations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quotation");
      }

      setSuccessMessage(
        "Your quotation request has been submitted successfully.",
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        projectDetails: "",
      });
    } catch (error) {
      console.error("Quotation submission error:", error);

      setErrorMessage("Unable to submit your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="quotation-page">
      {/* PAGE HERO */}
      <section className="quotation-hero">
        <div className="quotation-hero-content">
          <div className="section-label">GET A QUOTE</div>

          <h1>
            Online <span>Quotation Form</span>
          </h1>

          <p>
            Tell us about your project and we'll get back to you with the next
            steps.
          </p>
        </div>
      </section>

      {/* QUOTATION FORM */}
      <section className="quotation-section">
        <form className="quotation-form" onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="form-field">
            <label htmlFor="name">
              <User size={15} />
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="form-field">
            <label htmlFor="email">
              <Mail size={15} />
              Your Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* PHONE */}
          <div className="form-field">
            <label htmlFor="phone">
              <Phone size={15} />
              Your Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* PROJECT TYPE */}
          <div className="form-field">
            <label htmlFor="projectType">
              <Layers size={15} />
              Project Type
            </label>

            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select project type
              </option>
              <option value="web-development">Web Development</option>
              <option value="software-development">Software Development</option>
              <option value="it-solutions">IT Solutions</option>
              <option value="ai-data-solutions">AI & Data Solutions</option>
              <option value="digital-services">Digital Services</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* BUDGET + TIMELINE */}
          <div className="quotation-form-row">
            <div className="form-field">
              <label htmlFor="budget">
                <IndianRupee size={15} />
                Budget Range
              </label>

              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select budget range
                </option>
                <option value="under-1k">Under ₹1,000</option>
                <option value="1k-5k">₹1,000 – ₹5,000</option>
                <option value="5k-10k">₹5,000 – ₹10,000</option>
                <option value="10k-25k">₹10,000 – ₹25,000</option>
                <option value="25k-plus">₹25,000+</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="timeline">
                <Clock3 size={15} />
                Timeline
              </label>

              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select timeline
                </option>
                <option value="less-than-month">Less than 1 month</option>
                <option value="1-3-months">1 – 3 months</option>
                <option value="3-6-months">3 – 6 months</option>
                <option value="6-plus-months">6+ months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          {/* PROJECT DETAILS */}
          <div className="form-field">
            <label htmlFor="details">
              <MessageSquare size={15} />
              Project Details
            </label>

            <textarea
              id="details"
              name="projectDetails"
              rows="5"
              placeholder="Describe your project requirements, goals, and any specific features you need..."
              value={formData.projectDetails}
              onChange={handleChange}
              required
            />
          </div>

          {/* SUBMIT */}
          {successMessage && (
            <p className="quotation-success">{successMessage}</p>
          )}

          {errorMessage && <p className="quotation-error">{errorMessage}</p>}

          <button
            className="quotation-submit"
            type="submit"
            disabled={isSubmitting}
          >
            <Send size={16} />

            {isSubmitting ? "Submitting..." : "Request Quote"}
          </button>
        </form>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="quotation-process">
        <div className="quotation-process-heading">
          <div className="section-label">WHAT HAPPENS NEXT?</div>

          <h2>What Happens Next?</h2>

          <p>
            Our streamlined process ensures you get a detailed quote quickly.
          </p>
        </div>

        <div className="quotation-process-grid">
          <article className="quotation-process-step">
            <span className="quotation-process-number">01</span>

            <h3>Submit Request</h3>

            <p>Fill out the form with your project details</p>
          </article>

          <article className="quotation-process-step">
            <span className="quotation-process-number">02</span>

            <h3>Quick Review</h3>

            <p>Our team reviews your requirements</p>
          </article>

          <article className="quotation-process-step">
            <span className="quotation-process-number">03</span>

            <h3>Discovery Call</h3>

            <p>We schedule a call to discuss specifics</p>
          </article>

          <article className="quotation-process-step">
            <span className="quotation-process-number">04</span>

            <h3>Detailed Quote</h3>

            <p>Receive a comprehensive project estimate</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Quotation;
