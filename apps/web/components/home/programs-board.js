import SectionLabel from './section-label';

export default function ProgramsBoard({ activePrograms, controlPanels }) {
  return (
    <>
      <section className="program-board" id="lines" data-reveal>
        <div className="program-intro panel">
          <SectionLabel text="Route Lines" />
          <h2>Follow the lines that define the work: product interfaces, resilient delivery, and AI-enabled systems.</h2>
          <p>
            The structure is visual first and resume second, so visitors understand your range quickly without getting
            buried in generic portfolio sections.
          </p>
          <div className="map-legend" aria-hidden="true">
            <span className="legend-coral" />
            <span className="legend-gold" />
            <span className="legend-mint" />
          </div>
        </div>

        <div className="program-stack">
          {activePrograms.map((item) => (
            <article className={`program-card panel accent-${item.accent}`} key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="stop-cloud">
                {item.stops.map((stop) => (
                  <span key={stop}>{stop}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ops-layout" data-reveal>
        {controlPanels.map((item) => (
          <article className="ops-card panel" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>
    </>
  );
}
