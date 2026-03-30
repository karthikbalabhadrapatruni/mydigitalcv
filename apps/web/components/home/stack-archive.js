import SectionLabel from './section-label';

export default function StackArchive({ stackSignals, archiveItems }) {
  return (
    <section className="support-grid" data-reveal>
      <article className="stack-panel">
        <SectionLabel text="Stack" />
        <h2>Tools and platforms used regularly across frontend, backend, cloud, and AI work.</h2>
        <div className="stack-cloud">
          {stackSignals.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>

      <article className="archive-panel" id="archive">
        <SectionLabel text="Archive" />
        <h2>Earlier academic work is still here, but it is not the main focus of this portfolio.</h2>
        <p>
          These projects were useful while learning, but recent Infosys work is more relevant for hiring.
        </p>

        <details className="archive-disclosure">
          <summary>View academic projects</summary>
          <div className="archive-list">
            {archiveItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </details>
      </article>
    </section>
  );
}
