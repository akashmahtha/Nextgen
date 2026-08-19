import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  HardHat,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./ConstructionManagement.css";

function ConstructionManagement() {
  const capabilities = [
    {
      number: "01",
      icon: <ClipboardCheck />,
      title: "Project Planning",
      description:
        "Structured planning to establish project activities, priorities, timelines and execution requirements.",
    },
    {
      number: "02",
      icon: <Clock3 />,
      title: "Schedule Management",
      description:
        "Support for project scheduling and coordination to help maintain planned project activities.",
    },
    {
      number: "03",
      icon: <BarChart3 />,
      title: "Cost Estimating",
      description:
        "Cost-focused project support to understand requirements and establish project cost considerations.",
    },
    {
      number: "04",
      icon: <FileCheck2 />,
      title: "Contract Administration",
      description:
        "Professional support around contract-related project administration and coordination.",
    },
    {
      number: "05",
      icon: <Users />,
      title: "Project Coordination",
      description:
        "Coordination between project stakeholders and activities for a more structured execution process.",
    },
    {
      number: "06",
      icon: <HardHat />,
      title: "Construction Support",
      description:
        "Practical construction management support focused on project objectives and execution requirements.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="cm-page-hero">

        <div className="cm-page-overlay"></div>

        <div className="cm-page-hero-content">

          <span>
            CONSTRUCTION SERVICES
          </span>

          <h1>
            CONSTRUCTION
            <br />
            <strong>MANAGEMENT</strong>
          </h1>

          <p>
            Structured construction management support for
            planning, scheduling, cost, contracts and project
            coordination.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="cm-intro">

        <div className="cm-intro-container">

          <div className="cm-intro-image">

            <img
              src="/images/project-2.jpg"
              alt="Construction Management"
            />

          </div>


          <div className="cm-intro-content">

            <span className="cm-eyebrow">
              CONSTRUCTION MANAGEMENT
            </span>

            <h2>
              PLANNING
              <span> PROJECTS</span>
              <br />
              FOR BETTER EXECUTION
            </h2>

            <div className="cm-line"></div>

            <p>
              Construction projects require coordination across
              multiple activities, stakeholders and timelines.
              NGECS provides construction management support
              designed around these project requirements.
            </p>

            <p>
              Our approach focuses on structured planning,
              coordination, cost awareness, scheduling and
              project administration.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="cm-capabilities">

        <div className="cm-section-heading">

          <span className="cm-eyebrow">
            OUR CAPABILITIES
          </span>

          <h2>
            CONSTRUCTION
            <span> EXPERTISE</span>
          </h2>

          <div className="cm-line"></div>

          <p>
            Professional project management support across
            important construction activities.
          </p>

        </div>


        <div className="cm-capabilities-container">

          {capabilities.map((capability) => (

            <article
              className="cm-capability-card"
              key={capability.number}
            >

              <div className="cm-capability-top">

                <span>
                  {capability.number}
                </span>

                <div className="cm-capability-icon">
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
          MANAGEMENT APPROACH
      ===================================================== */}

      <section className="cm-approach">

        <div className="cm-approach-container">

          <div className="cm-approach-content">

            <span className="cm-eyebrow">
              OUR APPROACH
            </span>

            <h2>
              CONTROL.
              <span> COORDINATE.</span>
              <br />
              DELIVER.
            </h2>

            <div className="cm-line"></div>

            <p>
              Effective construction management depends on
              clear planning and coordination. Our approach
              brings together project requirements, schedules,
              costs and stakeholder coordination.
            </p>

            <p>
              We focus on creating a structured framework that
              helps projects move from planning toward execution.
            </p>

            <Link
              to="/projects"
              className="cm-button"
            >
              VIEW PROJECTS

              <ArrowRight size={16} />

            </Link>

          </div>


          <div className="cm-approach-image">

            <img
              src="/images/project-4.jpg"
              alt="Construction Project"
              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="cm-process">

        <div className="cm-process-container">

          <div className="cm-process-heading">

            <span className="cm-eyebrow">
              PROJECT MANAGEMENT PROCESS
            </span>

            <h2>
              STRUCTURED
              <span> EXECUTION</span>
            </h2>

            <div className="cm-line"></div>

          </div>


          <div className="cm-process-grid">

            <div className="cm-process-card">

              <span>01</span>

              <h3>
                PLAN
              </h3>

              <p>
                Establish project requirements, activities and
                execution priorities.
              </p>

            </div>


            <div className="cm-process-card">

              <span>02</span>

              <h3>
                SCHEDULE
              </h3>

              <p>
                Organise project activities around realistic
                timelines and priorities.
              </p>

            </div>


            <div className="cm-process-card">

              <span>03</span>

              <h3>
                COORDINATE
              </h3>

              <p>
                Coordinate project stakeholders, activities and
                construction requirements.
              </p>

            </div>


            <div className="cm-process-card">

              <span>04</span>

              <h3>
                MONITOR
              </h3>

              <p>
                Maintain project focus around schedule, cost and
                execution requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cm-cta">

        <div className="cm-cta-container">

          <div>

            <span>
              CONSTRUCTION PROJECT?
            </span>

            <h2>
              LET'S MANAGE IT
              <strong> TOGETHER.</strong>
            </h2>

          </div>

          <Link
            to="/contact"
            className="cm-cta-button"
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

export default ConstructionManagement;