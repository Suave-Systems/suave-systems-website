import React from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.form
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="block font-roboto font-bold text-xs text-dark dark:text-white"
              >
                First Name
              </label>
              <motion.input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                className="w-full border-b border-gray-300 dark:border-gray-700 py-2 font-roboto font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400"
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="block font-roboto font-bold text-xs text-dark dark:text-white"
              >
                Last Name
              </label>
              <motion.input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="w-full border-b border-gray-300 dark:border-gray-700 py-2 font-roboto font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400"
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block font-roboto font-bold text-xs text-dark dark:text-white"
              >
                Email Id
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="w-full border-b border-gray-300 dark:border-gray-700 py-2 font-roboto font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400"
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block font-roboto font-bold text-xs text-dark dark:text-white"
              >
                Subject
              </label>
              <motion.input
                type="text"
                id="subject"
                name="subject"
                className="w-full border-b border-gray-300 dark:border-gray-700 py-2 font-roboto font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400"
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block font-roboto font-bold text-xs text-dark dark:text-white"
            >
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Type your Message"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 font-roboto font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400 resize-none"
              whileFocus="focus"
              variants={inputVariants}
            ></motion.textarea>
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="bg-[#094B72] dark:bg-blue-600 text-white font-roboto font-medium text-base py-3 px-6 rounded-md hover:bg-opacity-90 dark:hover:bg-opacity-90 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
