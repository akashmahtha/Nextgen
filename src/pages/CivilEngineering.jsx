import {
  ArrowRight,
  Building2,
  ClipboardList,
  Compass,
  HardHat,
  Ruler,
  Wrench,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./CivilEngineering.css";

function CivilEngineering() {
  const capabilities = [
    {
      number: "01",
      icon: <Compass />,
      title: "Project Development",
      description:
        "Professional engineering support from project understanding through development requirements.",
    },
    {
      number: "02",
      icon: <Ruler />,
      title: "Engineering Consultancy",
      description:
        "Engineering-oriented consultancy for construction and infrastructure project requirements.",
    },
    {
      number: "03",
      icon: <ClipboardList />,
      title: "Project Planning",
      description:
        "Structured planning support to establish project requirements, activities and execution priorities.",
    },
    {
      number: "04",
      icon: <HardHat />,
      title: "Construction Support",
      description:
        "Engineering support connected with construction activities and project coordination.",
    },
    {
      number: "05",
      icon: <Building2 />,
      title: "Infrastructure",
      description:
        "Support for infrastructure and development requirements across different project types.",
    },
    {
      number: "06",
      icon: <Wrench />,
      title: "Technical Solutions",
      description:
        "Practical engineering-focused solutions aligned with project requirements and objectives.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ce-page-hero">

        <div className="ce-page-overlay"></div>

        <div className="ce-page-hero-content">

          <span>
            ENGINEERING SERVICES
          </span>

          <h1>
            CIVIL
            <br />
            <strong>ENGINEERING</strong>
          </h1>

          <p>
            Professional engineering consultancy and project
            development support for construction and
            infrastructure requirements.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="ce-intro">

        <div className="ce-intro-container">

          <div className="ce-intro-content">

            <span className="ce-eyebrow">
              CIVIL ENGINEERING
            </span>

            <h2>
              ENGINEERING
              <span> THAT BUILDS</span>
            </h2>

            <div className="ce-line"></div>

            <p>
              NGECS provides civil engineering consultancy and
              project development support for construction and
              infrastructure requirements.
            </p>

            <p>
              Our engineering capabilities are designed to
              understand project requirements and provide
              structured professional support throughout the
              project lifecycle.
            </p>

          </div>


          <div className="ce-intro-image">

            <img
              src="/images/project-1.jpg"
              alt="Civil Engineering Project"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="ce-capabilities">

        <div className="ce-section-heading">

          <span className="ce-eyebrow">
            OUR CAPABILITIES
          </span>

          <h2>
            ENGINEERING
            <span> EXPERTISE</span>
          </h2>

          <div className="ce-line"></div>

          <p>
            Engineering-focused capabilities supporting
            project development and construction requirements.
          </p>

        </div>


        <div className="ce-capabilities-container">

          {capabilities.map((capability) => (

            <article
              className="ce-capability-card"
              key={capability.number}
            >

              <div className="ce-capability-top">

                <span>
                  {capability.number}
                </span>

                <div className="ce-capability-icon">
                  {capability.icon}
                </div>

              </div>

              <h3>
                {capability.title}
              </h3>

              <p>
                {capability.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="ce-approach">

        <div className="ce-approach-container">

          <div className="ce-approach-image">

            <img
              src="/images/project-2.jpg"
              alt="Engineering and Construction"
              loading="lazy"
            />

          </div>


          <div className="ce-approach-content">

            <span className="ce-eyebrow">
              ENGINEERING APPROACH
            </span>

            <h2>
              FROM
              <span> REQUIREMENT</span>
              <br />
              TO PROJECT
            </h2>

            <div className="ce-line"></div>

            <p>
              Every project begins with understanding its
              requirements. Our approach focuses on creating
              a structured engineering perspective around
              project objectives.
            </p>

            <p>
              By combining engineering and construction
              capabilities, NGECS can provide coordinated
              support for project development requirements.
            </p>

            <Link
              to="/construction-management"
              className="ce-button"
            >
              CONSTRUCTION MANAGEMENT

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="ce-process">

        <div className="ce-process-container">

          <div className="ce-process-heading">

            <span className="ce-eyebrow">
              OUR PROCESS
            </span>

            <h2>
              STRUCTURED
              <span> ENGINEERING</span>
            </h2>

            <div className="ce-line"></div>

          </div>


          <div className="ce-process-grid">

            <div className="ce-process-card">

              <span>01</span>

              <h3>
                UNDERSTAND
              </h3>

              <p>
                Review project objectives, requirements and
                development considerations.
              </p>

            </div>


            <div className="ce-process-card">

              <span>02</span>

              <h3>
                PLAN
              </h3>

              <p>
                Establish a structured approach around project
                requirements and priorities.
              </p>

            </div>


            <div className="ce-process-card">

              <span>03</span>

              <h3>
                COORDINATE
              </h3>

              <p>
                Coordinate engineering and construction-related
                project activities.
              </p>

            </div>


            <div className="ce-process-card">

              <span>04</span>

              <h3>
                SUPPORT
              </h3>

              <p>
                Provide professional engineering support aligned
                with project objectives.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ce-cta">

        <div className="ce-cta-container">

          <div>

            <span>
              ENGINEERING REQUIREMENT?
            </span>

            <h2>
              LET'S BUILD THE
              <strong> RIGHT SOLUTION.</strong>
            </h2>

          </div>

          <Link
            to="/contact"
            className="ce-cta-button"
          >
            CONTACT US

            <ArrowRight size={17} />

          </Link>

        </div>

      </section>


      <Footer />
    </>
  );
}

export default CivilEngineering;