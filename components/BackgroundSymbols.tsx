'use client';

import * as React from 'react';
import { motion } from 'motion/react';

const symbols = [
  { text: '(12+12)', top: '20%', left: '10%', size: 'text-xl' },
  { text: '17+6-4', top: '70%', left: '85%', size: 'text-2xl' },
  { text: '-15+6', top: '35%', left: '25%', size: 'text-lg' },
  { text: '24', top: '65%', left: '15%', size: 'text-3xl' },
  { text: '-8', top: '80%', left: '60%', size: 'text-xl' },
  { text: '5', top: '45%', left: '75%', size: 'text-4xl' },
  { text: '12', top: '15%', left: '90%', size: 'text-lg' },
  { text: '√', top: '10%', left: '40%', size: 'text-2xl' },
  { text: 'π', top: '85%', left: '30%', size: 'text-xl' },
];

export function BackgroundSymbols() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {symbols.map((symbol, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className={`absolute font-mono text-emerald-500/50 ${symbol.size}`}
          style={{ top: symbol.top, left: symbol.left }}
        >
          {symbol.text}
        </motion.div>
      ))}
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
    </div>
  );
}
