import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">

        {/* LEFT */}
        <div className="topbar-left">

         

          <a href="mailto: nextgencivil@gmail.com">
            <span>✉</span>
              nextgencivil@gmail.com
          </a>

          <a href="tel:06126536555">
            <span>☎</span>
            0612-6536-555
          </a>

          

        </div>


        {/* RIGHT */}
        <div className="topbar-right">

          <span>Follow Us</span>

          <a
            href="https://www.facebook.com/nextgencivilonline"
            aria-label="Facebook"
            onClick={(e) => e.preventDefault()}
          >
            f
          </a>

          <a
            href="https://www.instagram.com/nextgencivilengg"
            aria-label="Instagram"
            onClick={(e) => e.preventDefault()}
          >
            ◎
          </a>


        </div>

      </div>
    </div>
  );
}

export default TopBar;