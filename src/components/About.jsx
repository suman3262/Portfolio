import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        frontend developer currently pursuing a B.Tech in Information Technology. With a love for coding and a keen interest in learning new web technologies,expertise in frontend technologies, including HTML, CSS, and JavaScript,React JS,Redux Toolkit allows them to create responsive and dynamic websites & Web-app that provide an exceptional user experience.
        </p>

        <br />

        <p className="text-xl">
       With a strong passion for coding and a hunger for knowledge,  to any team and a valuable contributor to the web development community.
        </p>
      </div>
    </div>
  );
};

export default About;
