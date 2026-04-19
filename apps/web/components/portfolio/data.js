export const marqueeWords = [
  'React.js',
  'Next.js',
  'Angular',
  'TypeScript',
  'Node.js',
  'Python',
  'Langgraph',
  'Azure OpenAI',
  'MCP Server',
  'Terraform',
  'AWS Lambda',
  'MongoDB',
  'PostgreSQL',
  'Grafana',
  'WCAG 2.2',
  'Micro-Frontend',
];

export const techWords = [
  'fullstack developer',
  'agentic AI engineer',
  'cloud architect',
  'Next.js specialist',
  'team lead',
];

export const experienceCards = [
  {
    number: '01',
    title: 'Specialist Programmer',
    company: 'Infosys Ltd.',
    date: 'Dec 2021 – present',
    tags: [
      'Langgraph',
      'Azure OpenAI',
      'MCP Server',
      'Terraform',
      'Next.js',
      'AWS',
      'Micro-Frontend',
      'WCAG 2.2',
    ],
  },
  {
    number: '02',
    title: 'Digital Specialist Engineer',
    company: 'Infosys Ltd.',
    date: 'Nov 2020 – Dec 2021',
    tags: ['Angular', 'Express.js', 'MongoDB', 'SCSS', 'No-code Platform'],
  },
  {
    number: '03',
    title: 'Game Programmer',
    company: 'APSSDC × KAMK Finland',
    date: 'Jun – Jul 2018',
    tags: ['Unity 3D', 'C#', 'IGDC'],
  },
  {
    type: 'open-role',
    title: 'next chapter?',
    subtitle: 'Open to new roles',
    contact: 'karthik.bmk1@gmail.com',
  },
];

export const impactItems = [
  {
    id: 'impact-years',
    target: 5,
    unit: '+',
    label: 'years of hands-on fullstack development',
    barWidth: 80,
    delay: 600,
    duration: 1200,
  },
  {
    id: 'impact-pocs',
    target: 5,
    unit: '+',
    label: 'agentic AI POCs shipped to production evaluation',
    barWidth: 65,
    delay: 600,
    duration: 1100,
  },
  {
    id: 'impact-score',
    target: 85,
    unit: '%',
    label: 'Lighthouse desktop score on white-label Next.js platform',
    barWidth: 85,
    delay: 600,
    duration: 1400,
  },
];

export const aiAnswers = [
  {
    keywords: ['ai', 'agent', 'langgraph', 'llm', 'openai', 'llama', 'whisper'],
    response:
      'Shipped multiple <strong>Agentic AI POCs</strong> — Langgraph for orchestration, Langchain + Llama-Index for tool abstraction, Azure OpenAI as LLM, Whisper for voice. RAG via Azure Search (VectorDB). All exposed via <strong>MCP Server (Python)</strong>.',
  },
  {
    keywords: ['aws', 'cloud', 'terraform', 'lambda', 's3', 'cloudfront', 'azure', 'infra'],
    response:
      'Architected production AWS infra: <strong>Lambda, AppSync, EC2, S3, CloudFront, ALB, API Gateway</strong>. Full IaC via <strong>Terraform + Azure Pipelines</strong>. No click-ops.',
  },
  {
    keywords: ['frontend', 'react', 'next', 'nextjs', 'angular', 'performance', 'lighthouse', 'wcag'],
    response:
      'Next.js + React Micro-Frontend arch. Optimized FCP, LCP, CLS, TBT → <strong>85%+ Lighthouse desktop, 60%+ mobile</strong>. Full <strong>WCAG 2.2 Level A</strong> compliance on a white-label platform.',
  },
  {
    keywords: ['backend', 'node', 'express', 'python', 'mongodb', 'postgres', 'api'],
    response:
      'Node.js/Express APIs, Python/FastAPI for AI services. DBs: <strong>MongoDB, PostgreSQL, MySQL</strong>. Monitoring via <strong>Instana + Grafana</strong>.',
  },
  {
    keywords: ['open', 'hire', 'available', 'job', 'opportunity', 'contact', 'email', 'remote'],
    response:
      'Yes — <strong>open to new opportunities</strong>. Remote globally or relocation. Best reach: <strong>karthik.bmk1@gmail.com</strong> · LinkedIn: karthikbalabhadrapatruni',
  },
  {
    keywords: ['experience', 'year', 'work', 'career'],
    response:
      '5+ years. Currently <strong>Specialist Programmer at Infosys</strong> (Dec 2021–present). Previously Digital Specialist Engineer. Started with game dev internship — APSSDC × KAMK University, Finland.',
  },
  {
    keywords: ['education', 'degree', 'jntu', 'university'],
    response:
      '<strong>B.Tech CSE, JNTU Hyderabad</strong> · 2016–2020 · CGPA 8.4/10',
  },
];

export const aiFallback =
  'Karthik would love to answer that personally — <strong>karthik.bmk1@gmail.com</strong>';
