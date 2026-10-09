import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import "./MessageSection.css";

function MessageSection() {
  return (
    <section className="message-section">
      <div
        className="message-section__background"
        aria-hidden="true"
      />

      <div className="container message-section__container">
        {/* Content */}
        <motion.div
          className="message-section__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="message-section__eyebrow">
            <span />
            Message from the Patron-in-Chief
          </div>

          <h2 className="message-section__heading">
            Education is the
            <span>foundation of a</span>
            stronger society.
          </h2>

          <div className="message-section__quote">
            <span className="message-section__quote-mark">“</span>

            <p>
              Over the past twenty-eight years, Alfalah has
              supported nearly six thousand young people through
              scholarships while also helping them grow through
              academic competitions, career counselling,
              seminars, training workshops, patriotism and a
              strong commitment to Islamic values.
            </p>
          </div>

          <p className="message-section__text">
            An educated and capable young generation is essential
            for addressing the challenges facing our country and
            building a prosperous future. We must work together
            to create a society where people enjoy equal rights,
            better opportunities, justice and dignified
            employment.
          </p>

          <p className="message-section__text">
            Alfalah Scholarship Scheme provides a meaningful
            platform for this purpose. We invite you to join the
            Alfalah Scholarship team in serving society, supporting
            a deserving and talented student, and taking
            responsibility for their educational journey.
          </p>

          <p className="message-section__text">
            Every contribution is delivered to deserving students
            with responsibility and care. Your support can help
            take a student from uncertainty towards a brighter
            path of knowledge and opportunity.
          </p>

          <div className="message-section__signature">
            <div className="message-section__signature-line" />

            <div className="message-section__signature-content">
              {/* Add signature PNG here later */}
              {/*
              <img
                src="/images/about/patron-signature.png"
                alt="Signature of Mian Muhammad Abdul Shakoor"
                className="message-section__signature-image"
              />
              */}

              <strong>Mian Muhammad Abdul Shakoor</strong>

              <span>
                Patron-in-Chief
                <br />
                Alfalah Scholarship Scheme
              </span>
            </div>
          </div>
        </motion.div>

        {/* Patron Visual */}
        <motion.div
          className="message-section__visual"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <div className="message-section__image-wrap">
            <img
              src="/images/about/patron.png"
              alt="Patron-in-Chief of Alfalah Scholarship Scheme"
            />

            <div className="message-section__image-overlay" />
          </div>

          <div className="message-section__caption">
            <span>
              A commitment to knowledge, opportunity and human
              potential.
            </span>

            <ArrowUpRight size={18} strokeWidth={1.8} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MessageSection;