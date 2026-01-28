import React from "react";

// Projects — all linking to your GitHub profile
const projects = [
  {
    title: "Task Tracker",
    description:
      "Built a task tracker application with a focus on usability and performance. Implemented features for task creation, editing, and progress tracking. Optimized UI with responsive design for desktop and mobile devices.",
    tech: ["Ruby on Rails", "JavaScript", "HTML5", "CSS", "Responsive Design"],
    image: "/task-tracker.png",
    code: "https://github.com/Sammie2022"
  },
  {
    title: "Football Management System",
    description:
      "Frontend built with React & Tailwind CSS, backend with Flask. Managed teams, players, and matches efficiently.",
    tech: ["React", "Tailwind CSS", "Flask"],
    image: "/football-management.png",
    code: "https://github.com/Sammie2022"
  },
  {
    title: "School Management System",
    description:
      "Designed and implemented user-friendly dashboards and interfaces using React.js. Optimized performance and ensured mobile responsiveness.",
    tech: ["React.js", "Tailwind CSS"],
    image: "/school-management.mp4", // If you have a screenshot, replace with .png
    code: "https://github.com/Sammie2022"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12 md:px-20 bg-gray-900">
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
        Featured Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transform transition"
          >
            <img
              src={p.image}
              alt={`${p.title} Screenshot`}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <h3 className="text-2xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.description}</p>

            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-500 transition mb-4"
            >
              View Code
            </a>

            <div className="flex flex-wrap gap-2 mt-2">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm bg-blue-700 text-white px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
