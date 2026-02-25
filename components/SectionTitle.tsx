'use client';
import { SectionTitleProps } from '@/types';
import { motion } from 'motion/react';
import AnimatedText from './AnimatedText';

export default function SectionTitle({ text1, text2, text3 }: SectionTitleProps) {
  return (
    <>
      <motion.div
        className="w-max mx-auto rounded-full p-[1px]"
        style={{
          background:
            'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)',
        }}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-black/60 rounded-full px-6 py-1.5">
          <span className="text-xs uppercase tracking-widest font-medium text-white/80">
            {text1}
          </span>
        </div>
      </motion.div>
      <AnimatedText
        text={text2}
        as="h3"
        className="text-3xl font-semibold text-center mx-auto mt-4"
        delay={0.15}
        staggerDelay={0.06}
      />
      <motion.p
        className="text-slate-300 text-center mt-2 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {text3}
      </motion.p>
    </>
  );
}
