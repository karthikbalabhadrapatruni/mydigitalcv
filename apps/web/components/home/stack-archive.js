import Image from 'next/image';
import SectionLabel from './section-label';

export default function StackArchive({ stackSignals, archiveItems, archiveImage }) {
  return (
    <section className="stack-archive-layout" data-reveal>
      <article className="stack-panel panel">
        <SectionLabel text="Line Legend" />
        <h2>The stack stays visible as a system legend instead of turning the page into a long tools checklist.</h2>
        <div className="signal-cloud">
          {stackSignals.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>

      <article className="archive-panel panel" id="archive">
        <SectionLabel text="Archive Spur" />
        <h2>Earlier academic work is still accessible, but it now sits on a dim side spur rather than the primary route.</h2>
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
