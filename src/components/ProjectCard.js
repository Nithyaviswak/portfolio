import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImage = () => {
    setCurrentImg((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-rose-100 hover:shadow-xl transition-all duration-300 group">
      {/* Image Carousel */}
      <div className="relative h-48 bg-gray-200">
        <img 
          src={project.images[currentImg]} 
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover"
        />
        
        {project.images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-rose-900/80 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-rose-900/80 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          {project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-900">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-rose-50 text-rose-900 rounded-full text-xs font-bold border border-rose-100">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;