'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; 
import { Typewriter } from 'react-simple-typewriter';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoMailOutline } from 'react-icons/io5';
import { FiDownload } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className=" pt-24 ">
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative grid lg:grid-cols-3 grid-cols-1 gap-6 items-center rounded-[35px] p-8 dark:bg-white/1 shadow-xl"
        >
          {/* LEFT SIDE CONTENT */}
          <div className="relative z-10 col-span-2 p-4">
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 mb-8 bg-white/80 dark:bg-white/10 backdrop-blur-md text-blue-700 dark:text-blue-300 px-5 py-2 rounded-full w-fit border border-blue-200/50 dark:border-white/10 shadow-lg"
            >
              <GoDotFill className="text-green-500 animate-pulse" />
              <span className="text-sm font-medium tracking-wide">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Typing Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-2"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 to-indigo-500 bg-clip-text text-transparent">
                <Typewriter
                  words={['SAZID HOSSAIN', 'A NEXT.JS EXPERT', 'FONTEND DEVELOPER']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-[16px] lg:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mb-2"
            >
              I build premium modern web experiences with smooth animations, clean UI design, and
              high-performance frontend development.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 mb-10">
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-xl flex items-center gap-2"
                >
                  Hire Me
                  <HiArrowRight className="group-hover:translate-x-1 transition-all" />
                </motion.button>
              </Link>

              <Link href="/Resume.pdf" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-2xl border border-blue-500/40 bg-white/50 dark:bg-white/5 backdrop-blur-md text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
                >
                  <FiDownload /> Resume
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {[
                { label: 'Years Experience', value: '1+' },
                { label: 'Projects Completed', value: '10+' },
                { label: 'Client Satisfaction', value: '100%' },
              ].map((stat, i) => (
                <div key={i}>
                  <h2 className="text-3xl font-bold text-blue-500">{stat.value}</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE (Profile Card) */}
          <motion.div variants={fadeInUp} className="relative mx-auto w-full max-w-sm">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative text-center rounded-[35px]  bg-white/5 dark:bg-[#0f172a]/5  p-4 "
            >
              <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-[6px] border-blue-100 dark:border-white/10 mx-auto shadow-2xl mb-6">
                <Image src="/man-2.png" fill alt="Sazid" priority className="object-cover" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold uppercase tracking-tight">Sazid Hossain</h2>
                <p className="text-blue-500 font-medium">Full Stack Developer</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">sazidhossain25@gmail.com</p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4 mt-8">
                {[
                  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/sazid-hossain25/' },
                  { icon: <AiFillGithub />, href: 'https://github.com/sazidhossainfahim25' },
                  { icon: <IoMailOutline />, href: 'mailto:sazidhossain25@gmail.com' },
                ].map((social, i) => (
                  <Link key={i} href={social.href} target="_blank">
                    <motion.div
                      whileHover={{ scale: 1 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center bg-blue-800 dark:bg-white/10 hover:bg-blue-600 text-white  hover:text-white transition-all cursor-pointer"
                    >
                      {social.icon}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
