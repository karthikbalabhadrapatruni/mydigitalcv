import SectionLabel from './section-label';

export default function ContactDeck({ profile }) {
  return (
    <footer className="contact-card" id="contact" data-reveal>
      <div>
        <SectionLabel text="Contact" />
        <h2>Open to full-stack roles where product quality, platform thinking, and AI-enabled delivery matter.</h2>
        <p>
          If the role needs someone comfortable moving between frontend architecture, backend systems, cloud delivery,
          and AI workflows, this is a strong fit.
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
