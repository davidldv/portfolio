'use client';

import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { ShimmerCard } from '../ui/ShimmerCard';

interface Experience {
  company: string;
  role: string;
  period: string;
  dateRange: string;
  description: string;
  tags: string[];
  href?: string;
  current?: boolean;
  parallelTrack?: boolean;
}

const EXPERIENCES: Experience[] = [
  {
    company: 'Materiales La Bodega',
    role: 'Full Stack Engineer',
    period: '2026',
    dateRange: 'Mar 2026 - Apr 2026',
    description:
      'Owned and scaled a production retail platform for a hardware business, processing ~$1.5M COP/day in transactions across e-commerce and physical store operations.',
    tags: ['NextJS', 'PostgreSQL', 'Prisma', 'Supabase', 'Tailwind', 'Zustand'],
    href: 'https://materialeslabodega.com.co'
  },
  {
    company: 'Tambora',
    role: 'Front End Developer',
    period: '2025',
    dateRange: 'Jul 2025 - Sep 2025',
    description:
      'Migrated business critical legacy modules from jQuery to React, achieving a 40% reduction in bundle size and decreasing technical debt by consolidating logic into a modular, Atomic Design component library.',
    tags: ['React', 'Azure', 'TypeScript', 'Tailwind'],
    parallelTrack: true
  },
  {
    company: 'Started my engineering journey',
    role: 'Web Developer',
    period: '2024',
    dateRange: 'Feb 2024',
    description:
      'Begun my journey in web development pursuing a degree in Computer Science, learning fundamental concepts and technologies to build modern applications.',
    tags: ['JavaScript', 'React', 'SQL'],
    parallelTrack: true
  }
];

type TagVariant = 'backend' | 'infra' | 'default';

const TAG_MAP: Record<string, TagVariant> = {
  NextJS: 'backend',
  NestJS: 'backend',
  'Node.js': 'backend',
  TypeScript: 'backend',
  Express: 'backend',
  Laravel: 'backend',
  Python: 'backend',
  BullMQ: 'backend',
  Prisma: 'backend',
  TypeORM: 'backend',
  Drizzle: 'backend',
  'Socket.io': 'backend',
  LiveKit: 'backend',
  'Claude API': 'backend',
  OpenAI: 'backend',
  Redis: 'infra',
  AWS: 'infra',
  Azure: 'infra',
  Firebase: 'infra',
  Twilio: 'infra',
  PostgreSQL: 'infra',
  Docker: 'infra',
  GCP: 'infra',
  SQL: 'infra',
  MySQL: 'infra',
  React: 'default',
  'React Native': 'default',
  Tailwind: 'default',
  Zustand: 'default',
  'Supabase': 'default',
};

function getTagVariant(tag: string): TagVariant {
  return TAG_MAP[tag] ?? 'default';
}

const TAG_CLASSES: Record<TagVariant, string> = {
  backend:
    'text-accent-secondary border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.06)] hover:border-[rgba(0,212,255,0.6)] hover:bg-[rgba(0,212,255,0.1)] hover:shadow-[0_0_10px_rgba(0,212,255,0.2)]',
  infra:
    'text-accent border-accent-border bg-accent-sub hover:border-[rgba(94,106,210,0.5)] hover:bg-[rgba(94,106,210,0.1)] hover:shadow-[0_0_10px_var(--accent-glow)]',
  default:
    'text-fg-muted border-border bg-surface hover:border-[rgba(255,255,255,0.18)] hover:text-fg',
};

const DOT_CLASSES: Record<TagVariant, string> = {
  backend: 'bg-accent-secondary',
  infra: 'bg-accent',
  default: 'bg-fg-dim',
};

