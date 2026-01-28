import React from "react";

const Navbar = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full top-0 bg-gray-900 shadow-md z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Samuel Ng'ang'a</h1>
        <ul className="hidden sm:flex space-x-6 text-gray-300 font-medium">
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="hover:text-blue-400 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "#skills")}
              className="hover:text-blue-400 transition"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              className="hover:text-blue-400 transition"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleScroll(e, "#experience")}
              className="hover:text-blue-400 transition"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
