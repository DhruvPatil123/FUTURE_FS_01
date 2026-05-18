import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, Award, GraduationCap, X } from "lucide-react";

const experiences = [
  {
    company: "EduSkill Foundation",
    role: "Gen AI & Deep Learning Virtual Intern",
    period: "10 Weeks",
    description: "Intensive training on Generative AI and Large Language Models. Focused on implementing deep learning architectures for natural language processing and understanding transformers.",
    type: "Internship"
  },
  {
    company: "IGTR Nagpur",
    role: "Python Intern",
    period: "1 Month",
    description: "Acquired hands-on experience in Python programming and automation. Developed scripts for data processing and learned core software development principles.",
    type: "Internship"
  },
  {
    company: "L&T EduTech",
    role: "Full Stack Flask Development Trainee",
    period: "Completed",
    description: "Comprehensive training in building full-stack applications using Flask. Covered backend routing, database integration, and frontend templating.",
    type: "Training"
  }
];

const achievements = [
  {
    title: "Full-Stack Flask Development Mastery",
    issuer: "L&T EduTech",
    description: "Completed the Course pathway covering 5 courses and 27 learning hours.",
    icon: Award,
    image: "/src/assets/images/lt_flask_cert_1779091476476.png"
  },
  {
    title: "Gen AI & Deep Learning Virtual Internship",
    issuer: "EduSkills / AICTE",
    description: "Successfully completed a 10-week virtual internship in Generative AI, Deep Learning & Language Models (Jan-March 2026).",
    icon: Award,
    image: "/src/assets/images/eduskills_ai_cert_1779091498212.png"
  },
  {
    title: "Elite NPTEL Certification",
    issuer: "IIT Kanpur",
    description: "Earned Elite status in 'Enhancing Soft Skills and Personality' with a consolidated score of 66% (Feb-Apr 2026).",
    icon: Award,
    image: "/src/assets/images/nptel_softskills_cert_1779091454279.png"
  }
];

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Journey & <span className="text-accent">Experience</span></h2>
          <p className="text-slate-400 max-w-lg">
            My professional path and key milestones in technology and personal development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10 ml-4 pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-bg-dark ring-4 ring-accent/10" />
                
                <div className="glass p-6 rounded-2xl card-hover border border-white/5">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements & Certs */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" /> Highlights
            </h3>
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start relative group"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-xs text-accent mb-2 uppercase tracking-wider font-bold">{item.issuer}</p>
                  <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                  <button 
                    onClick={() => setSelectedCert(item.image)}
                    className="text-xs font-bold text-accent px-3 py-1.5 rounded-lg border border-accent/20 bg-accent/5 hover:bg-accent hover:text-bg-dark transition-all flex items-center gap-2"
                  >
                    View Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[60] bg-bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[1.414/1] bg-white rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-bg-dark/50 hover:bg-bg-dark rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedCert} 
                alt="Certificate" 
                className="w-full h-full object-contain"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/111/fff?text=Certificate+Image+Needed';
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
