import SectionLabel from './section-label';
import CapabilityTabs from './capability-tabs';

export default function ProgramsBoard({ activePrograms, controlPanels }) {
  return (
    <section className="strength-section" id="strengths" data-reveal>
      <div className="section-heading">
        <SectionLabel text="Strengths" />
        <h2>The strongest parts of the portfolio are grouped into three clear capability areas.</h2>
        <p>
          This keeps the page intuitive: visitors can move from high-level fit into deeper proof without bouncing
          through disconnected sections.
        </p>
      </div>

      <CapabilityTabs items={activePrograms} />

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
