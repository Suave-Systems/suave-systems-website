import React, { useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={ref}
      className="bg-white dark:bg-dark flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="w-full lg:w-2/3 pr-0 lg:pr-12 flex flex-col items-start justify-start"
        variants={itemVariants}
      >
        <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-primary dark:text-white mb-6">
          Complex Questions?
        </h2>
        <p className="font-poppins font-normal text-base sm:text-lg lg:text-xl text-tertiary dark:text-muted mb-8 max-w-2xl">
          Request a personalized budget for your IT problem and development.
          We'll send you a couple options in 24 hours. Get a free consultation
          if you're our first customer.
        </p>
        <Link to="/contact-us">
          <motion.button
            className="bg-secondary hover:bg-opacity-90 text-white font-poppins font-semibold text-lg py-3 px-6 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={20} className="mr-1" />
            <span>Call now</span>
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        className="w-full lg:w-1/3 mt-8 lg:mt-0"
        variants={itemVariants}
      >
        <div className="relative w-full h-0 pb-[75%] lg:pb-[100%]">
          <img
            src="https://res.cloudinary.com/doetven6z/image/upload/v1725122823/ctaimage_gfca4q.svg"
            alt="Call to Action"
            className="absolute inset-0 w-full h-full object-cover rounded-bl-3xl"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;
