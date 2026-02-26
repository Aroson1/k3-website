'use client';
import SectionTitle from '@/components/SectionTitle';
import FeatureAnimation from '@/components/FeatureAnimation';
import ClientLogos from '@/components/SposonsLogos';
import { motion } from 'motion/react';
import { CodeIcon, SwordsIcon, SearchIcon } from 'lucide-react';

export default function AboutSection() {
  return (
    <div id="about" className="pb-16 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
      {/* Sponsors Logos */}
      <ClientLogos />
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 -left-20 size-72 bg-pink-600/20 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 size-72 bg-purple-600/15 rounded-full blur-[200px] pointer-events-none" />

      <SectionTitle
        text1="About"
        text2="What is K³?"
        text3="K³ (Kottayam Koding Kontest) is an offline national-level competitive programming contest designed to identify and reward top algorithmic talent."
      />

      {/* Expanded description */}
      <motion.div
        className="max-w-3xl mx-auto mt-3 space-y-4 text-center"
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-slate-400 leading-relaxed text-sm">
          Unlike traditional online contests, K³ (Kottayam Koding Kontest) is an on-campus,
          face-to-face battle of speed, logic, and algorithmic thinking. One decisive competitive
          programming round tests not just coding skill, but also debugging instinct and
          problem-solving poise in a live environment.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Hosted on <span className="text-white font-medium">Codeforces</span> and scheduled for{' '}
          <span className="text-white font-medium">March 21–22, 2026</span>, K³ brings together{' '}
          <span className="text-white font-medium">160+ teams</span> 40 from IIIT Kottayam and 120+
          from colleges across India competing for a prize pool of{' '}
          <span className="text-white font-medium">₹1.5+ lakh</span>.
        </p>
      </motion.div>

      {/* Stats */}
      <FeatureAnimation />
    </div>
  );
}
