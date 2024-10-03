"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";

interface SliderProps {
  content: React.ReactNode[];
  cols: number;
  rows?: number;
  autoSlide?: boolean; // Controls auto-sliding
  autoSlideInterval?: number; // Interval for auto-sliding
}

function Slider({
  content,
  cols,
  rows,
  autoSlide = false,
  autoSlideInterval = 10000,
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(false);

  const itemsPerPage = rows ? rows * cols : cols;
  const totalSlides = Math.ceil(content.length / itemsPerPage);

  const handleNext = () => {
    setFadeTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage >= content.length
          ? 0
          : prevIndex + itemsPerPage
      );
      setFadeTransition(false);
    }, 500);
  };

  const handlePrevious = () => {
    setFadeTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - itemsPerPage < 0
          ? (totalSlides - 1) * itemsPerPage
          : prevIndex - itemsPerPage
      );
      setFadeTransition(false);
    }, 500);
  };

  const handleSlideClick = (index: number) => {
    setFadeTransition(true);
    setTimeout(() => {
      setCurrentIndex(index * itemsPerPage);
      setFadeTransition(false);
    }, 500);
  };

  useEffect(() => {
    if (autoSlide) {
      const autoSlideTimer = setInterval(() => {
        handleNext();
      }, autoSlideInterval);

      return () => clearInterval(autoSlideTimer);
    }
  }, [currentIndex, itemsPerPage, autoSlide, autoSlideInterval]);

  const visibleItems = content.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-white bg-[color:var(--bg-main-20)] px-4 py-2 w-full">
        <div className="flex items-center justify-center">
          <button className="pr-2" onClick={handlePrevious}>
            <IoIosArrowBack size={25} />
          </button>
          <div
            className={`grid gap-2 transition-opacity duration-500 ${
              fadeTransition ? "opacity-0" : "opacity-100"
            }`}
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridTemplateRows: rows ? `repeat(${rows}, auto)` : undefined,
            }}
          >
            {visibleItems.map((item, index) => (
              <div key={index} className="">
                {item}
              </div>
            ))}
          </div>
          <button className="pl-2" onClick={handleNext}>
            <IoIosArrowForward size={25} />
          </button>
        </div>
      </div>
      <div className="flex gap-1 mt-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`w-4 h-2 rounded-sm ${
              currentIndex / itemsPerPage === index
                ? "bg-[color:var(--color-secondary)]"
                : "bg-[color:var(--bg-main)]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
