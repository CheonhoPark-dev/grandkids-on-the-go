import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    '/images/activity_1.png',
    '/images/activity_2.png',
    '/images/activity_3.png'
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">활동 사진</h2>
          <p className="section-subtitle">함께 만들어가는 즐거운 순간들</p>

          <div className="gallery-grid">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: index % 2 === 0 ? 2 : -2,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
              >
                <img src={src} alt={`활동 사진 ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
