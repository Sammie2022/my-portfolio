import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-12 md:px-20 bg-gray-900"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
        About Me
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
        I am <strong>Samuel Ng'ang'a</strong>, a solution-oriented Web Developer 
        with expertise in building and maintaining web applications. I have over a decade of professional 
        experience, including software development, the casino industry, and aeronautical engineering.
      </p>
      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
        Skilled in front-end frameworks such as <strong>React</strong> and <strong>Angular</strong>, 
        and back-end development using <strong>Python (Flask)</strong> and <strong>Ruby on Rails</strong>. 
        I am proficient in <strong>HTML5</strong>, <strong>Tailwind CSS</strong>, and have strong experience 
        in <strong>UI/UX design</strong>, performance optimization, and technical documentation.
      </p>
      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
        Notably, I have extensive experience as a <strong>Casino Dealer</strong>, specializing in live table 
        games such as Roulette, Blackjack, Texas Hold'em Poker, Caribbean Stud Poker, Pontoon, and Baccarat, 
        where I developed excellent customer service, attention to detail, and risk assessment skills.
      </p>
      <p className="text-gray-300 leading-relaxed text-lg">
        I am passionate about building responsive, user-friendly applications, collaborating effectively 
        with teams, and delivering high-quality software solutions.
      </p>
    </section>
  );
};

export default About;
