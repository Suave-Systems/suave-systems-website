import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-white dark:bg-dark flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <motion.div
        className="w-full lg:w-2/3 pr-0 lg:pr-12 flex flex-col items-start justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-primary dark:text-white mb-6">
          Complex Questions?
        </h2>
        <p className="font-poppins font-normal text-base sm:text-lg lg:text-xl text-tertiary dark:text-muted mb-8 max-w-2xl">
          Request a personalized budget for your IT problem and development.
          We'll send you a couple options in 24 hours. Get a free consultation
          if you're our first customer.
        </p>
        <motion.button
          className="bg-secondary hover:bg-opacity-90 text-white font-poppins font-semibold text-lg py-3 px-6 rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={20} className="mr-2" />
          <span>Call now</span>
        </motion.button>
      </motion.div>
      <motion.div
        className="w-full lg:w-1/3 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative w-full h-0 pb-[75%] lg:pb-[100%]">
          <img
            src="https://res.cloudinary.com/doetven6z/image/upload/v1725122823/ctaimage_gfca4q.svg"
            alt="Call to Action"
            className="absolute inset-0 w-full h-full object-cover rounded-bl-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
