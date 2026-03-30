const routeAnchors = [
  { href: '#overview', label: 'Start' },
  { href: '#lines', label: 'Routes' },
  { href: '#stations', label: 'Stations' },
  { href: '#ai', label: 'AI' },
  { href: '#archive', label: 'Archive' },
  { href: '#contact', label: 'Arrival' },
];

export default function RouteSidebar({ profile, metrics }) {
  return (
    <aside className="route-sidebar" data-reveal>
      <div className="route-sidebar-card">
        <p className="section-label">Journey Guide</p>
        <h2>{profile.firstName}.portfolio</h2>
        <p className="route-sidebar-copy">
          A guided engineering story where each section connects to the next instead of feeling like isolated homepage blocks.
        </p>

        <nav className="route-sidebar-nav" aria-label="Journey">
          {routeAnchors.map((item, index) => (
            <a href={item.href} key={item.href}>
              <span>{`0${index + 1}`}</span>
              <strong>{item.label}</strong>
            </a>
          ))}
        </nav>

        <div className="route-sidebar-metrics">
          {metrics.slice(0, 3).map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <a className="button button-primary route-sidebar-action" href={profile.resume} target="_blank" rel="noreferrer">
          Resume PDF
        </a>
      </div>
    </aside>
  );
}
