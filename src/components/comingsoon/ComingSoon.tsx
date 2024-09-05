import React from "react";
import { motion } from "framer-motion";

interface ComingSoonProps {
  title: string;
  description: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, description }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-dark">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-surface dark:bg-accent rounded-lg shadow-xl max-w-md w-full"
      >
        <h1 className="text-3xl font-bold mb-4 text-primary dark:text-white font-playfair">
          {title}
        </h1>
        <p className="text-text-light dark:text-muted mb-6 font-poppins">
          {description}
        </p>
        <div className="w-full bg-muted dark:bg-tertiary rounded-full h-2.5 mb-6">
          <motion.div
            className="bg-secondary dark:bg-blue-400 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-poppins"
          onClick={() => window.history.back()}
        >
          Go Back
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
