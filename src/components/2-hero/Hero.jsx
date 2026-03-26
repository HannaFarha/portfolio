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
          
        
        <section id="about" className="what-i-do">

{/* 🔥 Header */}
<motion.div
  className="wid-header"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <h2>What I Do</h2>
  <p>
    My name Hanna Farha.
    I combine marketing, psychology, and technology to build systems 
    that drive performance and real business results.
  </p>
</motion.div>

{/* 💎 Cards */}
<div className="wid-cards">

  {/* Card 1 */}
  <motion.div
    className="wid-card"
    whileHover={{ y: -8 }}
  >
    <h3>Performance Marketing</h3>
    <p>
      I plan, test, and optimize campaigns focused on ROI, ROAS, and 
      measurable growth. My approach is fully data-driven.
    </p>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    className="wid-card"
    whileHover={{ y: -8 }}
  >
    <h3>Behavioral Psychology</h3>
    <p>
      I analyze user behavior and decision-making patterns to design 
      funnels that convert and engage.
    </p>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    className="wid-card"
    whileHover={{ y: -8 }}
  >
    <h3>Technical Systems</h3>
    <p>
      With a strong full-stack background, I build fast, scalable, and 
      optimized systems that enhance user experience and performance.
    </p>
  </motion.div>

</div>
</section></motion.p>
<p>  </p>
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
