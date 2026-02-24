'use client'
import SectionTitle from "@/components/SectionTitle";
import { motion } from "motion/react";
import { featuresData } from "@/data/features";
import { IFeature } from "@/types";

export default function FeaturesSection() {
    return (
        <div id="timeline" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Event" text2="Contest Timeline" text3="Three rounds designed to challenge your algorithmic thinking, creativity, and speed." />

            <div className="max-w-3xl mx-auto mt-16 space-y-0">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div key={index}
                        className="relative flex gap-6 pb-12 last:pb-0"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Timeline line */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center size-12 rounded-full border-2 border-pink-600 bg-pink-950/60 text-pink-400 font-bold text-lg shrink-0">
                                {index + 1}
                            </div>
                            {index < featuresData.length - 1 && (
                                <div className="w-px flex-1 bg-linear-to-b from-pink-600/60 to-pink-600/10 mt-2" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="pt-1.5 pb-2">
                            <div className="mb-2 text-pink-500">{feature.icon}</div>
                            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                            <p className="text-slate-400 mt-1 leading-relaxed">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Registration info */}
            <motion.div className="max-w-3xl mx-auto mt-14 p-6 rounded-xl border border-slate-800 bg-slate-950/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <div>
                    <p className="text-white font-medium">Registration</p>
                    <p className="text-sm text-slate-400 mt-1">IIIT Kottayam students — <span className="text-pink-400">Free</span> &nbsp;|&nbsp; Outside teams — <span className="text-pink-400">₹200/team</span></p>
                </div>
                <a href="#contact" className="bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-full px-6 py-2.5 shrink-0 transition">
                    Register Now
                </a>
            </motion.div>
        </div>
    );
}
