'use client';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'motion/react';
import { CalendarIcon, ClockIcon, CodeIcon, TrophyIcon, UsersIcon } from 'lucide-react';

const timelineEvents = [
  {
    date: 'Feb 25, 2026',
    time: '12:00 PM',
    title: 'Registrations Open',
    description:
      'Team registrations open for all colleges across India. IIIT Kottayam students register free; outside teams for ₹200.',
    icon: <UsersIcon className="size-5" />,
    status: 'upcoming' as const,
  },
  {
    date: 'Mar 15, 2026',
    time: '11:59 PM',
    title: 'Registration Deadline',
    description:
      'Last day to register your team. Ensure all team members are confirmed before the deadline.',
    icon: <ClockIcon className="size-5" />,
    status: 'upcoming' as const,
  },
  {
    date: 'Mar 21, 2026',
    time: '10:00 AM',
    title: 'Competitive Programming Round',
    description:
      'A single flagship Codeforces round blending speed, accuracy, and depth to decide the champions.',
    icon: <CodeIcon className="size-5" />,
    status: 'upcoming' as const,
  },
  {
    date: 'Mar 22, 2026',
    time: '5:00 PM',
    title: 'Prize Ceremony & Closing',
    description:
      'Winners announced, prizes distributed, and closing ceremony with sponsors and guests.',
    icon: <CalendarIcon className="size-5" />,
    status: 'upcoming' as const,
  },
];

export default function FeaturesSection() {
  return (
    <div id="timeline" className="py-16 px-4 md:px-16 lg:px-24 xl:px-32 relative">
      <div className="absolute top-1/3 right-0 size-80 bg-pink-600/10 rounded-full blur-[200px] pointer-events-none" />

      <SectionTitle
        text1="Event"
        text2="Contest Timeline"
        text3="Key dates for K³ (Kottayam Koding Kontest)  from registration to the single flagship round."
      />

      <div className="max-w-3xl mx-auto mt-16 space-y-0">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="relative flex gap-5 md:gap-8 pb-10 last:pb-0 group"
            initial={{ y: 100, opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              type: 'spring',
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            {/* Timeline connector */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center size-11 rounded-xl border border-pink-800/60 bg-pink-950/60 text-pink-400 shrink-0 group-hover:border-pink-600 group-hover:bg-pink-950 transition-all duration-300">
                {event.icon}
              </div>
              {index < timelineEvents.length - 1 && (
                <div className="w-px flex-1 bg-linear-to-b from-pink-700/50 to-pink-900/10 mt-2" />
              )}
            </div>

            {/* Content card */}
            <div className="flex-1 pb-2">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span
                  className="rounded-full p-[1px] inline-block"
                  style={{
                    background:
                      'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)',
                  }}
                >
                  <span className="text-xs font-medium text-white/80 bg-black px-2.5 py-0.5 rounded-full block">
                    {event.date}
                  </span>
                </span>
                <span className="text-xs text-slate-500">{event.time}</span>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-pink-100 transition-colors">
                {event.title}
              </h3>
              <p className="text-slate-400 mt-1 leading-relaxed text-sm">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Registration info */}
      <motion.div
        className="max-w-3xl mx-auto mt-14 relative group"
        initial={{ y: 80, opacity: 0, filter: 'blur(6px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 280, damping: 70, mass: 1 }}
      >
        <div className="absolute -inset-px rounded-xl bg-linear-to-r from-pink-600/40 via-pink-800/20 to-pink-600/40 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-6 rounded-xl bg-slate-950/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-medium">Registration</p>
            <p className="text-sm text-slate-400 mt-1">
              IIIT Kottayam students <span className="text-pink-400">Free</span> &nbsp;|&nbsp;
              Outside teams <span className="text-pink-400">₹200/team</span>
            </p>
          </div>
          <a
            href="#contact"
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-full px-6 py-2.5 shrink-0 transition"
          >
            Register Now
          </a>
        </div>
      </motion.div>
    </div>
  );
}
