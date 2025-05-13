import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="bg-gradient-to-r from-primary to-accent text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio Builder</h1>
        <div className="flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/portfolio" className="hover:text-gray-300 transition">Portfolio</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
