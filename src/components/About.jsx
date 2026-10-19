import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';
import { Brain, Code, Cpu, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {DATA.about}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <p className="text-cyan-400 font-bold text-2xl">9.25</p>
                <p className="text-slate-500 text-sm uppercase tracking-wider">CGPA</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <p className="text-cyan-400 font-bold text-2xl">GATE</p>
                <p className="text-slate-500 text-sm uppercase tracking-wider">Qualified 2026</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Brain className="w-6 h-6 text-cyan-400" />, title: "AI/ML Research", desc: "Deep Learning & CV" },
              { icon: <Cpu className="w-6 h-6 text-indigo-400" />, title: "Robotics", desc: "ROS 2 Pipelines" },
              { icon: <Code className="w-6 h-6 text-emerald-400" />, title: "Software Eng", desc: "Full-stack AI Apps" },
              { icon: <Globe className="w-6 h-6 text-amber-400" />, title: "Cloud", desc: "Scalable Deployments" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 flex flex-col items-center text-center">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
