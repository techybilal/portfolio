
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-900 text-white">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            Built with ⚡ React, Tailwind CSS, and a passion for innovation
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 Bilalwaris. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
