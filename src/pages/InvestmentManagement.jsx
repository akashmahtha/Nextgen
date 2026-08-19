import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleDollarSign,
  FileSearch,
  HandCoins,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./InvestmentManagement.css";

function InvestmentManagement() {
  const investmentServices = [
    {
      number: "01",
      icon: <ChartNoAxesCombined />,
      title: "Project Evaluation",
      description:
        "Evaluation-oriented support for understanding project requirements and investment considerations.",
    },
    {
      number: "02",
      icon: <BarChart3 />,
      title: "Market Analysis",
      description:
        "Market-focused analysis supporting informed understanding of real estate and project opportunities.",
    },
    {
      number: "03",
      icon: <FileSearch />,
      title: "Investment Assessment",
      description:
        "Structured assessment of available project information to support investment-related decisions.",
    },
    {
      number: "04",
      icon: <CircleDollarSign />,
      title: "Financial Perspective",
      description:
        "Financially focused project inputs to help understand investment requirements and opportunities.",
    },
    {
      number: "05",
      icon: <BriefcaseBusiness />,
      title: "Project Advisory",
      description:
        "Professional advisory support connected with project development and investment considerations.",
    },
    {
      number: "06",
      icon: <HandCoins />,
      title: "Opportunity Support",
      description:
        "Support for identifying and understanding potential project and real estate opportunities.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="im-page-hero">

        <div className="im-page-overlay"></div>

        <div className="im-page-hero-content">

          <span>
            REAL ESTATE &amp; PROJECT SERVICES
          </span>

          <h1>
            INVESTMENT
            <br />
            <strong>MANAGEMENT</strong>
          </h1>

          <p>
            Structured project and investment-oriented solutions
            for informed decision-making.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="im-intro">

        <div className="im-intro-container">

          <div className="im-intro-content">

            <span className="im-eyebrow">
              INVESTMENT MANAGEMENT
            </span>

            <h2>
              UNDERSTAND
              <span> THE OPPORTUNITY</span>
            </h2>

            <div className="im-line"></div>

            <p>
              NGECS provides professional consultancy and
              project-oriented solutions across engineering,
              construction and real estate activities.
            </p>

            <p>
              Our investment management approach focuses on
              understanding project requirements, market
              considerations and available information to support
              informed project and investment decisions.
            </p>

          </div>


          <div className="im-intro-image">

            <img
              src="/images/project-4.jpg"
              alt="Investment Management Project"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          INVESTMENT SERVICES
      ===================================================== */}

      <section className="im-services">

        <div className="im-section-heading">

          <span className="im-eyebrow">
            OUR CAPABILITIES
          </span>

          <h2>
            INVESTMENT
            <span> SERVICES</span>
          </h2>

          <div className="im-line"></div>

          <p>
            Project-focused capabilities supporting investment
            understanding and decision-making.
          </p>

        </div>


        <div className="im-services-container">

          {investmentServices.map((service) => (

            <article
              className="im-service-card"
              key={service.number}
            >

              <div className="im-service-top">

                <span>
                  {service.number}
                </span>

                <div className="im-service-icon">
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
          INVESTMENT APPROACH
      ===================================================== */}

      <section className="im-approach">

        <div className="im-approach-container">

          <div className="im-approach-image">

            <img
              src="/images/project-2.jpg"
              alt="Project Investment"
              loading="lazy"
            />

          </div>


          <div className="im-approach-content">

            <span className="im-eyebrow">
              PROJECT PERSPECTIVE
            </span>

            <h2>
              DATA.
              <span> ANALYSIS.</span>
              <br />
              DECISION.
            </h2>

            <div className="im-line"></div>

            <p>
              Understanding a project requires looking at its
              development requirements, market environment and
              available project information together.
            </p>

            <p>
              NGECS combines its engineering, construction and
              real estate capabilities to provide a broader
              project perspective.
            </p>

            <Link
              to="/real-estate"
              className="im-button"
            >
              REAL ESTATE SOLUTIONS

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          KEY AREAS
      ===================================================== */}

      <section className="im-areas">

        <div className="im-areas-container">

          <div className="im-areas-heading">

            <span className="im-eyebrow">
              KEY AREAS
            </span>

            <h2>
              A BROADER
              <span> PROJECT VIEW</span>
            </h2>

            <div className="im-line"></div>

          </div>


          <div className="im-areas-grid">

            <div className="im-area-card">

              <span>01</span>

              <h3>
                PROJECT
              </h3>

              <p>
                Understand the project's development
                requirements and scope.
              </p>

            </div>


            <div className="im-area-card">

              <span>02</span>

              <h3>
                MARKET
              </h3>

              <p>
                Consider market conditions and project
                positioning.
              </p>

            </div>


            <div className="im-area-card">

              <span>03</span>

              <h3>
                ANALYSIS
              </h3>

              <p>
                Review available information and relevant
                project considerations.
              </p>

            </div>


            <div className="im-area-card">

              <span>04</span>

              <h3>
                DECISION
              </h3>

              <p>
                Support informed project and investment
                discussions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="im-cta">

        <div className="im-cta-container">

          <div>

            <span>
              DISCUSS AN OPPORTUNITY
            </span>

            <h2>
              LET'S UNDERSTAND THE
              <strong> PROJECT TOGETHER.</strong>
            </h2>

          </div>

          <Link
            to="/contact"
            className="im-cta-button"
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

export default InvestmentManagement;