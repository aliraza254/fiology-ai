'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Globe, ChevronDown, User } from 'lucide-react';

const navLinks = [
  { name: 'Models', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Data Hub', href: '#' },
  { name: 'API', href: '#' },
  { name: 'Pricing', href: '#' },
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-emerald-500">FIOLOGY AI</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors">
          <User size={16} />
          Sign In
        </button>
        
        <div className="h-4 w-[1px] bg-zinc-800 hidden md:block" />
        
        <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors">
          <Globe size={16} />
          EN
          <ChevronDown size={14} />
        </button>

        <button className="px-6 py-2 bg-emerald-500 text-black rounded-full text-sm font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          Launch App
        </button>
      </div>
    </motion.nav>
  );
}
