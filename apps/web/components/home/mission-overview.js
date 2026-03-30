import SectionLabel from './section-label';

export default function MissionOverview({ profile, launchBullets, lenses, activeLens, onLensChange, isPending }) {
  return (
    <section className="hero-grid" id="overview" data-reveal>
      <div className="hero-copy">
        <SectionLabel text="Profile" />
        <h1>Full-stack developer with 5+ years of experience across frontend, backend, cloud, and AI POCs.</h1>
        <p className="hero-text">{profile.summary}</p>

        <div className="lens-switcher" role="tablist" aria-label="Audience lens">
          {lenses.map((lens) => (
            <button
              key={lens.id}
              type="button"
              className={lens.id === activeLens?.id ? 'lens-button active' : 'lens-button'}
              onClick={() => onLensChange(lens.id)}
              aria-pressed={lens.id === activeLens?.id}
              disabled={isPending}
            >
              {lens.label}
            </button>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href={profile.resume} target="_blank" rel="noreferrer">
            Open Resume
          </a>
          <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-side">
        <article className="briefing-panel">
          <SectionLabel text="Best Fit" />
          <h2>{activeLens?.heading}</h2>
          <p className="briefing-copy">{activeLens?.description}</p>
          <div className="briefing-proof">{activeLens?.proof}</div>
          <div className="briefing-tags">
            {activeLens?.signals.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="briefing-links">
            <a href="#strengths">View strengths</a>
            <a href="#experience">View experience</a>
            <a href="#ai">Ask about my work</a>
          </div>
        </article>

        <div className="signal-grid">
          <article className="signal-card">
            <span>{profile.title}</span>
            <strong>{profile.focus}</strong>
          </article>

          {launchBullets.map((item) => (
            <article className="signal-card" key={item}>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
