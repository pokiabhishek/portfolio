import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Homeimg1 from "../assets/website.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "React Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const leftContentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section className="flex flex-col md:flex-row gap-7 min-h-screen items-center mt-6" id="Home">
        <motion.div
          variants={leftContentVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-white text-3xl md:text-4xl">
            It's <span className="text-violet-500">me</span>
            <span className="text-gray-400 text-[24px] md:text-[30px] mx-2 md:mx-3">
              {text}
            </span>
          </h1>
          <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-4xl md:text-5xl uppercase font-semibold">
            Abhishek Pokharkar
          </h1>
          <p className="text-sm md:text-[22px] tracking-wide text-gray-200 my-4 font-extralight leading-8">
            I’m a front-end developer who uses tools like React.js for dynamic
            interfaces and HTML, CSS, and JavaScript for smooth structure and
            styling. Let’s build something amazing together!
          </p>
          <div className="flex gap-5">
            <a
              href="#Contactus"
              className="text-black bg-gray-200 w-[35%] py-[15px] rounded-full font-semibold mt-3 flex items-center justify-evenly transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
              Contact me here!
              <FaArrowRight />
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-gray-800 text-white w-[35%] py-[15px] rounded-full font-semibold mt-3 flex items-center justify-evenly transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
              Download CV <FaDownload />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={rightImageVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end h-[80%] p-9"
        >
          <img src={Homeimg1} className="w-full h-full object-contain" alt="Home" />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
