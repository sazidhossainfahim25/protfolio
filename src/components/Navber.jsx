'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { CgMenuLeft } from 'react-icons/cg';
import { IoSunny } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import MyLink from './MyLink';
import { FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/projects', text: 'Projects' },
    { path: '/skills', text: 'Skills' },
    { path: '/contact', text: 'Contact' },
  ];

  return (
    <header>
      <nav className="glass-navbar bg-gray-600/10">
        <div className="flex justify-between items-center p-4 px-6">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent  dark:bg-amber-50 bg-blue-950">
            SH
          </h1>

          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.text}>
                <MyLink href={item.path}>{item.text}</MyLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-2xl text-gray-500 dark:text-blue-400 cursor-pointer transition-transform hover:scale-110"
            >
              {theme === 'dark' ? <IoSunny /> : <FiMoon />}
            </button>
            <button onClick={() => setOpen(true)} className="md:hidden text-2xl cursor-pointer">
              <CgMenuLeft />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Side Bar */}
      <div className={`mobile-menu ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <button onClick={() => setOpen(false)} className="text-xl mb-10">
            <RxCross1 />
          </button>
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.text} onClick={() => setOpen(false)}>
                <MyLink href={item.path} className="text-xl">
                  {item.text}
                </MyLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] md:hidden"
        />
      )}
    </header>
  );
}
