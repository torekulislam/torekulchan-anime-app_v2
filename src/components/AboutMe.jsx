import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="min-h-screen flex items-center justify-start text-gray-400 px-6">
      <div className="max-w-3xl ">
        <h1 className="text-4xl font-bold mb-4"> Hi, I'm Torekul Islam</h1>
        <p className="text-lg mb-4">
          I'm a 19-year-old passionate{" "}
          <span className="font-semibold">Front-End Web Developer</span> from
          Bangladesh. I specialize in building responsive and interactive web
          applications using:
        </p>
        <ul className="text-md mb-6 list-disc list-inside">
          <li>HTML, CSS, JavaScript</li>
          <li>React JS, Redux Toolkit</li>
          <li>Tailwind CSS</li>
          <li>Appwrite (basic auth)</li>
        </ul>
        <p className="text-md mb-6">
          I love solving UI problems, creating beautiful interfaces, and
          continuously learning new web technologies. I'm currently working on
          personal projects to improve my skills and build a strong portfolio.
        </p>
        <p className="text-md mb-6">
          My goal is to become a professional full-stack developer and help
          people by providing top-notch web solutions.
        </p>
        <Link to={"https://www.fiverr.com/torekul_islam"}>
          <button className="bg-gray-900 text-cyan-400 px-6 py-2 rounded hover:bg-gray-700 transition">
            Let's Work Together
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
