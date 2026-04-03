export interface TimelineItem {
  year: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
  current?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    year: '2025',
    company: 'KitchenSync',
    role: 'Full Stack Engineer',
    period: '2025 - Present',
    summary:
      'Developing AI-powered tooling for the restaurant industry with orchestration-heavy workflows and production-grade interfaces.',
    tags: ['Claude API', 'OpenAI', 'Express', 'PostgreSQL', 'LiveKit', 'Socket.io'],
    current: true,
  },
  {
    year: '2024',
    company: 'Invermax',
    role: 'Full Stack Consultant',
    period: 'Dec 2024 - Jun 2025',
    summary:
      'Led product delivery across web and internal tooling, improving performance baselines and shipping repeatable engineering patterns.',
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma'],
  },
  {
    year: '2023',
    company: 'AtlasOps',
    role: 'Frontend Engineer',
    period: '2023 - 2024',
    summary:
      'Built operator-facing dashboards and real-time UX surfaces for logistics and planning teams operating at high throughput.',
    tags: ['React Native', 'WebSockets', 'Tailwind'],
  },
  {
    year: '2021',
    company: 'Independent',
    role: 'Product Engineer',
    period: '2021 - 2023',
    summary:
      'Designed and launched MVPs from zero to first users, combining rapid experimentation with robust front-end implementation.',
    tags: ['MVPs', 'UX Engineering', 'Growth Loops'],
  },
];

export const skills: string[] = [
  'Astro Architecture',
  'React Islands',
  'AI Product Design',
  'Node + TypeScript',
  'Tailwind v4',
  'Performance Tuning',
  'Interaction Design',
  'Design Systems',
];

export const projects: ProjectItem[] = [
  {
    title: 'AI Workflow Orchestrator',
    description:
      'Designed and implemented a modular system to chain model calls, tool usage, and human checkpoints into reliable flows.',
    stack: ['TypeScript', 'Event-Driven', 'Observability'],
  },
  {
    title: 'Realtime Product Intelligence',
    description:
      'Built streaming dashboards and automated alerting for product and operational metrics with decision-ready visual layers.',
    stack: ['WebSockets', 'Analytics', 'UX'],
  },
  {
    title: 'Portfolio Engine',
    description:
      'Created this editorial-style portfolio shell with route transitions, dual theme support, and animation-first storytelling.',
    stack: ['Astro 6', 'R3F', 'Tailwind'],
  },
];
