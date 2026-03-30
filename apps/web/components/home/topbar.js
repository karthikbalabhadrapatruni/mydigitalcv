export default function Topbar({ profile }) {
  return (
    <header className="topbar" data-reveal>
      <a className="brand" href="#overview">
        KB
      </a>

      <nav className="topnav" aria-label="Primary">
        <a href="#overview">Overview</a>
        <a href="#strengths">Strengths</a>
        <a href="#experience">Experience</a>
        <a href="#ai">AI</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="topbar-cta" href={profile.resume} target="_blank" rel="noreferrer">
        Resume
      </a>
    </header>
  );
}
