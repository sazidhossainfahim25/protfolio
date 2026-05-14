'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const education = [
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Mymensingh ideal college',
    duration: '2018 - 2022',
    description: 'Completed higher secondary education with a Humanities background  .',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Rowshan Ara Kader High School, Mymensingh ',
    duration: '2018',
    description: 'Completed Secondary School Certificate (SSC) with a Science background ',
  }
];

const experience = [
  {
    role: 'Frontend Developer',
    company: 'BackTheme (ThemeForest)',
    duration: 'Jan 2025 - Dec 2025',
    description:
      'Built responsive and interactive user interfaces using HTML, Tailwind CSS, JavaScript, and modern frontend development practices.',
  },
  
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

const EducationExperience = () => {
  return (
    <section id="education" className="relative py-20 overflow-hidden rounded-2xl">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/5 blur-[120px] rounded-full"></div>

      <div className="relative  p-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Education & <span className="text-blue-500">Experience</span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>

          <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and practical experience in building modern web applications.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              staggerChildren: 0.15,
            }}
          >
            {/* Title */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl">
                <FaGraduationCap />
              </div>

              <div>
                <h3 className="text-3xl font-bold">Education</h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm">Academic Background</p>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="relative border-l border-blue-500/20 ml-6 space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    x: 10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div className="absolute w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -left-[11px] top-1 shadow-[0_0_20px_rgba(59,130,246,0.7)]"></div>

                  {/* Card */}
                  <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
                      {edu.duration}
                    </span>

                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h4>

                    <p className="text-blue-500 font-medium mb-3">{edu.institution}</p>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              staggerChildren: 0.15,
            }}
          >
            {/* Title */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 text-2xl">
                <FaBriefcase />
              </div>

              <div>
                <h3 className="text-3xl font-bold">Experience</h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm">Professional Journey</p>
              </div>
            </motion.div>

            {/* Timeline */}
            {experience.length > 0 ? (
              <div className="relative border-l border-cyan-500/20 ml-6 space-y-10">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{
                      x: 10,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="relative pl-10"
                  >
                    {/* Dot */}
                    <div className="absolute w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full -left-[11px] top-1 shadow-[0_0_20px_rgba(34,211,238,0.7)]"></div>

                    {/* Card */}
                    <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-500 mb-3">
                        {exp.duration}
                      </span>

                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.role}
                      </h4>

                      <p className="text-cyan-500 font-medium mb-3">{exp.company}</p>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                variants={fadeUp}
                className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-8 text-center"
              >
                <p className="text-gray-500 italic">
                  Currently focusing on personal projects and skill development.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
