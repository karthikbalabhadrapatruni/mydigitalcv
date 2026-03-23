import Image from 'next/image';
import PortfolioAI from '../components/portfolio-ai';
import heroImage from '../src/images/1_cCdSJ0mOqjQkm-soL5hlIw.jpeg';
import handGestureImage from '../src/images/hci.png';
import resultAnalysisImage from '../src/images/resultAnalysis.png';
import noteRideImage from '../src/images/noteride.jpg';

const profile = {
  firstName: 'Karthik',
  fullName: 'Mohana Koundinya Karthik Balabhadrapatruni',
  title: 'Full-Stack Developer',
  subtitle: 'React, Next.js, Angular, Python, cloud systems, and agentic AI delivery',
  summary:
    'Full-stack developer with 5+ years of experience building scalable web products across React, Next.js, Angular, Node.js, Python, cloud delivery, accessibility, and performance engineering. Recent work includes agentic AI proofs of concept, micro-frontend systems, and platform-level frontend architecture.',
  email: 'karthik.bmk3@gmail.com',
  github: 'https://github.com/karthikbalabhadrapatruni',
  linkedin: 'https://www.linkedin.com/in/karthikbalabhadrapatruni',
  resume: '/autoCV.pdf',
};

const stats = [
  { value: '5+', label: 'Years in full-stack delivery' },
  { value: '7', label: 'Engineers led in Agile execution' },
  { value: '85+', label: 'Desktop performance score achieved' },
  { value: 'WCAG 2.2', label: 'Accessibility standard delivered' },
];

const focusAreas = [
  {
    eyebrow: 'Frontend Architecture',
    title: 'Interfaces built for scale, reuse, and brand flexibility.',
    copy:
      'Experience across React, Next.js, Angular, micro-frontends, white-labeled UI, theming systems, and performance-sensitive product surfaces.',
  },
  {
    eyebrow: 'Backend Delivery',
    title: 'APIs, data flows, permissions, and integrations that support real products.',
    copy:
      'Comfortable with Node.js, Express.js, Python, MongoDB, MySQL, and Postgres in enterprise-facing product environments.',
  },
  {
    eyebrow: 'Applied AI',
    title: 'Model-powered workflows grounded in actual user tasks and system context.',
    copy:
      'Recent work includes AI proofs of concept, tool integrations, Python services, retrieval patterns, and assistant-style workflows.',
  },
  {
    eyebrow: 'Cloud and Reliability',
    title: 'Delivery quality shaped by cloud architecture, release practices, and performance.',
    copy:
      'Hands-on with AWS, Azure, Terraform, and frontend optimization while keeping accessibility and maintainability in scope.',
  },
];

const experience = [
  {
    period: 'Dec 2021 - Present',
    role: 'Specialist Programmer',
    company: 'Infosys Ltd.',
    points: [
      'Led an Agile development team of 7 from concept to deployment.',
      'Built agentic AI proofs of concept using orchestration, retrieval, speech, and tool-integration patterns.',
      'Integrated AI flows with existing systems through Python-based services and backend tooling.',
      'Delivered white-labeled micro-frontend applications with Next.js and React.js.',
      'Improved FCP, LCP, CLS, and TBT, achieving 85+ desktop and 60+ mobile scores.',
      'Ensured alignment with WCAG 2.2 Level A accessibility requirements.',
      'Implemented infrastructure and delivery workflows using Terraform, Azure Pipelines, and AWS services.',
    ],
  },
  {
    period: 'Nov 2020 - Dec 2021',
    role: 'Digital Specialist Engineer',
    company: 'Infosys Ltd.',
    points: [
      'Contributed to a no-code and low-code platform for webpage generation.',
      'Worked across Angular frontend, Express.js backend, and MongoDB.',
      'Built user and group management flows with permissions and role definitions.',
      'Implemented dynamic theming and custom font support using SCSS.',
    ],
  },
];

const professionalHighlights = [
  {
    tag: 'Enterprise AI',
    title: 'Agentic AI Proofs of Concept',
    copy:
      'Focused on orchestration, retrieval, speech, and system integration so the work moves beyond demo-only chatbot patterns.',
    image: handGestureImage,
  },
  {
    tag: 'Platform UI',
    title: 'White-Labeled Frontend Platform',
    copy:
      'Frontend architecture shaped for reuse, brand customization, performance tuning, and accessibility compliance.',
    image: resultAnalysisImage,
  },
];

