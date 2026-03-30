import Image from 'next/image';
import ImmersiveShell from '../components/immersive-shell';
import PortfolioAI from '../components/portfolio-ai';
import heroImage from '../src/images/1_cCdSJ0mOqjQkm-soL5hlIw.jpeg';
import handGestureImage from '../src/images/hci.png';
import resultAnalysisImage from '../src/images/resultAnalysis.png';
import noteRideImage from '../src/images/noteride.jpg';

const profile = {
  firstName: 'Karthik',
  fullName: 'Mohana Koundinya Karthik Balabhadrapatruni',
  title: 'Full-Stack Developer',
  summary:
    'Building scalable interfaces, platform systems, and AI-enabled workflows across React, Next.js, Angular, Node.js, Python, cloud delivery, accessibility, and performance optimization.',
  email: 'karthik.bmk3@gmail.com',
  github: 'https://github.com/karthikbalabhadrapatruni',
  linkedin: 'https://www.linkedin.com/in/karthikbalabhadrapatruni',
  resume: '/autoCV.pdf',
};

const metrics = [
  { value: '5+', label: 'Years of delivery' },
  { value: '7', label: 'Engineers led' },
  { value: '85+', label: 'Desktop lighthouse' },
  { value: 'WCAG 2.2', label: 'Accessibility baseline' },
];

const liveSystems = [
  {
    id: 'frontend',
    tag: 'Live System 01',
    title: 'Frontend Platform Systems',
    text:
      'White-labeled interfaces, micro-frontends, dynamic theming, and reusable product architecture across React, Next.js, Angular, and SCSS.',
    image: resultAnalysisImage,
  },
  {
    id: 'ai',
    tag: 'Live System 02',
    title: 'AI Workflow Experiments',
    text:
      'Agentic AI proofs of concept shaped around orchestration, retrieval, speech, and backend integration rather than generic chatbot demos.',
    image: handGestureImage,
  },
];

const operations = [
  {
    label: 'Frontend control',
    value: 'Next.js, React, Angular, micro-frontends, accessibility, performance',
  },
  {
    label: 'Backend control',
    value: 'Node.js, Express.js, Python, MongoDB, MySQL, Postgres',
  },
  {
    label: 'Cloud control',
    value: 'AWS, Azure, Terraform, pipelines, observability, release quality',
  },
];

const experienceFeed = [
  {
    stamp: '2021 -> Now',
    title: 'Specialist Programmer · Infosys',
    points: [
      'Led an Agile team of 7 from solution shaping to deployment.',
      'Built AI proofs of concept using orchestration, retrieval, speech, and system integration patterns.',
      'Delivered white-labeled micro-frontend applications with Next.js and React.js.',
      'Improved FCP, LCP, CLS, and TBT while meeting WCAG 2.2 Level A goals.',
      'Implemented cloud and delivery workflows with Terraform, Azure Pipelines, and AWS services.',
    ],
  },
  {
    stamp: '2020 -> 2021',
    title: 'Digital Specialist Engineer · Infosys',
    points: [
      'Built on a no-code and low-code web generation platform.',
      'Worked across Angular frontend, Express.js backend, and MongoDB.',
      'Implemented permissions, role definitions, theming, and custom font support.',
    ],
  },
];

const stackSignals = [
  'React.js',
  'Next.js',
  'Angular',
  'TypeScript',
  'JavaScript',
  'SCSS',
  'Node.js',
  'Express.js',
  'Python',
  'MongoDB',
  'MySQL',
  'Postgres',
  'AWS',
  'Azure',
  'Terraform',
  'Git',
  'Jira',
  'Lighthouse',
  'Grafana',
  'Strapi',
];

const archive = [
  'NOTERIDE Unity prototype',
  'Early machine learning experiments',
  'Academic computer vision and analytics projects',
];

function SectionLabel({ text }) {
  return <p className="section-label">{text}</p>;
}

