import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript (React, Angular)",
    "Python (Flask)",
    "Ruby on Rails",
    "HTML5 & Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
    "SQL",
    "Figma",
    "Responsive Design",
    "UI/UX Design",
    "Software Debugging"
  ];

  return (
    <section id="skills" className="py-20 px-6 sm:px-12 md:px-20 bg-gray-900">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white text-center">
        Skills
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg px-4 py-3 text-center hover:bg-blue-700 hover:text-white transition transform hover:scale-105"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
