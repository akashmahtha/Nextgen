import {
  Building2,
  Users,
  HardHat,
  Trophy,
} from "lucide-react";

import "./StatsSection.css";

const stats = [
  {
    number: "250+",
    label: "Projects Completed",
    icon: Building2,
  },
  {
    number: "120+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: "15+",
    label: "Years Experience",
    icon: HardHat,
  },
  {
    number: "20+",
    label: "Awards Won",
    icon: Trophy,
  },
];

function StatsSection() {
  return (
    <section className="stats-section">

      <div className="stats-background"></div>

      <div className="stats-container">

        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              className="stat-item"
              key={index}
            >

              <div className="stat-icon">
                <Icon
                  size={32}
                  strokeWidth={1.5}
                />
              </div>

              <div className="stat-number">
                {stat.number}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default StatsSection;