const capabilities = [
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
  'Instana',
  'Lighthouse',
  'Strapi',
  'Grafana',
];

function SectionHeader({ eyebrow, title, body }) {
  return (
    <div className="section-header">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <span>{body}</span> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar">
        <a className="brand" href="#top">
          KB
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Highlights</a>
          <a href="#ai">AI</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-kicker">Portfolio 2026</p>
          <h1>Building product-grade interfaces, cloud-backed systems, and practical AI workflows.</h1>
          <p className="hero-text">{profile.summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={profile.resume} target="_blank" rel="noreferrer">
              Open Resume
            </a>
            <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              View LinkedIn
            </a>
          </div>

          <div className="identity-card" id="about">
            <span>{profile.title}</span>
            <strong>{profile.fullName}</strong>
            <p>{profile.subtitle}</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card">
            <Image
              src={heroImage}
              alt={profile.fullName}
              priority
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 38vw"
            />
          </div>
          <div className="overlay-card">
            <p>Current focus</p>
            <strong>
              scalable frontend systems, accessible user experiences, and AI-enabled flows that connect to real tools
            </strong>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((item) => (
          <article className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="bento-layout">
        <article className="bento-intro bento-panel">
          <SectionHeader
            eyebrow="Positioning"
            title="A portfolio centered on current professional delivery, not older academic project lists."
            body="The story here is frontend depth, backend ownership, cloud delivery, performance, accessibility, and practical AI work."
          />
        </article>

        {focusAreas.map((item) => (
          <article className="bento-panel" key={item.title}>
            <p className="panel-eyebrow">{item.eyebrow}</p>
            <h3>{item.title}</h3>
            <span>{item.copy}</span>
          </article>
        ))}
      </section>

      <section className="section-block" id="experience">
        <SectionHeader
          eyebrow="Experience"
          title="Recent work across frontend systems, backend delivery, cloud infrastructure, and applied AI."
          body="The strongest signal in your profile is breadth with execution quality: you can move across UI, APIs, infrastructure, and AI workflows without losing product thinking."
        />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={`${item.period}-${item.role}`}>
              <div className="experience-meta">
                <p>{item.period}</p>
                <h3>{item.role}</h3>
                <span>{item.company}</span>
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

      <section className="section-block" id="work">
        <SectionHeader
          eyebrow="Professional Highlights"
          title="A smaller set of meaningful work themes, with academic projects moved to supporting context."
          body="This keeps the portfolio focused on enterprise-facing strengths instead of making older student work carry too much weight."
        />

        <div className="featured-grid">
          {professionalHighlights.map((item) => (
            <article className="featured-card" key={item.title}>
              <div className="featured-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  placeholder="blur"
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
                <span>{item.tag}</span>
              </div>
              <div className="featured-copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="archive-strip">
          <div className="archive-copy">
            <p className="panel-eyebrow">Earlier Exploration</p>
            <h3>Academic work is still visible, but it is no longer the center of the story.</h3>
            <span>
              Earlier ML experiments and the Unity-based NOTERIDE prototype helped shape the engineering range, but the portfolio now prioritizes current product delivery.
            </span>
          </div>
          <div className="archive-thumb">
            <Image
              src={noteRideImage}
              alt="NOTERIDE prototype"
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 20vw"
            />
          </div>
        </div>
      </section>

      <PortfolioAI />

      <section className="section-block stack-section" id="stack">
        <SectionHeader
          eyebrow="Core Stack"
          title="The stack spans frontend frameworks, backend systems, cloud services, observability, and delivery tooling."
        />
        <div className="chip-cloud">
          {capabilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <footer className="footer-card" id="contact">
        <div>
          <p className="panel-eyebrow">Contact</p>
          <h2>{profile.firstName} is open to full-stack roles with strong frontend, platform, or AI-enabled product ownership.</h2>
          <span>
            Best-fit opportunities are the ones where interface quality, engineering depth, and delivery ownership all matter.
          </span>
        </div>
        <div className="footer-actions">
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
  );
}
