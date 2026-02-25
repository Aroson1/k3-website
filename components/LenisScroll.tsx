'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number | null = null;
    const html = document.documentElement;
    const body = document.body;

    const originalHtmlOverflowX = html.style.overflowX;
    const originalHtmlOverflowY = html.style.overflowY;
    const originalBodyOverflow = body.style.overflow;

    const lockScroll = () => {
      html.style.overflowX = 'hidden';
      html.style.overflowY = 'hidden';
      body.style.overflow = 'hidden';
    };

    const restoreScroll = () => {
      html.style.overflowX = originalHtmlOverflowX;
      html.style.overflowY = originalHtmlOverflowY;
      body.style.overflow = originalBodyOverflow;
    };

    lockScroll();

    const initLenis = () => {
      if (lenis) return;

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
      restoreScroll();
      initLenis();
    };

    window.addEventListener('heroAnimationComplete', onAnimationDone);

    return () => {
      window.removeEventListener('heroAnimationComplete', onAnimationDone);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      restoreScroll();
    };
  }, []);

  return null;
}
