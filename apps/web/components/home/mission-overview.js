import Image from 'next/image';
import SectionLabel from './section-label';

export default function MissionOverview({ profile, heroImage, launchBullets }) {
  return (
    <section className="mission-grid" id="top" data-reveal>
      <div className="mission-copy" id="overview">
        <SectionLabel text="Launch Sequence" />
        <h1>A cinematic portfolio for a full-stack engineer working across products, systems, and AI.</h1>
        <p className="mission-text">{profile.summary}</p>

        <div className="hero-actions">
          <a className="button button-primary" href={profile.resume} target="_blank" rel="noreferrer">
            Open Resume
          </a>
          <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
        </div>

        <div className="identity-strip">
          <span>{profile.title}</span>
          <strong>{profile.fullName}</strong>
        </div>

        <div className="operator-console">
          <div className="console-head">
            <span />
            <span />
            <span />
          </div>
          <div className="console-body">
            <p>$ launch.profile</p>
            {launchBullets.map((item) => (
              <div className="console-line" key={item}>
                <span>&gt;</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mission-visual">
        <div className="portrait-frame">
          <Image
            src={heroImage}
            alt={profile.fullName}
            priority
            placeholder="blur"
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
        <div className="status-card status-a">
          <span>Status</span>
          <strong>Shipping product systems</strong>
        </div>
        <div className="status-card status-b">
          <span>Focus</span>
          <strong>AI, cloud, accessibility, performance</strong>
        </div>
        <div className="status-card status-c">
          <span>Mode</span>
          <strong>Professional work first, archive second</strong>
        </div>
        <div className="scan-grid" aria-hidden="true" />
      </div>
    </section>
  );
}
