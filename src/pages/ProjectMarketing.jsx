import {
  ArrowRight,
  BarChart3,
  Megaphone,
  Presentation,
  Target,
  Users,
  Building2,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./ProjectMarketing.css";

function ProjectMarketing() {
  const marketingServices = [
    {
      number: "01",
      icon: <Target />,
      title: "Marketing Strategy",
      description:
        "Designing marketing strategies for real estate projects based on project requirements and market understanding.",
    },
    {
      number: "02",
      icon: <Megaphone />,
      title: "Creative Sales",
      description:
        "Creative sales initiatives designed to support project visibility, customer engagement and sales opportunities.",
    },
    {
      number: "03",
      icon: <Presentation />,
      title: "Property Fairs",
      description:
        "Property fairs and promotional activities designed to connect projects with prospective customers.",
    },
    {
      number: "04",
      icon: <BarChart3 />,
      title: "Market Understanding",
      description:
        "Market-focused inputs and analytics supporting informed marketing and project decisions.",
    },
    {
      number: "05",
      icon: <Users />,
      title: "Customer Engagement",
      description:
        "Customer-focused activities supporting communication, project positioning and sales interactions.",
    },
    {
      number: "06",
      icon: <Building2 />,
      title: "Project Positioning",
      description:
        "Supporting the positioning and promotion of real estate projects through structured marketing activities.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pm-page-hero">

        <div className="pm-page-overlay"></div>

        <div className="pm-page-hero-content">

          <span>
            REAL ESTATE SERVICES
          </span>

          <h1>
            PROJECT
            <br />
            <strong>MARKETING</strong>
          </h1>

          <p>
            Strategic marketing and sales solutions for
            real estate projects.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="pm-intro">

        <div className="pm-intro-container">

          <div className="pm-intro-content">

            <span className="pm-eyebrow">
              PROJECT MARKETING VERTICAL
            </span>

            <h2>
              POSITIONING
              <span> PROJECTS FOR SUCCESS</span>
            </h2>

            <div className="pm-line"></div>

            <p>
              NGECS has a dedicated Project Marketing vertical
              where the company designs marketing strategies,
              creative sales and property fairs for real estate
              projects.
            </p>

            <p>
              Our approach combines project understanding,
              market-focused thinking and structured marketing
              activities to support project visibility and
              sales opportunities.
            </p>

          </div>


          <div className="pm-intro-image">

            <img
              src="/images/project-5.jpg"
              alt="NGECS Project Marketing"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="pm-services">

        <div className="pm-section-heading">

          <span className="pm-eyebrow">
            WHAT WE PROVIDE
          </span>

          <h2>
            MARKETING
            <span> SOLUTIONS</span>
          </h2>

          <div className="pm-line"></div>

          <p>
            Focused marketing capabilities designed for
            real estate project requirements.
          </p>

        </div>


        <div className="pm-services-container">

          {marketingServices.map((service) => (

            <article
              className="pm-service-card"
              key={service.number}
            >

              <div className="pm-service-top">

                <span>
                  {service.number}
                </span>

                <div className="pm-service-icon">
                  {service.icon}
                </div>

              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          MARKETING STRATEGY
      ===================================================== */}

      <section className="pm-strategy">

        <div className="pm-strategy-container">

          <div className="pm-strategy-image">

            <img
              src="/images/project-2.jpg"
              alt="Project Marketing Strategy"
              loading="lazy"
            />

          </div>


          <div className="pm-strategy-content">

            <span className="pm-eyebrow">
              MARKETING STRATEGY
            </span>

            <h2>
              FROM MARKET
              <span> TO CUSTOMER</span>
            </h2>

            <div className="pm-line"></div>

            <p>
              Effective project marketing begins with
              understanding the project and its market
              requirements.
            </p>

            <p>
              NGECS focuses on developing marketing strategies,
              creative sales initiatives and property fairs to
              create opportunities for real estate projects.
            </p>

            <Link
              to="/real-estate"
              className="pm-button"
            >
              REAL ESTATE SOLUTIONS

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="pm-process">

        <div className="pm-process-container">

          <div className="pm-process-heading">

            <span className="pm-eyebrow">
              OUR APPROACH
            </span>

            <h2>
              STRUCTURED
              <span> MARKETING</span>
            </h2>

            <div className="pm-line"></div>

            <p>
              A focused approach to project marketing and
              customer engagement.
            </p>

          </div>


          <div className="pm-process-grid">

            <div className="pm-process-item">

              <span>01</span>

              <h3>
                UNDERSTAND
              </h3>

              <p>
                Understand the project and its market
                requirements.
              </p>

            </div>

            <div className="pm-process-item">

              <span>02</span>

              <h3>
                STRATEGIZE
              </h3>

              <p>
                Develop appropriate marketing strategies
                and activities.
              </p>

            </div>

            <div className="pm-process-item">

              <span>03</span>

              <h3>
                PROMOTE
              </h3>

              <p>
                Use creative sales and property-focused
                promotional activities.
              </p>

            </div>

            <div className="pm-process-item">

              <span>04</span>

              <h3>
                ENGAGE
              </h3>

              <p>
                Connect projects with prospective customers
                and support sales opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="pm-cta">

        <div className="pm-cta-container">

          <div>

            <span>
              HAVE A PROJECT TO MARKET?
            </span>

            <h2>
              LET'S CREATE THE
              <strong> RIGHT STRATEGY.</strong>
            </h2>

          </div>

          <Link
            to="/contact"
            className="pm-cta-button"
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

export default ProjectMarketing;