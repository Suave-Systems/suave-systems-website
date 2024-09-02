import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-surface dark:bg-dark"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <motion.h1
          className="font-playfair text-4xl md:text-6xl lg:text-[90px] font-bold text-secondary dark:text-background mb-6"
          variants={itemVariants}
        >
          Your Solution IT Consultancy
        </motion.h1>
        <motion.p
          className="font-jakarta text-lg md:text-2xl text-tertiary dark:text-gray-100 mb-8"
          variants={itemVariants}
        >
          We are here to help you take care of your IT problems with the best
          service especially for you.
        </motion.p>
        <motion.button
          className="bg-secondary hover:bg-accent text-surface dark:text-background font-jakarta font-bold text-xs md:text-sm uppercase py-3 px-6 rounded transition duration-300 ease-in-out"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
      <motion.div className="w-full md:w-1/2" variants={itemVariants}>
        <img
          src="https://res.cloudinary.com/doetven6z/image/upload/v1725092045/creating-a-brand-2mMhaoBGjCs-unsplash-removebg-preview_1_cvy5vf.svg"
          alt="Brand Creation Illustration"
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
