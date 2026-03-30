import SectionLabel from './section-label';
import CapabilityTabs from './capability-tabs';

export default function ProgramsBoard({ activePrograms, controlPanels, preferredId, lensLabel }) {
  return (
    <section className="strength-section" id="strengths" data-reveal>
      <div className="section-heading">
        <SectionLabel text="Core Areas" />
        <h2>The profile is easiest to understand through these three work areas.</h2>
        <p>
          Frontend, cloud, and AI overlap in my work, but splitting them this way makes it easier to scan. The current
          emphasis is set for <strong>{lensLabel}</strong>.
        </p>
      </div>

      <CapabilityTabs items={activePrograms} preferredId={preferredId} />

      <div className="principles-grid">
        {controlPanels.map((item) => (
          <article className="principle-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
