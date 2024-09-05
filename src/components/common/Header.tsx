import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu } from "lucide-react";
// import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import useDarkMode from "../../hooks/useDarkMode";

interface NavItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  // const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/doetven6z/image/upload/v1725413181/newsuaveicon_a3ogmx.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
            <Link
              to="/"
              className="ml-2 text-base font-bold uppercase text-primary hover:text-gray-600 dark:text-gray-200 dark:hover:text-white font-poppins"
            >
              Suave Systems
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`text-base ${
                        isActive(item.path)
                          ? "font-bold"
                          : "font-normal hover:text-gray-300"
                      } text-primary dark:text-gray-200 dark:hover:text-white font-poppins`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="text-primary dark:text-white"
            >
              <Search className="h-5 w-5 hover:text-gray-300" />
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-primary hover:text-gray-300 dark:text-white"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="text-primary dark:text-white"
            >
              <Search className="h-5 w-5" />
            </Button> */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-primary dark:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <SheetClose asChild>
                          <Link
                            to={item.path}
                            className={`block text-lg ${
                              isActive(item.path)
                                ? "font-bold"
                                : "font-medium hover:text-gray-300"
                            } text-primary dark:text-primary dark:hover:text-white`}
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-8">
                  <Button
                    onClick={toggleDarkMode}
                    className="w-full flex items-center justify-center bg-secondary hover:bg-accent text-surface"
                  >
                    {isDarkMode ? (
                      <>
                        <Sun className="mr-2 h-4 w-4" /> Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-4 w-4" /> Dark Mode
                      </>
                    )}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* {isSearchOpen && (
        <div className="py-2 px-4 bg-gray-100 dark:bg-gray-400">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full text-primary dark:text-white"
          />
        </div>
      )} */}
    </header>
  );
};

export default Header;
