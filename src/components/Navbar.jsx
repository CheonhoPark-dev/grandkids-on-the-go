import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css'; // We'll put specific styles here or in index.css

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: '단체 소개', id: 'about' },
    { name: '프로그램', id: 'program' },
    { name: '활동 사진', id: 'gallery' },
    { name: '신청/문의', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          손주가 간다
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => scrollToSection(link.id)}>
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.name} onClick={() => scrollToSection(link.id)}>
                  {link.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
