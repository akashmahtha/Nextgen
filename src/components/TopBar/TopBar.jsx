import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">

        {/* LEFT */}
        <div className="topbar-left">

          {/* EMAIL 1 */}
          <a href="mailto:nextgencivil@gmail.com">
            <span>✉</span>
            nextgencivil@gmail.com
          </a>

          {/* EMAIL 2 */}
          <a href="mailto:nextgencivilengg@gmail.com">
            <span>✉</span>
            nextgencivilengg@gmail.com
          </a>

          {/* PHONE */}
          <a href="tel:+919820280493">
            <span>☎</span>
            +91 98202 80493
          </a>

        </div>


        {/* RIGHT */}
        <div className="topbar-right">

          <span>Follow Us</span>

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/nextgencivilonline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            f
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/nextgencivilengg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            ◎
          </a>

        </div>

      </div>
    </div>
  );
}

export default TopBar;