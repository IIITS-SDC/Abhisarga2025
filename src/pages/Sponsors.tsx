import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import ParallaxComponent from "../components/ParllaxComponent";

export default function Sponsors() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  const sponsors = [
    {
      category: "Title Sponsors",
      items: [
        {
          name: "canaraBank",
          logo: "/assets/SponsorsAssets/canaraBank.webp",
        },
      ],
    },
    {
      category: "Diamond Sponsors",
      items: [
        {
          name: "cityUnionBank",
          logo: "/assets/SponsorsAssets/cityUnionBank.webp",
        },
      ],
    },
    {
      category: "Platinum Sponsors",
      items: [
        {
          name: "IndianBank",
          logo: "/assets/SponsorsAssets/IndianBank.webp",
        },
      ],
    },
    {
      category: "Gold Sponsors",
      items: [
        {
          name: "StationS",
          logo: "/assets/SponsorsAssets/StationS.webp",
        },
      ],
    },
    {
      category: "",
      items: [
        {
          name: "Infinity",
          logo: "/assets/SponsorsAssets/Infinity.webp",
        },
        {
          name: "HotelSowmiya",
          logo: "/assets/SponsorsAssets/HotelSowmiya.webp",
        },
      ],
    },
    {
      category: "",
      items: [
        {
          name: "NandhaInfotech",
          logo: "/assets/SponsorsAssets/NandhaInfotech.webp",
        },
        {
          name: "TechSoftZets",
          logo: "/assets/SponsorsAssets/TechSoftZets.webp",
        },
      ],
    },
    {
      category: "Credential Partner",
      items: [
        {
          name: "TruScholar",
          logo: "/assets/SponsorsAssets/TruScholar.webp",
        },
      ],
    },
    {
      category: "Media Partner",
      items: [
        {
          name: "Abhinandana",
          logo: "/assets/SponsorsAssets/Abhinandana.webp",
        },
      ],
    },
    {
      category: "Beverage Partner",
      items: [
        {
          name: "Night Hawk",
          logo: "/assets/SponsorsAssets/NightHawk.webp",
        },
      ],
    },
    {
      category: "Accommodation Partner",
      items: [
        {
          name: "Bigstay",
          logo: "/assets/SponsorsAssets/bigstay.webp",
        },
      ],
    },
  ];

  return (
    <>
      <ParallaxComponent
        backgroundImage="/SponsorsHero.jpeg"
        heading="Sponsors"
      />
      <div
        className="min-h-screen relative overflow-hidden bg-black"
        style={{
          background: `
          linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
          url('/SponsorsBg.jpeg') center/cover no-repeat fixed
        `,
        }}
      >
        <Stars />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <AnimatePresence>
            {mounted &&
              sponsors.map((section, sectionIndex) => (
                <motion.section
                  key={section.category}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
                  className="mb-20 first:mt-20"
                >
                  {section.category !== "" && (
                    <motion.h2
                      className="text-2xl sm:text-4xl text-center text-[#F7E290] mb-12 font-serif relative inline-block w-full cursor-pointer"
                      initial={{ letterSpacing: "0.5em", opacity: 0 }}
                      animate={{ letterSpacing: "0.1em", opacity: 1 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {section.category.split("").map((char, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: sectionIndex * 0.2 + index * 0.05,
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                      <motion.div
                        className="absolute -bottom-2 left-1/4 right-1/4 h-0.5"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 1.5,
                          delay: sectionIndex * 0.2 + 0.5,
                        }}
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, #F7E290, transparent)",
                        }}
                      />
                    </motion.h2>
                  )}

                  <div className="flex flex-wrap justify-center gap-4">
                    {section.items.map((sponsor, index) => (
                      <motion.div
                        key={sponsor.name}
                        className="w-full max-w-md flex justify-center"
                        initial={{ opacity: 0, rotateX: -30 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: sectionIndex * 0.2 + index * 0.2,
                        }}
                        onMouseEnter={() => setHoveredCard(sponsor.name)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <motion.div
                          className="p-8 relative z-10 flex items-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-full h-auto object-contain max-h-40 mb-6"
                            animate={{
                              scale: hoveredCard === sponsor.name ? 1.1 : 1,
                              filter:
                                hoveredCard === sponsor.name
                                  ? "brightness(1.2)"
                                  : "brightness(1)",
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function Stars() {
  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-400"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
