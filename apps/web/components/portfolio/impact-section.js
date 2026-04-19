import { useEffect, useState } from 'react';
import { impactItems } from './data';
import { useCountUp } from './hooks';

function ImpactCell({ item, barsVisible }) {
  const value = useCountUp({
    target: item.target,
    duration: item.duration,
    delay: item.delay,
  });

  return (
    <div className="imp-cell">
      <div className="imp-n">
        <span>{value}</span>
        <span className="imp-unit">{item.unit}</span>
      </div>
      <div className="imp-label">{item.label}</div>
      <div className="imp-bar">
        <div
          className="imp-fill"
          style={{ width: barsVisible ? `${item.barWidth}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function ImpactSection() {
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setBarsVisible(true);
    }, 800);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="sec impact-sec">
      <div className="impact-grid">
        {impactItems.map((item) => (
          <ImpactCell barsVisible={barsVisible} item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
