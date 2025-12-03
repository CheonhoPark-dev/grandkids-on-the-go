import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

const Program = () => {
  return (
    <section id="program" className="program-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">프로그램 안내</h2>
          <p className="section-subtitle">청년이 먼저 찾아가는 문화 활동</p>

          <div className="program-card">
            <div className="program-header">
              <h3>손주가 간다</h3>
              <span className="badge">모집중</span>
            </div>
            
            <p className="program-desc">
              청년 참여자가 직접 어르신 댁이나 마을 공간을 찾아가 놀아주는 프로그램입니다.<br />
              정서적 고립을 줄이고, 청년과 어르신이 서로의 일상을 이해하고 즐기는 경험을 만듭니다.
            </p>

            <div className="program-info-grid">
              <div className="info-item">
                <Calendar className="icon" />
                <div>
                  <h4>일정</h4>
                  <p>2025년 11월 29일 (토)<br />14:00 – 16:00</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="icon" />
                <div>
                  <h4>장소</h4>
                  <p>울산 남구 신정동 일대</p>
                </div>
              </div>
              <div className="info-item">
                <User className="icon" />
                <div>
                  <h4>대상/인원</h4>
                  <p>누구나 (청년 중심)<br />선착순 10명</p>
                </div>
              </div>
              <div className="info-item">
                <Clock className="icon" />
                <div>
                  <h4>참가비</h4>
                  <p>무료</p>
                </div>
              </div>
            </div>

            <div className="timetable">
              <h4>시간표</h4>
              <ul>
                <li>
                  <span className="time">14:00 – 14:20</span>
                  <span className="activity">사전 모임 및 체크인</span>
                </li>
                <li className="highlight-activity">
                  <span className="time">14:20 – 15:20</span>
                  <span className="activity">방문 활동 (사물놀이 🥁)</span>
                  <motion.span
                    animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: 'absolute', right: '10px', top: '5px', fontSize: '1.5rem' }}
                  >
                    🎵
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    style={{ position: 'absolute', right: '40px', top: '15px', fontSize: '1.2rem' }}
                  >
                    🎶
                  </motion.span>
                </li>
                <li>
                  <span className="time">15:20 – 15:40</span>
                  <span className="activity">활동 회고 및 기록</span>
                </li>
                <li>
                  <span className="time">15:40 – 16:00</span>
                  <span className="activity">다음 회차 공지 및 해산</span>
                </li>
              </ul>
            </div>
            
            <div className="notice-box">
              <p>※ 우천 시 실내 대체 프로그램으로 운영하며, 변경 사항은 참가자에게 전날 문자로 안내됩니다.</p>
              <p>※ 준비물: 편한 복장, 활동 가능 신발</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Program;
