import React from 'react';
import { ArrowUp, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Creative Portfolio",
      description: "A modern, responsive multi-portfolio website showcasing 10 unique creative professional styles — from designers and artists to coaches and writers — built to inspire and engage with clean UI, smooth animations, and tailored layouts.",
      tech: ["React", "Typescript", "TailwindCSS",],
      image: "/assets/creative-portfolio.png",
      github: "https://github.com/techybilal/creative-portfolio",
      live: "https://creative-portfolio-tawny.vercel.app/",
      featured: true
    },
    {
      title: "StonksToken (STNK)",
      description: "StonksToken (STNK) is a futuristic, meme-fueled crypto parody web app built with React, Tailwind, and Web3.js — combining stonks culture with cutting-edge full-stack development.",
      tech: ["TypeScript", "React", "TailwindCSS", "Solidity", "Web3.js"],
      image: "/assets/stonkstoken.png",
      github: "https://github.com/techybilal/stonkstoken",
      live: "https://stonkstoken.vercel.app/",
      featured: true
    },
    {
      title: "Cloudryze",
      description: "Cloudryze is a modern file-sharing and cloud backup platform tailored for both individuals and businesses. Built using React.js and styled with Tailwind CSS, it offers a sleek, futuristic user interface. The project provides a responsive SaaS landing page, showcasing the platform's features and capabilities.",
      tech: ["React", "TypeScript", "TailwindCSS"],
      image: "/assets/cloudryze.png",
      github: "https://github.com/techybilal/cloudryze",
      live: "https://cloudryze.vercel.app/",
      featured: true
    },
    {
      title: "Movix",
      description: "Movix is a sleek, modern React-based Movie Database Website powered by The Movie Database API (TMDb). Discover trending movies, search your favorites, and dive deep into movie details — all in one place!",
      tech: ["React", "Javascript", "SCSS"],
      image: "/assets/movix.png",
      github: "https://github.com/techybilal/Movix",
      live: "https://movix-eta-lake.vercel.app/",
      featured: true
    },
    {
      title: "Fingerprint Attendence System",
      description: "The Smart Attendance System uses an ESP2822 microcontroller with a fingerprint sensor to capture and verify attendance in real-time. It displays data on a screen and hosts attendance records on a web server for remote access.",
      tech: ["ESP2822", "Xampp", "Fingerprint Module"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "ViralSnap – Shopify-Based Dropshipping Website",
      description: "I created viralsnap.in, a clean and responsive Shopify-based dropshipping website focused on viral and trending products for the Indian market. This project involved full store setup, design customization, branding, and marketing.",
      tech: ["Shopify"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      github: "#",
      live: "viralsnap.in",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-blue mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of AI, web technologies, and user experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-neon-blue/20 text-neon-cyan border border-neon-cyan/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition-colors duration-300 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-neon-purple hover:text-neon-cyan transition-colors duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gradient-cyan mb-4">Other Notable Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-300 p-6"
            >
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs text-gray-400">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="text-neon-blue hover:text-neon-cyan transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={project.live}
                  className="text-neon-purple hover:text-neon-cyan transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
