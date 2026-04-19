import { techWords } from './data';
import { useCountUp, useTypewriterChip } from './hooks';

const HORIZONTAL_LINES = [80, 160, 240, 320, 400];
const VERTICAL_LINES = [120, 260, 400, 520];

export default function HeroSection() {
  const typedChip = useTypewriterChip(techWords);
  const years = useCountUp({ target: 5, duration: 1200, delay: 1500 });
  const pocs = useCountUp({ target: 5, duration: 1000, delay: 1500 });

  return (
    <div id="hero">
      <div className="grid-bg" id="gbg">
        {HORIZONTAL_LINES.map((y, index) => (
          <div
            className="grid-line-h"
            key={`h-${y}`}
            style={{ top: `${y}px`, '--d': `${index * 0.12}s` }}
          />
        ))}
        {VERTICAL_LINES.map((x, index) => (
          <div
            className="grid-line-v"
            key={`v-${x}`}
            style={{ left: `${x}px`, '--d': `${index * 0.15}s` }}
          />
        ))}
      </div>

      <div className="orb">
        <div className="orb-dot" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">fullstack · agentic AI · cloud</div>
        <h1 className="hero-h1">
          <span className="line">
            Building <span className="outline">systems</span>
          </span>
          <span className="line">
            that <span className="accent">think,</span>
          </span>
          <span className="line">scale &amp; ship.</span>
        </h1>
        <p className="hero-desc">
          Karthik Balabhadrapatruni — 5+ years shipping production web apps,
          cloud infra &amp; agentic AI at Infosys. Based in Hyderabad.
        </p>

        <div className="hero-chips">
          <span className="chip">
            {typedChip}
            <span className="chip-caret">|</span>
          </span>
        </div>

        <div className="hero-num-row">
          <div className="hnum">
            <div className="n">{years}</div>
            <div className="l">yrs exp</div>
          </div>
          <div className="hnum">
            <div className="n">{pocs}+</div>
            <div className="l">AI POCs</div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line">
          <div className="scroll-fill" />
        </div>
        scroll
      </div>
    </div>
  );
}
