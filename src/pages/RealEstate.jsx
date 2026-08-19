import {
  ArrowRight,
  Building2,
  Factory,
  Home,
  Hotel,
  MapPin,
  ShoppingBag,
  Warehouse,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./RealEstate.css";

function RealEstate() {
  const propertyTypes = [
    {
      number: "01",
      icon: <Home />,
      title: "Residential",
      description:
        "Solutions for residential property requirements, projects and related real estate needs.",
    },
    {
      number: "02",
      icon: <Building2 />,
      title: "Commercial",
      description:
        "Commercial real estate solutions supporting property requirements and project opportunities.",
    },
    {
      number: "03",
      icon: <Factory />,
      title: "Industrial",
      description:
        "Real estate solutions for industrial property requirements and development opportunities.",
    },
    {
      number: "04",
      icon: <Warehouse />,
      title: "Logistics",
      description:
        "Property solutions for logistics-related requirements and project needs.",
    },
    {
      number: "05",
      icon: <ShoppingBag />,
      title: "Retail",
      description:
        "Retail property solutions supporting leasing, selling and related requirements.",
    },
    {
      number: "06",
      icon: <Hotel />,
      title: "Other Properties",
      description:
        "Solutions for other real estate requirements based on project and client needs.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="re-page-hero">

        <div className="re-page-overlay"></div>

        <div className="re-page-hero-content">

          <span>
            REAL ESTATE VERTICAL
          </span>

          <h1>
            REAL ESTATE
            <br />
            <strong>SOLUTIONS</strong>
          </h1>

          <p>
            Property solutions across residential, commercial,
            industrial, logistics, retail and other requirements.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="re-intro">

        <div className="re-intro-container">

          <div className="re-intro-content">

            <span className="re-eyebrow">
              REAL ESTATE SERVICES
            </span>

            <h2>
              FINDING THE
              <span> RIGHT PROPERTY</span>
            </h2>

            <div className="re-line"></div>

            <p>
              NGECS provides real estate solutions covering
              residential, commercial, industrial, logistics,
              retail and other property requirements.
            </p>

            <p>
              Our services include support for leasing and
              selling properties according to client and project
              requirements.
            </p>

          </div>


          <div className="re-intro-image">

            <img
              src="/images/project-1.jpg"
              alt="NGECS Real Estate"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROPERTY TYPES
      ===================================================== */}

      <section className="re-properties">

        <div className="re-section-heading">

          <span className="re-eyebrow">
            PROPERTY SEGMENTS
          </span>

          <h2>
            REAL ESTATE
            <span> CATEGORIES</span>
          </h2>

          <div className="re-line"></div>

          <p>
            Property solutions across multiple real estate
            segments.
          </p>

        </div>


        <div className="re-properties-container">

          {propertyTypes.map((property) => (

            <article
              className="re-property-card"
              key={property.number}
            >

              <div className="re-property-top">

                <span>
                  {property.number}
                </span>

                <div className="re-property-icon">
                  {property.icon}
                </div>

              </div>

              <h3>
                {property.title}
              </h3>

              <p>
                {property.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          LEASING & SELLING
      ===================================================== */}

      <section className="re-leasing">

        <div className="re-leasing-container">

          <div className="re-leasing-image">

            <img
              src="/images/project-5.jpg"
              alt="Real Estate Property"
              loading="lazy"
            />

          </div>


          <div className="re-leasing-content">

            <span className="re-eyebrow">
              LEASING &amp; SELLING
            </span>

            <h2>
              PROPERTY
              <span> TRANSACTIONS</span>
            </h2>

            <div className="re-line"></div>

            <p>
              NGECS offers real estate solutions that include
              leasing and selling support for different types
              of property requirements.
            </p>

            <p>
              Whether the requirement is residential,
              commercial, industrial, logistics or retail,
              solutions are considered according to the
              individual project and client requirement.
            </p>

            <div className="re-transaction-points">

              <div>
                <span>01</span>
                <p>
                  Property Requirement
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  Project Understanding
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Leasing Support
                </p>
              </div>

              <div>
                <span>04</span>
                <p>
                  Selling Support
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION / REQUIREMENT
      ===================================================== */}

      <section className="re-requirement">

        <div className="re-requirement-container">

          <div className="re-requirement-content">

            <span className="re-eyebrow">
              YOUR REQUIREMENT
            </span>

            <h2>
              PROPERTY
              <span> THAT FITS</span>
            </h2>

            <div className="re-line"></div>

            <p>
              Real estate requirements can vary significantly
              depending on the purpose, location and type of
              property needed.
            </p>

          </div>


          <div className="re-requirement-grid">

            <div className="re-requirement-card">

              <MapPin size={22} />

              <h3>
                LOCATION
              </h3>

              <p>
                Identify the appropriate location and property
                requirement.
              </p>

            </div>


            <div className="re-requirement-card">

              <Building2 size={22} />

              <h3>
                PROPERTY TYPE
              </h3>

              <p>
                Residential, commercial, industrial, logistics
                or retail requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="re-cta">

        <div className="re-cta-container">

          <div>

            <span>
              LOOKING FOR A PROPERTY?
            </span>

            <h2>
              LET'S FIND THE
              <strong> RIGHT SOLUTION.</strong>
            </h2>

          </div>

          <Link
            to="/contact"
            className="re-cta-button"
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

export default RealEstate;