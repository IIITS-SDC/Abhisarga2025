import React, { useState, useEffect } from "react";
import { carouselData } from "./data/carouselData";
import NavigationArrows from "./NavigationArrows";
import CarouselSlide from "./CarouselSlide";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Single state for both index and subindex
  console.log(currentIndex);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const mainIndex = Math.floor(prevIndex / 10); // Extract main index
        const subIndex = prevIndex % 10; // Extract subindex

        const images = carouselData[mainIndex]?.image || [];
        const isLastImage = subIndex + 1 >= images.length;

        if (isLastImage) {
          // Move to the next main index and reset subindex
          return ((mainIndex + 1) % carouselData.length) * 10;
        }

        return prevIndex + 1; // Increment subindex while keeping main index
      });
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [carouselData]); // Only depend on `carouselData` to avoid unnecessary resets

  // Extract main index and subindex when needed
  const mainIndex = Math.floor(currentIndex / 10);
  const subIndex = currentIndex % 10;

  const handleNext = () => {
    setCurrentIndex(((mainIndex + 1) % carouselData.length) * 10); // Move to next mainIndex
  };

  const handlePrev = () => {
    setCurrentIndex(
      ((mainIndex - 1 + carouselData.length) % carouselData.length) * 10
    ); // Move to previous mainIndex
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index * 10); // Set to the main index with subindex reset
  };

  return (
    <div className="h-screen relative overflow-hidden font-mysticalFont">
      <div className="relative h-full">
        {carouselData.map((item, index) => (
          <CarouselSlide
            key={item.id}
            item={item}
            index={subIndex}
            isActive={index === mainIndex} // Compare mainIndex
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <NavigationArrows
        onPrev={handlePrev}
        onNext={handleNext}
        className="absolute inset-y-0 w-full flex items-center justify-between px-4 sm:px-6 lg:px-4 z-2"
      />

      {/* Mobile-only indicators */}
      <div className="flex md:hidden justify-center absolute bottom-4 left-0 right-0 z-30">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
              mainIndex === index ? "bg-[#F7E290] w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
