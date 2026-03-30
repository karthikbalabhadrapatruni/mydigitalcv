import Image from 'next/image';
import SectionLabel from './section-label';

export default function MissionOverview({ profile, heroImage, launchBullets }) {
  return (
    <section className="mission-grid" id="top" data-reveal>
      <div className="mission-copy" id="overview">
        <SectionLabel text="Metro Narrative" />
        <h1>One route map for frontend systems, cloud delivery, and practical AI work.</h1>
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
            <p>$ metro.launch --mode professional</p>
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
        <div className="metro-card metro-card-a">
          <span>Line A</span>
          <strong>Product interfaces</strong>
        </div>
        <div className="metro-card metro-card-b">
          <span>Line B</span>
          <strong>Delivery architecture</strong>
        </div>
        <div className="metro-card metro-card-c">
          <span>Line C</span>
          <strong>Applied AI systems</strong>
        </div>
        <div className="metro-overlay" aria-hidden="true" />
      </div>
    </section>
  );
}
