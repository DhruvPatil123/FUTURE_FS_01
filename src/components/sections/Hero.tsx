import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Github, Linkedin, Mail, Twitter, X } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6">
            Hi, I'm <br />
            <span className="gradient-text">Dhruv Patil.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
            I'm a B.Tech Artificial Intelligence student and Full Stack Developer specialized in building intelligent, secure, and high-performance applications with Agentic AI and RAG.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-bg-dark px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
            >
              View Work
            </motion.a>
            <div className="flex items-center gap-6 ml-4">
              <a href="https://github.com/DhruvPatil123" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/dhruv-patil-3816043b7" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/DhruvPatil_18" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Profile Card / Image Placeholder */}
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass p-2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="/src/assets/images/dhruv_profile_1779091535047.png" 
              alt="Dhruv Patil" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';
              }}
            />
            {/* Overlay Badges */}
            <div className="absolute top-6 left-6 glass px-4 py-2 rounded-lg text-sm font-medium">
              B.Tech AI 3rd Year
            </div>
            <div className="absolute bottom-6 right-6 glass px-4 py-2 rounded-lg text-sm font-medium">
              Based in Nagpur, IN
            </div>
          </div>
          
          {/* Floating Skill Chips */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-4 -right-4 glass px-6 py-3 rounded-2xl flex items-center gap-2 shadow-2xl"
          >
            <span className="text-accent">🚀</span>
            <span className="font-medium">Web Specialist</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
