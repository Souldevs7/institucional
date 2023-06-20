"use client";
import React, { Component, useState } from "react";
import Image from "next/image";

class Partner extends Component {
  render() {
    return (
      <section className="partner-area pt-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Parceiros</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Carousel />
          </div>
        </div>
      </section>
    );
  }
}

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/team/junior.jpg",
    "/images/team/junior.jpg",
    "/images/team/junior.jpg",
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={handlePrevious}>
        {"<"}
      </button>
      <div className="carousel-item">
        <Image
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          width="300"
          height="300"
        />
      </div>
      <button className="arrow right" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default Partner;
