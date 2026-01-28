import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 sm:px-12 md:px-20 bg-gray-900">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
        Contact
      </h2>
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 space-y-4">
        <p className="text-lg text-gray-200">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:samuelnganganganga25@gmail.com"
            className="text-blue-400 hover:underline"
          >
            samuelnganganganga25@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-200">
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+254726872136"
            className="text-blue-400 hover:underline"
          >
            +254726872136
          </a>
        </p>
        <p className="text-lg text-gray-200">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Sammie2022"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub Profile
          </a>
        </p>
        <p className="text-lg text-gray-200">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/samuel-ng-ang-a-4a3374150"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn Profile
          </a>
        </p>
        <p className="text-lg text-gray-200">
          <strong>Resume:</strong>{" "}
          <a
            href="/resume.pdf"
            download="Samuel_Nganga_Resume.pdf"
            className="inline-block px-5 py-2 mt-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-700 hover:text-white transition"
          >
            Download Resume
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
