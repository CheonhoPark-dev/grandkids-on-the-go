import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
