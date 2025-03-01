import React, {
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";
import { motion } from "framer-motion";
import "./TimelineComponent.css";
import { CoolMode } from "./ui/CoolMode";

const TimelineItem = lazy(() => import("./TimelineItem")); // Lazy load TimelineItem component

const Timeline = () => {
  const [stars, setStars] = useState([]);
  const [day, setDay] = useState(2);

  useEffect(() => {
    const generateStars = () => {
      const starsArray = [];
      for (let i = 0; i < 100; i++) {
        starsArray.push({
          id: i,
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          size: Math.random() * 2 + "px",
          animationDuration: Math.random() * 5 + 5 + "s",
        });
      }
      setStars(starsArray);
    };
    generateStars();
  }, []);

  const fullTimeLineData = [
    [
      {
        title: "Inauguration",
        time: "11:00 AM - 11:30 AM",
        location: "G04",
      },
      {
        title: "Panel Discussion",
        // time: "11:00 AM - 11:30 AM",
        location: "G06, G07, G08, G09",
      },
      {
        title: "AgriAI Hackathon",
        time: "8:45 AM - 5:30 PM",
        // location: "G04",
      },
      {
        title: "International Healthcare Hackathon",
        time: "8:45 AM - 5:30 PM",
        // location: "G04",
      },
      {
        title: "Hack The Threat Hackathon",
        time: "8:45 AM - 5:30 PM",
        // location: "G04",
      },
      {
        title: "Agentica Hackathon",
        time: "8:45 AM - 5:30 PM",
        // location: "G04",
      },
    ],
    [
      {
        title: "End of Agri AI and Hack the threat Hackathons",
        time: "8:00 AM - 9:00 AM",
        // location: "G04",
      },
      {
        title: "Piston Cup",
        time: "8:00 AM - 5:00 PM",
        // location: "G04",
      },
      {
        title: "Enchanted Frames",
        time: "9:00 AM - 1:00 PM",
        location: "B03",
      },
      {
        title: "MUN (Keynote)",
        time: "9:00 AM - 1:00 PM",
        location: "G09",
      },
      {
        title: "Smash Karts",
        time: "9:00 AM - 1:00 PM",
        location: "108, 109, 110",
      },
      {
        title: "Ascenta",
        time: "10:00 AM - 4:00 PM",
        location: "G04, G05",
      },
      {
        title:
          "Check point 2 for Medical and Agentica Hackathons",
        time: "12:00 PM - 12:30 PM",
        // location: "108, 109, 110",
      },
      {
        title: "BGMI",
        time: "2:00 PM - 5:00 PM",
        location: "G09",
      },
      {
        title: "Matrix Event",
        time: "2:00 PM - 5:00 PM",
        location: "G05",
      },
      {
        title: "Dodge Ball",
        time: "3:00 PM - 5:00 PM",
        // location: "G09",
      },
      {
        title: "Solo Musical Performance",
        time: "6:00 PM - 7:00 PM",
      },
      {
        title: "Welcome address by Abhinav Mars SLC President",
        time: "7:00 PM - 7:05 PM",
      },
      {
        title: "Speech By Smt.Sangeetha Bala",
        time: "7:05 PM - 7:13 PM",
      },
      {
        title: "Speech By Captain Dr.Uma Nambiar",
        time: "7:13 PM - 7:21 PM",
      },
      {
        title: "Speech By Shri. M.S BALA",
        time: "7:21 PM - 7:29 PM",
      },
      {
        title: "Speech By Guest of Honour Mr.Vikram Cotah",
        time: "7:29 PM - 7:37 PM",
      },
      {
        title: "Speech By Chief Dewan to Prince Of Arcot",
        time: "7:37 PM - 7:45 PM",
      },
      {
        title: "Falicitation of Guests by Shri. M.S.Bala and Col. T. Umashankar",
        time: "7:45 PM - 7:53 PM",
      },
      {
        title: "Vote of Thanks by Teja Sri (SLC Secretary)",
        time: "7:53 PM - 8:00 PM",
      },
      {
        title: "Mysore Express Band",
        time: "8: 15 PM - 9:30 PM",
      },

    ],
    [
      {
        title: "End of Medical and Agentica Hackathons",
        time: "8:00 AM - 9:00 AM",
        // location: "G09",
      },
      {
        title: "Piston Cup",
        time: "8:00 AM - 5:00 PM",
        // location: "G09",
      },
      {
        title: "Mini Miltia",
        time: "9:00 AM - 1:00 PM",
        location: "104",
      },
      {
        title:
          "Judging / Pitch from Participants of Agentica and Medical Hackathons",
        time: "10:00 AM - 11:00 AM",
        location: "G06, G07, G08",
      },
      {
        title: "Movie Trivia",
        time: "10:00 AM - 11:30 AM",
        location: "110, 112",
      },
      {
        title: "RC 24",
        time: "11:00 AM - 1:00 PM",
        location: "G05",
      },
      {
        title: "Consolidation of Results",
        time: "12:00 PM - 1:00 PM",
        // location: "G09",
      },
      {
        title: "Solo Dance Battle",
        time: "2:00 PM - 5:00 PM",
        // location: "G09",
      },
      {
        title: "Bullet Echo",
        time: "2:00 PM - 4:00 PM",
        location: "G05",
      },
      {
        title: "Free Fire",
        time: "2:00 PM - 5:00 PM",
        location: "104",
      },
    ],
  ];

  const timelineData = fullTimeLineData[day - 1];

  return (
    <motion.div
      className="relative min-h-screen py-10 px-5 mt-10"
      style={{
        background:
          "radial-gradient(circle at top, #000000, #000000)",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDuration: star.animationDuration,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-4">
        <img
          src="/assets/header-flourish.svg"
          alt=""
          className="h-3 transform scale-x-[-1] mb-10"
        />
        <h1 className="text-4xl font-bold text-center text-[#F7E290] mb-10 font-mysticalFont">
          Mystical Timeline
        </h1>
        <img
          src="/assets/header-flourish.svg"
          alt=""
          className="h-3 mb-10"
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="m-8 flex gap-4 justify-center">
          <button
            onClick={() => setDay(1)}
            className=" button px-6 py-2 bg-[#F7E290] text-black rounded-full font-semibold hover:bg-[#edd472] transition"
          >
            Day 1
          </button>
          <button
            onClick={() => setDay(2)}
            className=" button px-6 py-2 bg-[#F7E290] text-black rounded-full font-semibold hover:bg-[#edd472] transition"
          >
            Day 2
          </button>
          <button
            onClick={() => setDay(3)}
            className=" button px-6 py-2 bg-[#F7E290] text-black rounded-full font-semibold hover:bg-[#edd472] transition"
          >
            Day 3
          </button>
        </div>
        <div className="absolute left-1/2 w-1 bg-gradient-to-b from-[#F7E290] to-[#24222d] h-full transform -translate-x-1/2"></div>
        {timelineData.map((item, index) => (
          <Suspense fallback={<div>Loading...</div>} key={index}>
            <TimelineItem index={index} item={item} />
          </Suspense>
        ))}
      </div>
    </motion.div>
  );
};

export default React.memo(Timeline);
