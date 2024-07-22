import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="py-3 bg-white shadow-md h-[10vh] flex items-center sticky top-0 mb-5 z-10">
      <div className="w-11/12 mx-auto flex justify-between items-center px-5">
        <ul className="flex gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <img
          src="src\assets\aptech-logo.png"
          alt="Aptech Logo"
          className="w-36 absolute left-1/2 -translate-x-1/2"
        />
        <Button to="/contact" variant="primary">Enroll Now</Button>
      </div>
    </nav>
  );
};

export default Navbar;
