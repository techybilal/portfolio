
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Create a simple CV download link
    const link = document.createElement('a');
    link.href = 'assets/Bilalwaris_#Dev.pdf';
    link.download = 'Bilalwaris_#Dev.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-text-reveal">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient-blue">Bilalwaris</span>{' '}
            <span className="text-white">Shaikh</span>
          </h1>
          
          <div className="font-mono text-neon-cyan mb-8 text-lg md:text-xl animate-text-reveal" style={{ animationDelay: '0.3s' }}>
            {'<'}<span className="text-white">Full Stack AI-Native Developer</span>{' />'}
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-text-reveal" style={{ animationDelay: '0.6s' }}>
            Building the future with{' '}
            <span className="text-gradient-cyan">AI-powered solutions</span>, 
            sleek interfaces, and cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-text-reveal" style={{ animationDelay: '0.9s' }}>
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-neon text-white hover:text-neon-cyan"
            >
              View My Work
            </button>
            <button 
              onClick={downloadCV}
              className="px-8 py-4 rounded-xl font-medium border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('projects')}
      >
        <ChevronDown className="w-8 h-8 text-neon-blue" />
      </div>
    </section>
  );
};

export default Hero;
