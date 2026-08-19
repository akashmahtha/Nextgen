import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Business Owner",
    text: "Their team is highly professional and delivered the project on time with excellent quality. Highly recommended!",
  },
  {
    name: "Ananya Sen",
    role: "Real Estate Developer",
    text: "Great experience working with NextGen Civil. They understood our requirements perfectly and executed our expectations.",
  },
  {
    name: "Sourav Das",
    role: "Entrepreneur",
    text: "From planning to execution, everything was handled with transparency and dedication. Truly reliable!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">

      {/* =========================================
          SECTION HEADER
      ========================================= */}

      <div className="testimonials-header">

        <span className="testimonials-eyebrow">
          CLIENT FEEDBACK
        </span>

        <h2>
          WHAT OUR CLIENTS <span>SAY</span>
        </h2>

        <div className="testimonials-title-line"></div>

      </div>

      {/* =========================================
          TESTIMONIAL WRAPPER
      ========================================= */}

      <div className="testimonials-wrapper">

        {/* LEFT ARROW */}

        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-left"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={19} />
        </button>

        {/* =========================================
            TESTIMONIAL CARDS
        ========================================= */}

        <div className="testimonials-container">

          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={index}
            >

              {/* Quote Icon */}

              <div className="testimonial-quote">
                <Quote size={25} />
              </div>

              {/* Testimonial Text */}

              <p className="testimonial-text">
                {testimonial.text}
              </p>

              {/* Client Information */}

              <div className="testimonial-client">

                <div className="testimonial-client-info">

                  <h3>
                    {testimonial.name}
                  </h3>

                  <span>
                    {testimonial.role}
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* RIGHT ARROW */}

        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-right"
          aria-label="Next testimonials"
        >
          <ChevronRight size={19} />
        </button>

      </div>

      {/* =========================================
          SLIDER DOTS
      ========================================= */}

      <div className="testimonial-dots">

        <button
          type="button"
          className="testimonial-dot active"
          aria-label="Testimonial 1"
        ></button>

        <button
          type="button"
          className="testimonial-dot"
          aria-label="Testimonial 2"
        ></button>

        <button
          type="button"
          className="testimonial-dot"
          aria-label="Testimonial 3"
        ></button>

      </div>

    </section>
  );
}

export default Testimonials;