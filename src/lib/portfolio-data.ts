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
  meta: string;
  description: string;
  stack: string[];
  href?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    year: '2021',
    company: 'Independent',
    role: 'Engineer',
    period: '',
    summary:
      'Designed and launched MVPs from zero to first users, combining rapid experimentation with robust front-end implementation.',
    tags: ['MVPs', 'UX Engineering', 'Growth Loops'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    items: ['React', 'Astro', 'Tailwind v4', 'Interaction Design', 'Design Systems'],
  },
  {
    title: 'Backend',
    icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
    items: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'AI & ML',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    items: ['Claude API', 'OpenAI', 'AI Product Design', 'LLM Orchestration', 'Prompt Engineering'],
  },
  {
    title: 'DevOps & Tools',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    items: ['Docker', 'CI/CD', 'Performance Tuning', 'WebSockets', 'LiveKit'],
  },
];

// Keep backward compat flat list
export const skills: string[] = skillCategories.flatMap((c) => c.items);

export const projects: ProjectItem[] = [
  {
    title: 'Portfolio Engine',
    meta: 'Astro 6 · React Islands · Three.js',
    description:
      'Created this editorial-style portfolio shell with route transitions, dual theme support, and animation-first storytelling.',
    stack: ['Astro 6', 'R3F', 'Tailwind'],
    href: 'https://github.com/davidldv',
  },
];
