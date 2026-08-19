import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Footer from "../components/Footer/Footer";

import "./Contact.css";

function Contact() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-page-hero">

        <div className="contact-page-overlay"></div>

        <div className="contact-page-hero-content">

          <span>
            GET IN TOUCH
          </span>

          <h1>
            CONTACT
            <br />
            <strong>US</strong>
          </h1>

          <p>
            Discuss your engineering, construction,
            real estate or project requirements with us.
          </p>

        </div>

      </section>


      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section className="contact-intro">

        <div className="contact-intro-container">

          <div className="contact-intro-content">

            <span className="contact-eyebrow">
              LET'S CONNECT
            </span>

            <h2>
              HAVE A PROJECT
              <span> IN MIND?</span>
            </h2>

            <div className="contact-line"></div>

            <p>
              Whether you are looking for engineering
              consultancy, construction management, project
              marketing, investment management or real estate
              solutions, our team is ready to discuss your
              requirements.
            </p>

          </div>


          <div className="contact-intro-number">

            <span>
              CALL US
            </span>

            <a href="tel:+919820280493">
              +91 98202 80493
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          OFFICE DETAILS
      ===================================================== */}

      <section className="contact-offices">

        <div className="contact-section-heading">

          <span className="contact-eyebrow">
            OUR OFFICES
          </span>

          <h2>
            FIND
            <span> US</span>
          </h2>

          <div className="contact-line"></div>

        </div>


        <div className="contact-offices-container">

          {/* PATNA */}

          <article className="contact-office-card">

            <div className="contact-office-top">

              <div className="contact-office-icon">
                <Building2 size={25} />
              </div>

              <span>
                01
              </span>

            </div>

            <span className="contact-office-label">
              PATNA OFFICE
            </span>

            <h3>
              PATNA
            </h3>

            <div className="contact-address">

              <MapPin size={18} />

              <p>
                501, Laxmi Community Hall,
                <br />
                Saket Vihar, Sector D,
                <br />
                Anishabad, Mitrmandal Colony,
                <br />
                Patna, Bihar – 800002
              </p>

            </div>

            <a
              href="tel:+919820280493"
              className="contact-office-phone"
            >
              <Phone size={16} />

              +91 98202 80493
            </a>

          </article>


          {/* PUNE */}

          <article className="contact-office-card">

            <div className="contact-office-top">

              <div className="contact-office-icon">
                <Building2 size={25} />
              </div>

              <span>
                02
              </span>

            </div>

            <span className="contact-office-label">
              PUNE OFFICE
            </span>

            <h3>
              PUNE
            </h3>

            <div className="contact-address">

              <MapPin size={18} />

              <p>
                Veggies Bowl Hotel,
                <br />
                Near Podar International School,
                <br />
                Dhole Patil College Road,
                <br />
                Opp. Gera Planet of Joy Project,
                <br />
                Wagholi, Pune – 412207
              </p>

            </div>

            <a
              href="tel:+919820280493"
              className="contact-office-phone"
            >
              <Phone size={16} />

              +91 98202 80493
            </a>

          </article>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="contact-information">

        <div className="contact-information-container">

          <div className="contact-information-content">

            <span className="contact-eyebrow">
              CONTACT INFORMATION
            </span>

            <h2>
              LET'S START A
              <span> CONVERSATION</span>
            </h2>

            <div className="contact-line"></div>

            <p>
              Share your requirement with us and our team
              can discuss the appropriate solution for your
              project.
            </p>

          </div>


          <div className="contact-info-grid">

            <a
              href="tel:+919820280493"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <Phone size={21} />
              </div>

              <span>
                PHONE
              </span>

              <h3>
                +91 98202 80493
              </h3>

            </a>


            <div className="contact-info-card">

              <div className="contact-info-icon">
                <Clock3 size={21} />
              </div>

              <span>
                OFFICE
              </span>

              <h3>
                Patna &amp; Pune
              </h3>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MESSAGE SECTION
      ===================================================== */}

      <section className="contact-message">

        <div className="contact-message-container">

          <div className="contact-message-heading">

            <span className="contact-eyebrow">
              PROJECT ENQUIRY
            </span>

            <h2>
              TELL US ABOUT
              <span> YOUR PROJECT</span>
            </h2>

            <div className="contact-line"></div>

            <p>
              Fill in your details and share your project
              requirements with our team.
            </p>

          </div>


          <form className="contact-form">

            <div className="contact-form-row">

              <div className="contact-form-group">

                <label>
                  NAME
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                />

              </div>


              <div className="contact-form-group">

                <label>
                  PHONE
                </label>

                <input
                  type="tel"
                  placeholder="Your phone number"
                />

              </div>

            </div>


            <div className="contact-form-row">

              <div className="contact-form-group">

                <label>
                  EMAIL
                </label>

                <input
                  type="email"
                  placeholder="Your email"
                />

              </div>


              <div className="contact-form-group">

                <label>
                  SERVICE
                </label>

                <select defaultValue="">

                  <option value="" disabled>
                    Select service
                  </option>

                  <option>
                    Civil Engineering
                  </option>

                  <option>
                    Construction Management
                  </option>

                  <option>
                    Project Marketing
                  </option>

                  <option>
                    Investment Management
                  </option>

                  <option>
                    Real Estate Solutions
                  </option>

                </select>

              </div>

            </div>


            <div className="contact-form-group">

              <label>
                MESSAGE
              </label>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              SEND ENQUIRY

              <ArrowRight size={17} />

            </button>

          </form>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="contact-cta">

        <div className="contact-cta-container">

          <div>

            <span>
              NEXT GEN ENGINEERING CONSULTANCY SERVICES
            </span>

            <h2>
              BUILDING IDEAS INTO
              <strong> REALITY.</strong>
            </h2>

          </div>

          <a
            href="tel:+919820280493"
            className="contact-cta-button"
          >
            CALL US

            <Phone size={17} />

          </a>

        </div>

      </section>


      <Footer />
    </>
  );
}

export default Contact;