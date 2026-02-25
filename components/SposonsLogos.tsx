'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  {
    src: 'https://framerusercontent.com/images/d4hg31biMljU4aH2RDnh6wWqDfM.svg',
    alt: 'Client 1',
    width: 87,
    height: 24,
  },
  {
    src: 'https://framerusercontent.com/images/YYV5QoPK9M9NhyUxptVvm0o7WFM.svg',
    alt: 'Client 2',
    width: 116,
    height: 37,
  },
  {
    src: 'https://framerusercontent.com/images/LBtvbbMscujp7wOLmEoI7hneo.svg',
    alt: 'Client 3',
    width: 103,
    height: 45,
  },
  {
    src: 'https://framerusercontent.com/images/bbXsJC7bsFfQZR7qsy0AXJDR2c.svg',
    alt: 'Client 4',
    width: 150,
    height: 37,
  },
  {
    src: 'https://framerusercontent.com/images/IUvmt1THxXd3PXbz5CaMuhEuI6Q.svg',
    alt: 'Client 5',
    width: 130,
    height: 27,
  },
  {
    src: 'https://framerusercontent.com/images/Jxv0OqRRv25KUWBoDu2ZlmiSAE.svg',
    alt: 'Client 6',
    width: 149,
    height: 37,
  },
  {
    src: 'https://framerusercontent.com/images/8Cv9xasPycS59rovKfmcfBFsiZo.svg',
    alt: 'Client 7',
    width: 111,
    height: 37,
  },
  {
    src: 'https://framerusercontent.com/images/7aIzRlMAo7aKEM8u0k2IGflPk0.svg',
    alt: 'Client 8',
    width: 137,
    height: 31,
  },
];

export default function ClientLogos() {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className=" max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-[#606266] text-sm font-medium">Sponsored By</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient masks */}

          {/* Logo slider */}
          <div className="flex items-center gap-12 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.height}
                  color="white"
                  className="object-contain h-8 w-auto invert brightness-0"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
