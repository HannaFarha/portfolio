import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/Animation - 1708091221704.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
         Full Stack Developer 
        </motion.h1>

        <p className="sub-title">
          I’m Hanna Farha, Full Stack Developer -Javascript(ES6), React, NodeJS, MongoDB, Express, MYSQL, HTML & CSS.
        </p>

        <div className="all-icons flex">
        <a href="https://www.linkedin.com/in/hanna-farha/"><div  className="icon icon-linkedin"></div></a>
        <a href="https://github.com/HannaFarha"><div  className="icon icon-github"></div></a>
          <a href="https://www.instagram.com/hannaa_farha/"><div  className="icon icon-instagram"></div></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;