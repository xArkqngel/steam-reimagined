"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";

interface SliderProps {
  content: React.ReactNode[];
  itemsPerSlide: number;
}

function Slider({ content, itemsPerSlide }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + itemsPerSlide < content.length) {
      setCurrentIndex(currentIndex + itemsPerSlide);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerSlide >= 0) {
      setCurrentIndex(currentIndex - itemsPerSlide);
    }
  };

  const visibleItems = content.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  return (
    <div className="flex items-center gap-2  h-[500px] text-white bg-[color:var(--bg-main-20)]">
      <button onClick={handlePrevious} disabled={currentIndex === 0}>
        <IoIosArrowBack size={25} />
      </button>
      <div className="flex gap-2">
        {visibleItems.map((item, index) => (
          <div key={index} className="p-2 ">
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex + itemsPerSlide >= content.length}
      >
        <IoIosArrowForward size={25} />
      </button>
    </div>
  );
}

export default Slider;
