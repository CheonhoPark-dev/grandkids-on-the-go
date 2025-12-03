import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">손주가 간다</span>
          <h1 className="hero-title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('세대가 연결되면<br />마을이 자랍니다')
                  .start();
              }}
              options={{
                delay: 75,
                cursor: '|', // Optional: keep cursor or remove it
              }}
            />
          </h1>
          <p className="hero-subtitle">
            청년이 먼저 다가가 어르신과 함께 만드는<br />
            따뜻한 지역 공동체
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
            onClick={() => document.getElementById('program').scrollIntoView({ behavior: 'smooth' })}
          >
            프로그램 보기
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '30px', color: 'white', textAlign: 'center', width: '100%' }}
      >
        <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>Scroll Down</p>
        <div style={{ width: '2px', height: '20px', background: 'white', margin: '0 auto' }}></div>
      </motion.div>
    </section>
  );
};

export default Hero;
