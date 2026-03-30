export default function Topbar() {
  return (
    <header className="topbar" data-reveal>
      <a className="brand" href="#top">
        KB
      </a>
      <nav className="topnav" aria-label="Primary">
        <a href="#overview">Start</a>
        <a href="#lines">Routes</a>
        <a href="#stations">Stations</a>
        <a href="#ai">AI</a>
        <a href="#archive">Archive</a>
        <a href="#contact">Arrival</a>
      </nav>
    </header>
  );
}
