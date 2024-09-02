import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactDetails: React.FC = () => {
  return (
    <section className="bg-[#99CEED] dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-poppins font-bold text-base text-dark dark:text-white">
              Contact us
            </h3>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-dark dark:text-white leading-tight">
              We'd love to hear from you
            </h2>
            <p className="font-poppins font-normal text-base text-dark dark:text-gray-300 max-w-lg">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="font-poppins font-bold text-2xl text-dark dark:text-white">
              Let's talk!
            </h3>
            <div className="space-y-2">
              <p className="font-poppins font-normal text-base text-dark dark:text-gray-300 pr-3">
                +234 09012346514{" "}
                <span className="ml-5">hello@largerthani.com</span>
              </p>
            </div>

            <hr className="border-[#E5E5E5] dark:border-gray-600 w-full max-w-[325px]" />
            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-bold text-xl text-dark dark:text-white">
                  Headoffice
                </h4>
                <p className="font-poppins font-normal text-base text-text-light dark:text-gray-400 mt-1">
                  8 Brewery Drive, Lagos,
                  <br />
                  Nigeria
                </p>
              </div>
              <div>
                <h4 className="font-poppins font-bold text-xl text-dark dark:text-white">
                  Branch Office
                </h4>
                <p className="font-poppins font-normal text-base text-text-light dark:text-gray-400 mt-1">
                  Opp Opolo round about, Yenagoa,
                  <br />
                  Bayelsa,
                  <br />
                  Nigeria
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <SocialIcon Icon={FaFacebook} />
              <SocialIcon Icon={FaTwitter} />
              <SocialIcon Icon={FaInstagram} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="text-dark dark:text-white hover:text-secondary dark:hover:text-[#99CEED] transition-colors duration-200"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export default ContactDetails;
