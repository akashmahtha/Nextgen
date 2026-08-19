import {
  BriefcaseBusiness,
  Users,
  Image,
  MessageSquare,
  CircleHelp,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./QuickLinks.css";

const quickLinks = [
  {
    title: "JOBS",
    description: "Explore career opportunities and grow with us.",
    icon: BriefcaseBusiness,
    link: "/contact",
  },
  {
    title: "OUR TEAM",
    description: "Meet our experienced and dedicated team members.",
    icon: Users,
    link: "/team",
  },
  {
    title: "GALLERY",
    description: "Explore our projects and successful journeys.",
    icon: Image,
    link: "/gallery",
  },
  {
    title: "FEEDBACK",
    description: "Your feedback helps us to serve you better.",
    icon: MessageSquare,
    link: "/contact",
  },
  {
    title: "FAQ",
    description: "Find answers to common questions here.",
    icon: CircleHelp,
    link: "/faq",
  },
];

function QuickLinks() {
  return (
    <section className="quick-links">
      <div className="quick-links-container">

        {quickLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              to={item.link}
              className="quick-link-card"
              key={index}
            >
              <div className="quick-link-icon">
                <Icon size={25} strokeWidth={1.8} />
              </div>

              <div className="quick-link-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              <span className="quick-link-line"></span>
            </Link>
          );
        })}

      </div>
    </section>
  );
}

export default QuickLinks;