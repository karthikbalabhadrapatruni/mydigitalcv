import { marqueeWords } from './data';

export default function MarqueeStrip() {
  const items = Array.from({ length: 3 }, () => marqueeWords).flat();

  return (
    <div className="marquee-wrap">
      <div className="marquee-inner" id="mq">
        {items.map((word, index) => (
          <span key={`${word}-${index}-wrap`}>
            <span>{word}</span>
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
