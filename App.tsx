import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Internships from './components/Internships';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background with retro filter */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('public/images/red.jpg')",
          filter: 'grayscale(80%) contrast(1.1) brightness(0.9)',
        }}
      ></div>
      {/* Content with overlay */}
      <div className="relative bg-black/50 min-h-screen">
        <Header />
        <main>
          <Hero />
          <div id="about">
            <About />
          </div>
          <div id="internships">
            <Internships />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;