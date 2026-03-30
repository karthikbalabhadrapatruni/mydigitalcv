import SectionLabel from './section-label';

export default function ExperienceFeed({ experienceFeed, activeLensId, activeLensLabel }) {
  return (
    <section className="experience-section" id="experience" data-reveal>
      <div className="section-heading">
        <SectionLabel text="Experience" />
        <h2>Recent experience, shown in the way that is most relevant to the role.</h2>
        <p>
          This view highlights the parts of my recent work that matter most for <strong>{activeLensLabel}</strong>.
        </p>
      </div>

      <div className="experience-list">
        {experienceFeed.map((item) => {
          const relevantPoints = item.points.filter((point) => point.lenses.includes(activeLensId));
          const visiblePoints = relevantPoints.length ? relevantPoints : item.points;
          const summary = item.summaries?.[activeLensId] ?? item.summaries?.product ?? '';

          return (
            <article className="experience-card" key={`${item.company}-${item.role}`}>
              <div className="experience-top">
                <span>{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
              </div>

              <div className="experience-focus">{summary}</div>

              <ul className="experience-points">
                {visiblePoints.map((point) => (
                  <li key={point.text}>{point.text}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
