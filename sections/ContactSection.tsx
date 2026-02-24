'use client'
import SectionTitle from "@/components/SectionTitle";
import { MailIcon, PhoneIcon } from "lucide-react";
import { motion } from "motion/react";

const contacts = [
    { name: "Vibhaas Srivastava", role: "Lead Organizer", email: "vibhaas23bcs37@iiitkottayam.ac.in", phone: "+91 8281497823" },
    { name: "Devnarayan P S", role: "Organizer", email: "devnarayans24bcs0209@iiitkottayam.ac.in", phone: "+91 9567479064" },
    { name: "Pranathi T R", role: "Organizer", email: "pranathir24bcs69@iiitkottayam.ac.in", phone: "+91 9986044961" },
    { name: "Sarah Mariam Sunil", role: "Organizer", email: "sarahsunil24bcs04@iiitkottayam.ac.in", phone: "+91 8921398452" },
];

export default function ContactSection() {
    return (
        <div id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Contact" text2="Get in touch" text3="Have questions about participating or sponsoring K³? Reach out to any of our organizers." />

            <div className="max-w-4xl mx-auto mt-16 grid sm:grid-cols-2 gap-5">
                {contacts.map((person, index) => (
                    <motion.div key={index}
                        className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50 p-6 group hover:border-pink-900/60 transition-colors duration-300"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Subtle glow on hover */}
                        <div className="absolute -top-12 -right-12 size-24 bg-pink-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative">
                            {/* Name & Role */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center size-10 rounded-full bg-pink-950/60 border border-pink-900/40 text-pink-400 font-bold text-sm">
                                    {person.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{person.name}</p>
                                    <p className="text-xs text-pink-400">{person.role}</p>
                                </div>
                            </div>

                            {/* Contact details */}
                            <div className="space-y-2.5">
                                <a href={`mailto:${person.email}`}
                                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-pink-400 transition-colors group/link"
                                >
                                    <div className="flex items-center justify-center size-8 rounded-lg bg-slate-900 border border-slate-800 group-hover/link:border-pink-900/40 transition-colors">
                                        <MailIcon className="size-3.5" />
                                    </div>
                                    <span className="truncate">{person.email}</span>
                                </a>

                                <a href={`tel:${person.phone.replace(/\s/g, '')}`}
                                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-pink-400 transition-colors group/link"
                                >
                                    <div className="flex items-center justify-center size-8 rounded-lg bg-slate-900 border border-slate-800 group-hover/link:border-pink-900/40 transition-colors">
                                        <PhoneIcon className="size-3.5" />
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
