"use client"

import { useState, useEffect } from "react"
import ParallaxComponent from "./ParllaxComponent"
import { Sparkles, X, ZoomIn, ZoomOut } from "lucide-react"

const merchandiseItems = [
  {
    image: "/assets/Merchendise/frontview.webp",
    title: "Front View",
  },
  {
    image: "/assets/Merchendise/sideview.webp",
    title: "Side View",
  },
  {
    image: "/assets/Merchendise/backview.webp",
    title: "Back View",
  },
]

export default function Merch() {
  const [selectedItem, setSelectedItem] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [intervalId, setIntervalId] = useState(null)

  const availableSizes = ["S", "M", "L", "XL"]

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
    if (!isModalOpen) {
      const id = setInterval(() => {
        setSelectedItem((prev) => (prev + 1) % merchandiseItems.length)
      }, 5000)
      setIntervalId(id)
      return () => clearInterval(id)
    } else {
      clearInterval(intervalId)
    }
  }, [isModalOpen])

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white relative" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.98)), url(${encodeURI("/MerchBg.jpeg")})`,
      }}>
      <ParallaxComponent backgroundImage="/Merch.jpeg" heading="Merchandise" />
      <img src="/divider.png" className="w-1/2 sm:w-[400px] mt-16 mx-auto block" alt="" />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#B8860B] mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" /> Collection <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Adorn yourself with Abhisarga's merchandise and show off your mystical prowess.
          </p>
        </div>

        {/* Merchandise Display */}
        <div className="relative w-[600px] max-w-[250px] md:max-w-[600px] sm:max-w-[400px] h-[350px] sm:h-[600px] mx-auto">
          <div className="relative w-full h-full">
            {merchandiseItems.map((item, index) => (
              <div key={index} className={getCardStyle(index)} onClick={() => { setSelectedItem(index); setIsModalOpen(true) }}>
                <div className="relative h-full bg-[#0D1117] rounded-lg overflow-hidden border border-[#B8860B]/20">
                  <div className="relative w-full h-[300px] sm:h-[500px]">
                    <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0D1117] to-transparent p-2 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#B8860B] mb-1 sm:mb-2 text-center">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Fullscreen Preview */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setIsModalOpen(false)}>
            <div className="relative max-w-3xl w-full text-center" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
              <div className="relative overflow-hidden">
                <img src={merchandiseItems[selectedItem].image} alt={merchandiseItems[selectedItem].title} className="w-full transform transition-transform duration-300" style={{ transform: `scale(${zoom})` }} />
              </div>
              <div className="mt-4 flex justify-center gap-4">
                <button onClick={() => setZoom((prev) => Math.min(prev + 0.2, 3))} className="bg-[#B8860B] text-black p-2 rounded-md flex items-center gap-1">
                  <ZoomIn size={20} /> Zoom In
                </button>
                <button onClick={() => setZoom((prev) => Math.max(prev - 0.2, 1))} className="bg-gray-700 text-white p-2 rounded-md flex items-center gap-1">
                  <ZoomOut size={20} /> Zoom Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
