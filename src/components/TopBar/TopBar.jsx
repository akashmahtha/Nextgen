import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">

        {/* LEFT */}
        <div className="topbar-left">

          <a href="mailto:info@ngecs.com">
            <span>✉</span>
            info@ngecs.com
          </a>

          <a href="mailto:ngecsonline@gmail.com">
            <span>✉</span>
            ngecsonline@gmail.com
          </a>

          <a href="tel:06126536555">
            <span>☎</span>
            0612-6536-555
          </a>

          <a href="tel:+917654111111">
            <span>☎</span>
            +91-7654-111-111
          </a>

        </div>


        {/* RIGHT */}
        <div className="topbar-right">

          <span>Follow Us</span>

          <a
            href="#"
            aria-label="Facebook"
            onClick={(e) => e.preventDefault()}
          >
            f
          </a>

          <a
            href="#"
            aria-label="Instagram"
            onClick={(e) => e.preventDefault()}
          >
            ◎
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            onClick={(e) => e.preventDefault()}
          >
            in
          </a>

        </div>

      </div>
    </div>
  );
}

export default TopBar;