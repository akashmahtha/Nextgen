import {
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="footer-container">

          {/* =================================================
              COMPANY
          ================================================= */}

          <div className="footer-column footer-company">

            <Link to="/" className="footer-logo">
              <img
                src="/images/logo.png"
                alt="NextGen Civil"
              />
            </Link>

            <p>
              NextGen Civil delivers professional engineering,
              construction, project marketing and real estate
              consultancy solutions with a focus on quality,
              innovation and client satisfaction.
            </p>

            {/* SOCIAL MEDIA */}

            <div className="footer-social">

              <a
                href="https://www.facebook.com/nextgencivilonline"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/nextgencivilengg"
                aria-label="Instagram"
              >
                ◎
              </a>

              

            </div>

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="footer-column">

            <h3>QUICK LINKS</h3>

            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/projects">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/team">
                  Our Team
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="footer-column">

            <h3>OUR SERVICES</h3>

            <ul>

              <li>
                <Link to="/civil-engineering">
                  Civil Engineering
                </Link>
              </li>

              <li>
                <Link to="/project-marketing">
                  Project Marketing
                </Link>
              </li>

              <li>
                <Link to="/construction-management">
                  Construction Management
                </Link>
              </li>

             

              <li>
                <Link to="/real-estate">
                  Real Estate Consultancy
                </Link>
              </li>

            </ul>

          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="footer-column footer-contact">

            <h3>CONTACT US</h3>

            {/* PHONE */}

            <div className="footer-contact-item">

              <Phone size={18} />

              <a href="tel:+919820280493">
                +91 98202 80493
              </a>

            </div>

            {/* PATNA OFFICE */}

            <div className="footer-contact-item">

              <MapPin size={18} />

              <span>

                <strong>
                  Patna Office
                </strong>

                <br />

                501, Laxmi Community Hall,
                <br />

                Saket Vihar Sector D, Anishabad,
                <br />

                Mitrmandal Colony,
                <br />

                Patna – 800002

              </span>

            </div>

            {/* PUNE OFFICE */}

            <div className="footer-contact-item">

              <MapPin size={18} />

              <span>

                <strong>
                  Pune Office
                </strong>

                <br />

                Veggies Bowl Hotel,
                <br />

                Near Podar International School,
                <br />

                Dhole Patil College Road,
                <br />

                Opp. Gera Planet of Joy Project,
                <br />

                Wagholi,
                <br />

                Pune – 412207

              </span>

            </div>

          </div>

          {/* =================================================
              NEWSLETTER
          ================================================= */}

          <div className="footer-column footer-newsletter">

            <h3>
              STAY CONNECTED
            </h3>

            <p>
              Subscribe to receive our latest updates,
              projects and company news.
            </p>

            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >

              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
              />

              <button
                type="submit"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} NextGen Civil.
            All Rights Reserved.
          </p>

          <div className="footer-legal">

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <span>|</span>

            <Link to="/terms">
              Terms &amp; Conditions
            </Link>

          </div>

          <p className="footer-credit">
            Designed &amp; Developed with ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;