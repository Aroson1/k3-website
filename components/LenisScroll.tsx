'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number;

    const initLenis = () => {
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        anchors: {
          offset: -100,
        },
      });

      const raf = (time: number) => {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    const onAnimationDone = () => {
      document.body.style.overflow = '';
      initLenis();
    };

    window.addEventListener('heroAnimationComplete', onAnimationDone);

    return () => {
      window.removeEventListener('heroAnimationComplete', onAnimationDone);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
