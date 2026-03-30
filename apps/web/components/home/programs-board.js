import SectionLabel from './section-label';

export default function ProgramsBoard({ activePrograms, controlPanels }) {
  return (
    <>
      <section className="program-board" id="lines" data-reveal>
        <div className="program-intro panel">
          <SectionLabel text="Route Network" />
          <h2>Each route reveals a different strength, but they all connect into one professional system.</h2>
          <p>
            Instead of dropping people into isolated cards, the page helps them move through your frontend, cloud, and
            AI work as a connected network.
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
