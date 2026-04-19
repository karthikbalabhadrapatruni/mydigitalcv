import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR = 'a,.exp-card,.ai-strip,.chip,.ai-btn,.imp-cell';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const trail = trailRef.current;

    if (!cursor || !trail) {
      return undefined;
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let rafId = 0;

    const grow = () => {
      cursor.style.width = '18px';
      cursor.style.height = '18px';
      trail.style.width = '52px';
      trail.style.height = '52px';
    };

    const reset = () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      trail.style.width = '36px';
      trail.style.height = '36px';
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const handleMouseOver = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      if (event.target.closest(INTERACTIVE_SELECTOR)) {
        grow();
      }
    };

    const handleMouseOut = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      if (event.target.closest(INTERACTIVE_SELECTOR)) {
        reset();
      }
    };

    const animateTrail = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      trail.style.left = `${Math.round(cursorX)}px`;
      trail.style.top = `${Math.round(cursorY)}px`;

      rafId = window.requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('blur', reset);

    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('blur', reset);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={cursorRef} />
      <div id="cur2" ref={trailRef} />
    </>
  );
}
