import React, { useState } from "react";
import FooterContact from "./FooterContactUs";
import "./Home.css";
import AboutUs from "./AboutUs";
import SelectionForm from "./SelectionForm";

const heroSlides = [
  {
    image:
      "https://png.pngtree.com/background/20230527/original/pngtree-home-interior-design-with-black-walls-and-wooden-furniture-picture-image_2758154.jpg",
    quoteTitle: "Design your space, define your lifestyle",
    quoteSubtitle:
      "Discover curated interiors and connect with expert designers – all in one place.",
    subquote:
      "Bring your dream home to life with expert guidance and inspiration.",
  },
  {
    image:
      "http://roohome.com/wp-content/uploads/2016/09/dark-living-room-wall-ideas-Vlad-Kislenko.jpg",
    quoteTitle: "Modern interiors for modern lifestyles.",
    quoteSubtitle: "Step into a world where style meets function.",
    subquote: "Upgrade your living with contemporary designs tailored for you.",
  },
  {
    image:
      "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Dark-modern-house-interior-design.jpg",
    quoteTitle: "Designs that speak your personality.",
    quoteSubtitle: "Express yourself through unique and bold interiors.",
    subquote: "Let your home tell your story with custom-made designs.",
  },
  {
    image:
      "https://wonderfulengineering.com/wp-content/uploads/2014/08/Kitchen-design-ideas-20.jpg",
    quoteTitle: "Create a kitchen that inspires.",
    quoteSubtitle: "Cook, gather, and celebrate in style.",
    subquote: "Transform your kitchen into the heart of your home.",
  },
  {
    image:
      "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/banner-1714034487-xNaST/homepage-banner-web-1714034622-yivWL.jpg",
    quoteTitle: "Every corner, a new story.",
    quoteSubtitle: "Personalize every space, big or small.",
    subquote: "Discover endless possibilities for every nook and cranny.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = heroSlides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <div className="home-container">
      <div
        className="hero-banner-sketch"
        style={{ backgroundImage: `url(${heroSlides[current].image})` }}
      >
        {/* Left Arrow + Button */}
        <div className="hero-quote-overlay">
          <h1 className="hero-title">{heroSlides[current].quoteTitle}</h1>
          {heroSlides[current].quoteSubtitle && (
            <p className="hero-subtitle">{heroSlides[current].quoteSubtitle}</p>
          )}
        </div>
        <div className="arrow-btn-group left-group">
          <button
            className="carousel-arrow left"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            &lt;
          </button>
          <button className="discover-btn left full-bg-div">
            Discover more products
          </button>
        </div>

        {/* Right Arrow + Button */}
        <div className="arrow-btn-group right-group">
          <button
            className="carousel-arrow right"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            &gt;
          </button>
          <button className="discover-btn right full-bg-div">
            Discover more designs
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-columns">
          <div className="about-images-grid">{/* Optional image grid */}</div>
        </div>
      </section>
      <AboutUs />
      <SelectionForm />
      <FooterContact />
    </div>
  );
};

export default Home;
