'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { motion } from 'framer-motion';

import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const AboutPage = () => {
  return (
    <section id="about" className="py-10 lg:mt-16 mt-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[35px] p-5 lg:p-4 bg-white/1 dark:bg-white/1 shadow-xl"
      >
        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full"></div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-center mb-8"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="w-40 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-[35px] border border-amber-50/5 backdrop-blur-2xl p-8 text-center ">

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative w-[180px] h-[180px] mx-auto rounded-full overflow-hidden border-[6px] border-blue-100 dark:border-white/10 shadow-2xl"
              >
                <Image
                  src="/man-2.png"
                  fill
                  alt="Sazid Hossain"
                  priority
                  className="object-cover"
                />
              </motion.div>

              {/* Info */}
              <div className="mt-6 space-y-3">
                <h2 className="text-3xl font-bold">SAZID HOSSAIN</h2>

                <p className="text-blue-500 text-lg font-medium">Full Stack Developer</p>

                <p className="text-blue-500 dark:text-white-400">(Frontend Focused)</p>

              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Link
                  href="https://www.linkedin.com/in/sazid-hossain25/"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-100 dark:bg-white/20 hover:text-white transition-all duration-300"
                >
                  <FaLinkedinIn className="text-xl" />
                </Link>

                <Link
                  href="https://github.com/sazidhossainfahim25"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-100 dark:bg-white/10 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <AiFillGithub className="text-2xl" />
                </Link>

                <Link
                  href="mailto:sazidhossain25@gmail.com"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-100 dark:bg-white/10 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <IoMailOutline className="text-2xl" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl lg:text-xl font-samibold leading-snug">
              Building fast, beautiful & responsive frontend experiences.
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
              Hello! I'm Sazid Hossain. I'm a Frontend-Focused Full Stack Developer from Dhaka,
              Bangladesh. I love crafting clean, interactive, and visually stunning web interfaces
              that users enjoy.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
              My favorite stack includes Next.js, React, Tailwind CSS, and TypeScript — always
              focused on pixel-perfect design, smooth performance, and great user experience.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200/40 dark:border-blue-500/20"
            >
              <h4 className="font-bold mb-2 text-lg">Outside of Coding</h4>
              <p className="text-gray-700 dark:text-gray-300 text-[14px]">
                I enjoy cricket, tech gadgets, and exploring new ideas in the world of frontend
                development.
              </p>
            </motion.div>
            <p>Contact: sazidhossain25@gmail.com</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
