import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Calculator,
  Building2,
  Ruler,
  HardHat,
  ShieldCheck,
  Clock3,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./HomeConstruction.css";

function HomeConstruction() {
  const [city, setCity] = useState("Patna");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("1");
  const [packageType, setPackageType] = useState("Standard");

  const packageRates = {
    Basic: 1700,
    Standard: 2000,
    Premium: 2400,
    Luxury: 3000,
  };

  const estimatedCost =
    area && Number(area) > 0
      ? Number(area) *
        Number(floors) *
        packageRates[packageType]
      : 0;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const constructionServices = [
    {
      icon: <Ruler size={28} />,
      title: "Architectural Planning",
      description:
        "Professional planning and design support for residential construction projects.",
    },
    {
      icon: <Building2 size={28} />,
      title: "Complete Construction",
      description:
        "End-to-end construction support from foundation to finishing.",
    },
    {
      icon: <HardHat size={28} />,
      title: "Project Management",
      description:
        "Coordinated execution, supervision and project progress management.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Control",
      description:
        "Quality-focused construction practices and project monitoring.",
    },
  ];

  const packages = [
    {
      name: "Basic",
      rate: "₹1,700 / sq.ft",
      description:
        "Essential construction solution for practical residential requirements.",
    },
    {
      name: "Standard",
      rate: "₹2,000 / sq.ft",
      description:
        "Balanced construction package with quality materials and finishes.",
    },
    {
      name: "Premium",
      rate: "₹2,400 / sq.ft",
      description:
        "Enhanced materials, finishes and specifications for premium homes.",
    },
    {
      name: "Luxury",
      rate: "₹3,000 / sq.ft",
      description:
        "High-end residential construction with premium specifications.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      text: "Understand your plot, requirements, lifestyle and construction goals.",
    },
    {
      number: "02",
      title: "Planning",
      text: "Develop the project plan, design requirements and construction approach.",
    },
    {
      number: "03",
      title: "Estimation",
      text: "Prepare an indicative project estimate based on the selected specifications.",
    },
    {
      number: "04",
      title: "Execution",
      text: "Coordinate construction activities with professional project supervision.",
    },
    {
      number: "05",
      title: "Quality Check",
      text: "Monitor execution and construction quality throughout the project.",
    },
    {
      number: "06",
      title: "Handover",
      text: "Complete finishing activities and move towards final project handover.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hc-hero">

        <div className="hc-hero-overlay"></div>

        <div className="hc-hero-content">

          <span className="hc-eyebrow">
            HOME CONSTRUCTION
          </span>

          <h1>
            BUILD YOUR
            <br />
            <strong>DREAM HOME</strong>
          </h1>

          <p>
            Professional home construction solutions combining
            engineering, planning, quality and project management.
          </p>

          <div className="hc-hero-buttons">

            <a
              href="#estimate"
              className="hc-primary-button"
            >
              GET ESTIMATE
              <ArrowRight size={17} />
            </a>

            <Link
              to="/contact"
              className="hc-secondary-button"
            >
              TALK TO US
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="hc-intro">

        <div className="hc-container">

          <div className="hc-intro-content">

            <span className="hc-section-label">
              HOME CONSTRUCTION SERVICES
            </span>

            <h2>
              FROM
              <span> PLAN TO HOME</span>
            </h2>

            <div className="hc-line"></div>

            <p>
              NGECS provides project-oriented home construction
              solutions for clients looking to build residential
              properties with professional planning and execution.
            </p>

            <p>
              Our approach brings engineering, construction
              management and project coordination together to
              provide a structured construction experience.
            </p>

          </div>


          <div className="hc-intro-stats">

            <div>
              <strong>01</strong>
              <span>Planning</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Construction</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Quality</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Handover</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ESTIMATE CALCULATOR
      ===================================================== */}

      <section
        className="hc-estimate"
        id="estimate"
      >

        <div className="hc-container">

          <div className="hc-estimate-heading">

            <span className="hc-section-label">
              CONSTRUCTION ESTIMATOR
            </span>

            <h2>
              GET AN
              <span> ESTIMATE</span>
            </h2>

            <div className="hc-line"></div>

            <p>
              Enter your basic project details to get an
              indicative construction estimate.
            </p>

          </div>


          <div className="hc-estimate-box">

            {/* FORM */}

            <div className="hc-estimate-form">

              <div className="hc-form-group">

                <label>
                  LOCATION
                </label>

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="Patna">
                    Patna
                  </option>

                  <option value="Pune">
                    Pune
                  </option>
                </select>

              </div>


              <div className="hc-form-group">

                <label>
                  BUILT-UP AREA (SQ.FT)
                </label>

                <input
                  type="number"
                  min="1"
                  placeholder="Example: 1500"
                  value={area}
                  onChange={(e) =>
                    setArea(e.target.value)
                  }
                />

              </div>


              <div className="hc-form-group">

                <label>
                  NUMBER OF FLOORS
                </label>

                <select
                  value={floors}
                  onChange={(e) =>
                    setFloors(e.target.value)
                  }
                >
                  <option value="1">
                    1 Floor
                  </option>

                  <option value="2">
                    2 Floors
                  </option>

                  <option value="3">
                    3 Floors
                  </option>

                  <option value="4">
                    4 Floors
                  </option>

                </select>

              </div>


              <div className="hc-form-group">

                <label>
                  CONSTRUCTION PACKAGE
                </label>

                <select
                  value={packageType}
                  onChange={(e) =>
                    setPackageType(e.target.value)
                  }
                >

                  <option value="Basic">
                    Basic
                  </option>

                  <option value="Standard">
                    Standard
                  </option>

                  <option value="Premium">
                    Premium
                  </option>

                  <option value="Luxury">
                    Luxury
                  </option>

                </select>

              </div>

            </div>


            {/* RESULT */}

            <div className="hc-estimate-result">

              <div className="hc-result-icon">
                <Calculator size={30} />
              </div>

              <span>
                INDICATIVE ESTIMATE
              </span>

              {estimatedCost > 0 ? (
                <>
                  <strong>
                    {formatPrice(estimatedCost)}
                  </strong>

                  <p>
                    {city} · {area} sq.ft · {floors} floor
                    {Number(floors) > 1 ? "s" : ""} ·{" "}
                    {packageType}
                  </p>
                </>
              ) : (
                <>
                  <strong>
                    ₹ 0
                  </strong>

                  <p>
                    Enter your built-up area to calculate
                    an indicative estimate.
                  </p>
                </>
              )}

              <small>
                Final project cost may vary based on design,
                site conditions, materials and specifications.
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PACKAGES
      ===================================================== */}

      <section className="hc-packages">

        <div className="hc-container">

          <div className="hc-section-heading">

            <span className="hc-section-label">
              CONSTRUCTION PACKAGES
            </span>

            <h2>
              CHOOSE YOUR
              <span> PACKAGE</span>
            </h2>

            <div className="hc-line"></div>

          </div>


          <div className="hc-package-grid">

            {packages.map((item) => (

              <article
                className={`hc-package-card ${
                  packageType === item.name
                    ? "active"
                    : ""
                }`}
                key={item.name}
              >

                <span>
                  {item.name.toUpperCase()}
                </span>

                <h3>
                  {item.rate}
                </h3>

                <p>
                  {item.description}
                </p>

                <ul>

                  <li>
                    <CheckCircle2 size={16} />
                    Construction Planning
                  </li>

                  <li>
                    <CheckCircle2 size={16} />
                    Project Coordination
                  </li>

                  <li>
                    <CheckCircle2 size={16} />
                    Quality Monitoring
                  </li>

                </ul>

                <a href="#estimate">
                  SELECT PACKAGE
                  <ArrowRight size={15} />
                </a>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="hc-services">

        <div className="hc-container">

          <div className="hc-section-heading">

            <span className="hc-section-label">
              WHAT WE PROVIDE
            </span>

            <h2>
              COMPLETE
              <span> SUPPORT</span>
            </h2>

            <div className="hc-line"></div>

          </div>


          <div className="hc-service-grid">

            {constructionServices.map((service) => (

              <article
                className="hc-service-card"
                key={service.title}
              >

                <div className="hc-service-icon">
                  {service.icon}
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

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="hc-process">

        <div className="hc-container">

          <div className="hc-section-heading">

            <span className="hc-section-label">
              OUR PROCESS
            </span>

            <h2>
              HOW WE
              <span> BUILD</span>
            </h2>

            <div className="hc-line"></div>

          </div>


          <div className="hc-process-grid">

            {process.map((item) => (

              <article
                className="hc-process-card"
                key={item.number}
              >

                <span className="hc-process-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY NGECS
      ===================================================== */}

      <section className="hc-why">

        <div className="hc-container hc-why-container">

          <div className="hc-why-content">

            <span className="hc-section-label">
              WHY NGECS
            </span>

            <h2>
              BUILD WITH
              <span> CONFIDENCE</span>
            </h2>

            <div className="hc-line"></div>

            <p>
              Building a home is a major investment. Our
              project-focused approach aims to bring clarity,
              coordination and professional oversight to every
              stage of construction.
            </p>

            <Link
              to="/contact"
              className="hc-primary-button"
            >
              START YOUR PROJECT
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="hc-why-list">

            <div>
              <CheckCircle2 size={21} />
              <span>
                Engineering-led planning
              </span>
            </div>

            <div>
              <CheckCircle2 size={21} />
              <span>
                Structured project execution
              </span>
            </div>

            <div>
              <CheckCircle2 size={21} />
              <span>
                Quality-focused construction
              </span>
            </div>

            <div>
              <CheckCircle2 size={21} />
              <span>
                Transparent project communication
              </span>
            </div>

            <div>
              <CheckCircle2 size={21} />
              <span>
                Professional project coordination
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="hc-cta">

        <div className="hc-container hc-cta-container">

          <div>

            <span>
              READY TO BUILD?
            </span>

            <h2>
              LET'S BUILD YOUR
              <strong> HOME TOGETHER.</strong>
            </h2>

          </div>


          <div className="hc-cta-actions">

            <Link
              to="/contact"
              className="hc-cta-button"
            >
              GET FREE CONSULTATION
              <ArrowRight size={17} />
            </Link>

            <a
              href="tel:+919820280493"
              className="hc-call-button"
            >
              <Phone size={17} />
              +91 98202 80493
            </a>

          </div>

        </div>

      </section>


      <Footer />

    </>
  );
}

export default HomeConstruction;