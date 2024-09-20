"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";

interface SliderProps {
  content: React.ReactNode[];
  itemsPerSlide: number;
}

function Slider({ content, itemsPerSlide }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(content.length / itemsPerSlide);

  const handleNext = () => {
    if (currentIndex + itemsPerSlide >= content.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + itemsPerSlide);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerSlide < 0) {
      setCurrentIndex((totalSlides - 1) * itemsPerSlide);
    } else {
      setCurrentIndex(currentIndex - itemsPerSlide);
    }
  };

  const visibleItems = content.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-white bg-[color:var(--bg-main-20)] px-2">
        <div className="flex items-center">
          <button onClick={handlePrevious}>
            <IoIosArrowBack size={25} />
          </button>
          <div className="flex gap-2">
            {visibleItems.map((item, index) => (
              <div key={index} className="p-2">
                {item}
              </div>
            ))}
          </div>
          <button onClick={handleNext}>
            <IoIosArrowForward size={25} />
          </button>
        </div>
      </div>
      <div className="flex gap-1 mt-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            className={`w-4 h-2 rounded-sm ${
              currentIndex / itemsPerSlide === index
                ? "bg-[color:var(--color-secondary)]"
                : "bg-[color:var(--bg-main)]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
