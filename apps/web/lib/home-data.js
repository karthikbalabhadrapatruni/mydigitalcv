export const profile = {
  firstName: 'Karthik',
  fullName: 'Mohana Koundinya Karthik Balabhadrapatruni',
  title: 'Full-Stack Developer',
  summary:
    'Full-stack developer with 5+ years of experience in React, Next.js, Angular, Node.js, Python, AWS, and Azure. My recent work at Infosys has focused on frontend platforms, cloud delivery, and AI POCs.',
  focus:
    'Strongest on frontend-heavy products that also need backend, cloud, and AI integration support.',
  email: 'karthik.bmk3@gmail.com',
  github: 'https://github.com/karthikbalabhadrapatruni',
  linkedin: 'https://www.linkedin.com/in/karthikbalabhadrapatruni',
  resume: '/autoCV.pdf',
};

export const briefingLenses = [
  {
    id: 'product',
    label: 'Frontend / Product',
    heading: 'Best fit for frontend and product-focused roles.',
    description:
      'This view highlights micro-frontends, white-labelled apps, performance work, theming, and accessibility.',
    proof:
      'At Infosys, I worked on Next.js and React.js applications, improved Lighthouse metrics, and delivered WCAG 2.2 Level A compliant experiences.',
    signals: ['Next.js', 'React.js', 'Performance', 'Accessibility'],
    primaryCapability: 'frontend',
  },
  {
    id: 'platform',
    label: 'Cloud / Platform',
    heading: 'Best fit for full-stack, platform, and cloud roles.',
    description:
      'This view highlights delivery pipelines, AWS and Azure work, infrastructure setup, and platform-level ownership.',
    proof:
      'I have worked with Terraform, Azure Pipelines, Lambda, AppSync, API Gateway, S3, CloudFront, and related delivery setup.',
    signals: ['AWS', 'Azure', 'Terraform', 'Pipelines'],
    primaryCapability: 'cloud',
  },
  {
    id: 'ai',
    label: 'AI / Python',
    heading: 'Best fit for AI and Python roles.',
    description:
      'This view highlights AI POCs, retrieval, MCP integrations, speech tooling, and Python services.',
    proof:
      'Recent work includes LangChain, LlamaIndex, Azure OpenAI, Whisper, Azure Search, Postgres, and Python-based MCP integrations.',
    signals: ['Python', 'Retrieval', 'MCP', 'Agentic AI'],
    primaryCapability: 'ai',
  },
];

export const metrics = [
  { value: '5+', label: 'Years shipping products' },
  { value: '7', label: 'Engineers led' },
  { value: '85+', label: 'Desktop Lighthouse score' },
  { value: 'WCAG 2.2', label: 'Accessibility standard met' },
];

export const launchBullets = [
  'Current Infosys work is the main focus',
  'Frontend, cloud, and AI are grouped clearly',
  'Older academic work is kept in the archive',
];

