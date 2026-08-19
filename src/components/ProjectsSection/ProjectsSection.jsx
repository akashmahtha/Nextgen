import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import "./ProjectsSection.css";

const projects = [
  {
    title: "Residential Complex",
    location: "Kolkata",
    category: "Residential",
    image: "/images/project-1.jpg",
  },
  {
    title: "Commercial Building",
    location: "New Town, Kolkata",
    category: "Commercial",
    image: "/images/project-2.jpg",
  },
  {
    title: "Luxury Villa",
    location: "Howrah",
    category: "Residential",
    image: "/images/project-3.jpg",
  },
  {
    title: "Industrial Warehouse",
    location: "Dankuni, Hooghly",
    category: "Industrial",
    image: "/images/project-4.jpg",
  },
  {
    title: "High Rise Apartments",
    location: "New Town, Kolkata",
    category: "Residential",
    image: "/images/project-5.jpg",
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section">

      {/* SECTION HEADER */}
      <div className="projects-header">
        <span className="projects-eyebrow">
          OUR WORK
        </span>

        <h2>
          OUR RECENT <span>PROJECTS</span>
        </h2>

        <div className="projects-title-line"></div>

        <p>
          Explore our projects and discover our approach to
          engineering, construction and real estate solutions.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="projects-container">

        {projects.map((project, index) => (
          <article
            className="project-card"
            key={index}
          >

            {/* IMAGE */}
            <div className="project-image-wrapper">

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />

              <div className="project-image-overlay">

                <span className="project-category">
                  {project.category}
                </span>

                <Link
                  to="/projects"
                  className="project-arrow"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

            {/* CONTENT */}
            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <div className="project-location">
                <MapPin size={13} />

                <span>
                  {project.location}
                </span>
              </div>

            </div>

          </article>
        ))}

      </div>

      {/* BUTTON */}
      <div className="projects-button-wrapper">

        <Link
          to="/projects"
          className="projects-button"
        >
          VIEW ALL PROJECTS
          <ArrowRight size={17} />
        </Link>

      </div>

    </section>
  );
}

export default ProjectsSection;