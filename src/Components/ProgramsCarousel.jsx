import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import slide1 from "../images/slide-img-1.png";

// Data
const programs = [
  {
    image: slide1,
    title: "Orphan Support Program",
    description:
      "In communities across The Gambia, AKAFI provides school uniforms, shoes, and learning materials to orphans who otherwise cannot afford basic educational necessities.",
  },
  {
    image: slide1,
    title: "Women’s Community Gardens",
    description:
      "AKAFI supports women with seeds, fertilizers, and tools to help them grow vegetables, generate income, and provide food security for their families.",
  },
  {
    image: slide1,
    title: "Widows Empowerment Fund",
    description:
      "Through small micro-loans, widows receive the resources they need to start or rebuild small businesses and regain financial independence.",
  },
  {
    image: slide1,
    title: "Widows Empowerment Fund",
    description:
      "Through small micro-loans, widows receive the resources they need to start or rebuild small businesses and regain financial independence.",
  },
  {
    image: slide1,
    title: "Widows Empowerment Fund",
    description:
      "Through small micro-loans, widows receive the resources they need to start or rebuild small businesses and regain financial independence.",
  },
  {
    image: slide1,
    title: "Widows Empowerment Fund",
    description:
      "Through small micro-loans, widows receive the resources they need to start or rebuild small businesses and regain financial independence.",
  },
];

const ProgramsCarousel = () => {
  const chunkedPrograms = [];
  for (let i = 0; i < programs.length; i += 3) {
    chunkedPrograms.push(programs.slice(i, i + 3));
  }

  return (
    <Container fluid className="left-image-slider py-4 mb-5">
      <Carousel indicators={false}>
        {chunkedPrograms.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              {group.map((program, index) => (
                <Col
                  md={4}
                  key={index}
                  className="d-flex align-items-center mb-3"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="img-fluid me-3 slider-img"
                  />
                  <div className="slider-text">
                    <h5>{program.title}</h5>
                    <p>{program.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProgramsCarousel;
