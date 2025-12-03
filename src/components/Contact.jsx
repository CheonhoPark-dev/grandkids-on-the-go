import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">신청 및 문의</h2>
          <p className="section-subtitle">궁금한 점이 있으시면 언제든 연락주세요</p>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-card">
                <h3>문의처</h3>
                <div className="contact-item">
                  <Phone className="icon" />
                  <a href="tel:010-7325-3248">010-7325-3248</a>
                </div>
                <div className="contact-item">
                  <MessageCircle className="icon" />
                  <span>문자 / 카카오톡 가능</span>
                </div>
                <div className="contact-item">
                  <span>인스타그램: @son.ju_</span>
                </div>
              </div>


            </div>

            <div className="map-info">
              <h3>오시는 길</h3>
              <div className="map-placeholder">
                <MapPin size={48} className="map-icon" />
                <p>울산 남구 신정동</p>
                <p className="small">(정확한 주소는 참여 승인 후 문자 안내)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
