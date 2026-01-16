import { useEffect, useState } from "react";
import slide1 from "../images/slide-img-1.png"
import slide2 from "../images/slide-img-1.png"
import slide3 from "../images/drop-img.jpg"

const slides = [
  {
    id: 1,
    title: "ORPHAN SUPPORT",
    subtitle: "Programm",
    desc: "Providing education, shelter and care for orphan children.",
    image: slide1,
  },
  {
    id: 2,
    title: "WOMEN'S COMMUNITY",
    subtitle: "GARDENS",
    desc: "Empowering women through sustainable gardening.",
    image: slide2,
  },
  {
    id: 3,
    title: "WIDOWS",
    subtitle: "EMPOWERMENT FUND",
    desc: "Helping widows rebuild dignified lives.",
    image: slide3,
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero-slider"
      style={{ backgroundImage: `url(${slides[active].image})` }}
    >
      <div className="overlay"></div>

      <div className="content">
        <h1>
          {slides[active].title} <br />
          <span>{slides[active].subtitle}</span>
        </h1>
        <p>{slides[active].desc}</p>

        <button className="donate-btn">
          <a href="donate">DONATE NOW</a>
        </button>
      </div>

      <div className="slider-indicator">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`indicator ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <span>{String(slide.id).padStart(2, "0")}</span>
            <p>{slide.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
