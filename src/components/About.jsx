import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "세대 연결",
      desc: "청년과 어르신의 정서적 거리를 줄입니다."
    },
    {
      icon: <Heart size={32} />,
      title: "마을 돌봄",
      desc: "일상 속 작은 실천으로 마을을 돕습니다."
    },
    {
      icon: <MapPin size={32} />,
      title: "지역 변화",
      desc: "울산 남구의 긍정적 변화를 만듭니다."
    }
  ];

  return (
    <section id="about" className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bg-decoration blob-1"></div>
      <div className="bg-decoration blob-2"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">단체 소개</h2>
          <p className="section-subtitle">손주가 간다는 이런 단체입니다</p>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>손주가 간다</strong>는 세대 간 연결을 통해 지역 공동체의 회복을 목표로 하는 청년 기반 단체입니다.
                우리는 ‘손주’ 세대가 먼저 움직여 어르신과 마을을 돕는 실천을 중심 가치로 삼습니다.
              </p>
              <p>
                일상 속 놀아주는 그리고 문화교류 프로그램을 통해 세대 간의 정서적 거리를 줄이고,
                지역의 문제를 현장에서 관찰하고 필요한 지원을 민첩하게 기획·실행합니다.
              </p>
              <p>
                모든 활동은 어렵지 않고 누구나 참여할 수 있도록 단순하고 따뜻한 구조로 설계하며,
                지역의 삶을 지키는 작은 움직임을 쌓아 울산 남구의 긍정적 변화를 만드는 것이 목표입니다.
              </p>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="history-timeline">
            <h3>활동 연혁</h3>
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="date">2025.07-08</span>
                  <h4>강의 및 연습 / 공연 기획 📝</h4>
                  <p>봉사 활동을 위한 사전 준비</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="date">2025.09-10</span>
                  <h4>손주가 간다 봉사 활동 🤝</h4>
                  <p>어르신들과 함께하는 따뜻한 시간</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="date">2025.11-</span>
                  <h4>행사 및 성과 공유회 🎉</h4>
                  <p>활동을 마무리하고 나누는 축제</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
