import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderCode } from 'lucide-react';
import { DATA } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {DATA.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <FolderCode className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
