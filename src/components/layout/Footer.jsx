import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="alfalah-footer">
      <div className="alfalah-footer__grid"></div>
      <div className="alfalah-footer__glow"></div>

      <div className="alfalah-footer__container">

        {/* LEFT / BRAND */}
        <div className="alfalah-footer__brand">

          <a href="/" className="alfalah-footer__logo">
            <img
              src="/images/logo.png"
              alt="Alfalah Scholarship Scheme"
            />
          </a>

          <p className="alfalah-footer__eyebrow">
            ALFALAH SCHOLARSHIP SCHEME
          </p>

          <h2>
            Education
            <br />
            <span>Without Prejudice.</span>
          </h2>

          <p className="alfalah-footer__description">
            Empowering deserving and talented students through education,
            opportunity and financial support for a better future.
          </p>

          <a href="#donor" className="alfalah-footer__button">
            Become a Sponsor
            <span>↗</span>
          </a>

        </div>


        {/* EXPLORE */}
        <div className="alfalah-footer__column">

          <h3>Explore</h3>

          <nav>
            <a href="/">Home</a>
            <a href="#about">About Us</a>
            <a href="#programs">Scholarship Programs</a>
            <a href="#donor">Become a Donor</a>
            <a href="#scholar">Become a Scholar</a>
            <a href="#contact">Contact Us</a>
          </nav>

        </div>


        {/* SCHOLARSHIPS */}
        <div className="alfalah-footer__column">

          <h3>Scholarships</h3>

          <nav>
            <a href="#programs">Intermediate</a>
            <a href="#programs">DAE</a>
            <a href="#programs">Graduation</a>
            <a href="#programs">Master / BS (Hons)</a>
            <a href="#programs">Engineering</a>
            <a href="#programs">Medical</a>
          </nav>

        </div>


        {/* CONTACT */}
        <div className="alfalah-footer__column alfalah-footer__contact">

          <h3>Get In Touch</h3>

          <a
            href="mailto:info@alfalahss.org"
            className="alfalah-footer__contact-item"
          >
            <span className="alfalah-footer__contact-icon">
              @
            </span>

            <span>
              info@alfalahss.org
            </span>
          </a>


          <a
            href="tel:03451414457"
            className="alfalah-footer__contact-item"
          >
            <span className="alfalah-footer__contact-icon">
              +
            </span>

            <span>
              0345-1414457
            </span>
          </a>


          <div className="alfalah-footer__contact-item">
            <span className="alfalah-footer__contact-icon">
              •
            </span>

            <span>
              Alfalah Haji Muhammad Hussain
              Memorial Centre,
              <br />
              Gulshan-e-Razzak, Dhoria,
              <br />
              Dinga Road, Kharian, Gujrat
            </span>
          </div>


          {/* SOCIAL */}
          <div className="alfalah-footer__socials">

            <a
              href="https://www.instagram.com/alfalahsspk/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              FB
            </a>

            <a
              href="mailto:info@alfalahss.org"
              aria-label="Email"
            >
              @
            </a>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="alfalah-footer__bottom">

          <div className="alfalah-footer__line"></div>

          <div className="alfalah-footer__bottom-content">

            <p>
              © {new Date().getFullYear()} Alfalah Scholarship Scheme.
              All Rights Reserved.
            </p>

            <p className="alfalah-footer__motto">
              Education Without Prejudice
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="alfalah-footer__top"
              aria-label="Back to top"
            >
              ↑
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;