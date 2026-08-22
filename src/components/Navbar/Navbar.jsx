import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Calculator,
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

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src="/images/logo.png"
            alt="NextGen Civil"
          />

          <div className="logo-text">
            <strong>NEXTGEN</strong>
            <span>CIVIL</span>
          </div>
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="desktop-nav">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/civil-engineering">
            Civil Engineering
          </Link>

          <Link to="/project-marketing">
            Project Marketing
          </Link>

          <Link to="/construction-management">
            Construction Management
          </Link>

          <Link to="/home-construction">
            Home Construction
          </Link>


          {/* =================================================
              REAL ESTATE DROPDOWN
          ================================================= */}

          <div className="nav-dropdown">

            <button
              type="button"
              aria-label="Open Real Estate menu"
            >
              <span>Real Estate</span>

              <ChevronDown size={15} />

            </button>


            <div className="dropdown-menu">

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

          </div>


          {/* =================================================
              CALCULATE BUDGET BUTTON
          ================================================= */}

          <Link
            to="/home-budget-calculator"
            className="navbar-calculator"
            onClick={closeMenu}
          >
            <Calculator size={16} />

            <span>
              Calculate Budget
            </span>

          </Link>

        </nav>


        {/* =====================================================
            CONTACT BUTTON
        ===================================================== */}

        <Link
          to="/contact"
          className="navbar-contact"
          onClick={closeMenu}
        >
          <Phone size={16} />

          <span>
            Contact Us
          </span>

        </Link>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        className={`mobile-nav ${
          menuOpen ? "active" : ""
        }`}
      >

        <Link
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>


        <Link
          to="/about"
          onClick={closeMenu}
        >
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
          to="/home-construction"
          onClick={closeMenu}
        >
          Home Construction
        </Link>


        {/* =================================================
            MOBILE REAL ESTATE
        ================================================= */}

        <div className="mobile-dropdown">

          <button
            type="button"
            onClick={() =>
              setRealEstateOpen(!realEstateOpen)
            }
          >
            <span>
              Real Estate
            </span>

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


        {/* =================================================
            MOBILE CALCULATE BUDGET
        ================================================= */}

        <Link
          to="/home-budget-calculator"
          className="mobile-calculator"
          onClick={closeMenu}
        >
          <Calculator size={18} />

          <span>
            Calculate Budget
          </span>

        </Link>


        {/* =================================================
            MOBILE CONTACT
        ================================================= */}

        <Link
          to="/contact"
          className="mobile-contact"
          onClick={closeMenu}
        >
          <Phone size={18} />

          <span>
            Contact Us
          </span>

        </Link>

      </div>

    </header>
  );
}

export default Navbar;