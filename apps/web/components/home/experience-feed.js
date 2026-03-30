import SectionLabel from './section-label';

export default function ExperienceFeed({ experienceFeed }) {
  return (
    <section className="experience-board panel" id="experience" data-reveal>
      <div className="board-heading">
        <SectionLabel text="Experience Feed" />
        <h2>Experience presented as a visual operations log instead of a conventional resume wall.</h2>
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