export default function HomePage() {
  return (
    <ImmersiveShell>
      <main className="control-room">
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />

        <header className="topbar" data-reveal>
          <a className="brand" href="#top">
            KB
          </a>
          <nav className="topnav" aria-label="Primary">
            <a href="#overview">Overview</a>
            <a href="#systems">Systems</a>
            <a href="#experience">Experience</a>
            <a href="#ai">AI Console</a>
            <a href="#archive">Archive</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="mission-grid" id="top" data-reveal>
          <div className="mission-copy" id="overview">
            <SectionLabel text="Mission Overview" />
            <h1>AI control room for a full-stack engineer who ships real product systems.</h1>
            <p className="mission-text">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={profile.resume} target="_blank" rel="noreferrer">
                Open Resume
              </a>
              <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                View LinkedIn
              </a>
            </div>

            <div className="identity-strip">
              <span>{profile.title}</span>
              <strong>{profile.fullName}</strong>
            </div>

            <div className="operator-console">
              <div className="console-head">
                <span />
                <span />
                <span />
              </div>
              <div className="console-body">
                <p>$ mission.current</p>
                <div className="console-line">
                  <span>&gt;</span>
                  <strong>Frontend architecture with measurable UX and performance outcomes</strong>
                </div>
                <div className="console-line">
                  <span>&gt;</span>
                  <strong>Cloud-backed delivery and AI-enabled product workflows</strong>
                </div>
                <div className="console-line">
                  <span>&gt;</span>
                  <strong>Professional work prioritized over academic project noise</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="mission-visual">
            <div className="portrait-frame">
              <Image
                src={heroImage}
                alt={profile.fullName}
                priority
                placeholder="blur"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
            <div className="status-card status-a">
              <span>Status</span>
              <strong>Platform delivery active</strong>
            </div>
            <div className="status-card status-b">
              <span>Focus</span>
              <strong>AI, cloud, accessibility, performance</strong>
            </div>
            <div className="scan-grid" aria-hidden="true" />
          </div>
        </section>

        <section className="metric-row" data-reveal>
          {metrics.map((item) => (
            <article className="metric-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="ticker-band" aria-label="Signal band" data-reveal>
          <div className="ticker-track">
            {[...stackSignals, ...stackSignals].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="systems-layout" id="systems" data-reveal>
          <article className="systems-intro panel">
            <SectionLabel text="Live Systems" />
            <h2>The portfolio behaves like a command center: scan the signals, open the systems, then interrogate the profile.</h2>
            <p>
              Instead of pushing academic thumbnails or generic cards, the structure highlights the systems you actually
              build: frontend platforms, AI workflows, delivery infrastructure, and product quality.
            </p>
          </article>

          <div className="system-stack">
            {liveSystems.map((item) => (
              <article className="system-card panel" key={item.id}>
                <div className="system-card-copy">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="system-card-image">
                  <Image src={item.image} alt={item.title} placeholder="blur" sizes="(max-width: 900px) 100vw, 22vw" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ops-layout" data-reveal>
          {operations.map((item) => (
            <article className="ops-card panel" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </section>

        <section className="experience-board panel" id="experience" data-reveal>
          <div className="board-heading">
            <SectionLabel text="Experience Feed" />
            <h2>Experience shown as an operations log instead of a conventional resume block.</h2>
          </div>
          <div className="feed-list">
            {experienceFeed.map((item) => (
              <article className="feed-card" key={item.title}>
                <div className="feed-meta">
                  <span>{item.stamp}</span>
                  <h3>{item.title}</h3>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div data-reveal>
          <PortfolioAI />
        </div>

        <section className="stack-archive-layout" data-reveal>
          <article className="stack-panel panel">
            <SectionLabel text="Stack Signals" />
            <h2>Frontend, backend, cloud, and delivery tools arranged as live signals.</h2>
            <div className="signal-cloud">
              {stackSignals.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="archive-panel panel" id="archive">
            <SectionLabel text="Archive" />
            <h2>Earlier academic work is still present, but intentionally moved to background context.</h2>
            <div className="archive-visual">
              <Image src={noteRideImage} alt="Academic archive preview" placeholder="blur" sizes="(max-width: 900px) 100vw, 22vw" />
            </div>
            <div className="archive-list">
              {archive.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </section>

        <footer className="contact-deck panel" id="contact" data-reveal>
          <div>
            <SectionLabel text="Contact" />
            <h2>Open to full-stack roles that value interface quality, system thinking, and AI-enabled product delivery.</h2>
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
      </main>
    </ImmersiveShell>
  );
}
