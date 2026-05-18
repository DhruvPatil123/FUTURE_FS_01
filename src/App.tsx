import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail, Search } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Analytics } from '@vercel/analytics/react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Components
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import AIAssistant from "./components/ai/AIAssistant";

export default function App() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Floating AI Action Button */}
      <motion.button
        id="ai-toggle-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-accent text-bg-dark p-4 rounded-full shadow-lg shadow-accent/20 flex items-center gap-2 font-medium"
      >
        <Search className="w-5 h-5" />
        <span className="hidden md:inline">Ask my Resume</span>
      </motion.button>

      {/* AI Assistant Overlay */}
      <AnimatePresence>
        {isAiOpen && (
          <AIAssistant onClose={() => setIsAiOpen(false)} />
        )}
      </AnimatePresence>

      <Analytics />
    </div>
  );
}