export const activePrograms = [
  {
    id: 'frontend',
    label: 'Frontend Systems',
    title: 'Frontend platforms',
    headline: 'Next.js, React, Angular, theming, accessibility, and performance work.',
    text:
      'A lot of my recent frontend work has been on reusable product platforms, micro-frontends, and white-labelled applications rather than one-off pages.',
    proof: 'Worked on a white-labelled frontend architecture using Next.js and React.js, with a strong focus on performance and accessibility.',
    highlights: [
      'Micro-frontend architecture',
      'Dynamic theming and reusable UI patterns',
      'Performance tuning across FCP, LCP, CLS, and TBT',
      'WCAG 2.2 Level A alignment',
    ],
    tools: ['React.js', 'Next.js', 'Angular', 'JavaScript', 'SCSS', 'Accessibility'],
  },
  {
    id: 'cloud',
    label: 'Cloud Delivery',
    title: 'Cloud and delivery',
    headline: 'AWS, Azure, Terraform, and deployment workflows.',
    text:
      'Along with app development, I have also worked on infrastructure setup, deployment pipelines, and cloud architecture needed to keep delivery stable.',
    proof: 'Worked across AWS, Azure, Terraform, and Azure Pipelines as part of end-to-end delivery.',
    highlights: [
      'Terraform-based infrastructure workflows',
      'AWS architecture with Lambda, AppSync, API Gateway, S3, and CloudFront',
      'Delivery pipelines and provisioning improvements',
      'Observability and quality mindset throughout the stack',
    ],
    tools: ['AWS', 'Azure', 'Terraform', 'Pipelines', 'Grafana', 'Instana'],
  },
  {
    id: 'ai',
    label: 'AI Workflows',
    title: 'AI experiments and integrations',
    headline: 'Python-based AI POCs, retrieval, speech, and tool integration.',
    text:
      'My recent AI work has been more about proofs of concept and integration work than public-facing products, but it maps well to real business use cases.',
    proof: 'Built AI POCs using orchestration, retrieval, speech, and Python integration patterns.',
    highlights: [
      'LangChain, LlamaIndex, Azure OpenAI, and Whisper experimentation',
      'MCP server and client integrations in Python',
      'Retrieval patterns with Azure Search and database-backed context',
      'Portfolio AI implemented with a Python service architecture',
    ],
    tools: ['Python', 'Agentic AI', 'Retrieval', 'MCP', 'Postgres', 'Tooling'],
  },
];

export const controlPanels = [
  {
    label: 'Clear first impression',
    value: 'The page quickly shows role, skills, and recent work before going deeper.',
  },
  {
    label: 'Role-based view',
    value: 'The lens switcher makes it easier for frontend, platform, and AI-focused visitors to find the parts they care about first.',
  },
  {
    label: 'Less noise',
    value: 'Academic projects are still available, but they do not take attention away from recent professional work.',
  },
];

export const experienceFeed = [
  {
    period: 'Dec 2021 - Present',
    role: 'Specialist Programmer',
    company: 'Infosys',
    summaries: {
      product:
        'This role is the strongest match for frontend product teams: white-labelled delivery, performance, and accessibility.',
      platform:
        'This role also covers cloud setup, infrastructure workflows, and deployment ownership across AWS and Azure.',
      ai:
        'This role includes recent AI POCs using orchestration, retrieval, Python services, and system integrations.',
    },
    points: [
      { text: 'Led an Agile team of 7 from solution shaping to deployment.', lenses: ['product', 'platform', 'ai'] },
      {
        text: 'Built agentic AI proofs of concept using orchestration, retrieval, speech, and system integration patterns.',
        lenses: ['ai'],
      },
      {
        text: 'Delivered white-labelled micro-frontend applications with Next.js and React.js.',
        lenses: ['product'],
      },
      {
        text: 'Improved FCP, LCP, CLS, and TBT while meeting WCAG 2.2 Level A goals.',
        lenses: ['product'],
      },
      {
        text: 'Implemented cloud and delivery workflows with Terraform, Azure Pipelines, and AWS services.',
        lenses: ['platform'],
      },
    ],
  },
  {
    period: 'Nov 2020 - Dec 2021',
    role: 'Digital Specialist Engineer',
    company: 'Infosys',
    summaries: {
      product:
        'This role built the product foundation: Angular delivery, permissions, theming, and user-facing platform workflows.',
      platform:
        'This phase added platform depth through configurable systems, permissions, and reusable backend workflows.',
      ai:
        'This role came before the stronger AI focus, but it built the frontend and backend depth that later supported AI work.',
    },
    points: [
      {
        text: 'Built on a no-code and low-code web generation platform.',
        lenses: ['product', 'platform'],
      },
      {
        text: 'Worked across Angular frontend, Express.js backend, and MongoDB.',
        lenses: ['product', 'platform'],
      },
      {
        text: 'Implemented user and group management with role-based permissions.',
        lenses: ['platform'],
      },
      {
        text: 'Added dynamic theming and custom font import workflows.',
        lenses: ['product'],
      },
    ],
  },
];

export const stackSignals = [
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

export const archiveItems = [
  'NOTERIDE endless runner prototype',
  'Early machine learning experiments',
  'Academic computer vision and analytics work',
];
