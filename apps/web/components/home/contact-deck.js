import SectionLabel from './section-label';

export default function ContactDeck({ profile }) {
  return (
    <footer className="contact-card" id="contact" data-reveal>
      <div>
        <SectionLabel text="Contact" />
        <h2>Open to full-stack roles across product engineering, platform work, and AI-related systems.</h2>
        <p>
          I am especially interested in roles where frontend, backend, cloud, and AI work come together.
        </p>
      </div>

      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.resume} target="_blank" rel="noreferrer">
          Resume PDF
        </a>
      </div>
    </footer>
  );
}
