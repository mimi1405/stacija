import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { useState, useEffect } from "react";
import "../../Styles/Carousel.css";
import Skelet from "../SkeletonLoader/Skelet";

export default function Carousel({ Data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const handlePreviousClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? Data.length - 1 : newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === Data.length ? 0 : newIndex);
  };

  useEffect(() => {
    if(Data !== undefined){
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <div className="carousel">
        <div className="carousel-wrapper">
          <SlArrowLeft
            className="slider-arrow"
            size={30}
            onClick={handlePreviousClick}
          />
          {isLoading && <Skelet />}
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
