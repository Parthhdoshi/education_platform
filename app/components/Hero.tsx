"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import FullScreenVideo from "./FullScreenVideo ";

const textVariants = {
  enter: { y: 20, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const phrases = [
  "School",
  "Tuition",
  "Mentor Education",
  "Learning Center",
  "Knowledge Hub",
];

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const fillColor = theme === "dark" ? "white" : "blue";
  console.log(fillColor)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-[90vh] w-full flex items-center justify-center bg-blue-100 dark:bg-blue-900 antialiased bg-grid-white/[0.02] relative overflow-hidden"
      id="home"
    >
      
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-30"
        fill={fillColor}
      /> */}

      <div className="container mx-auto px-4 mt-0 text-center">
        <FullScreenVideo videoSrc="./HeroVideo.mp4" />
        <h1 className="text-6xl font-bold mb-4 text-gray-100 gap-3 flex-wrap absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
       
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to
          </motion.span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="text-blue-600 dark:text-white"
            >
              {phrases[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </h1>
       <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 text-gray-900 dark:text-gray-300"
        >
          The best solution for your educational needs
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold inline-block 
                   hover:bg-blue-50 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700
                   transition-colors duration-200 shadow-lg hover:shadow-xl"
          href="#contact"
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
