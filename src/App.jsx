import { Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import CivilEngineering from "./pages/CivilEngineering";
import ConstructionManagement from "./pages/ConstructionManagement";
import ProjectMarketing from "./pages/ProjectMarketing";
import InvestmentManagement from "./pages/InvestmentManagement";
import RealEstate from "./pages/RealEstate";
import HomeConstruction from "./pages/HomeConstruction";
import HomeBudgetCalculator from "./components/HomeBudgetCalculator/HomeBudgetCalculator";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/civil-engineering"
          element={<CivilEngineering />}
        />

        <Route
          path="/project-marketing"
          element={<ProjectMarketing />}
        />

        <Route
          path="/construction-management"
          element={<ConstructionManagement />}
        />

        <Route
          path="/investment-management"
          element={<InvestmentManagement />}
        />

        <Route
          path="/real-estate"
          element={<RealEstate />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
  path="/home-construction"
  element={<HomeConstruction />}
/>
<Route
  path="/home-budget-calculator"
  element={
    <HomeBudgetCalculator autoOpen={true} />
  }
/>

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route path="*" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;