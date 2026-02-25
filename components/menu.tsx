'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navlinks } from '@/data/navlinks';
import { INavLink } from '@/types';

export function CornerNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onAnimationDone = () => setVisible(true);
    window.addEventListener('heroAnimationComplete', onAnimationDone);
    return () => window.removeEventListener('heroAnimationComplete', onAnimationDone);
  }, []);

  const closeNavigation = () => setIsOpen(false);

  return (
    <>
      {/*  Hamburger Button  */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-4 top-4 z-50 h-13 w-13 transition-all duration-500 hover:bg-white/10 ${
          isOpen ? 'rounded-bl-xl rounded-tr-xl' : 'rounded-xl'
        } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        aria-label="Toggle navigation"
      >
        <span
          className={`absolute block h-0.5 w-7 bg-white transition-all duration-300 ${
            isOpen
              ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45'
              : 'top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2'
          }`}
        />
        <span
          className={`absolute block h-0.5 w-7 bg-white transition-all duration-300 ${
            isOpen
              ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45'
              : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          }`}
        />
        <span
          className={`absolute block h-0.5 w-4 bg-white transition-all duration-300 ${
            isOpen
              ? 'bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 opacity-0'
              : 'bottom-[35%] left-[calc(50%+6px)] -translate-x-1/2 translate-y-1/2'
          }`}
        />
      </button>

      {/*  Logo (top-left, visible when menu closed)  */}
      <div
        className={`fixed left-4 md:left-8 top-4 z-50 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        } ${isOpen ? 'opacity-0 pointer-events-none' : ''}`}
      >
        <Link href="/">
          <Image
            className="h-8 w-auto"
            src="/assets/footer-logo.svg"
            alt="K³"
            width={100}
            height={32}
            priority
          />
        </Link>
      </div>

      {/*  Expanding background  */}
      <div
        className={`fixed z-40 rounded-xl bg-linear-to-br from-pink-700 to-pink-900 shadow-lg shadow-pink-900/30 transition-all duration-500 ease-out ${
          isOpen ? 'w-[calc(100%-32px)] h-[calc(100vh-32px)]' : 'w-13 h-13'
        } ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        style={{
          top: '16px',
          right: '16px',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      />

      {/*  Navigation Content  */}
      <div
        className={`fixed right-4 top-4 z-40 h-[calc(100vh-32px)] w-[calc(100%-32px)] overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Logo inside menu */}
        <Link
          href="/"
          className={`flex items-center justify-center h-20 w-20 rounded-br-xl rounded-tl-xl bg-white transition-all duration-500 hover:bg-pink-50 ${
            isOpen ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 -translate-y-3'
          }`}
          onClick={closeNavigation}
        >
          <div className="relative w-12 h-12">
            <Image src="/assets/footer-logo.svg" alt="K³" fill className="object-contain" />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="space-y-4 p-12 pl-4 md:pl-20">
          {navlinks.map((link: INavLink, index: number) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-5xl font-semibold text-pink-300 transition-all duration-200 hover:text-white md:text-7xl ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
              style={{
                transitionDelay: isOpen ? `${750 + index * 125}ms` : '0ms',
              }}
              onClick={closeNavigation}
            >
              {link.name.toLowerCase()}.
            </Link>
          ))}
        </nav>

        {/* Register CTA - Bottom Right */}
        <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3">
          <a
            href="#contact"
            className={`flex items-center gap-2 rounded-full bg-white px-7 py-3 text-pink-700 font-semibold transition-all duration-500 hover:bg-pink-50 ${
              isOpen ? 'opacity-100 translate-y-0 delay-1250' : 'opacity-0 translate-y-2'
            }`}
            onClick={closeNavigation}
          >
            <span>Register Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Event info - Bottom Left */}
        <div
          className={`absolute bottom-6 left-6 transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-2'
          }`}
        >
          <p className="text-pink-200/60 text-xs uppercase tracking-widest">K³ March 21–22, 2026</p>
          <p className="text-pink-100/40 text-xs mt-1">IIIT Kottayam</p>
        </div>
      </div>

      {/*  Overlay for mobile  */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/20 md:hidden" onClick={closeNavigation} />
      )}
    </>
  );
}
