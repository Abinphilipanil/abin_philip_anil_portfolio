import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import { DATA } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-400 leading-relaxed">
              I'm always open to discussing new projects, research opportunities, or AI collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a href={`mailto:${DATA.email}`} className="flex items-center gap-4 p-4 glass-card group hover:text-cyan-400 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="font-medium">{DATA.email}</span>
              </a>
              <div className="flex gap-4">
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="p-4 glass-card group hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={DATA.github} target="_blank" rel="noreferrer" className="p-4 glass-card group hover:text-cyan-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-500 ml-1">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-500 ml-1">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-500 ml-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white" placeholder="Your message..."></textarea>
            </div>
            <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
