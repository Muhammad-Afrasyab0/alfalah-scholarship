import { motion } from "motion/react";
import {
  ArrowUpRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import "./MessageSection.css";

function MessageSection() {
  return (
    <section className="message-section">
      {/* =========================================
          PREMIUM BACKGROUND SYSTEM
      ========================================= */}

      <div className="message-section__background" aria-hidden="true">
        <div className="message-section__grid" />

        <motion.div
          className="message-section__orb message-section__orb--left"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.04, 1],
          }}
          transition={{
            rotate: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span className="message-section__orb-dot" />
        </motion.div>

        <motion.div
          className="message-section__orb message-section__orb--right"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 42,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span className="message-section__orb-dot" />
        </motion.div>

        <motion.div
          className="message-section__ambient-light message-section__ambient-light--left"
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="message-section__ambient-light message-section__ambient-light--right"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="message-section__scanner"
          animate={{
            y: ["-10%", "110%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container message-section__container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <motion.div
          className="message-section__content"
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="message-section__eyebrow">
            <span />
            Message from the Patron-in-Chief
          </div>

          <h2>
            Education is the
            <span>foundation of a</span>
            stronger society.
          </h2>

          <div className="message-section__quote">
            <span className="message-section__quote-mark">
              “
            </span>

            <p>
              Over the past twenty-seven years,
              Alfalah has supported nearly six thousand
              young people through scholarships while
              also helping them grow through academic
              competitions, career counselling, seminars,
              training workshops, patriotism and a strong
              commitment to Islamic values.
            </p>
          </div>

          <p className="message-section__text">
            An educated and capable young generation is
            essential for addressing the challenges facing
            our country and building a prosperous future.
            We must work together to create a society where
            people enjoy equal rights, better opportunities,
            justice and dignified employment.
          </p>

          <p className="message-section__text">
            Alfalah Scholarship Scheme provides a meaningful
            platform for this purpose. We invite you to join
            the Alfalah Scholarship team in serving society,
            supporting a deserving and talented student, and
            taking responsibility for their educational journey.
          </p>

          <p className="message-section__text">
            Every contribution is delivered to deserving
            students with responsibility and care. Your
            support can help take a student from uncertainty
            towards a brighter path of knowledge and
            opportunity.
          </p>

          <div className="message-section__signature">
            <div className="message-section__signature-line" />

            <div>
              <strong>
                Mian Muhammad Abdul Shakoor
              </strong>

              <span>
                Patron-in-Chief
                <br />
                Alfalah Scholarship Scheme
              </span>
            </div>
          </div>
        </motion.div>


        {/* =========================================
            RIGHT VISUAL
        ========================================= */}

        <motion.div
          className="message-section__visual"
          initial={{
            opacity: 0,
            x: 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="message-section__image-wrap">

            <img
              src="/images/about/patron.png"
              alt="Patron-in-Chief of Alfalah Scholarship Scheme"
            />

            <div className="message-section__image-overlay" />

            {/* =========================================
                IMAGE ORBIT
            ========================================= */}

            <motion.div
              className="message-section__image-orbit"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span />
            </motion.div>

            {/* =========================================
                FLOATING CARD
            ========================================= */}

            <motion.div
              className="message-section__floating-card"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="message-section__floating-icon">
                <GraduationCap size={19} />
              </div>

              <div>
                <strong>27 Years</strong>

                <span>
                  Empowering education
                </span>
              </div>
            </motion.div>

            {/* =========================================
                PREMIUM SPARK
            ========================================= */}

            <motion.div
              className="message-section__spark"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles size={14} />
            </motion.div>

          </div>

          {/* =========================================
              CAPTION
          ========================================= */}

          <div className="message-section__caption">
            <span>
              A commitment to knowledge,
              opportunity and human potential.
            </span>

            <ArrowUpRight size={18} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default MessageSection;