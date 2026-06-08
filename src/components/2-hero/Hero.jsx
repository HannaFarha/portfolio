import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/Animation - 1708091221704.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="about">
      <section className="hero flex">
        
        {/* SECTION LEFT: TEXT & CARDS */}
        <div className="left-section">
          {/* Avatar */}
          <div className="avatar-wrapper">
            <motion.img
              src="./me.png"
              className="avatar"
              alt="Hanna Farha"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
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
            Performance &amp; Behavioral Marketer
          </motion.h1>

          {/* What I Do */}
          <div className="what-i-do">
            <motion.div
              className="wid-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h2>What I Do</h2>
              <p>
                My name is <strong>Hanna Farha</strong>.<br />
                I combine marketing, psychology, and technology to build systems 
                that drive performance and real business results.
              </p>
            </motion.div>

            {/* Skill Cards */}
            <div className="wid-cards">
              <motion.div className="wid-card" whileHover={{ y: -5 }}>
                <h3>Performance Marketing</h3>
                <p>
                  I plan, test, and optimize campaigns focused on ROI, ROAS, and 
                  measurable growth. My approach is fully data-driven.
                </p>
              </motion.div>

              <motion.div className="wid-card" whileHover={{ y: -5 }}>
                <h3>Behavioral Psychology</h3>
                <p>
                  I analyze user behavior and decision-making patterns to design 
                  funnels that convert and engage.
                </p>
              </motion.div>

              <motion.div className="wid-card" whileHover={{ y: -5 }}>
                <h3>Technical Systems</h3>
                <p>
                  With a strong full-stack background, I build fast, scalable, and 
                  optimized systems that enhance user experience and performance.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Proof Bar */}
          <div className="proof-bar">
            <span>ROAS 25x</span>
            <span>Meta Experience</span>
            <span>IT Background</span>
          </div>

          {/* Social Icons */}
          <div className="all-icons flex">
            <a href="https://www.linkedin.com/in/hanna-farha/" target="_blank" rel="noopener noreferrer">
              <div className="icon icon-linkedin"></div>
            </a>
            <a href="https://github.com/HannaFarha" target="_blank" rel="noopener noreferrer">
              <div className="icon icon-github"></div>
            </a>
            <a href="https://www.instagram.com/hannaa_farha/" target="_blank" rel="noopener noreferrer">
              <div className="icon icon-instagram"></div>
            </a>
          </div>
        </div>

        {/* SECTION RIGHT: RESPONSIVE MEDIA (VIDEO & LOTTIE) */}
        <div className="right-section media-right-container">
          
          {/* كرت الفيديو الإحترافي المتطابق */}
          <motion.div 
            className="hero-video-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="video-responsive-wrapper">
              <iframe 
                src="https://drive.google.com/file/d/1NyHjHhM5qMQC3WiUjl9ualvzO5bQDWPP/preview" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
                title="Hanna Farha Video CV"
                className="portfolio-hero-iframe"
              ></iframe>
            </div>
            
            {/* أزرار التحكم والوصول للسيرة الذاتية الورقية والفيديو */}
            <div className="video-card-footer flex">
              <span className="video-tag-text">▶ Video CV</span>
              <a 
                href="https://www.linkedin.com/in/hanna-farha/overlay/1774614575757/single-media-viewer/?profileId=ACoAADGIyjgBiQaCStBhRG9QBzyyPcTLDUXzX_s"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link-btn"
              >
                📄 Open Standard CV
              </a>
            </div>
          </motion.div>

          {/* أنيميشن اللوتات بدون الحواف الحمراء المخربة للمظهر */}
          <div className="animation-clean-wrapper">
            <Lottie
              lottieRef={lottieRef}
              onLoadedImages={() => {
                lottieRef.current.setSpeed(0.5);
              }}
              animationData={devAnimation}
            />
          </div>

        </div>

      </section>
    </section>
  );
};

export default Hero;