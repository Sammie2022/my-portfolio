import React from "react";

const experiences = [
  {
    role: "Software Developer – Task Tracker Project",
    period: "2024",
    details: [
      "Built a task tracker application with a focus on usability and performance.",
      "Implemented features for task creation, editing, and progress tracking.",
      "Optimized UI with responsive design for desktop and mobile devices.",
      "Collaborated with others to ensure smooth functionality and responsiveness."
    ]
  },
  {
    role: "Freelance Software Developer – Football Management System",
    period: "January 2023 – March 2023",
    details: [
      "Built a football management system with React, Tailwind CSS, and Flask.",
      "Provided technical support, troubleshooting, and software optimization."
    ]
  },
  {
    role: "Lead Frontend Developer – School Management System",
    period: "2023",
    details: [
      "Designed and implemented a robust school management system.",
      "Developed user-friendly dashboards and interfaces with React.js.",
      "Optimized performance and ensured mobile responsiveness."
    ]
  },
  {
    role: "Casino Industry Experience",
    period: "Over a decade",
    details: [
      "Specialized in live table games including Roulette, Blackjack, Texas Hold'em, Caribbean Stud Poker, Pontoon, and Baccarat.",
      "Developed strong customer service, attention to detail, and risk assessment skills."
    ]
  },
  {
    role: "Aeronautical Engineering Role – Aircare Avionics",
    period: "Jan 2012 – May 2012",
    details: [
      "Worked on aircraft maintenance, system diagnostics, and engineering improvements.",
      "Ensured compliance with safety regulations and technical standards.",
      "Applied problem-solving and analytical skills in high-pressure environments."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 sm:px-12 md:px-20 bg-gray-900">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="font-bold text-2xl text-white mb-1">{exp.role}</h3>
            <p className="text-gray-400 mb-3">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
