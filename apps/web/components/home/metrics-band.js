import SectionLabel from './section-label';

export default function MetricsBand({ metrics, activeLens }) {
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

      <article className="insight-panel">
        <SectionLabel text="How To Read This" />
        <h2>You can read this page based on the kind of role you have in mind.</h2>
        <p>
          Right now the page is highlighting the parts that matter most for <strong>{activeLens?.label}</strong>.
        </p>
      </article>
    </section>
  );
}
