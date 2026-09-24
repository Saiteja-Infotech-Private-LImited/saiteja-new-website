import { useState } from "react";

import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

import Button from "../components/Button";
import { CONTACT_DETAILS } from "../data/contact";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData(form);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact message");
      }

      setSuccessMessage(
        "Your message has been sent successfully. We'll get back to you soon.",
      );

      setErrorMessage("");

      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSuccessMessage("");

      setErrorMessage("Unable to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="section-label">CONTACT US</div>

        <h1>
          Let's start
          <span> a conversation.</span>
        </h1>

        <p>
          Have a question, project, hiring requirement or partnership idea? We'd
          love to hear from you.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-main">
        <div className="contact-information">
          <div className="section-label">CONTACT</div>

          <h2>
            Tell us what
            <span> you're building.</span>
          </h2>

          <p>
            Share a little about what you need and our team can help you
            identify the right next step.
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
                <span>{CONTACT_DETAILS.email}</span>
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
                <span>{CONTACT_DETAILS.phoneDisplay}</span>
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
                <span>Chat with our team</span>
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
                <span>{CONTACT_DETAILS.address}</span>
              </div>
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="6"
              placeholder="Tell us a little about your requirement..."
              required
            />
          </label>

          {successMessage && (
            <p className="contact-success">{successMessage}</p>
          )}

          {errorMessage && <p className="contact-error">{errorMessage}</p>}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
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