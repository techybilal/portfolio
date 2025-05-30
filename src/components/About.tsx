
import React from 'react';

const About = () => {
  const timeline = [
    {
      year: "2023 - 2025",
      title: "Web Developer",
      company: "Krishna Technologies",
      description: "Worked as a web developer, building and maintaining responsive websites and web applications for clients across various industries. Collaborated with designers and backend teams to create seamless user experiences, optimized site performance, and implemented secure, scalable features using modern technologies like HTML, CSS, JavaScript, React.js."
    },
    {
      year: "2025",
      title: "Full Stack Web Developer",
      company: "Freelance",
      description: "A full stack web developer, building custom web applications for clients across various industries. I specialize in using React.js, Node.js, Express, and MongoDB to deliver responsive, scalable, and secure solutions. From front-end design to back-end development and deployment, I handle projects end-to-end while ensuring clear communication, timely delivery, and high client satisfaction."
    }
  ];

  const interests = [
    { icon: "🤖", title: "AI Research", description: "Exploring new frontiers in machine learning" },
    { icon: "📚", title: "Open Source", description: "Contributing to developer communities" },
    { icon: "🏔️", title: "Adventure", description: "Hiking and exploring nature" },
    { icon: "🎮", title: "Game Development", description: "Building immersive experiences" },
    { icon: "📱", title: "Mobile Innovation", description: "Next-gen mobile applications" }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-slide-in-up">
            <h2 className="text-5xl font-bold text-gradient-blue mb-8">About Me</h2>
            
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over{' '}
                <span className="text-neon-cyan font-semibold">2 years</span> of experience 
                crafting digital experiences that push the boundaries of what's possible on the web.
              </p>
              
              <p>
                My journey began with a fascination for{' '}
                <span className="text-neon-blue font-semibold">artificial intelligence</span> and 
                evolved into a love for creating seamless, intuitive interfaces that solve real-world problems.
              </p>
              
              <p>
                Beyond coding, I’m deeply curious about a range of fields{' '}
                <span className="text-neon-purple font-semibold">from crypto mining, medical science, and spaceships to cybersecurity, ethical hacking, and cyber forensics</span>, 
                I also enjoy contributing to open-source projects and mentoring aspiring developers.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="glass-card p-4 text-center">
                <div className="text-3xl font-bold text-neon-cyan">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-3xl font-bold text-neon-blue">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-3xl font-bold text-neon-purple">100K+</div>
                <div className="text-gray-400">Lines of Code</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10"></div>
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Developer workspace"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                    <span className="font-mono text-neon-cyan">Currently learning: AI | WEB3</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse"></div>
                    <span className="font-mono text-neon-blue">Building: AI-powered dev tools</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
                    <span className="font-mono text-neon-purple">Location: Mumbai, IN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
{/*           <h3 className="text-3xl font-bold text-gradient-cyan mb-12 text-center">Professional Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-blue to-neon-purple"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                      <div className="text-neon-cyan font-mono text-sm mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <div className="text-neon-blue font-medium mb-3">{item.company}</div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-neon-cyan rounded-full border-4 border-space-900 relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Interests Section */}
        <div>
          <h3 className="text-3xl font-bold text-gradient-blue mb-12 text-center">Beyond Code</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                  {interest.title}
                </h4>
                <p className="text-gray-400 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
