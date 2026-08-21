import Hero from "../components/Hero/Hero";
import QuickLinks from "../components/QuickLinks/QuickLinks";

import HomeBudgetCalculator from "../components/HomeBudgetCalculator/HomeBudgetCalculator";

import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import StatsSection from "../components/StatsSection/StatsSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero />


      {/* =====================================================
          QUICK LINKS
      ===================================================== */}

      <QuickLinks />


      {/* =====================================================
          HOME BUDGET CALCULATOR
      ===================================================== */}

      <HomeBudgetCalculator />


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <AboutSection />


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <ServicesSection />


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <StatsSection />


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <ProjectsSection />


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}

export default Home;