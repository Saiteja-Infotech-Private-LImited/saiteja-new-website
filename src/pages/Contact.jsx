import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Button from "../components/Button";
import { CONTACT_DETAILS } from "../data/contact";

function Contact() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [clientName, setClientName] = useState("");
  const [clientDesignation, setClientDesignation] = useState("");
  const [clientReview, setClientReview] = useState("");

  const handleNameInput = (event) => {
    // Allow English letters and spaces only
    event.target.value = event.target.value.replace(/[^A-Za-z ]/g, "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const subject = formData.get("subject")?.trim();
    const message = formData.get("message")?.trim();

    // Check all required fields
    if (!name || !email || !subject || !message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Name validation
    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    if (!namePattern.test(name)) {
      setErrorMessage(
        "Name can contain letters and spaces only."
      );
      return;
    }

    const contactData = {
      name,
      email,
      subject,
      message,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "http://localhost:8080/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit contact message");
      }

      setSuccessMessage(
        "Your message has been sent successfully. We'll get back to you soon."
      );

      setErrorMessage("");

      form.reset();
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setSuccessMessage("");

      setErrorMessage(
        "Unable to send your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!clientName || !clientReview) {
      alert("Please enter both Name and Review!");
      return;
    }

    const newReview = {
      name: clientName,
      designation: clientDesignation || "Client Partner",
      review: clientReview
    };

    const savedReviews = localStorage.getItem('saitejaProductionReviews');
    const existingReviews = savedReviews ? JSON.parse(savedReviews) : [];
    
    localStorage.setItem(
      'saitejaProductionReviews', 
      JSON.stringify([newReview, ...existingReviews])
    );

    alert("Thank you! Your review has been submitted successfully.");
    navigate("/");
  };
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="section-label">
          CONTACT US
        </div>

        <h1>
          Let's start
          <span> a conversation.</span>
        </h1>

        <p>
          Have a question, project, hiring requirement or
          partnership idea? We'd love to hear from you.
        </p>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-main">

        {/* CONTACT INFORMATION */}
        <div className="contact-information">
          <div className="section-label">CONTACT</div>

          <h2>
            Tell us what
            <span> you're building.</span>
          </h2>

          <p>
            Share a little about what you need and our team
            can help you identify the right next step.
          </p>


          <div className="contact-details">

            {/* EMAIL */}
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="contact-detail-item"
            >
              <Mail size={20} />

              <div>
                <small>Email</small>
                <span>
                  {CONTACT_DETAILS.email}
                </span>
              </div>
            </a>


            {/* PHONE */}
            <a
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="contact-detail-item"
            >
              <Phone size={20} />

              <div>
                <small>Phone</small>
                <span>
                  {CONTACT_DETAILS.phoneDisplay}
                </span>
              </div>
            </a>


            {/* WHATSAPP */}
            <a
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-item"
            >
              <MessageCircle size={20} />

              <div>
                <small>WhatsApp</small>
                <span>
                  Chat with our team
                </span>
              </div>
            </a>


            {/* ADDRESS */}
            <a
              href={CONTACT_DETAILS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-item"
            >
              <MapPin size={20} />

              <div>
                <small>Office</small>
                <span>
                  {CONTACT_DETAILS.address}
                </span>
              </div>
            </a>

          </div>
        </div>


        {/* CONTACT FORM */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {/* NAME + EMAIL */}
          <div className="form-row">

            {/* NAME */}
            <label>
              Name *
              <span className="required"></span>

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
                onInput={handleNameInput}
              />
            </label>


            {/* EMAIL */}
            <label>
              Email *
              <span className="required"> </span>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </label>

          </div>


          {/* SUBJECT */}
          <label>
            Subject *
            <span className="required"></span>

            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              required
            />
          </label>


          {/* MESSAGE */}
          <label>
            Message *
            <span className="required"></span>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us a little about your requirement..."
              required
            />
          </label>


          {/* SUCCESS MESSAGE */}
          {successMessage && (
            <p
              className="contact-success"
              role="status"
            >
              {successMessage}
            </p>
          )}


          {/* ERROR MESSAGE */}
          {errorMessage && (
            <p
              className="contact-error"
              role="alert"
            >
              {errorMessage}
            </p>
          )}


          {/* SUBMIT */}
          <Button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Sending..."
              : "Send Message"}
          </Button>

        </form>

      </section>

      {/* NEW SUBMIT REVIEW SECTION */}
      <section className="review-form-section" style={{ padding: '60px 20px', backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'left', backgroundColor: '#ffffff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <div style={{ color: '#ff7a00', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>
            Share Your Experience
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827', margin: '0 0 25px 0', textAlign: 'center' }}>
            Share Your Experience with Us
          </h2>
          
          <form onSubmit={handleSubmitReview} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: '600', color: '#374151', fontSize: '0.95rem' }}>
              Your Name *
              <input 
                type="text" 
                value={clientName} 
                onChange={(e) => setClientName(e.target.value)} 
                placeholder="E.g., John Doe" 
                required 
                style={{ padding: '12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem', fontWeight: 'normal', width: '100%', outline: 'none' }}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: '600', color: '#374151', fontSize: '0.95rem' }}>
              Designation / Company
              <input 
                type="text" 
                value={clientDesignation} 
                onChange={(e) => setClientDesignation(e.target.value)} 
                placeholder="E.g., CEO at Nexus Retail" 
                style={{ padding: '12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem', fontWeight: 'normal', width: '100%', outline: 'none' }}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: '600', color: '#374151', fontSize: '0.95rem' }}>
              Review Message *
              <textarea 
                value={clientReview} 
                onChange={(e) => setClientReview(e.target.value)} 
                rows="4" 
                placeholder="Write your experience with Saiteja Infotech..." 
                required 
                style={{ padding: '12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem', fontWeight: 'normal', width: '100%', outline: 'none', resize: 'vertical' }}
              />
            </label>

            <button 
              type="submit" 
              style={{
                backgroundColor: '#ff7a00',
                color: '#ffffff',
                padding: '14px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255, 122, 0, 0.2)',
                transition: 'background-color 0.2s ease',
                marginTop: '10px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e66d00'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff7a00'}
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="contact-map">
          <iframe
            title="Saiteja Infotech Office Location"
            src={CONTACT_DETAILS.mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </main>
  );
}

export default Contact;