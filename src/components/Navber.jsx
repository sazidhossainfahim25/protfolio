'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import MyLink from './MyLink';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
const navItems = [
  { path: '/', text: 'Home' },
  { path: '/projects', text: 'Projects' }, 
  { path: '/about', text: 'About' }, // '
  { path: '/contact', text: 'Contact' }, 
];

  return (
    <nav className="glass-navbar">
      <div className="flex justify-between items-center p-4 px-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          SH
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          {navItems.map((item) => (
            <li key={item.text}>
              <MyLink href={item.path}>{item.text}</MyLink>
            </li>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-2">
          {/* Theme Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-2xl text-amber-400 dark:text-blue-400 hover:scale-110 transition-transform cursor-pointer"
          >
            {theme === 'dark' ? <IoSunny /> : <IoMoon className="text-gray-700" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl p-2 transition-transform active:scale-90 text-gray-700 dark:text-gray-200 cursor-pointer"
          >
            {open ? <RxCross1 /> : <CgMenuLeft />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/30 dark:bg-black/40 backdrop-blur-xl border-r border-white/20 p-6 shadow-2xl">
          <ul className="flex flex-col items-center gap-6 font-medium">
            {navItems.map((item) => (
              <li key={item.text} onClick={() => setOpen(true)}>
                <MyLink
                  href={item.path}
                  className="text-lg text-gray-800 dark:text-gray-100 hover:text-blue-500"
                >
                  {item.text}
                </MyLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
