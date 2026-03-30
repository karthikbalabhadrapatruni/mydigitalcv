import SectionLabel from './section-label';

export default function ExperienceFeed({ experienceFeed }) {
  return (
    <section className="experience-section" id="experience" data-reveal>
      <div className="section-heading">
        <SectionLabel text="Experience" />
        <h2>Recent work framed around responsibility, systems, and outcomes.</h2>
        <p>The goal is to make your current work legible quickly, not to recreate a dense resume inside the page.</p>
      </div>

      <div className="experience-list">
        {experienceFeed.map((item) => (
          <article className="experience-card" key={`${item.company}-${item.role}`}>
            <div className="experience-top">
              <span>{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
            </div>

            <div className="experience-focus">{item.focus}</div>

            <ul className="experience-points">
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
