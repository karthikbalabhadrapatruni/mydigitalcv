import SectionLabel from './section-label';

export default function MetricsBand({ metrics, stackSignals }) {
  return (
    <section className="impact-grid" data-reveal>
      <div className="metric-grid">
        {metrics.map((item) => (
          <article className="metric-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>

      <article className="impact-panel">
        <SectionLabel text="Why It Reads Fast" />
        <h2>Clear role, measurable outcomes, and quick paths into the work that matters most.</h2>
        <p>
          The site is intentionally structured for fast scanning: recruiters get your role, strongest capability areas,
          recent delivery context, and an AI-assisted summary path without digging through decorative sections.
        </p>
        <div className="impact-tags">
          {stackSignals.slice(0, 8).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    </section>
  );
}
