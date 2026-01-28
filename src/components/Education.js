import React from "react";

const education = [
  {
    degree: "Software Engineering – Frontend Development",
    institution: "ALX (Certificate)",
    year: "2023"
  },
  {
    degree: "Aeronautical Engineering – Avionics Option",
    institution: "Kenya Aeronautical College (Diploma)",
    year: "Pass"
  },
  {
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    institution: "Jamhuri High School",
    year: "B (Plain)"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 sm:px-12 md:px-20 bg-gray-900">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">Education</h2>
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="font-bold text-2xl text-white mb-1">{edu.degree}</h3>
            <p className="text-gray-300 mb-1">{edu.institution}</p>
            <p className="text-gray-400">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
