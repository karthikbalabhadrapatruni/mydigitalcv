import Image from 'next/image';
import SectionLabel from './section-label';

export default function StackArchive({ stackSignals, archiveItems, archiveImage }) {
  return (
    <section className="stack-archive-layout" data-reveal>
      <article className="stack-panel panel">
        <SectionLabel text="Capability Mesh" />
        <h2>Frontend, backend, cloud, and delivery tools arranged as a live capability field.</h2>
        <div className="signal-cloud">
          {stackSignals.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>

      <article className="archive-panel panel" id="archive">
        <SectionLabel text="Archive" />
        <h2>Academic work stays visible, but it no longer drives the main narrative of the portfolio.</h2>
        <div className="archive-visual">
          <Image src={archiveImage} alt="Archive preview" placeholder="blur" sizes="(max-width: 900px) 100vw, 22vw" />
        </div>
        <div className="archive-list">
          {archiveItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    </section>
  );
}
