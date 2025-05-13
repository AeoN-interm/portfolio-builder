import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition duration-300"
    >
      <div
        className={`w-6 h-6 rounded-full transition-transform ${
          theme === "dark" ? "transform translate-x-6 bg-yellow-400" : "bg-blue-500"
        }`}
      ></div>
      <span className="ml-2 text-sm font-semibold">
        {theme === "dark" ? (
          <FaMoon className="text-yellow-400" />
        ) : (
          <FaSun className="text-blue-500" />
        )}
      </span>
    </button>
  );
}

export default ThemeSwitcher;
