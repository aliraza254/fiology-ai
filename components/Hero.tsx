'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, MousePointer2, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { BackgroundSymbols } from './BackgroundSymbols';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <BackgroundSymbols />
      
      <Card className="relative z-10 max-w-7xl w-full bg-black/40 border-white/10 overflow-hidden backdrop-blur-sm">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
        />
        
        <div className="flex flex-col lg:flex-row h-full min-h-[600px]">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Next-Gen AI</span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded text-xs font-bold border border-emerald-500/20">INTELLIGENCE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Intelligence Beyond <br />
              <span className="text-emerald-500 text-3xl md:text-5xl lg:text-6xl">Human Limits</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
            >
              {[
                'Neural Processing',
                'Predictive Analytics',
                'Automated Insights',
                'Edge Computing'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-zinc-400 text-sm">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  {feature}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <button className="group relative px-8 py-4 bg-emerald-500 text-black rounded-full font-bold text-lg hover:bg-emerald-400 transition-all flex items-center gap-2 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Start Analyzing
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </button>
            </motion.div>
          </div>

          {/* Right content - Spline Scene */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-full">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* Social Links - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 left-10 flex items-center gap-4"
      >
        <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest">Follow us:</span>
        <div className="flex items-center gap-3">
          {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 right-10 flex items-center gap-3 text-zinc-500 text-xs uppercase tracking-widest font-medium"
      >
        <span>Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-emerald-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* Floating Cursor/Pointer Decoration */}
      <motion.div
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 pointer-events-none opacity-20"
      >
        <MousePointer2 size={24} className="text-emerald-500" />
      </motion.div>
    </section>
  );
}
