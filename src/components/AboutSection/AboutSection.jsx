import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="about-content">

          <span className="about-eyebrow">
            WHO WE ARE
          </span>

          <h2>
            ENGINEERING EXCELLENCE,
            <span>DELIVERED</span>
          </h2>

          <div className="about-title-line"></div>

          <p>
            NextGen Civil is a leading engineering consultancy
            firm offering a wide range of services in civil
            engineering, construction management, real estate
            and Vastu consultancy.
          </p>

          <p>
            We are committed to quality, integrity and client
            satisfaction. Our experienced team combines
            technical expertise with innovative solutions to
            deliver projects that create lasting value.
          </p>

          <Link
            to="/about"
            className="about-button"
          >
            LEARN MORE

            <ArrowRight size={17} />
          </Link>

        </div>

        {/* =========================================
            RIGHT ARCHITECTURE IMAGE
        ========================================= */}

        <div className="about-visual">

          <div className="about-image-wrapper">

            <img
              src="/images/about.jpg"
              alt="NextGen Civil architectural design"
              className="about-image"
            />

          </div>

          <div className="about-decoration"></div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;