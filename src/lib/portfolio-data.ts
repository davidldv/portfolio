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
    title: 'Security',
    icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z M9 12l2 2 4-4',
    items: [
      'OWASP Top 10',
      'OAuth 2.0 / OIDC',
      'JWT (EdDSA)',
      'RBAC',
      'CSRF / XSS / SQLi defenses',
      'Threat Modeling (STRIDE)',
      'Secure Code Review',
      'Argon2id / session hardening',
    ],
  },
  {
    title: 'Backend & Data',
    icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
    items: ['TypeScript', 'Node.js', 'Next.js', 'Python', 'C', 'PostgreSQL', 'Prisma', 'MongoDB', 'REST', 'WebSockets', 'Zod'],
  },
  {
    title: 'Offensive & AppSec Tooling',
    icon: 'M14 2l8 8-10 10H4v-8L14 2z',
    items: [
      'Burp Suite',
      'OWASP ZAP',
      'nmap',
      'Wireshark',
      'sqlmap',
      'ffuf',
      'Nuclei',
      'Gobuster',
      'Hydra',
      'Hashcat',
      'Metasploit',
      'Nikto',
      'Semgrep',
      'Trivy',
      'Kali Linux',
      'HackTheBox',
      'TryHackMe',
      'PortSwigger Academy',
    ],
  },
  {
    title: 'AI & Cloud',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    items: ['Claude API', 'OpenAI', 'LLM Guardrails', 'Prompt Injection defense', 'AWS', 'Azure', 'Docker', 'CI/CD (Azure Pipelines)', 'Linux hardening'],
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
