'use client';

import { useEffect, useState } from 'react';

export default function CapabilityTabs({ items, preferredId }) {
  const [activeId, setActiveId] = useState(preferredId ?? items[0]?.id);

  useEffect(() => {
    if (preferredId) {
      setActiveId(preferredId);
    }
  }, [preferredId]);

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className="capability-shell">
      <div className="capability-nav" role="tablist" aria-label="Capability areas">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === activeId ? 'capability-trigger active' : 'capability-trigger'}
            onClick={() => setActiveId(item.id)}
          >
            <span>{item.label}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </div>

      <article className="capability-panel">
        <div className="capability-copy">
          <p className="section-label">{activeItem.label}</p>
          <h3>{activeItem.headline}</h3>
          <p>{activeItem.text}</p>
          <div className="capability-proof">{activeItem.proof}</div>
        </div>

        <div className="capability-detail">
          <div>
            <p className="section-label">What It Includes</p>
            <ul className="capability-list">
              {activeItem.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Core Tools</p>
            <div className="capability-tags">
              {activeItem.tools.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
