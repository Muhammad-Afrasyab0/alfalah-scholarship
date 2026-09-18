import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  ArrowUpRight,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import "../styles/Contact.css";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Alfalah+Haji+Muhammad+Hussain+Memorial+Centre+Gulshan-e-Razzak+Dhoria+Dinga+Road+Kharian+Gujrat+Pakistan";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Our team will contact you shortly.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "We could not send your message right now. Please try again or contact us directly by email or phone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openMap = () => {
    window.open(MAP_URL, "_blank", "noopener,noreferrer");
  };

  const handleMapKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMap();
    }
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="contact-hero">

        <div className="contact-hero__grid" />

        <div className="contact-hero__glow contact-hero__glow--one" />
        <div className="contact-hero__glow contact-hero__glow--two" />

        <div className="contact-container">

          <div className="contact-hero__content">

            <div className="contact-eyebrow">
              <span className="contact-eyebrow__line" />
              CONTACT ALFALAH
            </div>

            <h1>
              Let&apos;s Stay
              <span> Connected.</span>
            </h1>

            <p>
              Whether you have a question about scholarships,
              sponsorship, applications or the work of Alfalah
              Scholarship Scheme, our team is here to help.
            </p>

            <div className="contact-hero__meta">
              <span>Scholarship Support</span>
              <span>Donor Enquiries</span>
              <span>General Information</span>
            </div>

          </div>

        </div>

        <div className="contact-hero__bottom">
          <span>ALFALAH SCHOLARSHIP SCHEME PAKISTAN</span>
          <span>EDUCATION WITHOUT PREJUDICE</span>
        </div>

      </section>


      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}

      <section className="contact-main">

        <div className="contact-main__grid" />

        <div className="contact-container">

          <div className="contact-layout">

            {/* =================================================
                LEFT — CONTACT INFORMATION
            ================================================== */}

            <div className="contact-info">

              <div className="contact-section-label">
                GET IN TOUCH
              </div>

              <h2>
                We&apos;re here to
                <span> help.</span>
              </h2>

              <p className="contact-info__intro">
                Reach out to us for scholarship-related
                questions, application assistance, donor
                enquiries or general information about
                Alfalah Scholarship Scheme.
              </p>


              {/* =================================================
                  ADDRESS
              ================================================== */}

              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="contact-info-card"
                aria-label="Open Alfalah Scholarship Scheme location in Google Maps"
              >

                <div className="contact-info-card__icon">
                  <MapPin size={20} />
                </div>

                <div>

                  <span className="contact-info-card__label">
                    VISIT OUR OFFICE
                  </span>

                  <strong>
                    Alfalah Haji Muhammad Hussain
                    Memorial Centre
                  </strong>

                  <p>
                    Gulshan-e-Razzak, Dhoria,
                    Dinga Road, Kharian, Gujrat
                  </p>

                  <span className="contact-info-card__action">
                    View location
                    <ArrowUpRight size={14} />
                  </span>

                </div>

              </a>


              {/* =================================================
                  PHONE
              ================================================== */}

              <a
                href="tel:+923451414457"
                className="contact-info-card"
              >

                <div className="contact-info-card__icon">
                  <Phone size={20} />
                </div>

                <div>

                  <span className="contact-info-card__label">
                    CALL US
                  </span>

                  <strong>
                    0345-1414457
                  </strong>

                  <p>
                    For scholarship and general enquiries.
                  </p>

                  <span className="contact-info-card__action">
                    Call now
                    <ArrowUpRight size={14} />
                  </span>

                </div>

              </a>


              {/* =================================================
                  EMAIL
              ================================================== */}

              <a
                href="mailto:info@alfalahss.org"
                className="contact-info-card"
              >

                <div className="contact-info-card__icon">
                  <Mail size={20} />
                </div>

                <div>

                  <span className="contact-info-card__label">
                    EMAIL US
                  </span>

                  <strong>
                    info@alfalahss.org
                  </strong>

                  <p>
                    Send us your questions or enquiries.
                  </p>

                  <span className="contact-info-card__action">
                    Send email
                    <ArrowUpRight size={14} />
                  </span>

                </div>

              </a>


              {/* =================================================
                  WHATSAPP
              ================================================== */}

              <a
                href="https://wa.me/923451414457"
                target="_blank"
                rel="noreferrer"
                className="contact-info-card"
              >

                <div className="contact-info-card__icon">
                  <MessageCircle size={20} />
                </div>

                <div>

                  <span className="contact-info-card__label">
                    WHATSAPP
                  </span>

                  <strong>
                    +92 345 1414457
                  </strong>

                  <p>
                    Contact our team through WhatsApp.
                  </p>

                  <span className="contact-info-card__action">
                    Open WhatsApp
                    <ArrowUpRight size={14} />
                  </span>

                </div>

              </a>


              {/* =================================================
                  OFFICE HOURS
              ================================================== */}

              <div className="contact-hours">

                <Clock3 size={19} />

                <div>

                  <span>
                    OFFICE HOURS
                  </span>

                  <strong>
                    Monday — Saturday
                  </strong>

                  <p>
                    Please contact us before visiting
                    for scholarship-related assistance.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — FORM
            ================================================== */}

            <div className="contact-form-wrap">

              <div className="contact-form-head">

                <div>

                  <span className="contact-section-label">
                    SEND A MESSAGE
                  </span>

                  <h2>
                    How can we
                    <span> help?</span>
                  </h2>

                </div>

                <div className="contact-form-number">
                  01
                </div>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="name">
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />

                  </div>

                </div>


                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03XX-XXXXXXX"
                      autoComplete="tel"
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="subject">
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select a subject
                      </option>

                      <option value="Scholarship">
                        Scholarship
                      </option>

                      <option value="Application">
                        Application
                      </option>

                      <option value="Become a Donor">
                        Become a Donor
                      </option>

                      <option value="General Enquiry">
                        General Enquiry
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                  </div>

                </div>


                <div className="contact-field">

                  <label htmlFor="message">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="7"
                    required
                  />

                </div>


                {status.message && (
                  <div
                    className={`contact-status contact-status--${status.type}`}
                    role="status"
                    aria-live="polite"
                  >
                    {status.message}
                  </div>
                )}


                <div className="contact-form-footer">

                  <p>
                    Your information will only be used
                    to respond to your enquiry.
                  </p>

                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={isSubmitting}
                  >

                    {isSubmitting ? (
                      <>
                        <span className="contact-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={17} />
                      </>
                    )}

                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ====================================================== */}

      <section className="contact-location">

        <div className="contact-location__grid" />

        <div className="contact-container">

          <div className="contact-location-card">

            {/* =================================================
                LOCATION INFORMATION
            ================================================== */}

            <div className="contact-location-card__content">

              <span className="contact-section-label">
                OUR LOCATION
              </span>

              <h2>
                Find us in
                <span> Kharian.</span>
              </h2>

              <p>
                Alfalah Haji Muhammad Hussain Memorial
                Centre, Gulshan-e-Razzak, Dhoria,
                Dinga Road, Kharian, Gujrat.
              </p>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="contact-location-button"
              >
                Open in Google Maps
                <ArrowUpRight size={16} />
              </a>

            </div>


            {/* =================================================
                CLICKABLE MAP VISUAL
            ================================================== */}

            <div
              className="contact-location-visual"
              role="button"
              tabIndex="0"
              aria-label="Open Alfalah Scholarship Scheme location in Google Maps"
              onClick={openMap}
              onKeyDown={handleMapKeyDown}
            >

              <div className="contact-map-grid" />

              {/* Decorative map lines */}
              <div className="contact-map-road contact-map-road--one" />
              <div className="contact-map-road contact-map-road--two" />
              <div className="contact-map-road contact-map-road--three" />

              {/* Location rings */}
              <div className="contact-map-ring contact-map-ring--one" />
              <div className="contact-map-ring contact-map-ring--two" />

              {/* Main clickable pin */}
              <div className="contact-map-pin">
                <MapPin size={28} strokeWidth={1.8} />
              </div>

              {/* Open indicator */}
              <div className="contact-map-open">
                <ExternalLink size={13} />
                <span>OPEN MAP</span>
              </div>

              <span className="contact-map-label">
                KHARIAN · GUJRAT
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="contact-cta">

        <div className="contact-cta__grid" />

        <div className="contact-container">

          <div className="contact-cta__inner">

            <div>

              <span className="contact-section-label">
                ALFALAH SCHOLARSHIP SCHEME
              </span>

              <h2>
                Education without
                <span> prejudice.</span>
              </h2>

            </div>

            <div className="contact-cta__actions">

              <a
                href="/scholar"
                className="contact-cta-button"
              >
                Become a Scholar
                <ArrowUpRight size={17} />
              </a>

              <a
                href="/donor"
                className="contact-cta-button contact-cta-button--secondary"
              >
                Become a Donor
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;