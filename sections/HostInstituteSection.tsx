'use client';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'motion/react';
import { GlobeIcon, GraduationCapIcon, AwardIcon, RocketIcon, TrophyIcon } from 'lucide-react';

export default function HostInstituteSection() {
  const highlights = [
    {
      icon: <GraduationCapIcon className="w-6 h-6" aria-hidden />,
      title: 'Institute of National Importance',
      description:
        'Among the IIITs established under the administrative control of the Government of India and later declared as an “Institution of National Importance” by an Act of Parliament enacted in 2017.',
    },
    {
      icon: <AwardIcon className="w-6 h-6" aria-hidden />,
      title: 'Competitive Programmers & ICPC Participants',
      description:
        'A campus home to active Codeforces competitors, ICPC participants, hackathon winners and future software engineers.',
    },
    {
      icon: <RocketIcon className="w-6 h-6" aria-hidden />,
      title: 'Top Technical Talent',
      description:
        'Partnering with IIIT Kottayam means direct visibility among skilled, job-ready engineers and top technical talent.',
    },
  ];

  const chipGradient =
    'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)';

  return (
    <section id="institute" className="relative py-20 px-6 md:px-12 lg:px-24">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 w-72 h-72 rounded-full bg-pink-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 w-80 h-80 rounded-full bg-purple-600/12 blur-3xl" />

      <SectionTitle
        text1="Host"
        text2="IIIT Kottayam"
        text3="An Institute of National Importance — the home ground for K³."
      />

      {/* Highlights */}
      <div className="max-w-6xl mx-auto mt-12 grid gap-6 md:grid-cols-3 items-stretch">
        {highlights.map((item, i) => (
          <motion.article
            key={i}
            className="group relative rounded-2xl h-full"
            initial={{ y: 50, opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 260, damping: 26 }}
          >
            <div className="rounded-2xl p-[1px] h-full" style={{ background: chipGradient }}>
              <div className="relative p-6 md:p-7 rounded-2xl bg-black ring-1 ring-white/5 hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white/5 w-max">
                  <span className="text-white">{item.icon}</span>
                </div>

                <h3 className="mt-4 text-white text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-4">
                  <span
                    className="inline-block rounded-full p-[1px]"
                    style={{ background: chipGradient }}
                  >
                    <span className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-white/80">
                      {i === 0 ? 'Trusted' : i === 1 ? 'Community' : 'Talent'}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Coders' club & CodeQuest */}
      <div className="max-w-6xl mx-auto mt-14 grid gap-6 md:grid-cols-2">
        {/* Coders' Club */}
        <motion.div
          className="relative rounded-2xl"
          initial={{ y: 60, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        >
          <div className="rounded-2xl p-[1px]" style={{ background: chipGradient }}>
            <div className="relative p-6 md:p-8 rounded-2xl bg-black ring-1 ring-white/5 flex flex-col h-full">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-tr from-pink-600 to-purple-600">
                  <GlobeIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold">Coders' Club</h3>
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                The official competitive programming club of IIIT Kottayam. Our members actively
                compete on Codeforces, CodeChef, and national-level contests.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {['CP & Algorithms', 'ICPC Contest Prep', 'Industry-Ready Solvers'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full p-[1px]"
                    style={{ background: chipGradient }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white/85">
                      {tag}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CodeQuest */}
        <motion.div
          className="relative rounded-2xl"
          initial={{ y: 60, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.06 }}
        >
          <div className="rounded-2xl p-[1px]" style={{ background: chipGradient }}>
            <div className="relative p-6 md:p-8 rounded-2xl bg-black ring-1 ring-white/5 flex flex-col h-full">
              <span className="text-[11px] font-semibold text-white/80 uppercase tracking-widest">
                Our Track Record
              </span>
              <h3 className="mt-2 text-white text-xl font-semibold">CodeQuest</h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-1">
                Online competitive programming contest organized as part of Apoorv — IIIT
                Kottayam&apos;s annual techno-cultural fest.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                  <span>Participants from IIITs, NITs & colleges nationwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                  <span>IIIT Kottayam team secured 1st place</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
