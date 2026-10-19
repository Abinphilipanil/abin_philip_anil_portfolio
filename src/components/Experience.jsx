import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import { DATA } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Professional Experience</h2>
        <div className="space-y-8">
          {DATA.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-slate-800 hover:border-cyan-500 transition-colors group"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors" />
              <div className="glass-card p-6">
                <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-cyan-400" /> {exp.role}
                    </h3>
                    <p className="text-cyan-500 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-800/50 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </div>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
