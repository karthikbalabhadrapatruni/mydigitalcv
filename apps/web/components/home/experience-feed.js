import SectionLabel from './section-label';

export default function ExperienceFeed({ experienceFeed }) {
  return (
    <section className="experience-board panel" id="stations" data-reveal>
      <div className="board-heading">
        <SectionLabel text="Stations" />
        <h2>Career movement shown as stations, with each stop adding more scale, responsibility, and system depth.</h2>
      </div>
      <div className="feed-list">
        {experienceFeed.map((item) => (
          <article className="feed-card" key={item.title}>
            <div className="feed-meta">
              <span>{item.stamp}</span>
              <h3>{item.title}</h3>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
