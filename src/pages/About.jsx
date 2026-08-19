import {
  ArrowRight,
  CheckCircle2,
  Building2,
  DraftingCompass,
  HardHat,
  FlaskConical,
  BarChart3,
  Home,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./About.css";

function About() {
  return (
    <>
      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section className="about-page-hero">

        <div className="about-page-overlay"></div>

        <div className="about-page-hero-content">

          <span>ABOUT NEXT GEN ENGINEERING CONSULTANCY SERVICES</span>

          <h1>
            WE ARE THE
            <br />
            <strong>NEXT GENERATION</strong>
            <br />
            OF ENGINEERS
          </h1>

          <p>
            Ready to make our mark, let us make it with you.
          </p>

        </div>

      </section>


      {/* =====================================================
          COMPANY INTRODUCTION
      ===================================================== */}

      <section className="about-intro">

        <div className="about-intro-container">

          {/* IMAGE */}

          <div className="about-intro-image">

            <img
              src="/images/about.jpg"
              alt="Next Gen Engineering Consultancy Services"
            />

          </div>


          {/* CONTENT */}

          <div className="about-intro-content">

            <span className="about-eyebrow">
              WHO WE ARE
            </span>

            <h2>
              NEXT GEN ENGINEERING
              <span> CONSULTANCY SERVICES</span>
            </h2>

            <div className="about-line"></div>

            <p>
              Next Gen Engineering Consultancy Services (NGECS)
              was established in early 2015 with a vision of
              providing comprehensive professional consultancy
              services in all aspects of civil engineering.
            </p>

            <p>
              Our services cover the complete range from planning,
              Vastu consultation, preliminary and detailed
              engineering drawing and designing, estimating and
              evaluation to construction supervision, project
              management and construction management.
            </p>

            <p>
              We work across infrastructure development projects,
              Public Private Partnership (PPP) projects and
              individual client projects.
            </p>

            <div className="about-features">

              <div>
                <CheckCircle2 size={18} />
                <span>
                  Professional Consultancy
                </span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>
                  Civil Engineering Expertise
                </span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>
                  Project Management
                </span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>
                  Construction Management
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR EXPERTISE
      ===================================================== */}

      <section className="about-expertise">

        <div className="about-section-heading">

          <span className="about-eyebrow">
            OUR EXPERTISE
          </span>

          <h2>
            COMPREHENSIVE
            <span> SOLUTIONS</span>
          </h2>

          <div className="about-line"></div>

          <p>
            Our specialization extends across a diverse range
            of engineering, construction, real estate and
            management services.
          </p>

        </div>


        <div className="about-expertise-container">

          {/* ENGINEERING */}

          <div className="about-expertise-card">

            <div className="about-card-icon">
              <DraftingCompass size={28} />
            </div>

            <h3>
              Engineering &amp; Design
            </h3>

            <p>
              Drawing, designing, transportation engineering,
              bridge engineering, railway engineering,
              environmental engineering, water supply
              engineering, sanitation and solid waste management,
              town and urban planning, irrigation projects and
              geotechnical investigations.
            </p>

          </div>


          {/* CONSTRUCTION */}

          <div className="about-expertise-card">

            <div className="about-card-icon">
              <HardHat size={28} />
            </div>

            <h3>
              Construction &amp; Management
            </h3>

            <p>
              Construction supervision, project management and
              construction management for infrastructure,
              residential, commercial and other development
              projects.
            </p>

          </div>


          {/* TESTING */}

          <div className="about-expertise-card">

            <div className="about-card-icon">
              <FlaskConical size={28} />
            </div>

            <h3>
              Testing Laboratory
            </h3>

            <p>
              NGECS provides testing services through its
              accredited testing laboratory, including testing
              related to aggregate, asphalt, bitumen,
              cement-concrete and soil.
            </p>

          </div>


          {/* PROJECT MARKETING */}

          <div className="about-expertise-card">

            <div className="about-card-icon">
              <BarChart3 size={28} />
            </div>

            <h3>
              Project Marketing
            </h3>

            <p>
              NGECS provides project marketing services including
              marketing strategy, creative sales and property
              fairs for real estate projects.
            </p>

          </div>


          {/* REAL ESTATE */}

          <div className="about-expertise-card">

            <div className="about-card-icon">
              <Building2 size={28} />
            </div>

            <h3>
              Real Estate Solutions
            </h3>

            <p>
              Real estate solutions covering plots, agency,
              industrial, commercial, logistics, retail and
              hospitals, including leasing and selling.
            </p>

          </div>


          {/* VASTU */}

          <div className="about-expertise-card">

            <div className="about-card-icon">
              <Home size={28} />
            </div>

            <h3>
              Vastu Consultation
            </h3>

            <p>
              Professional Vastu consultation as part of the
              company's comprehensive consultancy services for
              proposed and existing properties.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT MARKETING
      ===================================================== */}

      <section className="about-approach">

        <div className="about-approach-container">

          <div className="about-approach-content">

            <span className="about-eyebrow">
              PROJECT MARKETING
            </span>

            <h2>
              MAKING PROJECTS
              <span> SUCCESSFUL</span>
            </h2>

            <div className="about-line"></div>

            <p>
              NGECS has a dedicated Project Marketing vertical
              where the company designs marketing strategies,
              creative sales and property fairs for real estate
              projects.
            </p>

            <p>
              The company combines market understanding,
              marketing strategies and investment practices to
              support the success and viability of projects.
            </p>

            <Link
              to="/project-marketing"
              className="about-button"
            >
              EXPLORE PROJECT MARKETING

              <ArrowRight size={17} />

            </Link>

          </div>


          <div className="about-approach-image">

            <img
              src="/images/project-2.jpg"
              alt="Project Marketing"
              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          REAL ESTATE
      ===================================================== */}

      <section className="about-real-estate">

        <div className="about-real-estate-container">

          <div className="about-real-estate-image">

            <img
              src="/images/project-5.jpg"
              alt="NGECS Real Estate Solutions"
              loading="lazy"
            />

          </div>


          <div className="about-real-estate-content">

            <span className="about-eyebrow">
              REAL ESTATE SOLUTIONS
            </span>

            <h2>
              SOLUTIONS FOR
              <span> EVERY PROPERTY</span>
            </h2>

            <div className="about-line"></div>

            <p>
              NGECS provides real estate solutions for
              residential, commercial, industrial and retail
              properties.
            </p>

            <p>
              The Real Estate Solution vertical also covers
              property management, leasing and selling solutions,
              with specialized capabilities for warehousing and
              cold storage projects.
            </p>

            <Link
              to="/real-estate"
              className="about-button"
            >
              REAL ESTATE SOLUTIONS

              <ArrowRight size={17} />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION & MISSION
      ===================================================== */}

      <section className="about-vision">

        <div className="about-vision-container">

          {/* VISION */}

          <div className="about-vision-box">

            <span className="about-eyebrow">
              OUR VISION
            </span>

            <h2>
              CREATING REAL
              <span> VALUE</span>
            </h2>

            <div className="about-line"></div>

            <p>
              NGECS was established with the vision to create
              real value for its customers by providing
              specialised services in the industry.
            </p>

            <p>
              Our focus on specialised domains and our passion
              to work in these areas creates a competitive edge.
              We continuously work towards building the latest
              knowledge base, providing accurate analytics,
              best-practice advisory and quality inputs for
              informed business decisions.
            </p>

          </div>


          {/* MISSION */}

          <div className="about-vision-box">

            <span className="about-eyebrow">
              OUR MISSION
            </span>

            <h2>
              QUALITY &
              <span> EXPERTISE</span>
            </h2>

            <div className="about-line"></div>

            <p>
              Next Gen Engineering Consultancy Services is
              dedicated to exceeding our clients' expectations
              by providing superior quality engineering,
              environmental and management solutions to
              today's challenges.
            </p>

            <p>
              The guiding principles of the NGECS team are
              ethical, responsible and unmatched personal
              service to our clients.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="about-cta-container">

          <div>

            <span>
              READY TO WORK WITH US?
            </span>

            <h2>
              LET'S BUILD THE
              <strong> NEXT GENERATION.</strong>
            </h2>

          </div>

          <Link
            to="/contact"
            className="about-cta-button"
          >
            CONTACT US

            <ArrowRight size={17} />

          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </>
  );
}

export default About;