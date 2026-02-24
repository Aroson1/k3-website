'use client'
import SectionTitle from "@/components/SectionTitle";
import { motion } from "motion/react";
import { GraduationCapIcon, AwardIcon, RocketIcon } from "lucide-react";

export default function HostInstituteSection() {
    const highlights = [
        {
            icon: <GraduationCapIcon className="size-6" />,
            title: "Institute of National Importance",
            description: "Established by the Ministry of Education, Government of India. Students admitted through highly competitive JEE Main.",
        },
        {
            icon: <AwardIcon className="size-6" />,
            title: "Competitive Programmers & ICPC Participants",
            description: "A campus home to active Codeforces competitors, ICPC participants, hackathon winners and future software engineers.",
        },
        {
            icon: <RocketIcon className="size-6" />,
            title: "Top Technical Talent",
            description: "Partnering with IIIT Kottayam means direct visibility among skilled, job-ready engineers and top technical talent.",
        },
    ];

    return (
        <div id="institute" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Host" text2="IIIT Kottayam" text3="An Institute of National Importance — the home ground for K³." />

            <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
                {highlights.map((item, index) => (
                    <motion.div key={index}
                        className="p-6 rounded-xl border border-slate-800 bg-slate-950/50 space-y-3"
                        initial={{ y: 120, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="text-pink-500">{item.icon}</div>
                        <h3 className="text-base font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Previous Event */}
            <motion.div className="max-w-4xl mx-auto mt-14 p-8 rounded-2xl border border-pink-950 bg-pink-950/20"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="text-pink-400 text-sm font-medium uppercase tracking-wider">Our Track Record</p>
                <h3 className="text-xl font-semibold text-white mt-2">CodeQuest</h3>
                <p className="text-slate-300 mt-2">Online competitive programming contest organized as part of Apoorv — IIIT Kottayam&apos;s annual techno-cultural fest.</p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                        <span className="text-pink-600">•</span> Participants from IIITs, NITs & colleges nationwide
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-pink-600">•</span> IIIT Kottayam team secured 1st place
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
