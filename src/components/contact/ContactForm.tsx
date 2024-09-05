import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toast, ToastProvider, ToastViewport } from "@radix-ui/react-toast";
import { Loader2 } from "lucide-react";

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastMessage, setToastMessage] = useState("");

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/7cebbb15752d09d17588857d962f9604",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setToastType("success");
        setToastMessage("Message sent successfully!");
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setToastType("error");
      setToastMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setToastOpen(true);
    }
  };

  return (
    <ToastProvider swipeDirection="right">
      <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.form
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block font-poppins font-bold text-xs text-dark dark:text-white"
                >
                  First Name
                </label>
                <motion.input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                  className="w-full border-b border-gray-300 dark:border-gray-700 py-2 font-poppins font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block font-poppins font-bold text-xs text-dark dark:text-white"
                >
                  Last Name
                </label>
                <motion.input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="w-full border-b border-gray-300 dark:border-gray-700 py-2 font-poppins font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-poppins font-bold text-xs text-dark dark:text-white"
                >
                  Email Id
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="johndoe@gmail.com"
                  className="w-full border-b border-gray-300 dark:border-gray-700 py-2 font-poppins font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block font-poppins font-bold text-xs text-dark dark:text-white"
                >
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full border-b border-gray-300 dark:border-gray-700 py-2 font-poppins font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block font-poppins font-bold text-xs text-dark dark:text-white"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Type your Message"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 font-poppins font-normal text-base text-dark dark:text-white bg-transparent focus:outline-none focus:border-secondary dark:focus:border-blue-400 resize-none"
                whileFocus="focus"
                variants={inputVariants}
              ></motion.textarea>
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                className="bg-secondary hover:bg-opacity-90 text-white font-poppins font-medium text-base py-3 px-6 rounded-md  dark:hover:bg-opacity-90 transition duration-300 ease-in-out flex items-center justify-center min-w-[150px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {isSubmitting ? "Sending..." : "Send message"}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      <Toast open={toastOpen} onOpenChange={setToastOpen}>
        <div
          className={`${
            toastType === "success" ? "bg-green-500" : "bg-red-500"
          } text-white p-4 rounded-md shadow-lg`}
        >
          {toastMessage}
        </div>
      </Toast>
      <ToastViewport className="fixed bottom-0 right-0 flex flex-col p-6 gap-2 w-full max-w-sm m-0 list-none z-50 outline-none" />
    </ToastProvider>
  );
};

export default ContactForm;
