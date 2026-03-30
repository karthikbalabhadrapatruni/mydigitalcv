export default function Topbar() {
  return (
    <header className="topbar" data-reveal>
      <a className="brand" href="#top">
        KB
      </a>
      <nav className="topnav" aria-label="Primary">
        <a href="#overview">Overview</a>
        <a href="#programs">Programs</a>
        <a href="#experience">Experience</a>
        <a href="#ai">AI Console</a>
        <a href="#archive">Archive</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
