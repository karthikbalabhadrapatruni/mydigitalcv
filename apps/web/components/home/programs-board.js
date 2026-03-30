import SectionLabel from './section-label';

export default function ProgramsBoard({ activePrograms, controlPanels }) {
  return (
    <>
      <section className="program-board" id="programs" data-reveal>
        <div className="program-intro panel">
          <SectionLabel text="Active Programs" />
          <h2>The story is told through what you actively build now, not through old project screenshots.</h2>
          <p>
            This structure treats your portfolio like a designed sequence: current focus first, delivery depth second,
            AI exploration third, and older academic work only as supporting context.
          </p>
        </div>

        <div className="program-stack">
          {activePrograms.map((item) => (
            <article className={`program-card panel accent-${item.accent}`} key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="program-orbit" aria-hidden="true" />
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
