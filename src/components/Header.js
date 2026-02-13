import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = ({ personalInfo }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. TOP NAV - Glassmorphism (Semi-transparent White) */}
      <div className="bg-white/30 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
         <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform cursor-pointer">
             RN
         </div>

          {/* Navigation - Dark Text */}
          <nav className="flex gap-2 md:gap-6">
            {['Skills', 'Projects', 'Education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-800 hover:text-purple-700 font-bold transition-colors text-sm md:text-base uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-purple-700 transition-colors">
              <Mail size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/nithyananda1311" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-black transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION - Transparent so background shows */}
      <header className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 font-medium">
            {personalInfo.title}
          </p>
          {/* Glass Card for the "About" text */}
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm max-w-2xl mx-auto border border-white/40">
            <p className="text-gray-800 leading-relaxed text-lg">
              {personalInfo.about}
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;