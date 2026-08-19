import {
  ArrowRight,
  BarChart3,
  Building2,
  ChartNoAxesCombined,
  ClipboardCheck,
  HardHat,
  MapPinned,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: <HardHat />,
      title: "Civil Engineering",
      description:
        "Engineering consultancy and project development support for infrastructure and construction requirements.",
      link: "/civil-engineering",
    },
    {
      number: "02",
      icon: <ClipboardCheck />,
      title: "Construction Management",
      description:
        "Professional support covering project scheduling, cost estimating, contract administration and coordination.",
      link: "/construction-management",
    },
    {
      number: "03",
      icon: <BarChart3 />,
      title: "Project Marketing",
      description:
        "Marketing strategy, creative sales and promotional support for real estate and project requirements.",
      link: "/project-marketing",
    },
    {
      number: "04",
      icon: <ChartNoAxesCombined />,
      title: "Investment Management",
      description:
        "Structured project and investment-oriented support for informed project and investment decisions.",
      link: "/investment-management",
    },
    {
      number: "05",
      icon: <Building2 />,
      title: "Real Estate Solutions",
      description:
        "Solutions across residential, commercial, industrial, logistics, retail and other property requirements.",
      link: "/real-estate",
    },
    {
      number: "06",
      icon: <MapPinned />,
      title: "Project Consultancy",
      description:
        "Integrated consultancy combining engineering, construction and real estate capabilities.",
      link: "/projects",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-page-hero">

        <div className="services-page-overlay"></div>

        <div className="services-page-hero-content">

          <span>
            WHAT WE DO
          </span>

          <h1>
            OUR
            <br />
            <strong>SERVICES</strong>
          </h1>

          <p>
            Integrated engineering, construction, marketing,
            investment and real estate solutions.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="services-intro">

        <div className="services-intro-container">

          <div className="services-intro-content">

            <span className="services-eyebrow">
              OUR EXPERTISE
            </span>

            <h2>
              SOLUTIONS FOR
              <span> EVERY PROJECT</span>
            </h2>

            <div className="services-line"></div>

            <p>
              NGECS brings multiple project capabilities together
              to provide professional solutions across engineering,
              construction management, project marketing,
              investment management and real estate.
            </p>

          </div>

          <div className="services-intro-number">

            <strong>06</strong>

            <span>
              CORE
              <br />
              SERVICES
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES GRID
      ===================================================== */}

      <section className="services-list">

        <div className="services-list-container">

          <div className="services-section-heading">

            <span className="services-eyebrow">
              OUR CAPABILITIES
            </span>

            <h2>
              WHAT WE
              <span> OFFER</span>
            </h2>

            <div className="services-line"></div>

            <p>
              Explore our core service areas and project
              capabilities.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service) => (

              <article
                className="service-main-card"
                key={service.number}
              >

                <div className="service-main-top">

                  <span className="service-main-number">
                    {service.number}
                  </span>

                  <div className="service-main-icon">
                    {service.icon}
                  </div>

                </div>


                <div className="service-main-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="service-main-link"
                  >
                    EXPLORE SERVICE

                    <ArrowRight size={15} />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="services-approach">

        <div className="services-approach-container">

          <div className="services-approach-image">

            <img
              src="/images/project-3.jpg"
              alt="NGECS Project"
              loading="lazy"
            />

          </div>


          <div className="services-approach-content">

            <span className="services-eyebrow">
              OUR APPROACH
            </span>

            <h2>
              ONE
              <span> INTEGRATED</span>
              <br />
              APPROACH
            </h2>

            <div className="services-line"></div>

            <p>
              Projects often require multiple disciplines to
              work together. Our integrated approach connects
              engineering, construction, marketing and real
              estate capabilities.
            </p>

            <p>
              This helps provide a broader understanding of
              project requirements and creates a more coordinated
              project experience.
            </p>

            <Link
              to="/about"
              className="services-button"
            >
              ABOUT NGECS

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="services-process">

        <div className="services-process-container">

          <div className="services-process-heading">

            <span className="services-eyebrow">
              HOW WE WORK
            </span>

            <h2>
              FROM IDEA
              <span> TO EXECUTION</span>
            </h2>

            <div className="services-line"></div>

          </div>


          <div className="services-process-grid">

            <div className="services-process-card">

              <span>01</span>

              <h3>
                UNDERSTAND
              </h3>

              <p>
                Understand the project, requirement and
                objectives.
              </p>

            </div>


            <div className="services-process-card">

              <span>02</span>

              <h3>
                PLAN
              </h3>

              <p>
                Develop a structured approach around the
                project requirements.
              </p>

            </div>


            <div className="services-process-card">

              <span>03</span>

              <h3>
                EXECUTE
              </h3>

              <p>
                Coordinate the required project activities
                and professional services.
              </p>

            </div>


            <div className="services-process-card">

              <span>04</span>

              <h3>
                DELIVER
              </h3>

              <p>
                Work towards delivering the project objectives
                through coordinated execution.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-cta">

        <div className="services-cta-container">

          <div>

            <span>
              START YOUR PROJECT
            </span>

            <h2>
              HAVE A REQUIREMENT?
              <strong> LET'S TALK.</strong>
            </h2>

          </div>

          <Link
            to="/contact"
            className="services-cta-button"
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

export default Services;