function ExperienceCard({ experience, active }: { experience: Experience; active: boolean }) {
  const { company, role, dateRange, description, tags, current, href } = experience;

  return (
    <ShimmerCard
      className={cn(
        'rounded-2xl border overflow-hidden transition-all duration-500',
        'bg-surface-elevated',
        active ? 'border-accent-border' : 'border-fg-dim',
      )}
    >
      <div className={cn(
        'relative z-10 p-7 flex flex-col gap-4 transition-opacity duration-500',
        active ? 'opacity-100' : 'opacity-60',
      )}>
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-xl font-bold tracking-tight text-fg">{company}</h3>
          {href && (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-0.5 shrink-0 text-fg-muted transition-colors duration-150 hover:text-accent-secondary" 
              aria-label={`Visit ${company}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              </svg>
            </a>
          )}
          {current && (
            <span className="text-xs px-2.5 py-0.5 rounded-full border font-mono text-accent-secondary border-accent-secondary bg-accent-sub">
              Current
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 -mt-2">
          <p className="text-sm font-semibold text-accent">{role}</p>
          <p className="text-xs font-mono text-fg-muted">{dateRange}</p>
        </div>

        <p className="text-sm leading-relaxed text-fg-muted">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => {
              const variant = getTagVariant(tag);
              return (
                <span
                  key={tag}
                  className={cn(
                    'inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border',
                    'font-medium transition-all duration-200 cursor-default select-none',
                    TAG_CLASSES[variant],
                  )}
                >
                  <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', DOT_CLASSES[variant])} />
                  {tag}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </ShimmerCard>
  );
}

export function TimelineInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [lineHeight, setLineHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [parallelBounds, setParallelBounds] = useState<{ top: number; height: number } | null>(null);
  const parallelBoundsRef = useRef<{ top: number; height: number } | null>(null);
  const parallelFill = useMotionValue(0);
  const parallelFillOp = useMotionValue(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) setLineHeight(e.contentRect.height);
    });
    ro.observe(el);
    setLineHeight(el.getBoundingClientRect().height);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const parallelIndices = EXPERIENCES
      .map((e, i) => (e.parallelTrack ? i : -1))
      .filter((i) => i >= 0);
    if (!parallelIndices.length) return;

    const measure = () => {
      const firstDot = dotRefs.current[parallelIndices[0]];
      const lastDot = dotRefs.current[parallelIndices[parallelIndices.length - 1]];
      if (!firstDot || !lastDot) return;

      const ir = inner.getBoundingClientRect();
      const firstRect = firstDot.getBoundingClientRect();
      const lastRect = lastDot.getBoundingClientRect();
      const top = firstRect.top + firstRect.height / 2 - ir.top;
      const bottom = lastRect.top + lastRect.height / 2 - ir.top;
      const bounds = { top, height: bottom - top };
      parallelBoundsRef.current = bounds;
      setParallelBounds(bounds);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [lineHeight]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 30%', 'end 60%'],
  });

  const lineFill = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.max(-1, Math.min(Math.floor(v * EXPERIENCES.length - 0.05), EXPERIENCES.length - 1));
    if (idx !== activeIndex) setActiveIndex(idx);

    const bounds = parallelBoundsRef.current;
    if (bounds) {
      const t = Math.max(0, Math.min((v - 0.47) / 0.53, 1));
      parallelFill.set(t * bounds.height);
      parallelFillOp.set(Math.max(0, Math.min((v - 0.44) / 0.06, 1)));
    }
  });

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={innerRef} className="relative max-w-7xl mx-auto px-6 pb-24">
        {EXPERIENCES.map((exp, index) => {
          const reached = index <= activeIndex;

          return (
            <div key={exp.company} className="flex justify-start gap-4 md:gap-10 pt-10 md:pt-24">
              <div className="sticky flex flex-row z-40 items-center top-40 self-start w-16 md:w-52 shrink-0">
                <div
                  ref={exp.parallelTrack ? (el) => { dotRefs.current[index] = el; } : undefined}
                  className="relative h-10 w-10 rounded-full shrink-0 flex items-center justify-center bg-surface-deep"
                >
                  <div
                    className={cn(
                      'h-4 w-4 rounded-full border-2 p-2 transition-all duration-500',
                      reached
                        ? 'border-accent bg-accent shadow-[0_0_12px_var(--accent-glow)]'
                        : 'border-border bg-surface',
                    )}
                  />
                  {exp.parallelTrack && (
                    <div
                      className={cn(
                        'absolute -inset-1 rounded-full border transition-all duration-700',
                        reached
                          ? 'border-accent-secondary/50 shadow-[0_0_8px_rgba(0,212,255,0.3)]'
                          : 'border-border/30',
                      )}
                    />
                  )}
                </div>

                <p className={cn(
                  'hidden md:block text-3xl pl-4 font-bold tracking-tight transition-all duration-500 font-mono',
                  reached ? 'text-fg' : 'text-fg-dim',
                )}>
                  {exp.period}
                </p>
              </div>

              <div className="relative pr-4 w-full">
                <p className={cn(
                  'md:hidden block text-2xl mb-4 font-bold font-mono transition-colors duration-500',
                  reached ? 'text-fg' : 'text-fg-dim',
                )}>
                  {exp.period}
                </p>

                <ExperienceCard experience={exp} active={reached} />
              </div>
            </div>
          );
        })}

        <div
          className="absolute left-11 top-0 overflow-hidden w-0.5"
          style={{
            height: lineHeight,
            background: 'linear-gradient(to bottom, transparent 0%, var(--border) 8%, var(--border) 92%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
          }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-0.5 rounded-full"
            style={{
              height: lineFill,
              opacity: lineOpacity,
              background: 'linear-gradient(to bottom, var(--accent-secondary), var(--accent), transparent)',
            }}
          />

          <motion.div
            className="absolute inset-x-0 w-0.5"
            style={{
              height: 80,
              background: 'linear-gradient(to bottom, transparent 0%, var(--accent-secondary) 50%, transparent 100%)',
              filter: 'blur(1px)',
            }}
            animate={{ y: [-80, lineHeight + 80] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
          />

          <motion.div
            className="absolute inset-x-0 w-0.5"
            style={{
              height: 50,
              background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
              filter: 'blur(0.5px)',
            }}
            animate={{ y: [-50, lineHeight + 50] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 2.2 }}
          />

          <motion.div
            className="absolute inset-x-0 w-0.5"
            style={{
              height: 60,
              background: 'linear-gradient(to top, transparent 0%, var(--accent) 50%, transparent 100%)',
              filter: 'blur(1px)',
              opacity: 0.7,
            }}
            animate={{ y: [lineHeight + 60, -60] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', delay: 1.2 }}
          />
        </div>

        {parallelBounds && (() => {
          const originLit = activeIndex >= 1;
          const endLit = activeIndex >= 3;
          return (
            <>
              <div
                className="absolute overflow-hidden"
                style={{
                  left: '66px',
                  top: `${parallelBounds.top}px`,
                  height: `${parallelBounds.height}px`,
                  width: '1.5px',
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0,212,255,0.18) 4%, rgba(0,212,255,0.18) 96%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)',
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute', left: 0, top: 0, width: '1.5px',
                    height: parallelFill,
                    opacity: parallelFillOp,
                    background: 'linear-gradient(to bottom, rgba(0,212,255,0.9), rgba(0,212,255,0.5), transparent)',
                  }}
                />

                <motion.div
                  style={{
                    position: 'absolute', left: 0, width: '1.5px', height: 55,
                    background: 'linear-gradient(to top, transparent 0%, rgba(0,212,255,0.95) 50%, transparent 100%)',
                    filter: 'blur(0.5px)',
                  }}
                  animate={{ y: [parallelBounds.height + 55, -55] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 0.8 }}
                />

                <motion.div
                  style={{
                    position: 'absolute', left: 0, width: '1.5px', height: 35,
                    background: 'linear-gradient(to top, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
                    filter: 'blur(0.5px)', opacity: 0.8,
                  }}
                  animate={{ y: [parallelBounds.height + 35, -35] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 2.5 }}
                />

                <motion.div
                  style={{
                    position: 'absolute', left: 0, width: '1.5px', height: 40,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,212,255,0.7) 50%, transparent 100%)',
                    filter: 'blur(0.5px)', opacity: 0.6,
                  }}
                  animate={{ y: [-40, parallelBounds.height + 40] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'linear', delay: 1.8 }}
                />
              </div>

              <div className="absolute flex items-center" style={{ left: '54px', top: `${parallelBounds.top - 6}px` }}>
                <div
                  style={{
                    width: '14px', height: '1.5px',
                    background: originLit
                      ? 'linear-gradient(to right, rgba(0,212,255,0.6), rgba(0,212,255,0.9))'
                      : 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
                    transition: 'background 500ms ease',
                  }}
                />
                <div
                  className={cn(
                    'w-3 h-3 rounded-full border shrink-0 transition-all duration-500',
                    originLit
                      ? 'border-accent-secondary bg-accent-sub shadow-[0_0_10px_rgba(0,212,255,0.65)]'
                      : 'border-border/40 bg-surface',
                  )}
                  style={{ marginLeft: '-2px' }}
                />
              </div>

              <div className="absolute flex items-center" style={{ left: '54px', top: `${parallelBounds.top + parallelBounds.height - 6}px` }}>
                <div
                  style={{
                    width: '14px', height: '1.5px',
                    background: endLit
                      ? 'linear-gradient(to right, rgba(0,212,255,0.6), rgba(0,212,255,0.9))'
                      : 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
                    transition: 'background 500ms ease',
                  }}
                />
                <div
                  className={cn(
                    'w-3 h-3 rounded-full border shrink-0 transition-all duration-500',
                    endLit
                      ? 'border-accent-secondary bg-accent-sub shadow-[0_0_10px_rgba(0,212,255,0.65)]'
                      : 'border-border/40 bg-surface',
                  )}
                  style={{ marginLeft: '-2px' }}
                />
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}
