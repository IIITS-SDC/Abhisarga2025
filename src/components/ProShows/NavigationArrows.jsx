import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function NavigationArrows({ onPrev, onNext }) {
  return (
    <div className="
      absolute bottom-8
      flex items-center gap-3
      z-10 left-[5%]
    ">
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="
          flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12
          bg-black/40 hover:bg-white/90
          text-white hover:text-black
          rounded-full
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white/50
          active:scale-95
          backdrop-blur-md
          touch-manipulation
          select-none
        "
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next"
        className="
          flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12
          bg-black/40 hover:bg-white/90
          text-white hover:text-black
          rounded-full
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white/50
          active:scale-95
          backdrop-blur-md
          touch-manipulation
          select-none
        "
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}

export default NavigationArrows;