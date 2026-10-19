import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';
import { Award, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-slate-300 font-medium">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
