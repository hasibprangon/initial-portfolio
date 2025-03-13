import React from "react";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <section id="home" className="bg-gray-800 text-white py-10 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left p-10 space-y-6 md:space-y-0">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Hey There! <span className="wave">👋</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
              I'M Md Hasibul Hossain
            </h2>
            <div className="mt-4">
              <span className="text-lg text-sky-500 sm:text-xl md:text-2xl font-semibold">
                <Typewriter
                  words={["I'm a Frontend Developer.", "React Developer."]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>
            <p className="mt-4 max-w-xl text-gray-100 text-sm sm:text-base md:text-lg">
              I am a quick learner which is my strength. Besides, I am always
              curious to explore new technologies, improving my interpersonal
              skills and my strategic thinking. This is my digital garden, where
              I write about the things I'm working on and share what I've
              learned.
            </p>
            <div className="flex space-x-6 justify-center md:justify-start mt-6">
              <a href="https://github.com/hasibprangon" className="text-2xl sm:text-3xl md:text-4xl hover:text-white">
                <FaGithub />
              </a>
              <a href="http://www.linkedin.com/in/md-hasibul-hossain-1510cr7" className="text-2xl sm:text-3xl md:text-4xl hover:text-white">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/hasibulhossain.prangon" className="text-2xl sm:text-3xl md:text-4xl hover:text-white">
                <FaFacebook />
              </a>
              <a href="mailto:hasibulhossainp09@gmail.com" className="text-2xl sm:text-3xl md:text-4xl hover:text-white">
                <FaEnvelope />
              </a>
            </div>
            <div className="mt-6">
              <a
                className="bg-white text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-100 transition duration-300 cursor-pointer btn"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src="https://i.ibb.co.com/bjBWDwZH/my-img-1.jpg"
              alt="Developer Image"
              className="w-48 sm:w-56 md:w-64 lg:w-72 h-96 rounded-full border-4 border-purple-300 shadow-lg"
            />
          </div>
        </div>
      </section>
      <section id="about" className="mt-10">
        <About />
      </section>
      <section id="skills" className="mt-10">
        <Skills />
      </section>
      <section id="projects" className="mt-10">
        <Projects />
      </section>
      <section id="contact" className="mt-10">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
