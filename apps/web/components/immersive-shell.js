'use client';

import { useEffect, useState } from 'react';

export default function ImmersiveShell({ children }) {
  const [pointerStyle, setPointerStyle] = useState({
    '--spotlight-x': '50%',
    '--spotlight-y': '20%',
  });

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      nodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, []);

  function handlePointerMove(event) {
    const x = `${(event.clientX / window.innerWidth) * 100}%`;
    const y = `${(event.clientY / window.innerHeight) * 100}%`;

    setPointerStyle({
      '--spotlight-x': x,
      '--spotlight-y': y,
    });
  }

  return (
    <div className="immersive-shell" onPointerMove={handlePointerMove} style={pointerStyle}>
      <div className="spotlight-layer" aria-hidden="true" />
      {children}
    </div>
  );
}
