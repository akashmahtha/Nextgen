import {
  Building2,
  Megaphone,
  ClipboardCheck,
  Compass,
  House,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ServicesSection.css";

const services = [
  {
    id: 1,
    title: "CIVIL ENGINEERING",
    subtitle: "CONSULTANCY",
    description:
      "Comprehensive civil engineering solutions with innovation, technical expertise and excellence.",
    icon: Building2,
    link: "/civil-engineering",
  },
  {
    id: 2,
    title: "PROJECT",
    subtitle: "MARKETING",
    description:
      "Strategic marketing solutions to promote and sell your projects effectively.",
    icon: Megaphone,
    link: "/project-marketing",
  },
  {
    id: 3,
    title: "PROJECT / CONSTRUCTION",
    subtitle: "MANAGEMENT",
    description:
      "End-to-end project and construction management with quality assurance.",
    icon: ClipboardCheck,
    link: "/construction-management",
  },
  {
    id: 4,
    title: "VASTU",
    subtitle: "CONSULTANCY",
    description:
      "Vastu-compliant designs for harmony, prosperity and overall well-being.",
    icon: Compass,
    link: "/vastu-consultancy",
  },
  {
    id: 5,
    title: "REAL ESTATE CONSULTANCY",
    subtitle: "RENT / SELL / LEASE",
    description:
      "Helping you find the right property to rent, buy or lease with ease.",
    icon: House,
    link: "/real-estate",
  },
];

function ServicesSection() {
  return (
    <section className="services-section">

      {/* =========================================
          SECTION HEADER
      ========================================= */}

      <div className="services-header">

        <span className="services-eyebrow">
          WHAT WE DO
        </span>

        <h2>
          OUR <span>SERVICES</span>
        </h2>

        <div className="services-title-line"></div>

        <p>
          Professional engineering, construction, real estate
          and consultancy solutions designed to create lasting
          value for our clients.
        </p>

      </div>

      {/* =========================================
          SERVICES GRID
      ========================================= */}

      <div className="services-container">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              to={service.link}
              className="service-card"
              key={service.id}
            >

              {/* Number */}

              <span className="service-number">
                0{service.id}
              </span>

              {/* Icon */}

              <div className="service-icon">
                <Icon
                  size={38}
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}

              <h3>
                {service.title}
              </h3>

              <h4>
                {service.subtitle}
              </h4>

              {/* Description */}

              <p>
                {service.description}
              </p>

              {/* Arrow */}

              <span className="service-arrow">
                <ArrowRight size={16} />
              </span>

              {/* Bottom Line */}

              <span className="service-bottom-line"></span>

            </Link>
          );
        })}

      </div>

    </section>
  );
}

export default ServicesSection;