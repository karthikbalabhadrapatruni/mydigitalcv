import { useEffect, useState } from 'react';

export function useTypewriterChip(words, startDelay = 1200) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!words.length) {
      return undefined;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const currentWord = words[wordIndex];

      if (!deleting) {
        charIndex += 1;
        setValue(currentWord.slice(0, charIndex));

        if (charIndex === currentWord.length) {
          deleting = true;
          timeoutId = window.setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex -= 1;
        setValue(currentWord.slice(0, Math.max(charIndex, 0)));

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeoutId = window.setTimeout(tick, 300);
          return;
        }
      }

      timeoutId = window.setTimeout(tick, deleting ? 45 : 80);
    };

    timeoutId = window.setTimeout(tick, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [startDelay, words]);

  return value;
}

export function useCountUp({ target, duration, delay = 0 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let timeoutId = 0;

    const run = () => {
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));

        if (progress < 1) {
          rafId = window.requestAnimationFrame(step);
        }
      };

      rafId = window.requestAnimationFrame(step);
    };

    timeoutId = window.setTimeout(run, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(rafId);
    };
  }, [delay, duration, target]);

  return value;
}
