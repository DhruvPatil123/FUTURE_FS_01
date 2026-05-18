import { motion } from "motion/react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Readme.ai",
    description: "An elite documentation engine designed to bridge the gap between raw source code and professional, high-impact project presentations.",
    tech: ["React.js", "Tailwind", "Node.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/DhruvPatil123/Readme.AI",
    github: "https://github.com/DhruvPatil123/Readme.AI"
  },
  {
    title: "TenderScan.ai",
    description: "Intelligent procurement solution that streamlines the analysis of complex tender documents using AI-driven insights.",
    tech: ["Node.js", "Express", "React", "Firebase"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/DhruvPatil123/Readme.AI",
    github: "https://github.com/DhruvPatil123/Readme.AI"
  },
  {
    title: "EncryptX",
    description: "A Java-based encryption and decryption tool providing secure data handling with Supabase integration.",
    tech: ["Java", "Supabase", "Advance Java"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/DhruvPatil123/EncryptX-Encryption-Decryption-Tool",
    github: "https://github.com/DhruvPatil123/EncryptX-Encryption-Decryption-Tool"
  },
  {
    title: "AI Hallucination Detection",
    description: "Specialized system designed to identify and flag factual inconsistencies in Large Language Model outputs.",
    tech: ["TypeScript", "Tailwind", "Supabase", "PL/SQL"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    title: "Jarvis Desktop AI",
    description: "A Python-powered personal desktop assistant featuring voice recognition and automated productivity tools.",
    tech: ["Python", "Node.js", "HTML", "JS"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-slate-400 max-w-lg">
              A collection of projects where I've combined technical precision with user-centric design.
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
            See All Projects <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl glass border-white/5 border flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-accent py-0.5 px-2 bg-accent/10 border border-accent/20 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
