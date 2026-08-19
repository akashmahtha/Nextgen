import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

const heroSlides = [
  {
    image: "/images/hero-1.jpg",
    alt: "Construction and civil engineering project",
  },
  {
    image: "/images/hero-2.jpg",
    alt: "Modern architectural building",
  },
  {
    image: "/images/hero-3.jpg",
    alt: "Modern bridge and infrastructure project",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slider
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  // Previous slide
  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">

      {/* =========================================
          BACKGROUND SLIDES
      ========================================= */}
      <div className="hero-background">

        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className={`hero-slide-image ${
              index === currentSlide ? "active" : ""
            }`}
          />
        ))}

      </div>

      {/* =========================================
          DARK OVERLAY
      ========================================= */}
      <div className="hero-overlay"></div>

      {/* =========================================
          HERO CONTENT
      ========================================= */}
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-small-title">
            WELCOME TO NEXTGEN CIVIL
          </span>

          <h1>
            BUILDING
            <span>TOMORROW,</span>
            TOGETHER
          </h1>

          <p>
            Delivering innovative, sustainable and
            cost-effective engineering solutions
            for a better future.
          </p>

          <div className="hero-buttons">

            <Link
              to="/civil-engineering"
              className="hero-primary-btn"
            >
              OUR SERVICES
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="hero-secondary-btn"
            >
              GET IN TOUCH
            </Link>

          </div>

        </div>

      </div>

      {/* =========================================
          PREVIOUS BUTTON
      ========================================= */}
      <button
        type="button"
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* =========================================
          NEXT BUTTON
      ========================================= */}
      <button
        type="button"
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* =========================================
          SLIDER DOTS
      ========================================= */}
      <div className="hero-dots">

        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}

      </div>

      {/* =========================================
          SOCIAL BUTTONS
      ========================================= */}
      <div className="hero-social">

        <a
          href="#"
          aria-label="Facebook"
        >
          f
        </a>

        <a
          href="#"
          aria-label="Website"
        >
          W
        </a>

        <a
          href="#"
          aria-label="Twitter"
        >
          t
        </a>

      </div>

    </section>
  );
}

export default Hero;