import Hero from "../components/Hero/Hero";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import StatsSection from "../components/StatsSection/StatsSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Quick Links */}
      <QuickLinks />

      {/* About */}
      <AboutSection />

      {/* Services */}
      <ServicesSection />

      {/* Statistics */}
      <StatsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;