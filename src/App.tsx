import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen text-text bg-background">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Home />
        <About />
        <Music />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;