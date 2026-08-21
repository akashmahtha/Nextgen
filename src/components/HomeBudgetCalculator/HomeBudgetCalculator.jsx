import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Home,
  X,
} from "lucide-react";

import "./HomeBudgetCalculator.css";

function HomeBudgetCalculator() {
  const [isOpen, setIsOpen] = useState(false);

  const [city, setCity] = useState("");
  const [plotArea, setPlotArea] = useState("");
  const [slabArea, setSlabArea] = useState("");
  const [floors, setFloors] = useState("");

  const [result, setResult] = useState(null);

  /*
    =========================================================
    INDICATIVE CONSTRUCTION RATES

    Change these values according to actual NGECS pricing.
    =========================================================
  */

  const constructionRates = {
    Patna: 1800,
    Pune: 2200,
  };

  const plotOptions = [
    "600 sq.ft",
    "800 sq.ft",
    "1000 sq.ft",
    "1200 sq.ft",
    "1500 sq.ft",
    "1800 sq.ft",
    "2000 sq.ft",
    "2500 sq.ft",
    "3000 sq.ft",
  ];

  const slabOptions = [
    "500 sq.ft",
    "600 sq.ft",
    "800 sq.ft",
    "1000 sq.ft",
    "1200 sq.ft",
    "1500 sq.ft",
    "1800 sq.ft",
    "2000 sq.ft",
    "2500 sq.ft",
    "3000 sq.ft",
  ];

  const floorOptions = [
    "1",
    "2",
    "3",
    "4",
    "5",
  ];

  const openCalculator = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCalculator = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city || !plotArea || !slabArea || !floors) {
      return;
    }

    /*
      Slab/Roof area = area of one floor.

      Total construction area =
      Slab area × Number of floors
    */

    const slab = parseInt(slabArea.replace(/\D/g, ""), 10);
    const floorCount = parseInt(floors, 10);

    const totalBuiltUpArea = slab * floorCount;

    const rate = constructionRates[city];

    const estimatedCost = totalBuiltUpArea * rate;

    setResult({
      city,
      plotArea,
      slabArea,
      floors: floorCount,
      totalBuiltUpArea,
      rate,
      estimatedCost,
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const resetCalculator = () => {
    setCity("");
    setPlotArea("");
    setSlabArea("");
    setFloors("");
    setResult(null);
  };

  return (
    <>
      {/* =====================================================
          HOME BUDGET CALCULATOR SECTION
      ===================================================== */}

      <section className="home-budget-section">

        <div className="home-budget-container">

          {/* LEFT */}

          <div className="home-budget-content">

            <span className="home-budget-label">
              HOME BUDGET CALCULATOR
            </span>

            <h2>
              KNOW YOUR
              <span> HOME BUDGET</span>
            </h2>

            <div className="home-budget-line"></div>

            <p>
              Planning to build your dream home? Get an
              indicative construction budget based on your
              city, plot area, slab area and number of floors.
            </p>

            <button
              type="button"
              className="home-budget-button"
              onClick={openCalculator}
            >
              CALCULATE YOUR BUDGET

              <ArrowRight size={18} />
            </button>

          </div>


          {/* RIGHT */}

          <div className="home-budget-visual">

            <div className="home-budget-visual-icon">
              <Home size={42} />
            </div>

            <span>
              PLAN • ESTIMATE • BUILD
            </span>

            <strong>
              BUILD YOUR
              <br />
              DREAM HOME
            </strong>

            <p>
              Start with a simple estimate and understand
              your potential construction budget.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CALCULATOR MODAL
      ===================================================== */}

      {isOpen && (

        <div
          className="budget-modal-overlay"
          onClick={closeCalculator}
        >

          <div
            className="budget-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div className="budget-modal-header">

              <div>

                <span>
                  HOME BUDGET
                </span>

                <h2>
                  House Information
                </h2>

              </div>

              <button
                type="button"
                className="budget-close"
                onClick={closeCalculator}
                aria-label="Close calculator"
              >
                <X size={28} />
              </button>

            </div>


            {/* FORM */}

            {!result ? (

              <form
                className="budget-form"
                onSubmit={handleSubmit}
              >

                {/* CITY */}

                <div className="budget-form-group">

                  <label>
                    CHOOSE CITY
                  </label>

                  <select
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                    required
                  >

                    <option value="">
                      Choose City
                    </option>

                    <option value="Patna">
                      Patna
                    </option>

                    <option value="Pune">
                      Pune
                    </option>

                  </select>

                </div>


                {/* PLOT AREA */}

                <div className="budget-form-group">

                  <label>
                    CHOOSE PLOT AREA
                  </label>

                  <select
                    value={plotArea}
                    onChange={(e) =>
                      setPlotArea(e.target.value)
                    }
                    required
                  >

                    <option value="">
                      Choose Plot Area
                    </option>

                    {plotOptions.map((area) => (
                      <option
                        value={area}
                        key={area}
                      >
                        {area}
                      </option>
                    ))}

                  </select>

                </div>


                {/* SLAB AREA */}

                <div className="budget-form-group">

                  <label>
                    CHOOSE SLAB / ROOF AREA
                  </label>

                  <select
                    value={slabArea}
                    onChange={(e) =>
                      setSlabArea(e.target.value)
                    }
                    required
                  >

                    <option value="">
                      Choose Slab/Roof Area
                    </option>

                    {slabOptions.map((area) => (
                      <option
                        value={area}
                        key={area}
                      >
                        {area}
                      </option>
                    ))}

                  </select>

                </div>


                {/* FLOORS */}

                <div className="budget-form-group">

                  <label>
                    CHOOSE NUMBER OF FLOORS
                  </label>

                  <select
                    value={floors}
                    onChange={(e) =>
                      setFloors(e.target.value)
                    }
                    required
                  >

                    <option value="">
                      Choose Number of Floors
                    </option>

                    {floorOptions.map((floor) => (
                      <option
                        value={floor}
                        key={floor}
                      >
                        {floor}{" "}
                        {floor === "1"
                          ? "Floor"
                          : "Floors"}
                      </option>
                    ))}

                  </select>

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="budget-submit"
                >
                  <Calculator size={20} />

                  SUBMIT
                </button>

                <p className="budget-note">
                  This is an indicative estimate only.
                  Final construction cost may vary based
                  on design, materials, site conditions
                  and project specifications.
                </p>

              </form>

            ) : (

              /* =================================================
                 RESULT
              ================================================= */

              <div className="budget-result">

                <div className="budget-result-icon">
                  <CheckCircle2 size={42} />
                </div>

                <span>
                  INDICATIVE HOME CONSTRUCTION BUDGET
                </span>

                <h3>
                  {formatCurrency(result.estimatedCost)}
                </h3>

                <p>
                  Estimated construction budget for your
                  selected requirements.
                </p>


                {/* DETAILS */}

                <div className="budget-result-details">

                  <div>
                    <span>
                      CITY
                    </span>

                    <strong>
                      {result.city}
                    </strong>
                  </div>


                  <div>
                    <span>
                      PLOT AREA
                    </span>

                    <strong>
                      {result.plotArea}
                    </strong>
                  </div>


                  <div>
                    <span>
                      SLAB AREA
                    </span>

                    <strong>
                      {result.slabArea}
                    </strong>
                  </div>


                  <div>
                    <span>
                      FLOORS
                    </span>

                    <strong>
                      {result.floors}
                    </strong>
                  </div>


                  <div>
                    <span>
                      TOTAL BUILT-UP AREA
                    </span>

                    <strong>
                      {result.totalBuiltUpArea.toLocaleString(
                        "en-IN"
                      )}{" "}
                      sq.ft
                    </strong>
                  </div>


                  <div>
                    <span>
                      INDICATIVE RATE
                    </span>

                    <strong>
                      ₹{result.rate.toLocaleString("en-IN")}
                      /sq.ft
                    </strong>
                  </div>

                </div>


                {/* ACTIONS */}

                <div className="budget-result-actions">

                  <button
                    type="button"
                    className="budget-reset"
                    onClick={resetCalculator}
                  >
                    CALCULATE AGAIN
                  </button>

                  <button
                    type="button"
                    className="budget-result-close"
                    onClick={closeCalculator}
                  >
                    CLOSE
                  </button>

                </div>


                <p className="budget-result-note">
                  For an accurate project quotation,
                  please contact the NGECS team for a
                  detailed project assessment.
                </p>

              </div>

            )}

          </div>

        </div>

      )}

    </>
  );
}

export default HomeBudgetCalculator;