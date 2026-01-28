import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-center">
      <p className="mb-6 text-lg font-medium text-white">Feel free to reach out</p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 text-blue-400 text-lg">
        <a href="mailto:samuelnganganganga25@gmail.com" className="hover:underline">
          Email
        </a>
        <a href="https://github.com/Sammie2022" target="_blank" rel="noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/samuel-ng-ang-a-4a3374150" target="_blank" rel="noreferrer" className="hover:underline">
          LinkedIn
        </a>
      </div>
      <p className="mt-8 text-sm text-gray-400">© {new Date().getFullYear()} Samuel Ng'ang'a</p>
    </footer>
  );
};

export default Footer;
