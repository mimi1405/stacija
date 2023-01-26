import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
import "../../Styles/Carousel.css";

export default function Carousel({ Data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? Data.length - 1 : newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === Data.length ? 0 : newIndex);
  };

  return (
    <>
      <div className="carousel">
        <div className="carousel-wrapper">
          <SlArrowLeft
            className="slider-arrow"
            size={30}
            onClick={handlePreviousClick}
          />
          <img
            src={Data[currentIndex]}
            alt="Slider with images"
            className="carousel-image"
          />
          <SlArrowRight
            className="slider-arrow"
            size={30}
            onClick={handleNextClick}
          />
        </div>
      </div>
    </>
  );
}
