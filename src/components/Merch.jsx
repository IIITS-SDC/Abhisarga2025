"use client"

import { useState, useEffect } from "react"
import ParallaxComponent from "./ParllaxComponent"
import { Sparkles } from "lucide-react"

const merchandiseItems = [
  {
    image: "/TShirt.webp",
    title: "Front View",
  },
  {
    image: "/TShirt.webp",
    title: "Side View",
  },
  {
    image: "/TShirt.webp",
    title: "Back View",
  },
]

export default function Merch() {
  const [selectedItem, setSelectedItem] = useState(0)

  const availableSizes = [ "S", "M", "L", "XL"]
  const getCardStyle = (index) => {
    const baseStyle = "absolute w-full h-full transition-all duration-500 ease-in-out rounded-lg cursor-pointer"
    if (index === selectedItem) {
      return `${baseStyle} transform scale-100 opacity-100 z-30 border-2 border-[#B8860B] shadow-[0_0_25px_rgba(184,134,11,0.4)]`
    } else if (index === (selectedItem + 1) % merchandiseItems.length) {
      return `${baseStyle} transform translate-x-1/4 sm:translate-x-1/2 scale-90 opacity-40 z-20`
    } else {
      return `${baseStyle} transform -translate-x-1/4 sm:-translate-x-1/2 scale-90 opacity-40 z-10`
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem((prev) => (prev + 1) % merchandiseItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.98)), url(${encodeURI("/MerchBg.jpeg")})`,
      }}
    >
      <ParallaxComponent backgroundImage="/Merch.jpeg" heading="Merchandise" />
      <img src="/divider.png" className="w-1/2 sm:w-[400px] mt-16 mx-auto block" alt="" />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#B8860B] mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            Collection
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Adorn yourself with Abhisarga's merchandise and show off your mystical prowess.
          </p>
        </div>

        <div className="relative w-[70%] max-w-[300px] sm:max-w-[400px] h-[300px] sm:h-[400px] mx-auto">
          <div className="relative w-full h-full">
            {merchandiseItems.map((item, index) => (
              <div key={index} className={getCardStyle(index)} onClick={() => setSelectedItem(index)}>
                  <div className="relative h-full bg-[#0D1117] rounded-lg overflow-hidden border border-[#B8860B]/20">
                    <div className="relative w-full h-[200px] sm:h-[300px]">
                      <img
                        src={
                          item.image ||
                           "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover blur-sm "
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <span className="text-white text-lg sm:text-2xl font-bold">Coming Soon</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0D1117] to-transparent p-2 sm:p-4">
                      <h3 className="text-lg sm:text-xl font-bold text-[#B8860B] mb-1 sm:mb-2 text-center">
                        {item.title}
                      </h3>
                    </div>
                  </div>

              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <div className="flex justify-center gap-2 mb-4">
            {merchandiseItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === selectedItem ? "bg-[#B8860B]" : "bg-gray-600"
                }`}
                onClick={() => setSelectedItem(index)}
              />
            ))}
          </div>
          <div className="mb-4 sm:mb-6">
            <h4 className="text-[#B8860B] font-semibold mb-2 sm:mb-3">Available Sizes</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 transition-all duration-300 
                    hover:border-[#B8860B]/50 hover:bg-[#B8860B]/10 text-sm sm:text-base`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="inline-block bg-[#0D1117] p-3 sm:p-4 rounded-lg border border-[#B8860B]/20">
            <span className="text-xl sm:text-2xl font-bold text-[#B8860B] mr-2 sm:mr-4">₹229.99</span>
            <button className="px-4 sm:px-6 py-2 bg-[#B8860B] text-black font-semibold rounded-md hover:bg-[#9A7209] transition-colors text-sm sm:text-base">
              Buy Now
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

