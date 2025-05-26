
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️", level: 75 },
        { name: "TypeScript", icon: "🔷", level: 75 },
        { name: "Tailwind CSS ", icon: "🧡", level: 75 },
        { name: "Next.js", icon: "▲", level: 50 },
        { name: "Vue.js", icon: "💚", level: 50 },
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: "🟢", level: 75 },
        { name: "Python", icon: "🐍", level: 80 },
        { name: "REST APIs", icon: "🌐", level: 65 },
                { name: "Serverless", icon: "⚡", level: 55 },
                        { name: "GraphQL", icon: "🔗", level: 50 },
      ]
    },
    {
      title: "AI & Data",
      skills: [
                { name: "Data Science", icon: "📊", level: 90 },
                        { name: "OpenAI API", icon: "🎯", level: 85 },
        { name: "AI/ML", icon: "🤖", level: 85 },
        { name: "TensorFlow", icon: "🧠", level: 60 },
        { name: "PyTorch", icon: "🔥", level: 60 },

      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
                { name: "MongoDB", icon: "🍃", level: 85 },
                        { name: "CI/CD", icon: "🚀", level: 75 },
                                { name: "AWS", icon: "☁️", level: 75 },
        { name: "Docker", icon: "🐳", level: 50 },
        { name: "Kubernetes", icon: "⚙️", level: 50 },

      ]
    },
    {
      title: "Emerging Tech",
      skills: [
        { name: "Blockchain", icon: "⛓️", level: 90 },
        { name: "Web3", icon: "🌍", level: 90 },
        { name: "IoT", icon: "📡", level: 65 },
        { name: "Quantum", icon: "⚛️", level: 65 },
                { name: "AR/VR", icon: "🥽", level: 40 },
      ]
    },
    {
      title: "Database & Storage",
      skills: [



        { name: "Firebase", icon: "🔥", level: 82 },
        { name: "Supabase", icon: "⚡", level: 85 },
                { name: "ElasticSearch", icon: "🔍", level: 75 },
                        { name: "PostgreSQL", icon: "🐘", level: 60 },
                                { name: "Neo4j", icon: "🕸️", level: 10 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-transparent to-space-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-cyan mb-6">Tech Arsenal</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build tomorrow's solutions
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="text-gradient-blue">{category.title}</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-card group animate-slide-in-up"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.05)}s` }}
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-space-700 rounded-full h-1.5 mb-1">
                      <div
                        className="bg-gradient-to-r from-neon-blue to-neon-cyan h-1.5 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-neon-blue/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gradient-cyan mb-8">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Web Developer", org: "Anudip Foundation", year: "2024" },
              { title: "Certified Junior Security Practitioner", org: "Defronix", year: "2022" },
              { title: "Certified Ethical Hacker", org: "Metaxone", year: "2022" },
              { title: "IAM Cloud Security", org: "Great Learning", year: "2022" }
            ].map((cert, index) => (
              <div key={index} className="glass-card p-4 hover:scale-105 transition-all duration-300">
                <div className="text-neon-blue text-2xl mb-2">🏆</div>
                <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                <p className="text-gray-400 text-sm mb-1">{cert.org}</p>
                <p className="text-neon-cyan text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
