import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaEnvelope,
  FaBed,
  FaTshirt,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "About", path: "/about", icon: FaInfoCircle },
    { name: "Events", path: "/events", icon: FaCalendarAlt },
    { name: "Contact", path: "/contact", icon: FaEnvelope },
    // { name: "Accommodation", path: "/accommodation", icon: FaBed },
    { name: "Merch", path: "/merch", icon: FaTshirt },
    // {
    //   name: "Call For Sponsors",
    //   path: "/call-for-sponsors",
    //   icon: FaHandshake,
    // },
    { name: "Sponsors", path: "/sponsors", icon: FaAward },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "backdrop-blur-lg bg-black bg-opacity-50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/assets/new_logo.png"
              alt="Logo"
              className="w-25 h-12 mr-2"
            />
          </motion.div>
        </Link>

        <div
          className="xl:hidden text-[#F7E290] text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </div>

        <div className="hidden xl:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className="text-[#F7E290] hover:text-[#F7E290] transition duration-300 font-harrypotter relative group"
              >
                <span className="relative z-10 font-mysticalFont font-[600]">
                  {item.name}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F7E290] transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-[#F7E290] rounded-md opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ opacity: 0.1 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-black bg-opacity-90 xl:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className="block text-[#F7E290] text-lg py-3 px-6 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center font-mysticalFont font-[400]">
                    <item.icon className="mr-2" />
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
