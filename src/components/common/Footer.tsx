import React from "react";
import { Instagram, Dribbble, Twitter, Youtube } from "lucide-react";

interface SocialIconProps {
  Icon: React.FC<React.ComponentProps<typeof Instagram>>;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-secondary rounded-full p-2 text-white hover:bg-opacity-80 transition-colors"
  >
    <Icon size={20} />
  </a>
);

const MainFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-around items-start space-y-8 md:space-y-0 md:space-x-16">
          <div>
            <img
              src="https://res.cloudinary.com/doetven6z/image/upload/v1725093588/LogoWhite_w7o7hy.svg"
              alt="Logo"
              className="h-12 w-auto mb-4"
            />
          </div>
          <div>
            <h6 className="font-inter font-medium text-xl text-gray-100 mb-4">
              Services
            </h6>
            <ul className="space-y-2">
              {[
                "IT Consultation",
                "Software Development",
                "IT Procurement",
                "Software Solution",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="font-inter font-normal text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#004D7B] dark:bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#F9F8F9] dark:text-gray-400 text-sm mb-4 sm:mb-0">
            © {currentYear}. All rights reserved
          </p>
          <div className="flex space-x-4">
            <SocialIcon Icon={Instagram} href="https://instagram.com" />
            <SocialIcon Icon={Dribbble} href="https://dribbble.com" />
            <SocialIcon Icon={Twitter} href="https://twitter.com" />
            <SocialIcon Icon={Youtube} href="https://youtube.com" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
