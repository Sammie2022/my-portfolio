import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-20 bg-gray-900">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6">
        Samuel Ng'ang'a
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mb-4">
        Web Developer building modern, responsive, and engaging web applications.
      </p>
      <p className="text-md text-gray-400 mb-8">
        Currently open to opportunities 🚀
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download="Samuel_Nganga_Resume.pdf"
          className="px-6 py-3 border border-blue-600 text-blue-400 font-medium rounded-lg hover:bg-blue-800 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
