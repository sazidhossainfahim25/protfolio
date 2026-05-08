'use client';

import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  // অ্যানিমেশন ভ্যারিয়েন্টস
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-background">
      {/* Background Glows with Pulse Animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[140px] -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-teal/20 rounded-full blur-[140px] -z-10"
      />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Tag */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <p className="text-sm tracking-wider uppercase opacity-70 font-medium">
                Frontend Developer
              </p>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-foreground">
              Building
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-teal to-brand-blue bg-clip-text text-transparent">
                Modern Digital
              </span>
              <br />
              Experiences
            </h1>

            <p className="max-w-xl text-lg md:text-xl opacity-70 leading-relaxed mx-auto lg:mx-0">
              Hi, I’m{' '}
              <span className="font-semibold text-foreground underline decoration-brand-blue/50 underline-offset-4">
                Sazid Hossain
              </span>
              . I create premium frontend experiences with modern UI, animations, and
              high-performance web technologies.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-2xl bg-brand-blue text-white font-bold flex items-center gap-2 transition-shadow hover:shadow-2xl hover:shadow-brand-blue/30"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl font-bold flex items-center gap-2 transition-all"
            >
              Resume
              <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center lg:justify-start gap-5 pt-4"
          >
            <span className="text-sm uppercase tracking-[0.3em] opacity-40 font-bold">Follow</span>
            <div className="w-12 h-[1px] bg-foreground/20" />
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: '#' },
                { icon: <FaLinkedin />, link: '#' },
                { icon: <FaFacebook />, link: '#' },
              ].map((item, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }}>
                  <Link
                    href={item.link}
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl hover:text-brand-blue hover:border-brand-blue/50 transition-all shadow-lg"
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
            {/* Ambient Glow */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-brand-blue to-brand-teal opacity-20 blur-3xl animate-pulse" />

            {/* Rotating Border with Framer Motion */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-[3rem] border border-dashed border-white/20"
            />

            {/* Main Card with Hover Lift */}
            <motion.div
              whileHover={{ y: -10 }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/20 bg-white/[0.03] backdrop-blur-[40px] shadow-2xl z-10"
            >
              <Image
                src="/man.png" // আপনার ছবির পাথ ঠিক আছে কি না চেক করে নিন
                alt="Profile"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            {/* Floating Stats Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 px-6 py-4 rounded-3xl border border-white/20 bg-white/[0.08] backdrop-blur-3xl shadow-2xl z-20"
            >
              <p className="text-xs uppercase tracking-[0.3em] opacity-50 font-bold">Experience</p>
              <h3 className="text-3xl font-black mt-1 text-foreground">1+ Year</h3>
            </motion.div>

            {/* Extra Decorative Circle */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-brand-teal/10 rounded-full blur-xl -z-10"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;