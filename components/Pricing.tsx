'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import AnimatedText from './AnimatedText';
import { DownloadIcon } from 'lucide-react';

const plans = [
  {
    name: 'Event Sponsor',
    description: 'Website & social branding',
    price: 20000,
    features: [
      { text: 'Website branding' },
      { text: 'Social media posters' },
      { text: 'Logo on hoardings & banners' },
      { text: 'Crowd interaction opportunities' },
      { text: 'On-stage interaction (10 mins)' },
      { text: 'Direct access to national-level coders' },
    ],
    highlighted: false,
  },
  {
    name: 'Gold Sponsor',
    description: '"CoPowered by" branding',
    price: 35000,
    features: [
      { text: 'Special promotional teaser' },
      { text: 'Logo on contestant merchandise' },
      { text: 'Website & social branding' },
      { text: '"CoPowered by" branding' },
      { text: 'Logo on hoardings & banners' },
      { text: 'On-stage interaction (20 mins)' },
      { text: 'Company presentation / lecture' },
    ],
    highlighted: true,
  },
  {
    name: 'Title Sponsor',
    description: '"Powered by" branding',
    price: 60000,
    features: [
      { text: 'Special promotional teaser' },
      { text: 'Logo on contestant merchandise' },
      { text: 'Website & social branding' },
      { text: '"Powered by" branding' },
      { text: 'Logo on hoardings & banners' },
      { text: 'On-stage interaction (30 mins)' },
      { text: 'Company presentation / lecture' },
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="pricing" ref={sectionRef} className="py-16 px-4 bg-black">
      <div className="max-w-[960px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Gradient Chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
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
                <span className="text-sm text-white/80">Sponsors</span>
              </div>
            </div>
          </motion.div>

          <AnimatedText
            text="Sponsorship Tiers"
            as="h2"
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Partner with K³ get direct visibility among 160+ top student coders from across India.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="rounded-[24px] border border-white/[0.08] p-1.5 overflow-hidden relative shadow-xl aspect-[2/3]"
              style={{
                backgroundImage: 'url(/pricing_bg.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Pricing Top */}
              <div className="rounded-[20px] p-5 border border-white/[0.05]">
                <div className="mb-5">
                  <div className="flex flex-col gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                      <p className="text-xs text-gray-400">{plan.description}</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <PriceAnimation price={plan.price} />
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#contact"
                    className={`block text-center py-3 rounded-full font-medium text-sm transition-all ${
                      plan.highlighted
                        ? 'bg-gradient-to-b from-pink-600 to-pink-400 text-white shadow-lg shadow-pink-500/30'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              {/* Features */}
              <div className="px-5 py-4">
                <p className="text-xs text-gray-500 mb-3">Included features:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                      <span className="mt-2 w-0.75 h-0.75 rounded-full bg-current flex-shrink-0" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brochure CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 text-sm mb-4">
            Want the full details? Download our sponsorship brochure.
          </p>
          <a
            href="/assets/sponsorship-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-medium rounded-full px-8 py-3 transition-all duration-300 shadow-lg shadow-pink-900/30 hover:shadow-pink-900/50"
          >
            <DownloadIcon className="size-4" />
            Download Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Animated price component with character rotation
function PriceAnimation({ price }: { price: number }) {
  const priceString = `₹${price.toLocaleString('en-IN')}`;

  return (
    <span className="text-3xl font-bold text-white flex">
      {priceString.split('').map((char, index) => (
        <motion.span
          key={`${price}-${index}`}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ perspective: '500px' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
