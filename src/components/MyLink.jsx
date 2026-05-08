'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyLink = ({ href, children, className = '' }) => {
  const pathname = usePathname();

  // Exact match logic jate '/' shudhu home-kei active kore
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative group font-semibold transition-all duration-300 px-2 py-1 
        ${isActive ? 'text-yellow-200 hover:text-blue-500 pointer-events-none' : 'text-white '} 
        ${className}`}
    >
      {children}

      {/* Bottom Border/Line */}
      <span
        className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300  
        ${isActive ? 'w-full  group-hover:w-full' : 'w-0 '}`}
      ></span>
    </Link>
  );
};

export default MyLink;
