'use client'
import SectionTitle from "@/components/SectionTitle"
import { pricingData } from "@/data/pricing";
import { IPricing } from "@/types";
import { CheckIcon, DownloadIcon, SparklesIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32 relative">
            <div className="absolute bottom-1/4 left-0 size-80 bg-pink-600/10 rounded-full blur-[200px] pointer-events-none" />

            <SectionTitle text1="Sponsors" text2="Sponsorship Tiers" text3="Partner with K³  get direct visibility among 160+ top student coders from across India." />

            <div className="flex flex-wrap items-stretch justify-center gap-6 mt-20 max-w-5xl mx-auto">
                {pricingData.map((plan: IPricing, index: number) => (
                    <motion.div key={index}
                        className={`group relative w-80 rounded-2xl overflow-hidden ${plan.mostPopular ? '' : ''}`}
                        initial={{ y: 150, opacity: 0, filter: 'blur(6px)' }}
                        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Gradient border */}
                        <div className={`absolute -inset-px rounded-2xl ${
                            plan.mostPopular
                                ? 'bg-linear-to-b from-pink-500 via-pink-700 to-pink-900'
                                : 'bg-linear-to-b from-slate-700/50 via-slate-800/30 to-transparent group-hover:from-pink-700/50 group-hover:via-pink-800/30'
                        } transition-all duration-500`} />

                        <div className={`relative h-full flex flex-col p-7 rounded-2xl ${
                            plan.mostPopular ? 'bg-pink-950/95' : 'bg-slate-950/95'
                        }`}>
                            {plan.mostPopular && (
                                <div className="flex items-center gap-1.5 text-xs font-medium text-pink-300 mb-4 bg-pink-900/40 border border-pink-800/40 rounded-full px-3 py-1 w-max">
                                    <SparklesIcon className="size-3" />
                                    Most Popular
                                </div>
                            )}
                            <p className="font-semibold text-lg text-white">{plan.name}</p>
                            <div className="mt-2 mb-6">
                                <span className="text-4xl font-bold text-white">₹{plan.price.toLocaleString('en-IN')}</span>
                                <span className="text-slate-500 text-sm ml-1.5">{plan.period}</span>
                            </div>
                            <ul className="list-none text-slate-300 space-y-3 flex-1 text-sm">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <CheckIcon className="size-4 text-pink-500 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className={`block text-center w-full py-3 rounded-xl font-medium mt-7 transition-all duration-300 ${
                                plan.mostPopular
                                    ? 'bg-white text-pink-700 hover:bg-pink-50'
                                    : 'bg-pink-600 hover:bg-pink-700 text-white'
                            }`}>
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Brochure CTA */}
            <motion.div className="max-w-md mx-auto mt-14 text-center"
                initial={{ y: 60, opacity: 0, filter: 'blur(6px)' }}
                whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="text-slate-400 text-sm mb-4">Want the full details? Download our sponsorship brochure.</p>
                <a
                    href="/assets/sponsorship-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-linear-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-medium rounded-full px-8 py-3 transition-all duration-300 shadow-lg shadow-pink-900/30 hover:shadow-pink-900/50"
                >
                    <DownloadIcon className="size-4" />
                    Download Brochure
                </a>
            </motion.div>
        </div>
    );
}