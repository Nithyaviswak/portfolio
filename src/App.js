import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Education from './components/Education';

// --- DATA ---
const personalInfo = {
  name: "Nithyanandachari",
  title: "AI Engineer | Agentic Workflows & Full Stack Developer",
  email: "nviswaks@gmail.com",
  linkedin: "https://www.linkedin.com/in/nithyananda1311",
  about: "Aspiring AI Engineer building autonomous agents and LLM-powered applications using Gemini API and LangChain. Passionate about solving complex problems with Python, Flask, and Generative AI."
};

const skills = {
  "Languages": ["Python", "JavaScript", "React.js", "HTML", "CSS"],
  "AI & ML": ["Supervised Learning", "Feature Engineering", "Scikit-learn", "Pandas", "NumPy", "Deep Learning"],
  "GenAI & LLMs": ["Prompt Engineering", "Gemini API", "LangChain", "Agentic AI", "RAG"],
  "Web & Tools": ["Flask", "Tailwind CSS", "Git/GitHub", "Firebase", "Render"]
};

const projects = [
  {
    title: "AI Storyteller",
    tech: ["Python", "Flask", "Gemini API"],
    description: "A generative AI application that creates immersive, branching stories. Features an intuitive UI for defining character personalities.",
    link: "https://story-teller-yu10.onrender.com",
    images: ["/images/storyteller-1.png", "/images/storyteller-2.png"]
  },
  {
    title: "AI Resume Analyzer",
    tech: ["React.js", "Tailwind", "Gemini API"],
    description: "AI scoring engine that analyzes resumes for ATS compliance with prompt-optimized LLM scoring.",
    link: "https://resume-analyzer-final.onrender.com",
    images: ["/images/resume-1.png", "/images/resume-2.png"]
  },
  {
    title: "Autonomous Research Agent",
    tech: ["Python", "LangChain", "Gemini API", "Streamlit"],
    description: "An autonomous AI agent executing multi-step research tasks with minimal human intervention.",
    link: "https://aiagent-p3pt9g6jw9mznwwqtqqvyx.streamlit.app/",
    images: ["/images/agent-1.png", "/images/agent-2.png"]
  },
  {
    title: "Heart Disease Classification",
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    description: "A predictive analysis tool using classification algorithms to assess heart disease risk based on clinical health parameters.",
    link: "https://heart-disease-classification-cptr.onrender.com/",
    images: ["/images/heart-1.png", "/images/heart-2.png"]
  }
];

const education = [
  {
    school: "Siddartha Institute of Science and Technology",
    degree: "B.Tech in AI & ML",
    year: "Expected 2026",
    details: "GPA: 8.44"
  },
  {
    school: "APMS & Junior College, Santhipuram",
    degree: "Intermediate (MPC)",
    year: "2022",
    details: "66.2%"
  },
  {
    school: "ZPHS Dandikuppam",
    degree: "Secondary School (SSC)",
    year: "2020",
    details: "98.0%"
  }
];

const certifications = [
  {
    name: "Generative AI",
    issuer: "LinkedIn Learning & Microsoft",
    year: "2025",
    link: "https://www.linkedin.com/learning/certificates/26f5bb87b70538bd92d947bfdcdd21129dd87501e70c92b74cf451651e6bad46" 
  },
  {
    name: "AI & ML",
    issuer: "Smart Bridge",
    year: "2025",
    link: "#" 
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    year: "2025",
    link: "https://courses.cognitiveclass.ai/certificates/6b819aa0818549f29f5a3f93840e3cf4" 
  }
];

function App() {
  return (
    // 1. GLOBAL VIBRANT BACKGROUND
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-400 to-cyan-400 font-sans text-gray-900 pb-20">
      
      {/* Header handles its own transparency */}
      <Header personalInfo={personalInfo} />
      
      {/* SKILLS SECTION */}
      <div id="skills" className="pt-12 max-w-6xl mx-auto px-4">
         {/* Glass container for Skills title */}
         <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-md">Technical Expertise</h2>
         <Skills skills={skills} />
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white drop-shadow-md">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <div id="education" className="max-w-6xl mx-auto px-4">
        {/* We wrap Education in a 'Glass' card so text is readable */}
        <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
           <Education education={education} certifications={certifications} />
        </div>
      </div>

      <footer className="text-white py-8 text-center mt-12 font-semibold drop-shadow-md">
        <p>© 2025 {personalInfo.name}. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}

export default App;