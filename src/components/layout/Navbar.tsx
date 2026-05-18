import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass border-b border-white/5 shadow-2xl" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-bg-dark">D</div>
          <span className="font-display font-bold text-xl tracking-tight uppercase">Dhruv.</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => document.getElementById('ai-toggle-btn')?.click()}
            className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:text-emerald-400 transition-colors"
          >
            <Bot className="w-4 h-4" /> Chat with Me
          </button>
          <button 
            onClick={() => document.getElementById('ai-toggle-btn')?.click()}
            className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10"
          >
            Hire Me
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
