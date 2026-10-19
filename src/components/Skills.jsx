import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';
import { Terminal, Cpu, Layers } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    { 
      title: "Languages", 
      icon: <Terminal className="w-5 h-5 text-cyan-400" />, 
      list: DATA.skills.languages 
    },
    { 
      title: "AI/ML & Vision", 
      icon: <Cpu className="w-5 h-5 text-indigo-400" />, 
      list: DATA.skills.aiMl 
    },
    { 
      title: "Frameworks & Tools", 
      icon: <Layers className="w-5 h-5 text-emerald-400" />, 
      list: DATA.skills.tools 
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                {group.icon}
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.list.map((skill, j) => (
                  <span key={j} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 hover:border-cyan-500/50 transition-colors">
                    {skill}
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

export default Skills;
