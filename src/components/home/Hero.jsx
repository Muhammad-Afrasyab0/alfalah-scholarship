import { motion } from "motion/react";
import {
  ArrowUpRight,
  Play,
} from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background Image */}
      <div className="hero__background">
        <img
          src="/images/hero/alfalah-hero.png"
          alt="Students pursuing education"
        />
      </div>

      {/* Theme-aware Cinematic Overlay */}
      <div className="hero__overlay" />

      {/* Ambient Light */}
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container hero__container">

        {/* Main Content */}
        <div className="hero__content">

          <motion.div
            className="hero__eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="hero__eyebrow-line" />

            Established 1998 · 27 Years of Impact
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Every Talented Student

            <span>
              Deserves a Chance
            </span>

            <span>
              to Soar.
            </span>
          </motion.h1>


          <motion.p
            className="hero__description"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            Alfalah Scholarship Scheme has empowered
            5,735 scholars to complete their education
            and transition into successful professional
            careers.
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            className="hero__actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >

            <a
              href="/sponsorship"
              className="button button--primary hero__button hero__button--primary"
            >
              <span>
                Sponsor a Scholar
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />
            </a>


            <a
              href="#apply"
              className="button button--secondary hero__button hero__button--secondary"
            >
              <span>
                Apply for Scholarship
              </span>
            </a>

          </motion.div>

        </div>


        {/* Floating Statistics */}
        <motion.div
          className="hero__stats"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Stat 1 */}
          <div className="hero-stat">

            <div className="hero-stat__number">
              5,735
            </div>

            <div className="hero-stat__label">
              Scholars Supported
            </div>

          </div>


          {/* Stat 2 */}
          <div className="hero-stat">

            <div className="hero-stat__number">
              ₨650M+
            </div>

            <div className="hero-stat__label">
              Funds Disbursed
            </div>

          </div>


          {/* Stat 3 */}
          <div className="hero-stat hero-stat--small">

            <div className="hero-stat__icon">
              <Play
                size={13}
                fill="currentColor"
                strokeWidth={1.5}
              />
            </div>

            <div className="hero-stat__copy">

              <strong>
                27 Years
              </strong>

              <span>
                of transforming lives
              </span>

            </div>

          </div>

        </motion.div>


        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
        >
          <span>
            Scroll to explore
          </span>

          <div className="hero__scroll-line" />
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;