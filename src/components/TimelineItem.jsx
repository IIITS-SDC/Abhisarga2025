import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ item, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className={`mb-10 flex ${
        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      } items-center`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Content Area */}
      <div
        className={`relative w-full sm:w-1/2 px-5 py-5 bg-gradient-to-r ${
          index % 2 === 0
            ? "from-[#24222d] to-[#131433]"
            : "from-[#131433] to-[#24222d]"
        } rounded-lg shadow-lg border border-[#F7E290] text-[#F7E290] event-card`}
      >
        {/* Backdrop Layer (Dimmed and Blurred) */}
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {item.title}
          </h2>
          <p className="text-sm sm:text-base">{item?.time}</p>
          <p className="mt-1 text-xs sm:text-sm italic">{item?.location}</p>
        </div>

        {/* Decorative Circle */}
        <div
          className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F7E290] border-4 border-[#131433] ${
            index % 2 !== 0 ? "-right-3" : "-left-3"
          }`}
        ></div>
      </div>

      {/* Image Area */}
      {/* <div className="hidden sm:flex w-1/2 justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-40 h-40 object-cover rounded-lg shadow-lg border-2 border-[#F7E290]"
          loading="lazy"
        />
      </div> */}
    </motion.div>
  );
};

export default React.memo(TimelineItem);