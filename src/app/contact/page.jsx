'use client';

import React from 'react';
import { IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const contactDetails = [
    {
      icon: <IoMailOutline />,
      title: 'Email Me',
      value: 'yourname@email.com',
      bg: 'bg-brand-blue/5',
      border: 'border-brand-blue/10',
      iconColor: 'text-brand-blue'
    },
    {
      icon: <IoLocationOutline />,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      bg: 'bg-brand-teal/5',
      border: 'border-brand-teal/10',
      iconColor: 'text-brand-teal'
    }
  ];

  const socials = [
    { icon: <FaGithub />, link: '#' },
    { icon: <FaLinkedin />, link: '#' },
    { icon: <FaFacebook />, link: '#' }
  ];

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 bg-background overflow-hidden">
      <div className="absolute top-[10%] -left-20 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-[10%] -right-20 w-96 h-96 bg-brand-teal/15 rounded-full blur-[140px] -z-10" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <p className="text-xs tracking-widest uppercase opacity-70 font-medium">Let's Collaborate</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-foreground">
            Get In <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="opacity-70 max-w-xl mx-auto text-lg leading-relaxed">
            Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 items-start">
          <motion.div variants={fadeInUp} className="space-y-8 lg:sticky lg:top-32">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Contact Information</h2>
            
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`flex items-center gap-5 p-6 rounded-3xl ${detail.bg} border ${detail.border} backdrop-blur-sm transition-all duration-300`}
                >
                  <div className={`text-4xl ${detail.iconColor} p-3 rounded-2xl bg-white/5`}>
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">{detail.title}</h3>
                    <p className="text-lg opacity-70 font-medium">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-foreground/10">
              <h3 className="text-xl font-bold mb-5 text-foreground tracking-tight">Connect with me</h3>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:text-brand-blue hover:border-brand-blue/50 transition-all duration-300 text-2xl shadow-lg"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative"
          >
            <div className="absolute top-0 right-10 w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-teal rounded-b-full" />

            <form className="space-y-7">
              <div className="grid md:grid-cols-2 gap-7">
                <div className="space-y-2.5">
                  <label className="text-sm font-semibold opacity-90 tracking-wide">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all duration-300 text-lg"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-sm font-semibold opacity-90 tracking-wide">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all duration-300 text-lg"
                  />
                </div>
              </div>
              <div className="space-y-2.5">
                <label className="text-sm font-semibold opacity-90 tracking-wide">Subject</label>
                <input
                  type="text"
                  placeholder="Job Opportunity"
                  className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all duration-300 text-lg"
                />
              </div>
              <div className="space-y-2.5">
                <label className="text-sm font-semibold opacity-90 tracking-wide">Your Message</label>
                <textarea
                  rows="6"
                  placeholder="Your message..."
                  className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all duration-300 resize-none text-lg"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-brand-blue text-white font-bold text-lg hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-3 group"
              >
                Send Message
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default ContactPage;