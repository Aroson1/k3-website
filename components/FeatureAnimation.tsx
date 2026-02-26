'use client';

import { motion } from 'framer-motion';
import { UsersIcon, TrophyIcon, SwordsIcon, CodeIcon } from 'lucide-react';

const stats = [
  {
    label: '160+ Teams',
    icon: 'https://framerusercontent.com/images/srMOjDrIT8CqbJX3NkLoWpOFJgg.png',
  },
  {
    label: '₹1.5L+ Prize Pool',
    icon: 'https://framerusercontent.com/images/6Tkstol08Sqrk7tHK9I5TV6R9E.png',
  },
  {
    label: '1 Flagship Round',
    icon: 'https://framerusercontent.com/images/vbJZq68zihPwJjuxXlu5QAjvfo.png',
  },
  {
    label: 'Hosted on Codeforces',
    icon: 'https://framerusercontent.com/images/acqyqyiqgIAcgJj2sSDTBJ7mxWI.png',
  },
];

export default function FeatureAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap items-center justify-center gap-3 mt-16 max-w-4xl mx-auto hoverable"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="rounded-2xl p-[1px] hoverable feature-chip"
          style={{
            background:
              'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)',
          }}
        >
          <div className="flex items-center gap-3 bg-black rounded-2xl px-5 py-3 hover:bg-white/[0.02] transition-colors cursor-default hoverable">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg text-pink-400 hoverable">
              {typeof stat.icon === 'string' ? (
                <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
              ) : (
                stat.icon
              )}
            </div>
            <span className="text-sm text-white/80 hoverable">{stat.label}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
