'use client';
import SectionTitle from '@/components/SectionTitle';
import { MailIcon, PhoneIcon } from 'lucide-react';
import { motion } from 'motion/react';

const contacts = [
  {
    name: 'Vibhaas Srivastava',
    role: 'Lead Organizer',
    email: 'vibhaas23bcs37@iiitkottayam.ac.in',
    phone: '+91 8281497823',
    image: 'https://api.dicebear.com/9.x/notionists/svg?seed=Vibhaas',
  },
  {
    name: 'Devnarayan P S',
    role: 'Organizer',
    email: 'devnarayans24bcs0209@iiitkottayam.ac.in',
    phone: '+91 9567479064',
    image: 'https://api.dicebear.com/9.x/notionists/svg?seed=Devnarayan',
  },
  {
    name: 'Pranathi T R',
    role: 'Organizer',
    email: 'pranathir24bcs69@iiitkottayam.ac.in',
    phone: '+91 9986044961',
    image: 'https://api.dicebear.com/9.x/notionists/svg?seed=Pranathi',
  },
  {
    name: 'Sarah Mariam Sunil',
    role: 'Organizer',
    email: 'sarahsunil24bcs04@iiitkottayam.ac.in',
    phone: '+91 8921398452',
    image: 'https://api.dicebear.com/9.x/notionists/svg?seed=Sarah',
  },
];

export default function ContactSection() {
  return (
    <div id="contact" className="py-16 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 -left-20 size-72 bg-pink-600/20 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 size-72 bg-purple-600/15 rounded-full blur-[200px] pointer-events-none" />

      <SectionTitle
        text1="Contact"
        text2="Get in touch"
        text3="Have questions about participating or sponsoring K³? Reach out to any of our organizers."
      />

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {contacts.map((person, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-950/80 aspect-[3/4]"
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
            {/* Profile image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500"
              />
            </div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

            {/* Name & role */}
            <div className="absolute inset-x-0 bottom-0 p-4 z-10">
              <p className="font-semibold text-white text-base leading-tight">{person.name}</p>
              <div
                className="rounded-full p-[1px] w-max mt-1.5"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)',
                }}
              >
                <span className="text-[11px] text-white/80 bg-black/80 backdrop-blur-sm rounded-full px-2.5 py-0.5 block">
                  {person.role}
                </span>
              </div>
            </div>

            {/* Hover overlay with details */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-5 bg-slate-950/90 backdrop-blur-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
              {/* Small avatar */}
              <img
                src={person.image}
                alt={person.name}
                className="size-14 rounded-full border border-pink-900/40 object-cover mb-3"
              />
              <p className="font-semibold text-white text-center text-sm">{person.name}</p>
              <div
                className="rounded-full p-[1px] w-max mt-1"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)',
                }}
              >
                <span className="text-[10px] text-white/80 bg-black rounded-full px-2.5 py-0.5 block">
                  {person.role}
                </span>
              </div>

              {/* Contact links */}
              <div className="mt-4 w-full space-y-2">
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-pink-400 transition-colors"
                >
                  <div className="flex items-center justify-center size-7 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <MailIcon className="size-3" />
                  </div>
                  <span className="truncate">{person.email}</span>
                </a>
                <a
                  href={`tel:${person.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-pink-400 transition-colors"
                >
                  <div className="flex items-center justify-center size-7 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <PhoneIcon className="size-3" />
                  </div>
                  <span>{person.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
