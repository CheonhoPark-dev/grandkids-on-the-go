import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
      <motion.div
        className="progress-character"
        style={{ 
          left: `calc(${progress * 100}% - 20px)`, // Adjust position based on scroll
          transform: `scaleX(${progress > 0.99 ? 1 : -1})` // Face right (-1) normally, turn back (1) at the end
        }}
      >
        🏃
      </motion.div>
    </>
  );
};

export default ScrollProgress;
