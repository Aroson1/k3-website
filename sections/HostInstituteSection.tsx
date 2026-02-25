'use client';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'motion/react';
import { GlobeIcon, GraduationCapIcon, AwardIcon, RocketIcon, TrophyIcon } from 'lucide-react';

export default function HostInstituteSection() {
  return (
    <section id="institute" className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-1/4 -left-20 size-72 bg-pink-600/20 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 size-72 bg-purple-600/15 rounded-full blur-[200px] pointer-events-none" />

      <SectionTitle
        text1="Host"
        text2="IIIT Kottayam"
        text3="An Institute of National Importance  the home ground for K³."
      />

      {/* Bento grid */}
      <div className="max-w-6xl mx-auto mt-14 grid gap-4 md:gap-5 md:grid-cols-6 md:grid-rows-[auto_auto]">
        {/* Institute of National Importance   */}
        <motion.div
          className="group relative rounded-2xl overflow-hidden md:col-span-4"
          initial={{ y: 50, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        >
          <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-pink-600/30 via-purple-600/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-7 md:p-9 rounded-2xl bg-slate-950/80 ring-1 ring-white/6 backdrop-blur-sm h-full flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-linear-to-tr from-pink-600 to-purple-600 shadow-lg shadow-pink-900/20">
                <GraduationCapIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">
                  Institute of National Importance
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Established by Ministry of Education, Government of India
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed flex-1">
              Among the IIITs established under the administrative control of the Government of
              India and later declared as an &ldquo;Institution of National Importance&rdquo; by an
              Act of Parliament enacted in 2017. Students are admitted through the highly
              competitive JEE Main process.
            </p>
            <div className="flex items-center gap-6 mt-6 pt-5 border-t border-white/6">
              <div>
                <p className="text-2xl font-bold text-white">JEE</p>
                <p className="text-xs text-slate-500 mt-0.5">Admission Process</p>
              </div>
              <div className="w-px h-8 bg-white/6" />
              <div>
                <p className="text-2xl font-bold text-white">2015</p>
                <p className="text-xs text-slate-500 mt-0.5">Established</p>
              </div>
              <div className="w-px h-8 bg-white/6" />
              <div>
                <p className="text-2xl font-bold text-white">CSE</p>
                <p className="text-xs text-slate-500 mt-0.5">Core Focus</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/*  Top Technical Talent  */}
        <motion.div
          className="group relative rounded-2xl overflow-hidden md:col-span-2"
          initial={{ y: 50, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            delay: 0.06,
            type: 'spring',
            stiffness: 260,
            damping: 26,
          }}
        >
          <div className="absolute -inset-px rounded-2xl bg-linear-to-b from-slate-700/30 to-transparent group-hover:from-pink-700/30 transition-all duration-500" />
          <div className="relative p-7 rounded-2xl bg-slate-950/80 ring-1 ring-white/6 backdrop-blur-sm h-full flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-linear-to-tr from-pink-600 to-purple-600 shadow-lg shadow-pink-900/20 w-max">
                <RocketIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-4 text-white text-base font-semibold">Top Technical Talent</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Partnering with IIIT Kottayam means direct visibility among skilled, job-ready
                engineers.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Dev Tools', 'EdTech', 'Startups'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white/4 ring-1 ring-white/8 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coders' Club */}
        <motion.div
          className="group relative rounded-2xl overflow-hidden md:col-span-3"
          initial={{ y: 60, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            delay: 0.08,
            type: 'spring',
            stiffness: 260,
            damping: 24,
          }}
        >
          <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-pink-600/25 via-purple-700/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-7 md:p-8 rounded-2xl bg-slate-950/80 ring-1 ring-white/6 backdrop-blur-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-linear-to-tr from-pink-600 to-purple-600">
                <GlobeIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">Coders&apos; Club</h3>
                <p className="text-[11px] text-slate-500">Official CP Club of IIIT Kottayam</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed flex-1">
              Our members actively compete on Codeforces, CodeChef, and national-level programming
              contests building a culture of competitive excellence.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['CP & Algorithms', 'ICPC Contest Prep', 'Industry-Ready Solvers'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full p-px"
                  style={{
                    background:
                      'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)',
                  }}
                >
                  <span className="text-xs px-3 py-1 rounded-full bg-black block text-white/80">
                    {tag}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/*ICPC stat */}
        <motion.div
          className="group relative rounded-2xl overflow-hidden md:col-span-1"
          initial={{ y: 60, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            type: 'spring',
            stiffness: 260,
            damping: 26,
          }}
        >
          <div className="absolute -inset-px rounded-2xl bg-linear-to-b from-slate-700/30 to-transparent group-hover:from-pink-700/30 transition-all duration-500" />
          <div className="relative p-6 rounded-2xl bg-slate-950/80 ring-1 ring-white/6 h-full flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-xl bg-linear-to-tr from-pink-600 to-purple-600 mb-3">
              <AwardIcon className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-white">ICPC</p>
            <p className="text-xs text-slate-500 mt-1">Active Participants</p>
          </div>
        </motion.div>

        {/*CodeQuest Track Record */}
        <motion.div
          className="group relative rounded-2xl overflow-hidden md:col-span-2"
          initial={{ y: 60, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            delay: 0.12,
            type: 'spring',
            stiffness: 260,
            damping: 24,
          }}
        >
          <div className="absolute -inset-px rounded-2xl bg-linear-to-b from-pink-700/25 via-pink-900/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-7 rounded-2xl bg-slate-950/80 ring-1 ring-white/6 backdrop-blur-sm flex flex-col h-full">
            <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-widest">
              Track Record
            </span>
            <h3 className="mt-2 text-white text-lg font-semibold flex items-center gap-2">
              <TrophyIcon className="w-4 h-4 text-pink-400" />
              CodeQuest
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-1">
              CP contest at Apoorv IIIT Kottayam&apos;s annual techno-cultural fest.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-pink-500 shrink-0" />
                IIITs, NITs & colleges nationwide
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-pink-500 shrink-0" />
                IIIT Kottayam 1st place
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
