
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-space-900/80 backdrop-blur-md border-b border-white/10' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-xl font-bold text-gradient-blue">
            {'<BW />'}
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-neon-cyan'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          <button className="md:hidden">
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
              <div className="w-5 h-0.5 bg-neon-cyan rounded-full"></div>
              <div className="w-5 h-0.5 bg-neon-blue rounded-full"></div>
              <div className="w-5 h-0.5 bg-neon-purple rounded-full"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
