import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { DATA } from '../constants';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">{DATA.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 font-medium">
            {DATA.title}
          </p>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            {DATA.bio}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#projects" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-semibold transition-all flex items-center gap-2 group">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-all">
              Contact Me
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href={DATA.github} target="_blank" rel="noreferrer" className="p-3 glass-card text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="p-3 glass-card text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${DATA.email}`} className="p-3 glass-card text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
