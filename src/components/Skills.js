import React from 'react';
import { Code, Database, Brain, Globe } from 'lucide-react';

const Skills = ({ skills }) => {
  const icons = {
    "Languages": <Code size={20} />,
    "AI & ML": <Brain size={20} />,
    "GenAI & LLMs": <Database size={20} />,
    "Web & Tools": <Globe size={20} />
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Object.entries(skills).map(([category, items]) => (
        // GLASS CARD STYLE: bg-white/70
        <div key={category} className="p-6 bg-white/70 backdrop-blur-md rounded-xl border border-white/50 shadow-lg hover:-translate-y-1 transition-transform">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-white text-purple-600 shadow-sm">
            {icons[category]}
          </div>
          <h3 className="font-bold text-lg mb-3 text-gray-900">{category}</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            {items.map(s => <li key={s} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>{s}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;