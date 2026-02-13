import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Education = ({ education, certifications }) => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-rose-900">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-4 border-rose-200">
                  <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-rose-600 border-2 border-white"></div>
                  <h3 className="font-bold text-xl text-gray-900">{edu.school}</h3>
                  <p className="text-rose-700 font-semibold">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {edu.year} • <span className="font-bold text-gray-700">{edu.details}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-rose-900">Certifications</h2>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <a 
                  key={index} 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-rose-100 shadow-sm hover:shadow-md hover:border-rose-300 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-rose-50 text-rose-700 group-hover:bg-rose-700 group-hover:text-white transition-colors">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                      {cert.name}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 mt-1">{cert.year}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;