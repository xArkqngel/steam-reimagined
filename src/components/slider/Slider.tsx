"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";

interface SliderProps {
  content: React.ReactNode[];
  cols: number;
  rows?: number; // Optional prop to define the number of rows
}

function Slider({ content, cols, rows }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If rows is passed, calculate how many items should be displayed per slide (rows * cols)
  const itemsPerPage = rows ? rows * cols : cols;

  const totalSlides = Math.ceil(content.length / itemsPerPage);

  const handleNext = () => {
    if (currentIndex + itemsPerPage >= content.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerPage < 0) {
      setCurrentIndex((totalSlides - 1) * itemsPerPage);
    } else {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleItems = content.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-white bg-[color:var(--bg-main-20)] px-2 w-full">
        <div className="flex items-center justify-center">
          <button className="pr-2" onClick={handlePrevious}>
            <IoIosArrowBack size={25} />
          </button>
          <div
            className={`grid gap-2`}
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
          <div
            key={index}
            className={`w-4 h-2 rounded-sm ${
              currentIndex / itemsPerPage === index
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
