import React from "react";

export default function CarouselSlide({ item, isActive, index }) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-300 ease-in-out bg-black
        ${isActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      {/* Top-to-Bottom Gradient Overlay */}
      <div
        className="absolute block sm:hidden inset-0"
        style={{
          background: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)
          `,
        }}
      />
      <div
        className="absolute hidden sm:block inset-0"
        style={{
          background: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent, rgba(0, 0, 0, 0.7)),
            linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent),
            rgba(0, 0, 0, 0.3)
          `,
        }}
      />

      {/* Background Image */}
      <a href={item.link} target="_blank">
        <img
          src={item.image[index]}
          alt={item.title}
          className="w-full h-full object-cover"
        />

        {/* Content */}
        <div className="absolute top-1/2 left-[5%] -translate-y-1/2 max-w-xl z-20">
          <div className="flex items-center gap-5 mb-4">
            <span className="text-[#F7E290]">{item.author}</span>
            <span className="text-white/80">{item.date}</span>
          </div>
          <h2 className="text-white text-4xl sm:text-7xl font-bold mb-3">
            {item.title}
          </h2>
          <h3 className="sm:text-2xl text-[#F7E290] mb-5">{item.topic}</h3>
          <p className="font-[sans] sm:text-xl text-white/80 mb-8 pr-6">
            {item.description}
          </p>
        </div>
      </a>
    </div>
  );
}
