import { motion } from "motion/react";
import { Code2, Server, Layout, Database, Wrench } from "lucide-react";

const skills = [
  { icon: Layout, title: "Frontend", items: ["React.js", "TypeScript", "Tailwind", "Bootstrap", "HTML/CSS"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", ".NET", "Java", "Python", "C#", "C++"] },
  { icon: Database, title: "Database", items: ["PostgreSQL", "SQL", "Firebase", "Supabase", "JDBC"] },
  { icon: Wrench, title: "Core & AI", items: ["Agentic AI", "LLM", "RAG", "Cybersecurity", "GIS", "R"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Pioneering <span className="text-accent underline decoration-accent/20 underline-offset-8">AI-driven</span> solutions for the modern web.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I am a B.Tech Artificial Intelligence student based in Nagpur, India. My journey in tech is driven by a fascination with how intelligent agents can transform our digital landscape. I specialize in bridging the gap between sophisticated AI models and user-friendly full-stack applications.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              With hands-on experience in Cybersecurity and Cryptography, I ensure that the systems I build are not just smart, but also secure. My internship experiences at EduSkill Foundation and IGTR Nagpur have sharpened my ability to solve real-world problems using Python and deep learning.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a lifelong learner, currently exploring the cutting edges of RAG (Retrieval-Augmented Generation) and Agentic AI workflows.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass card-hover"
              >
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300 border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
