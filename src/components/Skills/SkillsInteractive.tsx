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

interface Category {
  id: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: 'primary' | 'secondary';
  skills: string[];
}

// ponytail: order is the pitch — full-stack engineering first, security as the differentiator after.
const CATEGORIES: Category[] = [
  {
    id: 'languages',
    Icon: Code2,
    accent: 'primary',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C', 'SQL', 'Bash', 'HTML/CSS'],
  },
  {
    id: 'backend',
    Icon: Server,
    accent: 'primary',
    skills: ['Node.js', 'Next.js', 'Express', 'REST APIs', 'WebSockets', 'Jest', 'Zod'],
  },
  {
    id: 'frontend',
    Icon: Monitor,
    accent: 'primary',
    skills: ['React', 'Next.js', 'Astro', 'TailwindCSS', 'Framer Motion', 'Three.js'],
  },
  {
    id: 'ai',
    Icon: BrainCircuit,
    accent: 'secondary',
    skills: ['Claude API', 'OpenAI', 'SSE Streaming', 'MCP Servers', 'LLM Integration', 'Prompt Injection defense', 'LLM Guardrails', 'RAG', 'Prompt Engineering'],
  },
  {
    id: 'appsec',
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
    id: 'offensive',
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
    id: 'databases',
    Icon: Database,
    accent: 'primary',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Redis'],
  },
  {
    id: 'devops',
    Icon: Cloud,
    accent: 'primary',
    skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Digital Ocean', 'Linux hardening', 'Vercel'],
  },
  {
    id: 'tooling',
    Icon: Wrench,
    accent: 'primary',
    skills: ['Git', 'GitHub', 'Postman', 'Jira', 'Swagger', 'Linux'],
  },
];

function SkillCard({ category, name }: { category: Category; name: string }) {
  const { Icon, accent, skills } = category;
  const isSecondary = accent === 'secondary';

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated',
        'transition-colors duration-200 hover:border-accent-border',
      )}
    >
      {/* Top rule wipes in on hover. Violet for engineering groups, coral for
          the security/AI ones - the taxonomy reads without a legend. */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0',
          'transition-transform duration-400 ease-out group-hover:scale-x-100',
          isSecondary ? 'bg-accent-secondary' : 'bg-accent',
        )}
      />

      <div className="relative z-10 flex flex-col gap-5 p-7">
        <div className="flex items-center gap-3">
          <Icon
            className={cn(
              'h-[18px] w-[18px] shrink-0',
              isSecondary ? 'text-accent-secondary' : 'text-accent',
            )}
          />
          <h3 className="text-base font-semibold tracking-tight text-fg">{name}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-fg-muted transition-colors duration-200 group-hover:text-fg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsInteractive({ categoryNames }: { categoryNames: Record<string, string> }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {CATEGORIES.map((cat) => (
        <SkillCard key={cat.id} category={cat} name={categoryNames[cat.id] ?? cat.id} />
      ))}
    </div>
  );
}
