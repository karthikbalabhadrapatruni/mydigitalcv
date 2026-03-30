export default function MetricsBand({ metrics, stackSignals }) {
  return (
    <>
      <section className="metric-row" data-reveal>
        {metrics.map((item) => (
          <article className="metric-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="ticker-band" aria-label="Signal band" data-reveal>
        <div className="ticker-track">
          {[...stackSignals, ...stackSignals].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>
    </>
  );
}
