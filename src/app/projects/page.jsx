import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  // প্রজেক্টের ডাটা (আপনি এখানে আপনার প্রজেক্টের তথ্য বসাবেন)
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment gateway integration and admin dashboard.',
      tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
      github: '#',
      demo: '#',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application featuring AI response generation using OpenAI API.',
      tags: ['React', 'Node.js', 'Socket.io', 'OpenAI'],
      github: '#',
      demo: '#',
      image:
        'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A clean and minimal portfolio template designed for creative developers.',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      github: '#',
      demo: '#',
      image:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* হেডার সেকশন */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-brand-blue">Projects</span>
          </h1>
          <p className="opacity-70 max-w-2xl text-lg">
            I love building things. Here are some of my favorite projects I've worked on recently.
          </p>
        </div>

        {/* প্রজেক্ট গ্রিড */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl overflow-hidden bg-foreground/5 border border-foreground/10 hover:border-brand-blue/50 transition-all duration-300"
            >
              {/* প্রজেক্ট ইমেজ */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              {/* কন্টেন্ট */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm opacity-70 mb-4 line-clamp-2">{project.description}</p>

                {/* ট্যাগস */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
