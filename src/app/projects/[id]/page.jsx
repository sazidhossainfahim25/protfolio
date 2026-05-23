import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectDetails = ({ params }) => {
 
  const project = {
    name: 'E-Commerce Platform',
    image: '/project-img.jpg',
    description:
      'A full-featured e-commerce solution with cart functionality and payment integration.',
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase', 'Stripe'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/project',
    challenges:
      'Implementing real-time inventory updates and handling complex state management for the shopping cart was a major challenge.',
    futureImprovements:
      'Plan to integrate AI-based product recommendations and a multi-vendor dashboard in the future.',
  };

  return (
    <div className="  pt28 min-h-screen bg-white dark:bg-[#05051a]  mt-20 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Project Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          {project.name}
        </h1>

        {/* Project Image */}
        <div className="rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl border border-gray-200 dark:border-white/10">
          <img src={project.image} alt={project.name} className="w-full h-auto object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Side: Info */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Project Description
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-3">Challenges Faced</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-red-500 pl-4">
                {project.challenges}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-500 mb-3">Future Improvements</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.futureImprovements}
              </p>
            </section>
          </div>

          {/* Right Side: Links & Tech */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all"
              >
                Live Preview <FaExternalLinkAlt size={14} />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                className="flex items-center justify-center gap-2 py-3 bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-300 dark:hover:bg-white/20 transition-all"
              >
                Source Code <FaGithub size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
