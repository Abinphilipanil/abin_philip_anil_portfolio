import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      
      <footer className="py-10 text-center text-slate-600 border-t border-slate-900">
        <p>© {new Date().getFullYear()} Abin Philip Anil. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
