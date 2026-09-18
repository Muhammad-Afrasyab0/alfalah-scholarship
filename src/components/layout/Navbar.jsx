import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Download,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("alfalah-theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light-theme");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light-theme");
      setIsDark(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.remove("light-theme");
      localStorage.setItem("alfalah-theme", "dark");
    } else {
      document.documentElement.classList.add("light-theme");
      localStorage.setItem("alfalah-theme", "light");
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // =====================================================
  // ACTIVE ROUTES
  // =====================================================

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isDonor = location.pathname === "/donor";
  const isScholar = location.pathname === "/scholar";
  const isContact = location.pathname === "/contact";

  return (
    <header
      className={`navbar ${
        isScrolled ? "navbar--scrolled" : ""
      }`}
    >
      <div className="navbar__ambient navbar__ambient--left" />
      <div className="navbar__ambient navbar__ambient--right" />

      <div className="navbar__container">

        {/* =================================================
            BRAND
        ================================================= */}

        <a
          href="/"
          className="navbar__brand"
          onClick={closeMenu}
        >
          <div className="navbar__logo-wrap">
            <img
              src="/images/logo.png"
              alt="Alfalah Scholarship Scheme"
              className="navbar__logo"
            />
          </div>

          <div className="navbar__brand-copy">
            <span className="navbar__brand-name">
              ALFALAH
            </span>

            <span className="navbar__brand-subtitle">
              SCHOLARSHIP SCHEME
            </span>
          </div>
        </a>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="navbar__links">

          {/* HOME */}

          <a
            href="/"
            className={`navbar__link ${
              isHome
                ? "navbar__link--active"
                : ""
            }`}
          >
            Home
          </a>


          {/* ABOUT */}

          <a
            href="/about"
            className={`navbar__link ${
              isAbout
                ? "navbar__link--active"
                : ""
            }`}
          >
            About Us
          </a>


          {/* DONOR */}

          <a
            href="/donor"
            className={`navbar__link ${
              isDonor
                ? "navbar__link--active"
                : ""
            }`}
          >
            Become a Donor
          </a>


          {/* SCHOLAR */}

          <a
            href="/scholar"
            className={`navbar__link ${
              isScholar
                ? "navbar__link--active"
                : ""
            }`}
          >
            Become a Scholar
          </a>


          {/* CONTACT */}

          <a
            href="/contact"
            className={`navbar__link ${
              isContact
                ? "navbar__link--active"
                : ""
            }`}
          >
            Contact Us
          </a>

        </nav>


        {/* =================================================
            RIGHT ACTIONS
        ================================================= */}

        <div className="navbar__actions">

          {/* Theme Toggle */}

          <button
            type="button"
            className={`navbar__theme-toggle ${
              isDark
                ? "navbar__theme-toggle--dark"
                : "navbar__theme-toggle--light"
            }`}
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={
              isDark
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            <span className="navbar__theme-track">

              <span className="navbar__theme-icon navbar__theme-icon--sun">
                <Sun
                  size={12}
                  strokeWidth={2}
                />
              </span>

              <span className="navbar__theme-icon navbar__theme-icon--moon">
                <Moon
                  size={12}
                  strokeWidth={2}
                />
              </span>

              <span className="navbar__theme-thumb" />

            </span>
          </button>


          {/* Annual Report */}

          <a
            href="#"
            download
            className="navbar__report"
            title="Download Annual Report 2026"
          >
            <span className="navbar__report-icon">
              <Download
                size={15}
                strokeWidth={1.9}
              />
            </span>

            <span className="navbar__report-content">
              <small>DOWNLOAD</small>
              <strong>Annual Report 2026</strong>
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="navbar__report-arrow"
            />
          </a>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className="navbar__menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X
              size={23}
              strokeWidth={1.8}
            />
          ) : (
            <Menu
              size={23}
              strokeWidth={1.8}
            />
          )}
        </button>

      </div>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <div
        className={`navbar__mobile ${
          isOpen
            ? "navbar__mobile--open"
            : ""
        }`}
      >
        <nav className="navbar__mobile-inner">

          {/* HOME */}

          <a
            href="/"
            className={`navbar__mobile-link ${
              isHome
                ? "navbar__mobile-link--active"
                : ""
            }`}
            onClick={closeMenu}
          >
            <span>01</span>
            Home
          </a>


          {/* ABOUT */}

          <a
            href="/about"
            className={`navbar__mobile-link ${
              isAbout
                ? "navbar__mobile-link--active"
                : ""
            }`}
            onClick={closeMenu}
          >
            <span>02</span>
            About Us
          </a>


          {/* DONOR */}

          <a
            href="/donor"
            className={`navbar__mobile-link ${
              isDonor
                ? "navbar__mobile-link--active"
                : ""
            }`}
            onClick={closeMenu}
          >
            <span>03</span>
            Become a Donor
          </a>


          {/* SCHOLAR */}

          <a
            href="/scholar"
            className={`navbar__mobile-link ${
              isScholar
                ? "navbar__mobile-link--active"
                : ""
            }`}
            onClick={closeMenu}
          >
            <span>04</span>
            Become a Scholar
          </a>


          {/* CONTACT */}

          <a
            href="/contact"
            className={`navbar__mobile-link ${
              isContact
                ? "navbar__mobile-link--active"
                : ""
            }`}
            onClick={closeMenu}
          >
            <span>05</span>
            Contact Us
          </a>


          {/* =================================================
              MOBILE THEME
          ================================================= */}

          <button
            type="button"
            className="navbar__mobile-theme"
            onClick={toggleTheme}
          >
            <span>
              {isDark
                ? "Light Theme"
                : "Dark Theme"}
            </span>

            {isDark ? (
              <Sun
                size={17}
                strokeWidth={1.8}
              />
            ) : (
              <Moon
                size={17}
                strokeWidth={1.8}
              />
            )}
          </button>


          {/* =================================================
              MOBILE REPORT
          ================================================= */}

          <a
            href="#"
            download
            className="navbar__mobile-report"
            onClick={closeMenu}
          >
            <Download
              size={17}
              strokeWidth={1.8}
            />

            <span>
              <small>DOWNLOAD</small>
              Annual Report 2026
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
            />
          </a>

        </nav>
      </div>

    </header>
  );
}

export default Navbar;