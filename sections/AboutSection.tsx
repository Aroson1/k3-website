'use client'
import SectionTitle from "@/components/SectionTitle";
import { motion } from "motion/react";
import { CodeIcon, TrophyIcon, UsersIcon, SwordsIcon } from "lucide-react";

export default function AboutSection() {
    const stats = [
        { icon: <UsersIcon className="size-6" />, value: "160+", label: "Teams Competing" },
        { icon: <TrophyIcon className="size-6" />, value: "₹1.5L+", label: "Prize Pool" },
        { icon: <SwordsIcon className="size-6" />, value: "3", label: "Intense Rounds" },
        { icon: <CodeIcon className="size-6" />, value: "Codeforces", label: "Hosted On" },
    ];

    const organizers = [
        {
            name: "Vibhaas Srivastava",
            handle: "CF: Accord",
            achievements: ["K³ Lead Organizer"],
        },
        {
            name: "Shaun Alan Joseph",
            handle: "CF: Shxun | CM (1967)",
            achievements: [
                "ICPC '25: Rank 44 Chennai, Rank 59 Amritapuri",
                "ICPC '24: Rank 47 Kanpur, Rank 50 Amritapuri",
                "Mentor @ TLE Eliminators",
            ],
        },
    ];

    return (
        <div id="about" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="About" text2="What is K³?" text3="An offline national-level competitive programming contest designed to identify and reward top algorithmic talent." />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-16">
                {stats.map((stat, index) => (
                    <motion.div key={index}
                        className="flex flex-col items-center gap-2 p-6 rounded-xl border border-slate-800 bg-slate-950/50"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="text-pink-500">{stat.icon}</div>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-slate-400 text-center">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Coders' Club */}
            <motion.div className="max-w-4xl mx-auto mt-20 p-8 rounded-2xl border border-slate-800 bg-slate-950/30"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <h3 className="text-2xl font-semibold text-white">Coders&apos; Club — IIIT Kottayam</h3>
                <p className="text-slate-300 mt-3">The official competitive programming club of IIIT Kottayam. Our members actively compete on Codeforces, CodeChef, and national-level contests.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                    {["Competitive Programming & Algorithms", "ICPC-style Contest Prep", "Building Industry-Ready Problem Solvers"].map((tag, i) => (
                        <span key={i} className="text-sm px-3 py-1 rounded-full bg-pink-950/50 border border-pink-900 text-pink-300">{tag}</span>
                    ))}
                </div>
            </motion.div>

            {/* Key Organizers */}
            <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
                {organizers.map((person, index) => (
                    <motion.div key={index}
                        className="p-6 rounded-xl border border-slate-800 bg-slate-950/50"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <p className="text-lg font-semibold text-white">{person.name}</p>
                        <p className="text-pink-400 text-sm mt-1">{person.handle}</p>
                        <ul className="mt-3 space-y-1">
                            {person.achievements.map((a, i) => (
                                <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                                    <span className="text-pink-600 mt-1">•</span>{a}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
