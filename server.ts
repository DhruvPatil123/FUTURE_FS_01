import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;
const isProd = process.env.NODE_ENV === "production";

// Resume data for Gemini to reference
const RESUME_DATA = {
  name: "Dhruv Dinesh Patil",
  role: "B.Tech AI Student & Full Stack Developer",
  summary: "3rd-year B.Tech Artificial Intelligence student based in Nagpur, India. Passionate about building intelligent systems using RAG, Agentic AI, and Full Stack technologies. Experienced in cybersecurity, cryptography, and modern web frameworks.",
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "C#"],
    frontend: ["React.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", ".NET", "Advance Java", "JDBC"],
    database: ["PostgreSQL", "SQL", "Firebase", "Supabase"],
    ai: ["Agentic AI", "LLM", "RAG", "Deep Learning"],
    other: ["Cybersecurity", "Cryptography", "Git", "GitHub", "Vercel", "UI & UX", "Software Testing"]
  },
  experience: [
    {
      company: "EduSkill Foundation",
      role: "Gen AI & Deep Learning Virtual Intern",
      period: "10 Weeks",
      achievements: [
        "Focused on generative AI and large language models.",
        "Implemented deep learning concepts in NLP tasks."
      ]
    },
    {
      company: "IGTR Nagpur",
      role: "Python Intern",
      period: "1 Month",
      achievements: [
        "Developed automation scripts and worked with core Python libraries."
      ]
    },
    {
      company: "L&T EduTech",
      role: "Full Stack Flask Development Trainee",
      period: "Completed",
      achievements: [
        "Built and deployed web applications using Flask and relational databases."
      ]
    }
  ],
  education: [
    {
      institution: "B.Tech in Artificial Intelligence",
      degree: "3rd Year Student",
      period: "Current"
    },
    {
      institution: "NPTEL",
      degree: "Enhancing Soft Skills and Personality",
      period: "Certified"
    }
  ],
  projects: [
    {
      name: "Readme.ai",
      description: "An elite documentation engine designed to bridge the gap between raw source code and professional, high-impact project presentations.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "TypeScript"],
      github: "github.com/DhruvPatil123/Readme.AI"
    },
    {
      name: "TenderScan.ai",
      description: "An intelligent procurement solution that streamlines the analysis of complex tender documents.",
      tech: ["Node.js", "Express.js", "React.js", "Tailwind CSS", "TypeScript", "Firebase"],
      github: "github.com/DhruvPatil123/Readme.AI"
    },
    {
      name: "EncryptX",
      description: "A Java-based encryption and decryption tool with Supabase integration.",
      tech: ["Java", "Supabase", "Advance Java"],
      github: "github.com/DhruvPatil123/EncryptX-Encryption-Decryption-Tool"
    },
    {
      name: "AI Hallucination Detection",
      description: "A system to detect factually incorrect or inconsistent LLM outputs.",
      tech: ["HTML", "Tailwind", "JS", "PL/SQL", "TypeScript", "Supabase"]
    }
  ],
  contact: {
    email: "sujalpatil8657231278@gmail.com",
    github: "github.com/DhruvPatil123",
    linkedin: "linkedin.com/in/dhruv-patil-3816043b7",
    twitter: "x.com/DhruvPatil_18"
  }
};

async function startServer() {
  const app = express();
  app.use(express.json());

  // Gemini Setup
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Routes
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: `You are an AI assistant for ${RESUME_DATA.name}'s portfolio. 
            Here is ${RESUME_DATA.name}'s resume data: ${JSON.stringify(RESUME_DATA)}. 
            Your goal is to answer questions about ${RESUME_DATA.name}'s skills, experience, and projects in a professional, helpful tone.
            If the question is unrelated to ${RESUME_DATA.name} or his portfolio, politely steer the conversation back or decline to answer.
            Keep responses concise and engaging.` }]
          },
          ...history,
          { role: "user", parts: [{ text: message }] }
        ],
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to process message" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    console.log(`New contact message from ${name} (${email}): ${message}`);
    // In a real app, send an email or store in DB
    res.json({ success: true, message: "Message received! I'll get back to you soon." });
  });

  // Vite/Static Middleware
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
