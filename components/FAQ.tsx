'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is K³ and how does it work?',
    answer:
      "K³ is an offline national-level competitive programming contest organized by the Coders' Club of IIIT Kottayam. It features three intense rounds  Debugging, Reverse Coding, and Head-to-Head Finals  all hosted on the Codeforces platform. Teams compete to test their algorithmic and problem-solving skills.",
  },
  {
    question: 'Who can participate in K³?',
    answer:
      'K³ is open to all college students across India. Teams can register on our website. IIIT Kottayam students can register for free, while outside teams pay a nominal fee of ₹200 per team.',
  },
  {
    question: 'What are the contest rounds?',
    answer:
      'The contest comprises three rounds: Round 1 is Debugging  identify and fix bugs in incorrect code. Round 2 is Reverse Coding  deduce the logic from sample outputs. Round 3 is Head-to-Head Finals  a direct face-off where the fastest team to solve wins the championship.',
  },
  {
    question: 'What is the prize pool?',
    answer:
      'K³ features a prize pool of ₹1.5 Lakhs+. Prizes are distributed to the top-performing teams across the final rounds. Detailed prize breakdowns will be announced closer to the event.',
  },
  {
    question: 'How can I sponsor or partner with K³?',
    answer:
      'We offer multiple sponsorship tiers  Event Sponsor, Gold Sponsor, and Title Sponsor  with benefits ranging from logo placement on merchandise and hoardings to on-stage interaction and company presentations. Reach out to our organizing team for the full sponsorship brochure.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 bg-black relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side - Title and CTA */}
          <div className="lg:col-span-4">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div
                className="rounded-full p-[1px]"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)',
                }}
              >
                <div className="bg-black rounded-full px-4 py-2">
                  <span className="text-sm text-white/80">FAQ</span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "'General Sans', sans-serif" }}
            >
              Frequently asked questions
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 mb-8"
            >
              Got any Questions?
              <br />
              Let us know! Reach out and our team will get right back to you.
            </motion.p>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="#contact"
                className="inline-flex px-6 py-3 rounded-xl text-white font-medium border border-white/20 hover:border-white/40 transition-colors"
              >
                Contact us
              </Link>
            </motion.div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-white/60"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
