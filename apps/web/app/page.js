import Image from 'next/image';
import PortfolioAI from '../components/portfolio-ai';
import heroImage from '../src/images/1_cCdSJ0mOqjQkm-soL5hlIw.jpeg';
import noteRideImage from '../src/images/noteride.jpg';
import handGestureImage from '../src/images/hci.png';
import resultAnalysisImage from '../src/images/resultAnalysis.png';

const profile = {
  firstName: 'Karthik',
  fullName: 'Mohana Koundinya Karthik Balabhadrapatruni',
  title: 'Full-Stack Developer',
  subtitle: 'MEAN, MERN, Python, Cloud, and Agentic AI',
  summary:
    'Full-stack developer with 5+ years of hands-on experience building scalable web applications. Strong across frontend and backend development, with recent work spanning Agentic AI, micro-frontends, cloud infrastructure, accessibility, and performance optimization.',
  email: 'karthik.bmk3@gmail.com',
  github: 'https://github.com/karthikbalabhadrapatruni',
  linkedin: 'https://www.linkedin.com/in/karthikbalabhadrapatruni',
  resume: '/autoCV.pdf',
};

const stats = [
  { value: '5+', label: 'Years building production applications' },
  { value: '7', label: 'Engineers guided in Agile delivery' },
  { value: '85+', label: 'Desktop Lighthouse score achieved' },
  { value: 'WCAG 2.2', label: 'Accessibility baseline delivered' },
];

const strengths = [
  {
    eyebrow: 'Frontend Systems',
    title: 'Next.js, React, Angular, SCSS, and white-labeled UI platforms.',
    copy:
      'Built micro-frontend applications, dynamic theming systems, custom font workflows, and polished interfaces designed for both scale and maintainability.',
  },
  {
    eyebrow: 'Backend and Data',
    title: 'Node.js, Express.js, Python, MongoDB, MySQL, and Postgres.',
    copy:
      'Comfortable owning API layers, data flows, permission models, and cross-system integrations for enterprise-facing products.',
  },
  {
    eyebrow: 'AI and Automation',
    title: 'LangGraph, LangChain, LlamaIndex, Azure OpenAI, Whisper, MCP.',
    copy:
      'Led multiple agentic AI proofs of concept and integrated AI agents with existing tools using Python-based MCP servers and clients.',
  },
  {
    eyebrow: 'Cloud and Delivery',
    title: 'AWS, Azure, Terraform, CI pipelines, performance, and reliability.',
    copy:
      'Delivered cost-aware infrastructure and improved FCP, LCP, CLS, and TBT across frontend surfaces while keeping accessibility in scope.',
  },
];

const experience = [
  {
    period: 'Dec 2021 - Present',
    role: 'Specialist Programmer',
    company: 'Infosys Ltd.',
    points: [
      'Led an Agile development team of 7 from concept to deployment.',
      'Built agentic AI POCs using LangGraph, LangChain, LlamaIndex, Azure OpenAI, Whisper, Azure Search, and Postgres.',
      'Integrated AI agents with existing systems through Python MCP servers and clients.',
      'Delivered white-labeled micro-frontend applications with Next.js and React.js.',
      'Improved performance metrics including FCP, LCP, CLS, and TBT, crossing 85+ desktop and 60+ mobile scores.',
      'Ensured alignment with WCAG 2.2 Level A accessibility requirements.',
      'Shipped infrastructure and delivery solutions with Terraform, Azure Pipelines, Lambda, AppSync, ALB, EC2, API Gateway, S3, and CloudFront.',
    ],
  },
  {
    period: 'Nov 2020 - Dec 2021',
    role: 'Digital Specialist Engineer',
    company: 'Infosys Ltd.',
    points: [
      'Contributed to a no-code and low-code platform for webpage generation.',
      'Worked across Angular frontend, Express.js backend, and MongoDB.',
      'Built user and group management flows with granular permissions and role definitions.',
      'Implemented dynamic theme customization and custom font import workflows using SCSS.',
    ],
  },
  {
    period: 'Jun 2018 - Jul 2018',
    role: 'Game Programmer Intern',
    company: 'APSSDC',
    points: [
      'Participated in the IGDC Summer Internship in association with KAMK University, Finland.',
      'Built the endless running game NOTERIDE using Unity 3D and C#.',
    ],
  },
];

const capabilities = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'React.js',
  'Next.js',
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
  'MongoDB Atlas',
  'Lighthouse',
  'Strapi',
  'Grafana',
];

const featuredWork = [
  {
    tag: 'Enterprise AI',
    title: 'Agentic AI Exploration',
    copy:
      'Proofs of concept built around orchestration, retrieval, speech, and tool integration instead of isolated demos.',
    image: handGestureImage,
  },
  {
    tag: 'Platform Engineering',
    title: 'White-Labeled Micro-Frontend UI',
    copy:
      'Frontend architecture shaped for reusability, branding flexibility, performance, and accessibility.',
    image: resultAnalysisImage,
  },
  {
    tag: 'Early Build',
    title: 'NOTERIDE',
    copy:
      'A Unity-based endless runner that still adds range to the portfolio by showing experimentation beyond web stacks.',
    image: noteRideImage,
  },
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
          <a href="#work">Work</a>
          <a href="#ai">AI</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-kicker">Portfolio 2026</p>
          <h1>
            Full-stack engineering with frontend taste, backend ownership, cloud
            depth, and AI curiosity.
          </h1>
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
            <p>Currently building</p>
            <strong>
              scalable apps, AI-enabled flows, accessible UI, and cloud-backed
              delivery systems
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
            eyebrow="Why This Portfolio"
            title="A sharper, current version of the profile you wanted."
            body="This rewrite is based on your latest Infosys and full-stack experience, not the older academic portfolio content."
          />
        </article>

        {strengths.map((item) => (
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
          title="Recent work centered on platform ownership, frontend quality, and fast-moving product delivery."
          body="The strongest signal in your profile is that you can move across UI, APIs, infrastructure, and AI experimentation without losing execution quality."
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
          eyebrow="Selected Work Themes"
          title="Presented like portfolio case-study slices, even when the work itself is enterprise-facing."
          body="Top portfolios usually feel curated, so this section focuses on distinct strengths instead of a random project dump."
        />
        <div className="featured-grid">
          {featuredWork.map((item) => (
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
      </section>

      <PortfolioAI />

      <section className="section-block stack-section" id="stack">
        <SectionHeader
          eyebrow="Core Stack"
          title="A modern stack spread across frontend frameworks, backend systems, cloud, observability, and delivery tooling."
        />
        <div className="chip-cloud">
          {capabilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section-block education-strip">
        <div>
          <p className="panel-eyebrow">Education</p>
          <h3>B.Tech, Computer Science</h3>
          <span>Jawaharlal Nehru Technological University, 2016 to 2020</span>
        </div>
        <div className="education-score">CGPA 8.4</div>
      </section>

      <footer className="footer-card" id="contact">
        <div>
          <p className="panel-eyebrow">Let&apos;s Connect</p>
          <h2>{profile.firstName} is open to full-stack, frontend-heavy, and AI-enabled product work.</h2>
          <span>
            Best fit roles are the ones where strong interface quality and solid engineering depth are both valued.
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
