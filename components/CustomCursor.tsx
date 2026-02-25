'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check for touch device — hide cursor entirely
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      cursor.style.display = 'none';
      return;
    }

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.6, ease: 'power3' });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Selectors for elements that should trigger the expanded cursor
    const hoverSelectors = [
      'a',
      'button',
      '[data-cursor]',
      // Cards & containers
      'article',
      '.group',
      // Timeline items
      '.hero__content-item',
      // Pricing cards, testimonial cards, FAQ items
      '[class*="rounded-2xl"]',
      '[class*="rounded-xl"]',
      // Tags / chips
      '.rounded-full[class*="px-"]',
      // Inputs
      'input',
      'textarea',
      'select',
    ].join(', ');

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(hoverSelectors)) {
        cursor.classList.add('is--hover');
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.relatedTarget as HTMLElement | null;
      // Only remove hover if we're leaving all hover targets
      if (!target || !target.closest(hoverSelectors)) {
        cursor.classList.remove('is--hover');
      }
    };

    const onMouseDown = () => cursor.classList.add('is--pressed');
    const onMouseUp = () => cursor.classList.remove('is--pressed');
    const onMouseLeave = () => {
      cursor.style.opacity = '0';
    };
    const onMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
