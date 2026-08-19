import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      image: "/images/project-1.jpg",
      category: "CIVIL ENGINEERING",
      title: "ENGINEERING & PROJECT DEVELOPMENT",
      description:
        "Engineering consultancy and project development support for infrastructure and construction requirements.",
    },
    {
      number: "02",
      image: "/images/project-2.jpg",
      category: "CONSTRUCTION",
      title: "CONSTRUCTION MANAGEMENT",
      description:
        "Construction management support covering scheduling, cost estimating, contract administration and project coordination.",
    },
    {
      number: "03",
      image: "/images/project-3.jpg",
      category: "REAL ESTATE",
      title: "REAL ESTATE DEVELOPMENT",
      description:
        "Real estate solutions across residential, commercial, industrial, logistics and retail requirements.",
    },
    {
      number: "04",
      image: "/images/project-4.jpg",
      category: "PROJECT MARKETING",
      title: "PROJECT MARKETING",
      description:
        "Marketing strategy, creative sales and property-focused promotional activities.",
    },
    {
      number: "05",
      image: "/images/project-5.jpg",
      category: "PROJECT SERVICES",
      title: "PROJECT CONSULTANCY",
      description:
        "Integrated consultancy support combining engineering, construction and real estate capabilities.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="projects-page-hero">

        <div className="projects-page-overlay"></div>

        <div className="projects-page-hero-content">

          <span>
            OUR WORK
          </span>

          <h1>
            PROJECTS
            <br />
            <strong>&amp; PORTFOLIO</strong>
          </h1>

          <p>
            Explore our project-focused engineering,
            construction and real estate capabilities.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="projects-intro">

        <div className="projects-intro-container">

          <div className="projects-intro-content">

            <span className="projects-eyebrow">
              PROJECT PORTFOLIO
            </span>

            <h2>
              EXPERIENCE
              <span> ACROSS PROJECTS</span>
            </h2>

            <div className="projects-line"></div>

            <p>
              Our portfolio brings together project-oriented
              capabilities across engineering, construction
              management, project marketing and real estate.
            </p>

          </div>

          <div className="projects-intro-icon">

            <Building2 size={42} />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT GRID
      ===================================================== */}

      <section className="projects-list">

        <div className="projects-list-container">

          <div className="projects-section-heading">

            <span className="projects-eyebrow">
              SELECTED WORK
            </span>

            <h2>
              OUR
              <span> PROJECTS</span>
            </h2>

            <div className="projects-line"></div>

          </div>


          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="project-number">
                    {project.number}
                  </div>

                </div>


                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <Link
                    to="/contact"
                    className="project-link"
                  >
                    DISCUSS A PROJECT

                    <ArrowRight size={15} />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="projects-capabilities">

        <div className="projects-capabilities-container">

          <div className="projects-capabilities-content">

            <span className="projects-eyebrow">
              OUR CAPABILITIES
            </span>

            <h2>
              ONE TEAM.
              <span> MULTIPLE EXPERTISE.</span>
            </h2>

            <div className="projects-line"></div>

            <p>
              NGECS brings engineering, construction management,
              project marketing, investment management and real
              estate capabilities together under one platform.
            </p>

          </div>


          <div className="projects-capabilities-grid">

            <div>
              <strong>01</strong>
              <span>Engineering</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Construction</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Marketing</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Real Estate</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="projects-cta">

        <div className="projects-cta-container">

          <div>

            <span>
              HAVE A PROJECT?
            </span>

            <h2>
              LET'S BUILD THE
              <strong> NEXT ONE.</strong>
            </h2>

          </div>

          <Link
            to="/contact"
            className="projects-cta-button"
          >
            START A CONVERSATION

            <ArrowRight size={17} />

          </Link>

        </div>

      </section>


      <Footer />
    </>
  );
}

export default Projects;