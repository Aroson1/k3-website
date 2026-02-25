'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronRightIcon } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const loadingLetters = container.querySelectorAll('.hero-loader__letter');
    const box = container.querySelectorAll('.hero-loader__box');
    const growingImage = container.querySelectorAll('.hero-loader__growing-image');
    const headingStart = container.querySelectorAll('.hero-loader__h1-start');
    const headingEnd = container.querySelectorAll('.hero-loader__h1-end');
    const coverImageExtra = container.querySelectorAll('.hero-loader__cover-extra');
    const overlay = container.querySelector('.hero-section__overlay');
    const contentItems = container.querySelectorAll('.hero__content-item');
    const inlineSlides = container.querySelectorAll('.hero__inline-slide');

    // Stop Lenis smooth scroll
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      lenisInstance.stop();
    }

    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      onStart: () => {
        container.classList.remove('is--hidden');
        document.body.style.overflow = 'hidden';
      },
      onComplete: () => {
        document.body.style.overflow = '';
        container.classList.remove('is--loading');

        // Restart Lenis
        if (lenisInstance) {
          lenisInstance.start();
        }

        window.dispatchEvent(new CustomEvent('heroAnimationComplete'));
      },
    });

    // 1. Loader letters slide up
    if (loadingLetters.length) {
      tl.from(loadingLetters, {
        yPercent: 100,
        stagger: 0.025,
        duration: 1.25,
      });
    }

    // 2. Box grows between letters + image fills the box
    if (box.length) {
      tl.fromTo(box, { width: '0em' }, { width: '1em', duration: 1.25 }, '< 1.25');
    }
    if (growingImage.length) {
      tl.fromTo(growingImage, { width: '0%' }, { width: '100%', duration: 1.25 }, '<');
    }

    // 3. Letters shift slightly outward
    if (headingStart.length) {
      tl.fromTo(headingStart, { x: '0em' }, { x: '-0.05em', duration: 1.25 }, '<');
    }
    if (headingEnd.length) {
      tl.fromTo(headingEnd, { x: '0em' }, { x: '0.05em', duration: 1.25 }, '<');
    }

    // 4. Extra cover images flash away
    if (coverImageExtra.length) {
      tl.fromTo(
        coverImageExtra,
        { opacity: 1 },
        { opacity: 0, duration: 0.05, ease: 'none', stagger: 0.5 },
        '-=0.05',
      );
    }

    // 5. Image expands to fullscreen
    if (growingImage.length) {
      tl.to(growingImage, { width: '100vw', height: '100dvh', duration: 2 }, '< 1.25');
    }
    if (box.length) {
      tl.to(box, { width: '110vw', duration: 2 }, '<');
    }

    // 6. Dark overlay fades in
    if (overlay) {
      tl.to(overlay, { opacity: 1, duration: 1.5 }, '<0.5');
    }

    // 7. Hero content items fade in
    if (contentItems.length) {
      tl.from(
        contentItems,
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          stagger: 0.08,
        },
        '<0.2',
      );
    }

    // 8. K³© letters slide up from below the line
    if (inlineSlides.length) {
      tl.from(
        inlineSlides,
        {
          yPercent: 110,
          duration: 1.2,
          ease: 'expo.out',
          stagger: 0.06,
        },
        '<',
      );
    }

    return () => {
      tl.kill();
      document.body.style.overflow = '';

      // Ensure Lenis is restarted on cleanup
      if (lenisInstance) {
        lenisInstance.start();
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="hero-section is--loading is--hidden">
      {/*  Loader  */}
      <div className="hero-loader">
        <div className="hero-loader__h1">
          <div className="hero-loader__h1-start">
            <span className="hero-loader__letter">K</span>
          </div>
          <div className="hero-loader__box">
            <div className="hero-loader__box-inner">
              <div className="hero-loader__growing-image">
                <div className="hero-loader__growing-image-wrap">
                  <img className="hero-loader__cover-extra is--1" src="/assets/loop.gif" alt="" />
                  <img className="hero-loader__cover-extra is--2" src="/assets/loop.gif" alt="" />
                  <img className="hero-loader__cover" src="/assets/loop.gif" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-loader__h1-end">
            <span className="hero-loader__letter">³</span>
          </div>
        </div>
      </div>

      {/*  Dark overlay (fades in over expanded image)  */}
      <div className="hero-section__overlay" />

      {/*  Hero Content (after animation)  */}
      <div className="hero-section__content">
        {/* Decorative pink blur */}
        {/* <div className="absolute top-1/3 left-1/4 size-72 bg-pink-600 blur-[300px] pointer-events-none opacity-40" /> */}

        {/* Center content */}
        <div className="hero-section__center">
          <div
            className="hero__content-item rounded-full p-[1px]"
            style={{
              background:
                'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)',
            }}
          >
            <div className="group flex items-center gap-2 rounded-full p-1 pr-3 text-pink-100 bg-black/90 backdrop-blur-sm">
              <span className="bg-pink-800 text-white text-xs px-3.5 py-1 rounded-full">
                March 21–22, 2026
              </span>
              <p className="flex items-center gap-1">
                <span>National-Level CP Contest</span>
                <ChevronRightIcon
                  size={16}
                  className="group-hover:translate-x-0.5 transition duration-300"
                />
              </p>
            </div>
          </div>

          <div className="h-8" />
          {/* Large decorative K³© as the hero heading */}
          <div className="hero__content-item hero__inline-title">
            <div className="hero__inline-reveal">
              <span className="hero__inline-letter hero__inline-slide">K</span>
            </div>
            <div className="hero__inline-reveal">
              <span className="hero__inline-letter hero__inline-slide">³</span>
            </div>
            <div className="hero__inline-reveal hero__inline-copyright-wrap">
              <span className="hero__inline-letter hero__inline-slide hero__inline-copyright">
                ©
              </span>
            </div>
          </div>

          <p className="hero__content-item text-base md:text-lg text-center text-slate-300/80 max-w-xl mt-2 leading-relaxed">
            An offline national-level competitive programming contest by IIIT Kottayam 40 home
            teams, 120+ visiting teams, three intense rounds.
          </p>

          <div className="hero__content-item flex items-center gap-4 mt-8">
            <a
              href="#contact"
              className="relative overflow-hidden bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 h-12 flex items-center font-medium transition shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40"
            >
              Register Now
            </a>
            <a
              href="#timeline"
              className="flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all rounded-full px-7 h-12 text-white/90"
            >
              <span>Contest Rounds</span>
              <ChevronRightIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
