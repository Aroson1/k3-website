'use client';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-32 mt-40 mb-20">
      <motion.div
        className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl"
        initial={{ y: 150, opacity: 0, filter: 'blur(6px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 320, damping: 70, mass: 1 }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-pink-700 via-pink-900 to-pink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />

        {/* Content */}
        <div className="relative px-8 py-14 md:px-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
              initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
              whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                type: 'spring',
                stiffness: 280,
                damping: 70,
                mass: 1,
              }}
            >
              Ready to compete
              <br className="hidden md:block" /> at K³?
            </motion.h2>
            <motion.p
              className="text-pink-100/70 text-base md:text-lg mt-4 max-w-md"
              initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
              whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                type: 'spring',
                stiffness: 280,
                damping: 70,
                mass: 1,
              }}
            >
              Register your team now IIIT Kottayam students enter free, outside teams for just ₹200.
            </motion.p>
          </div>
          <motion.div
            className="shrink-0"
            initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              type: 'spring',
              stiffness: 280,
              damping: 70,
              mass: 1,
            }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-pink-50 text-pink-700 font-semibold rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg shadow-black/20"
            >
              Register Now
              <ArrowRightIcon className="size-4" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
