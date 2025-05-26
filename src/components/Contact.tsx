
import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Message sent successfully! I\'ll get back to you soon.');
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/techybilal', icon: Github, color: 'text-gray-300 hover:text-white' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/bilalwaris', icon: Linkedin, color: 'text-blue-400 hover:text-blue-300' },
    { name: 'Twitter', url: 'https://x.com/techybilal', icon: Twitter, color: 'text-sky-400 hover:text-sky-300' },
    { name: 'Email', url: 'mailto:techybilal@gmail.com', icon: Mail, color: 'text-neon-cyan hover:text-cyan-300' }
  ];

  const contactMethods = [
    {
      icon: MapPin,
      title: "Location",
      info: "Mumbai, IN",
      detail: "Available for remote work worldwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "Within 24 hours",
      detail: "Usually much faster during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      info: "techybilal@gmail.com",
      detail: "Best way to reach me for projects"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-t from-space-800/30 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-cyan mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's start a conversation about your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Collaborate</h3>
              <p className="text-gray-300 mb-6">
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to say hello, I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-neon-blue" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{method.title}</div>
                        <div className="text-neon-cyan font-mono text-sm">{method.info}</div>
                        <div className="text-gray-400 text-sm">{method.detail}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 glass-card flex items-center justify-center hover:scale-110 transition-all duration-300 group ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg. Response</span>
                  <span className="text-neon-cyan">2-4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Project Success</span>
                  <span className="text-neon-blue">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Client Satisfaction</span>
                  <span className="text-neon-purple">5/5 ⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
<div className="lg:col-span-2">
  <div className="glass-card p-8">
    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
    <form
      action="https://formspree.io/f/xpwdgjyp"
      method="POST"
      className="space-y-6"
    >
      {/* Anti-spam honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      {/* Optional redirect */}
      <input type="hidden" name="_redirect" value="https://yourwebsite.com/thank-you" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-space-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-space-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-white font-medium mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 bg-space-800/50 border border-white/10 rounded-xl text-white focus:border-neon-purple focus:outline-none transition-colors duration-300"
          required
        >
          <option value="">Select a subject</option>
          <option value="project">New Project</option>
          <option value="collaboration">Collaboration</option>
          <option value="consultation">Consultation</option>
          <option value="hiring">Job Opportunity</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full px-4 py-3 bg-space-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-neon-purple focus:outline-none transition-colors duration-300 resize-none"
          placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn-neon w-full text-white hover:text-neon-cyan flex items-center justify-center gap-2"
      >
        Send Message
        <Send className="w-4 h-4" />
      </button>
    </form>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
