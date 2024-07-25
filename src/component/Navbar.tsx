import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-3 bg-white shadow-md h-[10vh] flex items-center sticky top-0 mb-5 z-10">
      <div className="w-11/12 mx-auto flex justify-between items-center px-5">
        <ul
          className={`md:flex gap-4 absolute md:static top-[10vh] left-0 w-full md:w-auto bg-white md:bg-transparent md:flex-row flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className="my-2 md:my-0">
            <NavLink
              to="/"
              className="hover:underline hover:underline-offset-4"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink to="/courses" onClick={toggleMenu}>
              Courses
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink to="/gallery" onClick={toggleMenu}>
              Gallery
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex justify-between items-center w-full md:w-auto">
          <img
            src="src/assets/aptech-logo.png"
            alt="Aptech Logo"
            className="w-36 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          />
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary">
            Enroll Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
