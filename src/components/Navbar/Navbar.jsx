import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [realEstateOpen, setRealEstateOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setRealEstateOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="NextGen Civil"
          />

          <div className="logo-text">
            <strong>NEXTGEN</strong>
            <span>CIVIL</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">

          <Link to="/">Home</Link>

          <Link to="/about">About Us</Link>

          <Link to="/civil-engineering">
            Civil Engineering
          </Link>

          <Link to="/project-marketing">
            Project Marketing
          </Link>

          <Link to="/construction-management">
            Construction Management
          </Link>

         

          <div className="nav-dropdown">

            <button type="button">
              Real Estate
              <ChevronDown size={15} />
            </button>

            <div className="dropdown-menu">

              <Link to="/real-estate">
                Real Estate Consultancy
              </Link>

              <Link to="/investment-management">
                Investment Management
              </Link>

              <Link to="/projects">
                Rent / Sell / Lease
              </Link>

            </div>

          </div>

         

          <Link to="/contact">
            Contact
          </Link>

        </nav>

        {/* DESKTOP CTA */}
        <Link to="/contact" className="navbar-contact">
          <Phone size={17} />
          Contact Us
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About Us
        </Link>

        <Link
          to="/civil-engineering"
          onClick={closeMenu}
        >
          Civil Engineering
        </Link>

        <Link
          to="/project-marketing"
          onClick={closeMenu}
        >
          Project Marketing
        </Link>

        <Link
          to="/construction-management"
          onClick={closeMenu}
        >
          Construction Management
        </Link>

        <Link
          to="/vastu-consultancy"
          onClick={closeMenu}
        >
          Vastu Consultancy
        </Link>

        <div className="mobile-dropdown">

          <button
            type="button"
            onClick={() =>
              setRealEstateOpen(!realEstateOpen)
            }
          >
            <span>Real Estate</span>

            <ChevronDown
              size={18}
              className={
                realEstateOpen
                  ? "rotate"
                  : ""
              }
            />
          </button>

          {realEstateOpen && (
            <div className="mobile-submenu">

              <Link
                to="/real-estate"
                onClick={closeMenu}
              >
                Real Estate Consultancy
              </Link>

              <Link
                to="/investment-management"
                onClick={closeMenu}
              >
                Investment Management
              </Link>

              <Link
                to="/projects"
                onClick={closeMenu}
              >
                Rent / Sell / Lease
              </Link>

            </div>
          )}

        </div>

        <Link
          to="/testing-lab"
          onClick={closeMenu}
        >
          Testing Lab
        </Link>

        <Link
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </Link>

      </div>

    </header>
  );
}

export default Navbar;