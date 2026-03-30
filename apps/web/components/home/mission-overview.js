import Image from 'next/image';
import SectionLabel from './section-label';

export default function MissionOverview({ profile, heroImage, launchBullets }) {
  return (
    <section className="hero-grid" id="overview" data-reveal>
      <div className="hero-copy">
        <SectionLabel text="Overview" />
        <h1>Full-stack developer building performant products, delivery systems, and practical AI workflows.</h1>
        <p className="hero-text">{profile.summary}</p>

        <div className="hero-actions">
          <a className="button button-primary" href={profile.resume} target="_blank" rel="noreferrer">
            Open Resume
          </a>
          <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="hero-highlights">
          {launchBullets.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="hero-side">
        <div className="portrait-card">
          <div className="portrait-frame">
            <Image
              src={heroImage}
              alt={profile.fullName}
              priority
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 34vw"
            />
          </div>
        </div>

        <div className="hero-note">
          <span>{profile.title}</span>
          <strong>{profile.focus}</strong>
          <p>{profile.fullName}</p>
        </div>
      </div>
    </section>
  );
}
