import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/Animation - 1708091221704.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (<section id="about">
    <section className="hero flex">
      <div className="left-section">
        {/* Avatar */}
        <div className="avatar-wrapper">
  <motion.img
    src="./me.png"
    className="avatar"
    alt="Hanna Farha"
  />
  <div className="verified-badge">✔</div>
</div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Performance & Behavioral Marketer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="sub-title"
        >
          I’m Hanna Farha — I don’t just run ads. I build marketing systems that convert.
          <br /><br />
          With a strong full-stack background, I combine data, psychology, and technology 
          to turn user behavior into measurable results.
        </motion.p>

        {/* Proof Bar (خفيف واحترافي) */}
        <div className="proof-bar">
          <span>ROAS 25x</span>
          <span>Meta Experience</span>
          <span>IT Background</span>
        </div>

        {/* Social Icons */}
        <div className="all-icons flex">
          <a href="https://www.linkedin.com/in/hanna-farha/">
            <div className="icon icon-linkedin"></div>
          </a>
          <a href="https://github.com/HannaFarha">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.instagram.com/hannaa_farha/">
            <div className="icon icon-instagram"></div>
          </a>
        </div>
      </div>

      {/* Animation */}
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section></section>
  );
};

export default Hero;
