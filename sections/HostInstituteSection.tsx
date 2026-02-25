'use client'
import SectionTitle from "@/components/SectionTitle";
import { motion } from "motion/react";
import { GlobeIcon, GraduationCapIcon, AwardIcon, RocketIcon, TrophyIcon } from "lucide-react";

export default function HostInstituteSection() {
  const highlights = [
    {
      icon: <GraduationCapIcon className="w-6 h-6" aria-hidden />,
      title: "Institute of National Importance",
      description:
        "Among the IIITs established under the administrative control of the Government of India and later declared as an “Institution of National Importance” by an Act of Parliament enacted in 2017.",
    },
    {
      icon: <AwardIcon className="w-6 h-6" aria-hidden />,
      title: "Competitive Programmers & ICPC Participants",
      description:
        "A campus home to active Codeforces competitors, ICPC participants, hackathon winners and future software engineers.",
    },
    {
      icon: <RocketIcon className="w-6 h-6" aria-hidden />,
      title: "Top Technical Talent",
      description:
        "Partnering with IIIT Kottayam means direct visibility among skilled, job-ready engineers and top technical talent.",
    },
  ];

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
      <div className="max-w-6xl mx-auto mt-12 grid gap-6 md:grid-cols-3">
        {highlights.map((item, i) => (
          <motion.article
            key={i}
            className="group relative rounded-2xl overflow-hidden"
            initial={{ y: 50, opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 26 }}
          >
            {/* subtle border + glass card */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/40 ring-1 ring-slate-800/60" />
            <div className="relative p-6 md:p-7 rounded-2xl backdrop-blur-sm bg-slate-900/70 hover:translate-y-[-4px] transform transition-all duration-300 flex flex-col h-full">
              <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-tr from-pink-600 to-purple-600 shadow-[0_6px_18px_rgba(99,102,241,0.06)] w-max">
                <span className="text-white">{item.icon}</span>
              </div>

              <h3 className="mt-4 text-white text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed flex-1">{item.description}</p>

              <div className="mt-4">
                <span className="inline-block text-xs font-medium text-pink-300 uppercase tracking-wide">
                  {i === 0 ? "Trusted" : i === 1 ? "Community" : "Talent"}
                </span>
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
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-700/20 via-purple-700/10 to-transparent -z-10" />
          <div className="relative p-6 md:p-8 rounded-2xl bg-slate-900/70 ring-1 ring-slate-800/60 backdrop-blur-sm flex flex-col h-full">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-tr from-pink-600 to-purple-600">
                <GlobeIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold">Coders' Club</h3>
            </div>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              The official competitive programming club of IIIT Kottayam. Our members actively compete on Codeforces, CodeChef,
              and national-level contests.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {["CP & Algorithms", "ICPC Contest Prep", "Industry-Ready Solvers"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-slate-800/70 to-black/60 text-white/90 ring-1 ring-slate-700/40 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CodeQuest */}
        <motion.div
          className="relative rounded-2xl"
          initial={{ y: 60, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.06 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-700/12 via-pink-900/8 to-transparent -z-10" />
          <div className="relative p-6 md:p-8 rounded-2xl bg-slate-900/70 ring-1 ring-slate-800/60 backdrop-blur-sm flex flex-col h-full">
            <span className="text-xs font-semibold text-pink-300 uppercase tracking-widest">Our Track Record</span>
            <h3 className="mt-2 text-white text-xl font-semibold">CodeQuest</h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-1">
              Online competitive programming contest organized as part of Apoorv — IIIT Kottayam&apos;s annual techno-cultural fest.
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
        </motion.div>
      </div>
    </section>
  );
}