'use client';

import {
  BrainCircuit,
  Server,
  Monitor,
  Database,
  Cloud,
  Code2,
  Wrench,
  ShieldCheck,
  Bug,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { ShimmerCard } from '../ui/ShimmerCard';

interface Category {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: 'primary' | 'secondary';
  skills: string[];
}

const CATEGORIES: Category[] = [
  {
    name: 'Application Security',
    Icon: ShieldCheck,
    accent: 'secondary',
    skills: [
      'OWASP Top 10',
      'Threat Modeling (STRIDE)',
      'OAuth 2.0 / OIDC',
      'JWT (EdDSA)',
      'RBAC',
      'Session Hardening',
      'Argon2id',
      'CSRF / XSS / SQLi defenses',
      'Secure Code Review',
      'Secrets Management',
      'Input Validation',
    ],
  },
  {
    name: 'Offensive & AppSec Tooling',
    Icon: Bug,
    accent: 'secondary',
    skills: [
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
    name: 'Backend',
    Icon: Server,
    accent: 'primary',
    skills: ['Node.js', 'Next.js', 'Express', 'REST APIs', 'WebSockets', 'Jest', 'Zod'],
  },
  {
    name: 'Frontend',
    Icon: Monitor,
    accent: 'primary',
    skills: ['React', 'Next.js', 'Astro', 'TailwindCSS', 'Framer Motion', 'Three.js'],
  },
  {
    name: 'Databases',
    Icon: Database,
    accent: 'primary',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Redis'],
  },
  {
    name: 'DevOps & Cloud',
    Icon: Cloud,
    accent: 'primary',
    skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Digital Ocean', 'Linux hardening', 'Vercel'],
  },
  {
    name: 'Languages',
    Icon: Code2,
    accent: 'primary',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C', 'SQL', 'Bash', 'HTML/CSS'],
  },
  {
    name: 'AI & LLM',
    Icon: BrainCircuit,
    accent: 'secondary',
    skills: ['Claude API', 'OpenAI', 'SSE Streaming', 'MCP Servers', 'LLM Integration', 'Prompt Injection defense', 'LLM Guardrails', 'RAG', 'Prompt Engineering'],
  },
  {
    name: 'Tooling',
    Icon: Wrench,
    accent: 'primary',
    skills: ['Git', 'GitHub', 'Postman', 'Jira', 'Swagger', 'Linux'],
  },
];

function SkillCard({ category }: { category: Category }) {
  const { name, Icon, accent, skills } = category;
  const isSecondary = accent === 'secondary';

  return (
    <ShimmerCard
      className={cn(
        'rounded-2xl border overflow-hidden transition-all duration-300',
        'bg-surface-elevated border-border',
        'hover:border-accent-border hover:-translate-y-0.5',
      )}
    >
      <div className="relative z-10 p-7 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300',
              isSecondary
                ? 'bg-accent-sub border-accent-secondary/30 text-accent-secondary group-hover:shadow-[0_0_16px_rgba(0,212,255,0.3)]'
                : 'bg-accent-sub border-accent/30 text-accent group-hover:shadow-[0_0_16px_var(--accent-glow)]',
            )}
          >
            <Icon className="w-5 h-5" />
          </div>

          <h3 className="text-base font-semibold tracking-tight text-fg">
            {name}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full border text-fg-muted border-border bg-surface transition-colors duration-200 group-hover:text-fg group-hover:border-accent/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ShimmerCard>
  );
}

export function SkillsInteractive() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {CATEGORIES.map((cat) => (
        <SkillCard key={cat.name} category={cat} />
      ))}
    </div>
  );
}
